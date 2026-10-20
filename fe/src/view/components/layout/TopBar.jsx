import { Link } from 'react-router-dom'
import { User, ShoppingBag, Phone, Sparkles, LogIn } from 'lucide-react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../../core/constants/routes'

/**
 * TopBar component matching Cao Dai Gifts design.
 * Features:
 * - Left: Hotline pill + Handwritten custom text announcement
 * - Right: Account, Register, Cart with smooth glassic style
 */
export default function TopBar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth || {})
  const cartItems = useSelector((state) => state.cart?.items || [])
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <div className="bg-[#edf5fd]/90 backdrop-blur-xs border-b border-[#dcecfb] text-xs text-[#0a4d9c] py-2 px-4 animate-slide-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Hotline & Service announcement */}
        <div className="flex items-center gap-3 text-xs">
          <a
            href="tel:0934323882"
            className="inline-flex items-center gap-1.5 font-medium hover:text-blue-700 transition-colors"
          >
            <span className="w-5 h-5 rounded-full bg-[#0a4d9c] text-white flex items-center justify-center shadow-2xs">
              <Phone className="w-3 h-3 fill-current" />
            </span>
            <span>
              Hotline: <strong className="font-bold">0934 323 882</strong>
            </span>
          </a>

          <span className="hidden sm:inline text-blue-200">|</span>

          <span className="hidden md:inline-flex items-center gap-1 font-handwriting text-base font-semibold text-[#0a4d9c]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse-soft" />
            <span>Khắc tên &amp; Lời chúc ý nghĩa theo yêu cầu</span>
            <span>💛</span>
          </span>
        </div>

        {/* Right: User account & links */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto font-medium text-[#0a4d9c]">
          {isAuthenticated ? (
            <Link
              to={ROUTES.PROFILE}
              className="inline-flex items-center gap-1.5 hover:text-blue-700 transition-colors"
            >
              <User className="w-3.5 h-3.5 stroke-[2]" />
              <span>{user?.name || 'Tài khoản'}</span>
            </Link>
          ) : (
            <>
              <Link
                to={ROUTES.LOGIN}
                className="inline-flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              >
                <User className="w-3.5 h-3.5 stroke-[2]" />
                <span>Tài khoản</span>
              </Link>

              <span className="text-blue-200">|</span>

              <Link
                to={ROUTES.REGISTER}
                className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5 stroke-[2]" />
                <span>Đăng ký</span>
              </Link>
            </>
          )}

          <span className="text-blue-200">|</span>

          <Link
            to={ROUTES.CART}
            className="inline-flex items-center gap-1.5 hover:text-blue-700 transition-colors group"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[2] group-hover:scale-110 transition-transform" />
            <span>Giỏ hàng ({cartCount})</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
