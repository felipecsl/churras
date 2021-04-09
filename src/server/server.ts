import { maybeSwapTokens } from "./swap";

// TODO move to config file
function fetchSecrets(): {
  walletPrivateKey: string;
  binanceApiKey: string;
  binanceApiSecret: string;
} {
  const args = process.argv.slice(2);
  if (args.length === 0) throw new Error("Missing wallet private key argument");
  const walletPrivateKey = args[0];
  if (args.length === 1) throw new Error("Missing Binance api key");
  const binanceApiKey = args[1];
  if (args.length === 2) throw new Error("Missing Binance api secret");
  const binanceApiSecret = args[2];
  return { walletPrivateKey, binanceApiKey, binanceApiSecret };
}

const { walletPrivateKey, binanceApiKey, binanceApiSecret } = fetchSecrets();

maybeSwapTokens({
  privateKey: walletPrivateKey,
  token0: "COMP",
  token1: "WETH",
  binanceApiKey: binanceApiKey,
  binanceApiSecret: binanceApiSecret,
  binanceTokenPair: "COMPUSDT",
  amount: "1",
  recipient: "0xd34da143fc2f16a6b303bcacdb2b12d4b9d7c0b6",
  arbitrageThreshold: 0.05, // TODO move to config file
});
