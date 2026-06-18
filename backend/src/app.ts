import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import express, { Request, Response } from "express";
import helmet from "helmet";
import { requestLogger } from "./middlewares/request-logger.middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.config.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import { sendResponse } from "./utils/common/response/AppResonse.js";

export const app = express();

app.use(helmet());
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: env?.FRONTEND_URL,
  }),
);
app.use(cookieParser());

app.get("/health", (req: Request, res: Response) => {
  sendResponse(res, 200, {
    success: true,
    message: "Api is working fine",
    data: {
      status: "healthy",
    },
  });
});

app.use(globalErrorHandler);
