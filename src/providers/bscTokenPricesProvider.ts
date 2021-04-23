import TokenPricesProvider from "./tokenPricesProvider";

export default class BscTokenPricesProvider implements TokenPricesProvider {
  private readonly apiHost: string;

  constructor(apiHost: string = "https://api.pancakeswap.info") {
    this.apiHost = apiHost;
  }

  async fetchPrices(tokenAddresses: string[]): Promise<[string, string][]> {
    const apiUrl = `${this.apiHost}/api/tokens`;
    const res = await fetch(apiUrl);
    const results = await res.json();
    return Object.entries(results.data)
      .filter(([key]) => tokenAddresses.includes(key))
      .map(([key, value]: [string, any]) => [key, value.price]);
  }
}
