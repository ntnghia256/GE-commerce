/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elegant background tones (ivory, light yellow, warm gray)
        ivory: '#FFFFF0',
        'warm-yellow': '#FFF8DC',
        'warm-gray': '#D3D3C0',
        // Brand Colors
        'brand-blue': '#034ea2',
        'brand-blue-light': '#60a5fa',
        'brand-yellow': '#f39c12',
        'brand-yellow-light': '#facc15',
        'brand-red': '#ef4444',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Calligraphy font for product customization
        calligraphy: ['"Noto Serif"', 'serif'],
        serif: ['"Noto Serif"', 'serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
