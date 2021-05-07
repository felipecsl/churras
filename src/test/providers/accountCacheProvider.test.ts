import AccountCacheProvider from "../../providers/accountCacheProvider";
import { ETH_TOKEN } from "../../token/token";
import { WalletToken } from "../../token/walletToken";

test("set and get data", () => {
  const provider = new AccountCacheProvider();
  const token = new WalletToken(ETH_TOKEN, { balance: 23, price: 45 });
  provider.update("foobar", [token]);
  const tokens = provider.get("foobar");
  expect(tokens).toEqual([token]);
});

test("caches data for multiple accounts", () => {
  const provider = new AccountCacheProvider();
  const tokenA = new WalletToken(ETH_TOKEN, { balance: 23, price: 45 });
  const tokenB = new WalletToken(ETH_TOKEN, { balance: 23, price: 45 });
  provider.update("foobar", [tokenA]);
  provider.update("baz", [tokenB]);
  expect(provider.get("foobar")).toEqual([tokenA]);
  expect(provider.get("baz")).toEqual([tokenB]);
  provider.update("baz", [tokenA, tokenB]);
  expect(provider.get("foobar")).toEqual([tokenA]);
  expect(provider.get("baz")).toEqual([tokenA, tokenB]);
});
