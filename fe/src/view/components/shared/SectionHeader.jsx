/**
 * Reusable Section Header with decorative ornament and two-tiered typography.
 * Directly matches the Cao Dai Gifts branding.
 *
 * Variants:
 * - 'default': Golden ribbon bow ornament above
 * - 'sale': Curved red ribbon badge ("Được yêu thích") above
 * - 'news': Sparkles accent flanking the title
 */
export default function SectionHeader({
  subTitle = 'Sản phẩm',
  title = 'khuyến mãi',
  variant = 'default',
  badgeText = '',
  className = '',
}) {
  const isSale = variant === 'sale' || title.toLowerCase().includes('khuyến mãi')

  return (
    <div className={`text-center my-8 md:my-10 ${className} select-none`}>
      {/* 1. Top Decorative Element */}
      {isSale ? (
        /* Red Ribbon Badge for Flash Sale */
        <div className="flex justify-center mb-2 animate-pulse-soft">
          <div className="relative inline-flex items-center justify-center px-4 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
            <span>{badgeText || 'Được yêu thích'}</span>
          </div>
        </div>
      ) : (
        /* Golden Ribbon Bow Ornament */
        <div className="flex justify-center items-center gap-1.5 mb-1.5 text-amber-500">
          <span className="flex gap-0.5 text-[10px] font-bold opacity-75">
            <span className="transform -rotate-45">/</span>
            <span className="transform -rotate-12">|</span>
            <span className="transform rotate-12">\</span>
          </span>

          <svg
            className="w-10 h-5 text-amber-500 stroke-current hover:scale-110 transition-transform duration-300"
            viewBox="0 0 60 30"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M30 18 C20 4 8 10 14 20 C18 26 27 20 30 18 Z" />
            <path d="M30 18 C40 4 52 10 46 20 C42 26 33 20 30 18 Z" />
            <circle cx="30" cy="18" r="2.5" fill="#f59e0b" />
          </svg>

          <span className="flex gap-0.5 text-[10px] font-bold opacity-75">
            <span className="transform -rotate-12">/</span>
            <span className="transform rotate-12">|</span>
            <span className="transform rotate-45">\</span>
          </span>
        </div>
      )}

      {/* 2. Two-tiered Heading */}
      <div className="space-y-0.5">
        <span className="block text-base md:text-xl font-serif text-slate-700 tracking-wide">
          {subTitle}
        </span>

        <div className="flex items-center justify-center gap-2">
          {/* Decorative Sparkle left */}
          <span className="text-amber-400 text-xs sm:text-sm font-bold opacity-80 select-none">
            ✨
          </span>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide capitalize ${
              isSale ? 'text-[#ef4444]' : 'text-[#034ea2]'
            }`}
          >
            {title}
          </h2>

          {/* Decorative Sparkle right */}
          <span className="text-amber-400 text-xs sm:text-sm font-bold opacity-80 select-none">
            ✨
          </span>
        </div>
      </div>

      {/* 3. Three Diamond / Dot divider */}
      <div className="flex justify-center items-center gap-1.5 mt-2.5">
        <span className="w-1.5 h-1.5 rotate-45 bg-blue-200 rounded-[1px]" />
        <span
          className={`w-2 h-2 rotate-45 rounded-[1px] ${
            isSale ? 'bg-[#ef4444]' : 'bg-[#034ea2]'
          }`}
        />
        <span className="w-1.5 h-1.5 rotate-45 bg-blue-200 rounded-[1px]" />
      </div>
    </div>
  )
}
