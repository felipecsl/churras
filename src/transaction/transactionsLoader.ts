import { Formatter, TransactionResponse } from "@ethersproject/providers";
import { EtherscanApiClient } from "../etherscanApiClient";

export default class TransactionsLoader {
  private etherscanApiClient: EtherscanApiClient;
  private formatter: Formatter;

  constructor(etherscanApiClient: EtherscanApiClient) {
    this.etherscanApiClient = etherscanApiClient;
    this.formatter = new Formatter();
  }

  /** Loads all transactions for the provided `address` */
  async loadTransactions(address: string): Promise<TransactionResponse[]> {
    const response = await this.etherscanApiClient.loadTransactions(address);
    return response.map((tx: any) => this.formatter.transactionResponse(tx));
  }
}
