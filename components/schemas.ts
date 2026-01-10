import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(4, "Type min four characters"),
  password: z.string().min(6, "Minimum 6 charaters required"),
  stayLoggedIn: z.boolean(),
});

export type LoginValues = z.infer<typeof loginSchema>;
