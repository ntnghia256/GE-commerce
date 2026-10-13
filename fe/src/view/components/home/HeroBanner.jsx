import { Link } from 'react-router-dom'
import { ChevronRight, Sparkles, Gift } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Hero Banner component matching the festive campaign banner in the mockup.
 * Displays holiday greeting, free gift wrapping & custom engraving promotion.
 */
export default function HeroBanner() {
  const { heroBanner } = HOME_MOCK_DATA

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f7c5c8] via-[#f5b8bc] to-[#f9d5d8] py-14 md:py-20 px-6">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-4 left-10 text-white text-4xl">❄</div>
        <div className="absolute top-12 left-1/3 text-white text-2xl">✨</div>
        <div className="absolute bottom-8 right-1/4 text-white text-3xl">❄</div>
        <div className="absolute top-1/2 right-12 text-white text-xl">✨</div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Text & Promotions */}
        <div className="text-center md:text-left max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-xs text-dao-red text-xs font-semibold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{heroBanner.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight drop-shadow-sm leading-tight">
            {heroBanner.title}
          </h1>

          <p className="text-xl sm:text-2xl font-serif font-semibold text-[#8b1524] tracking-wide">
            {heroBanner.highlight}
          </p>

          <p className="text-sm md:text-base text-gray-700 max-w-xl font-normal leading-relaxed">
            {heroBanner.description}
          </p>

          <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to={heroBanner.buttonLink}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-dao-red text-white text-sm font-semibold tracking-wider uppercase shadow-md hover:bg-red-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Gift className="w-4 h-4" />
              <span>{heroBanner.buttonText}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              to="/product/1/customize"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-dao-red text-sm font-semibold tracking-wider uppercase border border-dao-red/30 shadow-sm hover:bg-red-50 transition-all"
            >
              <span>Thử Tùy Biến Trực Tiếp</span>
            </Link>
          </div>
        </div>

        {/* Right: Festive Gift Box Visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 group">
            <img
              src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80"
              alt="Hộp quà lưu niệm cao cấp"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-medium">
                🎁 Tặng kèm thiệp chúc mừng & túi giấy sang trọng
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
