// Represents an ERC20 token
export default interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

export const ETH_TOKEN = {
  symbol: "ETH",
  name: "Ehereum",
  address: "",
  decimals: 18,
  logoURI:
    "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
} as Token;
