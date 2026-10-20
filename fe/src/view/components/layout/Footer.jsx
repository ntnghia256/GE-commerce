import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Modern Brand Navy Footer component matching Cao Dai Gifts design.
 * Features:
 * - Deep navy blue background (#0c3272)
 * - Brand logo & thoughtful tagline
 * - Circular social icon links
 * - 3 clean navigation columns (Liên hệ, Thông tin, Hỗ trợ)
 * - Security & payment badges
 */
export default function Footer() {
  const { footerInfo } = HOME_MOCK_DATA

  return (
    <footer className="bg-[#0c3272] text-blue-100/80 pt-12 md:pt-16 pb-8 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Column 1 & 2: Brand Identity & Social Links */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex flex-col items-start select-none">
              <div className="flex items-baseline tracking-tight">
                <span className="font-extrabold text-2xl sm:text-3xl text-white">
                  Cao Dai
                </span>
                <span className="font-bold text-2xl sm:text-3xl text-[#facc15] ml-1.5 font-serif">
                  Gifts
                </span>
              </div>
              <span className="text-[10px] tracking-[0.28em] uppercase font-bold text-blue-200 mt-0.5">
                QUÀ TẶNG LƯU NIỆM &amp; THỦ CÔNG
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-blue-100/70 max-w-sm leading-relaxed">
              Sống chậm để trân trọng những điều đẹp đẽ bên trong mỗi món quà lưu niệm và chế tác cá nhân hóa.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 text-white flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 text-white flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">📷</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 text-white flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">🎵</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 text-white flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">▶</span>
              </a>
            </div>
          </div>

          {/* Column 3: LIÊN HỆ VỚI CHÚNG TÔI */}
          <div className="space-y-3">
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h4>
            <div className="space-y-2.5 text-xs text-blue-100/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{footerInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${footerInfo.hotline.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  Hotline: {footerInfo.hotline}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${footerInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {footerInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: THÔNG TIN */}
          <div className="space-y-3">
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
              THÔNG TIN
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/75">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/policy/purchase" className="hover:text-white transition-colors">
                  Chính sách mua hàng
                </Link>
              </li>
              <li>
                <Link to="/policy/returns" className="hover:text-white transition-colors">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link to="/guide/payment" className="hover:text-white transition-colors">
                  Hướng dẫn thanh toán
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: HỖ TRỢ */}
          <div className="space-y-3">
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
              HỖ TRỢ
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/75">
              <li>
                <Link to="/profile" className="hover:text-white transition-colors">
                  Tài khoản
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-white transition-colors">
                  Đơn hàng
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">
                  Vận chuyển
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  FAQs (Câu hỏi thường gặp)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Security */}
        <div className="pt-6 border-t border-blue-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <p>© 2026 Cao Dai Gifts. All rights reserved.</p>

          <div className="flex items-center gap-3 select-none">
            {/* Payment Method Badges */}
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-white text-blue-900 font-extrabold rounded text-[10px] tracking-tight">
                VISA
              </span>
              <span className="px-2 py-0.5 bg-white text-rose-600 font-extrabold rounded text-[10px] tracking-tight">
                Mastercard
              </span>
              <span className="px-2 py-0.5 bg-blue-600 text-white font-extrabold rounded text-[10px]">
                VietQR
              </span>
            </div>

            <span className="text-blue-300/40">|</span>

            <div className="inline-flex items-center gap-1 text-blue-100/80 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Thanh toán an toàn</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
