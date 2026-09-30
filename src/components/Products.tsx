import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    name: 'Shirts',
    description:
      'Professional and contemporary shirt manufacturing with attention to fit, fabric and finishing.',
    image: '/images/shirts.jpg',
    tag: 'Formal & Casual',
  },
  {
    name: 'Trousers',
    description:
      'Precisely manufactured trousers combining comfort, structure and refined finishing.',
    image: 'https://images.pexels.com/photos/13339846/pexels-photo-13339846.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Structured & Refined',
  },
  {
    name: 'Cordsets',
    description:
      'Modern cordsets / co-ord sets manufactured for contemporary fashion requirements.',
    image: '/images/cordsets.jpg',
    tag: 'Contemporary Fashion',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-[#f0ece4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#8a7a62]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">Product Range</span>
            </div>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
              Our Product<br />
              <span className="italic text-[#8a7a62]">Range</span>
            </h2>
          </div>
          <p className="reveal font-body text-sm text-[#6b5e4a] max-w-xs leading-relaxed font-light lg:pb-2">
            Manufactured with precision. Designed for modern fashion.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
            >
              {/* Image */}
              <div className="img-zoom relative overflow-hidden mb-5 aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center gap-2 border border-white px-5 py-3">
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-white">Explore Product</span>
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#8a7a62]">{product.tag}</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#8a7a62] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-[#6b5e4a] leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>
                <div className="mt-1 shrink-0 w-8 h-8 border border-[#8a7a62] flex items-center justify-center group-hover:bg-[#8a7a62] transition-colors duration-300">
                  <ArrowUpRight size={14} className="text-[#8a7a62] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
