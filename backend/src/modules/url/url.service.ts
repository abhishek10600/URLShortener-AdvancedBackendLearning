import { AppError } from "../../utils/common/Errors/AppError.js";
import { createShortCode } from "./url.helpers.js";
import { IUrlRepository } from "./url.interface.js";
import { UrlInputType } from "./url.schema.js";

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
    const shortUrl = await this.urlRepo.findShortUrlbyShortCode(shortCode);

    if (!shortUrl) {
      throw new AppError("Short Url not found", 404);
    }

    return shortUrl.originalUrl;
  }
}
