import * as z from "zod";
import { validate } from "../../middlewares/validation";

export const userCreateSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Provide a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const userUpdateSchema = userCreateSchema.partial().omit({
  email: true,
});

export type UserCreateDto = z.infer<typeof userCreateSchema>;

export type UserUpdateDto = z.infer<typeof userUpdateSchema>;

export const validateUserCreate = validate(userCreateSchema);
