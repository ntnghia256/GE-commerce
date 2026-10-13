import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axiosClient from '../../../core/api/axiosClient'
import { ENDPOINTS } from '../../../core/api/endpoints'

/**
 * TanStack Query hooks for admin product CRUD operations (FR-FE-ADM-01).
 */

export function useAdminProducts(params = {}) {
  return useQuery({
    queryKey: ['admin-products', params],
    queryFn: () => axiosClient.get(ENDPOINTS.ADMIN_PRODUCTS, { params }),
  })
}

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (productData) => axiosClient.post(ENDPOINTS.ADMIN_PRODUCTS, productData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-products'] }),
  })
}

export function useUpdateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }) => axiosClient.put(`${ENDPOINTS.ADMIN_PRODUCTS}/${id}`, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-products'] }),
  })
}

export function useDeleteProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id) => axiosClient.delete(`${ENDPOINTS.ADMIN_PRODUCTS}/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-products'] }),
  })
}
