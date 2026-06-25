import { logger } from "../../config/logger.js";
import { AppError } from "../../utils/common/Errors/AppError.js";
import { getCache, setCache } from "./cache/cache.servie.js";
import { createShortCode, getShortUrlCacheKey } from "./url.helpers.js";
import { IUrlRepository } from "./url.interface.js";
import { UpdateUrlInputType, UrlInputType } from "./url.schema.js";

export class UrlService {
  constructor(private urlRepo: IUrlRepository) {}

  async createShortUrl(data: UrlInputType, userId: string) {
    const originalUrl = data.originalUrl;

    const MAX_RETRIES = 5;

    for (let i = 0; i < MAX_RETRIES; i++) {
      const shortCode = createShortCode();

      const existingShortUrl =
        await this.urlRepo.findShortUrlbyShortCode(shortCode);

      if (!existingShortUrl) {
        const shortUrl = await this.urlRepo.createShortUrl({
          originalUrl,
          userId,
          shortCode,
        });

        return shortUrl;
      }
    }

    throw new AppError("Failed to generate a unique short code", 400);
  }

  async getOriginalUrlFromShortCode(shortCode: string) {
    const cachedOriginalUrl = await getCache(getShortUrlCacheKey(shortCode));

    if (cachedOriginalUrl) {
      logger.info({
        event: "CACHE_HIT",
        shortCode,
      });
      return cachedOriginalUrl;
    }

    logger.info({
      event: "CACHE_MISS",
      shortCode,
    });

    const shortUrl = await this.urlRepo.findShortUrlbyShortCode(shortCode);

    if (!shortUrl) {
      throw new AppError("Short Url not found", 404);
    }

    await setCache(
      getShortUrlCacheKey(shortUrl.shortCode),
      `${shortUrl.originalUrl}`,
      300,
    );

    return shortUrl.originalUrl;
  }

  async updateOriginalUrl(
    userId: string,
    shortCode: string,
    data: UpdateUrlInputType,
  ) {
    const shortUrl = await this.urlRepo.findShortUrlbyShortCode(shortCode);

    if (!shortUrl) {
      throw new AppError("Short URL not found", 404);
    }

    if (shortUrl?.userId !== userId) {
      throw new AppError("You are not allowed to perform this action", 403);
    }

    const updateShortUrl = await this.urlRepo.updateShortUrl(shortCode, data);

    if (!updateShortUrl) {
      throw new AppError("You are not allowed to perform this action.", 403);
    }

    await setCache(
      getShortUrlCacheKey(updateShortUrl.shortCode),
      `${updateShortUrl.originalUrl}`,
      300,
    );

    return updateShortUrl;
  }
}
