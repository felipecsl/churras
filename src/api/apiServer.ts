import { InfuraProvider } from "@ethersproject/providers";
import express from "express";
import expressPino from "express-pino-logger";
import pino from "pino";
import { Network } from "../chain";
import { DEFAULT_BSC_PROVIDER, INFURA_API_KEY } from "../constants";
import AccountSnapshot from "./accountSnapshot";
import RequestHandler from "./requestHandler";
import DefaultTokenBalanceResolver from "./token/tokenBalanceResolver";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const app = express();
app.use(expressPino({ logger }));
const tokenBalanceResolver = new DefaultTokenBalanceResolver({
  [Network[Network.ETHEREUM]]: InfuraProvider.getWebSocketProvider(
    "homestead",
    INFURA_API_KEY
  ),
  [Network[Network.BSC]]: DEFAULT_BSC_PROVIDER,
});
const accountSnapshot = new AccountSnapshot({ tokenBalanceResolver });
const requestHandler = new RequestHandler(app, accountSnapshot, logger);
requestHandler.start();
