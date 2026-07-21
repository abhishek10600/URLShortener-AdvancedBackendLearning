import "dotenv/config";

// import "./workers/analyticsWorker.js";
// import "./workers/cacheWarmerWorker.js";
import { analyticsWorker } from "./workers/analyticsWorker.js";
import { cacheWarmerWorker } from "./workers/cacheWarmerWorker.js";
import { logger } from "./config/logger.js";
import { cacheWarmerQueue } from "./queues/cacheWarmerQueue.js";
import { env } from "./config/env.config.js";

logger.info({
  event: "WORKER_PROCESS_STARTED",
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
    event: "ANALYTICS_WORKER_READY"
  })
})

analyticsWorker.on("error", (error) => {
  logger.error({
    event: "ANALYTICS_WORKER_ERROR",
    error
  })
})

analyticsWorker.on("closed", () => {
  logger.info({
    event: "ANALYTICS_WORKER_CLOSED",
  })
})

analyticsWorker.on("failed", (job, error) => {
  logger.info({
    event: "ANALYTICS_JOB_FAILED",
    jobId: job?.id,
    error
  })
})

cacheWarmerWorker.on("ready", () => {
  logger.info({
    event: "CACHE_WARMER_JOB_READY"
  })
})

cacheWarmerWorker.on("error", (error) => {
  logger.error({
    event: "CACHE_WARMER_WORKER_ERROR",
    error
  })
})

cacheWarmerWorker.on("closed", () => {
  logger.info({
    event: "CACHE_WARMER_WORKER_CLOSED"
  })
})

cacheWarmerWorker.on("failed", (job, error) => {
  logger.info({
    event: "CACHCE_WARMER_JOB_FAILED",
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
