import { app } from "./app.js";
import { env } from "./config/env.config.js";
import { logger } from "./config/logger.js";
import { prisma } from "./lib/prisma.js";
import redis from "./lib/redis.js";

const port = Number(env.PORT);

const server = app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

const gracefulShutdown = async (signal: string) => {
  logger.info(`${signal} received. Shutting down gracefully...`);

  server.close(async () => {
    await prisma.$disconnect();
    await redis.quit();

    logger.info("Database disconnected");
    logger.info("Redis disconnected");

    process.exit(0);
  });
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

process.on("uncaughtException", (error) => {
  logger.error(error);

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error(reason);

  process.exit(1);
});
