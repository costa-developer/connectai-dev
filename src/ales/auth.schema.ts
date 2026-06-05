import { ZodType, z } from 'zod'

export type UserRegistrationProps = {
  type: string
  fullname: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
  otp: string
}

/**
 * Strong password rules:
 *  - 8 to 64 characters
 *  - at least one uppercase letter
 *  - at least one lowercase letter
 *  - at least one digit
 *  - special characters are allowed
 *  - no leading/trailing whitespace
 */
const strongPassword = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .max(64, { message: 'Password must be at most 64 characters' })
  .refine((v) => /[A-Z]/.test(v), {
    message: 'Add at least one uppercase letter',
  })
  .refine((v) => /[a-z]/.test(v), {
    message: 'Add at least one lowercase letter',
  })
  .refine((v) => /[0-9]/.test(v), { message: 'Add at least one number' })
  .refine((v) => v.trim() === v, {
    message: 'Password cannot start or end with a space',
  })

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .trim()
      .min(4, { message: 'Your full name must be at least 4 characters long' })
      .max(80, { message: 'Your full name is too long' }),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email({ message: 'Incorrect email format' })
      .max(254, { message: 'Email is too long' }),
    confirmEmail: z
      .string()
      .trim()
      .toLowerCase()
      .email({ message: 'Incorrect email format' })
      .max(254),
    password: strongPassword,
    confirmPassword: z.string(),
    otp: z
      .string()
      .min(6, { message: 'You must enter a 6 digit code' })
      .max(6, { message: 'You must enter a 6 digit code' }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine((schema) => schema.email === schema.confirmEmail, {
    message: 'Emails do not match',
    path: ['confirmEmail'],
  })

export type UserLoginProps = {
  email: string
  password: string
}

export type ChangePasswordProps = {
  password: string
  confirmPassword: string
}

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'You did not enter a valid email' })
    .max(254),
  password: z
    .string()
    .min(8, { message: 'Your password must be at least 8 characters long' })
    .max(64, { message: 'Your password is too long' }),
})

export const ChangePasswordSchema: ZodType<ChangePasswordProps> = z
  .object({
    password: strongPassword,
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
