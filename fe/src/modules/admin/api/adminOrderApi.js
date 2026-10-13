import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hooks for admin order management (FR-FE-ADM-02).
 */

export function useAdminOrders(params = {}) {
  return useQuery({
    queryKey: ['admin-orders', params],
    queryFn: () => axiosClient.get(ENDPOINTS.ADMIN_ORDERS, { params }),
  })
}

/**
 * Mutation to update an order's status (e.g., confirmed, processing, shipping).
 */
export function useUpdateOrderStatus() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, status }) =>
      axiosClient.patch(`${ENDPOINTS.ADMIN_ORDERS}/${id}/status`, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-orders'] }),
  })
}
