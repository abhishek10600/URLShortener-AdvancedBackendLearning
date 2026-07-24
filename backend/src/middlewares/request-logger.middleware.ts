import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger.js";

const INSTANCE_NAME = process.env.HOSTNAME ?? "unknown";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = process.hrtime.bigint();

  res.on("finish", () => {
    const duration = Number(process.hrtime.bigint() - start) / 1_000_000;

    logger.info({
      event: "HTTP_REQUEST",
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      served_by: INSTANCE_NAME,
      ip: req.ip,
      durationMs: Number(duration.toFixed(2)),
    });
  });

  next();
};
