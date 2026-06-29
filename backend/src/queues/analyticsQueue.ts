import { Queue } from "bullmq";
import { redisConnection } from "../lib/redis.js";

export const analyticsQueue = new Queue("analyticsQueue", {
  connection: redisConnection,
});
