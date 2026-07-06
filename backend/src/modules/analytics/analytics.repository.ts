import { ClickAnalytics } from "../../generated/prisma/index.js";
import { prisma } from "../../lib/prisma.js";
import { measureQuery } from "../../utils/common/helpers/MeasureQuery.js";
import { IAnalyticsRepository } from "./analytics.interface.js";
import { creteAnalyticsType, RecordClickInputType } from "./analytics.types.js";

export class AnalyitcsRepository implements IAnalyticsRepository {
  async createAnalytics(data: creteAnalyticsType): Promise<ClickAnalytics> {
    return measureQuery("createAnalytics", () =>
      prisma.clickAnalytics.create({
        data,
      }),
    );
  }

  async recordClick(data: RecordClickInputType): Promise<void> {
    measureQuery("recordClick", () =>
      prisma.$transaction([
        prisma.clickAnalytics.create({
          data: {
            shortUrlId: data.shortUrlId,
            ipAddress: data.ipAddress,
            userAgent: data.userAgent,
            referrer: data.referrer,
          },
        }),

        prisma.shortURL.update({
          where: {
            id: data.shortUrlId,
          },
          data: {
            clickCount: {
              increment: 1,
            },
          },
        }),
      ]),
    );
  }
}
