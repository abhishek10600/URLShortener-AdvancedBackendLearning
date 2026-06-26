import { ClickAnalytics } from "../../generated/prisma/index.js";
import { prisma } from "../../lib/prisma.js";
import { IAnalyticsRepository } from "./analytics.interface.js";
import { creteAnalyticsType } from "./analytics.types.js";

export class AnalyitcsRepository implements IAnalyticsRepository {
  async createAnalytics(data: creteAnalyticsType): Promise<ClickAnalytics> {
    return await prisma.clickAnalytics.create({
      data,
    });
  }
}
