import TokenPricesProvider, {
  TokenPriceResult,
} from "../../providers/tokenPricesProvider";

export default class FakeTokenPricesProvider implements TokenPricesProvider {
  private readonly addressToPrice: Record<string, string>;

  constructor(addressToPrice: Record<string, string>) {
    this.addressToPrice = addressToPrice;
  }

  fetchPrices(tokenAddresses: string[]): Promise<TokenPriceResult[]> {
    return Promise.resolve(
      tokenAddresses.map((addr) => {
        return { address: addr, price: this.addressToPrice[addr] };
      })
    );
  }
}
