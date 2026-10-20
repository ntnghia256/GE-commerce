import HeroBanner from '../../components/home/HeroBanner'
import ServiceHighlights from '../../components/home/ServiceHighlights'
import SaleProductsSection from '../../components/home/SaleProductsSection'
import CatalogTabsSection from '../../components/home/CatalogTabsSection'
import TestimonialSection from '../../components/home/TestimonialSection'
import LatestNewsSection from '../../components/home/LatestNewsSection'
import BrandBadgesSection from '../../components/home/BrandBadgesSection'

/**
 * Storefront Home Page matching Cao Dai Gifts design.
 *
 * Sequence of sections directly following the design image:
 * 1. HeroBanner: Main festive campaign "Gửi trọn yêu thương"
 * 2. ServiceHighlights: 3 core commitments pill bar
 * 3. SaleProductsSection: "Sản phẩm khuyến mãi" 4-column showcase
 * 4. CatalogTabsSection: "Tất cả sản phẩm" with category tabs & 4-column grid
 * 5. TestimonialSection: Customer review showcase
 * 6. LatestNewsSection: "Tin tức mới nhất" articles
 * 7. BrandBadgesSection: Trust and quality seals
 */
export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Main Hero Banner: "Gửi trọn yêu thương" */}
      <HeroBanner />

      {/* 2. Service Highlights / Benefits Bar */}
      <ServiceHighlights />

      {/* 3. Section: Sản phẩm khuyến mãi */}
      <SaleProductsSection />

      {/* 4. Section: Tất cả sản phẩm with Category Tabs */}
      <CatalogTabsSection />

      {/* 5. Section: Testimonial & Customer Review */}
      <TestimonialSection />

      {/* 6. Section: Tin tức mới nhất */}
      <LatestNewsSection />

      {/* 7. Brand Badges & Quality Trust Seals */}
      <BrandBadgesSection />
    </div>
  )
}
