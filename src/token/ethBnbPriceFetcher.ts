const ETH_BNB_PRICE_API_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin,ethereum&vs_currencies=usd";

/** Fetch prices for ETH and BNB */
export default class EthBnbPriceFetcher {
  async fetchEthBnbPrice(): Promise<{ eth: string; bnb: string }> {
    const res = await fetch(ETH_BNB_PRICE_API_ENDPOINT);
    const results = await res.json();
    return {
      eth: results.ethereum.usd,
      bnb: results.binancecoin.usd,
    };
  }
}
