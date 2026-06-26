import { ClickAnalytics } from "../../generated/prisma/index.js";
import { creteAnalyticsType } from "./analytics.types.js";

export interface IAnalyticsRepository {
  createAnalytics(data: creteAnalyticsType): Promise<ClickAnalytics>;
}
