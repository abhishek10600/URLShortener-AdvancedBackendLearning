import { performance } from "node:perf_hooks";
import { logger } from "../../../config/logger.js";

export async function measureOperation<T>(
  operation: string,
  fn: () => Promise<T>,
) {
  const start = performance.now();

  try {
    const result = await fn();

    const duration = performance.now() - start;

    logger.info({
      event: "OPERATION",
      operation,
      durationMs: Number(duration.toFixed(2)),
    });

    return result;
  } catch (error) {
    const duration = performance.now() - start;

    logger.error({
      event: "OPERATION_FAILED",
      operation,
      durationMs: Number(duration.toFixed(2)),
      error: error instanceof Error ? error.message : "Unknown error",
    });

    throw error;
  }
}
