import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/common/Errors/AppError.js";
import { verifyAccessToken } from "../modules/auth/auth.helper.js";
import { JwtPayloadType } from "../modules/auth/auth.type.js";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError("Authentication required", 401);
    }

    if (!authHeader.startsWith("Bearer ")) {
      throw new AppError("Invalid format for authentication header", 401);
    }

    const accessToken = authHeader.split(" ")[1];

    if (!accessToken) {
      throw new AppError("Access token missing", 401);
    }

    const payload = verifyAccessToken(accessToken) as JwtPayloadType;

    req.user = {
      userId: payload.userId,
    };

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(new AppError("Token expired", 401));
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return next(new AppError("Invalid token", 401));
    }

    return next(error);
  }
};
