/**
 * Centralized API endpoint definitions.
 * All backend routes are defined here for easy maintenance.
 */
export const ENDPOINTS = {
  // Authentication
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_REFRESH: '/auth/refresh',
  AUTH_FORGOT_PASSWORD: '/auth/forgot-password',
  AUTH_PROFILE: '/auth/profile',

  // Categories
  CATEGORIES: '/categories',

  // Products
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id) => `/products/${id}`,
  PRODUCT_SEARCH: '/products/search',

  // Customizer templates & motifs
  TEMPLATES: '/templates',
  MOTIFS: '/motifs',

  // Orders
  ORDERS: '/orders',
  ORDER_DETAIL: (id) => `/orders/${id}`,

  // Address (province/district/ward hierarchy)
  PROVINCES: '/address/provinces',
  DISTRICTS: (provinceId) => `/address/provinces/${provinceId}/districts`,
  WARDS: (districtId) => `/address/districts/${districtId}/wards`,

  // Admin
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_DASHBOARD: '/admin/dashboard/stats',
}
