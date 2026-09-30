const steps = [
  {
    num: '01',
    title: 'Fabric Selection',
    desc: 'Selecting suitable fabrics according to garment requirements.',
    image: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    num: '02',
    title: 'Pattern & Cutting',
    desc: 'Precise pattern development and fabric cutting.',
    image: 'https://images.pexels.com/photos/4620607/pexels-photo-4620607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    num: '03',
    title: 'Stitching',
    desc: 'Professional garment assembly and stitching.',
    image: 'https://images.pexels.com/photos/4622205/pexels-photo-4622205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    num: '04',
    title: 'Quality Inspection',
    desc: 'Checking construction, measurements and finishing.',
    image: 'https://images.pexels.com/photos/8526968/pexels-photo-8526968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    num: '05',
    title: 'Finishing',
    desc: 'Final pressing, finishing and presentation.',
    image: 'https://images.pexels.com/photos/5531711/pexels-photo-5531711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    num: '06',
    title: 'Ready to Deliver',
    desc: 'Finished garments prepared for dispatch.',
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="py-24 lg:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#8a7a62]" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">Our Process</span>
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            From Fabric to<br />
            <span className="italic text-[#c4b99a]">Finished Garment</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2d2d2d]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group relative bg-[#1a1a1a] overflow-hidden`}
            >
              {/* Background image on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>

              <div className="relative p-8 lg:p-10">
                {/* Number */}
                <div className="font-display text-6xl font-light text-[#2d2d2d] group-hover:text-[#3a3028] transition-colors duration-500 leading-none mb-6">
                  {step.num}
                </div>

                {/* Connector line (horizontal for alternating) */}
                <div className="w-10 h-px bg-[#8a7a62] mb-6 group-hover:w-16 transition-all duration-500" />

                {/* Title */}
                <h3 className="font-display text-xl font-medium text-white mb-3 group-hover:text-[#c4b99a] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-[#666] leading-relaxed group-hover:text-[#999] transition-colors duration-300 font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="reveal mt-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-[#2d2d2d]" />
          <span className="font-display text-lg italic text-[#666]">Every stitch, purposefully crafted.</span>
          <div className="flex-1 h-px bg-[#2d2d2d]" />
        </div>
      </div>
    </section>
  );
}
