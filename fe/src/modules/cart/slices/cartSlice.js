import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],        // Shape: [{ productId, name, price, quantity, variant, customization, thumbnail }]
  totalAmount: 0,
}

/**
 * Helper to recalculate the total cart amount.
 * @param {Array} items - Cart items array
 * @returns {number} Total amount
 */
const calculateTotal = (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)

/**
 * Redux slice for shopping cart state management (FR-FE-CART-04).
 * Handles add, update quantity, remove, and clear operations.
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // Check if the same product with the same customization already exists
      const existing = state.items.find(
        (item) =>
          item.productId === action.payload.productId &&
          JSON.stringify(item.customization) === JSON.stringify(action.payload.customization)
      )
      if (existing) {
        existing.quantity += action.payload.quantity || 1
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 })
      }
      state.totalAmount = calculateTotal(state.items)
    },
    updateQuantity(state, action) {
      const { index, quantity } = action.payload
      if (state.items[index]) {
        state.items[index].quantity = Math.max(1, quantity)
      }
      state.totalAmount = calculateTotal(state.items)
    },
    removeFromCart(state, action) {
      state.items.splice(action.payload, 1)
      state.totalAmount = calculateTotal(state.items)
    },
    clearCart(state) {
      state.items = []
      state.totalAmount = 0
    },
  },
})

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
