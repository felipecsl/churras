export interface TokenPriceResult {
  address: string;
  price: string | undefined;
}

export default interface TokenPricesProvider {
  fetchPrices(tokenAddresses: string[]): Promise<TokenPriceResult[]>;
}
