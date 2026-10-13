import { useQuery } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hook to fetch all product categories.
 */
export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => axiosClient.get(ENDPOINTS.CATEGORIES),
  })
}
