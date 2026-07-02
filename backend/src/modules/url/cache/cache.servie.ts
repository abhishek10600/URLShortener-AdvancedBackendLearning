import { logger } from "../../../config/logger.js";
import redis from "../../../lib/redis.js";

export const setCache = async (key: string, value: string, ttl: number) => {
  await redis.set(key, value, "EX", ttl);

  logger.debug({
    event: "CACHE_SET",
    key,
    ttl,
  });
};

export const getCache = async (key: string) => {
  return redis.get(key);
};

export const deleteCache = async (key: string) => {
  await redis.del(key);

  logger.info({
    event: "CACHE_INVALIDATED",
    key,
  });
};
