import AccountTokensSnapshot from "../../api/accountTokensSnapshot";
import { WalletToken } from "../../api/token/walletToken";
import { ChurrasApiClient } from "../../churrasApiClient";

export default class FakeChurrasApiClient implements ChurrasApiClient {
  private readonly accountSnapshot: AccountTokensSnapshot;

  constructor(accountSnapshot: AccountTokensSnapshot) {
    this.accountSnapshot = accountSnapshot;
  }

  accountTokens(accountAddress: string): Promise<WalletToken[]> {
    return this.accountSnapshot.loadAccount(accountAddress);
  }
}
