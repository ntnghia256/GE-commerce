/**
 * Reusable decorative Floral/Leaf SVG ornament matching Cao Dai Gifts mockup.
 * Used at corners of HeroBanner, SaleSection, and LatestNews.
 *
 * @param {'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'} position
 * @param {'blue' | 'yellow' | 'mixed'} color
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function FloralDecor({
  position = 'top-left',
  color = 'mixed',
  size = 'md',
  className = '',
}) {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20 md:w-24 md:h-24',
    lg: 'w-28 h-28 md:w-36 md:h-36',
  }

  const rotationMap = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  }

  const primaryColor =
    color === 'yellow' ? '#f59e0b' : color === 'blue' ? '#38bdf8' : '#60a5fa'
  const secondaryColor =
    color === 'yellow' ? '#fbbf24' : color === 'blue' ? '#93c5fd' : '#facc15'
  const leafColor = color === 'yellow' ? '#fde68a' : '#34d399'

  return (
    <div
      className={`pointer-events-none select-none ${sizeMap[size]} ${rotationMap[position]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-85"
      >
        {/* Curved stem */}
        <path
          d="M10 10 C35 25 55 55 60 90"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Small Leaf 1 */}
        <path
          d="M26 22 C32 12 45 15 42 28 C34 29 28 26 26 22 Z"
          fill={leafColor}
          opacity="0.9"
        />

        {/* Small Leaf 2 */}
        <path
          d="M40 38 C48 30 60 35 56 46 C48 47 42 43 40 38 Z"
          fill={secondaryColor}
          opacity="0.85"
        />

        {/* Blossom Petals */}
        <g transform="translate(60, 80)">
          <circle cx="0" cy="0" r="8" fill={primaryColor} />
          <circle cx="-6" cy="-4" r="5" fill={secondaryColor} />
          <circle cx="6" cy="-4" r="5" fill={secondaryColor} />
          <circle cx="-6" cy="4" r="5" fill={secondaryColor} />
          <circle cx="6" cy="4" r="5" fill={secondaryColor} />
          <circle cx="0" cy="0" r="3" fill="#ea580c" />
        </g>

        {/* Mini Accent Dots */}
        <circle cx="18" cy="42" r="2" fill={secondaryColor} />
        <circle cx="50" cy="20" r="2.5" fill={primaryColor} />
        <circle cx="70" cy="60" r="2" fill={leafColor} />
      </svg>
    </div>
  )
}
