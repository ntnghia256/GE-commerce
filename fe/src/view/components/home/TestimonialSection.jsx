import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'
import { useScrollReveal } from '../../../core/hooks/useScrollReveal'

/**
 * Full-width Testimonial Section with warm ambient atmosphere.
 * Matches Cao Dai Gifts customer review showcase.
 */
export default function TestimonialSection() {
  const { testimonials } = HOME_MOCK_DATA
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 })

  const current = testimonials[currentIndex] || testimonials[0]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      ref={sectionRef}
      className={`relative my-10 md:my-14 max-w-5xl mx-auto px-4 reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* Testimonial Card with Sunset Wheat Background */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl p-8 md:p-12 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />

        {/* Ambient Dark & Warm Gold Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80 backdrop-blur-2xs" />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Avatar with Golden Ring */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white ring-4 ring-amber-400 shadow-md"
            />

            <div className="text-left">
              <h3 className="text-lg md:text-xl font-bold text-amber-300 font-serif tracking-wide">
                {current.name}
              </h3>

              {/* 5 Stars Rating */}
              <div className="flex items-center gap-1 mt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-amber-200 font-semibold ml-1">
                  • 4.9p
                </span>
              </div>
            </div>
          </div>

          {/* Customer Quote */}
          <p className="text-base sm:text-lg md:text-xl italic font-serif text-slate-100 leading-relaxed my-3 px-2">
            "{current.quote}"
          </p>

          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={handlePrev}
                aria-label="Đánh giá trước"
                className="p-1 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Chuyển đến đánh giá ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === i ? 'bg-amber-400 w-6' : 'bg-white/40 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Đánh giá kế tiếp"
                className="p-1 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
