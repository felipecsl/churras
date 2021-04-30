import TokenPricesProvider from "../../providers/tokenPricesProvider";

export default class FakeTokenPricesProvider implements TokenPricesProvider {
  private readonly addressToPrice: Record<string, string>;

  constructor(addressToPrice: Record<string, string>) {
    this.addressToPrice = addressToPrice;
  }

  fetchPrices(
    tokenAddresses: string[]
  ): Promise<[string, string | undefined][]> {
    return Promise.resolve(
      tokenAddresses.map((addr) => [addr, this.addressToPrice[addr]])
    );
  }
}
