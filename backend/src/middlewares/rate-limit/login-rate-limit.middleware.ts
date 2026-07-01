import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redis from "../../lib/redis.js";
import { Request, Response } from "express";
import { env } from "../../config/env.config.js";
import { logger } from "../../config/logger.js";

export const loginRateLimit = rateLimit({
  windowMs: Number(env.LOGIN_RATE_LIMIT_WINDOW) * 60 * 1000,
  max: Number(env.LOGIN_RATE_LIMIT_SIZE),

  standardHeaders: true,
  legacyHeaders: false,

  skipSuccessfulRequests: true,

  store: new RedisStore({
    sendCommand: (...args: string[]) => {
      return redis.call(args[0], ...args.slice(1)) as Promise<any>;
    },

    prefix: "rate-limit:login",
  }),

  handler: (req: Request, res: Response) => {
    logger.warn({
      event: "LOGIN_RATE_LIMIT_EXCEEDED",
      ip: req.ip,
      path: req.originalUrl,
    });
    res.status(429).json({
      success: false,
      message:
        "Login Rate Limit Message: Too many requests. Please try again later",
    });
  },
});
