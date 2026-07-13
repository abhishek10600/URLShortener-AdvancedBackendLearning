import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/common/helpers/CatchAsync.js";
import { urlService } from "./url.container.js";
import { sendResponse } from "../../utils/common/response/AppResonse.js";
import { analyticsQueue } from "../../queues/analyticsQueue.js";
import { analyticsService } from "../analytics/analytics.container.js";

export class UrlController {
  createShortUrl = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { originalUrl } = req.body;

      const userId = req.user?.userId as string;

      const result = await urlService.createShortUrl({ originalUrl }, userId);

      sendResponse(res, 201, {
        success: true,
        message: "Short Code Created Successfully",
        data: result,
      });
    },
  );

  getUserUrls = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.userId as string
    const limit = req.query.limit ? Number(req.query.limit) : 2
    const cursor = req.query.cursor as string | undefined


    const result = await urlService.getUserUrls(userId, limit, cursor)

    sendResponse(res, 200, {
      success: true,
      message: "User URLs fetched successfully",
      data: result
    })

  })

  getUrlAnalytics = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.userId as string
    const shortUrlId = req.params.id as string
    const limit = req.query.limit ? Number(req.query.limit) : 2
    const cursor = req.query.cursor as string | undefined

    const result = await analyticsService.getAnalytics(userId, shortUrlId, limit, cursor)

    sendResponse(res, 200, {
      success: true,
      message: "URL analytics fetched successfully",
      data: result
    })
  })


  redirectToOriginalURL = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const shortCode = req.params.shortCode as string;

      const shortUrl = await urlService.getOriginalUrlFromShortCode(shortCode);

      await analyticsQueue.add(
        "record-analytics",
        {
          shortUrlId: shortUrl.shortUrlId,
          ipAddress: req.ip,
          userAgent: req.headers["user-agent"],
          referrer: req.get("Referer"),
        },
        {
          attempts: 5,
          backoff: {
            type: "exponential",
            delay: 2000,
          },
          removeOnComplete: 1000,
          removeOnFail: 5000,
        },
      );

      res.redirect(shortUrl.originalUrl);
    },
  );

  updateOriginalUrl = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const userId = req.user?.userId as string;
      const shortCode = req.params.shortCode as string;
      const { updatedOriginalUrl } = req.body;

      const result = await urlService.updateOriginalUrl(userId, shortCode, {
        updatedOriginalUrl,
      });

      sendResponse(res, 200, {
        success: true,
        message: "Original URL updated successfully",
        data: result,
      });
    },
  );
}
