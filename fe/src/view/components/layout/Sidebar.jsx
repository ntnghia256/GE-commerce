import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../core/constants/routes'

const navItems = [
  { label: 'Dashboard', path: ROUTES.ADMIN_DASHBOARD },
  { label: 'Sản phẩm', path: ROUTES.ADMIN_PRODUCTS },
  { label: 'Đơn hàng', path: ROUTES.ADMIN_ORDERS },
]

/**
 * Admin portal sidebar navigation.
 * Highlights the currently active route.
 */
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
      <div className="text-lg font-bold text-dao-yellow mb-8 px-2">
        GĐHĐ Admin
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === ROUTES.ADMIN_DASHBOARD}
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-dao-yellow/10 text-dao-yellow font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
