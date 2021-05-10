import { fetchJson } from "../util";

const ETH_BNB_PRICE_API_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin,ethereum&vs_currencies=usd";

/** Fetch prices for ETH and BNB */
export default class EthBnbPriceFetcher {
  async fetchEthBnbPrice(): Promise<{ eth: string; bnb: string }> {
    const results = await fetchJson(ETH_BNB_PRICE_API_ENDPOINT);
    return {
      eth: results.ethereum.usd,
      bnb: results.binancecoin.usd,
    };
  }
}
