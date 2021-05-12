import { default as token } from "../../api/token/token";
import { TokenBalanceResolver } from "../../api/token/tokenBalanceResolver";

export default class FakeTokenBalanceResolver implements TokenBalanceResolver {
  private readonly addressToBalance: Record<string, any>;
  private readonly ethBal: number;
  private readonly bnbBal: number;

  constructor(
    addressToBalance: Record<string, any>,
    {
      ethBalance = 0,
      bnbBalance = 0,
    }: { ethBalance?: number; bnbBalance?: number } = {}
  ) {
    this.addressToBalance = addressToBalance;
    this.ethBal = ethBalance;
    this.bnbBal = bnbBalance;
  }

  ethBalance(accountAddress: string): Promise<number> {
    return Promise.resolve(this.ethBal);
  }

  bnbBalance(accountAddress: string): Promise<number> {
    return Promise.resolve(this.bnbBal);
  }

  resolveBalance(
    accountAddress: string,
    token: token
  ): Promise<{ token: token; balance: any }> {
    const balance = this.addressToBalance[token.address] || 0;
    return Promise.resolve({ token, balance });
  }
}
