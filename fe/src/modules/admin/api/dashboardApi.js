import { useQuery } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hook for admin dashboard statistics (FR-FE-ADM-03).
 * @param {string} period - Time period filter: 'week' | 'month'
 */
export function useDashboardStats(period = 'month') {
  return useQuery({
    queryKey: ['dashboard-stats', period],
    queryFn: () => axiosClient.get(ENDPOINTS.ADMIN_DASHBOARD, { params: { period } }),
  })
}
