import "dotenv/config";

import os from "node:os";
import { analyticsWorker } from "./workers/analyticsWorker.js";
import { cacheWarmerWorker } from "./workers/cacheWarmerWorker.js";
import { logger } from "./config/logger.js";
import { cacheWarmerQueue } from "./queues/cacheWarmerQueue.js";
import { env } from "./config/env.config.js";

const workerInstance = os.hostname()

logger.info({
  event: "WORKER_PROCESS_STARTED",
  workerInstance
});

await cacheWarmerQueue.upsertJobScheduler(
  "cache-warmer",
  {
    every: Number(env.CACHE_WARMER_TIME_EVERY) * 60 * 1000,
  },
  {
    name: "warm-cache",
  },
);

logger.info({
  event: "CACHE_WARMER_SCHEDULAR_STARTED"
})

// worker life cycle events

analyticsWorker.on("ready", () => {
  logger.info({
    event: "ANALYTICS_WORKER_READY",
    workerInstance
  })
})

analyticsWorker.on("error", (error) => {
  logger.error({
    event: "ANALYTICS_WORKER_ERROR",
    workerInstance,
    error
  })
})

analyticsWorker.on("closed", () => {
  logger.info({
    event: "ANALYTICS_WORKER_CLOSED",
    workerInstance
  })
})

analyticsWorker.on("failed", (job, error) => {
  logger.info({
    event: "ANALYTICS_JOB_FAILED",
    workerInstance,
    jobId: job?.id,
    error
  })
})

cacheWarmerWorker.on("ready", () => {
  logger.info({
    event: "CACHE_WARMER_JOB_READY",
    workerInstance
  })
})

cacheWarmerWorker.on("error", (error) => {
  logger.error({
    event: "CACHE_WARMER_WORKER_ERROR",
    workerInstance,
    error
  })
})

cacheWarmerWorker.on("closed", () => {
  logger.info({
    event: "CACHE_WARMER_WORKER_CLOSED",
    workerInstance
  })
})

cacheWarmerWorker.on("failed", (job, error) => {
  logger.info({
    event: "CACHCE_WARMER_JOB_FAILED",
    workerInstance,
    jobId: job?.id,
    error
  })
})

// graceful shutdown
async function shutdown(signal: string) {
  logger.info({
    event: "WORKER_SHUTDOWN_STARTED",
    signal
  })

  await Promise.all([
    analyticsWorker.close(),
    cacheWarmerWorker.close()
  ])

  logger.info({
    event: "WORKER_SHUTDOWN_COMPLETED"
  })

  process.exit(0)
}

process.on("SIGINT", () => {
  void shutdown("SIGINT")
})

process.on("SIGTERM", () => {
  void shutdown("SIGTERM")
})
