import { z } from 'zod'
import { APP_CONFIG } from '../../../core/constants/config'

/**
 * Zod schema for product customization form validation.
 * Enforces character limits per SRS configuration.
 */
export const customizationSchema = z.object({
  text: z
    .string()
    .min(1, 'Vui lòng nhập nội dung cần khắc')
    .max(APP_CONFIG.CUSTOMIZER.MAX_TEXT_LENGTH, `Tối đa ${APP_CONFIG.CUSTOMIZER.MAX_TEXT_LENGTH} ký tự`),
  fontFamily: z.string().min(1, 'Vui lòng chọn font chữ'),
  motifId: z.string().optional(),
})
