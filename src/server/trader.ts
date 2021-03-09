import {
  BaseProvider,
  JsonRpcSigner,
  Web3Provider,
} from "@ethersproject/providers";
import {
  ChainId,
  Fetcher,
  Route,
  Trade,
  TokenAmount,
  TradeType,
  Token,
  Percent,
} from "@uniswap/sdk";
import { Contract, ethers, utils, Wallet } from "ethers";
import fetch from "node-fetch";
import { abi as IUniswapV2Router02ABI } from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";

// 50 bips, or 0.50%
const DEFAULT_SLIPPAGE_TOLERANCE = new Percent("50", "10000");
// 20 minutes from the current Unix time
const DEFAULT_DEADLINE = (now: number) => Math.floor(now / 1000) + 60 * 20;
const WALLET_PRIVATE_KEY = "TBD";

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// Look for DeFi arbitrage opportunities
class DeFiTrader {
  tokenListApiEndpoint: string;
  provider: BaseProvider;
  chainId: ChainId;

  constructor(
    tokenListApiEndpoint: string = "https://api.1inch.exchange/v2.0/tokens",
    chainId: ChainId = ChainId.MAINNET
  ) {
    this.tokenListApiEndpoint = tokenListApiEndpoint;
    this.chainId = chainId;
    this.provider = ethers.getDefaultProvider("homestead", {
      etherscan: "5E9AEFB4BCJZ71MGI2CZV8NP3CF9FM8Q2H",
    });
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

  async getTrade(
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

  async sendTrade(trade: Trade, recipientAddress: string) {
    const pair = trade.route.pairs[0];
    const [token0, token1] = [pair.token0, pair.token1];
    const amountOutMin = trade.minimumAmountOut(DEFAULT_SLIPPAGE_TOLERANCE).raw;
    const path = [token1.address, token0.address];
    const value = trade.inputAmount.raw;
    const signer = Wallet.createRandom(); //new Wallet(WALLET_PRIVATE_KEY, this.provider);
    const account = signer.connect(this.provider);
    const deadline = DEFAULT_DEADLINE(Date.now());
    // https://uniswap.org/docs/v2/smart-contracts/router02/
    const uniswapRouter02 = new Contract(
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      IUniswapV2Router02ABI,
      account
    );
    const transaction = await uniswapRouter02.swapExactETHForTokens(
      amountOutMin,
      path,
      recipientAddress,
      deadline,
      { value }
    );
    const hash = transaction.hash;
    console.log(`Transaction hash=${hash}`);
    const receipt = await transaction.wait();
    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
  }
}

const amount = utils.parseEther("0.001").toString();
const trader = new DeFiTrader();
trader.getTrade("DAI", "WETH", amount).then((trade: Trade) => {
  const executionPrice = trade.executionPrice.toSignificant(6);
  const inputAmount = trade.inputAmount.toSignificant(6);
  const outputAmount = trade.outputAmount.toSignificant(6);
  console.log(
    `WETH/DAI executionPrice=${executionPrice}, input=${inputAmount}, output=${outputAmount}`
  );
  trader.sendTrade(
    trade,
    utils.getAddress("0xd34da143fc2f16a6b303bcacdb2b12d4b9d7c0b6")
  );
});
// Estimate gas amount
// Loop on a few tokens:
// 1. Look up Uniswap trade price for token T - OK
// 2. Look up Binance trade price for token T
// 3. Determine percent difference percentage between exchanges
// 4. Place trade if (difference - fees) > X
// 5. Profit
