import ModulesProvider from "../api/modulesProvider";
import { ALL_ETHEREUM_TOKENS } from "../api/token/ethereumTokenList";
import { WalletToken } from "../api/token/walletToken";
import FakeAccountTokensProvider from "./fakes/fakeAccountTokensProvider";
import FakeTokenBalanceResolver from "./fakes/fakeTokenBalanceResolver";
import FakeTokenPricesProvider from "./fakes/fakeTokenPricesProvider";

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
  const modulesProvider = new ModulesProvider();
  const accountTokensProviders = [
    new FakeAccountTokensProvider(Object.values(ALL_ETHEREUM_TOKENS)),
  ];
  const accountTokensSnapshot = modulesProvider.newAccountTokensSnapshot({
    tokenPriceProviderFactory,
    ethBnbPriceFetcher,
    tokenBalanceResolver,
    accountTokensProviders,
  });
  const tokens = await accountTokensSnapshot.loadAccount("fakeAccount");
  expect(tokens).toEqual([
    new WalletToken(LINK, { balance: 1234, price: 43.21 }),
    new WalletToken(COMP, { balance: 9876, price: 66.77 }),
    new WalletToken(ETH, { balance: 34.0002323, price: 666 }),
    new WalletToken(BNB, { balance: 203.02032, price: 333 }),
  ]);
});
