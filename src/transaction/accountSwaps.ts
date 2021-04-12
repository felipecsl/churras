import { TransactionResponse } from "@ethersproject/providers";
import TransactionsLoader from "./transactionsLoader";
import UniswapTransactionParser, {
  isUniswap,
  SwapResult,
} from "./uniswapTransactionParser";

export default class AccountSwaps {
  private transactionsLoader: TransactionsLoader;
  private uniswapTransactionParser: UniswapTransactionParser;

  constructor(
    transactionsLoader: TransactionsLoader,
    uniswapTransactionParser: UniswapTransactionParser
  ) {
    this.transactionsLoader = transactionsLoader;
    this.uniswapTransactionParser = uniswapTransactionParser;
  }

  /* loads all swap transactions for the provided ethereum account `address` */
  async loadAccountSwaps(address: string): Promise<SwapResult[]> {
    const transactions = await this.transactionsLoader.loadTransactions(
      address
    );
    return Promise.all(
      transactions
        .filter(isUniswap)
        .map((t: TransactionResponse) => this.uniswapTransactionParser.parse(t))
    );
  }
}
