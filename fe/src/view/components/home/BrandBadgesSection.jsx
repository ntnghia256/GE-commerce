import { ShieldCheck, Award, HeartHandshake } from 'lucide-react'

/**
 * Brand Badges & Craft Quality Seals row above the Footer.
 * Displays vintage line-art stamps confirming handcrafted quality.
 */
export default function BrandBadgesSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-8 text-gray-700">
        {/* Badge 1: Craft Ribbon Badge */}
        <div className="flex flex-col items-center text-center group cursor-default">
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 border-dashed flex items-center justify-center mb-2 group-hover:border-dao-red group-hover:text-dao-red transition-all">
            <HeartHandshake className="w-8 h-8 stroke-[1.5]" />
          </div>
          <span className="font-serif font-bold text-xs uppercase tracking-widest text-gray-800">
            CHẾ TÁC THỦ CÔNG
          </span>
          <span className="text-[11px] text-gray-400">
            Tỉ mỉ từng đường nét
          </span>
        </div>

        {/* Badge 2: Laurel Quality Guarantee Seal */}
        <div className="flex flex-col items-center text-center group cursor-default">
          <div className="w-16 h-16 rounded-full border-2 border-gray-800 flex items-center justify-center mb-2 group-hover:border-dao-yellow group-hover:text-dao-yellow transition-all">
            <Award className="w-8 h-8 stroke-[1.5]" />
          </div>
          <span className="font-serif font-bold text-xs uppercase tracking-widest text-gray-800">
            100% CHẤT LƯỢNG
          </span>
          <span className="text-[11px] text-gray-400">
            Gỗ tự nhiên & Bền đẹp
          </span>
        </div>

        {/* Badge 3: Seal of Authenticity */}
        <div className="flex flex-col items-center text-center group cursor-default">
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 border-dashed flex items-center justify-center mb-2 group-hover:border-dao-blue group-hover:text-dao-blue transition-all">
            <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
          </div>
          <span className="font-serif font-bold text-xs uppercase tracking-widest text-gray-800">
            BẢO HÀNH CHÍNH HÃNG
          </span>
          <span className="text-[11px] text-gray-400">
            Đổi mới nếu lỗi in/khắc
          </span>
        </div>
      </div>
    </section>
  )
}
