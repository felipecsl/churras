import { BaseProvider, Log } from "@ethersproject/providers";
import { BigNumber, utils } from "ethers";
import swapContractABIs from "../abis";
import Token, { findTokenByAddress } from "../token";

export interface SwapResult {
  path: string[];
  // amounts in ether unit
  amountIn: string;
  amountOutMin: string;
  // in wei
  gasUsed: number;
}

export default class SwapTransaction {
  private tokens: Token[];
  private addressHash: string;
  private provider: BaseProvider;

  constructor(tokens: Token[], addressHash: string, provider: BaseProvider) {
    this.tokens = tokens;
    this.addressHash = addressHash;
    this.provider = provider;
  }

  async load(): Promise<SwapResult> {
    const transaction = await this.provider.getTransaction(this.addressHash);
    const receipt = await transaction.wait();
    const contractABI = swapContractABIs[receipt.to];
    const contractInterface = new utils.Interface(contractABI);
    // TODO determine correct function name for each contract
    const swapFunctionName = "swapExactTokensForTokens";
    const result = contractInterface.decodeFunctionData(
      swapFunctionName,
      transaction.data
    );
    console.log(result);
    console.log(receipt);
    receipt.logs.forEach((log: Log) => {
      try {
        console.log(contractInterface.parseLog(log));
      } catch (e) {
        console.log(e);
      }
    });
    return {
      gasUsed: +utils.formatUnits(receipt.gasUsed, "wei"),
      amountIn: utils.formatEther(result.amountIn),
      amountOutMin: utils.formatEther(result.amountOutMin),
      path: result.path.map(
        (addr: string) => findTokenByAddress(this.tokens, addr)?.symbol
      ),
    };
  }
}
