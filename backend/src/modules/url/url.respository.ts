import { ShortURL } from "../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";
import { IUrlRepository } from "./url.interface.js";
import { createShortUrlType } from "./url.types.js";

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
}
