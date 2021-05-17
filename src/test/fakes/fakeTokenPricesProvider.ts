import TokenPricesProvider, {
  TokenPriceResult,
} from "../../api/providers/tokenPricesProvider";
import TokenDatabase from "../../api/token/tokenDatabase";

export default class FakeTokenPricesProvider extends TokenPricesProvider {
  private readonly addressToPrice: Record<string, number>;

  constructor(
    tokenDatabase: TokenDatabase,
    addressToPrice: Record<string, number>
  ) {
    super(tokenDatabase);
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
