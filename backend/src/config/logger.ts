import { pino } from "pino";
import { env } from "./env.config.js";

export const logger = pino({
  transport:
    env?.NODE_ENV === "dev"
      ? {
          target: "pino-pretty",
        }
      : undefined,
});
