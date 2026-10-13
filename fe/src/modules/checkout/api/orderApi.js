import { useMutation, useQuery } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hooks for order-related API calls.
 */

export function useCreateOrder() {
  return useMutation({
    mutationFn: (orderData) => axiosClient.post(ENDPOINTS.ORDERS, orderData),
  })
}

export function useOrderHistory() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: () => axiosClient.get(ENDPOINTS.ORDERS),
  })
}

/**
 * Fetch a single order's details by ID.
 * @param {string} id - Order ID
 */
export function useOrderDetail(id) {
  return useQuery({
    queryKey: ['order', id],
    queryFn: () => axiosClient.get(ENDPOINTS.ORDER_DETAIL(id)),
    enabled: !!id,
  })
}
