import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().trim().toLowerCase(),
    email: z.email().trim().toLowerCase(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  })
  .strict();

export const loginUserSchema = z
  .object({
    email: z.email().trim().toLowerCase(),
    password: z.string(),
  })
  .strict();

export type RegisterUserInputType = z.infer<typeof registerUserSchema>;
export type LoginUserInputType = z.infer<typeof loginUserSchema>;
