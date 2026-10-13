import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Quality', href: '#quality' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf9f7]/95 backdrop-blur-md shadow-sm border-b border-[#e8e0d4]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-3.5 leading-none group text-left"
            >
              <img
                src="/images/logo-icon.png"
                alt="Mittal Apparels Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
              />
              <div className="flex flex-col">
                <span
                  className={`font-display text-xl font-semibold tracking-[0.15em] transition-colors duration-300 ${
                    scrolled ? 'text-[#1a1a1a]' : 'text-white'
                  }`}
                >
                  MITTAL APPARELS
                </span>
                <span
                  className={`font-body text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 mt-0.5 ${
                    scrolled ? 'text-[#8a7a62]' : 'text-white/70'
                  }`}
                >
                  Fabric to Fashion
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`font-body text-xs tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-60 ${
                    scrolled ? 'text-[#1a1a1a]' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className={`font-body text-xs tracking-[0.12em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                  scrolled
                    ? 'border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-[#1a1a1a]'
                }`}
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col justify-center px-10 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mb-12 flex items-center gap-3.5">
          <img
            src="/images/logo-icon.png"
            alt="Mittal Apparels Logo"
            className="h-12 w-auto object-contain shrink-0"
          />
          <div>
            <div className="font-display text-2xl font-semibold tracking-[0.15em] text-white">MITTAL APPARELS</div>
            <div className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mt-1">Fabric to Fashion</div>
          </div>
        </div>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-display text-3xl font-light text-white/80 hover:text-white text-left transition-colors duration-200"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => handleNav('#contact')}
          className="mt-12 self-start font-body text-xs tracking-[0.15em] uppercase border border-white/40 text-white px-6 py-3 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>
    </>
  );
}
