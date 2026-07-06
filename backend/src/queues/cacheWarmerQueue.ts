import { Queue } from "bullmq";
import { redisConnection } from "../lib/redis.js";

export const cacheWarmerQueue = new Queue("cacheWarmerQueue", {
  connection: redisConnection,
});
