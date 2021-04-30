import AccountCacheProvider from "../../providers/accountCacheProvider";
import { ETH_TOKEN } from "../../token/token";
import { WalletToken } from "../../token/walletToken";

test("set and get data", () => {
  const provider = new AccountCacheProvider();
  const token = new WalletToken(ETH_TOKEN, { balance: "23", price: "45" });
  provider.update({ accountAddress: "foobar", tokens: [token] });
  const { accountAddress, tokens } = provider.get();
  expect(accountAddress).toEqual("foobar");
  expect(tokens).toEqual([token]);
});
