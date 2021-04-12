import {
  BaseProvider,
  Log,
  TransactionResponse,
} from "@ethersproject/providers";
import { Contract, Transaction, utils } from "ethers";
import { Interface, LogDescription, Result } from "ethers/lib/utils";
import ABIS, { uniswapLPContractABI, UNISWAP_ROUTER_ADDRESS } from "../abis";
import { throwError } from "../server/util";
import Token from "../token";

export interface TokenTransfer {
  // eth address
  from: string;
  // eth address
  to: string;
  // eth
  amount: string;
}

export interface SwapResult {
  // transaction address hash
  hash: string;
  // token path (eg [DAI, WETH, LINK])
  path: string[];
  // eth
  amountIn: string;
  // eth
  amountOutMin: string;
  // wei
  gasUsed: number;
  // gwei
  gasPrice: string;
  // eth
  transactionFee: string;
  transfers: TokenTransfer[];
}

interface ResolvedLog {
  logDescription: LogDescription;
  decimals: number;
}

/** Returns true if the provided transaction `to` address is the Uniswap v2 router */
export function isUniswap(transaction: Transaction): Boolean {
  return transaction.to === UNISWAP_ROUTER_ADDRESS;
}

export default class UniswapTransactionParser {
  // map of (address, Token object)
  private addressesToTokens: Record<string, Token>;
  private provider: BaseProvider;

  constructor(
    addressesToTokens: Record<string, Token>,
    provider: BaseProvider
  ) {
    this.addressesToTokens = addressesToTokens;
    this.provider = provider;
  }

  private ensureToken(address: string): Token {
    return (
      this.addressesToTokens[address] ||
      throwError(`Cannot find output token with address ${address}`)
    );
  }

  private async determineTokenDecimals(address: string): Promise<number> {
    const token = this.addressesToTokens[address];
    if (token) {
      // if we know this token, great! return it and be done
      return token.decimals;
    } else {
      // otherwise, read it from the contract
      const decimalsAbi = [
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ];
      const contract = new Contract(address, decimalsAbi, this.provider);
      return await contract.decimals();
    }
  }

  private async parseLog(
    iface: Interface,
    log: Log
  ): Promise<ResolvedLog | undefined> {
    // log.address points to the ERC20 token that's being transferred during this leg of the swap
    const decimals = await this.determineTokenDecimals(log.address);
    try {
      const logDescription = iface.parseLog(log);
      return { logDescription, decimals };
    } catch (e) {
      // parseLog throws if we try to load from an invalid log
      // https://github.com/ethers-io/ethers.js/issues/733
      return undefined;
    }
  }

  private async parseTransfers(logs: Log[]): Promise<TokenTransfer[]> {
    // we're assuming that the logs below all belong to uniswap LP token swap contract
    const iface = new utils.Interface(uniswapLPContractABI);
    const isTransfer = (result: ResolvedLog | undefined) =>
      result?.logDescription?.eventFragment.name === "Transfer";
    const parsedLogs = logs.map(
      async (log: Log) => await this.parseLog(iface, log)
    );
    return Promise.all(parsedLogs).then(
      (results: (ResolvedLog | undefined)[]) => {
        return results
          .filter(isTransfer)
          .map((rl: ResolvedLog | undefined) => rl as ResolvedLog) // coerce type
          .map((resovelvedLog: ResolvedLog) => {
            const args = resovelvedLog.logDescription.args;
            return {
              from: args.from,
              to: args.to,
              amount: utils.formatUnits(args.value, resovelvedLog.decimals),
            } as TokenTransfer;
          });
      }
    );
  }

  private decodeFunctionData(
    contractInterface: Interface,
    transaction: Transaction
  ): Result | undefined {
    const swapFunctionNames = [
      "swapExactTokensForTokens",
      "swapExactETHForTokens",
    ];
    for (let funcName of swapFunctionNames) {
      try {
        return contractInterface.decodeFunctionData(funcName, transaction.data);
      } catch (err) {
        // If this is not the correct function called, `decodeFunctionData` will throw an error,
        // suppress and try the next one.
      }
    }
    return undefined;
  }

  async parse(transaction: TransactionResponse): Promise<SwapResult> {
    if (!isUniswap(transaction)) {
      throw new Error("Transaction is not a Uniswap swap");
    }
    const receipt = await this.provider.getTransactionReceipt(transaction.hash);
    const contractABI = ABIS[receipt.to];
    const contractInterface = new utils.Interface(contractABI);
    const result =
      this.decodeFunctionData(contractInterface, transaction) ||
      throwError("Failed to parse function data");
    const transfers = await this.parseTransfers(receipt.logs);
    const gasUsed = +utils.formatUnits(receipt.gasUsed, "wei");
    const gasPrice = utils.formatUnits(transaction.gasPrice, "gwei");
    const transactionFee = utils.formatEther(
      receipt.gasUsed.mul(transaction.gasPrice)
    );
    // `result.path` holds an array of ERC20 token addresses
    const path = result.path.map(
      (addr: string) => this.addressesToTokens[addr]?.symbol
    );
    const amountIn = transfers[0]?.amount;
    if (!result.path) {
      throw new Error(`result.path is empty for transaction ${transaction}`);
    }
    const outputTokenAddress = result.path[result.path.length - 1];
    const outputToken =
      this.addressesToTokens[outputTokenAddress] ||
      throwError(`Cannot find output token with address ${outputTokenAddress}`);
    const outputDecimals = await this.determineTokenDecimals(
      outputToken.address
    );
    const amountOutMin = utils.formatUnits(result.amountOutMin, outputDecimals);
    return {
      hash: transaction.hash,
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
