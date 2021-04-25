import { Chain, Network } from "../chain";
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
}
