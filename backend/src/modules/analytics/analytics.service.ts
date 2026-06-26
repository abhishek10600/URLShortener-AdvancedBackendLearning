import { Request } from "express";
import { IAnalyticsRepository } from "./analytics.interface.js";
import { shortUrlType } from "../url/url.types.js";

export class AnalyticsService {
  constructor(private analyticsRepo: IAnalyticsRepository) {}

  async recordClick(shortUrl: shortUrlType, requestMetaData: Request) {
    await this.analyticsRepo.createAnalytics({
      shortUrlId: shortUrl.id,
      clickedAt: new Date(),
      ipAddress: requestMetaData.ip,
      userAgent: requestMetaData.headers["user-agent"],
      referrer: requestMetaData.get("Referer"),
    });
  }
}
