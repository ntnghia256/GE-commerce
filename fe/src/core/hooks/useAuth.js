import { useSelector } from 'react-redux'

/**
 * Hook to access the current authentication state from Redux store.
 * @returns {{ user: object|null, isAuthenticated: boolean, isLoading: boolean }}
 */
export function useAuth() {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth || {})

  return {
    user: user || null,
    isAuthenticated: isAuthenticated || false,
    isLoading: isLoading || false,
  }
}
