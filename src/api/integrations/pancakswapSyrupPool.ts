import { Provider } from "@ethersproject/providers";
import { ethers, utils } from "ethers";
import { Network } from "../../chain";
import {
  NetworkProviderFactory,
  TokenDatabaseFactory,
  TokenPriceProviderFactory,
} from "../modulesProvider";
import TokenPricesProvider from "../providers/tokenPricesProvider";
import TokenDatabase from "../token/tokenDatabase";
import { throwError } from "../util";

export interface PancakeswapSyrupPoolInfo {
  staked: number; // Total amount of Cake tokens deposited
  totalDeposit: number; // total USD amount deposited in vault
}

export default class PancakeswapSyrupPool {
  private readonly bscNetworkProvider: Provider;
  private readonly bscTokenPricesProvider: TokenPricesProvider;
  private readonly bscTokenDatabase: TokenDatabase;

  constructor(
    networkProviderFactory: NetworkProviderFactory,
    tokenPricesProviderFactory: TokenPriceProviderFactory,
    tokenDatabaseFactory: TokenDatabaseFactory
  ) {
    this.bscNetworkProvider = networkProviderFactory(Network[Network.BSC]);
    this.bscTokenPricesProvider = tokenPricesProviderFactory(
      Network[Network.BSC]
    );
    this.bscTokenDatabase = tokenDatabaseFactory(Network[Network.BSC]);
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
      "function balanceOf() view returns (uint256)",
      "function totalShares() view returns (uint256)",
    ];
    const contract = new ethers.Contract(
      "0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC", // Cake pool
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
    const cakeAddress =
      this.bscTokenDatabase.findBySymbolOrThrow("Cake").address;
    const cakePrice =
      (await this.bscTokenPricesProvider.fetchPrices([cakeAddress])).map(
        (r) => r.price
      )[0] ?? throwError("Cannot determine CAKE token price");
    const totalDeposit = staked * +cakePrice;
    return { staked, totalDeposit };
  }
}
