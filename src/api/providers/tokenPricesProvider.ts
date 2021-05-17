import TokenDatabase from "../token/tokenDatabase";

export interface TokenPriceResult {
  address: string;
  price: number | undefined;
}

export default abstract class TokenPricesProvider {
  protected readonly tokenDatabase: TokenDatabase;

  constructor(tokenDatabase: TokenDatabase) {
    this.tokenDatabase = tokenDatabase;
  }

  /* Batch request prices for multiple tokens at once */
  abstract fetchPrices(tokenAddresses: string[]): Promise<TokenPriceResult[]>;

  async fetchPrice(tokenAddress: string): Promise<number | undefined> {
    return (await this.fetchPrices([tokenAddress])).map((r) => r.price)[0];
  }

  async fetchPriceBySymbol(symbol: string): Promise<number | undefined> {
    const tokenAddress = this.tokenDatabase.findBySymbolOrThrow(symbol).address;
    return await this.fetchPrice(tokenAddress);
  }
}
