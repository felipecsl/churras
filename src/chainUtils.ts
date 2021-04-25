import { ChainId } from "@uniswap/sdk";
import { Chain } from "./chain";

export default class ChainUtils {
  static isMetamaskInstalled() {
    return typeof window.ethereum !== "undefined";
  }

  static isEthereum(chain: number): boolean {
    return [Chain.ETHEREUM_MAINNET, Chain.ETHEREUM_TESTNET].includes(chain);
  }

  static async checkChainId(): Promise<Chain> {
    if (!this.isMetamaskInstalled()) {
      return Chain.UNKNOWN;
    }
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    switch (parseInt(chainId)) {
      case ChainId.MAINNET:
        return Chain.ETHEREUM_MAINNET;
      case ChainId.ROPSTEN:
      case ChainId.RINKEBY:
      case ChainId.GÖRLI:
      case ChainId.KOVAN:
        return Chain.ETHEREUM_TESTNET;
      case 56:
        return Chain.BSC_MAINNET;
      case 97:
        return Chain.BSC_TESTNET;
      default:
        return Chain.UNKNOWN;
    }
  }
}
