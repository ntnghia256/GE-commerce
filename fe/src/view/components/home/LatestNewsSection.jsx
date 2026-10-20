import { Link } from 'react-router-dom'
import { Clock, Eye, ArrowRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import FloralDecor from '../shared/FloralDecor'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'
import { useScrollReveal } from '../../../core/hooks/useScrollReveal'

/**
 * Latest News / Articles Section matching Cao Dai Gifts design.
 * Features:
 * - 2-column responsive layout
 * - Clean metadata (relative time, view count)
 * - Floral side decorations
 * - Smooth hover scale and card lift animations
 */
export default function LatestNewsSection() {
  const { latestNews } = HOME_MOCK_DATA
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 })

  return (
    <section
      ref={sectionRef}
      className={`relative max-w-7xl mx-auto px-4 py-8 md:py-12 reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* Decorative Floral Ornaments on side */}
      <FloralDecor
        position="top-left"
        color="yellow"
        size="md"
        className="absolute top-0 left-2 opacity-40 hidden xl:block"
      />
      <FloralDecor
        position="bottom-right"
        color="blue"
        size="md"
        className="absolute bottom-0 right-2 opacity-40 hidden xl:block"
      />

      {/* Decorative Section Header */}
      <SectionHeader subTitle="Tin tức" title="mới nhất" variant="news" />

      {/* 2-Column News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {latestNews.map((article) => (
          <article
            key={article.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-2xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
          >
            {/* Article Thumbnail */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                src={article.imageUrl}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Article Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-2 group-hover:text-[#034ea2] transition-colors line-clamp-2">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed flex-1">
                {article.excerpt}
              </p>

              {/* Meta Info Row */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>6 Giờ trước</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>1.2k lượt xem</span>
                  </span>
                </div>

                <Link
                  to={`/news/${article.id}`}
                  className="text-[#034ea2] font-bold text-xs inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Xem thêm</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
