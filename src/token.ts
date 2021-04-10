export default interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

/* Returns a Token given its contract address or undefined if not found */
export function findTokenByAddress(
  tokens: Token[],
  tokenAddress: string
): Token | undefined {
  return tokens.find((t: Token) => t.address === tokenAddress);
}
