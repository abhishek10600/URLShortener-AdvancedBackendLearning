import { IAnalyticsRepository } from "./analytics.interface.js";
import { RecordClickInputType } from "./analytics.types.js";

export class AnalyticsService {
  constructor(private analyticsRepo: IAnalyticsRepository) {}

  async recordClick(data: RecordClickInputType) {
    await this.analyticsRepo.recordClick(data);
  }

  // Create get shorturl created by a user and get its analytics data (clicked in the last 30 days)
}
