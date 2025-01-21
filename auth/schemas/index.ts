import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required",
      path: ["Password"],
    }
  );

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email must be provided" }),
  name: z.string().min(1),
  password: z.string().min(6, { message: "Must be 6 characters or more" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(1, { message: "Invalid password" }),
  code: z.optional(z.string()),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum of 6 characters required" }),
});
