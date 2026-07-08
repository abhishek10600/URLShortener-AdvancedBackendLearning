import { logger } from "../../config/logger.js";
import redis from "../../lib/redis.js";
import {
  BLOOM_CAPACITY,
  BLOOM_ERROR_RATE,
  SHORT_URL_BLOOM_FILTER_KEY,
} from "./bloom.constants.js";

export class BloomService {
  async initialize(): Promise<void> {
    try {
      await redis.call("BF.INFO", SHORT_URL_BLOOM_FILTER_KEY);

      logger.info({
        event: "BLOOM_FILTER_ALREADY_EXISTS",
        key: SHORT_URL_BLOOM_FILTER_KEY,
      });

      return;
    } catch {}

    await redis.call(
      "BF.RESERVE",
      SHORT_URL_BLOOM_FILTER_KEY,
      BLOOM_ERROR_RATE,
      BLOOM_CAPACITY,
    );

    logger.info({
      event: "BLOOM_FILTER_CREATED",
      key: SHORT_URL_BLOOM_FILTER_KEY,
      capacity: BLOOM_CAPACITY,
      errorRate: BLOOM_ERROR_RATE,
    });
  }

  async add(shortCode: string): Promise<void> {
    await redis.call("BF.ADD", SHORT_URL_BLOOM_FILTER_KEY, shortCode);

    logger.debug({
      event: "BLOOM_ADD",
      shortCode,
    });
  }

  async mightExist(shortCode: string): Promise<boolean> {
    const result = await redis.call(
      "BF.EXISTS",
      SHORT_URL_BLOOM_FILTER_KEY,
      shortCode,
    );

    return Number(result) === 1;
  }
}
