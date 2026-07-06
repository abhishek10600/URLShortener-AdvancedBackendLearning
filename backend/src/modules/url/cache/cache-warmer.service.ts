import { env } from "../../../config/env.config.js";
import { logger } from "../../../config/logger.js";
import redis from "../../../lib/redis.js";
import { AppError } from "../../../utils/common/Errors/AppError.js";
import { getShortUrlCacheKey } from "../url.helpers.js";
import { IUrlRepository } from "../url.interface.js";

export class CacheWarmerService {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async warmHotUrls(limit: number): Promise<void> {
    logger.info({
      event: "CACHE_WARMING_STARTED",
      limit,
    });

    const hotUrls = await this.urlRepository.findTopHotUrls(limit);

    console.log({ hotUrls });

    if (hotUrls.length === 0) {
      logger.info({
        event: "CACHE_WARMING_COMPLETED",
        warmedKeys: 0,
      });

      return;
    }

    const TTL = Number(env.HOT_URL_CACHE_TTL) * 60 * 60; // 24 hours

    const pipeline = redis.pipeline();

    for (const url of hotUrls) {
      pipeline.set(
        getShortUrlCacheKey(url.shortCode),
        JSON.stringify({
          shortUrlId: url.id,
          originalUrl: url.originalUrl,
        }),
        "EX",
        TTL,
      );
    }

    const results = await pipeline.exec();

    if (!results) {
      throw new AppError("Redis pipeline execution failed", 400);
    }

    logger.info({
      event: "CACHE_WARMING_COMPLETED",
      warmedKeys: hotUrls.length,
      ttlSeconds: TTL,
    });
  }
}
