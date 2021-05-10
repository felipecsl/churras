import { InfuraProvider } from "@ethersproject/providers";
import express from "express";
import asyncHandler from "express-async-handler";
import { Network } from "../chain";
import { DEFAULT_BSC_PROVIDER, INFURA_API_KEY } from "../constants";
import AccountSnapshot from "./accountSnapshot";
import { Logger } from "@ethersproject/logger";
import DefaultTokenBalanceResolver from "./token/tokenBalanceResolver";

const app = express();
const ethereumProvider = InfuraProvider.getWebSocketProvider(
  "homestead",
  INFURA_API_KEY
);
const tokenBalanceResolver = new DefaultTokenBalanceResolver({
  [Network[Network.ETHEREUM]]: ethereumProvider,
  [Network[Network.BSC]]: DEFAULT_BSC_PROVIDER,
});
const accountSnapshot = new AccountSnapshot({ tokenBalanceResolver });

app.get(
  "/address/:address/tokens",
  asyncHandler(async (req: any, res, next) => {
    const address = req.params.address;
    const tokens = await accountSnapshot.loadAccount(address);
    res.send(tokens);
  })
);

app.post(
  "/",
  asyncHandler(async (req: any, res, next) => {
    const parsed = await requestBodyToJson(req);
    res.send(parsed);
  })
);

function requestBodyToJson(req: any): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (data: any) => {
      // This function is called as chunks of body are received
      body += data;
    });
    req.on("end", () => {
      // This function is called once the body has been fully received
      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch (e) {
        reject(e);
        return;
      }
      resolve(parsed);
    });
  });
}

Logger.setLogLevel(Logger.levels.DEBUG);
app.listen(4000);
console.log("Server running at http://localhost:4000/");
