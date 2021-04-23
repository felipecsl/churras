import { Provider } from "@ethersproject/providers";
import { ethers, utils } from "ethers";
import Token from "./token";

export default class TokenBalanceResolver {
  private readonly accountAddress: string;
  private readonly provider: Provider;

  constructor(accountAddress: string, provider: Provider) {
    this.accountAddress = accountAddress;
    this.provider = provider;
  }

  async resolveBalance(token: Token): Promise<{ token: Token; balance: any }> {
    const tokenAddress = token.address;
    const abi = ["function balanceOf(address owner) view returns (uint256)"];
    const contract = new ethers.Contract(tokenAddress, abi, this.provider);
    const balance = await contract.balanceOf(this.accountAddress);
    return { token, balance: +utils.formatUnits(balance, token.decimals) };
  }
}
