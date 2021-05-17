import { render } from "@testing-library/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import { match } from "react-router-dom";
import ModulesProvider from "../../api/modulesProvider";
import AccountCacheProvider from "../../api/providers/accountCacheProvider";
import { ALL_ETHEREUM_TOKENS } from "../../api/token/ethereumTokenList";
import Token from "../../api/token/token";
import { Chain } from "../../chain";
import AccountDetails, {
  RoutePropsParams,
} from "../../components/accountDetails";
import FakeAccountTokensProvider from "../fakes/fakeAccountTokensProvider";
import FakeChurrasApiClient from "../fakes/fakeChurrasApiClient";
import FakeMetaMaskProvider from "../fakes/fakeMetaMaskProvider";
import FakeTokenBalanceResolver from "../fakes/fakeTokenBalanceResolver";
import FakeTokenPricesProvider from "../fakes/fakeTokenPricesProvider";
import "../matchMedia";
import { flushPromises } from "../testUtil";

test("Caches wallet address and tokens with accountCacheProvider", async () => {
  const accountCacheProvider = new AccountCacheProvider();
  const fakeMetaMaskProvider = new FakeMetaMaskProvider(
    ["0xdb38ae75c5f44276803345f7f02e95a0aeef5944"],
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
  const tokenBalanceResolver = new FakeTokenBalanceResolver({
    [token.address]: 1234,
  });
  const tokenPriceProviderFactory = (_: string) =>
    new FakeTokenPricesProvider({ [token.address]: "43.21" });
  const ethBnbPriceFetcher = () => Promise.resolve({ eth: "666", bnb: "333" });
  const accountTokensProviders = [
    new FakeAccountTokensProvider(Object.values(ALL_ETHEREUM_TOKENS)),
  ];
  const modulesProvider = new ModulesProvider();
  const accountSnapshot = modulesProvider.newAccountTokensSnapshot({
    tokenPriceProviderFactory,
    ethBnbPriceFetcher,
    tokenBalanceResolver,
    accountTokensProviders,
  });
  const fakeApiClient = new FakeChurrasApiClient(accountSnapshot);
  const route = {
    match: {
      params: {
        accountAddress: "0xdb38ae75c5f44276803345f7f02e95a0aeef5944",
      },
    } as match<any>,
  } as RouteComponentProps<RoutePropsParams>;
  render(
    <AccountDetails
      apiClient={fakeApiClient}
      accountCacheProvider={accountCacheProvider}
      metaMaskProvider={fakeMetaMaskProvider}
      chain={Chain.ETHEREUM_MAINNET}
      route={route}
    />
  );
  await flushPromises();
  const tokens = accountCacheProvider.get(
    "0xdb38ae75c5f44276803345f7f02e95a0aeef5944"
  );
  expect(tokens).toEqual([
    {
      symbol: "LINK",
      name: "Chain Link",
      address: "0x514910771af9ca656af840dff83e8264ecf986ca",
      decimals: 18,
      logoURI:
        "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png",
      balance: 1234,
      price: 43.21,
      equity: 53321.14,
      network: "ETHEREUM",
    },
    {
      symbol: "ETH",
      name: "Ehereum",
      address: "",
      decimals: 18,
      logoURI:
        "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
      balance: 0,
      equity: 0,
      price: 666,
      network: "ETHEREUM",
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      decimals: 18,
      logoURI: "https://bscscan.com/token/images/binance_32.png",
      balance: 0,
      price: 333,
      equity: 0,
      network: "BSC",
    },
  ]);
  // re-render component, this time from cached data
  render(
    <AccountDetails
      apiClient={fakeApiClient}
      accountCacheProvider={accountCacheProvider}
      metaMaskProvider={fakeMetaMaskProvider}
      chain={Chain.ETHEREUM_MAINNET}
      route={route}
    />
  );
});
