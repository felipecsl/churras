import { Formatter } from "@ethersproject/providers";

const FORMATTER = new Formatter();
export module TransactionFixtures {
  export const UNISWAP_EXACT_TOKENS_FOR_TOKENS_TXN = FORMATTER.transactionResponse(
    {
      blockNumber: "12001451",
      timeStamp: "1615254298",
      hash:
        "0x2959cd3d09cca9b1e302e9feba8b3ba36b0dd75dff95bbfd3a146170d6f97aa2",
      nonce: "70",
      blockHash:
        "0x880816f3f4015389b0444f0aa008c979176fee5aa02859947b022e95c61738af",
      transactionIndex: "74",
      from: "0x6a707ed3d020e8ebc39dfd1cb9a332f5c4420caf",
      to: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
      value: "0",
      gas: "287471",
      gasPrice: "125660000000",
      isError: "0",
      txreceipt_status: "1",
      input:
        "0x38ed173900000000000000000000000000000000000000000000000c3ee08f28e2dfa22d00000000000000000000000000000000000000000000000192caabd41de8ad8f00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000006a707ed3d020e8ebc39dfd1cb9a332f5c4420caf000000000000000000000000000000000000000000000000000000006046d7070000000000000000000000000000000000000000000000000000000000000004000000000000000000000000111111111117dc0aa78b770fa6a738034120c302000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000001f9840a85d5af5bf1d1762f925bdaddc4201f984",
      contractAddress: "",
      cumulativeGasUsed: "6268359",
      gasUsed: "243634",
      confirmations: "219374",
    }
  );
  export const UNISWAP_EXACT_ETH_FOR_TOKENS_TXN = FORMATTER.transactionResponse(
    {
      blockNumber: "12034312",
      timeStamp: "1615693214",
      hash:
        "0x8102131bfe2b21fddbc1a57de3248e0103adbd766f15da2bab44c6a60d28acdf",
      nonce: "74",
      blockHash:
        "0x0fe59724d960dee026ccd051f724aeea8aa952cb8516ef631d6ecd8ab40ab54d",
      transactionIndex: "138",
      from: "0x6a707ed3d020e8ebc39dfd1cb9a332f5c4420caf",
      to: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
      value: "700000000000000000",
      gas: "171669",
      gasPrice: "103000000000",
      isError: "0",
      txreceipt_status: "1",
      input:
        "0x7ff36ab5000000000000000000000000000000000000000000000000000000004eee613300000000000000000000000000000000000000000000000000000000000000800000000000000000000000006a707ed3d020e8ebc39dfd1cb9a332f5c4420caf00000000000000000000000000000000000000000000000000000000604d89d90000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7",
      contractAddress: "",
      cumulativeGasUsed: "10996594",
      gasUsed: "130397",
      confirmations: "187154",
    }
  );
  export const NON_UNISWAP_TXN = FORMATTER.transactionResponse({
    blockNumber: "11690376",
    timeStamp: "1611120512",
    hash: "0xbe0768ea325c834ecf963c6ecbb231490e15c919a7f906d2c60d4dcc297d0653",
    nonce: "3",
    blockHash:
      "0x1894a823e2e6e0a676de32f28c615685037a4964752d26638f9b3428c284d354",
    transactionIndex: "154",
    from: "0x6a707ed3d020e8ebc39dfd1cb9a332f5c4420caf",
    to: "0x6b175474e89094c44da98b954eedeac495271d0f",
    value: "0",
    gas: "48793",
    gasPrice: "39000000000",
    isError: "0",
    txreceipt_status: "1",
    input:
      "0x095ea7b30000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    contractAddress: "",
    cumulativeGasUsed: "12392070",
    gasUsed: "44358",
    confirmations: "525168",
  });
}
