import { InfuraProvider } from "@ethersproject/providers";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Network } from "./chain";
import { DEFAULT_BSC_PROVIDER, INFURA_API_KEY } from "./constants";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TokenBalanceResolver from "./token/tokenBalanceResolver";

const ethereumProvider = InfuraProvider.getWebSocketProvider(
  "homestead",
  INFURA_API_KEY
);
const tokenBalanceResolver = new TokenBalanceResolver(
  Object.fromEntries([
    [Network[Network.ETHEREUM], ethereumProvider],
    [Network[Network.BSC], DEFAULT_BSC_PROVIDER],
  ])
);
ReactDOM.render(
  <React.StrictMode>
    <App tokenBalanceResolver={tokenBalanceResolver} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
