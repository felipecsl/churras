// Represents an ERC20 token
export default interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

export class WalletToken implements Token {
  readonly symbol: string;
  readonly name: string;
  readonly address: string;
  readonly decimals: number;
  readonly logoURI: string;
  readonly balance: string;
  readonly price: string;

  constructor(
    token: Token,
    { balance, price }: { balance: string; price: string }
  ) {
    const { symbol, name, address, decimals, logoURI } = token;
    this.symbol = symbol;
    this.name = name;
    this.address = address;
    this.decimals = decimals;
    this.logoURI = logoURI;
    this.balance = balance;
    this.price = price;
  }
}

export const ETH_TOKEN = {
  symbol: "ETH",
  name: "Ehereum",
  address: "",
  decimals: 18,
  logoURI:
    "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
} as Token;
