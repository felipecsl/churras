import { BaseProvider } from "@ethersproject/providers";
import { BigNumber, utils } from "ethers";
import swapContractABIs from "../abis";
import Token, { findTokenByAddress } from "../token";

export interface SwapResult {
  path: string[];
  // amounts in ether unit
  amountIn: string;
  amountOutMin: string;
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
    const transactionReceipt = await transaction.wait();
    const contractABI = swapContractABIs[transactionReceipt.to];
    const contractInteraface = new utils.Interface(contractABI);
    // TODO determine correct function name for each contract
    const swapFunctionName = "swapExactTokensForTokens";
    const result = contractInteraface.decodeFunctionData(
      swapFunctionName,
      transaction.data
    );
    console.log(result);
    return {
      amountIn: utils.formatEther(BigNumber.from(result.amountIn).toString()),
      amountOutMin: utils.formatEther(
        BigNumber.from(result.amountOutMin).toString()
      ),
      path: result.path.map(
        (addr: string) => findTokenByAddress(this.tokens, addr)?.symbol
      ),
    };
  }
}
