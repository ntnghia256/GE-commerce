import { Link } from 'react-router-dom'
import { Sparkles, Eye, ShoppingBag, Star, Flame } from 'lucide-react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { addToCart } from '../../../modules/cart/slices/cartSlice'
import { formatCurrency } from '../../../core/utils/formatCurrency'

/**
 * Compact, modern ProductCard component matching Cao Dai Gifts design.
 * Features:
 * - Reduced compact scale for 4-column responsive grid
 * - Discount / Popularity badge (amber/red flame badge)
 * - 5-star rating with review count
 * - Smooth micro-animations (card lift, image zoom, focus ring)
 * - Primary "Thêm vào giỏ" button with instant Redux cart dispatch
 */
export default function ProductCard({ product, className = '', index = 0 }) {
  const dispatch = useDispatch()

  if (!product) return null

  const {
    id,
    name,
    price,
    originalPrice,
    imageUrl,
    rating = 5,
    reviewCount = 38,
    isCustomizable = true,
  } = product

  const customizeUrl = `/product/${id}/customize`
  const detailUrl = `/product/${id}`

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(
      addToCart({
        productId: id,
        name,
        price,
        quantity: 1,
        thumbnail: imageUrl,
      })
    )

    toast.success(`Đã thêm "${name}" vào giỏ hàng!`, {
      style: {
        borderRadius: '12px',
        background: '#034ea2',
        color: '#fff',
        fontSize: '13px',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#034ea2',
      },
    })
  }

  return (
    <div
      style={{ animationDelay: `${index * 60}ms` }}
      className={`group relative flex flex-col bg-white rounded-2xl p-3 border border-slate-100/90 shadow-2xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-[#034ea2]/40 ${className}`}
    >
      {/* Product Image Frame */}
      <div className="relative w-full aspect-square bg-[#f8fafc] rounded-xl overflow-hidden mb-2.5 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Hot / Discount Pill Badge */}
        <span className="absolute top-2 left-2 inline-flex items-center gap-1 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs select-none">
          <Flame className="w-2.5 h-2.5 fill-current" />
          <span>Giảm giá hot</span>
        </span>

        {/* Quick View Action on Hover */}
        <Link
          to={detailUrl}
          aria-label={`Xem chi tiết ${name}`}
          className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <span className="bg-white/95 text-slate-800 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5" />
            Xem nhanh
          </span>
        </Link>
      </div>

      {/* Product Title */}
      <h3 className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 min-h-[2.25rem] mb-1.5 hover:text-[#034ea2] transition-colors text-left leading-snug">
        <Link to={detailUrl}>{name}</Link>
      </h3>

      {/* Pricing Row */}
      <div className="flex items-baseline gap-2 mb-1.5 text-left">
        <span className="text-sm sm:text-base font-extrabold text-[#ef4444]">
          {formatCurrency(price)}
        </span>
        {originalPrice && originalPrice > price && (
          <span className="text-[11px] sm:text-xs text-slate-400 line-through">
            {formatCurrency(originalPrice)}
          </span>
        )}
      </div>

      {/* Rating Row (Mockup Style: Yellow Stars + Review Count) */}
      <div className="flex items-center gap-1 mb-3 text-left">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-current text-amber-400" />
          ))}
        </div>
        <span className="text-[11px] font-bold text-amber-600 ml-0.5">
          {rating.toFixed(1)}
        </span>
        <span className="text-[10px] text-slate-400">
          ({reviewCount} đánh giá)
        </span>
      </div>

      {/* Action Buttons Row */}
      <div className="mt-auto pt-1 flex items-center gap-1.5">
        <button
          onClick={handleAddToCart}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-[#034ea2] hover:bg-blue-800 text-white text-xs font-bold shadow-xs hover:shadow-md active:scale-95 transition-all duration-200"
        >
          <ShoppingBag className="w-3.5 h-3.5 stroke-[2.2]" />
          <span>Thêm vào giỏ</span>
        </button>

        {isCustomizable && (
          <Link
            to={customizeUrl}
            title="Tùy biến khắc chữ / hình ảnh"
            className="p-1.5 rounded-full border border-blue-200 text-[#034ea2] hover:bg-blue-50 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}
