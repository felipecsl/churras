import { Trade } from "@uniswap/sdk";
import { utils, Wallet } from "ethers";
import { currencyFormat, percentFormat } from "../api/util";
import BinanceClient from "./binance";
import DeFiTrader from "./trader";

function logTrade(trade: Trade) {
  const executionPrice = trade.executionPrice.toSignificant(6);
  const inputAmount = trade.inputAmount.toSignificant(6);
  const outputAmount = trade.outputAmount.toSignificant(6);
  console.log(
    `Uniswap price=${currencyFormat(
      +executionPrice
    )}, input=${inputAmount}, output=${outputAmount}`
  );
}

async function getBinanceLatestPriceForToken(
  binanceApiKey: string,
  binanceApiSecret: string,
  tokenPair: string
) {
  const binanceClient = new BinanceClient(binanceApiKey, binanceApiSecret);
  const result = await binanceClient.prices(tokenPair);
  return result[tokenPair];
}

// TODO Estimate gas amount
// Loop on a few tokens:
// 1. Look up Uniswap trade price for token T - OK
// 2. Look up Binance trade price for token T - OK
// 3. Determine percent difference between exchanges - OK
// 4. Place trade if (difference - fees) > X
// 5. Profit
export async function maybeSwapTokens({
  privateKey,
  token0,
  token1,
  binanceApiKey,
  binanceApiSecret,
  binanceTokenPair,
  amount,
  recipient,
  arbitrageThreshold,
}: {
  privateKey: string;
  token0: string;
  token1: string;
  binanceApiKey: string;
  binanceApiSecret: string;
  binanceTokenPair: string;
  amount: string;
  recipient: string;
  arbitrageThreshold: number;
}) {
  console.log(`Quoting ${token0}/${token1}...`);
  const deFiTrader = new DeFiTrader();
  const tradeAmount = utils.parseEther(amount).toString();
  const trade = await deFiTrader.buildTrade(token0, token1, tradeAmount);
  logTrade(trade);
  const binancePrice = await getBinanceLatestPriceForToken(
    binanceApiKey,
    binanceApiSecret,
    binanceTokenPair
  );
  console.log(`Binance price: ${currencyFormat(+binancePrice)}`);
  const uniswapPrice = trade.executionPrice.toSignificant(6);
  const priceDiff = currencyFormat(+binancePrice - +uniswapPrice);
  const priceDiffPercentage = +binancePrice / +uniswapPrice - 1;
  console.log(
    `Price difference: ${priceDiff} (${percentFormat(priceDiffPercentage)})`
  );
  if (priceDiffPercentage > arbitrageThreshold) {
    console.log(
      `Difference (${percentFormat(
        priceDiffPercentage
      )}) is over the ${percentFormat(
        arbitrageThreshold
      )} threshold, sending trade...`
    );
    const wallet = new Wallet(privateKey);
    deFiTrader.sendTrade(wallet, trade, utils.getAddress(recipient));
  } else {
    console.log(
      `Difference ${percentFormat(
        priceDiffPercentage
      )} is not over the ${percentFormat(
        arbitrageThreshold
      )} threshold, nothing to do`
    );
  }
}
