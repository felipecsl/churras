import debug from "debug";
import { utils } from "ethers";
import _ from "lodash";
import AutoFarmVault from "./integrations/autoFarmVault";
import PancakeswapSyrupPool from "./integrations/pancakswapSyrupPool";
import {
  EthBnbPricePair,
  EthBnbPriceProvider,
  TokenDatabaseFactory,
  TokenPriceProviderFactory,
} from "./modulesProvider";
import { AccountTokensProvider } from "./providers/accountTokensProvider";
import Token, { BNB_TOKEN, ETH_TOKEN } from "./token/token";
import { TokenBalanceResolver } from "./token/tokenBalanceResolver";
import { WalletToken } from "./token/walletToken";

export default class AccountTokensSnapshot {
  private readonly tokenPriceProviderFactory: TokenPriceProviderFactory;
  private readonly tokenDatabaseFactory: TokenDatabaseFactory;
  private readonly tokenBalanceResolver: TokenBalanceResolver;
  private readonly ethBnbPriceFetcher: EthBnbPriceProvider;
  private readonly accountTokensProviders: AccountTokensProvider[];
  private readonly log = debug("churras:accountSnapshot");

  constructor({
    tokenPriceProviderFactory,
    tokenDatabaseFactory,
    tokenBalanceResolver,
    ethBnbPriceFetcher,
    accountTokensProviders,
  }: {
    tokenPriceProviderFactory: TokenPriceProviderFactory;
    tokenDatabaseFactory: TokenDatabaseFactory;
    tokenBalanceResolver: TokenBalanceResolver;
    ethBnbPriceFetcher: () => EthBnbPricePair;
    accountTokensProviders: AccountTokensProvider[];
  }) {
    this.tokenPriceProviderFactory = tokenPriceProviderFactory;
    this.tokenDatabaseFactory = tokenDatabaseFactory;
    this.tokenBalanceResolver = tokenBalanceResolver;
    this.ethBnbPriceFetcher = ethBnbPriceFetcher;
    this.accountTokensProviders = accountTokensProviders;
  }

  private async fetchEthBnbTokens(accountAddress: string): Promise<{
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
    const promises = this.accountTokensProviders.flatMap(
      async (atp) => await atp.accountTokens(accountAddress)
    );
    const tokens = _.flatten(await Promise.all(promises));
    return this.refreshTokens(accountAddress, tokens);
  }

  /**
   * Given an array of `Token`s, update their prices and balances with the latest values from the
   * external * APIs. Returns a new array of WalletTokens with the updated prices/balances.
   */
  private async refreshTokens(
    accountAddress: string,
    tokens: Token[]
  ): Promise<WalletToken[]> {
    const { tokenBalanceResolver } = this;
    // ETH and BNB prices are fetched further below, separately.
    // Since these tokens have no ERC-20 address, we can't fetch their prices the same way.
    const tokensExceptETHandBNB = tokens.filter(
      (t) => !["ETH", "BNB"].includes(t.symbol)
    );
    this.log(
      `Resolving balances for ${tokensExceptETHandBNB.length} tokens...`
    );
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
    const { tokenDatabaseFactory, tokenPriceProviderFactory } = this;
    // select correct provider and token database based on the tokens network
    const tokensByNetwork = _.groupBy(tokens, (t) => t.network);
    const tokenToPrice = new Map<Token, string>();
    for (const [network, tokens] of Object.entries(tokensByNetwork)) {
      const priceProvider = tokenPriceProviderFactory(network);
      const tokenDatabase = tokenDatabaseFactory(network);
      const tokenAddresses = tokens.map((t) => t.address);
      const prices = await priceProvider.fetchPrices(tokenAddresses);
      prices.forEach(({ address, price }) => {
        const token = tokenDatabase.tokensByAddress[utils.getAddress(address)];
        if (token && price) {
          tokenToPrice.set(token, price);
        } else {
          console.error(
            `Unable to find price for token with address ${address}`
          );
        }
      });
    }
    return tokenToPrice;
  }
}
