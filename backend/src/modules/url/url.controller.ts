import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/common/helpers/CatchAsync.js";
import { urlService } from "./url.container.js";
import { sendResponse } from "../../utils/common/response/AppResonse.js";
import { analyticsQueue } from "../../queues/analyticsQueue.js";

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

  redirectToOriginalURL = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const shortCode = req.params.shortCode as string;

      const shortUrl = await urlService.getOriginalUrlFromShortCode(shortCode);

      await analyticsQueue.add(
        "record-analytics",
        {
          shortUrlId: shortUrl.id,
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
