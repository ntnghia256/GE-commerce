import { z } from 'zod'

/**
 * Shared Zod validation schemas used across multiple modules.
 */

// Vietnamese phone number format: starts with 03, 05, 07, 08, or 09 followed by 8 digits
export const phoneSchema = z
  .string()
  .regex(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')

export const emailSchema = z
  .string()
  .email('Email không hợp lệ')

/**
 * Creates a required string schema with a custom Vietnamese error message.
 * @param {string} fieldName - The field display name (in Vietnamese)
 */
export const requiredString = (fieldName) =>
  z.string().min(1, `${fieldName} không được để trống`)
