import { Send, RotateCcw, Headphones } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Service Highlights (Benefits Bar) matching the bottom layer of Cao Dai Gifts header.
 * Displays 3 core commitments in a floating glassic pill card:
 * 1. Giao hàng miễn phí
 * 2. Đổi trả dễ dàng
 * 3. Hỗ trợ nhiệt tình
 */
export default function ServiceHighlights() {
  const { serviceHighlights } = HOME_MOCK_DATA

  // Icon mapping with custom styling matching mockup
  const renderItemIcon = (name) => {
    return (
      <div className="relative flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {/* Yellow decorative sparkle dashes on left of icon */}
        <div className="absolute -left-2.5 flex flex-col items-center gap-0.5 text-amber-500 font-bold text-[9px] select-none opacity-80">
          <span className="transform -rotate-45">/</span>
          <span className="transform -rotate-12">-</span>
          <span className="transform rotate-45">\</span>
        </div>

        {/* Circular blue badge */}
        <div className="w-11 h-11 rounded-full bg-[#dbeafe] text-[#034ea2] flex items-center justify-center shadow-2xs border border-[#bfdbfe]">
          {name === 'Send' && (
            <Send className="w-5 h-5 text-[#034ea2] stroke-[2.2] transform -rotate-12 translate-x-0.5" />
          )}
          {name === 'RotateCcw' && (
            <RotateCcw className="w-5 h-5 text-[#034ea2] stroke-[2.2]" />
          )}
          {name === 'Headphones' && (
            <Headphones className="w-5 h-5 text-[#034ea2] stroke-[2.2]" />
          )}
        </div>
      </div>
    )
  }

  return (
    <section className="px-4 py-4 md:py-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Floating Glassic Pill Bar */}
        <div className="glassic-pill rounded-2xl md:rounded-3xl py-3 px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-blue-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
          {serviceHighlights.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-start md:justify-center gap-3.5 group cursor-default transition-all ${
                index !== 0 ? 'pt-3 md:pt-0' : ''
              }`}
            >
              {renderItemIcon(item.iconName)}

              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#034ea2] tracking-wide uppercase group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
