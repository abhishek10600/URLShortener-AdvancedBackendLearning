import { NextFunction, Request, Response } from "express";
import { env } from "../config/env.config.js";
import { logger } from "../config/logger.js";

export const globalErrorHandler = (
  err: Error & {
    statusCode?: number;
    status?: string;
    isOperational?: boolean;
  },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error = { ...err };
  error.message = err.message;
  error.statusCode = err.statusCode || 500;
  error.status = err.status || "error";

  if (env?.NODE_ENV === "dev") {
    logger.error({
      message: error.message,
      stack: err.stack,
      error,
    });
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
      stack: err.stack,
      error,
    });
  }

  if (error.isOperational) {
    logger.error({
      status: error.status,
      message: error.message,
    });
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }

  logger.error({
    success: false,
    message: "Something went wrong",
  });

  return res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
};
