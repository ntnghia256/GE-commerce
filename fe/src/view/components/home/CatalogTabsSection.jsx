import { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'
import ProductCard from '../shared/ProductCard'
import FloralDecor from '../shared/FloralDecor'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'
import { useScrollReveal } from '../../../core/hooks/useScrollReveal'

/**
 * Catalog Section with Category Filter Tabs (FR-FE-CAT-01).
 * Features:
 * - 4-column responsive grid (2 on mobile, 3 on tablet, 4 on desktop)
 * - Compact ProductCard scale
 * - Smooth tab switching with fade-in-up animation
 * - Decorative gift icon & floral accents
 */
export default function CatalogTabsSection() {
  const { catalogTabs, allProducts } = HOME_MOCK_DATA
  const [activeTab, setActiveTab] = useState('qua-tang')
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 })

  // Filter products based on activeTab
  const filteredProducts =
    activeTab === 'all'
      ? allProducts
      : allProducts.filter((item) => item.category === activeTab)

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
        color="blue"
        size="md"
        className="absolute top-2 left-2 opacity-40 hidden xl:block"
      />
      <FloralDecor
        position="bottom-right"
        color="yellow"
        size="md"
        className="absolute bottom-2 right-2 opacity-40 hidden xl:block"
      />

      {/* Decorative Section Header */}
      <SectionHeader subTitle="Tất cả" title="sản phẩm" variant="default" />

      {/* Category Filter Tabs Bar with Gift Box Accent */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 border-b border-blue-100/80 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {catalogTabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3 sm:px-4 py-2.5 text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap rounded-t-lg ${
                isActive
                  ? 'text-[#034ea2] bg-blue-50/70 font-extrabold shadow-2xs'
                  : 'text-slate-500 hover:text-[#034ea2] hover:bg-slate-50'
              }`}
            >
              <span>{tab.name}</span>

              {/* Active Underline Pill */}
              {isActive && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#034ea2] rounded-full" />
              )}
            </button>
          )
        })}

        {/* Cute Gift Box Icon on Tab Bar */}
        <span
          className="hidden md:inline-flex items-center text-rose-500 text-lg ml-2 animate-bounce-gentle select-none"
          title="Nhiều quà tặng độc đáo"
        >
          🎁
        </span>
      </div>

      {/* 4-Column Responsive Products Grid with Animated Mount on Tab Change */}
      <div
        key={activeTab}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto animate-fade-in-up"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-400 text-sm">
            Hiện chưa có sản phẩm trong danh mục này. Vui lòng quay lại sau!
          </div>
        )}
      </div>
    </section>
  )
}
