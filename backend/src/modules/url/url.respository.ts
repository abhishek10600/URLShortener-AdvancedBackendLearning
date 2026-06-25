import { ShortURL } from "../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";
import { IUrlRepository } from "./url.interface.js";
import { createShortUrlType, updateShortUrlType } from "./url.types.js";

export class UrlRepository implements IUrlRepository {
  constructor() {}

  async findShortUrlbyShortCode(shortCode: string): Promise<ShortURL | null> {
    const shortUrl = await prisma.shortURL.findUnique({
      where: {
        shortCode,
      },
    });

    return shortUrl;
  }

  async createShortUrl(data: createShortUrlType): Promise<ShortURL> {
    const shortUrl = await prisma.shortURL.create({
      data,
    });

    return shortUrl;
  }

  async updateShortUrl(
    shortCode: string,
    data: updateShortUrlType,
  ): Promise<ShortURL | null> {
    const updatedShortUrl = await prisma.shortURL.update({
      where: {
        shortCode,
      },
      data: {
        originalUrl: data.updatedOriginalUrl,
      },
    });

    return updatedShortUrl;
  }
}
