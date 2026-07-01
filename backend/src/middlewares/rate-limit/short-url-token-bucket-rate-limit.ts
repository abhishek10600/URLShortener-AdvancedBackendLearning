import { NextFunction, Request, Response } from "express";
import { env } from "../../config/env.config.js";
import { AppError } from "../../utils/common/Errors/AppError.js";
import redis from "../../lib/redis.js";
import { TokenBucketType } from "./types.js";

const CAPACTIY = Number(env.SHORT_URL_TOKEN_BUCKET_CAPACITY);
const REFILL_RATE = Number(env.SHORT_URL_TOKEN_REFILL_RATE);
const REFILL_INTERVAL = Number(env.SHORT_URL_TOKEN_REFILL_INTERVAL);
const TTL = 3600;

export const shortUrlTokenBuckerRateLimit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.userId;

    console.log({ userId });

    if (!userId) {
      throw new AppError("Unauthorized", 401);
    }

    const key = `token-bucket:${userId}`;

    const cachedBucket = await redis.get(key);

    console.log({ cachedBucket });

    let bucket: TokenBucketType;

    if (!cachedBucket) {
      bucket = {
        tokens: CAPACTIY,
        lastRefill: Date.now(),
      };
    } else {
      bucket = JSON.parse(cachedBucket);
    }

    const now = Date.now();

    const elapsed = now - bucket.lastRefill;

    const refillCount = Math.floor(elapsed / REFILL_INTERVAL);

    if (refillCount > 0) {
      bucket.tokens = Math.min(
        CAPACTIY,
        bucket.tokens + refillCount * REFILL_RATE,
      );

      bucket.lastRefill += refillCount * REFILL_INTERVAL;
    }

    if (bucket.tokens <= 0) {
      return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again later",
      });
    }

    bucket.tokens--;

    await redis.set(key, JSON.stringify(bucket), "EX", TTL);

    next();
  } catch (error) {
    next(error);
  }
};
