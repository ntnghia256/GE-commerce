import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: '',
  fontFamily: 'Noto Serif',
  motif: null,            // Shape: { id, name, imageUrl }
  position: { x: 0, y: 0 },
  previewSnapshot: null,  // Base64 image of the current canvas state
}

/**
 * Redux slice for product customization state.
 * Manages user inputs for the real-time preview canvas (FR-FE-CUST-03).
 */
const customizerSlice = createSlice({
  name: 'customizer',
  initialState,
  reducers: {
    setText(state, action) {
      state.text = action.payload
    },
    setFont(state, action) {
      state.fontFamily = action.payload
    },
    setMotif(state, action) {
      state.motif = action.payload
    },
    setPosition(state, action) {
      state.position = action.payload
    },
    setPreviewSnapshot(state, action) {
      state.previewSnapshot = action.payload
    },
    resetCustomizer() {
      return initialState
    },
  },
})

export const { setText, setFont, setMotif, setPosition, setPreviewSnapshot, resetCustomizer } =
  customizerSlice.actions
export default customizerSlice.reducer
