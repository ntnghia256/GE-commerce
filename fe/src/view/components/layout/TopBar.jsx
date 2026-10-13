import { Link } from 'react-router-dom'
import { User, ShoppingBag, PhoneCall, Sparkles } from 'lucide-react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../../core/constants/routes'

/**
 * TopBar component situated above the main navigation.
 * Displays quick links for customer account, orders, hotline, and cart.
 * Matches the top utility bar in the mockup.
 */
export default function TopBar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth || {})
  const cartItems = useSelector((state) => state.cart?.items || [])
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <div className="bg-[#fffdf9] border-b border-gray-100 text-xs text-gray-600 py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Hotline & Service announcement */}
        <div className="hidden sm:flex items-center gap-4 text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-dao-red" />
            Hotline: <strong className="text-gray-700">0934 323 882</strong>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-dao-yellow font-medium">
            <Sparkles className="w-3 h-3" />
            Khắc tên & Lời chúc ý nghĩa theo yêu cầu
          </span>
        </div>

        {/* Right: User account & links */}
        <div className="flex items-center gap-5 ml-auto text-dao-red font-medium">
          {isAuthenticated ? (
            <Link
              to={ROUTES.PROFILE}
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <User className="w-3.5 h-3.5" />
              <span>{user?.name || 'Tài khoản'}</span>
            </Link>
          ) : (
            <>
              <Link
                to={ROUTES.LOGIN}
                className="inline-flex items-center gap-1 hover:underline"
              >
                <User className="w-3.5 h-3.5" />
                <span>Tài khoản</span>
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to={ROUTES.REGISTER}
                className="hover:underline"
              >
                Đăng ký
              </Link>
            </>
          )}

          <Link
            to={ROUTES.CART}
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Giỏ hàng ({cartCount})</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
