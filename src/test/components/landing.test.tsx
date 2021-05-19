import { render, screen } from "@testing-library/react";
import React from "react";
import AccountCacheProvider from "../../api/providers/accountCacheProvider";
import { Chain } from "../../chain";
import ChurrasApp from "../../components/churrasApp";
import FakeMetaMaskProvider from "../fakes/fakeMetaMaskProvider";
import { flushPromises } from "../testUtil";

// https://stackoverflow.com/questions/54090231/how-to-fix-error-not-implemented-navigation-except-hash-changes
// @ts-ignore
delete window.location;
const mockResponse = jest.fn();
Object.defineProperty(window, "location", {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse,
    },
    assign: mockResponse,
  },
  writable: true,
});

test("renders basic layout", () => {
  const fakeMetaMaskProvider = new FakeMetaMaskProvider(
    ["0xdb38ae75c5f44276803345f7f02e95a0aeef5944"],
    Chain.ETHEREUM_MAINNET
  );
  render(
    <ChurrasApp
      accountCacheProvider={new AccountCacheProvider()}
      metaMaskProvider={fakeMetaMaskProvider}
      chain={Chain.ETHEREUM_MAINNET}
    />
  );
  const button = screen.getAllByText(/Connect to MetaMask/i);
  expect(button).toHaveLength(1);
  button.forEach((t: any) => expect(t).toBeInTheDocument());
});

test("Caches wallet address and tokens with accountCacheProvider", async () => {
  const accountCacheProvider = new AccountCacheProvider();
  const fakeMetaMaskProvider = new FakeMetaMaskProvider(
    ["0xdb38ae75c5f44276803345f7f02e95a0aeef5944"],
    Chain.ETHEREUM_MAINNET
  );
  render(
    <ChurrasApp
      accountCacheProvider={accountCacheProvider}
      metaMaskProvider={fakeMetaMaskProvider}
      chain={Chain.ETHEREUM_MAINNET}
    />
  );
  const connectButton = screen.getAllByText("Connect to MetaMask");
  (connectButton[0] as HTMLButtonElement).click();
  await flushPromises();
  const tokens = accountCacheProvider.get(
    "0xdb38ae75c5f44276803345f7f02e95a0aeef5944"
  );
  expect(tokens).toEqual([]);
  expect(window.location.href).toEqual(
    `#/address/0xdb38ae75c5f44276803345f7f02e95a0aeef5944`
  );
});
