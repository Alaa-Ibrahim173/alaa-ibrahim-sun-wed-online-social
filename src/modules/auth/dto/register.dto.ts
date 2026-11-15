
import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters"),

    email: z
      .string()
      .email("Invalid email address")
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(/[a-z]/, "Password must contain a lowercase letter")
      .regex(/[0-9]/, "Password must contain a number"),

    confirmPassword: z.string(),

    phone: z
      .string()
      .regex(
        /^(\+20|0020|0)?1[0125][0-9]{8}$/,
        "Invalid Egyptian phone number"
      ),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export type RegisterDTO = z.infer<typeof registerSchema>;
