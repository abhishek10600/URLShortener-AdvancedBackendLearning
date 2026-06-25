import { ShortURL } from "../../generated/prisma/client.js";
import { createShortUrlType, updateShortUrlType } from "./url.types.js";

export interface IUrlRepository {
  findShortUrlbyShortCode(shortCode: string): Promise<ShortURL | null>;
  createShortUrl(data: createShortUrlType): Promise<ShortURL>;
  updateShortUrl(
    shortCode: string,
    data: updateShortUrlType,
  ): Promise<ShortURL | null>;
}
