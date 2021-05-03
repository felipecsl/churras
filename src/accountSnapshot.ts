import { utils } from "ethers";
import _ from "lodash";
import { Network } from "./chain";
import { DEFAULT_BSC_PROVIDER, DEFAULT_ETHEREUM_PROVIDER } from "./constants";
import BscTokenPricesProvider from "./providers/bscTokenPricesProvider";
import EthereumTokenPricesProvider from "./providers/ethereumTokenPricesProvider";
import TokenPricesProvider from "./providers/tokenPricesProvider";
import EthBnbPriceFetcher from "./token/ethBnbPriceFetcher";
import Token, { BNB_TOKEN, ETH_TOKEN } from "./token/token";
import DefaultTokenBalanceResolver, {
  TokenBalanceResolver,
} from "./token/tokenBalanceResolver";
import TokenDatabase from "./token/tokenDatabase";
import { WalletToken } from "./token/walletToken";
import { groupBy } from "./util";

type EthBnbPricePair = Promise<{ eth: string; bnb: string }>;
type EthBnbPriceProvider = () => EthBnbPricePair;
export type TokenPriceProviderFactory = (
  network: string
) => TokenPricesProvider;
export type TokenDatabaseFactory = (network: string) => TokenDatabase;

const DEFAULT_TOKEN_PRICE_PROVIDERS = Object.fromEntries([
  [Network[Network.ETHEREUM], new EthereumTokenPricesProvider()],
  [Network[Network.BSC], new BscTokenPricesProvider()],
]);
const DEFAULT_TOKEN_DATABASES = Object.fromEntries([
  [Network[Network.ETHEREUM], new TokenDatabase(Network.ETHEREUM)],
  [Network[Network.BSC], new TokenDatabase(Network.BSC)],
]);
const DEFAULT_TOKEN_BALANCE_RESOLVER = new DefaultTokenBalanceResolver(
  Object.fromEntries([
    [Network[Network.ETHEREUM], DEFAULT_ETHEREUM_PROVIDER],
    [Network[Network.BSC], DEFAULT_BSC_PROVIDER],
  ])
);

export default class AccountSnapshot {
  private readonly tokenPriceProviderFactory: TokenPriceProviderFactory;
  private readonly tokenDatabaseFactory: TokenDatabaseFactory;
  private readonly tokenBalanceResolver: TokenBalanceResolver;
  private readonly ethBnbPriceFetcher: EthBnbPriceProvider;

  constructor({
    tokenPriceProviderFactory = (network) =>
      DEFAULT_TOKEN_PRICE_PROVIDERS[network],
    tokenDatabaseFactory = (network) => DEFAULT_TOKEN_DATABASES[network],
    tokenBalanceResolver = DEFAULT_TOKEN_BALANCE_RESOLVER,
    ethBnbPriceFetcher = new EthBnbPriceFetcher().fetchEthBnbPrice,
  }: {
    tokenPriceProviderFactory?: TokenPriceProviderFactory;
    tokenDatabaseFactory?: TokenDatabaseFactory;
    tokenBalanceResolver?: TokenBalanceResolver;
    ethBnbPriceFetcher?: () => EthBnbPricePair;
  } = {}) {
    this.tokenPriceProviderFactory = tokenPriceProviderFactory;
    this.tokenDatabaseFactory = tokenDatabaseFactory;
    this.tokenBalanceResolver = tokenBalanceResolver;
    this.ethBnbPriceFetcher = ethBnbPriceFetcher;
  }

  private async fetchEthBnbTokens(
    accountAddress: string
  ): Promise<{
    eth: WalletToken;
    bnb: WalletToken;
  }> {
    const { tokenBalanceResolver, ethBnbPriceFetcher } = this;
    const ethBnbPrice = await ethBnbPriceFetcher();
    const ethBalance = await tokenBalanceResolver.ethBalance(accountAddress);
    const bnbBalance = await tokenBalanceResolver.bnbBalance(accountAddress);
    return {
      eth: new WalletToken(ETH_TOKEN, {
        balance: +ethBalance.toString(),
        price: +ethBnbPrice.eth,
      }),
      bnb: new WalletToken(BNB_TOKEN, {
        balance: +bnbBalance.toString(),
        price: +ethBnbPrice.bnb,
      }),
    };
  }

  /** Returns all the ERC-20 and BEP-20 tokens found for the provided wallet address */
  async loadAccount(accountAddress: string): Promise<WalletToken[]> {
    const { tokenBalanceResolver } = this;
    // 1. fetch all token balances
    // TODO: default token databases is hardcoded here, probably shouldn't be
    const tokensToBalances = Object.values(DEFAULT_TOKEN_DATABASES)
      .flatMap((db) => db.allTokens())
      .map((t) => tokenBalanceResolver.resolveBalance(accountAddress, t));
    const results = await Promise.all(tokensToBalances);
    // 2. filter results to only the tokens which have a positive balance
    const positiveBalances = results.filter(({ balance }) => balance > 0);
    // 3. fetch the prices for each token with a positive balance
    const positiveBalanceTokens = positiveBalances.map(({ token }) => token);
    const tokenPrices = await this.fetchTokenPrices(positiveBalanceTokens);
    const walletTokens = positiveBalances.map(({ token, balance }) => {
      const price = +(tokenPrices.get(token) as string);
      return new WalletToken(token, { balance, price });
    });
    const ethBnbTokens = await this.fetchEthBnbTokens(accountAddress);
    return [...walletTokens, ...Object.values(ethBnbTokens)];
  }

  /**
   * Given an array of WalletTokens, update their prices with the latest values from the external
   * APIs. Returns a new array of WalletTokens with the updated prices.
   * TODO remove duplication between this and loadAccount()
   */
  async refreshPrices(
    accountAddress: string,
    walletTokens: WalletToken[]
  ): Promise<WalletToken[]> {
    const { tokenBalanceResolver } = this;
    // ETH and BNB prices are fetched further below, separately.
    // Since these tokens have no ERC-20 address, we can't fetch their prices the same way.
    const tokensExceptETHandBNB = walletTokens
      .map(WalletToken.toToken)
      .filter((t) => !["ETH", "BNB"].includes(t.symbol));
    const tokensToBalances = tokensExceptETHandBNB.map((t) =>
      tokenBalanceResolver.resolveBalance(accountAddress, t)
    );
    const results = await Promise.all(tokensToBalances);
    // 2. filter results to only the tokens which have a positive balance
    const positiveBalances = results.filter(({ balance }) => balance > 0);
    // 3. fetch the prices for each token with a positive balance
    const positiveBalanceTokens = positiveBalances.map(({ token }) => token);
    const tokenPrices = await this.fetchTokenPrices(positiveBalanceTokens);
    const keySet = Array.from(tokenPrices.keys());
    const findTokenPrice = (predicate: (t: Token) => boolean) => {
      const key = keySet.find((t) => predicate(t));
      return key && tokenPrices.get(key);
    };
    const updatedTokens = positiveBalances.map(({ token, balance }) => {
      // We cannot simply call `tokenPrices.get(token)` here because the key equality check will fail.
      // Instead, using `isEqual()` will perform a deep comparison (similarly to how Kotlin data classes work)
      const price = +(findTokenPrice((t) => _.isEqual(t, token)) as string);
      return new WalletToken(token, { balance, price });
    });
    const ethBnbTokens = await this.fetchEthBnbTokens(accountAddress);
    return [...updatedTokens, ...Object.values(ethBnbTokens)];
  }

  /* Fetch prices for all the provided tokens. Returns a map of Token to price */
  private async fetchTokenPrices(tokens: Token[]): Promise<Map<Token, string>> {
    const {
      tokenDatabaseFactory: tokenDatabases,
      tokenPriceProviderFactory: networkToPriceProviders,
    } = this;
    // select correct provider and token database based on the tokens network
    const tokensByNetwork = groupBy(tokens, (t) => t.network);
    const tokenToPrice = new Map<Token, string>();
    for (const [network, tokens] of Object.entries(tokensByNetwork)) {
      const priceProvider = networkToPriceProviders(network);
      const tokenDatabase = tokenDatabases(network);
      const tokenAddresses = tokens.map((t) => t.address);
      const prices = await priceProvider.fetchPrices(tokenAddresses);
      prices.forEach(([tokenAddress, price]) => {
        const token =
          tokenDatabase.tokensByAddress[utils.getAddress(tokenAddress)];
        if (token && price) {
          tokenToPrice.set(token, price);
        } else {
          console.error(
            `Unable to find price for token with address ${tokenAddress}`
          );
        }
      });
    }
    return tokenToPrice;
  }
}
