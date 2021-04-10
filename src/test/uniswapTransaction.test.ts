import { ethers, utils } from "ethers";
import React from "react";
import { ETHERSCAN_API_KEY } from "../constants";
import SwapTransaction from "../transaction/uniswapTransaction";

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
