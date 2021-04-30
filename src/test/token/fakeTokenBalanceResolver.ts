import { default as token } from "../../token/token";
import { TokenBalanceResolver } from "../../token/tokenBalanceResolver";

export default class FakeTokenBalanceResolver implements TokenBalanceResolver {
  private readonly addressToBalance: Record<string, any>;

  constructor(addressToBalance: Record<string, any>) {
    this.addressToBalance = addressToBalance;
  }

  ethBalance(accountAddress: string): Promise<string> {
    return Promise.resolve("0");
  }

  bnbBalance(accountAddress: string): Promise<string> {
    return Promise.resolve("0");
  }

  resolveBalance(
    accountAddress: string,
    token: token
  ): Promise<{ token: token; balance: any }> {
    const balance = this.addressToBalance[token.address] || 0;
    return Promise.resolve({ token, balance });
  }
}
