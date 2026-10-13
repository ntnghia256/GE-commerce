import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTES } from '../core/constants/routes'

// Lazy-loaded layouts (code-splitting per NFR-FE-PERF-03)
const StorefrontLayout = lazy(() => import('../view/components/layout/StorefrontLayout'))
const AdminLayout = lazy(() => import('../view/components/layout/AdminLayout'))

// Storefront pages
const HomePage = lazy(() => import('../view/pages/storefront/HomePage'))
// Uncomment as pages are developed:
// const CategoryPage = lazy(() => import('../view/pages/storefront/CategoryPage'))
// const ProductDetailPage = lazy(() => import('../view/pages/storefront/ProductDetailPage'))
// const CustomizerPage = lazy(() => import('../view/pages/storefront/CustomizerPage'))
// const CartPage = lazy(() => import('../view/pages/storefront/CartPage'))
// const CheckoutPage = lazy(() => import('../view/pages/storefront/CheckoutPage'))
// const LoginPage = lazy(() => import('../view/pages/storefront/LoginPage'))
// const RegisterPage = lazy(() => import('../view/pages/storefront/RegisterPage'))

// Admin pages
const DashboardPage = lazy(() => import('../view/pages/admin/DashboardPage'))
// const ProductListPage = lazy(() => import('../view/pages/admin/ProductListPage'))
// const OrderListPage = lazy(() => import('../view/pages/admin/OrderListPage'))

const router = createBrowserRouter([
  {
    element: <StorefrontLayout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      // Uncomment as pages are developed:
      // { path: ROUTES.CATEGORY, element: <CategoryPage /> },
      // { path: ROUTES.PRODUCT_DETAIL, element: <ProductDetailPage /> },
      // { path: ROUTES.CUSTOMIZER, element: <CustomizerPage /> },
      // { path: ROUTES.CART, element: <CartPage /> },
      // { path: ROUTES.CHECKOUT, element: <CheckoutPage /> },
      // { path: ROUTES.LOGIN, element: <LoginPage /> },
      // { path: ROUTES.REGISTER, element: <RegisterPage /> },
      // { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
      // { path: ROUTES.PROFILE, element: <ProfilePage /> },
      // { path: ROUTES.ORDER_HISTORY, element: <OrderHistoryPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      // { path: ROUTES.ADMIN_PRODUCTS, element: <ProductListPage /> },
      // { path: ROUTES.ADMIN_PRODUCT_NEW, element: <ProductFormPage /> },
      // { path: ROUTES.ADMIN_PRODUCT_EDIT, element: <ProductFormPage /> },
      // { path: ROUTES.ADMIN_ORDERS, element: <OrderListPage /> },
      // { path: ROUTES.ADMIN_ORDER_DETAIL, element: <OrderDetailPage /> },
    ],
  },
])

/**
 * AppRouter component rendering the application route tree.
 */
export default function AppRouter() {
  return <RouterProvider router={router} />
}
