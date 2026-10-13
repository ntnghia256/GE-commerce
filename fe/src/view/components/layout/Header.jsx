import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../../core/constants/routes'
import MiniCartDrawer from '../shared/MiniCartDrawer'
import SearchModal from '../shared/SearchModal'

/**
 * Main Storefront Navigation Header.
 * Features:
 * - Left: Hamburger menu toggle for navigation drawer
 * - Center: Calligraphic brand logo ("GĐHĐ E-Commerce")
 * - Right: Search modal trigger & Cart icon with red item count badge
 * Matches the layout image directly.
 */
export default function Header() {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart?.items || [])
  const totalItemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Left: Hamburger Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsNavDrawerOpen(true)}
              aria-label="Mở menu điều hướng"
              className="p-2 -ml-2 text-gray-700 hover:text-dao-red transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>

          {/* Center: Brand Logo in Calligraphic / Script style */}
          <div className="text-center select-none">
            <Link to={ROUTES.HOME} className="group inline-flex flex-col items-center">
              {/* Script style brand emblem */}
              <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-wide text-dao-red group-hover:text-red-700 transition-colors drop-shadow-xs">
                Gia Đình Hưng Đạo
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-dao-yellow font-medium">
                Quà Tặng Lưu Niệm & Thủ Công
              </span>
            </Link>
          </div>

          {/* Right: Search & Cart Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Tìm kiếm sản phẩm"
              className="p-2 text-gray-700 hover:text-dao-red transition-colors"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Shopping Cart Trigger with Red Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Xem giỏ hàng"
              className="relative p-2 text-gray-700 hover:text-dao-red transition-colors"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute top-1 right-0 min-w-4 h-4 px-1 bg-dao-red text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                {totalItemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer Overlay (Opened by Hamburger button) */}
      {isNavDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsNavDrawerOpen(false)}
          />
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl p-6 flex flex-col z-10 animate-slideRight">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="font-serif font-bold text-lg text-dao-red">
                Danh Mục & Điều Hướng
              </span>
              <button
                onClick={() => setIsNavDrawerOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-6 space-y-2 overflow-y-auto">
              <Link
                to={ROUTES.HOME}
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-red-50 hover:text-dao-red transition-colors"
              >
                Trang chủ
              </Link>
              <Link
                to="/category/qua-tang"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-red-50 hover:text-dao-red transition-colors"
              >
                Quà tặng lưu niệm
              </Link>
              <Link
                to="/category/do-trang-tri"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-red-50 hover:text-dao-red transition-colors"
              >
                Đồ trang trí bàn thờ & gia đình
              </Link>
              <Link
                to="/category/do-dung-ca-nhan"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-red-50 hover:text-dao-red transition-colors"
              >
                Sổ tay & Vật phẩm cá nhân
              </Link>
              <Link
                to="/product/1/customize"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-dao-yellow hover:bg-yellow-50 transition-colors"
              >
                ✨ Bộ tùy biến cá nhân hóa (Customizer)
              </Link>
              <Link
                to="/news"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-red-50 hover:text-dao-red transition-colors"
              >
                Tin tức & Văn hóa
              </Link>
            </nav>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-1">
              <p>Hotline: 0934 323 882</p>
              <p>Email: support@gdhdecom.vn</p>
            </div>
          </div>
        </div>
      )}

      {/* Mini Cart Drawer */}
      <MiniCartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
