import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/common/helpers/CatchAsync.js";
import { prisma } from "../../lib/prisma.js";
import redis from "../../lib/redis.js";

export class HealthController {
  live = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      success: true,
      status: "alive",
      timestamp: new Date().toISOString()
    })
  })

  ready = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.$queryRaw`SELECT 1`
      await redis.ping()

      return res.status(200).json({
        success: true,
        status: "ready",
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      return res.status(504).json({
        success: false,
        status: "not_ready"
      })
    }
  })

  health = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.$queryRaw`SELECT 1`
      await redis.ping()

      return res.status(200).json({
        success: true,
        status: "ready",
        database: "up",
        redis: "up",
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      return res.status(504).json({
        success: false,
        status: "unhealthy"
      })
    }
  })
}
