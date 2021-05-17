import { Chain, Network } from "../../chain";
import { throwError } from "../util";
import Token from "./token";
import { TOKENS_BY_NETWORK } from "./tokenList";

export default class TokenDatabase {
  readonly network: Network;
  readonly tokensByAddress: Readonly<Record<string, Token>>;
  readonly tokensBySymbol: Readonly<Record<string, Token>>;

  constructor(network: Network) {
    this.network = network;
    const chain =
      network === Network.ETHEREUM ? Chain.ETHEREUM_MAINNET : Chain.BSC_MAINNET;
    this.tokensByAddress = { ...TOKENS_BY_NETWORK[chain] };
    this.tokensBySymbol = Object.fromEntries(
      Object.values(this.tokensByAddress).map((token) => [
        token.symbol,
        token as Token,
      ])
    );
  }

  allTokens(): Token[] {
    return Object.values(this.tokensBySymbol);
  }

  findByAddress(address: string): Token | undefined {
    return this.tokensByAddress[address];
  }

  findBySymbol(symbol: string): Token | undefined {
    return this.tokensBySymbol[symbol];
  }

  findBySymbolOrThrow(
    symbol: string,
    msg: string = `Cannot find token with symbol ${symbol}`
  ): Token {
    return this.findBySymbol(symbol) ?? throwError(msg);
  }

  findByAddressOrThrow(
    address: string,
    msg: string = `Cannot find token with address ${address}`
  ): Token {
    return this.findByAddress(address) ?? throwError(msg);
  }
}
