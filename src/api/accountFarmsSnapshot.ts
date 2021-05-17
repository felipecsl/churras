import AutoFarmVault from "./integrations/autoFarmVault";
import PancakeswapSyrupPool from "./integrations/pancakswapSyrupPool";

export default class AccountFarmsSnapshot {
  private readonly autoFarmVault: AutoFarmVault;
  private readonly pancakeswapSyrupPool: PancakeswapSyrupPool;

  constructor(
    autoFarmVault: AutoFarmVault,
    pancakeswapSyrupPool: PancakeswapSyrupPool
  ) {
    this.autoFarmVault = autoFarmVault;
    this.pancakeswapSyrupPool = pancakeswapSyrupPool;
  }

  async loadYieldFarms(accountAddress: string): Promise<Record<string, any>> {
    const { autoFarmVault, pancakeswapSyrupPool } = this;
    const autoFarmVaultState = await autoFarmVault.loadVaultState(
      6,
      accountAddress
    );
    const pancakeswapSyrupPoolInfo = await pancakeswapSyrupPool.poolInfo(
      accountAddress
    );
    return {
      ...{ autoFarm: autoFarmVaultState },
      ...{ pancakeSwap: pancakeswapSyrupPoolInfo },
    };
  }
}
