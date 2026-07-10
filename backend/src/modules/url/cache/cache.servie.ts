import { env } from "../../../config/env.config.js";
import { logger } from "../../../config/logger.js";
import redis from "../../../lib/redis.js";
import { calculateCacheTTL } from "./cache.helper.js";

export const setCache = async (key: string, value: string, ttl: number) => {
  const ttlWithJitter = calculateCacheTTL(Number(env.URL_CACHE_TTL));

  await redis.set(key, value, "EX", ttlWithJitter);

  logger.debug({
    event: "CACHE_SET",
    key,
    ttl: ttlWithJitter,
  });
};

export const getCache = async (key: string) => {
  // Fixed TTL
  // return redis.get(key);

  // Sliding TTL
  const result = await redis.multi().get(key).expire(key, env.URL_CACHE_TTL).exec();

  if (!result) {
    return null;
  }

  const [[getError, value]] = result;

  if (getError) {
    throw getError;
  }

  return value as string | null;
};

export const deleteCache = async (key: string) => {
  await redis.del(key);

  logger.info({
    event: "CACHE_INVALIDATED",
    key,
  });
};
