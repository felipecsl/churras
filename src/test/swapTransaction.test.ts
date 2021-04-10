import { ethers, utils } from "ethers";
import React from "react";
import { ETHERSCAN_API_KEY } from "../constants";
import SwapTransaction from "../transaction/swapTransaction";

const TOKENS = [
  {
    symbol: "1INCH",
    name: "1INCH Token",
    decimals: 18,
    address: utils.getAddress("0x111111111117dc0aa78b770fa6a738034120c302"),
    logoURI:
      "https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png",
  },
  {
    symbol: "UNI",
    name: "Uniswawp",
    decimals: 18,
    logoURI: "",
    address: utils.getAddress("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"),
  },
  {
    symbol: "WETH",
    name: "Wrapped Ether",
    address: utils.getAddress("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    address: utils.getAddress("0xdac17f958d2ee523a2206206994597c13d831ec7"),
    decimals: 6,
    logoURI:
      "https://tokens.1inch.exchange/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
];

test("Correctly parses uniswap swap transaction", async () => {
  const provider = ethers.getDefaultProvider("homestead", {
    etherscan: ETHERSCAN_API_KEY,
  });
  const swapTransaction = new SwapTransaction(
    TOKENS,
    "0x2959cd3d09cca9b1e302e9feba8b3ba36b0dd75dff95bbfd3a146170d6f97aa2",
    provider
  );
  const swapResult = await swapTransaction.load();
  expect(swapResult).toEqual({
    gasUsed: 243634,
    amountIn: "225.891707515417109037",
    amountOutMin: "29.155679483254742122",
    path: ["1INCH", "WETH", "USDT", "UNI"],
  });
});
