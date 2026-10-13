import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

/**
 * Layout wrapper for all admin portal pages.
 * Renders a sidebar navigation and page content via <Outlet />.
 */
export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
