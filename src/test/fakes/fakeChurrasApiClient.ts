import AccountSnapshot from "../../api/accountSnapshot";
import { WalletToken } from "../../api/token/walletToken";
import { ChurrasApiClient } from "../../churrasapiClient";

export default class FakeChurrasApiClient implements ChurrasApiClient {
  private readonly accountSnapshot: AccountSnapshot;

  constructor(accountSnapshot: AccountSnapshot) {
    this.accountSnapshot = accountSnapshot;
  }

  accountTokens(accountAddress: string): Promise<WalletToken[]> {
    return this.accountSnapshot.loadAccount(accountAddress);
  }
}
