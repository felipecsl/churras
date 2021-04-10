import { utils } from "ethers";
import { abi as IUniswapV2Router02ABI } from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";

const uniswapRouterContractABI = IUniswapV2Router02ABI;
const oneInchContractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "Error",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "srcToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "dstToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dstReceiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "spentAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "returnAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minReturnAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "guaranteedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "Swapped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IOneInchCaller",
        name: "caller",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "srcToken",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "dstToken",
            type: "address",
          },
          { internalType: "address", name: "srcReceiver", type: "address" },
          { internalType: "address", name: "dstReceiver", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "minReturnAmount", type: "uint256" },
          {
            internalType: "uint256",
            name: "guaranteedAmount",
            type: "uint256",
          },
          { internalType: "uint256", name: "flags", type: "uint256" },
          { internalType: "address", name: "referrer", type: "address" },
          { internalType: "bytes", name: "permit", type: "bytes" },
        ],
        internalType: "struct OneInchExchange.SwapDescription",
        name: "desc",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "targetWithMandatory",
            type: "uint256",
          },
          { internalType: "uint256", name: "gasLimit", type: "uint256" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IOneInchCaller.CallDescription[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "discountedSwap",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "rescueFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOneInchCaller",
        name: "caller",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "srcToken",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "dstToken",
            type: "address",
          },
          { internalType: "address", name: "srcReceiver", type: "address" },
          { internalType: "address", name: "dstReceiver", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "minReturnAmount", type: "uint256" },
          {
            internalType: "uint256",
            name: "guaranteedAmount",
            type: "uint256",
          },
          { internalType: "uint256", name: "flags", type: "uint256" },
          { internalType: "address", name: "referrer", type: "address" },
          { internalType: "bytes", name: "permit", type: "bytes" },
        ],
        internalType: "struct OneInchExchange.SwapDescription",
        name: "desc",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "targetWithMandatory",
            type: "uint256",
          },
          { internalType: "uint256", name: "gasLimit", type: "uint256" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IOneInchCaller.CallDescription[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "swap",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const UNISWAP_ROUTER_ADDRESS = utils.getAddress(
  "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
);
export const ONEINCH_ROUTER_ADDRESS = utils.getAddress(
  "0x111111125434b319222cdbf8c261674adb56f3ae"
);
let ABIS: Record<string, Array<any>> = {};
ABIS[ONEINCH_ROUTER_ADDRESS] = oneInchContractABI;
ABIS[UNISWAP_ROUTER_ADDRESS] = uniswapRouterContractABI;
export default ABIS;
