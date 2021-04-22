import { utils } from "ethers";
import { Chain } from "../chain";
import { ALL_BSC_TOKENS } from "./bscTokenList";
import { ALL_ETHEREUM_TOKENS } from "./ethereumTokenList";
import Token from "./token";

// Make sure all addresses are normalized
[ALL_ETHEREUM_TOKENS, ALL_BSC_TOKENS].forEach((tokenList) => {
  for (const [key, value] of Object.entries(tokenList)) {
    delete tokenList[key];
    const normalizedAddress = utils.getAddress(value.address);
    tokenList[normalizedAddress] = value;
    // tokenList[normalizedAddress].address = normalizedAddress;
  }
});
export const TOKENS_BY_NETWORK = {} as Record<number, Record<string, Token>>;
TOKENS_BY_NETWORK[Chain.ETHEREUM_MAINNET] = ALL_ETHEREUM_TOKENS;
TOKENS_BY_NETWORK[Chain.ETHEREUM_TESTNET] = {};
TOKENS_BY_NETWORK[Chain.BSC_MAINNET] = ALL_BSC_TOKENS;
TOKENS_BY_NETWORK[Chain.BSC_TESTNET] = {};
TOKENS_BY_NETWORK[Chain.UNKNOWN] = {};
Object.freeze(TOKENS_BY_NETWORK);
