import { UrlRepository } from "../url.respository.js";
import { CacheWarmerService } from "./cache-warmer.service.js";

const urlRepository = new UrlRepository();
const cacheWarmerService = new CacheWarmerService(urlRepository);

export { cacheWarmerService };
