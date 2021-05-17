import { Network } from "../../../chain";
import { TokenDatabaseFactory } from "../../modulesProvider";
import { fetchJson } from "../../util";
import TokenPricesProvider, { TokenPriceResult } from "../tokenPricesProvider";

export default class EthereumTokenPricesProvider extends TokenPricesProvider {
  private readonly apiHost: string;

  constructor(
    tokenDatabaseFactory: TokenDatabaseFactory,
    apiHost: string = "https://api.coingecko.com"
  ) {
    super(tokenDatabaseFactory(Network[Network.ETHEREUM]));
    this.apiHost = apiHost;
  }

  async fetchPrices(tokenAddresses: string[]): Promise<TokenPriceResult[]> {
    const addressList = tokenAddresses.join(",");
    const apiUrl = `${this.apiHost}/api/v3/simple/token_price/ethereum?contract_addresses=${addressList}&vs_currencies=usd`;
    const results = await fetchJson(apiUrl);
    return Object.entries(results).map(
      ([tokenAddress, priceObj]: [string, any]) => {
        return {
          address: tokenAddress,
          price: priceObj["usd"],
        };
      }
    );
  }
}
