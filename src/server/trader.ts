import { BaseProvider } from "@ethersproject/providers";
import {
  ChainId,
  Fetcher,
  Route,
  Trade,
  TokenAmount,
  TradeType,
  Token,
  Percent,
  Router,
} from "@uniswap/sdk";
import { BigNumber, Contract, utils, Wallet } from "ethers";
import fetch from "node-fetch";
import { abi as IUniswapV2Router02ABI } from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";
import { UNISWAP_ROUTER_ADDRESS } from "../abis";
import { DEFAULT_PROVIDER } from "../constants";

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// 50 bips, or 0.50%
const DEFAULT_SLIPPAGE_TOLERANCE = new Percent("50", "10000");
// 20 minutes from the current Unix time
const DEFAULT_DEADLINE = (now: number) => Math.floor(now / 1000) + 60 * 20;

// Look for DeFi arbitrage opportunities
export default class DeFiTrader {
  tokenListApiEndpoint: string;
  provider: BaseProvider;
  chainId: ChainId;

  constructor(
    tokenListApiEndpoint: string = "https://api.1inch.exchange/v2.0/tokens",
    chainId: ChainId = ChainId.MAINNET
  ) {
    this.tokenListApiEndpoint = tokenListApiEndpoint;
    this.chainId = chainId;
    this.provider = DEFAULT_PROVIDER;
  }

  async fetchTokens(symbol0: string, symbol1: string): Promise<Token[]> {
    const res = await fetch(this.tokenListApiEndpoint);
    const results = (await res.json()) as any;
    const tokens = Object.values(results.tokens);
    const token0 =
      (tokens.find((t: any) => t.symbol === symbol0) as any) ??
      throwError("Could not find token0");
    const token1 =
      (tokens.find((t: any) => t.symbol === symbol1) as any) ??
      throwError("Could not find token1");
    const token0Data = await Fetcher.fetchTokenData(
      this.chainId,
      utils.getAddress(token0.address),
      this.provider
    );
    const token1Data = await Fetcher.fetchTokenData(
      this.chainId,
      utils.getAddress(token1.address),
      this.provider
    );
    return [token0Data, token1Data];
  }

  /**
   * Returns true if the string value is zero in hex
   * @param hexNumberString
   */
  isZero(hexNumberString: string) {
    return /^0x0*$/.test(hexNumberString);
  }

  async buildTrade(
    symbol0: string,
    symbol1: string,
    symbol1Amount: string
  ): Promise<Trade> {
    const [token0, token1] = await this.fetchTokens(symbol0, symbol1);
    const pair = await Fetcher.fetchPairData(token0, token1, this.provider);
    const route = new Route([pair], token1);
    const tradeAmount = new TokenAmount(token1, symbol1Amount);
    return new Trade(route, tradeAmount, TradeType.EXACT_INPUT);
  }

  async sendTrade(wallet: Wallet, trade: Trade, recipient: string) {
    const allowedSlippage = DEFAULT_SLIPPAGE_TOLERANCE;
    const account = wallet.connect(this.provider);
    const deadline = DEFAULT_DEADLINE(Date.now());
    // https://uniswap.org/docs/v2/smart-contracts/router02/
    const contract = new Contract(
      UNISWAP_ROUTER_ADDRESS,
      IUniswapV2Router02ABI,
      account
    );
    const call = Router.swapCallParameters(trade, {
      feeOnTransfer: false,
      allowedSlippage,
      recipient,
      deadline,
    });
    const { methodName, args, value } = call;
    const transaction = await contract[methodName](...args, {
      gasLimit: BigNumber.from(10000), // TODO estimate gas limit
      ...(value && !this.isZero(value)
        ? { value, from: account.address }
        : { from: account.address }),
    });
    const hash = transaction.hash;
    console.log(`Transaction hash=${hash}`);
    const receipt = await transaction.wait();
    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
  }
}
