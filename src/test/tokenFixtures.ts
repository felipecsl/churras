import { utils } from "ethers";

export const TOKENS = [
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
