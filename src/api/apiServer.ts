import express from "express";
import expressPino from "express-pino-logger";
import pino from "pino";
import ModulesProvider from "./modulesProvider";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const app = express();
app.use(expressPino({ logger }));
const modulesProvider = new ModulesProvider();
const requestHandler = modulesProvider.newRequestHandler(app, logger);
requestHandler.start();
