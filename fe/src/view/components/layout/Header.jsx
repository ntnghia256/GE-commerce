import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../../core/constants/routes'
import MiniCartDrawer from '../shared/MiniCartDrawer'
import SearchModal from '../shared/SearchModal'

/**
 * Detailed SVG Illustration of the Gift Box with ribbon, flowers and heart
 * Perfectly matching the Cao Dai Gifts branding.
 */
function GiftBoxIllustration() {
  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 animate-float-gentle select-none pointer-events-none hidden lg:block">
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Floating Mini Heart */}
        <path
          d="M130 52 C130 48 126 44 122 44 C118 44 116 47 115 49 C114 47 112 44 108 44 C104 44 100 48 100 52 C100 60 115 68 115 68 C115 68 130 60 130 52 Z"
          fill="#ef4444"
          className="animate-pulse-soft"
        />

        {/* Bottom Leaves & Floral accents */}
        <g opacity="0.95">
          {/* Green leaves left */}
          <path
            d="M26 122 C22 108 36 100 48 108 C46 116 38 126 26 122 Z"
            fill="#34d399"
          />
          <path
            d="M32 134 C20 128 26 114 38 116 C40 124 38 132 32 134 Z"
            fill="#10b981"
          />

          {/* Yellow blossom left */}
          <circle cx="46" cy="128" r="6" fill="#facc15" />
          <circle cx="41" cy="124" r="5" fill="#fde047" />
          <circle cx="51" cy="124" r="5" fill="#fde047" />
          <circle cx="43" cy="133" r="5" fill="#fde047" />
          <circle cx="49" cy="133" r="5" fill="#fde047" />
          <circle cx="46" cy="128" r="3" fill="#ea580c" />

          {/* Green leaves right */}
          <path
            d="M136 122 C140 108 126 100 114 108 C116 116 124 126 136 122 Z"
            fill="#34d399"
          />
          <path
            d="M130 134 C142 128 136 114 124 116 C122 124 124 132 130 134 Z"
            fill="#10b981"
          />

          {/* Orange-yellow flower right */}
          <circle cx="114" cy="128" r="6" fill="#f59e0b" />
          <circle cx="110" cy="124" r="5" fill="#fbbf24" />
          <circle cx="118" cy="124" r="5" fill="#fbbf24" />
          <circle cx="111" cy="133" r="5" fill="#fbbf24" />
          <circle cx="117" cy="133" r="5" fill="#fbbf24" />
          <circle cx="114" cy="128" r="3" fill="#b45309" />
        </g>

        {/* Gift Box Base */}
        <g filter="url(#boxShadow)">
          {/* Main Box Body */}
          <rect
            x="42"
            y="76"
            width="78"
            height="56"
            rx="5"
            fill="#60a5fa"
          />
          {/* Box Shadow tone */}
          <path
            d="M42 76 H120 V127 C120 129.761 117.761 132 115 132 H47 C44.2386 132 42 129.761 42 127 V76 Z"
            fill="url(#boxGradient)"
          />

          {/* Vertical Ribbon */}
          <rect x="73" y="76" width="16" height="56" fill="#facc15" />
          <rect x="73" y="76" width="3" height="56" fill="#fef08a" opacity="0.6" />

          {/* Box Lid */}
          <rect
            x="38"
            y="64"
            width="86"
            height="15"
            rx="4"
            fill="#93c5fd"
          />
          {/* Lid vertical ribbon */}
          <rect x="73" y="64" width="16" height="15" fill="#facc15" />
          <rect x="73" y="64" width="3" height="15" fill="#fef08a" opacity="0.6" />

          {/* Gift Tag hanging on a string */}
          <line x1="88" y1="72" x2="102" y2="86" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
          <g transform="translate(98, 82) rotate(15)">
            <rect x="0" y="0" width="18" height="26" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="9" cy="5" r="2" fill="#f43f5e" />
            {/* Heart on gift tag */}
            <path
              d="M9 13 C9 11 7 9 5 9 C3 9 2 10.5 2 12 C2 15 9 19 9 19 C9 19 16 15 16 12 C16 10.5 15 9 13 9 C11 9 9 11 9 13 Z"
              fill="#ef4444"
            />
          </g>

          {/* Big Golden Bow Loops on Top */}
          {/* Left loop */}
          <path
            d="M75 66 C60 42 42 54 58 64 C65 68 73 66 75 66 Z"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="1.5"
          />
          <path
            d="M71 63 C60 50 48 56 60 62 C65 64 69 63 71 63 Z"
            fill="#fef08a"
          />

          {/* Right loop */}
          <path
            d="M87 66 C102 42 120 54 104 64 C97 68 89 66 87 66 Z"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="1.5"
          />
          <path
            d="M91 63 C102 50 114 56 102 62 C97 64 93 63 91 63 Z"
            fill="#fef08a"
          />

          {/* Ribbon Center Knot */}
          <circle cx="81" cy="65" r="6" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
        </g>

        <defs>
          <linearGradient id="boxGradient" x1="42" y1="76" x2="120" y2="132" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity="0.4" />
          </linearGradient>
          <filter id="boxShadow" x="30" y="40" width="105" height="105" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.12" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

/**
 * Main Storefront Navigation Header.
 * Features:
 * - Wavy pastel background with subtle glassic blur
 * - Left: Hamburger menu & Cute illustrated gift box
 * - Center: "Cao Dai Gifts" bold dual-tone branding with ribbon flourish
 * - Right: Romantic handwritten tagline & Modern round action buttons
 */
export default function Header() {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart?.items || [])
  const totalItemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <>
      <header className="relative sticky top-0 z-40 glassic-header overflow-hidden transition-all duration-300">
        {/* Decorative Pastel Background Waves */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Left flowing pastel waves */}
          <svg
            className="absolute left-0 bottom-0 h-full w-72 md:w-96 text-blue-100/50"
            viewBox="0 0 380 140"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 140 C120 140 160 80 260 70 C310 65 350 85 380 95 V140 H0 Z"
              fill="#e0f2fe"
              opacity="0.75"
            />
            <path
              d="M0 140 C80 140 120 100 200 90 C250 85 290 105 320 115 V140 H0 Z"
              fill="#fef08a"
              opacity="0.5"
            />
          </svg>

          {/* Right flowing pastel waves */}
          <svg
            className="absolute right-0 bottom-0 h-full w-72 md:w-96 text-yellow-100/40"
            viewBox="0 0 380 140"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M380 140 C260 140 220 80 120 70 C70 65 30 85 0 95 V140 H380 Z"
              fill="#fef9c3"
              opacity="0.7"
            />
            <path
              d="M380 140 C300 140 260 100 180 90 C130 85 90 105 60 115 V140 H380 Z"
              fill="#dbeafe"
              opacity="0.55"
            />
          </svg>
        </div>

        {/* Main Content Bar */}
        <div className="max-w-7xl mx-auto px-4 h-24 sm:h-28 flex items-center justify-between gap-2">
          {/* Left Column: Hamburger Menu & Gift Box Illustration */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <button
              onClick={() => setIsNavDrawerOpen(true)}
              aria-label="Mở menu điều hướng"
              className="p-2.5 rounded-xl text-[#034ea2] hover:bg-blue-50/80 hover:scale-105 active:scale-95 transition-all focus:outline-none shadow-2xs"
            >
              <Menu className="w-7 h-7 stroke-[2.2]" />
            </button>

            {/* Gift Box Icon / Vector */}
            <GiftBoxIllustration />
          </div>

          {/* Center Column: Cao Dai Gifts Brand Logo */}
          <div className="text-center select-none flex-shrink-0 animate-fade-in-up">
            <Link
              to={ROUTES.HOME}
              className="group inline-flex flex-col items-center hover:opacity-95 transition-opacity"
            >
              {/* Ribbon bow loop graphic above logo */}
              <div className="flex items-center justify-center gap-1.5 mb-0.5 text-amber-500">
                {/* Left 3 sparkle dashes */}
                <span className="flex gap-0.5 text-xs font-bold opacity-80 select-none">
                  <span className="inline-block transform -rotate-45">/</span>
                  <span className="inline-block transform -rotate-12">|</span>
                  <span className="inline-block transform rotate-12">\</span>
                </span>

                {/* Golden Ribbon Bow Line Art */}
                <svg
                  className="w-12 h-6 text-amber-500 stroke-current group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 60 30"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Left bow loop */}
                  <path d="M30 18 C20 4 8 10 14 20 C18 26 27 20 30 18 Z" />
                  {/* Right bow loop */}
                  <path d="M30 18 C40 4 52 10 46 20 C42 26 33 20 30 18 Z" />
                  {/* Knot */}
                  <circle cx="30" cy="18" r="2.5" fill="#f59e0b" />
                </svg>

                {/* Right 3 sparkle dashes */}
                <span className="flex gap-0.5 text-xs font-bold opacity-80 select-none">
                  <span className="inline-block transform -rotate-12">/</span>
                  <span className="inline-block transform rotate-12">|</span>
                  <span className="inline-block transform rotate-45">\</span>
                </span>
              </div>

              {/* Main Brand Title: "Cao Dai Gifts" */}
              <div className="flex items-baseline justify-center tracking-tight leading-none group-hover:scale-[1.02] transition-transform duration-300">
                <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#034ea2] drop-shadow-2xs">
                  Cao Dai
                </span>
                <span className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#f39c12] ml-2 font-serif drop-shadow-2xs">
                  Gifts
                </span>
              </div>

              {/* Sub-brand text */}
              <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] md:tracking-[0.32em] uppercase font-bold text-[#034ea2] mt-1.5 opacity-90">
                Quà Tặng Lưu Niệm &amp; Thủ Công
              </span>
            </Link>
          </div>

          {/* Right Column: Slogan & Action Icons */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 flex-1">
            {/* Romantic handwritten slogan (Visible on md+) */}
            <div className="hidden lg:flex flex-col items-center justify-center font-handwriting text-[#034ea2] select-none transform -rotate-3 leading-tight mr-1">
              <span className="text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
                Trao yêu thương
              </span>
              <span className="text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
                qua từng món quà
              </span>
              <span className="text-sm mt-0.5 animate-pulse-soft">❤️</span>
            </div>

            {/* Circular Glassic Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Tìm kiếm sản phẩm"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e3f0fc]/90 hover:bg-[#cbe3fd] text-[#034ea2] flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95 transition-all"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Circular Glassic Cart Button with Red Notification Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Xem giỏ hàng"
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e3f0fc]/90 hover:bg-[#cbe3fd] text-[#034ea2] flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 bg-[#ef4444] text-white text-[11px] font-extrabold rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                {totalItemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer Overlay */}
      {isNavDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsNavDrawerOpen(false)}
          />
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl p-6 flex flex-col z-10 animate-slide-down">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="font-serif font-bold text-lg text-[#034ea2]">
                Danh Mục &amp; Điều Hướng
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
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-[#034ea2] transition-colors"
              >
                Trang chủ
              </Link>
              <Link
                to="/category/qua-tang"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-[#034ea2] transition-colors"
              >
                Quà tặng lưu niệm
              </Link>
              <Link
                to="/category/do-trang-tri"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-[#034ea2] transition-colors"
              >
                Đồ trang trí bàn thờ &amp; gia đình
              </Link>
              <Link
                to="/category/do-dung-ca-nhan"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-[#034ea2] transition-colors"
              >
                Sổ tay &amp; Vật phẩm cá nhân
              </Link>
              <Link
                to="/product/1/customize"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-amber-600 hover:bg-amber-50 transition-colors"
              >
                ✨ Bộ tùy biến cá nhân hóa (Customizer)
              </Link>
              <Link
                to="/news"
                onClick={() => setIsNavDrawerOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-[#034ea2] transition-colors"
              >
                Tin tức &amp; Văn hóa
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
