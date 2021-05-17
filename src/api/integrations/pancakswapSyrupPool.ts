import { Provider } from "@ethersproject/providers";
import { ethers, utils } from "ethers";
import { Network } from "../../chain";
import {
  NetworkProviderFactory,
  TokenPriceProviderFactory,
} from "../modulesProvider";
import TokenPricesProvider from "../providers/tokenPricesProvider";
import { throwError } from "../util";

const CAKE_AUTOCOMPOUNDING_POOL_CONTRACT_ADDRESS =
  "0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC";

export interface PancakeswapSyrupPoolInfo {
  staked: number; // Total amount of Cake tokens deposited
  totalDeposit: number; // total USD amount deposited in vault
}

export default class PancakeswapSyrupPool {
  private readonly bscNetworkProvider: Provider;
  private readonly bscTokenPricesProvider: TokenPricesProvider;

  constructor(
    networkProviderFactory: NetworkProviderFactory,
    tokenPricesProviderFactory: TokenPriceProviderFactory
  ) {
    this.bscNetworkProvider = networkProviderFactory(Network[Network.BSC]);
    this.bscTokenPricesProvider = tokenPricesProviderFactory(
      Network[Network.BSC]
    );
  }

  /* Currently only supports the Cake autocompounding pool */
  async poolInfo(accountAddress: string): Promise<PancakeswapSyrupPoolInfo> {
    const {
      bscNetworkProvider: provider,
      bscTokenPricesProvider: tokenPricesProvider,
    } = this;
    // struct UserInfo {
    //     uint256 shares; // number of shares for a user
    //     uint256 lastDepositedTime; // keeps track of deposited time for potential penalty
    //     uint256 cakeAtLastUserAction; // keeps track of cake deposited at the last user action
    //     uint256 lastUserActionTime; // keeps track of the last user action time
    // }
    const abi = [
      "function userInfo(address user) view returns (uint256, uint256, uint256, uint256)",
      "function balanceOf() view returns (uint256)",
      "function totalShares() view returns (uint256)",
    ];
    const contract = new ethers.Contract(
      CAKE_AUTOCOMPOUNDING_POOL_CONTRACT_ADDRESS,
      abi,
      provider
    );
    const userInfo = await contract.userInfo(accountAddress);
    const balanceOf = await contract.balanceOf();
    const totalShares = await contract.totalShares();
    const shares = +utils.formatEther(userInfo[0]);
    // See logic at https://bscscan.com/address/0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC#code
    // `withdraw()` method for where this calculation is taken from:
    // uint256 currentAmount = (balanceOf().mul(_shares)).div(totalShares);
    const staked =
      (shares * +utils.formatEther(balanceOf)) /
      +utils.formatEther(totalShares);
    const cakePrice =
      (await tokenPricesProvider.fetchPriceBySymbol("Cake")) ??
      throwError("Cannot determine CAKE token price");
    const totalDeposit = staked * +cakePrice;
    return { staked, totalDeposit };
  }
}
