import { useQuery } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hook to fetch a paginated/filtered list of products.
 * @param {object} params - Query params (category, minPrice, maxPrice, sortBy, page)
 */
export function useProducts(params = {}) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => axiosClient.get(ENDPOINTS.PRODUCTS, { params }),
  })
}

/**
 * TanStack Query hook to fetch a single product by ID.
 * @param {string} id - Product ID
 */
export function useProductById(id) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => axiosClient.get(ENDPOINTS.PRODUCT_DETAIL(id)),
    enabled: !!id,
  })
}
