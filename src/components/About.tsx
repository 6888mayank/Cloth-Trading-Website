const steps = [
  { num: '01', label: 'Fabric', desc: 'Quality fabric selection' },
  { num: '02', label: 'Manufacturing', desc: 'Precision garment production' },
  { num: '03', label: 'Finishing', desc: 'Attention to detail' },
  { num: '04', label: 'Fashion', desc: 'Finished garments ready for the market' },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top eyebrow */}
        <div className="reveal flex items-center gap-3 mb-20">
          <div className="w-8 h-px bg-[#8a7a62]" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">About Us</span>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: Image */}
          <div className="reveal-left img-zoom relative">
            <img
              src="https://images.pexels.com/photos/31090827/pexels-photo-31090827.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Manufacturing process"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Offset accent box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f0ece4] -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#d4c8b4]" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight mb-8">
              Where Fabric<br />
              <span className="italic text-[#8a7a62]">Becomes Fashion</span>
            </h2>
            <div className="w-12 h-px bg-[#8a7a62] mb-8 reveal" />
            <p className="reveal font-body text-base text-[#555] leading-[1.8] mb-8 font-light">
              Mittal Apparels is a garment manufacturing company focused on creating quality apparel with attention to detail, consistency and modern manufacturing practices. From the initial fabric stage to the final finished garment, we focus on maintaining quality throughout the production process.
            </p>
            <p className="reveal font-body text-sm text-[#8a7a62] leading-relaxed font-light">
              Based in Rai Industrial Area, Sonipat — serving fashion requirements across India.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e0d4]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} bg-[#faf9f7] p-8 lg:p-10 group hover:bg-[#1a1a1a] transition-colors duration-500`}
            >
              <div className="font-display text-5xl font-light text-[#e8e0d4] group-hover:text-[#3a3028] transition-colors duration-500 mb-4 leading-none">
                {step.num}
              </div>
              <div className="font-display text-xl font-medium text-[#1a1a1a] group-hover:text-white transition-colors duration-500 mb-2">
                {step.label}
              </div>
              <div className="font-body text-xs text-[#8a7a62] group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
