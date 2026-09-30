import { ArrowRight } from 'lucide-react';

export default function B2B() {
  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2517865/pexels-photo-2517865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Finished garments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="reveal flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#8a7a62]" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">Manufacturing Partner</span>
          </div>

          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            Looking for a Reliable<br />
            <span className="italic text-[#c4b99a]">Apparel Manufacturing Partner?</span>
          </h2>

          <p className="reveal font-body text-base text-white/60 leading-[1.8] mb-10 font-light max-w-lg">
            Whether you are building a fashion label, expanding your apparel range or looking for a manufacturing partner, Mittal Apparels is ready to understand your requirements and turn them into finished garments.
          </p>

          <button
            onClick={handleScroll}
            className="reveal group flex items-center gap-3 font-body text-sm tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
          >
            Start a Conversation
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
