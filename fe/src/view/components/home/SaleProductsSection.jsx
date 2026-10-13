import SectionHeader from '../shared/SectionHeader'
import ProductCard from '../shared/ProductCard'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Promotional / Sale Products Section (FR-FE-CAT-01, FR-FE-PROD-02).
 * Displays highlighted promotional products with customizer capability.
 */
export default function SaleProductsSection() {
  const { saleProducts } = HOME_MOCK_DATA

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Decorative Section Header */}
      <SectionHeader subTitle="Sản phẩm" title="khuyến mãi" />

      {/* Product Grid matching the 2-column showcase in the mockup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8">
        {saleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="shadow-xs hover:shadow-xl"
          />
        ))}
      </div>
    </section>
  )
}
