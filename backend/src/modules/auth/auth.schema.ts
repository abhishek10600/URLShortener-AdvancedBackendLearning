import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string().trim().toLowerCase(),
  email: z.email().trim().toLowerCase(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const loginUserSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string(),
});

export type RegisterUserInputType = z.infer<typeof registerUserSchema>;
