import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../core/constants/routes'

/**
 * Responsive mobile navigation menu (visible on screens < md breakpoint).
 * Toggles a dropdown overlay with navigation links.
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600"
        aria-label="Menu"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg p-4 z-50">
          <nav className="flex flex-col gap-3">
            <Link to={ROUTES.HOME} onClick={() => setIsOpen(false)}>Trang chủ</Link>
            <Link to={ROUTES.CART} onClick={() => setIsOpen(false)}>Giỏ hàng</Link>
            <Link to={ROUTES.LOGIN} onClick={() => setIsOpen(false)}>Đăng nhập</Link>
          </nav>
        </div>
      )}
    </div>
  )
}
