import AccountSnapshot from "../api/accountSnapshot";
import { WalletToken } from "../api/token/walletToken";
import FakeTokenPricesProvider from "./providers/fakeTokenPricesProvider";
import FakeTokenBalanceResolver from "./fakes/fakeTokenBalanceResolver";

const LINK = {
  address: "0x514910771af9ca656af840dff83e8264ecf986ca",
  decimals: 18,
  logoURI:
    "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  name: "Chain Link",
  network: "ETHEREUM",
  symbol: "LINK",
};
const COMP = {
  address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
  decimals: 18,
  logoURI:
    "https://tokens.1inch.exchange/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
  name: "Compound",
  network: "ETHEREUM",
  price: "66.77",
  symbol: "COMP",
};
const ETH = {
  address: "",
  decimals: 18,
  logoURI:
    "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
  name: "Ehereum",
  network: "ETHEREUM",
  symbol: "ETH",
};
const BNB = {
  address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  decimals: 18,
  logoURI: "https://bscscan.com/token/images/binance_32.png",
  name: "Binance Coin",
  network: "BSC",
  symbol: "BNB",
};

test("fetches token prices", async () => {
  const tokenBalanceResolver = new FakeTokenBalanceResolver(
    {
      "0x514910771af9ca656af840dff83e8264ecf986ca": 1234, // LINK
      "0xc00e94cb662c3520282e6f5717214004a7f26888": 9876, // COMP
    },
    { ethBalance: 34.0002323, bnbBalance: 203.02032 }
  );
  const tokenPriceProviderFactory = (_: string) =>
    new FakeTokenPricesProvider({
      "0x514910771af9ca656af840dff83e8264ecf986ca": "43.21", // LINK
      "0xc00e94cb662c3520282e6f5717214004a7f26888": "66.77", // COMP
    });
  const ethBnbPriceFetcher = () => Promise.resolve({ eth: "666", bnb: "333" });
  const accountSnapshot = new AccountSnapshot({
    tokenPriceProviderFactory,
    tokenBalanceResolver,
    ethBnbPriceFetcher,
  });
  const tokens = await accountSnapshot.loadAccount("fakeAccount");
  expect(tokens).toEqual([
    new WalletToken(LINK, { balance: 1234, price: 43.21 }),
    new WalletToken(COMP, { balance: 9876, price: 66.77 }),
    new WalletToken(ETH, { balance: 34.0002323, price: 666 }),
    new WalletToken(BNB, { balance: 203.02032, price: 333 }),
  ]);
});

test("refreshes token prices and balances", async () => {
  const tokenBalanceResolver = new FakeTokenBalanceResolver(
    {
      "0x514910771af9ca656af840dff83e8264ecf986ca": 321, // LINK
      "0xc00e94cb662c3520282e6f5717214004a7f26888": 123, // COMP
    },
    { ethBalance: 34.0002323, bnbBalance: 203.02032 }
  );
  const tokenPriceProviderFactory = (_: string) =>
    new FakeTokenPricesProvider({
      "0x514910771af9ca656af840dff83e8264ecf986ca": "43.21", // LINK
      "0xc00e94cb662c3520282e6f5717214004a7f26888": "66.77", // COMP
    });
  const ethBnbPriceFetcher = () => Promise.resolve({ eth: "666", bnb: "333" });
  const accountSnapshot = new AccountSnapshot({
    tokenPriceProviderFactory,
    tokenBalanceResolver,
    ethBnbPriceFetcher,
  });
  const walletTokens = [
    new WalletToken(COMP, { balance: 0.9, price: 0.34 }),
    new WalletToken(LINK, { balance: 2.1, price: 1.2 }),
  ];
  const tokens = await accountSnapshot.refreshTokens(
    "fakeAccount",
    walletTokens.map(WalletToken.toToken)
  );
  expect(tokens).toEqual([
    new WalletToken(COMP, { balance: 123, price: 66.77 }),
    new WalletToken(LINK, { balance: 321, price: 43.21 }),
    new WalletToken(ETH, { balance: 34.0002323, price: 666 }),
    new WalletToken(BNB, { balance: 203.02032, price: 333 }),
  ]);
});
