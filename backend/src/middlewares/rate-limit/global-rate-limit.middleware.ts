import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redis from "../../lib/redis.js";
import { Request, Response } from "express";
import { env } from "../../config/env.config.js";
import { logger } from "../../config/logger.js";

export const globalRateLimiter = rateLimit({
  windowMs: Number(env.GLOBAL_RATE_LIMIT_WINDOW) * 60 * 1000,
  max: Number(env.GLOBAL_RATE_LIMIT_SIZE),

  standardHeaders: true,
  legacyHeaders: false,

  store: new RedisStore({
    sendCommand: async (...args: string[]) => {
      return redis.call(args[0], ...args.slice(1)) as Promise<any>;
    },

    prefix: "rate-limit:global",
  }),

  handler: (req: Request, res: Response) => {
    logger.warn({
      event: "GLOBAL_RATE_LIMIT_EXCEEDED",
      ip: req.ip,
      path: req.originalUrl,
    });
    res.status(429).json({
      success: false,
      message:
        "Global Rate Limit Message: Too many requests. Please try again later",
    });
  },
});
