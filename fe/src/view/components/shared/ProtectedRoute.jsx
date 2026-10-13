import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../core/hooks/useAuth'
import { ROUTES } from '../../../core/constants/routes'

/**
 * Route guard component.
 * Redirects unauthenticated users to login and non-admin users to home.
 * @param {object} props
 * @param {React.ReactNode} props.children - The protected page content
 * @param {boolean} [props.requireAdmin=false] - Whether admin role is required
 */
export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to={ROUTES.HOME} replace />
  }

  return children
}
