import { Provider } from "@ethersproject/providers";
import { ethers, utils } from "ethers";
import { ensureValue } from "../util";
import Token from "./token";

export default class TokenBalanceResolver {
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
}
