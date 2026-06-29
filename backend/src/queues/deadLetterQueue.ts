import { Queue } from "bullmq";
import { redisConnection } from "../lib/redis.js";

export const deadLetterQueue = new Queue("deadLetterQueue", {
  connection: redisConnection,
});
