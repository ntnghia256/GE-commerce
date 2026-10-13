import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { removeFromCart, updateQuantity } from '../../../modules/cart/slices/cartSlice'
import { formatCurrency } from '../../../core/utils/formatCurrency'
import { ROUTES } from '../../../core/constants/routes'

/**
 * Slide-out Mini Cart Drawer (FR-FE-CART-04).
 */
export default function MiniCartDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const { items = [], totalAmount = 0 } = useSelector((state) => state.cart || {})

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-warm-yellow/30">
            <div className="flex items-center gap-2 text-gray-800 font-serif font-bold text-lg">
              <ShoppingBag className="w-5 h-5 text-dao-red" />
              <span>Giỏ Hàng Của Bạn ({items.length})</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-gray-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-3 stroke-[1.5]" />
                <p className="text-base font-medium text-gray-600 mb-1">
                  Giỏ hàng của bạn đang trống
                </p>
                <p className="text-xs text-gray-400 mb-6">
                  Hãy khám phá các sản phẩm quà tặng và vật phẩm tùy biến độc đáo!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-dao-red text-white text-xs font-semibold rounded-full hover:bg-red-700 transition-colors uppercase tracking-wider"
                >
                  Mua sắm ngay
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={`${item.productId}-${index}`} className="py-4 flex gap-3">
                  <img
                    src={item.thumbnail || item.imageUrl || 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=150&q=80'}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg border border-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-800 truncate">
                      {item.name}
                    </h4>

                    {/* Customization Details preview if available */}
                    {item.customization?.text && (
                      <p className="text-xs text-dao-yellow font-medium truncate mt-0.5">
                        Khắc/in: "{item.customization.text}"
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200 rounded-md">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                index,
                                quantity: Math.max(1, item.quantity - 1),
                              })
                            )
                          }
                          className="px-2 py-0.5 text-gray-500 hover:bg-gray-100 text-xs"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                index,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                          className="px-2 py-0.5 text-gray-500 hover:bg-gray-100 text-xs"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-bold text-dao-red">
                        {formatCurrency(item.price * item.quantity)}
                      </span>

                      <button
                        onClick={() => dispatch(removeFromCart(index))}
                        className="text-gray-400 hover:text-dao-red transition-colors p-1"
                        title="Xóa sản phẩm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-gray-100 bg-gray-50/70 space-y-3">
              <div className="flex items-center justify-between text-base font-bold text-gray-800">
                <span>Tổng cộng:</span>
                <span className="text-lg text-dao-red">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                * Đã bao gồm hỗ trợ gói quà miễn phí theo chương trình mùa lễ hội
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to={ROUTES.CART}
                  onClick={onClose}
                  className="w-full text-center py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                >
                  Xem giỏ hàng
                </Link>
                <Link
                  to={ROUTES.CHECKOUT}
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-dao-red text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-sm"
                >
                  <span>Thanh toán</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
