import { Provider } from "@ethersproject/providers";
import { ethers, utils } from "ethers";
import { Network } from "../chain";
import { ensureValue } from "../util";
import Token from "./token";

export default class TokenBalanceResolver {
  private readonly accountAddress: string;
  private readonly providersByNetwork: Record<string, Provider>;

  constructor(
    accountAddress: string,
    ethereumProvider: Provider,
    bscProvider: Provider
  ) {
    this.accountAddress = accountAddress;
    this.providersByNetwork = Object.fromEntries([
      [Network[Network.ETHEREUM], ethereumProvider],
      [Network[Network.BSC], bscProvider],
    ]);
  }

  async resolveBalance(token: Token): Promise<{ token: Token; balance: any }> {
    const tokenAddress = token.address;
    const abi = ["function balanceOf(address owner) view returns (uint256)"];
    const provider = ensureValue(
      this.providersByNetwork[token.network],
      `Provider not found for network ${token.network}`
    );
    const contract = new ethers.Contract(tokenAddress, abi, provider);
    const balance = await contract.balanceOf(this.accountAddress);
    return { token, balance: +utils.formatUnits(balance, token.decimals) };
  }
}
