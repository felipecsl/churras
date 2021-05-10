import { ChainId } from "@uniswap/sdk";
import { Chain } from "../../chain";

export interface MetaMaskProvider {
  requestAccounts(): Promise<string[]>;
  isMetaMaskInstalled(): boolean;
  chainId(): Promise<Chain>;
}

export default class DefaultMetaMaskProvider implements MetaMaskProvider {
  async requestAccounts(): Promise<string[]> {
    return await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  }

  isMetaMaskInstalled(): boolean {
    return typeof window.ethereum !== "undefined";
  }

  async chainId(): Promise<Chain> {
    if (!this.isMetaMaskInstalled()) {
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

  static isEthereum(chain: number): boolean {
    return [Chain.ETHEREUM_MAINNET, Chain.ETHEREUM_TESTNET].includes(chain);
  }
}
