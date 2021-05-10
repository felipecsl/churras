import { utils } from "ethers";
import { Chain, Network } from "../../chain";
import { ALL_BSC_TOKENS } from "./bscTokenList";
import { ALL_ETHEREUM_TOKENS } from "./ethereumTokenList";
import Token from "./token";

// Make sure all addresses are normalized, set network name
function normalizeTokenList(tokenList: Record<string, any>, network: Network) {
  Object.entries(tokenList).forEach(([key, value]) => {
    delete tokenList[key];
    const normalizedAddress = utils.getAddress(value.address);
    tokenList[normalizedAddress] = value;
    tokenList[normalizedAddress].network = Network[network];
  });
}

normalizeTokenList(ALL_ETHEREUM_TOKENS, Network.ETHEREUM);
normalizeTokenList(ALL_BSC_TOKENS, Network.BSC);

Object.freeze(ALL_ETHEREUM_TOKENS);
Object.freeze(ALL_BSC_TOKENS);

export const TOKENS_BY_NETWORK = {} as Record<number, Record<string, Token>>;
TOKENS_BY_NETWORK[Chain.ETHEREUM_MAINNET] = ALL_ETHEREUM_TOKENS;
TOKENS_BY_NETWORK[Chain.ETHEREUM_TESTNET] = {};
TOKENS_BY_NETWORK[Chain.BSC_MAINNET] = ALL_BSC_TOKENS;
TOKENS_BY_NETWORK[Chain.BSC_TESTNET] = {};
TOKENS_BY_NETWORK[Chain.UNKNOWN] = {};
Object.freeze(TOKENS_BY_NETWORK);
