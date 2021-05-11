import { utils } from "ethers";
import { Express } from "express";
import asyncHandler from "express-async-handler";
import { Logger } from "pino";
import { DEV_API_PORT } from "../constants";
import AccountSnapshot from "./accountSnapshot";

export interface HandlerConfig {
  port: number;
  env: string;
  address: string;
  protocol: string;
}

export default class RequestHandler {
  private readonly app: Express;
  private readonly logger: Logger;
  private readonly accountSnapshot: AccountSnapshot;
  private readonly config: HandlerConfig;
  private readonly allowedOrigins: string;

  constructor(
    app: Express,
    accountSnapshot: AccountSnapshot,
    logger: Logger,
    config: HandlerConfig = {
      port: +(process.env.NODE_PORT || DEV_API_PORT),
      env: process.env.NODE_ENV || "development",
      protocol: "http", // TODO https in prod
      address: process.env.NODE_ADDR || "127.0.0.1",
    }
  ) {
    this.app = app;
    this.logger = logger;
    this.accountSnapshot = accountSnapshot;
    this.config = config;
    this.allowedOrigins =
      config.env === "development"
        ? `http://localhost:3000`
        : `${config.protocol}://stocks.dog`;

    app.get(
      "/address/:address/tokens",
      asyncHandler(this.accountTokensHandler.bind(this))
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

  private async accountTokensHandler(req: any, res: any, next: any) {
    const address = req.params.address;
    this.logger.debug(`Serving GET /address/${address}/tokens`);
    const tokens = await this.accountSnapshot.loadAccount(address);
    res.append("Access-Control-Allow-Origin", this.allowedOrigins);
    res.send(tokens);
  }

  start() {
    const { port, address, env, protocol } = this.config;
    utils.Logger.setLogLevel(utils.Logger.levels.DEBUG);
    this.app.listen(port);
    this.logger.info(
      `Server starting at ${protocol}://${address}:${port}/ in ${env} mode`
    );
  }
}
