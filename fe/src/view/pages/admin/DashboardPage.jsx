/**
 * Admin dashboard page (FR-FE-ADM-03).
 * Displays revenue statistics, order counts, and top-selling products.
 * Charts will be implemented using Recharts.
 */
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Summary statistics cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Doanh thu tháng', value: '—' },
          { label: 'Đơn hàng mới', value: '—' },
          { label: 'Sản phẩm bán chạy', value: '—' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Revenue chart placeholder — Recharts will be integrated here */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <p className="text-gray-400 text-center py-12">
          Biểu đồ doanh thu (Recharts) sẽ được hiển thị ở đây
        </p>
      </div>
    </div>
  )
}
