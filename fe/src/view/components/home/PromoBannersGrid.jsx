import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * 3-Column Promo Banners Grid beneath Hero section.
 * Highlights curated collections: Gift boxes, Handcrafting, and Home decor.
 */
export default function PromoBannersGrid() {
  const { promoBanners } = HOME_MOCK_DATA

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {promoBanners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className="group relative overflow-hidden rounded-xl shadow-xs hover:shadow-md transition-all duration-300 aspect-[16/10] block"
          >
            {/* Background image */}
            <img
              src={banner.imageUrl}
              alt={banner.title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity group-hover:opacity-90 flex flex-col justify-end p-5">
              <span className="text-dao-yellow text-xs font-semibold tracking-wider uppercase mb-1">
                {banner.subtitle}
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-white text-base md:text-lg font-serif font-bold group-hover:text-red-200 transition-colors">
                  {banner.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
