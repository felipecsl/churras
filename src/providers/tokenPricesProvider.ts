export default interface TokenPricesProvider {
  fetchPrices(
    tokenAddresses: string[]
  ): Promise<[string, string | undefined][]>;
}
