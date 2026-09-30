import { CheckCircle, Layers, Scissors, Star } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Quality Focus',
    desc: 'Consistent quality standards maintained throughout every stage of production.',
    image: 'https://images.pexels.com/photos/36013144/pexels-photo-36013144.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Scissors,
    title: 'Precision Manufacturing',
    desc: 'Every cut, stitch and seam executed with accuracy and care.',
    image: 'https://images.pexels.com/photos/4109758/pexels-photo-4109758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: CheckCircle,
    title: 'Consistent Finishing',
    desc: 'Uniform finishing across every piece — pressing, detailing and presentation.',
    image: 'https://images.pexels.com/photos/1482180/pexels-photo-1482180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Layers,
    title: 'Attention to Detail',
    desc: 'From collar construction to hem lines — the details define the garment.',
    image: 'https://images.pexels.com/photos/6275963/pexels-photo-6275963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function Quality() {
  return (
    <section id="quality" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#8a7a62]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">Craftsmanship</span>
            </div>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
              Quality Is Built Into<br />
              <span className="italic text-[#8a7a62]">Every Stitch</span>
            </h2>
          </div>
          <div className="reveal">
            <p className="font-body text-base text-[#555] leading-[1.8] font-light">
              Every garment represents our commitment to consistency, craftsmanship and attention to detail. Our manufacturing approach focuses on maintaining quality from fabric handling through final finishing.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${i + 1} group`}
              >
                {/* Image */}
                <div className="img-zoom aspect-square overflow-hidden mb-5">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon + content */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Icon size={16} className="text-[#8a7a62]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-[#1a1a1a] mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-xs text-[#777] leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
