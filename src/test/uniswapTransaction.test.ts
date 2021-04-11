import { Formatter } from "@ethersproject/providers";
import { ethers } from "ethers";
import React from "react";
import { ETHERSCAN_API_KEY } from "../constants";
import SwapTransaction, { isUniswap } from "../transaction/uniswapTransaction";
import { TOKENS } from "./tokenFixtures";

test("Correctly parses uniswap swap transaction", async () => {
  const provider = ethers.getDefaultProvider("homestead", {
    etherscan: ETHERSCAN_API_KEY,
  });
  const swapTransaction = new SwapTransaction(
    TOKENS,
    "0x2959cd3d09cca9b1e302e9feba8b3ba36b0dd75dff95bbfd3a146170d6f97aa2",
    provider
  );
  const formatter = new Formatter();
  const transaction = formatter.transactionResponse({
    blockNumber: "12001451",
    timeStamp: "1615254298",
    hash: "0x2959cd3d09cca9b1e302e9feba8b3ba36b0dd75dff95bbfd3a146170d6f97aa2",
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
    confirmations: "214093",
  });
  const swapResult = await swapTransaction.load(transaction);
  expect(swapResult).toEqual({
    transfers: [
      {
        // 1INCH
        amount: "225.891707515417109037",
        from: "0x6A707ed3d020e8EBc39DfD1cb9a332F5c4420cAF",
        to: "0x26aAd2da94C59524ac0D93F6D6Cbf9071d7086f2",
      },
      {
        // WETH
        amount: "0.524351462401587594",
        from: "0x26aAd2da94C59524ac0D93F6D6Cbf9071d7086f2",
        to: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
      },
      {
        // USDT
        amount: "0.00000000096580434",
        from: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
        to: "0x5ac13261c181a9c3938BfE1b649E65D10F98566B",
      },
      {
        // UNI
        amount: "29.155679483254742122",
        from: "0x5ac13261c181a9c3938BfE1b649E65D10F98566B",
        to: "0x6A707ed3d020e8EBc39DfD1cb9a332F5c4420cAF",
      },
    ],
    transactionFee: 0.03061504844,
    gasPrice: "0.00000012566",
    gasUsed: 243634,
    amountIn: "225.891707515417109037",
    amountOutMin: "29.024199676065787279",
    path: ["1INCH", "WETH", "USDT", "UNI"],
  });
});

test("is Uniswap transaction", () => {
  const formatter = new Formatter();
  const transaction = formatter.transactionResponse({
    blockNumber: "11690390",
    timeStamp: "1611120738",
    hash: "0x1a3dfc00d825218fad7be650aa8ff5cafe0d6a258ff58a5fe81d60141a49e1b5",
    nonce: "4",
    blockHash:
      "0xb53164fe42032f20dc621ca5158b7455f62238b849fcc0609ab45863764807fb",
    transactionIndex: "101",
    from: "0x6a707ed3d020e8ebc39dfd1cb9a332f5c4420caf",
    to: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    value: "0",
    gas: "209880",
    gasPrice: "40000001459",
    isError: "0",
    txreceipt_status: "1",
    input:
      "0x38ed173900000000000000000000000000000000000000000000005c283d4103941000000000000000000000000000000000000000000000000000046e83fa14e714846a00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000006a707ed3d020e8ebc39dfd1cb9a332f5c4420caf000000000000000000000000000000000000000000000000000000006007c43000000000000000000000000000000000000000000000000000000000000000030000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000514910771af9ca656af840dff83e8264ecf986ca",
    contractAddress: "",
    cumulativeGasUsed: "9033453",
    gasUsed: "153276",
    confirmations: "525154",
  });
  expect(isUniswap(transaction)).toBeTruthy();
});

test("is not Uniswap transaction", () => {
  const formatter = new Formatter();
  const transaction = formatter.transactionResponse({
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
  expect(isUniswap(transaction)).toBeFalsy();
});
