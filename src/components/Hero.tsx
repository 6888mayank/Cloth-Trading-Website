import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/31199588/pexels-photo-31199588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Garment manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Fabric texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="hero-animate-1 flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-white/50" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60">
              Garment Manufacturing
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-animate-2 font-display font-light text-white leading-[0.9] mb-8">
            <span className="block text-6xl md:text-7xl lg:text-[100px] xl:text-[120px]">FROM FABRIC</span>
            <span className="block text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] italic text-white/90">TO FASHION.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-animate-3 font-body text-base md:text-lg text-white/70 tracking-wide mb-3 font-light">
            Precision manufacturing. Premium apparel. Built for modern fashion.
          </p>

          {/* Supporting text */}
          <p className="hero-animate-4 font-body text-sm text-white/50 max-w-xl leading-relaxed mb-10 font-light">
            From fabric selection to finished garments, Mittal Apparels delivers professionally manufactured apparel with a focus on quality, consistency and craftsmanship.
          </p>

          {/* CTAs */}
          <div className="hero-animate-5 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="font-body text-sm tracking-[0.12em] uppercase px-8 py-4 bg-white text-[#1a1a1a] hover:bg-[#f0ece4] transition-all duration-300 font-medium"
            >
              Explore Our Products
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="font-body text-sm tracking-[0.12em] uppercase px-8 py-4 border border-white/50 text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-8 flex items-end justify-between">
          <div className="hero-animate-5 hidden md:block">
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1">Location</div>
            <div className="font-body text-xs text-white/60">Sonipat, Haryana, India</div>
          </div>
          <button
            onClick={() => handleScroll('#about')}
            className="hero-animate-5 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 group"
          >
            <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
