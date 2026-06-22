import crypto from "crypto";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const SHORTCODELENGTH = 6;

export const createShortCode = (): string => {
  const randomBytes = crypto.randomBytes(SHORTCODELENGTH);

  let shortCode = "";

  for (let i = 0; i < SHORTCODELENGTH; i++) {
    shortCode += CHARACTERS[randomBytes[i] % CHARACTERS.length];
  }

  return shortCode;
};
