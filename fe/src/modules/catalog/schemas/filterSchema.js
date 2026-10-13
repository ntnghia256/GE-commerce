import { z } from 'zod'

/**
 * Zod schema for product filter/search form validation.
 */
export const productFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  sortBy: z.enum(['price_asc', 'price_desc', 'newest', 'popular']).optional(),
  page: z.number().min(1).optional(),
})
