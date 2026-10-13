import { z } from 'zod'
import { phoneSchema, requiredString } from '../../../core/utils/validators'

/**
 * Zod schemas for the checkout flow (FR-FE-CHK-05).
 * Validates shipping info and payment method selection.
 */

export const shippingSchema = z.object({
  fullName: requiredString('Họ tên'),
  phone: phoneSchema,
  provinceId: requiredString('Tỉnh/Thành phố'),
  districtId: requiredString('Quận/Huyện'),
  wardId: requiredString('Phường/Xã'),
  address: requiredString('Địa chỉ chi tiết'),
  note: z.string().optional(),
})

export const paymentSchema = z.object({
  method: z.enum(['cod', 'bank_transfer'], {
    required_error: 'Vui lòng chọn phương thức thanh toán',
  }),
})

// Combined schema for the full checkout form
export const checkoutSchema = shippingSchema.merge(paymentSchema)
