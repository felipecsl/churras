import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import { Network } from "../chain";
import { DEFAULT_BSC_PROVIDER, DEFAULT_ETHEREUM_PROVIDER } from "../constants";
import TokenBalanceResolver from "../token/tokenBalanceResolver";
import "./matchMedia";

test("renders dashboard layout", () => {
  const tokenBalanceResolver = new TokenBalanceResolver(
    Object.fromEntries([
      [Network[Network.ETHEREUM], DEFAULT_ETHEREUM_PROVIDER],
      [Network[Network.BSC], DEFAULT_BSC_PROVIDER],
    ])
  );
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
