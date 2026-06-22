import { UrlRepository } from "./url.respository.js";
import { UrlService } from "./url.service.js";

const urlRepository = new UrlRepository();
const urlService = new UrlService(urlRepository);

export { urlService };
