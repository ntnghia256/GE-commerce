import ServiceHighlights from '../../components/home/ServiceHighlights'
import HeroBanner from '../../components/home/HeroBanner'
import PromoBannersGrid from '../../components/home/PromoBannersGrid'
import SaleProductsSection from '../../components/home/SaleProductsSection'
import CatalogTabsSection from '../../components/home/CatalogTabsSection'
import TestimonialSection from '../../components/home/TestimonialSection'
import LatestNewsSection from '../../components/home/LatestNewsSection'
import BrandBadgesSection from '../../components/home/BrandBadgesSection'

/**
 * Storefront Home Page (FR-FE-CAT-01).
 * Completely redesigned following the festive gift & personalized shop layout.
 *
 * Sequence of sections:
 * 1. ServiceHighlights: 3 USP service commitments
 * 2. HeroBanner: Main festive campaign & free wrapping promotion
 * 3. PromoBannersGrid: 3 curated collection banners
 * 4. SaleProductsSection: "Sản phẩm khuyến mãi" featured products
 * 5. CatalogTabsSection: "Tất cả sản phẩm" with instant category tabs filter
 * 6. TestimonialSection: Full-width customer review banner
 * 7. LatestNewsSection: "Tin tức mới nhất" cultural & gift guide articles
 * 8. BrandBadgesSection: Handcrafted trust & authenticity seals
 */
export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Service Highlights / USP strip */}
      <ServiceHighlights />

      {/* 2. Main Hero Banner */}
      <HeroBanner />

      {/* 3. Promo Banners Grid */}
      <PromoBannersGrid />

      {/* 4. Section: Sản phẩm khuyến mãi */}
      <SaleProductsSection />

      {/* 5. Section: Tất cả sản phẩm with Category Tabs */}
      <CatalogTabsSection />

      {/* 6. Section: Testimonial & Customer Review */}
      <TestimonialSection />

      {/* 7. Section: Tin tức mới nhất */}
      <LatestNewsSection />

      {/* 8. Brand Badges & Quality Trust Seals */}
      <BrandBadgesSection />
    </div>
  )
}
