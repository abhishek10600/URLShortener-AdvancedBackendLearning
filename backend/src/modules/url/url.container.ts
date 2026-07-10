import { LockService } from "../lock/lock.service.js";
import { UrlRepository } from "./url.respository.js";
import { UrlService } from "./url.service.js";

const urlRepository = new UrlRepository();
const lockService = new LockService()
const urlService = new UrlService(urlRepository, lockService);

export { urlService };
