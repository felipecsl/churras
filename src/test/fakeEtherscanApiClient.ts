import { EtherscanApiClient } from "../etherscanApiClient";

export class FakeEtherscanApiClient implements EtherscanApiClient {
  private fakeTxList: any;

  constructor(fakeTxList: any) {
    this.fakeTxList = fakeTxList;
  }

  loadTransactions(address: string): Promise<any> {
    return Promise.resolve(this.fakeTxList.result);
  }
}
