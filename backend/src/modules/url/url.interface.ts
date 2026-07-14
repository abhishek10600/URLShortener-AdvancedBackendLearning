import { ShortURL } from "../../generated/prisma/client.js";
import { createShortUrlType, updateShortUrlType, UrlCursor } from "./url.types.js";

export interface IUrlRepository {
  findShortUrlbyShortCode(shortCode: string): Promise<ShortURL | null>;

  createShortUrl(data: createShortUrlType): Promise<ShortURL>;

  findShortUrlByIdAndUserId(id: string, userId: string): Promise<ShortURL | null>;

  findShortUrlsByUserId(userId: string, limit: number, cursor?: UrlCursor): Promise<ShortURL[]>;

  updateShortUrl(
    shortCode: string,
    data: updateShortUrlType,
  ): Promise<ShortURL | null>;

  findTopHotUrls(limit: number): Promise<ShortURL[]>;

  simulateLongQuery(): Promise<unknown>
}
