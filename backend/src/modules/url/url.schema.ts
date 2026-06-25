import { z } from "zod";

export const createUrlSchema = z
  .object({
    originalUrl: z.url(),
  })
  .strict();

export const updateUrlSchema = z.object({
  updatedOriginalUrl: z.url(),
});

export type UrlInputType = z.infer<typeof createUrlSchema>;
export type UpdateUrlInputType = z.infer<typeof updateUrlSchema>;
