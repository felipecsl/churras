import Token from "./token";

export class WalletToken implements Token {
  readonly symbol: string;
  readonly name: string;
  readonly address: string;
  readonly decimals: number;
  readonly logoURI: string;
  readonly network: string;
  // TODO: Consider whether or not these should realy be mutable
  balance: number;
  price: number;

  constructor(
    { symbol, name, address, decimals, logoURI, network }: Token,
    { balance, price }: { balance: number; price: number }
  ) {
    this.symbol = symbol;
    this.name = name;
    this.address = address;
    this.decimals = decimals;
    this.logoURI = logoURI;
    this.balance = balance;
    this.network = network;
    this.price = price;
  }

  static toToken(walletToken: WalletToken): Token {
    const { symbol, name, address, decimals, logoURI, network } = walletToken;
    return { symbol, name, address, decimals, logoURI, network };
  }
}
