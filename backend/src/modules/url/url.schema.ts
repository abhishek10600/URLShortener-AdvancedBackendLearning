import { z } from "zod";

export const urlSchema = z
  .object({
    originalUrl: z.url(),
  })
  .strict();

export type UrlInputType = z.infer<typeof urlSchema>;
