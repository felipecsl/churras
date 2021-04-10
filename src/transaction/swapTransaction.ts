import { BaseProvider, Log } from "@ethersproject/providers";
import { BigNumber, utils } from "ethers";
import { Interface, LogDescription } from "ethers/lib/utils";
import swapContractABIs from "../abis";
import Token, { findTokenByAddress } from "../token";

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
    transactionReceipt.logs.forEach((log: Log) => {
      const logDescription = this.parseLog(contractInteraface, log);
      if (logDescription) {
        console.log(logDescription);
      }
      const token = findTokenByAddress(this.tokens, log.address);
      if (token) {
        const amount = utils.formatUnits(BigNumber.from(log.data));
        console.log(`swapped token ${token?.symbol} amount=${amount}`);
      }
    });
  }
}
