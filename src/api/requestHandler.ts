import { utils } from "ethers";
import { Express, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import fs from "fs";
import http from "http";
import https from "https";
import { Logger } from "pino";
import {
  DEV_API_PORT,
  DEV_FRONTEND_PORT,
  PROD_API_HOSTNAME,
} from "../constants";
import AccountFarmsSnapshot from "./accountFarmsSnapshot";
import AccountTokensSnapshot from "./accountTokensSnapshot";

export interface HandlerConfig {
  devApiPort: number;
  env: string;
}

export default class RequestHandler {
  private readonly app: Express;
  private readonly logger: Logger;
  private readonly accountTokensSnapshot: AccountTokensSnapshot;
  private readonly accountFarmsSnapshot: AccountFarmsSnapshot;
  private readonly config: HandlerConfig;
  private readonly allowedOrigins: string;

  constructor(
    app: Express,
    accountTokensSnapshot: AccountTokensSnapshot,
    accountFarmsSnapshot: AccountFarmsSnapshot,
    logger: Logger,
    config: HandlerConfig = {
      devApiPort: +(process.env.NODE_PORT || DEV_API_PORT),
      env: process.env.NODE_ENV || "development",
    }
  ) {
    this.app = app;
    this.logger = logger;
    this.accountTokensSnapshot = accountTokensSnapshot;
    this.accountFarmsSnapshot = accountFarmsSnapshot;
    this.config = config;
    this.allowedOrigins =
      config.env === "development"
        ? `http://localhost:${DEV_FRONTEND_PORT}`
        : `https://churras.org`;

    app.get(
      "/address/:address/tokens",
      asyncHandler(this.accountTokensHandler.bind(this))
    );

    app.get(
      "/address/:address/farms",
      asyncHandler(this.accountYieldFarmingHandler.bind(this))
    );
  }

  private requestBodyToJson(req: any): Promise<any> {
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

  private async accountTokensHandler(req: any, res: any) {
    const address = req.params.address;
    this.logger.debug(`Serving ${req.method} ${req.url}`);
    const tokens = await this.accountTokensSnapshot.loadAccount(address);
    this.appendHeaders(res);
    res.send(tokens);
  }

  private async accountYieldFarmingHandler(req: Request, res: any) {
    const address = req.params.address;
    this.logger.debug(`Serving ${req.method} ${req.url}`);
    const yieldFarms = await this.accountFarmsSnapshot.loadYieldFarms(address);
    this.appendHeaders(res);
    res.send(yieldFarms);
  }

  private appendHeaders(res: Response) {
    res.append("Access-Control-Allow-Origin", this.allowedOrigins);
  }

  start() {
    const { devApiPort: devPort, env } = this.config;
    const { app } = this;
    utils.Logger.setLogLevel(utils.Logger.levels.DEBUG);
    const isProduction = env === "production";
    const port = isProduction ? 443 : devPort;
    const server = isProduction
      ? https.createServer(RequestHandler.setupServerCreds(), app)
      : http.createServer(app);
    server.listen(port, () => {
      this.logger.info(`Server starting on port ${port} in ${env} mode`);
    });
  }

  private static setupServerCreds(): { key: string; cert: string; ca: string } {
    const privateKey = fs.readFileSync(
      `/etc/letsencrypt/live/${PROD_API_HOSTNAME}/privkey.pem`,
      "utf8"
    );
    const certificate = fs.readFileSync(
      `/etc/letsencrypt/live/${PROD_API_HOSTNAME}/cert.pem`,
      "utf8"
    );
    const ca = fs.readFileSync(
      `/etc/letsencrypt/live/${PROD_API_HOSTNAME}/chain.pem`,
      "utf8"
    );
    return {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };
  }
}
