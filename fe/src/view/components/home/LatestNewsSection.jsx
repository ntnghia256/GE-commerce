import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Latest News / Blog Section (FR-FE-CAT-01).
 * Features 2 cultural & gift guide articles matching the layout image.
 */
export default function LatestNewsSection() {
  const { latestNews } = HOME_MOCK_DATA

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Decorative Section Header */}
      <SectionHeader subTitle="Tin tức" title="mới nhất" />

      {/* 2-Column News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {latestNews.map((article) => (
          <article
            key={article.id}
            className="group bg-white rounded-xl overflow-hidden border border-gray-100/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Article Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={article.imageUrl}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Article Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-base md:text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-dao-red transition-colors line-clamp-2">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h3>

              <p className="text-xs md:text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed flex-1">
                {article.excerpt}
              </p>

              {/* Meta Info */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    {article.author}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {article.date}
                  </span>
                </div>

                <Link
                  to={`/news/${article.id}`}
                  className="text-dao-red font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Chi tiết</span>
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
