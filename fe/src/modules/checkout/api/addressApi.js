import { useQuery } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hooks for the 3-level Vietnamese address hierarchy
 * (Province -> District -> Ward) used in the checkout form (FR-FE-CHK-05).
 */

export function useProvinces() {
  return useQuery({
    queryKey: ['provinces'],
    queryFn: () => axiosClient.get(ENDPOINTS.PROVINCES),
    staleTime: Infinity,  // Province list rarely changes
  })
}

export function useDistricts(provinceId) {
  return useQuery({
    queryKey: ['districts', provinceId],
    queryFn: () => axiosClient.get(ENDPOINTS.DISTRICTS(provinceId)),
    enabled: !!provinceId,
    staleTime: Infinity,
  })
}

export function useWards(districtId) {
  return useQuery({
    queryKey: ['wards', districtId],
    queryFn: () => axiosClient.get(ENDPOINTS.WARDS(districtId)),
    enabled: !!districtId,
    staleTime: Infinity,
  })
}
