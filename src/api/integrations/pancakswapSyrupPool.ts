import { Provider } from "@ethersproject/providers";
import { ethers, utils } from "ethers";
import { Network } from "../../chain";
import { NetworkProviderFactory } from "../modulesProvider";

export interface PancakeswapSyrupPoolInfo {
  staked: number;
  cakeAtLastUserAction: number;
}

export default class PancakeswapSyrupPool {
  private readonly bscNetworkProvider: Provider;

  constructor(networkProviderFactory: NetworkProviderFactory) {
    this.bscNetworkProvider = networkProviderFactory(Network[Network.BSC]);
  }

  async poolInfo(accountAddress: string): Promise<PancakeswapSyrupPoolInfo> {
    const provider = this.bscNetworkProvider;
    // struct UserInfo {
    //     uint256 shares; // number of shares for a user
    //     uint256 lastDepositedTime; // keeps track of deposited time for potential penalty
    //     uint256 cakeAtLastUserAction; // keeps track of cake deposited at the last user action
    //     uint256 lastUserActionTime; // keeps track of the last user action time
    // }
    const abi = [
      "function userInfo(address user) view returns (uint256, uint256, uint256, uint256)",
    ];
    const contract = new ethers.Contract(
      "0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC", // Cake pool
      abi,
      provider
    );
    const userInfo = await contract.userInfo(accountAddress);
    return {
      staked: +utils.formatEther(userInfo[0]),
      cakeAtLastUserAction: +utils.formatEther(userInfo[2]),
    };
  }
}
