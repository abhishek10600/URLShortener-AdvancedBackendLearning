import { NextFunction, Request, Response } from "express";

const INSTANCE_NAME = process.env.HOSTNAME ?? "unknown";

export const backendInstanceMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.setHeader("X-Backend-Instance", INSTANCE_NAME);

  next();
};
