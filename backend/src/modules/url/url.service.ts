import { logger } from "../../config/logger.js";
import { AppError } from "../../utils/common/Errors/AppError.js";
import { bloomService } from "../bloom/bloom.container.js";
import { getCache, setCache } from "./cache/cache.servie.js";
import {
  createShortCode,
  getShortUrlCacheKey,
  parseUrl,
} from "./url.helpers.js";
import { IUrlRepository } from "./url.interface.js";
import { UpdateUrlInputType, UrlInputType } from "./url.schema.js";

export class UrlService {
  constructor(private urlRepo: IUrlRepository) {}

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

    return response;
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
}
