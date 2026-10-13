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
        // Cao Dai religious accent colors (Yellow - Blue - Red)
        'dao-yellow': '#DAA520',
        'dao-blue': '#1E90FF',
        'dao-red': '#DC143C',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Calligraphy font for product customization
        calligraphy: ['"Noto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
