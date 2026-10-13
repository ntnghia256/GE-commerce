import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Full-width Testimonial Section with warm festive background.
 * Displays customer portrait, designation, and heartfelt testimonial quote.
 */
export default function TestimonialSection() {
  const { testimonials } = HOME_MOCK_DATA
  const [currentIndex, setCurrentIndex] = useState(0)

  const current = testimonials[currentIndex] || testimonials[0]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative my-12 py-16 md:py-24 overflow-hidden">
      {/* Background with warm golden festive ambient image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      {/* Dark & Gold ambient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-blur-2xs" />

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
        {/* Customer Avatar with subtle golden border */}
        <div className="relative inline-block mb-4">
          <img
            src={current.avatar}
            alt={current.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-3 border-white/90 shadow-xl mx-auto ring-4 ring-dao-yellow/40"
          />
        </div>

        {/* Customer Name & Designation */}
        <h3 className="text-base md:text-lg font-serif font-bold text-warm-yellow tracking-wide mb-4">
          {current.name} - <span className="font-sans text-xs font-normal text-gray-300 uppercase tracking-widest">{current.role}</span>
        </h3>

        {/* Quote Icon */}
        <div className="flex justify-center mb-3 text-white/50">
          <Quote className="w-8 h-8 rotate-180" />
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm md:text-base lg:text-lg italic text-gray-100 font-serif leading-relaxed max-w-2xl mx-auto">
          "{current.quote}"
        </p>

        {/* Navigation Controls if more than 1 testimonial */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Lời chứng thực trước"
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Chuyển đến lời chứng thực ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === i ? 'bg-dao-yellow w-6' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              aria-label="Lời chứng thực kế tiếp"
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
