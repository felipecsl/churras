import { BaseProvider, Log } from "@ethersproject/providers";
import { utils } from "ethers";
import { Interface, LogDescription } from "ethers/lib/utils";
import swapContractABIs from "../abis";
import Token from "../token";

export default class SwapTransaction {
  private tokens: Array<Token>;
  private addressHash: string;
  private provider: BaseProvider;

  constructor(
    tokens: Array<Token>,
    addressHash: string,
    provider: BaseProvider
  ) {
    this.tokens = tokens;
    this.addressHash = addressHash;
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

  async load() {
    const transaction = await this.provider.getTransaction(this.addressHash);
    const transactionReceipt = await transaction.wait();
    console.log(transactionReceipt);
    const contractABI = swapContractABIs[transactionReceipt.to];
    const contractInteraface = new utils.Interface(contractABI);
    // TODO determine correct function name for each contract
    const swapFunctionName = "swapExactTokensForTokens";
    console.log(
      contractInteraface.decodeFunctionData(swapFunctionName, transaction.data)
    );
  }
}
