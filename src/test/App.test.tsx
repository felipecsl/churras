import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import { Chain, Network } from "../chain";
import { DEFAULT_BSC_PROVIDER, DEFAULT_ETHEREUM_PROVIDER } from "../constants";
import AccountCacheProvider from "../providers/accountCacheProvider";
import Token from "../token/token";
import TokenBalanceResolver from "../token/tokenBalanceResolver";
import TokenDatabase from "../token/tokenDatabase";
import FakeMetaMaskProvider from "./fakeMetaMaskProvider";
import "./matchMedia";
import FakeTokenPricesProvider from "./providers/fakeTokenPricesProvider";
import FakeTokenBalanceResolver from "./token/fakeTokenBalanceResolver";

const tokenBalanceResolver = new TokenBalanceResolver(
  Object.fromEntries([
    [Network[Network.ETHEREUM], DEFAULT_ETHEREUM_PROVIDER],
    [Network[Network.BSC], DEFAULT_BSC_PROVIDER],
  ])
);

const flushPromises = () => new Promise(setImmediate);

test("renders basic layout", () => {
  render(
    <App
      networkToPriceProviders={{}}
      tokenDatabases={{}}
      tokenBalanceResolver={tokenBalanceResolver}
    />
  );
  const titleElement = screen.getAllByText(/Dashboard/i);
  expect(titleElement).toHaveLength(3);
  titleElement.forEach((t: any) => expect(t).toBeInTheDocument());
});

test("Caches wallet address and tokens with accountCacheProvider", async () => {
  const accountCacheProvider = new AccountCacheProvider();
  const fakeMetaMaskProvider = new FakeMetaMaskProvider(
    ["0xDEADBEEF"],
    Chain.ETHEREUM_MAINNET
  );
  const token = {
    symbol: "LINK",
    name: "Chain Link",
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  } as Token;
  const fakeTokenBalanceResolver = new FakeTokenBalanceResolver(
    Object.fromEntries([[token.address, 1234]])
  );
  const networkToPriceProviders = Object.fromEntries([
    [
      Network[Network.ETHEREUM],
      new FakeTokenPricesProvider(
        Object.fromEntries([[token.address, "43.21"]])
      ),
    ],
  ]);
  const fakeEthBnbPriceFetcher = () =>
    Promise.resolve({ eth: "666", bnb: "333" });
  render(
    <App
      networkToPriceProviders={networkToPriceProviders}
      tokenDatabases={Object.fromEntries([
        [Network[Network.ETHEREUM], new TokenDatabase(Network.ETHEREUM)],
      ])}
      accountCacheProvider={accountCacheProvider}
      tokenBalanceResolver={fakeTokenBalanceResolver}
      metaMaskProvider={fakeMetaMaskProvider}
      ethBnbPriceFetcher={fakeEthBnbPriceFetcher}
    />
  );
  const connectButton = screen.getAllByText("Connect to MetaMask");
  (connectButton[0] as HTMLButtonElement).click();
  await flushPromises();
  const { accountAddress, tokens } = accountCacheProvider.get();
  expect(accountAddress).toEqual("0xDEADBEEF");
  expect(tokens).toEqual([
    {
      symbol: "LINK",
      name: "Chain Link",
      address: "0x514910771af9ca656af840dff83e8264ecf986ca",
      decimals: 18,
      logoURI:
        "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png",
      balance: 1234,
      price: "43.21",
      network: "ETHEREUM",
    },
    {
      symbol: "ETH",
      name: "Ehereum",
      address: "",
      decimals: 18,
      logoURI:
        "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
      balance: "0",
      price: "666",
      network: "ETHEREUM",
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      decimals: 18,
      logoURI: "https://bscscan.com/token/images/binance_32.png",
      balance: "0",
      price: "333",
      network: "BSC",
    },
  ]);
});
