# KẾ HOẠCH THIẾT KẾ & PHÁT TRIỂN GIAO DIỆN WEBSITE GĐHĐ E-COMMERCE
> **Dự án**: Nền tảng Thương mại Điện tử GĐHĐ (Gia Đình Hưng Đạo E-Commerce)  
> **Tài liệu tham chiếu**: `SRS-Frontend.md`, `plan-project-structure.md`  
> **Layout mẫu**: Thiết kế Storefront quà tặng & sản phẩm lưu niệm cá nhân hóa (Personalized Gift & Decor Storefront)  
> **Vị trí file**: `fe/PLAN_WEBSITE_DESIGN.md`  
> **Ngày lập**: 13/10/2026 | **Trạng thái**: Bản kế hoạch kỹ thuật chi tiết (v1.0)

---

## 1. TỔNG QUAN & MỤC TIÊU DỰ ÁN

### 1.1. Bối cảnh
Theo đặc tả **SRS-Frontend (Mục 1 & 2)**, website thương mại điện tử **GĐHĐ** chuyên cung cấp các mặt hàng quà tặng lưu niệm, vật phẩm thờ phượng và đồ trang trí nội thất được **cá nhân hóa** (khắc tên, in thánh hiệu, biểu trưng Thiên Nhãn, hoa sen, cờ Tam Thanh) mang đậm bản sắc văn hóa đạo Cao Đài.

Layout mẫu cung cấp một cấu trúc giao diện trang chủ thương mại điện tử chuẩn quốc tế theo phong cách **Cửa hàng Quà tặng & Vật phẩm Cá nhân hóa**, với tông màu ấm cúng, bố cục thanh lịch, giàu cảm xúc và tối ưu trải nghiệm mua sắm trực tuyến.

### 1.2. Mục tiêu của Kế hoạch
1. **Phân rã chi tiết toàn bộ layout**: Bóc tách 11 khối giao diện (UI Blocks) từ hình ảnh thiết kế thành các React Component độc lập, tái sử dụng cao.
2. **Hài hòa hóa bản sắc thương hiệu**: Kết hợp cấu trúc của layout mẫu với bảng màu và tinh thần trang nghiêm, tôn kính của đạo Cao Đài (Trắng ngà, Vàng Đạo, Xanh Thái Cực, Đỏ Cờ).
3. **Đồng bộ với SRS FE**: Đảm bảo toàn bộ các yêu cầu chức năng (`FR-FE-CAT-01`, `FR-FE-PROD-02`, `FR-FE-CUST-03`, `FR-FE-CART-04`, `FR-FE-CHK-05`) và phi chức năng (`NFR-FE-PERF-01`, `NFR-FE-UX-01`) được hiện thực hóa trọn vẹn.
4. **Lộ trình triển khai rõ ràng**: Định nghĩa chi tiết từng bước code, quản lý state (Redux Toolkit, TanStack Query), schema Zod và kiểm thử responsive.

---

## 2. PHÂN TÍCH BỐ CỤC GIAO DIỆN (UI LAYOUT BREAKDOWN)

Dựa trên hình ảnh layout thiết kế, trang chủ Storefront được tổ chức thành **11 Khối chức năng chính** theo chiều dọc:

```
┌────────────────────────────────────────────────────────┐
│ 1. Top Bar (Tiện ích, Tra cứu, Tài khoản, Hotline)    │
├────────────────────────────────────────────────────────┤
│ 2. Main Navigation Header (Menu, Logo script, Cart)    │
├────────────────────────────────────────────────────────┤
│ 3. Service Highlights / USP Strip (3 cam kết dịch vụ)  │
├────────────────────────────────────────────────────────┤
│ 4. Hero Banner Slider (Chiến dịch sự kiện / Đại lễ)   │
├────────────────────────────────────────────────────────┤
│ 5. Promo Banners Grid (Bộ 3 danh mục nổi bật)         │
├────────────────────────────────────────────────────────┤
│ 6. Section "Sản phẩm khuyến mãi" (Flash Sale Grid)    │
├────────────────────────────────────────────────────────┤
│ 7. Section "Tất cả sản phẩm" (Danh mục Tabs Filter)    │
├────────────────────────────────────────────────────────┤
│ 8. Testimonials Section (Cảm nhận & Đánh giá khách)   │
├────────────────────────────────────────────────────────┤
│ 9. Section "Tin tức mới nhất" (Blog / Ý nghĩa văn hóa) │
├────────────────────────────────────────────────────────┤
│ 10. Partner & Quality Trust Badges (Chứng nhận uy tín) │
├────────────────────────────────────────────────────────┤
│ 11. Luxury Dark Footer (Thông tin, Hỗ trợ, VietQR)    │
└────────────────────────────────────────────────────────┘
```

---

### Chi tiết từng khối giao diện:

#### Khối 1: Top Bar (Thanh tiện ích trên cùng)
- **Vị trí**: Nằm ở đỉnh trang (`z-index: 50`).
- **Nội dung & Phần tử UI**:
  - Bên trái/trung tâm: Thông báo ngắn (hoặc liên kết tiện ích).
  - Bên phải:
    - Nút / Link: **Tài khoản** (hoặc Đăng nhập / Đăng ký) có icon người dùng.
    - Nút / Link: **Theo dõi đơn hàng** hoặc **Danh sách yêu thích**.
- **Phong cách**: Chiều cao `32px` - `36px`, nền trắng ngà / xám ấm nhẹ, chữ đỏ/xám trang nhã.

#### Khối 2: Main Navigation Header (Thanh điều hướng chính)
- **Vị trí**: Header dính cố định khi cuộn trang (`sticky top-0`).
- **Phần tử UI**:
  - **Bên trái**: Nút Hamburger Menu (kèm nhãn hoặc biểu tượng 3 vạch) mở Drawer điều hướng danh mục trên cả Desktop và Mobile.
  - **Ở giữa**: **Brand Logo** dạng chữ uốn lượn phong cách thư pháp nghệ thuật (Calligraphy / Serif font), thể hiện nét tinh xảo thủ công của thương hiệu GĐHĐ.
  - **Bên phải**:
    - Nút **Tìm kiếm** (Search Icon) - click mở thanh tìm kiếm nhanh hoặc Modal Search sản phẩm.
    - Nút **Giỏ hàng** (Cart Icon) kèm Badge đếm số lượng màu đỏ (Badge số lượng sản phẩm). Khi click mở Mini-cart Drawer.

#### Khối 3: Service Highlights Bar (Thanh cam kết chất lượng & dịch vụ)
- **Vị trí**: Ngay dưới header chính, giúp củng cố niềm tin mua sắm cho khách hàng.
- **Bố cục**: Chia đều 3 cột (Responsive: 1 cột trên Mobile, 3 cột trên Tablet/Desktop):
  1. **Icon Máy bay giấy / Xe vận chuyển**:  
     - Tiêu đề: `GIAO HÀNG TOÀN QUỐC`  
     - Phụ đề: `Miễn phí cho đơn hàng từ 500.000₫`
  2. **Icon Đổi hàng / Bảo hành**:  
     - Tiêu đề: `ĐỔI TRẢ DỄ DÀNG`  
     - Phụ đề: `Bảo hành in/khắc lỗi trong 30 ngày`
  3. **Icon Tai nghe / CSKH**:  
     - Tiêu đề: `HỖ TRỢ NHIỆT TÌNH`  
     - Phụ đề: `Hotline tư vấn: 0934 323 882`

#### Khối 4: Hero Banner (Banner sự kiện / Lễ hội chính)
- **Vị trí**: Chiếm vị trí tâm điểm thị giác đầu trang chủ.
- **Phong cách visual**: Nền tông màu ấm (Hồng phấn / Vàng nhạt / Đỏ lễ hội), kết hợp hình ảnh hộp quà trang trí, quả châu hoặc họa tiết hoa sen/mây ngũ sắc cách điệu.
- **Nội dung chữ**:
  - Tiêu đề phụ: `MỪNG ĐẠI LỄ / MỪNG GIÁNG SINH & NĂM MỚI`
  - Tiêu đề chính lớn: `ƯU ĐÃI KHẮC TÊN & GÓI QUÀ MIỄN PHÍ`
  - CTA Button: `KHÁM PHÁ NGAY` (hoặc `ĐẶT HÀNG TÙY BIẾN`).
- **Tính năng**: Hỗ trợ Slider tự động cuộn (Auto-play Carousel) với chấm điều hướng (dots) và nút mũi tên (prev/next).

#### Khối 5: Promo Banners Grid (Bộ 3 Bộ sưu tập / Banner phụ)
- **Bố cục**: 3 cột hình ảnh tỉ lệ 4:3 hoặc 16:9 xếp ngang hàng nhau.
- **Nội dung hiển thị**:
  1. Banner 1: **Quà tặng hộp cao cấp thắt nơ** -> Link tới danh mục "Quà tặng lưu niệm".
  2. Banner 2: **Quy trình đóng gói & chế tác thủ công** -> Link tới trang "Dịch vụ khắc Laser cá nhân hóa".
  3. Banner 3: **Không gian trang trí gia đình ấm cúng** -> Link tới danh mục "Đồ trang trí bàn thờ & Gia đình".
- **Hiệu ứng**: Hover zoom nhẹ (Scale 105%), hiệu ứng phủ bóng mềm (Overlay subtle gradient).

#### Khối 6: Section "Sản phẩm khuyến mãi" (Flash Sale / Promotional Products)
- **Tiêu đề Section đặc trưng**:
  - Biểu trưng hoa văn trên cùng (Decorative Horns / Lotus Ornament).
  - Chữ tiêu đề 2 tầng: Dòng trên chữ thường thanh thoát `Sản phẩm`, dòng dưới chữ đỏ đậm hoa `KHUYẾN MÃI`.
  - Dải phân cách họa tiết 3 điểm nhấn (Ornamental dots / divider).
- **Lưới sản phẩm (Product Grid)**:
  - Hiển thị 2 - 4 sản phẩm ưu đãi nổi bật dạng card lớn:
    - Hình ảnh Mockup sản phẩm thực tế (ví dụ: Gối thêu chữ đỏ, Khung tranh gỗ khắc ngày tháng/pháp danh).
    - Tên sản phẩm: `Gối vuông Thêu chữ Custom`, `Tranh treo tường Khắc gỗ Wooden`.
    - Giá bán: Giá khuyến mãi đỏ nổi bật (`150.000₫`) + Giá niêm yết gạch ngang xám (`180.000₫`).
    - Nút hành động nổi bật: Nút hình viên thuốc (Pill button) viền đỏ bo tròn `TÙY BIẾN NGAY` dẫn trực tiếp vào bộ Customizer Canvas (`FR-FE-CUST-03`).

#### Khối 7: Section "Tất cả sản phẩm" & Tabs Phân loại (Featured Catalog with Tabs)
- **Tiêu đề Section**:
  - Họa tiết biểu trưng phía trên + Chữ 2 tầng: `Tất cả` / `SẢN PHẨM` + Dải phân cách hoa văn.
- **Thanh chuyển đổi danh mục (Category Tabs Bar)**:
  - Các Tab danh mục chính:
    - `QUÀ TẶNG` (Tab đang chọn có màu chữ đỏ, gạch chân đỏ nổi bật)
    - `ĐỒ LƯU NIỆM`
    - `ĐỒ TRANG TRÍ`
    - `VẬT PHẨM CÁ NHÂN`
  - Hành động: Lọc sản phẩm tức thì không reload trang (`FR-FE-CAT-01`), tải danh sách sản phẩm qua TanStack Query với hiệu ứng chuyển động mượt (Framer-motion hoặc Tailwind Transition).
- **Lưới sản phẩm bên dưới**: Cấu trúc Product Card đồng bộ, hỗ trợ phân trang hoặc nút "Xem thêm tất cả sản phẩm".

#### Khối 8: Testimonial Section (Cảm nhận khách hàng / Đạo hữu chia sẻ)
- **Bố cục**: Full-width Banner với hình nền ấm cúng mờ nhẹ (ấm áp, lấp lánh ánh đèn lung linh).
- **Phần tử UI**:
  - Ảnh đại diện tròn (Avatar) của khách hàng được viền sáng sang trọng.
  - Tên & chức vụ: `Võ Huyền Trân - Designer` (hoặc `Đạo hữu Minh Trí - TP.HCM`).
  - Lời trích dẫn (Quote) in nghiêng chữ trắng sắc nét:
    > *"Tôi rất thích hộp quà tặng của shop, giao hàng rất nhanh và đóng gói rất kỹ. Đồ lưu niệm và quà tặng ở đây vô cùng ý nghĩa và phù hợp để làm quà tặng cho người thân."*
  - Hỗ trợ vuốt chuyển lời nhận xét khác (Carousel slide indicators).

#### Khối 9: Section "Tin tức mới nhất" (Blog & Văn hóa truyền thống)
- **Tiêu đề Section**: Biểu trưng hoa văn + Chữ 2 tầng: `Tin tức` / `MỚI NHẤT`.
- **Lưới bài viết (Blog Grid)**: 2 cột lớn (hoặc 3 cột responsive):
  - **Bài viết 1**:
    - Hình ảnh đại diện (Ảnh quà tặng Noel / Lễ hội).
    - Tiêu đề bài viết: `Gợi ý 5 món quà ý nghĩa dành tặng bạn gái & người thân`.
    - Đoạn tóm tắt nội dung (Excerpt).
    - Thông tin meta: `GĐHĐ Biên tập • 15 Tháng 12, 2026`.
  - **Bài viết 2**:
    - Hình ảnh đại diện (Không khí gia đình sum vầy bên ánh lửa).
    - Tiêu đề bài viết: `Bí quyết chọn vật phẩm lưu niệm phong thủy và tinh tế`.
    - Tóm tắt & Meta thông tin bài viết.

#### Khối 10: Brand Badges / Đối tác & Cam kết chất lượng
- **Nội dung**: Dải hàng ngang các huy hiệu phong cách Vintage Line-Art (Stamp / Monogram):
  - Biểu tượng `BARBER & CRAFT`: Tinh thần thủ công mỹ nghệ tinh tế.
  - Huy hiệu `100% QUALITY GUARANTEED`: Cam kết chất liệu gỗ tự nhiên & mực in bền màu.
  - Biểu tượng `COFFEE & LIFESTYLE`: Phong cách sống thư thái, an yên.

#### Khối 11: Luxury Dark Footer (Chân trang cao cấp)
- **Tông màu**: Nền đen tuyền (`#121212` / `#18181b`), tương phản chữ trắng & xám bạc sang trọng.
- **Khối Thông tin liên hệ (Contact Bar)**:
  - Tiêu đề: `LIÊN HỆ VỚI CHÚNG TÔI`
  - Địa chỉ: `Tầng 5, 266 Đội Cấn - Ba Đình - Hà Nội` (Icon vị trí đỏ).
  - Hotline: `(+84) 934 323 882 - 024 3783 5639` (Icon điện thoại đỏ).
  - Email: `support@gdhdecom.vn` (Icon email đỏ).
- **Khối 4 cột liên kết điều hướng**:
  - Cột 1: **THÔNG TIN** (Trang chủ, Giới thiệu, Sản phẩm, Tin tức, Liên hệ)
  - Cột 2: **HỖ TRỢ** (Hướng dẫn mua hàng, Hướng dẫn tùy biến sản phẩm, Tra cứu đơn hàng, Câu hỏi thường gặp)
  - Cột 3: **HƯỚNG DẪN** (Quy trình khắc in laser, Hướng dẫn chọn kích thước, Hướng dẫn thanh toán VietQR)
  - Cột 4: **CHÍNH SÁCH** (Chính sách đổi trả, Chính sách bảo mật, Chính sách vận chuyển, Điều khoản dịch vụ)
- **Dòng bản quyền & Cổng thanh toán (Bottom bar)**:
  - Trái: `© 2026 Bản quyền thuộc về GĐHĐ Team | Thiết kế và phát triển bởi Đội ngũ kỹ thuật`.
  - Phải: Logo biểu trưng các cổng thanh toán hỗ trợ (`VietQR`, `MoMo`, `Visa`, `MasterCard`, `COD`).

---

## 3. BẢNG ÁNH XẠ VỚI YÊU CẦU ĐẶC TẢ SRS FRONTEND

| Khối Giao Diện | Mã Yêu Cầu SRS | Mô Tả Nghiệp Vụ SRS | Tiêu Chí Nghiệm Thu Frontend |
|---|---|---|---|
| **Header & Topbar** | `FR-FE-CAT-01`, `FR-FE-CART-04`, `FR-FE-AUTH-06` | Điều hướng, tìm kiếm sản phẩm, hiển thị số lượng giỏ hàng, thông tin tài khoản | Drawer mở nhanh; Badge giỏ hàng cập nhật tức thì từ Redux `cartSlice`. |
| **Service Highlights** | `NFR-FE-UX-01` | Cung cấp thông tin chính sách bán hàng, đổi trả và hotline trợ giúp minh bạch | Hiển thị chuẩn responsive 3 cột desktop, 1 cột mobile. |
| **Hero Banner & Promo Grid** | `FR-FE-CAT-01` | Hiển thị sự kiện đạo, chương trình lễ hội và các bộ sưu tập quà tặng nổi bật | Tải ảnh WebP tối ưu; thời gian tải trang < 1.5s; chuyển slide mượt mà. |
| **Sản phẩm khuyến mãi** | `FR-FE-PROD-02`, `FR-FE-CUST-03` | Giới thiệu các sản phẩm có giá ưu đãi; cho phép click vào tùy biến ngay | Nút "Tùy biến" điều hướng sang `/product/:id/customize` mang theo state sản phẩm. |
| **Tất cả sản phẩm & Tabs** | `FR-FE-CAT-01` | Danh mục nổi bật; lọc theo phân loại không cần reload trang | Chuyển tab lọc sản phẩm < 200ms bằng TanStack Query cache. |
| **Testimonial Section** | `NFR-FE-UX-02` | Trải nghiệm người dùng thân thiện, tăng độ uy tín qua đánh giá chân thực | Bố cục full-bleed sang trọng, text tương phản đạt chuẩn WCAG 2.1 AA. |
| **Tin tức mới nhất** | `FR-FE-CAT-01` | Chia sẻ ý nghĩa văn hóa, cẩm nang quà tặng và phong tục thờ tự | Bài viết hiển thị ảnh thumbnail sắc nét, tóm tắt bài viết và meta tác giả/ngày. |
| **Dark Footer** | `FR-FE-CHK-05`, `NFR-FE-UX-01` | Hướng dẫn mua hàng, liên hệ, chính sách đổi trả và biểu trưng thanh toán VietQR | Đầy đủ link điều hướng, thông tin liên hệ rõ ràng, tương thích mobile. |

---

## 4. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM SPECIFICATIONS)

### 4.1. Bảng màu (Color Palette)
Kết hợp tinh tế giữa phong cách ấm áp của layout tham khảo và màu sắc nhận diện Đạo giáo Cao Đài:

| Tên Màu | Mã HEX | Vai Trò Áp Dụng |
|---|---|---|
| **Ivory** | `#FFFFF0` | Tông nền trang chủ thanh nhã, tôn kính |
| **Festive / Dao Red** | `#DC143C` / `#C41E3A` | Điểm nhấn chính: Tiêu đề nổi bật, giá khuyến mãi, nút CTA, badge giỏ hàng |
| **Dao Yellow / Gold** | `#DAA520` / `#D4AF37` | Điểm nhấn thương hiệu, viền khung ảnh, ruy băng sự kiện |
| **Dao Blue / Thái Cực** | `#1E90FF` / `#104E8B` | Điểm nhấn bổ trợ cho biểu trưng Tam Thanh |
| **Warm Gray** | `#F3F4F6` / `#E5E7EB` | Nền các thẻ sản phẩm, đường viền phân cách nhẹ |
| **Dark Charcoal** | `#121212` / `#18181B` | Nền Footer cao cấp, chữ tiêu đề đậm |
| **Muted Text** | `#6B7280` | Văn bản mô tả phụ, giá gốc gạch ngang |

### 4.2. Kiểu chữ (Typography)
- **Primary Body Font**: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif` — Đảm bảo tốc độ tải siêu nhanh và hiển thị nét rõ trên mọi thiết bị.
- **Display & Script Font**: `Noto Serif, Georgia, serif` hoặc Google Font script thư pháp cho Logo thương hiệu, Tiêu đề Section trang trí và Module khắc chữ Canvas (`--font-calligraphy`).

### 4.3. Thành phần đồ họa đặc trưng (Decorative Elements)
- **Section Heading Icon**: Biểu trưng sừng hươu / hoa sen cách điệu nằm trên đầu tiêu đề mỗi section chính.
- **Section Heading Divider**: 3 đốm chấm hoặc hình thoi cách điệu nằm ngay dưới tiêu đề.
- **Pill Action Buttons**: Nút bo tròn tối đa (`rounded-full`) viền mỏng (`border border-dao-red text-dao-red hover:bg-dao-red hover:text-white transition-all`).

---

## 5. KIẾN TRÚC COMPONENT & CẤU TRÚC THƯ MỤC SOURCE CODE

Cấu trúc thư mục mã nguồn được tổ chức theo mô hình **Feature-based & Clean Architecture** của dự án (`fe/src/`):

```
fe/src/
├── app/
│   ├── App.jsx
│   ├── providers.jsx
│   └── router.jsx
│
├── core/
│   ├── api/ (axiosClient.js, endpoints.js)
│   ├── constants/ (routes.js, config.js)
│   └── utils/ (formatCurrency.js, storage.js)
│
├── modules/
│   ├── catalog/
│   │   ├── api/ (productApi.js, categoryApi.js)
│   │   └── schemas/ (filterSchema.js)
│   ├── customizer/
│   │   ├── slices/ (customizerSlice.js)
│   │   └── schemas/ (customSchema.js)
│   └── cart/
│       └── slices/ (cartSlice.js)
│
└── view/
    ├── components/
    │   ├── layout/
    │   │   ├── TopBar.jsx                  <-- [MỚI] Thanh tiện ích trên đỉnh
    │   │   ├── Header.jsx                  <-- [CẬP NHẬT] Header chính theo layout
    │   │   ├── Footer.jsx                  <-- [CẬP NHẬT] Dark Footer 4 cột + VietQR
    │   │   ├── MobileMenuDrawer.jsx        <-- [CẬP NHẬT] Drawer điều hướng
    │   │   └── StorefrontLayout.jsx        <-- Wrapper toàn bộ storefront
    │   │
    │   ├── shared/
    │   │   ├── SectionHeader.jsx           <-- [MỚI] Tiêu đề Section có hoa văn
    │   │   ├── ProductCard.jsx             <-- [MỚI] Card sản phẩm có giá & nút tùy chọn
    │   │   ├── MiniCartDrawer.jsx          <-- [MỚI] Giỏ hàng trượt ra từ bên phải
    │   │   └── SearchModal.jsx             <-- [MỚI] Modal tìm kiếm nhanh
    │   │
    │   └── home/
    │       ├── ServiceHighlights.jsx       <-- [MỚI] 3 khối cam kết dịch vụ
    │       ├── HeroBanner.jsx              <-- [MỚI] Banner khuyến mãi lớn
    │       ├── PromoBannersGrid.jsx        <-- [MỚI] Bộ 3 banner danh mục
    │       ├── SaleProductsSection.jsx     <-- [MỚI] Section sản phẩm khuyến mãi
    │       ├── CatalogTabsSection.jsx      <-- [MỚI] Section sản phẩm kèm tabs filter
    │       ├── TestimonialSection.jsx      <-- [MỚI] Section cảm nhận khách hàng
    │       ├── LatestNewsSection.jsx       <-- [MỚI] Section tin tức / blog
    │       └── BrandBadgesSection.jsx      <-- [MỚI] Dải logo chứng nhận & đối tác
    │
    └── pages/
        └── storefront/
            └── HomePage.jsx                <-- [CẬP NHẬT] Ghép nối toàn bộ 11 section
```

---

## 6. CHI TIẾT CÁC COMPONENT GIAO DIỆN CẦN TRIỂN KHAI

### 6.1. Component `SectionHeader.jsx` (Tái sử dụng cho các Section)
- **Props**:
  - `subTitle`: Dòng chữ trên (VD: "Sản phẩm", "Tất cả", "Tin tức")
  - `title`: Dòng chữ đỏ dưới (VD: "khuyến mãi", "sản phẩm", "mới nhất")
  - `ornament`: Loại hoa văn ('deer', 'lotus', 'leaf')
- **Giao diện**:
  ```jsx
  <div className="text-center my-8">
    <div className="flex justify-center mb-2 text-dao-red">
      {/* Icon hoa văn sừng hươu hoặc hoa sen cách điệu */}
      <OrnamentIcon />
    </div>
    <h3 className="text-lg font-serif text-gray-700 tracking-wide">{subTitle}</h3>
    <h2 className="text-2xl md:text-3xl font-serif font-bold text-dao-red uppercase tracking-wider">{title}</h2>
    <div className="flex justify-center items-center gap-1.5 mt-2 text-gray-300">
      <span className="w-1.5 h-1.5 bg-gray-300 rotate-45 inline-block"></span>
      <span className="w-1.5 h-1.5 bg-dao-red rotate-45 inline-block"></span>
      <span className="w-1.5 h-1.5 bg-gray-300 rotate-45 inline-block"></span>
    </div>
  </div>
  ```

### 6.2. Component `ProductCard.jsx`
- **Props**: `product` (`id`, `name`, `price`, `originalPrice`, `imageUrl`, `slug`, `isCustomizable`)
- **Giao diện & Tương tác**:
  - Khung ảnh tỉ lệ 1:1 có hiệu ứng bo góc nhẹ, viền xám cực mảnh.
  - Tên sản phẩm căn giữa, font chữ thanh lịch.
  - Hàng giá: Giá bán in đậm đỏ (`formatCurrency(product.price)`) + Giá cũ gạch ngang xám nếu có.
  - Nút oval: `TÙY BIẾN NGAY` hoặc `TÙY CHỌN` dẫn tới trang cá nhân hóa Canvas.

### 6.3. Component `CatalogTabsSection.jsx`
- **State**: `activeTabId` (quản lý tab đang kích hoạt, ví dụ: `'gift'`, `'souvenir'`, `'decor'`).
- **Tương tác**:
  - Khi click chuyển tab: Gửi query lọc dữ liệu sản phẩm tương ứng thông qua TanStack Query mà không reload trang (`FR-FE-CAT-01`).
  - Active Tab: Chữ đỏ, đường viền dưới màu đỏ nổi bật.

### 6.4. Component `TestimonialSection.jsx`
- **Thiết kế**:
  - Nền ảnh banner vàng ấm / ruy băng lễ hội phủ mờ đen nhẹ (`bg-black/30 bg-blend-overlay`).
  - Ảnh đại diện tròn ở giữa, viền trắng 3px, đổ bóng mềm.
  - Tên khách hàng & chức vụ: `Võ Huyền Trân - Designer`.
  - Khối chữ trích dẫn in nghiêng font Serif trắng nổi bật.

### 6.5. Component `Footer.jsx`
- **Thiết kế**:
  - Nền tối (`#141414`), chia làm 3 tầng:
    1. Thông tin liên hệ nhanh: Địa chỉ, hotline, email với icon màu đỏ.
    2. Lưới 4 cột điều hướng: Thông tin, Hỗ trợ, Hướng dẫn, Chính sách.
    3. Thanh chân trang: Bản quyền GĐHĐ bên trái, biểu tượng thanh toán (VietQR, thẻ quốc tế) bên phải.

---

## 7. MÔ PHỎNG DỮ LIỆU MOCK DATA (CHO GIAI ĐOẠN FRONTEND ĐỘC LẬP)

Để trang chủ hiển thị trọn vẹn và sinh động ngay cả khi chưa kết nối API Backend hoàn tất, chúng ta chuẩn bị bộ Mock Data chuẩn tại `src/modules/catalog/data/homeMockData.js`:

```javascript
export const HOME_MOCK_DATA = {
  serviceHighlights: [
    {
      id: 1,
      title: "GIAO HÀNG MIỄN PHÍ",
      description: "Cho đơn hàng từ 500.000₫",
      icon: "truck"
    },
    {
      id: 2,
      title: "ĐỔI TRẢ DỄ DÀNG",
      description: "Bảo hành lỗi khắc/in trong 30 ngày",
      icon: "refresh"
    },
    {
      id: 3,
      title: "HỖ TRỢ NHIỆT TÌNH",
      description: "Hotline tư vấn: 0934 323 882",
      icon: "phone"
    }
  ],
  heroBanner: {
    title: "MỪNG ĐẠI LỄ & NĂM MỚI",
    subTitle: "GÓI QUÀ & KHẮC TÊN MIỄN PHÍ",
    bannerUrl: "/assets/banners/hero-festive.jpg",
    link: "/category/qua-tang"
  },
  promoBanners: [
    {
      id: 1,
      title: "Hộp quà tặng tinh tế",
      imageUrl: "/assets/banners/promo-1.jpg",
      link: "/category/hop-qua"
    },
    {
      id: 2,
      title: "Chế tác thủ công cá nhân hóa",
      imageUrl: "/assets/banners/promo-2.jpg",
      link: "/product/customize"
    },
    {
      id: 3,
      title: "Đồ trang trí an yên gia đình",
      imageUrl: "/assets/banners/promo-3.jpg",
      link: "/category/do-trang-tri"
    }
  ],
  saleProducts: [
    {
      id: "prod-1",
      name: "Gối vuông thêu chữ Velvet Custom",
      price: 150000,
      originalPrice: 180000,
      imageUrl: "/assets/products/pillow-red.jpg",
      slug: "goi-vuong-theu-chu-custom"
    },
    {
      id: "prod-2",
      name: "Tranh treo tường Khung gỗ Wooden Classic",
      price: 300000,
      originalPrice: 350000,
      imageUrl: "/assets/products/wooden-frame.jpg",
      slug: "tranh-treo-tuong-khung-go"
    }
  ],
  catalogTabs: [
    { id: "all", name: "TẤT CẢ" },
    { id: "qua-tang", name: "QUÀ TẶNG" },
    { id: "luu-niem", name: "ĐỒ LƯU NIỆM" },
    { id: "trang-tri", name: "ĐỒ TRANG TRÍ" }
  ],
  testimonials: [
    {
      id: 1,
      name: "Võ Huyền Trân",
      role: "Designer",
      avatar: "/assets/avatars/avatar-tran.jpg",
      quote: "Tôi rất thích hộp quà tặng của shop, giao hàng rất nhanh và đóng gói rất kỹ. Đồ lưu niệm và quà tặng ở đây vô cùng ý nghĩa và phù hợp để làm quà tặng cho người thân."
    }
  ],
  latestNews: [
    {
      id: 1,
      title: "Gợi ý 5 món quà ý nghĩa và tinh tế cho người thân",
      excerpt: "Mùa lễ hội là dịp thích hợp nhất để bày tỏ tấm lòng và gửi gắm lời chúc an lành qua những món quà thủ công khắc tên...",
      author: "GĐHĐ Team",
      date: "15 Tháng 12, 2026",
      imageUrl: "/assets/news/news-1.jpg"
    },
    {
      id: 2,
      title: "Bí quyết chọn vật phẩm lưu niệm đúng người đúng dịp",
      excerpt: "Lựa chọn vật phẩm mang biểu trưng văn hóa đòi hỏi sự tinh tế và am hiểu về sở thích cũng như ý nghĩa tâm linh...",
      author: "GĐHĐ Team",
      date: "12 Tháng 12, 2026",
      imageUrl: "/assets/news/news-2.jpg"
    }
  ]
};
```

---

## 8. LỘ TRÌNH THỰC HIỆN CHI TIẾT (STEP-BY-STEP ROADMAP)

### Giai đoạn 1: Khởi tạo Component Nền tảng & Layout Chung (Layout & Navigation)
- [x] **Bước 1.1**: Tạo `TopBar.jsx` hiển thị hotline, link đăng nhập/đăng ký.
- [x] **Bước 1.2**: Nâng cấp `Header.jsx`: Logo calligraphy chính giữa, Hamburger menu bên trái, Search icon và Cart icon có badge số lượng bên phải.
- [x] **Bước 1.3**: Nâng cấp `Footer.jsx`: Giao diện tối màu (Dark Footer), bổ sung thông tin liên hệ, 4 cột điều hướng và biểu trưng thanh toán VietQR / Thẻ ngân hàng.
- [x] **Bước 1.4**: Tạo `SectionHeader.jsx` tái sử dụng (chứa ornament sừng hươu/hoa sen + 2 dòng chữ tiêu đề + divider 3 chấm).

### Giai đoạn 2: Xây dựng các Section Bán hàng Trang chủ (Home Sections)
- [x] **Bước 2.1**: Tạo `ServiceHighlights.jsx` (3 cam kết dịch vụ với icon máy bay, đổi trả, hotline).
- [x] **Bước 2.2**: Xây dựng `HeroBanner.jsx` (Banner lễ hội lớn với thông điệp ưu đãi gói quà).
- [x] **Bước 2.3**: Xây dựng `PromoBannersGrid.jsx` (Lưới 3 banner bộ sưu tập nổi bật).
- [x] **Bước 2.4**: Xây dựng `ProductCard.jsx` (Card sản phẩm chuẩn hiển thị ảnh vuông, tên, giá đỏ, nút "Tùy biến ngay").
- [x] **Bước 2.5**: Xây dựng `SaleProductsSection.jsx` (Khối "Sản phẩm khuyến mãi").

### Giai đoạn 3: Tích hợp Tabs Phân loại & Luồng Nghiệp vụ Customizer
- [x] **Bước 3.1**: Xây dựng `CatalogTabsSection.jsx` với các Tab lọc (Quà tặng, Đồ lưu niệm, Đồ trang trí) không reload trang (`FR-FE-CAT-01`).
- [x] **Bước 3.2**: Liên kết nút "Tùy biến ngay" trên ProductCard tới Route `/product/:id/customize` của bộ Fabric.js Customizer (`FR-FE-CUST-03`).
- [x] **Bước 3.3**: Kết nối Cart Icon với `MiniCartDrawer.jsx` hiển thị danh sách sản phẩm trong giỏ hàng Redux (`FR-FE-CART-04`).

### Giai đoạn 4: Hoàn thiện Nội dung Trải nghiệm & Thương hiệu (Brand & Content)
- [x] **Bước 4.1**: Xây dựng `TestimonialSection.jsx` với nền mờ lễ hội, avatar tròn và lời nhận xét ý nghĩa.
- [x] **Bước 4.2**: Xây dựng `LatestNewsSection.jsx` (Lưới tin tức 2 cột).
- [x] **Bước 4.3**: Xây dựng `BrandBadgesSection.jsx` (Dải huy hiệu chứng nhận chất lượng thủ công).
- [x] **Bước 4.4**: Tổng hợp toàn bộ các Section vào `HomePage.jsx`.

### Giai đoạn 5: Tối ưu Hóa & Kiểm thử Chất lượng (Optimization & QA)
- [x] **Bước 5.1 (Responsive)**: Kiểm tra hiển thị chuẩn xác trên Mobile (375px), Tablet (768px) và Desktop (1280px+).
- [x] **Bước 5.2 (Performance)**: Tối ưu lazy-load hình ảnh, kích thước WebP/SVG, đảm bảo FCP < 1.2s theo tiêu chí `NFR-FE-PERF-02`.
- [x] **Bước 5.3 (Accessibility)**: Kiểm tra độ tương phản màu sắc và điều hướng bàn phím theo chuẩn WCAG 2.1 AA (`NFR-FE-UX-01`).

---

## 9. TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)

Một giao diện trang chủ hoàn thiện đạt yêu cầu khi đáp ứng đầy đủ các tiêu chí sau:

1. **Độ tương đồng Layout (Visual Fidelity)**:
   - Thể hiện đầy đủ 11 khối chức năng từ Topbar đến Dark Footer đúng với cấu trúc hình ảnh thiết kế mẫu.
   - Giữ trọn vẹn phong cách hoa văn biểu trưng (Section header ornament, divider 3 chấm, nút bấm oval pill viền đỏ).
2. **Khả năng đáp ứng Responsive (Cross-Device)**:
   - Trên Mobile: Ẩn thanh topbar phụ, menu chuyển sang dạng trượt Drawer, Service Highlights xếp 1 cột, lưới sản phẩm 2 cột mượt mà.
   - Trên Desktop: Hiển thị đầy đủ 3 cột cam kết, lưới sản phẩm cân đối, bố cục chân trang 4 cột chuyên nghiệp.
3. **Hiệu năng & Tương tác (UX/UI)**:
   - Chuyển tab danh mục tức thời, không bị chớp giật màn hình.
   - Thao tác click vào giỏ hàng hoặc nút "Tùy biến" chuyển hướng chính xác đến module chức năng tương ứng trong SRS.
   - Tương thích tốt với hệ thống theme màu đã định nghĩa tại `tailwind.css` (`ivory`, `dao-yellow`, `dao-red`).

---
*Tài liệu được khởi tạo và lưu trữ tại `fe/PLAN_WEBSITE_DESIGN.md` phục vụ làm kim chỉ nam triển khai lập trình Frontend Storefront.*
