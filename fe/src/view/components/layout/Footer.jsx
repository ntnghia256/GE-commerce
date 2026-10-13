import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, QrCode } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Luxury Dark Footer component matching the mockup.
 * Displays contact highlights, 4 navigation columns,
 * and payment gateways (including VietQR per FR-FE-CHK-05).
 */
export default function Footer() {
  const { footerInfo } = HOME_MOCK_DATA

  return (
    <footer className="bg-[#121212] text-gray-400 pt-14 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section: Liên Hệ Với Chúng Tôi */}
        <div className="mb-10 pb-10 border-b border-neutral-800">
          <h3 className="text-white text-base md:text-lg font-serif font-bold uppercase tracking-wider mb-6">
            Liên hệ với chúng tôi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-dao-red shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300 font-medium">Địa chỉ showroom</p>
                <p className="text-gray-400">{footerInfo.address}</p>
              </div>
            </div>

            {/* Hotline */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-dao-red shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300 font-medium">Hotline tư vấn</p>
                <p className="text-gray-400">{footerInfo.hotline}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-dao-red shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300 font-medium">Email hỗ trợ</p>
                <p className="text-gray-400">{footerInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: 4 Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: THÔNG TIN */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Thông Tin
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerInfo.links.info.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: HỖ TRỢ */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Hỗ Trợ
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerInfo.links.support.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HƯỚNG DẪN */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Hướng Dẫn
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerInfo.links.guide.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CHÍNH SÁCH */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Chính Sách
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerInfo.links.policy.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Payment Badges */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500 text-center md:text-left">
            Bản quyền thuộc về <span className="text-gray-300">GĐHĐ Team</span> | Thiết kế và phát triển bởi Đội ngũ kỹ thuật
          </p>

          {/* Payment Gateways (VietQR, Visa, Master, COD) */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-500 uppercase tracking-wider">Thanh toán:</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-white text-blue-900 font-bold rounded text-[10px] tracking-tight">
                VISA
              </span>
              <span className="px-2 py-1 bg-white text-red-600 font-bold rounded text-[10px] tracking-tight flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block -mr-1" />
                <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full inline-block" />
              </span>
              <span className="px-2 py-1 bg-blue-600 text-white font-bold rounded text-[10px] flex items-center gap-1">
                <QrCode className="w-3 h-3" />
                VietQR
              </span>
              <span className="px-2 py-1 bg-neutral-800 text-gray-300 rounded text-[10px] border border-neutral-700">
                COD
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
