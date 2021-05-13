import { BaseProvider } from "@ethersproject/providers";
import { Express } from "express";
import { Logger } from "pino";
import { Network } from "../chain";
import { DEFAULT_BSC_PROVIDER, DEFAULT_ETHEREUM_PROVIDER } from "../constants";
import AccountSnapshot from "./accountSnapshot";
import AutoFarmVault from "./integrations/autoFarmVault";
import PancakeswapSyrupPool from "./integrations/pancakswapSyrupPool";
import { AccountTokensProvider } from "./providers/accountTokensProvider";
import BscAccountTokensProvider from "./providers/bsc/bscAccountTokensProvider";
import BscTokenPricesProvider from "./providers/bsc/bscTokenPricesProvider";
import EthereumAccountTokensProvider from "./providers/ethereum/ethereumAccountTokensProvider";
import EthereumTokenPricesProvider from "./providers/ethereum/ethereumTokenPricesProvider";
import TokenPricesProvider from "./providers/tokenPricesProvider";
import RequestHandler from "./requestHandler";
import EthBnbPriceFetcher from "./token/ethBnbPriceFetcher";
import DefaultTokenBalanceResolver, {
  TokenBalanceResolver,
} from "./token/tokenBalanceResolver";
import TokenDatabase from "./token/tokenDatabase";

export type EthBnbPricePair = Promise<{ eth: string; bnb: string }>;
export type EthBnbPriceProvider = () => EthBnbPricePair;
export type TokenPriceProviderFactory = (
  network: string
) => TokenPricesProvider;
export type TokenDatabaseFactory = (network: string) => TokenDatabase;
export type NetworkProviderFactory = (network: string) => BaseProvider;

const DEFAULT_TOKEN_PRICE_PROVIDERS = {
  [Network[Network.ETHEREUM]]: new EthereumTokenPricesProvider(),
  [Network[Network.BSC]]: new BscTokenPricesProvider(),
};
const DEFAULT_TOKEN_DATABASES = {
  [Network[Network.ETHEREUM]]: new TokenDatabase(Network.ETHEREUM),
  [Network[Network.BSC]]: new TokenDatabase(Network.BSC),
};
const DEFAULT_NETWORK_PROVIDERS = {
  [Network[Network.ETHEREUM]]: DEFAULT_ETHEREUM_PROVIDER,
  [Network[Network.BSC]]: DEFAULT_BSC_PROVIDER,
};

const DEFAULT_TOKEN_DATABASE_FACTORY = (network: string) =>
  DEFAULT_TOKEN_DATABASES[network];
const DEFAULT_TOKEN_PRICE_PROVIDER_FACTORY = (network: string) =>
  DEFAULT_TOKEN_PRICE_PROVIDERS[network];
const DEFAULT_NETWORK_PROVIDER_FACTORY = (network: string) =>
  DEFAULT_NETWORK_PROVIDERS[network];

/* Boring dependency graph/injection glue code */
export default class ModulesProvider {
  readonly tokenPriceProviderFactory = DEFAULT_TOKEN_PRICE_PROVIDER_FACTORY;
  readonly tokenDatabaseFactory = DEFAULT_TOKEN_DATABASE_FACTORY;
  readonly tokenBalanceResolver = new DefaultTokenBalanceResolver(
    DEFAULT_NETWORK_PROVIDER_FACTORY
  );
  readonly ethBnbPriceFetcher = new EthBnbPriceFetcher().fetchEthBnbPrice;
  readonly autoFarmVault = new AutoFarmVault(
    DEFAULT_NETWORK_PROVIDER_FACTORY,
    DEFAULT_TOKEN_PRICE_PROVIDER_FACTORY,
    DEFAULT_TOKEN_DATABASE_FACTORY
  );
  readonly pancakeswapSyrupPool = new PancakeswapSyrupPool(
    DEFAULT_NETWORK_PROVIDER_FACTORY
  );
  readonly accountTokensProviders = [
    new EthereumAccountTokensProvider(
      DEFAULT_TOKEN_DATABASE_FACTORY,
      DEFAULT_NETWORK_PROVIDER_FACTORY
    ),
    new BscAccountTokensProvider(DEFAULT_TOKEN_DATABASE_FACTORY),
  ];

  newAccountSnapshot({
    tokenPriceProviderFactory = this.tokenPriceProviderFactory,
    tokenDatabaseFactory = this.tokenDatabaseFactory,
    tokenBalanceResolver = this.tokenBalanceResolver,
    ethBnbPriceFetcher = this.ethBnbPriceFetcher,
    autoFarmVault = this.autoFarmVault,
    pancakeswapSyrupPool = this.pancakeswapSyrupPool,
    accountTokensProviders = this.accountTokensProviders,
  }: {
    tokenPriceProviderFactory?: TokenPriceProviderFactory;
    tokenDatabaseFactory?: TokenDatabaseFactory;
    tokenBalanceResolver?: TokenBalanceResolver;
    ethBnbPriceFetcher?: () => EthBnbPricePair;
    autoFarmVault?: AutoFarmVault;
    pancakeswapSyrupPool?: PancakeswapSyrupPool;
    accountTokensProviders?: AccountTokensProvider[];
  } = {}): AccountSnapshot {
    return new AccountSnapshot({
      tokenBalanceResolver,
      ethBnbPriceFetcher,
      tokenPriceProviderFactory,
      tokenDatabaseFactory,
      autoFarmVault,
      pancakeswapSyrupPool,
      accountTokensProviders,
    });
  }

  public newRequestHandler(app: Express, logger: Logger): RequestHandler {
    const accountSnapshot = this.newAccountSnapshot();
    return new RequestHandler(app, accountSnapshot, logger);
  }
}
