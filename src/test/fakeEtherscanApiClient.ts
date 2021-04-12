import { EtherscanApiClient } from "../etherscanApiClient";
import fakeTransactionsEtherscanApiResponse from "./fixtures/fakeTransactionsEtherscanApiResponse.json";

export class FakeEtherscanApiClient implements EtherscanApiClient {
  private fakeTxList: any;

  constructor(fakeTxList: any = fakeTransactionsEtherscanApiResponse) {
    this.fakeTxList = fakeTxList;
  }

  loadTransactions(address: string): Promise<any> {
    return Promise.resolve(this.fakeTxList.result);
  }
}
