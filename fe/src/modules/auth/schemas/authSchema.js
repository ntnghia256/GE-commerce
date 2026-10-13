import { z } from 'zod'
import { emailSchema, phoneSchema } from '../../../core/utils/validators'

/**
 * Zod validation schemas for login and registration forms.
 * Error messages are in Vietnamese for end-user display.
 */

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
})

export const registerSchema = z.object({
  fullName: z.string().min(2, 'Họ tên tối thiểu 2 ký tự'),
  email: emailSchema,
  phone: phoneSchema,
  password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Mật khẩu xác nhận không khớp',
  path: ['confirmPassword'],
})
