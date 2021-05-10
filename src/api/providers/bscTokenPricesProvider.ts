import TokenPricesProvider, { TokenPriceResult } from "./tokenPricesProvider";
import { fetchJson } from "../util";

export default class BscTokenPricesProvider implements TokenPricesProvider {
  private readonly apiHost: string;

  constructor(apiHost: string = "https://api.pancakeswap.info") {
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
