import React from "react";
import { Chain } from "../chain";
import { DEFAULT_PROVIDER } from "../constants";
import { TOKENS_BY_NETWORK } from "../token/tokenList";
import UniswapTransactionParser from "../transaction/uniswapTransactionParser";
import { isUniswap } from "../transaction/uniswapTransactionParser";
import { TransactionFixtures } from "./fixtures/transactions";

jest.setTimeout(10000);

test("Correctly parses Uniswap transaction calling swapExactETHForTokens", async () => {
  const uniswapTransactionParser = new UniswapTransactionParser(
    TOKENS_BY_NETWORK[Chain.ETHEREUM_MAINNET],
    DEFAULT_PROVIDER
  );
  const swapResult = await uniswapTransactionParser.parse(
    TransactionFixtures.UNISWAP_EXACT_ETH_FOR_TOKENS_TXN
  );
  expect(swapResult).toEqual({
    amountIn: "0.7",
    gasPrice: "103.0",
    path: ["WETH", "USDT"],
    transactionFee: "0.013430891",
    hash: "0x8102131bfe2b21fddbc1a57de3248e0103adbd766f15da2bab44c6a60d28acdf",
    amountOutMin: "1324.245299",
    gasUsed: 130397,
    transfers: [
      {
        amount: "0.7",
        from: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        to: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
      },
      {
        amount: "1333.542216",
        from: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
        to: "0x6A707ed3d020e8EBc39DfD1cb9a332F5c4420cAF",
      },
    ],
  });
});

test("Correctly parses Uniswap swap transaction calling swapExactTokensForTokens", async () => {
  const uniswapTransactionParser = new UniswapTransactionParser(
    TOKENS_BY_NETWORK[Chain.ETHEREUM_MAINNET],
    DEFAULT_PROVIDER
  );
  const swapResult = await uniswapTransactionParser.parse(
    TransactionFixtures.UNISWAP_EXACT_TOKENS_FOR_TOKENS_TXN
  );
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
        amount: "965.80434",
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
    transactionFee: "0.03061504844",
    gasPrice: "125.66",
    gasUsed: 243634,
    hash: "0x2959cd3d09cca9b1e302e9feba8b3ba36b0dd75dff95bbfd3a146170d6f97aa2",
    amountIn: "225.891707515417109037",
    amountOutMin: "29.024199676065787279",
    path: ["1INCH", "WETH", "USDT", "UNI"],
  });
});

test("throws if transaction is not Uniswap swap", () => {
  const uniswapTransactionParser = new UniswapTransactionParser(
    TOKENS_BY_NETWORK[Chain.ETHEREUM_MAINNET],
    DEFAULT_PROVIDER
  );
  return expect(
    uniswapTransactionParser.parse(TransactionFixtures.NON_UNISWAP_TXN)
  ).rejects.toThrow("Transaction is not a Uniswap swap");
});

test("is Uniswap transaction", () => {
  expect(
    isUniswap(TransactionFixtures.UNISWAP_EXACT_TOKENS_FOR_TOKENS_TXN)
  ).toBeTruthy();
});

test("is not Uniswap transaction", () => {
  expect(isUniswap(TransactionFixtures.NON_UNISWAP_TXN)).toBeFalsy();
});
