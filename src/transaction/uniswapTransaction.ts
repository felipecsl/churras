import {
  BaseProvider,
  Log,
  TransactionResponse,
} from "@ethersproject/providers";
import { Transaction, utils } from "ethers";
import { Interface, LogDescription } from "ethers/lib/utils";
import ABIS, { uniswapLPContractABI, UNISWAP_ROUTER_ADDRESS } from "../abis";
import Token, { findTokenByAddress } from "../token";

export interface TokenTransfer {
  // eth address
  from: string;
  // eth address
  to: string;
  // eth
  amount: string;
}

export interface SwapResult {
  path: string[];
  // eth
  amountIn: string;
  // eth
  amountOutMin: string;
  // wei
  gasUsed: number;
  // eth
  gasPrice: string;
  // eth
  transactionFee: number;
  transfers: TokenTransfer[];
}

/** Returns true if the provided transaction `to` address is the Uniswap v2 router */
export function isUniswap(transaction: Transaction): Boolean {
  return transaction.to === UNISWAP_ROUTER_ADDRESS;
}

export default class UniswapTransaction {
  private tokens: Token[];
  private transactionAddress: string;
  private provider: BaseProvider;

  constructor(
    tokens: Token[],
    transactionAddress: string,
    provider: BaseProvider
  ) {
    this.tokens = tokens;
    this.transactionAddress = transactionAddress;
    this.provider = provider;
  }

  private parseLog(iface: Interface, log: Log): LogDescription | undefined {
    try {
      return iface.parseLog(log);
    } catch (e) {
      // parseLog throws if we try to load from an invalid log
      // https://github.com/ethers-io/ethers.js/issues/733
      return undefined;
    }
  }

  private parseTransfers(logs: Log[]): TokenTransfer[] {
    // we're assuming that the logs below all belong to uniswap LP token swap contract
    const iface = new utils.Interface(uniswapLPContractABI);
    return logs
      .map((log: Log) => this.parseLog(iface, log))
      .filter((logDescription?: LogDescription) => logDescription)
      .filter(
        (logDescription?: LogDescription) =>
          logDescription?.eventFragment.name === "Transfer"
      )
      .map((logDescription?: LogDescription) => {
        return {
          from: logDescription?.args?.from,
          to: logDescription?.args?.to,
          amount: utils.formatEther(logDescription?.args?.value),
        } as TokenTransfer;
      });
  }

  async load(transaction: TransactionResponse): Promise<SwapResult> {
    const receipt = await this.provider.getTransactionReceipt(transaction.hash);
    const contractABI = ABIS[receipt.to];
    const contractInterface = new utils.Interface(contractABI);
    // TODO try multiple function names here (eg swapETHForExactTokens, swapExactETHForTokens, etc)
    const swapFunctionName = "swapExactTokensForTokens";
    const result = contractInterface.decodeFunctionData(
      swapFunctionName,
      transaction.data
    );
    const transfers = this.parseTransfers(receipt.logs);
    const gasUsed = +utils.formatUnits(receipt.gasUsed, "wei");
    const gasPrice = utils.formatEther(transaction.gasPrice);
    const transactionFee = +gasUsed * +gasPrice;
    const path = result.path.map(
      (addr: string) => findTokenByAddress(this.tokens, addr)?.symbol
    );
    const amountIn = utils.formatEther(result.amountIn);
    const amountOutMin = utils.formatEther(result.amountOutMin);
    return {
      transactionFee,
      gasPrice,
      gasUsed,
      amountIn,
      amountOutMin,
      path,
      transfers,
    };
  }
}
