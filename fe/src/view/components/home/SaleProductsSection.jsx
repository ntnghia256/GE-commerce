import SectionHeader from '../shared/SectionHeader'
import ProductCard from '../shared/ProductCard'
import FloralDecor from '../shared/FloralDecor'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'
import { useScrollReveal } from '../../../core/hooks/useScrollReveal'

/**
 * Promotional / Sale Products Section matching Cao Dai Gifts design.
 * Features:
 * - 4-column responsive grid (2 on mobile, 3 on tablet, 4 on desktop)
 * - Compact ProductCard scale
 * - Scroll reveal animation + Staggered card appearance
 * - Decorative corner floral illustrations
 */
export default function SaleProductsSection() {
  const { saleProducts } = HOME_MOCK_DATA
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 })

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
        className="absolute top-0 left-0 opacity-40 hidden xl:block"
      />
      <FloralDecor
        position="bottom-right"
        color="blue"
        size="md"
        className="absolute bottom-0 right-0 opacity-40 hidden xl:block"
      />

      {/* Section Header with 'Sale' Ribbon Badge */}
      <SectionHeader
        subTitle="Sản phẩm"
        title="khuyến mãi"
        variant="sale"
        badgeText="Được yêu thích"
      />

      {/* 4-Column Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
        {saleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            className="animate-fade-in-up"
          />
        ))}
      </div>
    </section>
  )
}
