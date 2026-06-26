import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/common/helpers/CatchAsync.js";
import { urlService } from "./url.container.js";
import { sendResponse } from "../../utils/common/response/AppResonse.js";
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

  redirectToOriginalURL = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const shortCode = req.params.shortCode as string;

      const shortUrl = await urlService.getOriginalUrlFromShortCode(shortCode);

      await analyticsService.recordClick(shortUrl, req);

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
