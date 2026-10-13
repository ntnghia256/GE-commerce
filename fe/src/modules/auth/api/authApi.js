import { useMutation, useQuery } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hooks for authentication API calls.
 */

export function useLogin() {
  return useMutation({
    mutationFn: (credentials) => axiosClient.post(ENDPOINTS.AUTH_LOGIN, credentials),
  })
}

export function useRegister() {
  return useMutation({
    mutationFn: (userData) => axiosClient.post(ENDPOINTS.AUTH_REGISTER, userData),
  })
}

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => axiosClient.get(ENDPOINTS.AUTH_PROFILE),
  })
}
