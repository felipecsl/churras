import { Logger } from "@ethersproject/logger";
import { InfuraProvider } from "@ethersproject/providers";
import express from "express";
import asyncHandler from "express-async-handler";
import expressPino from "express-pino-logger";
import pino from "pino";
import { Network } from "../chain";
import { DEFAULT_BSC_PROVIDER, INFURA_API_KEY } from "../constants";
import AccountSnapshot from "./accountSnapshot";
import DefaultTokenBalanceResolver from "./token/tokenBalanceResolver";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const expressLogger = expressPino({ logger });
const app = express();
app.use(expressLogger);
const port = process.env.NODE_PORT || 4000;
const env = process.env.NODE_ENV || "development";
const address = process.env.NODE_ADDR || "127.0.0.1";
const ethProvider = InfuraProvider.getWebSocketProvider(
  "homestead",
  INFURA_API_KEY
);
const bscProvider = DEFAULT_BSC_PROVIDER;
const tokenBalanceResolver = new DefaultTokenBalanceResolver({
  [Network[Network.ETHEREUM]]: ethProvider,
  [Network[Network.BSC]]: bscProvider,
});
const accountSnapshot = new AccountSnapshot({ tokenBalanceResolver });

app.get(
  "/address/:address/tokens",
  asyncHandler(async (req: any, res, next) => {
    const address = req.params.address;
    logger.debug(`Serving GET /address/${address}/tokens`);
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
app.listen(port);
logger.info(`Server starting at http://${address}:${port}/ in ${env} mode`);
