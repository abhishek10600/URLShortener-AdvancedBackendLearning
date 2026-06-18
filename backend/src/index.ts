import { app } from "./app.js";
import { env } from "./config/env.config.js";
import { logger } from "./config/logger.js";

const port = env?.PORT;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
