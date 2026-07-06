import { Worker } from "bullmq";
import { logger } from "../config/logger.js";
import { cacheWarmerService } from "../modules/url/cache/cache-warmer.container.js";
import { env } from "../config/env.config.js";
import { redisConnection } from "../lib/redis.js";
import { cacheWarmerQueue } from "../queues/cacheWarmerQueue.js";

new Worker(
  cacheWarmerQueue.name,
  async (job) => {
    logger.info({
      event: "CACHE_JOB_RECEIVED",
      jobName: job.name,
      jobId: job.id,
    });

    if (job.name !== "warm-cache") {
      return;
    }

    logger.info({
      event: "CACHE_WARMER_JOB_STARTED",
      jobId: job.id,
    });

    await cacheWarmerService.warmHotUrls(Number(env.WARM_HOT_URLS_LIMIT));

    logger.info({
      event: "CACHE_WARMER_JOB_COMPLETED",
      jobId: job.id,
    });
  },
  {
    connection: redisConnection,
  },
);
