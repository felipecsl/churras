import { Provider } from "@ethersproject/providers";
import { BigNumber, ethers, utils } from "ethers";
import { Network } from "../chain";
import { ensureValue } from "../util";
import Token from "./token";

export interface TokenBalanceResolver {
  resolveBalance(
    accountAddress: string,
    token: Token
  ): Promise<{ token: Token; balance: any }>;
  ethBalance(accountAddress: string): Promise<string>;
  bnbBalance(accountAddress: string): Promise<string>;
}

export default class DefaultTokenBalanceResolver
  implements TokenBalanceResolver {
  private readonly networkProviders: Record<string, Provider>;

  constructor(networkProviders: Record<string, Provider>) {
    this.networkProviders = networkProviders;
  }

  async resolveBalance(
    accountAddress: string,
    token: Token
  ): Promise<{ token: Token; balance: any }> {
    const tokenAddress = token.address;
    const abi = ["function balanceOf(address owner) view returns (uint256)"];
    const provider = ensureValue(
      this.networkProviders[token.network],
      `Provider not found for network ${token.network}`
    );
    const contract = new ethers.Contract(tokenAddress, abi, provider);
    const balance = await contract.balanceOf(accountAddress);
    return { token, balance: +utils.formatUnits(balance, token.decimals) };
  }

  async autoFarmContractPendingAuto(
    poolId: number,
    userAddress: string
  ): Promise<any> {
    const provider = this.networkProviders[Network[Network.BSC]];
    const abi = [
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "poolInfo",
        outputs: [
          { internalType: "contract IERC20", name: "want", type: "address" },
          { internalType: "uint256", name: "allocPoint", type: "uint256" },
          { internalType: "uint256", name: "lastRewardBlock", type: "uint256" },
          { internalType: "uint256", name: "accAUTOPerShare", type: "uint256" },
          { internalType: "address", name: "strat", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_pid", type: "uint256" },
          { internalType: "address", name: "_user", type: "address" },
        ],
        name: "pendingAUTO",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ];
    const contract = new ethers.Contract(
      "0x0895196562c7868c5be92459fae7f877ed450452",
      abi,
      provider
    );
    return await contract.pendingAUTO(poolId, userAddress);
  }

  async ethBalance(accountAddress: string): Promise<string> {
    const balance = await this.balanceOf(
      this.networkProviders[Network[Network.ETHEREUM]],
      accountAddress
    );
    return utils.formatEther(balance);
  }

  async bnbBalance(accountAddress: string): Promise<string> {
    const balance = await this.balanceOf(
      this.networkProviders[Network[Network.BSC]],
      accountAddress
    );
    return utils.formatEther(balance);
  }

  private async balanceOf(
    provider: Provider,
    accountAddress: string
  ): Promise<BigNumber> {
    return await provider.getBalance(accountAddress);
  }
}
