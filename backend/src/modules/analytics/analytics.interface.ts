import { ClickAnalytics } from "../../generated/prisma/index.js";
import { AnalyticsCursorType, creteAnalyticsType, RecordClickInputType } from "./analytics.types.js";

export interface IAnalyticsRepository {
  createAnalytics(data: creteAnalyticsType): Promise<ClickAnalytics>;

  recordClick(data: RecordClickInputType): Promise<void>;

  findAnalyticsByShortUrlId(shortUrlId: string, limit: number, cursor?: AnalyticsCursorType): Promise<ClickAnalytics[]>
}
