import { useState } from 'react';

const categories = ['All', 'Manufacturing', 'Products', 'Fabric', 'Finishing'];

const images = [
  {
    src: 'https://images.pexels.com/photos/31199588/pexels-photo-31199588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Factory sewing workers',
    category: 'Manufacturing',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/4621659/pexels-photo-4621659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sewing workshop machines',
    category: 'Manufacturing',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Fabric rolls storage',
    category: 'Fabric',
    span: '',
  },
  {
    src: '/images/shirts.jpg',
    alt: 'Formal shirt fashion',
    category: 'Products',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/4622205/pexels-photo-4622205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hands sewing fabric',
    category: 'Manufacturing',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/36013144/pexels-photo-36013144.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Fabric stitching close-up',
    category: 'Fabric',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/31199564/pexels-photo-31199564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Textile factory worker',
    category: 'Manufacturing',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/13339846/pexels-photo-13339846.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Formal trousers fashion',
    category: 'Products',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5531711/pexels-photo-5531711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Clothing rack boutique',
    category: 'Finishing',
    span: '',
  },
  {
    src: '/images/cordsets.jpg',
    alt: 'Co-ord set fashion',
    category: 'Products',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4614218/pexels-photo-4614218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Fabric rolls on table',
    category: 'Fabric',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Shirts on rack',
    category: 'Finishing',
    span: '',
  },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? images : images.filter((img) => img.category === active);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#8a7a62]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">Showcase</span>
            </div>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
              Inside<br />
              <span className="italic text-[#8a7a62]">Mittal Apparels</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="reveal flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                  active === cat
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'border-[#d4c8b4] text-[#8a7a62] hover:border-[#8a7a62]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="gallery-item relative break-inside-avoid overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="gallery-overlay absolute inset-0 bg-black/50 flex items-end p-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/80">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
