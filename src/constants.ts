import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";

// tokens with total USD amount below this threshold will not be displayed
export const MIN_DISPLAY_AMOUNT = 0.05;
export const ETHERSCAN_API_KEY = "5E9AEFB4BCJZ71MGI2CZV8NP3CF9FM8Q2H";
export const INFURA_API_KEY = "3622ba9a27fe4e389875cd9c3e55670d";
export const BSCSCAN_API_KEY = "MAK2G8HSHDQEICD71FZ6A8125UTG2GAIT6";
const ALCHEMY_API_KEY = "hFVzUX3b0LBuuGVTg6xU-RKxkHyND6ND";
export const DEFAULT_ETHEREUM_PROVIDER = ethers.getDefaultProvider(
  "homestead",
  {
    etherscan: ETHERSCAN_API_KEY,
    alchemy: ALCHEMY_API_KEY,
  }
);
export const DEFAULT_BSC_PROVIDER = new JsonRpcProvider(
  "https://bsc-dataseed1.defibit.io/",
  {
    chainId: 56,
    name: "bsc-mainnet",
  }
);
