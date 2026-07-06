import "dotenv/config";

import "./workers/analyticsWorker.js";
import "./workers/cacheWarmerWorker.js";
import { logger } from "./config/logger.js";
import { cacheWarmerQueue } from "./queues/cacheWarmerQueue.js";
import { env } from "./config/env.config.js";

logger.info("Workers started");

await cacheWarmerQueue.upsertJobScheduler(
  "cache-warmer",
  {
    every: Number(env.CACHE_WARMER_TIME_EVERY) * 60 * 1000,
  },
  {
    name: "warm-cache",
  },
);

const schedulers = await cacheWarmerQueue.getJobSchedulers();
console.log(schedulers);

logger.info({
  event: "CACHE_WARMER_SCHEDULAR_STARTED",
});
