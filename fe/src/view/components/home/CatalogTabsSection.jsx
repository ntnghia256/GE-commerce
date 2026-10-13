import { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'
import ProductCard from '../shared/ProductCard'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Catalog Section with Category Filter Tabs (FR-FE-CAT-01).
 * Allows instant category switching without page reloads.
 */
export default function CatalogTabsSection() {
  const { catalogTabs, allProducts } = HOME_MOCK_DATA
  const [activeTab, setActiveTab] = useState('qua-tang')

  // Filter products based on activeTab
  const filteredProducts =
    activeTab === 'all'
      ? allProducts
      : allProducts.filter((item) => item.category === activeTab)

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Decorative Section Header */}
      <SectionHeader subTitle="Tất cả" title="sản phẩm" />

      {/* Category Filter Tabs Bar */}
      <div className="flex items-center justify-center gap-6 md:gap-10 border-b border-gray-100 mb-8 overflow-x-auto pb-2">
        {catalogTabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-3 text-xs md:text-sm font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                isActive
                  ? 'text-dao-red'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-dao-red rounded-full" />
              )}
            </button>
          )
        })}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8 transition-opacity duration-300">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="shadow-xs hover:shadow-xl"
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-400 text-sm">
            Hiện chưa có sản phẩm trong danh mục này. Vui lòng quay lại sau!
          </div>
        )}
      </div>
    </section>
  )
}
