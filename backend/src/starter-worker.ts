import "dotenv/config";

import "./workers/analyticsWorker.js";
import { logger } from "./config/logger.js";

logger.info("Workers started");
