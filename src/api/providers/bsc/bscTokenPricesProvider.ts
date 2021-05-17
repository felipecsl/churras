import { Network } from "../../../chain";
import { TokenDatabaseFactory } from "../../modulesProvider";
import { fetchJson } from "../../util";
import TokenPricesProvider, { TokenPriceResult } from "../tokenPricesProvider";

export default class BscTokenPricesProvider extends TokenPricesProvider {
  private readonly apiHost: string;

  constructor(
    tokenDatabaseFactory: TokenDatabaseFactory,
    apiHost: string = "https://api.pancakeswap.info"
  ) {
    super(tokenDatabaseFactory(Network[Network.BSC]));
    this.apiHost = apiHost;
  }

  /** TODO cache results to avoid overloading the API */
  async fetchPrices(tokenAddresses: string[]): Promise<TokenPriceResult[]> {
    const apiUrl = `${this.apiHost}/api/tokens`;
    const results = await fetchJson(apiUrl);
    return Object.entries(results.data)
      .filter(([key]) => tokenAddresses.includes(key))
      .map(([key, value]: [string, any]) => {
        return { address: key, price: value.price };
      });
  }
}
