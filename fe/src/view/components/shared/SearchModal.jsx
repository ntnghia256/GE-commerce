import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, Sparkles } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'
import { formatCurrency } from '../../../core/utils/formatCurrency'

/**
 * Instant Search Modal overlay for searching products.
 */
export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredProducts = searchTerm.trim()
    ? HOME_MOCK_DATA.allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  const handleSelectProduct = (id) => {
    onClose()
    navigate(`/product/${id}`)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm gối custom, tranh gỗ, quà tặng lưu niệm..."
            className="w-full text-base outline-none placeholder-gray-400 text-gray-800"
          />
          <button
            onClick={onClose}
            aria-label="Đóng tìm kiếm"
            className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick suggestions / Search results */}
        <div className="p-4 max-h-96 overflow-y-auto">
          {searchTerm.trim() ? (
            filteredProducts.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
                  Kết quả tìm kiếm ({filteredProducts.length})
                </p>
                {filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectProduct(item.id)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-dao-red font-semibold">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                    {item.isCustomizable && (
                      <span className="text-[11px] bg-red-50 text-dao-red px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Tùy biến
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400 text-sm">
                Không tìm thấy sản phẩm phù hợp với "{searchTerm}"
              </div>
            )
          ) : (
            <div>
              <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                Từ khóa gợi ý
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Gối thêu tên',
                  'Tranh gỗ Thiên Nhãn',
                  'Sổ tay khắc laser',
                  'Quà tặng gia đình',
                  'Đồ trang trí bàn thờ',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
