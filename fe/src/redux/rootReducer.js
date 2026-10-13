import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../modules/auth/slices/authSlice'
import cartReducer from '../modules/cart/slices/cartSlice'
import customizerReducer from '../modules/customizer/slices/customizerSlice'

/**
 * Root reducer combining all feature slice reducers.
 */
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  customizer: customizerReducer,
})

export default rootReducer
