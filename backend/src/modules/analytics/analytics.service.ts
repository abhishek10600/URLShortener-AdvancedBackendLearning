import { IAnalyticsRepository } from "./analytics.interface.js";
import { RecordClickInputType } from "./analytics.types.js";

export class AnalyticsService {
  constructor(private analyticsRepo: IAnalyticsRepository) {}

  async recordClick(data: RecordClickInputType) {
    await this.analyticsRepo.createAnalytics({
      shortUrlId: data.shortUrlId,
      clickedAt: new Date(),
      ipAddress: data.ipAddress,
      userAgent: data.userAgent,
      referrer: data.referrer,
    });
  }
}
