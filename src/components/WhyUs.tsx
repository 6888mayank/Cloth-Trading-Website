import { Award, Box, CheckSquare, Compass, RefreshCw, Briefcase } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Manufacturing Expertise',
    desc: 'Focused garment manufacturing capabilities across shirts, trousers and cordsets.',
  },
  {
    icon: Box,
    title: 'Product Versatility',
    desc: 'Shirts, trousers and cordsets under one manufacturing setup.',
  },
  {
    icon: CheckSquare,
    title: 'Quality Focus',
    desc: 'Attention to material, construction and finishing at every stage.',
  },
  {
    icon: Compass,
    title: 'Fashion-Focused Approach',
    desc: 'Understanding modern apparel requirements and contemporary styles.',
  },
  {
    icon: RefreshCw,
    title: 'Consistency',
    desc: 'Focused on maintaining consistency across production runs.',
  },
  {
    icon: Briefcase,
    title: 'Professional Approach',
    desc: 'A structured approach to manufacturing and client requirements.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#f0ece4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#8a7a62]" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">Why Choose Us</span>
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight max-w-2xl">
            Built Around Quality.<br />
            <span className="italic text-[#8a7a62]">Driven by Fashion.</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d4c8b4]">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} group bg-[#f0ece4] hover:bg-[#1a1a1a] transition-colors duration-500 p-8 lg:p-10`}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#d4c8b4] group-hover:border-[#3a3028] mb-6 transition-colors duration-500">
                  <Icon size={18} className="text-[#8a7a62] group-hover:text-[#c4b99a] transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium text-[#1a1a1a] group-hover:text-white transition-colors duration-500 mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-[#6b5e4a] group-hover:text-[#999] transition-colors duration-500 leading-relaxed font-light">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
