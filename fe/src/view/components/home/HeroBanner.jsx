import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Wand2 } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'
import FloralDecor from '../shared/FloralDecor'

/**
 * Hero Banner component matching the new Cao Dai Gifts aesthetic.
 * Features:
 * - Soft pastel blue/yellow gradient background with floral corners
 * - Dual-tone expressive typography: "Gửi trọn yêu thương"
 * - Dual CTA buttons: "Khám phá ngay" + "Thử tùy biến trực tiếp"
 * - Elegant gift box visual card with photo and tag
 */
export default function HeroBanner() {
  const { heroBanner } = HOME_MOCK_DATA

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e0f2fe]/90 via-[#f0f7ff] to-[#fef9c3]/70 py-12 md:py-16 px-4 md:px-8 border-b border-blue-100/60">
      {/* Decorative Floral Ornaments at 4 Corners */}
      <FloralDecor
        position="top-left"
        color="blue"
        size="lg"
        className="absolute top-2 left-2 opacity-60 hidden sm:block"
      />
      <FloralDecor
        position="top-right"
        color="blue"
        size="md"
        className="absolute top-2 right-2 opacity-50 hidden sm:block"
      />
      <FloralDecor
        position="bottom-left"
        color="yellow"
        size="md"
        className="absolute bottom-2 left-4 opacity-50 hidden sm:block"
      />
      <FloralDecor
        position="bottom-right"
        color="mixed"
        size="lg"
        className="absolute bottom-2 right-4 opacity-70 hidden sm:block"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        {/* Left Column: Heading, Subtitle & CTA Buttons */}
        <div className="text-center lg:text-left max-w-2xl space-y-4 md:space-y-5 animate-fade-in-up">
          {/* Small cloud/pill badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/80 backdrop-blur-xs text-[#034ea2] text-xs font-bold tracking-wider uppercase shadow-2xs border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse-soft" />
            <span>Trao gửi yêu thương</span>
          </div>

          {/* Main Dual-tone Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#034ea2] tracking-tight leading-tight">
              Gửi trọn
            </h1>
            <p className="text-5xl sm:text-6xl lg:text-7xl font-handwriting font-bold text-[#f39c12] tracking-wide -rotate-1 select-none drop-shadow-2xs">
              yêu thương
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#034ea2] opacity-90">
            QUÀ TẶNG LƯU NIỆM &amp; THỦ CÔNG
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-600 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
            {heroBanner.description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-3.5">
            <Link
              to={heroBanner.buttonLink || '/category/qua-tang'}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#034ea2] hover:bg-blue-800 text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Khám phá ngay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/product/1/customize"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-blue-50/80 text-[#034ea2] text-xs sm:text-sm font-bold tracking-wider uppercase border-2 border-[#034ea2] shadow-xs active:scale-95 transition-all duration-200"
            >
              <Wand2 className="w-4 h-4 text-[#f39c12]" />
              <span>Thử tùy biến trực tiếp</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Handcrafted Gift Photo Card */}
        <div className="relative flex-shrink-0 animate-fade-in-up">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 group hover:shadow-blue-500/15 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
              alt="Hộp quà lưu niệm cao cấp"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Bottom Glassic Notification Banner */}
            <div className="absolute inset-x-3 bottom-3 p-3 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs font-medium flex items-center gap-2 shadow-lg border border-white/20">
              <span className="text-base select-none">🎁</span>
              <span className="line-clamp-1">
                Tặng kèm thiệp chúc mừng &amp; túi quà sang trọng
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
