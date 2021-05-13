import { Provider } from "@ethersproject/providers";
import { BigNumber, ethers, utils } from "ethers";
import { Network } from "../../chain";
import { NetworkProviderFactory } from "../modulesProvider";
import { ensureValue } from "../util";
import Token from "./token";

export interface TokenBalanceResolver {
  resolveBalance(
    accountAddress: string,
    token: Token
  ): Promise<{ token: Token; balance: any }>;
  ethBalance(accountAddress: string): Promise<number>;
  bnbBalance(accountAddress: string): Promise<number>;
}

export default class DefaultTokenBalanceResolver
  implements TokenBalanceResolver
{
  private readonly networkProviderFactory: NetworkProviderFactory;

  constructor(networkProviderFactory: NetworkProviderFactory) {
    this.networkProviderFactory = networkProviderFactory;
  }

  async resolveBalance(
    accountAddress: string,
    token: Token
  ): Promise<{ token: Token; balance: any }> {
    const tokenAddress = token.address;
    const abi = ["function balanceOf(address owner) view returns (uint256)"];
    const provider = ensureValue(
      this.networkProviderFactory(token.network),
      `Provider not found for network ${token.network}`
    );
    const contract = new ethers.Contract(tokenAddress, abi, provider);
    const balance = await contract.balanceOf(accountAddress);
    return { token, balance: +utils.formatUnits(balance, token.decimals) };
  }

  async ethBalance(accountAddress: string): Promise<number> {
    const balance = await this.balanceOf(
      this.networkProviderFactory(Network[Network.ETHEREUM]),
      accountAddress
    );
    return +utils.formatEther(balance);
  }

  async bnbBalance(accountAddress: string): Promise<number> {
    const balance = await this.balanceOf(
      this.networkProviderFactory(Network[Network.BSC]),
      accountAddress
    );
    return +utils.formatEther(balance);
  }

  private async balanceOf(
    provider: Provider,
    accountAddress: string
  ): Promise<BigNumber> {
    return await provider.getBalance(accountAddress);
  }
}
