import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import express from "express";
import helmet from "helmet";
import { requestLogger } from "./middlewares/request-logger.middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.config.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
// import { globalRateLimiter } from "./middlewares/rate-limit/global-rate-limit.middleware.js";

export const app = express();

app.set("trust proxy", 1);
app.disable("x-powered-by");

app.use(helmet());
app.use(backendInstanceMiddleware);
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: env?.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());

const healthController = new HealthController()

app.use("/live", healthController.live)
app.use("/ready", healthController.ready)
app.use("/health", healthController.health)

// app.use(globalRateLimiter);

import authRouter from "./modules/auth/auth.route.js";
import urlRouter from "./modules/url/url.route.js";
import { HealthController } from "./modules/health-check/health.controller.js";
import { backendInstanceMiddleware } from "./middlewares/backend-instance.middleware.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/urls", urlRouter);

app.use(globalErrorHandler);
