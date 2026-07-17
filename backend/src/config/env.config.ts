import dotenv from "dotenv";
import { envSchema } from "./env.schema.js";
dotenv.config({
  path: "./.env",
});
import { z } from "zod"

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables: ",
    z.treeifyError(parsedEnv.error),
  );

  process.exit(1);
}

export const env = parsedEnv.data;
