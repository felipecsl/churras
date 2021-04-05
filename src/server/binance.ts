import Binance from "binance-api-node";

export default class BinanceClient {
  client: import("binance-api-node").Binance;

  constructor(binanceApiKey: string, binanceApiSecret: string) {
    this.client = Binance({
      apiKey: binanceApiKey,
      apiSecret: binanceApiSecret,
    });
  }

  async prices(symbol: string) {
    return this.client.prices({ symbol });
  }
}
