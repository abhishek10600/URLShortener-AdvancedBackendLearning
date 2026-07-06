import { ShortURL } from "../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";
import { measureQuery } from "../../utils/common/helpers/MeasureQuery.js";
import { IUrlRepository } from "./url.interface.js";
import { createShortUrlType, updateShortUrlType } from "./url.types.js";

export class UrlRepository implements IUrlRepository {
  constructor() {}

  async findShortUrlbyShortCode(shortCode: string): Promise<ShortURL | null> {
    return measureQuery("findShortUrlbyShortCode", () =>
      prisma.shortURL.findUnique({
        where: {
          shortCode,
        },
      }),
    );
  }

  async createShortUrl(data: createShortUrlType): Promise<ShortURL> {
    return measureQuery("createShortUrl", () =>
      prisma.shortURL.create({
        data,
      }),
    );
  }

  async updateShortUrl(
    shortCode: string,
    data: updateShortUrlType,
  ): Promise<ShortURL | null> {
    return measureQuery("updateShortUrl", () =>
      prisma.shortURL.update({
        where: {
          shortCode,
        },
        data: {
          originalUrl: data.updatedOriginalUrl,
        },
      }),
    );
  }

  async findTopHotUrls(limit: number): Promise<ShortURL[]> {
    return measureQuery("findTopHotUrls", () =>
      prisma.shortURL.findMany({
        orderBy: {
          clickCount: "desc",
        },
        take: limit,
      }),
    );
  }
}
