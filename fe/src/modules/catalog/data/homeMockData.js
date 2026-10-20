/**
 * Mock data for Storefront Home Page.
 * Conforms to FR-FE-CAT-01, FR-FE-PROD-02, FR-FE-CUST-03 and the design mockup.
 */

export const HOME_MOCK_DATA = {
  // 3 Service commitments (USP bar)
  serviceHighlights: [
    {
      id: 'usp-1',
      title: 'GIAO HÀNG MIỄN PHÍ',
      description: 'Cho đơn hàng từ 500.000₫',
      iconName: 'Send',
    },
    {
      id: 'usp-2',
      title: 'ĐỔI TRẢ DỄ DÀNG',
      description: 'Trong vòng 30 ngày',
      iconName: 'RotateCcw',
    },
    {
      id: 'usp-3',
      title: 'HỖ TRỢ NHIỆT TÌNH',
      description: 'Hotline: 0934 323 882',
      iconName: 'Headphones',
    },
  ],

  // Main Hero Festive Banner
  heroBanner: {
    badge: 'MÙA LỄ HỘI & ĐẠI LỄ',
    title: 'MỪNG GIÁNG SINH & NĂM MỚI',
    highlight: 'GÓI QUÀ & KHẮC TÊN MIỄN PHÍ',
    description: 'Trao gửi yêu thương, kết nối an lành với những món quà lưu niệm và vật phẩm thủ công tinh xảo mang đậm dấu ấn cá nhân.',
    buttonText: 'KHÁM PHÁ NGAY',
    buttonLink: '/category/qua-tang',
    bgImage: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1920&q=80',
  },

  // 3 Promo Banners Grid (Sub-banners)
  promoBanners: [
    {
      id: 'promo-1',
      title: 'Hộp Quà Thắt Nơ Tinh Tế',
      subtitle: 'BST Quà Lưu Niệm',
      imageUrl: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=600&q=80',
      link: '/category/qua-tang',
    },
    {
      id: 'promo-2',
      title: 'Chế Tác Thủ Công Cá Nhân Hóa',
      subtitle: 'Khắc Tên & Lời Chúc',
      imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80',
      link: '/product/1/customize',
    },
    {
      id: 'promo-3',
      title: 'Trang Trí Không Gian An Yên',
      subtitle: 'Vật Phẩm Gia Đình',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      link: '/category/do-trang-tri',
    },
  ],

  // Section "Sản phẩm khuyến mãi" (Flash Sale) - Expanded to 4 products
  saleProducts: [
    {
      id: 'sale-1',
      name: 'Gối vuông thêu chữ Velvet Custom',
      price: 150000,
      originalPrice: 180000,
      discountPercent: 17,
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'qua-tang',
      rating: 5,
      reviewCount: 38,
    },
    {
      id: 'sale-2',
      name: 'Tranh treo tường Khung gỗ Wooden Classic',
      price: 300000,
      originalPrice: 380000,
      discountPercent: 21,
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'do-trang-tri',
      rating: 5,
      reviewCount: 42,
    },
    {
      id: 'sale-3',
      name: 'Bộ quà tặng Tranh tường & Sổ tay nghệ thuật',
      price: 350000,
      originalPrice: 420000,
      discountPercent: 16,
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'qua-tang',
      rating: 5,
      reviewCount: 54,
    },
    {
      id: 'sale-4',
      name: 'Khung ảnh gỗ khắc laser Thiên Nhãn & Lời chúc',
      price: 220000,
      originalPrice: 260000,
      discountPercent: 15,
      imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'do-luu-niem',
      rating: 5,
      reviewCount: 29,
    },
  ],

  // Category Tabs for "Tất cả sản phẩm"
  catalogTabs: [
    { id: 'all', name: 'TẤT CẢ' },
    { id: 'qua-tang', name: 'QUÀ TẶNG' },
    { id: 'do-luu-niem', name: 'ĐỒ LƯU NIỆM' },
    { id: 'do-trang-tri', name: 'ĐỒ TRANG TRÍ' },
  ],

  // Products under Tabs - Expanded to 8 products
  allProducts: [
    {
      id: 'prod-1',
      name: 'Gối vuông thêu chữ Velvet Custom',
      price: 150000,
      originalPrice: 180000,
      discountPercent: 17,
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'qua-tang',
      rating: 5,
      reviewCount: 38,
    },
    {
      id: 'prod-2',
      name: 'Bộ quà tặng Tranh tường & Sổ tay nghệ thuật',
      price: 350000,
      originalPrice: 420000,
      discountPercent: 16,
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'qua-tang',
      rating: 5,
      reviewCount: 76,
    },
    {
      id: 'prod-3',
      name: 'Tranh treo tường Khung gỗ Wooden Classic',
      price: 300000,
      originalPrice: 380000,
      discountPercent: 21,
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'do-trang-tri',
      rating: 5,
      reviewCount: 42,
    },
    {
      id: 'prod-4',
      name: 'Khung ảnh gỗ khắc laser Thiên Nhãn & Lời chúc',
      price: 220000,
      originalPrice: 260000,
      discountPercent: 15,
      imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'do-luu-niem',
      rating: 5,
      reviewCount: 29,
    },
    {
      id: 'prod-5',
      name: 'Đèn ngủ gỗ khắc họa tiết hoa sen & lời an lành',
      price: 280000,
      originalPrice: 340000,
      discountPercent: 18,
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'do-trang-tri',
      rating: 5,
      reviewCount: 63,
    },
    {
      id: 'prod-6',
      name: 'Hộp trà gỗ bách diệp khắc tên quà tặng doanh nghiệp',
      price: 390000,
      originalPrice: 450000,
      discountPercent: 13,
      imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'qua-tang',
      rating: 5,
      reviewCount: 19,
    },
    {
      id: 'prod-7',
      name: 'Móc khóa gỗ khắc tên theo yêu cầu 2 mặt',
      price: 65000,
      originalPrice: 85000,
      discountPercent: 23,
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'do-luu-niem',
      rating: 5,
      reviewCount: 112,
    },
    {
      id: 'prod-8',
      name: 'Đồng hồ gỗ treo tường phong cách mộc mạc',
      price: 420000,
      originalPrice: 500000,
      discountPercent: 16,
      imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80',
      isCustomizable: true,
      category: 'do-trang-tri',
      rating: 5,
      reviewCount: 35,
    },
  ],

  // Testimonials section
  testimonials: [
    {
      id: 'testi-1',
      name: 'Võ Huyền Trân',
      role: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      quote: 'Tôi rất thích hộp quà tặng của shop, giao hàng rất nhanh và đóng gói rất kỹ. Đồ lưu niệm và quà tặng ở đây vô cùng ý nghĩa và phù hợp để làm quà tặng cho người thân.',
    },
    {
      id: 'testi-2',
      name: 'Nguyễn Văn Minh',
      role: 'Đạo hữu GĐHĐ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      quote: 'Chất lượng khắc laser lên tranh gỗ cực kỳ sắc sảo và trang trọng. Từng nét chữ và biểu trưng đều toát lên vẻ tôn kính và thanh tịnh.',
    },
  ],

  // Latest news / cultural articles
  latestNews: [
    {
      id: 'news-1',
      title: 'Gợi ý 5 món quà Noel & Năm mới ý nghĩa cho bạn gái',
      excerpt: 'Mỗi món quà thủ công mang dấu ấn cá nhân không chỉ chứa đựng vẻ đẹp thẩm mỹ mà còn là lời chúc bình an, gắn kết chân thành trong mùa lễ hội...',
      author: 'GĐHĐ Team',
      date: '15 Tháng 12, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80',
      readTime: '4 phút đọc',
    },
    {
      id: 'news-2',
      title: 'Bí quyết để tặng quà đúng người đúng dịp trang trọng',
      excerpt: 'Lựa chọn quà tặng mang biểu trưng văn hóa đạo giáo đòi hỏi sự thấu hiểu và tinh tế. Cùng GĐHĐ tìm hiểu nghệ thuật trao gửi tình cảm đúng mực...',
      author: 'GĐHĐ Team',
      date: '10 Tháng 12, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80',
      readTime: '5 phút đọc',
    },
  ],

  // Brand and quality trust badges
  brandBadges: [
    {
      id: 'badge-1',
      title: 'HANDCRAFTED',
      subtitle: 'Chế tác thủ công',
    },
    {
      id: 'badge-2',
      title: 'PREMIUM QUALITY',
      subtitle: '100% Gỗ tự nhiên & Bền đẹp',
    },
    {
      id: 'badge-3',
      title: 'GĐHĐ SIGNATURE',
      subtitle: 'Độc quyền văn hóa Cao Đài',
    },
  ],

  // Footer data
  footerInfo: {
    address: 'Tầng 5, 266 Đội Cấn - Ba Đình - Hà Nội',
    hotline: '(+84) 934 323 882 - 024 3783 5639',
    email: 'support@gdhdecom.vn',
    links: {
      info: [
        { label: 'Trang chủ', href: '/' },
        { label: 'Giới thiệu', href: '/about' },
        { label: 'Sản phẩm', href: '/category/all' },
        { label: 'Tin tức', href: '/news' },
        { label: 'Liên hệ', href: '/contact' },
      ],
      support: [
        { label: 'Trang chủ', href: '/' },
        { label: 'Giới thiệu', href: '/about' },
        { label: 'Sản phẩm', href: '/category/all' },
        { label: 'Tin tức', href: '/news' },
        { label: 'Liên hệ', href: '/contact' },
      ],
      guide: [
        { label: 'Trang chủ', href: '/' },
        { label: 'Giới thiệu', href: '/about' },
        { label: 'Sản phẩm', href: '/category/all' },
        { label: 'Tin tức', href: '/news' },
        { label: 'Liên hệ', href: '/contact' },
      ],
      policy: [
        { label: 'Trang chủ', href: '/' },
        { label: 'Giới thiệu', href: '/about' },
        { label: 'Sản phẩm', href: '/category/all' },
        { label: 'Tin tức', href: '/news' },
        { label: 'Liên hệ', href: '/contact' },
      ],
    },
  },
}
