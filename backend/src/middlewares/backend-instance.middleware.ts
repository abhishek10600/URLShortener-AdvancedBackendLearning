import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger.js";

const INSTANCE_NAME = process.env.HOSTNAME ?? "unknown";

export const backendInstanceMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.setHeader("X-Backend-Instance", INSTANCE_NAME);

  logger.info({
    served_by: INSTANCE_NAME
  })

  next();
};
