import { Send, RotateCcw, Headphones } from 'lucide-react'
import { HOME_MOCK_DATA } from '../../../modules/catalog/data/homeMockData'

/**
 * Service Highlights (USP Bar) directly below the Header.
 * Displays 3 core commitments: Free shipping, Easy exchange, Dedicated support.
 */
export default function ServiceHighlights() {
  const { serviceHighlights } = HOME_MOCK_DATA

  // Map icon names to Lucide icons
  const getIcon = (name) => {
    switch (name) {
      case 'Send':
        return <Send className="w-6 h-6 text-gray-700" />
      case 'RotateCcw':
        return <RotateCcw className="w-6 h-6 text-gray-700" />
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-gray-700" />
      default:
        return <Send className="w-6 h-6 text-gray-700" />
    }
  }

  return (
    <section className="bg-white border-b border-gray-100 py-4 px-4 shadow-2xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {serviceHighlights.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-center gap-3.5 ${
              index !== 0 ? 'pt-3 md:pt-0' : ''
            }`}
          >
            <div className="p-2 rounded-full bg-neutral-50 border border-gray-100 flex items-center justify-center">
              {getIcon(item.iconName)}
            </div>
            <div className="text-left">
              <h4 className="text-xs md:text-sm font-bold text-gray-800 tracking-wide uppercase">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
