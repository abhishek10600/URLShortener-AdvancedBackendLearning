import { ShortURL } from "../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";
import { measureQuery } from "../../utils/common/helpers/MeasureQuery.js";
import { IUrlRepository } from "./url.interface.js";
import { createShortUrlType, updateShortUrlType, UrlCursor } from "./url.types.js";

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

  async findShortUrlByIdAndUserId(id: string, userId: string) {
    return measureQuery("findShortUrlByIdAndUserId", () => prisma.shortURL.findFirst({
      where: {
        id,
        userId
      }
    }))
  }

  async findShortUrlsByUserId(userId: string, limit: number = 10, cursor?: UrlCursor): Promise<ShortURL[]> {
    return measureQuery("findShortUrlsByUserId", () => prisma.shortURL.findMany({
      where: {
        userId,

        ...(cursor && {
          OR: [
            {
              createdAt: {
                lt: cursor.createdAt
              }
            },

            {
              createdAt: cursor.createdAt,

              id: {
                lt: cursor.id
              }
            }
          ]
        })
      },
      orderBy: [
        {
          createdAt: "desc"
        },
        {
          id: "desc"
        }
      ],

      take: limit + 1
    }))
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

  async simulateLongQuery() {
    console.log(`Starting query: ${new Date().toISOString()}`);

      const result = await prisma.$queryRaw`
        SELECT 'done'::text
        FROM pg_sleep(10)
      `;

      console.log(`Finished query: ${new Date().toISOString()}`);

      return result;
  }
}
