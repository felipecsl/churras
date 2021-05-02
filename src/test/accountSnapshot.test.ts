import AccountSnapshot from "../accountSnapshot";
import FakeTokenPricesProvider from "./providers/fakeTokenPricesProvider";
import FakeTokenBalanceResolver from "./token/fakeTokenBalanceResolver";

test("fetches token prices", async () => {
  const tokenBalanceResolver = new FakeTokenBalanceResolver({
    "0x514910771af9ca656af840dff83e8264ecf986ca": 1234, // LINK
    "0xc00e94cb662c3520282e6f5717214004a7f26888": 9876, // COMP
  });
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
    {
      address: "0x514910771af9ca656af840dff83e8264ecf986ca",
      balance: 1234,
      decimals: 18,
      logoURI:
        "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png",
      name: "Chain Link",
      network: "ETHEREUM",
      price: "43.21",
      symbol: "LINK",
    },
    {
      address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
      balance: 9876,
      decimals: 18,
      logoURI:
        "https://tokens.1inch.exchange/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
      name: "Compound",
      network: "ETHEREUM",
      price: "66.77",
      symbol: "COMP",
    },
    {
      address: "",
      balance: "0",
      decimals: 18,
      logoURI:
        "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
      name: "Ehereum",
      network: "ETHEREUM",
      price: "666",
      symbol: "ETH",
    },
    {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      balance: "0",
      decimals: 18,
      logoURI: "https://bscscan.com/token/images/binance_32.png",
      name: "Binance Coin",
      network: "BSC",
      price: "333",
      symbol: "BNB",
    },
  ]);
});
