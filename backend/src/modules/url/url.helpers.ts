import { customAlphabet } from "nanoid";
import { env } from "../../config/env.config.js";
import { AppError } from "../../utils/common/Errors/AppError.js";

const SHORTCODELENGTH = env.URL_SHORTCODE_LENGTH || 8;

const ALLOWEDPROTOCOLS = ["http:", "https:"];

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

export const parseUrl = (originalUrl: string): string => {
  try {
    console.log({ unparsedUrl: originalUrl });
    const parsedUrl = new URL(originalUrl);
    // console.log({ parsedUrl });
    console.log(parsedUrl);
    console.log(parsedUrl.protocol);

    if (!ALLOWEDPROTOCOLS.includes(parsedUrl.protocol)) {
      throw new AppError("Only http and https URLs", 400);
    }

    return parsedUrl.toString();
  } catch {
    throw new AppError("Invalid URL", 400);
  }
};
