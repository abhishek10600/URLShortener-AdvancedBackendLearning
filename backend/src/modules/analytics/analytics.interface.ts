import { ClickAnalytics } from "../../generated/prisma/index.js";
import { creteAnalyticsType, RecordClickInputType } from "./analytics.types.js";

export interface IAnalyticsRepository {
  createAnalytics(data: creteAnalyticsType): Promise<ClickAnalytics>;
  recordClick(data: RecordClickInputType): Promise<void>;
}
