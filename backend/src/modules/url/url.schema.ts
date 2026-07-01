import { z } from "zod";

export const createUrlSchema = z
  .object({
    originalUrl: z.string().trim().min(1, "URL is required").url("Invalid URL"),
  })
  .strict();

export const updateUrlSchema = z.object({
  updatedOriginalUrl: z.url(),
});

export type UrlInputType = z.infer<typeof createUrlSchema>;
export type UpdateUrlInputType = z.infer<typeof updateUrlSchema>;
