import redis from "../../../lib/redis.js";

export const setCache = async (key: string, value: string, ttl: number) => {
  await redis.set(key, value, "EX", ttl);
};

export const getCache = async (key: string) => {
  return redis.get(key);
};

export const deleteCache = async (key: string) => {
  await redis.del(key);
};
