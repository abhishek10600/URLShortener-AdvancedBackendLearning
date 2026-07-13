import { AppError } from "../../utils/common/Errors/AppError.js";
import { IUrlRepository } from "../url/url.interface.js";
import { decodeCursor, encodeCursor } from "./analytics.helper.js";
import { IAnalyticsRepository } from "./analytics.interface.js";
import { RecordClickInputType } from "./analytics.types.js";

export class AnalyticsService {
  constructor(private analyticsRepo: IAnalyticsRepository,
    private urlRepo: IUrlRepository) { }

  async recordClick(data: RecordClickInputType) {
    await this.analyticsRepo.recordClick(data);
  }

  async getAnalytics(userId: string, shortUrlId: string, limit: number, cursor?: string) {

    const shortUrl = await this.urlRepo.findShortUrlByIdAndUserId(shortUrlId, userId)

    if (!shortUrl) {
      throw new AppError("You are not allowed to perform this action", 401)
    }

    const safeLimit = Math.min(Math.max(limit, 1), 100);

    const decodedCursor = cursor ? decodeCursor(cursor) : undefined

    const analytics = await this.analyticsRepo.findAnalyticsByShortUrlId(shortUrlId, safeLimit, decodedCursor)

    const hasMore = analytics.length > safeLimit

    const items = hasMore ? analytics.slice(0, safeLimit) : analytics

    const nextCursor = hasMore ? encodeCursor({
      clickedAt: items[items.length - 1].clickedAt,
      id: items[items.length - 1].id
    }) : null

    return {
      items,
      nextCursor,
      hasMore
    }
  }
}
