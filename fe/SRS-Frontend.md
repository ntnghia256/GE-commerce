# System Requirement Specify - SRS - Frontend

Created: October 7, 2026 9:26 PM

# ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS) - FRONTEND

**Dự án**: Nền tảng Thương mại Điện tử GĐHĐ (Gia Đình Hưng Đạo E-Commerce)  

**Phân hệ**: Frontend Web Application (Storefront & Admin Portal)  

**Tiêu chuẩn áp dụng**: IEEE 830 / ISO/IEC/IEEE 29148  

**Trạng thái**: Bản thảo chi tiết (Draft v1.0)  

---

<aside>
💡

**Mục tiêu tài liệu**: Tài liệu này định nghĩa chi tiết các yêu cầu chức năng, phi chức năng, kiến trúc giao diện và trải nghiệm người dùng (UI/UX) cho phân hệ Frontend của dự án Website Thương mại Điện tử GĐHĐ, chuyên cung cấp các mặt hàng trang trí, quà tặng lưu niệm và đồ dùng cá nhân được cá nhân hóa mang bản sắc văn hóa đạo Cao Đài.

</aside>

---

## 1. TỔNG QUAN & PHẠM VI DỰ ÁN (OVERVIEW & SCOPE)

### 1.1. Mục đích dự án

Xây dựng một website thương mại điện tử hiện đại, trang nhã, kết nối cộng đồng tín đồ và người quan tâm đến đạo Cao Đài, cung cấp các sản phẩm trang trí gia đình, vật phẩm kỷ niệm và quà tặng được cá nhân hóa (khắc tên, in thánh hiệu, biểu trưng Thiên Nhãn, hoa sen, cờ Tam Thanh).

### 1.2. Phạm vi hệ thống (System Scope)

- **Trong phạm vi (In-Scope - MVP)**:
    - **Cửa hàng trực tuyến (Storefront)**: Trang chủ giới thiệu, cây danh mục sản phẩm, trang chi tiết sản phẩm tích hợp bộ công cụ xem trước cá nhân hóa cơ bản (Real-time Live Preview text/họa tiết), giỏ hàng, đặt hàng (Checkout) hỗ trợ chuyển khoản ngân hàng (VietQR) và COD.
    - **Tài khoản người dùng**: Đăng ký, đăng nhập (JWT), xem lịch sử trạng thái đơn hàng.
    - **Cổng quản trị (Admin Portal)**: Quản lý danh mục, sản phẩm & mẫu tùy biến (custom templates), quản lý xử lý đơn hàng, cập nhật trạng thái đơn gia công, xem báo cáo doanh thu cơ bản.
- **Ngoài phạm vi (Out-of-Scope - Các giai đoạn sau)**:
    - Mô hình 3D AR xoay 360 độ vật phẩm.
    - Thanh toán thẻ tín dụng quốc tế (Visa/Mastercard qua Stripe).
    - Ứng dụng di động native (iOS/Android).

### 1.3. Nhóm người dùng (User Personas)

- **Khách vãng lai (Guest)**: Xem sản phẩm, thử tính năng cá nhân hóa, đặt hàng nhanh không bắt buộc đăng ký.
- **Khách hàng thân thiết (Registered Customer)**: Lưu địa chỉ giao hàng, theo dõi đơn hàng từng bước, lưu sản phẩm yêu thích.
- **Quản trị viên / Nhân viên (Admin / Staff)**: Quản lý kho sản phẩm, duyệt và xử lý đơn hàng, theo dõi file thiết kế cá nhân hóa do khách tạo.

---

## 2. KIẾN TRÚC KỸ THUẬT & RÀNG BUỘC (ARCHITECTURE & CONSTRAINTS)

### 2.1. Công nghệ Frontend (Tech Stack)

- **Core Framework**: ReactJS 18+ (Vite SPA).
- **Ngôn ngữ**: JavaScript (JSX) cho toàn bộ codebase Frontend.
- **UI & Styling**: Tailwind CSS kết hợp thư viện component hiện đại (shadcn/ui hoặc Ant Design) mang phong cách tối giản, tôn kính.
- **Quản lý trạng thái (State Management)**: Redux Toolkit quản lý Auth, Cart và Customization state; TanStack Query (React Query) quản lý server state và caching.
- **Canvas / Preview Engine**: HTML5 Canvas / Fabric.js để hiển thị mô phỏng vị trí in ấn/khắc họa tiết lên vật phẩm.
- **Form & Validation**: React Hook Form kết hợp Zod schema.

### 2.2. Ràng buộc thiết kế & môi trường

- **Tương thích trình duyệt**: Chạy tốt trên Chrome, Safari, Edge, Firefox phiên bản 2 năm gần nhất.
- **Responsive**: Hỗ trợ 100% các màn hình chuẩn: Mobile (375px - 640px), Tablet (641px - 1024px), Desktop (>= 1025px).
- **Màu sắc chủ đạo**: Tông nền trang nhã (trắng ngà, vàng nhạt, xám ấm) kết hợp điểm xuyết màu sắc đạo giáo hài hòa (Vàng - Xanh Thái Cực - Đỏ).

---

## 3. YÊU CẦU CHỨC NĂNG (FUNCTIONAL REQUIREMENTS - FR)

### 3.1. Phân hệ Cửa hàng (Storefront)

| **Mã Yêu Cầu** | **Tính Năng / Hành Động** | **Mô Tả Chi Tiết Hệ Thống** | **Tiêu Chí Nghiệm Thu (Acceptance Criteria)** | **Độ Ưu Tiên** |
| --- | --- | --- | --- | --- |
| `FR-FE-CAT-01` | Trang chủ & Danh mục | Hiển thị banner sự kiện đạo, danh mục nổi bật (Đồ trang trí bàn thờ, Tranh nghệ thuật, Quà lưu niệm, Sổ tay/Vật phẩm cá nhân). Bộ lọc theo giá, phân loại. | Thời gian tải trang danh mục &lt; 1.5s; lọc và tìm kiếm không cần reload trang. | Cao |
| `FR-FE-PROD-02` | Chi tiết sản phẩm | Hiển thị hình ảnh độ phân giải cao, giá, biến thể (kích thước, chất liệu gỗ/đồng/pha lê), mô tả ý nghĩa văn hóa sản phẩm. | Chuyển đổi biến thể cập nhật giá và tồn kho tức thời; có nút "Cá nhân hóa sản phẩm". | Cao |
| `FR-FE-CUST-03` | Bộ xem trước cá nhân hóa (Product Customizer) | Cho phép nhập văn bản (tên người nhận, pháp danh, lời chúc), chọn font chữ thư pháp/chữ in, chọn họa tiết biểu trưng (Thiên Nhãn, Hoa Sen, Cờ Tam Thanh) và xem mô phỏng trực tiếp trên ảnh mockup sản phẩm. | Cập nhật xem trước thời gian thực (real-time preview); giới hạn độ dài ký tự theo cấu hình; xuất được dữ liệu cấu hình vào đơn hàng. | Cao |
| `FR-FE-CART-04` | Giỏ hàng & Cấu hình đơn | Quản lý danh sách mặt hàng, hiển thị rõ cấu hình cá nhân hóa kèm theo mỗi sản phẩm, tự động tính tổng tiền và phí vận chuyển ước tính. | Cập nhật số lượng, xóa sản phẩm mượt mà; hiển thị thumbnail preview tùy biến đã chọn. | Cao |
| `FR-FE-CHK-05` | Quy trình Thanh toán (Checkout) | Nhập thông tin giao hàng (họ tên, SĐT, địa chỉ 3 cấp Tỉnh/Huyện/Xã). Chọn phương thức thanh toán: COD hoặc Chuyển khoản ngân hàng VietQR. | Validate form chặt chẽ bằng Zod; hiển thị mã QR VietQR động kèm đúng số tiền và nội dung chuyển khoản nếu chọn chuyển khoản. | Cao |
| `FR-FE-AUTH-06` | Xác thực & Hồ sơ cá nhân | Đăng nhập, đăng ký tài khoản, quên mật khẩu; trang quản lý thông tin tài khoản và danh sách đơn hàng đã đặt cùng trạng thái đơn hàng. | Lưu JWT an toàn; tự động redirect khi hết hạn phiên; hiển thị chi tiết timeline trạng thái đơn. | Trung bình |

### 3.2. Phân hệ Quản trị (Admin Portal)

| **Mã Yêu Cầu** | **Tính Năng Quản Trị** | **Mô Tả Chi Tiết Hệ Thống** | **Tiêu Chí Nghiệm Thu (Acceptance Criteria)** | **Độ Ưu Tiên** |
| --- | --- | --- | --- | --- |
| `FR-FE-ADM-01` | Quản lý sản phẩm & Mẫu | Giao diện CRUD sản phẩm, tải ảnh lên Cloudinary/S3, cấu hình vùng cá nhân hóa (tọa độ in/khắc, danh sách họa tiết cho phép). | Admin tạo được sản phẩm mới, upload nhiều ảnh kéo thả, định vị vùng custom dễ dàng. | Cao |
| `FR-FE-ADM-02` | Quản lý Đơn hàng & Gia công | Hiển thị danh sách đơn hàng lọc theo trạng thái: Mới, Đã xác nhận, Đang gia công/in ấn, Đang giao, Hoàn thành, Đã hủy. Cho phép xem text khắc và file mockup khách đã đặt. | Xem được đầy đủ yêu cầu khắc/in của khách; cập nhật trạng thái đơn gửi thông báo cho khách. | Cao |
| `FR-FE-ADM-03` | Báo cáo tổng quan (Dashboard) | Biểu đồ thống kê doanh thu, số lượng đơn hàng, top sản phẩm bán chạy theo tuần/tháng. | Hiển thị biểu đồ trực quan (Recharts hoặc Chart.js), tải dữ liệu nhanh dưới 1s. | Trung bình |

---

## 4. KỊCH BẢN SỬ DỤNG ĐIỂN HÌNH (USE CASES)

### Use Case UC-FE-01: Khách hàng tùy biến sản phẩm và hoàn tất đặt hàng

- **Tác tử (Actor)**: Khách hàng (Guest hoặc Registered User).
- **Tiền điều kiện**: Sản phẩm đang còn hàng và có bật tính năng cá nhân hóa.
- **Kịch bản chính**:
    1. Khách hàng truy cập trang chi tiết sản phẩm (ví dụ: Tranh khắc gỗ Thiên Nhãn để bàn).
    2. Khách hàng bấm chọn tùy chọn "Cá nhân hóa".
    3. Khách hàng nhập nội dung cần khắc (Pháp danh hoặc Tên gia đình), chọn font chữ thư pháp và vị trí biểu trưng.
    4. Giao diện Canvas cập nhật hình ảnh xem trước mô phỏng vật phẩm sau khi hoàn thiện.
    5. Khách hàng ưng ý bấm "Thêm vào giỏ hàng" -> Hệ thống lưu snapshot tùy biến vào giỏ.
    6. Khách hàng chuyển sang trang Thanh toán, điền địa chỉ nhận hàng, chọn phương thức thanh toán VietQR.
    7. Hệ thống hiển thị mã VietQR động, khách quét mã thanh toán và hoàn tất gửi đơn.
- **Ngoại lệ**: Nếu người dùng nhập quá số ký tự cho phép, hệ thống báo lỗi đỏ và chặn thêm vào giỏ hàng.

---

## 5. YÊU CẦU PHI CHỨC NĂNG (NON-FUNCTIONAL REQUIREMENTS - NFR)

### 5.1. Hiệu năng & Tối ưu (Performance)

- `NFR-FE-PERF-01`: Điểm Google Lighthouse trên thiết bị di động đạt tối thiểu 85 điểm cho Performance, 95 điểm cho Accessibility và SEO.
- `NFR-FE-PERF-02`: First Contentful Paint (FCP) &lt; 1.2s; Largest Contentful Paint (LCP) &lt; 2.5s trên đường truyền mạng tiêu chuẩn 4G.
- `NFR-FE-PERF-03`: Tối ưu dung lượng bundle size với code-splitting (React.lazy), tối ưu hình ảnh định dạng WebP/AVIF.

### 5.2. Bảo mật & An toàn dữ liệu (Security)

- `NFR-FE-SEC-01`: Phòng chống tấn công XSS thông qua việc escape toàn bộ nội dung do người dùng nhập vào trình canvas và form.
- `NFR-FE-SEC-02`: Lưu trữ JWT token an toàn, cơ chế auto-refresh token trong suốt với người dùng.

### 5.3. Trải nghiệm người dùng & Khả năng tiếp cận (Accessibility & UX)

- `NFR-FE-UX-01`: Hỗ trợ đầy đủ điều hướng bằng bàn phím, tương thích với chuẩn WCAG 2.1 AA.
- `NFR-FE-UX-02`: Giao diện có micro-interactions mượt mà, thông báo trạng thái Toast rõ ràng khi thực hiện các hành động thêm giỏ hàng, đặt hàng thành công.

---

## 6. ĐỀ XUẤT NÂNG CAO CHO GIAI ĐOẠN HOÀN THIỆN (PROPOSALS)

1. **Công cụ Customizer**: Đề xuất sử dụng thư viện **Fabric.js** hoặc **Konva.js** cho module preview sản phẩm vì hỗ trợ xuất vector/ảnh độ phân giải cao phục vụ cho xưởng gia công in ấn thực tế.
2. **Cổng thanh toán QR**: Đề xuất tích hợp thư viện tạo mã VietQR chuẩn NAPAS 247 để khách hàng quét được trên mọi app ngân hàng tại Việt Nam mà không tốn phí cổng thanh toán trung gian.
3. **Quản lý ảnh**: Đề xuất tích hợp upload ảnh trực tiếp lên **Cloudinary** từ client với signed URL để giảm tải băng thông cho server Backend.