import { NextFunction, Request, Response } from "express";
import { env } from "../../config/env.config.js";
import redis from "../../lib/redis.js";
import { AppError } from "../../utils/common/Errors/AppError.js";
import crypto from "crypto";

const WINDOW_IN_SECONDS = Number(env.LOGIN_RATE_LIMIT_WINDOW) * 60;
const MAX_REQUESTS = Number(env.LOGIN_RATE_LIMIT_SIZE);

export const loginSlidingWindowRateLimit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const identifier = req.ip;

    const key = `login-rate-limit:${identifier}`;

    const now = Date.now();

    const windowStart = now - WINDOW_IN_SECONDS * 1000;

    await redis.zremrangebyscore(key, 0, windowStart);

    const requestCount = await redis.zcard(key);

    if (requestCount >= MAX_REQUESTS) {
      throw new AppError(
        "Too many login attempts. Please try again later.",
        429,
      );
    }

    const member = `${now}-${crypto.randomUUID()}`;

    await redis.zadd(key, now, member);

    await redis.expire(key, WINDOW_IN_SECONDS);

    next();
  } catch (error) {
    next(error);
  }
};
