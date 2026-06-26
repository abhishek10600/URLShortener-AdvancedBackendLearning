import { AnalyitcsRepository } from "./analytics.repository.js";
import { AnalyticsService } from "./analytics.service.js";

const analyticsRepository = new AnalyitcsRepository();
const analyticsService = new AnalyticsService(analyticsRepository);

export { analyticsService };
