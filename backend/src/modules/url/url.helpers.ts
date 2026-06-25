import { customAlphabet } from "nanoid";
import { env } from "../../config/env.config.js";

const SHORTCODELENGTH = env.URL_SHORTCODE_LENGTH || 8;

const createId = customAlphabet(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  SHORTCODELENGTH,
);

export const createShortCode = (): string => {
  return createId();
};

export const getShortUrlCacheKey = (shortCode: string) => {
  return `shortCode:${shortCode}`;
};
