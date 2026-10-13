/**
 * Client-side route path constants.
 * Used by React Router and navigation links.
 */
export const ROUTES = {
  // Storefront routes
  HOME: '/',
  CATEGORY: '/category/:slug',
  PRODUCT_DETAIL: '/product/:id',
  CUSTOMIZER: '/product/:id/customize',
  CART: '/cart',
  CHECKOUT: '/checkout',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  PROFILE: '/profile',
  ORDER_HISTORY: '/orders',

  // Admin portal routes
  ADMIN_DASHBOARD: '/admin',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_PRODUCT_NEW: '/admin/products/new',
  ADMIN_PRODUCT_EDIT: '/admin/products/:id/edit',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_ORDER_DETAIL: '/admin/orders/:id',
}
