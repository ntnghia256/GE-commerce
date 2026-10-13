import { Link } from 'react-router-dom'
import { Sparkles, Eye } from 'lucide-react'
import { formatCurrency } from '../../../core/utils/formatCurrency'

/**
 * Product Card component matching the mockup layout.
 * Displays square thumbnail, product title, formatted pricing,
 * and an oval pill action button for Customizer / Product Details.
 *
 * Conforms to FR-FE-PROD-02 & FR-FE-CUST-03.
 */
export default function ProductCard({ product, className = '' }) {
  if (!product) return null

  const {
    id,
    name,
    price,
    originalPrice,
    imageUrl,
    isCustomizable = true,
  } = product

  const customizeUrl = `/product/${id}/customize`
  const detailUrl = `/product/${id}`

  return (
    <div
      className={`group flex flex-col items-center text-center bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-lg border border-gray-100/80 ${className}`}
    >
      {/* Product Image Frame */}
      <div className="relative w-full aspect-square bg-[#fbfbf9] rounded-lg overflow-hidden mb-4 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Customizable Badge */}
        {isCustomizable && (
          <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-dao-red text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm border border-dao-red/20">
            <Sparkles className="w-3 h-3" />
            Cá nhân hóa
          </span>
        )}

        {/* Quick View Overlay Button */}
        <Link
          to={detailUrl}
          aria-label={`Xem chi tiết ${name}`}
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <span className="bg-white/95 text-gray-800 text-xs font-medium px-3.5 py-2 rounded-full shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            Xem chi tiết
          </span>
        </Link>
      </div>

      {/* Product Name */}
      <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 min-h-[2.5rem] mb-2 px-2 hover:text-dao-red transition-colors">
        <Link to={detailUrl}>{name}</Link>
      </h3>

      {/* Pricing Row */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-base md:text-lg font-bold text-dao-red">
          {formatCurrency(price)}
        </span>
        {originalPrice && originalPrice > price && (
          <span className="text-xs md:text-sm text-gray-400 line-through">
            {formatCurrency(originalPrice)}
          </span>
        )}
      </div>

      {/* Oval Pill Action Button */}
      <div className="mt-auto pt-1">
        <Link
          to={isCustomizable ? customizeUrl : detailUrl}
          className="inline-block px-7 py-2 rounded-full border border-dao-red/70 text-dao-red text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-200 hover:bg-dao-red hover:text-white hover:border-dao-red shadow-sm active:scale-95"
        >
          {isCustomizable ? 'TÙY BIẾN' : 'TÙY CHỌN'}
        </Link>
      </div>
    </div>
  )
}
