import { Gift, Heart, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '../../../core/hooks/useScrollReveal'

/**
 * Brand Badges & Trust Quality Seals row above the Footer.
 * Displays 3 core brand pillars in modern blue theme.
 */
export default function BrandBadgesSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 })

  const badges = [
    {
      id: 1,
      icon: Gift,
      title: 'GIFT & THỦ CÔNG',
      subtitle: 'Thủ công tinh xảo',
    },
    {
      id: 2,
      icon: Heart,
      title: '100% CHẤT LƯỢNG',
      subtitle: 'Quà tặng an tâm',
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'BẢO HÀNH CHÍNH HÃNG',
      subtitle: 'Đổi trả dễ dàng',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`bg-white border-t border-blue-50 py-10 md:py-14 px-4 reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {badges.map((badge) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.id}
              className="flex flex-col items-center text-center group cursor-default transition-all duration-300"
            >
              {/* Circular Blue Icon Badge */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#e0f2fe] text-[#034ea2] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#034ea2] group-hover:text-white transition-all duration-300 shadow-2xs">
                <Icon className="w-7 h-7 stroke-[2]" />
              </div>

              {/* Title */}
              <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-800 mb-1 group-hover:text-[#034ea2] transition-colors">
                {badge.title}
              </h4>

              {/* Subtitle */}
              <span className="text-xs text-slate-400 font-medium">
                {badge.subtitle}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
