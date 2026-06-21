import bcrypt from "bcrypt";
import { env } from "../../config/env.config.js";
import { JwtPayloadType } from "./auth.type.js";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { Response } from "express";
import ms from "ms";

const saltRounds = Number(env?.SALT_ROUNDS);

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const signAccessToken = (payload: JwtPayloadType) => {
  return jwt.sign(payload, env?.ACCESS_TOKEN_SECRET!, {
    expiresIn: env?.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });
};

export const signRefreshToken = (payload: JwtPayloadType) => {
  return jwt.sign(payload, env?.REFRESH_TOKEN_SECRET!, {
    expiresIn: env?.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, env?.ACCESS_TOKEN_SECRET!) as JwtPayload;
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, env?.REFRESH_TOKEN_SECRET!) as JwtPayload;
};

export const setAuthCookies = (res: Response, refreshToken: string) => {
  const refreshTokenAge = ms(env.REFRESH_TOKEN_EXPIRES_IN as ms.StringValue);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: env.NODE_ENV === "prod",
    sameSite: "lax", // only in development,
    maxAge: refreshTokenAge,
  });
};

export const clearAuthCookies = (res: Response) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: env.NODE_ENV === "prod",
    sameSite: "lax",
  });
};
