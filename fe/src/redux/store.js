import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

/**
 * Redux store configuration.
 * DevTools are enabled only in development mode.
 */
export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
})
