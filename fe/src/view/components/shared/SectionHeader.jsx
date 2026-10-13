/**
 * Reusable Section Header with decorative ornament and two-tiered typography.
 * Directly matches the design layout ornament style.
 */
export default function SectionHeader({
  subTitle = 'Sản phẩm',
  title = 'khuyến mãi',
  className = '',
}) {
  return (
    <div className={`text-center my-10 ${className}`}>
      {/* Decorative Horns / Antler / Floral Ornament SVG */}
      <div className="flex justify-center mb-2.5 text-dao-red/80 hover:text-dao-red transition-colors">
        <svg
          className="w-12 h-6"
          viewBox="0 0 48 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stylized ornamental antlers / lotus crest */}
          <path d="M24 22V14" />
          <path d="M24 14C21 10 16 7 9 7C7 7 5 7.5 3 8.5C6 11 9 14.5 10 18" />
          <path d="M24 14C27 10 32 7 39 7C41 7 43 7.5 45 8.5C42 11 39 14.5 38 18" />
          <path d="M17 11C15 8 11 5 7 5" />
          <path d="M31 11C33 8 37 5 41 5" />
        </svg>
      </div>

      {/* Two-tiered Heading */}
      <div className="space-y-1">
        <span className="block text-xl md:text-2xl font-serif text-gray-800 tracking-wide">
          {subTitle}
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-dao-red tracking-wider">
          {title}
        </h2>
      </div>

      {/* 3 Diamond / Dot ornamental divider */}
      <div className="flex justify-center items-center gap-2 mt-3.5">
        <span className="w-1.5 h-1.5 rotate-45 bg-gray-300 rounded-[1px]" />
        <span className="w-2 h-2 rotate-45 bg-dao-red rounded-[1px]" />
        <span className="w-1.5 h-1.5 rotate-45 bg-gray-300 rounded-[1px]" />
      </div>
    </div>
  )
}
