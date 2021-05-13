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

export interface AutoFarmStakedVaultInfo {
  lpTokenPair: string; // eg.: AUTO-WBNB LP
  lpTokenPrice: number; // USD price per LP token unit
  lpTokensStaked: number; // Total amount of LP tokens deposited
  totalDeposit: number; // total USD amount deposited in vault
  tokenYield: number; // amount of token yield (pending harvest)
}

const AUTOFARM_VAULT_CONTRACT_ADDRESS =
  "0x0895196562c7868c5be92459fae7f877ed450452";
const AUTOFARM_VAULT_ABI = [
  "function poolInfo(uint256 _pid) view returns (address, uint256, uint256, uint256)",
  "function pendingAUTO(uint256 _pid, address _user) view returns (uint256)",
  "function stakedWantTokens(uint256 _pid, address _user) view returns (uint256)",
];
const LP_TOKEN_ABI = [
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function totalSupply() external view returns (uint)",
  "function decimals() external pure returns (uint8)",
];

// struct PoolInfo {
//     IERC20 want; // Address of the want token.
//     uint256 allocPoint; // How many allocation points assigned to this pool. AUTO to distribute per block.
//     uint256 lastRewardBlock; // Last block number that AUTO distribution occurs.
//     uint256 accAUTOPerShare; // Accumulated AUTO per share, times 1e12. See below.
//     address strat; // Strategy address that will auto compound want tokens
// }
export default class AutoFarmVault {
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

  /** TODO find a way to automatically find all pool ids */
  async loadVaultState(
    poolId: number,
    userAddress: string
  ): Promise<AutoFarmStakedVaultInfo> {
    const { bscNetworkProvider } = this;
    const vaultContract = new ethers.Contract(
      AUTOFARM_VAULT_CONTRACT_ADDRESS,
      AUTOFARM_VAULT_ABI,
      bscNetworkProvider
    );
    // see comments above for PoolInfo struct details
    const [lpToken] = await vaultContract.poolInfo(poolId);
    // AUTO token yield
    const pendingAUTO = await vaultContract.pendingAUTO(poolId, userAddress);
    const staked = await vaultContract.stakedWantTokens(poolId, userAddress);
    const { lpTokenPair, lpTokenPrice } = await this.gatherPoolInfo(lpToken);
    const lpTokensStaked = +utils.formatEther(staked);
    const totalDeposit = lpTokenPrice * lpTokensStaked;
    const tokenYield = +utils.formatEther(pendingAUTO);
    return {
      lpTokenPair,
      lpTokenPrice,
      totalDeposit,
      lpTokensStaked,
      tokenYield,
    };
  }

  private async gatherPoolInfo(
    lpToken: string
  ): Promise<{ lpTokenPair: string; lpTokenPrice: number }> {
    const { bscTokenPricesProvider, bscNetworkProvider, bscTokenDatabase } =
      this;
    const lpTokenContract = new ethers.Contract(
      lpToken,
      LP_TOKEN_ABI,
      bscNetworkProvider
    );
    // 1. fetch token pair for pool
    const token0Address = await lpTokenContract.token0();
    const token1Address = await lpTokenContract.token1();
    const lpDecimals = await lpTokenContract.decimals();
    // 2. fetch reserves for each token
    const [reserve0, reserve1] = await lpTokenContract.getReserves();
    // 3. fetch pool total supply
    const supply = +utils.formatUnits(
      await lpTokenContract.totalSupply(),
      lpDecimals
    );
    // 4. fetch prices for each token
    const prices = await bscTokenPricesProvider.fetchPrices([
      token0Address,
      token1Address,
    ]);
    const findPriceByAddressOrThrow = (addr: string) =>
      prices.find(({ address }) => address === addr)?.price ??
      throwError(`Unable to determine price for LP token ${addr}`);
    const token0Price = findPriceByAddressOrThrow(token0Address);
    const token1Price = findPriceByAddressOrThrow(token1Address);
    // 5. calculate TVL based on each tokens total value (price * reserves)
    const lpTVL =
      +token0Price * +utils.formatEther(reserve0) +
      +token1Price * +utils.formatEther(reserve1);
    // 6. pool token price is TVL divided by total supply
    const lpTokenPrice = lpTVL / supply;
    const token0 = bscTokenDatabase.findByAddressOrThrow(token0Address).symbol;
    const token1 = bscTokenDatabase.findByAddressOrThrow(token1Address).symbol;
    const lpTokenPair = `${token0}-${token1} LP`;
    return { lpTokenPair, lpTokenPrice };
  }
}
