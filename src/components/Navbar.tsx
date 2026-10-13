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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a1a1a] border-b border-[#2d2d2d] ${
          scrolled ? 'shadow-lg py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18">
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
                <span className="font-display text-xl font-semibold tracking-[0.15em] text-white">
                  MITTAL APPARELS
                </span>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#c4b99a] mt-0.5">
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
                  className="font-body text-xs tracking-[0.12em] uppercase text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="font-body text-xs tracking-[0.12em] uppercase px-5 py-2.5 border border-white/60 text-white hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white transition-colors duration-300"
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
        className={`fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col justify-between px-8 pt-28 pb-10 transition-all duration-300 lg:hidden overflow-y-auto ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6 my-auto">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-display text-2xl sm:text-3xl font-light text-white/80 hover:text-white text-left transition-colors duration-200"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="pt-8 border-t border-[#2d2d2d] mt-6">
          <button
            onClick={() => handleNav('#contact')}
            className="w-full font-body text-xs tracking-[0.15em] uppercase border border-white/60 text-white py-3.5 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 text-center"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
}
