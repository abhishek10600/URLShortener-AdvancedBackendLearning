import { logger } from "../../config/logger.js";
import { AppError } from "../../utils/common/Errors/AppError.js";
import { bloomService } from "../bloom/bloom.container.js";
import { LockService } from "../lock/lock.service.js";
import { getCache, setCache } from "./cache/cache.servie.js";
import {
  createShortCode,
  decodeCursor,
  encodeCursor,
  getShortUrlCacheKey,
  parseUrl,
} from "./url.helpers.js";
import { IUrlRepository } from "./url.interface.js";
import { UpdateUrlInputType, UrlInputType } from "./url.schema.js";

export class UrlService {
  constructor(private urlRepo: IUrlRepository, private readonly lockService: LockService) {}

  async createShortUrl(data: UrlInputType, userId: string) {
    const originalUrl = data.originalUrl;

    const parsedOriginalUrl = parseUrl(originalUrl);

    const MAX_RETRIES = 5;

    for (let i = 0; i < MAX_RETRIES; i++) {
      const shortCode = createShortCode();

      const existingShortUrl =
        await this.urlRepo.findShortUrlbyShortCode(shortCode);

      if (existingShortUrl) {
        continue;
      }

      const shortUrl = await this.urlRepo.createShortUrl({
        originalUrl: parsedOriginalUrl,
        userId,
        shortCode,
      });

      try {
        await bloomService.add(shortCode);

        logger.info({
          event: "BLOOM_FILTER_UPDATED",
          shortCode,
        });
      } catch (error) {
        logger.warn({
          event: "BLOOM_FILTER_UPDATE_FAILED",
          shortCode,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }

      return shortUrl;
    }

    throw new AppError("Failed to generate a unique short code", 400);
  }

  async getUserUrls(userId: string, limit: number, cursor?: string) {
    const safeLimit = Math.min(Math.max(limit, 1), 100)

    const decodedCurosr = cursor ? decodeCursor(cursor) : undefined

    const urls = await this.urlRepo.findShortUrlsByUserId(userId, safeLimit, decodedCurosr)

    const hasMore = urls.length > safeLimit

    const items = hasMore ? urls.slice(0, safeLimit) : urls

    const nextCursor = hasMore ? encodeCursor({
      createdAt: items[items.length - 1].createdAt,
      id: items[items.length - 1].id
    }): null

    return {
      items,
      nextCursor,
      hasMore
    }
  }

  async getOriginalUrlFromShortCode(shortCode: string) {
    const mightExist = await bloomService.mightExist(shortCode);

    if (!mightExist) {
      logger.info({
        event: "BLOOM_FILTER_NEGATIVE",
        shortCode,
      });

      throw new AppError("Short Url not found", 404);
    }

    logger.info({
      event: "BLOOM_FILTER_POSITIVE",
      shortCode,
    });

    const cachedShortUrl = await getCache(getShortUrlCacheKey(shortCode));

    if (cachedShortUrl) {
      const parsedCachedShortUrl = JSON.parse(cachedShortUrl);
      logger.info({
        event: "CACHE_HIT",
        shortCode,
      });
      return parsedCachedShortUrl;
    }

    logger.info({
      event: "CACHE_MISS",
      shortCode,
    });

    // aquired distributed lock
    const lock = await this.lockService.aquireLock(shortCode)

    if (!lock.acquired) {
      logger.info({
        event: "CACHE_REBUILD_IN_PROGRESS",
        shortCode
      })

      await new Promise((resolve) => setTimeout(resolve, 100))

      const cachedAgain = await getCache(getShortUrlCacheKey(shortCode))

      if (cachedAgain) {
        const parsedCachedAgain = JSON.parse(cachedAgain);
        logger.info({
          event: "CACHE_HIT_AFTER_WAIT",
          shortCode
        })

        return parsedCachedAgain
      }

      logger.warn({
        event: "CACHE_REBUILD_TIMEOUT",
        shortCode
      })

      throw new AppError("Please retry shortly", 503)
    }

    try {
      const shortUrl = await this.urlRepo.findShortUrlbyShortCode(shortCode);

      if (!shortUrl) {
        logger.warn({
          event: "BLOOM_FALSE_POSITIVE",
          shortCode,
        });
        throw new AppError("Short Url not found", 404);
      }

      const response = {
        shortUrlId: shortUrl.id,
        originalUrl: shortUrl.originalUrl,
      };

      await setCache(
        getShortUrlCacheKey(shortUrl.shortCode),
        JSON.stringify(response),
        300,
      );

      logger.info({
        event: "CACHE_REBUILT",
        shortCode
      })

      return response;

    } finally {
      if (lock.lockId) {
        console.log({lock})
        await this.lockService.releaseLock(shortCode, lock.lockId)
      }
    }

  }

  async updateOriginalUrl(
    userId: string,
    shortCode: string,
    data: UpdateUrlInputType,
  ) {
    const shortUrl = await this.urlRepo.findShortUrlbyShortCode(shortCode);

    const parsedUpdateUrl = parseUrl(data.updatedOriginalUrl);

    if (!shortUrl) {
      throw new AppError("Short URL not found", 404);
    }

    if (shortUrl?.userId !== userId) {
      throw new AppError("You are not allowed to perform this action", 403);
    }

    const updateShortUrl = await this.urlRepo.updateShortUrl(shortCode, {
      updatedOriginalUrl: parsedUpdateUrl,
    });

    if (!updateShortUrl) {
      throw new AppError("You are not allowed to perform this action.", 403);
    }

    await setCache(
      getShortUrlCacheKey(updateShortUrl.shortCode),
      JSON.stringify({
        shortUrlId: updateShortUrl.id,
        originalUrl: updateShortUrl.originalUrl,
      }),
      300,
    );

    return updateShortUrl;
  }

  async simulateLongQuery() {
    return this.urlRepo.simulateLongQuery()
  }
}
