import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.coerce.number(),
  FRONTEND_URL: z.url(),
  DB_URL: z.string(),
  SALT_ROUNDS: z.coerce.number(),
  ACCESS_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
  ACCESS_TOKEN_EXPIRES_IN: z.string(),
  REFRESH_TOKEN_EXPIRES_IN: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables: ",
    z.treeifyError(parsedEnv.error),
  );

  process.exit(1);
}

export const env = parsedEnv.data;
