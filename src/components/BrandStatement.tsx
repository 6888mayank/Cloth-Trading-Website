export default function BrandStatement() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#1a1a1a] overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4614218/pexels-photo-4614218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Fabric texture"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Fabric texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c4b99a' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        {/* Large display text */}
        <div className="mb-12">
          <div className="reveal font-display font-light text-white leading-[0.85] overflow-hidden">
            <div className="text-[18vw] lg:text-[15vw] xl:text-[160px] tracking-[-0.02em]">FABRIC</div>
          </div>
          <div className="reveal reveal-delay-1 font-display font-light leading-[0.85] overflow-hidden">
            <div className="text-[18vw] lg:text-[15vw] xl:text-[160px] tracking-[-0.02em] text-[#c4b99a]">TO</div>
          </div>
          <div className="reveal reveal-delay-2 font-display font-light text-white leading-[0.85] overflow-hidden">
            <div className="text-[18vw] lg:text-[15vw] xl:text-[160px] italic tracking-[-0.02em]">FASHION</div>
          </div>
        </div>

        {/* Divider */}
        <div className="reveal reveal-delay-3 flex items-center justify-center gap-6 mb-8">
          <div className="w-16 h-px bg-[#8a7a62]" />
          <div className="w-2 h-2 rotate-45 border border-[#8a7a62]" />
          <div className="w-16 h-px bg-[#8a7a62]" />
        </div>

        {/* Supporting text */}
        <div className="reveal reveal-delay-4 max-w-md mx-auto">
          <p className="font-body text-sm text-white/50 leading-[2] font-light">
            Every garment begins with a fabric.<br />
            Every finished piece reflects our craftsmanship.
          </p>
        </div>

        {/* Brand name */}
        <div className="reveal reveal-delay-5 mt-12">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-white/30">
            MITTAL APPARELS — Sonipat, Haryana
          </span>
        </div>
      </div>
    </section>
  );
}
