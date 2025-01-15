import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email must be provided" }),
  name: z.string().min(1),
  password: z.string().min(6, { message: "Must be 6 characters or more" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(1, { message: "Invalid password" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum of 6 characters required" }),
});
