// Represents an ERC20 token
export default interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}
