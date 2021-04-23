import TokenPricesProvider from "./tokenPricesProvider";

export default class EthereumTokenPricesProvider
  implements TokenPricesProvider {
  private readonly apiHost: string;

  constructor(apiHost: string = "https://api.coingecko.com") {
    this.apiHost = apiHost;
  }

  async fetchPrices(tokenAddresses: string[]): Promise<[string, string][]> {
    const addressList = tokenAddresses.join(",");
    const apiUrl = `${this.apiHost}/api/v3/simple/token_price/ethereum?contract_addresses=${addressList}&vs_currencies=usd`;
    const res = await fetch(apiUrl);
    const results = await res.json();
    return Object.entries(
      results
    ).map(([tokenAddress, priceObj]: [string, any]) => [
      tokenAddress,
      priceObj["usd"],
    ]);
  }
}
