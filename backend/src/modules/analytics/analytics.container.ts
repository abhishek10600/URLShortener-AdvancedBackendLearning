import { UrlRepository } from "../url/url.respository.js";
import { AnalyitcsRepository } from "./analytics.repository.js";
import { AnalyticsService } from "./analytics.service.js";

const analyticsRepository = new AnalyitcsRepository();
const urlRepository = new UrlRepository();
const analyticsService = new AnalyticsService(analyticsRepository, urlRepository);

export { analyticsService };
