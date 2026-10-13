import { MapPin, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Quality', href: '#quality' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-[#2d2d2d]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="/images/logo-icon.png"
                alt="Mittal Apparels Logo"
                className="h-12 w-auto object-contain shrink-0"
              />
              <div>
                <div className="font-display text-2xl font-semibold tracking-[0.15em] text-white">
                  MITTAL APPARELS
                </div>
                <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8a7a62]">
                  Fabric to Fashion
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-[#666] leading-[1.8] max-w-xs font-light">
              Professional garment manufacturing focused on shirts, trousers and cordsets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8a7a62] mb-6">
              Navigation
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-body text-sm text-[#777] hover:text-white text-left transition-colors duration-200 font-light"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8a7a62] mb-6">
              Contact
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-[#8a7a62] mt-0.5 shrink-0" strokeWidth={1.5} />
                <address className="font-body text-sm text-[#777] not-italic leading-[1.8] font-light">
                  Plot No. 2126, Phase 2,<br />
                  Rai Industrial Area, HSIIDC,<br />
                  Sonipat, Haryana – 131029
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={13} className="text-[#8a7a62] shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:mittal.sonsapprals@gmail.com"
                  className="font-body text-sm text-[#777] hover:text-white transition-colors duration-200 font-light break-all"
                >
                  mittal.sonsapprals@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#555] font-light">
            © 2026 Mittal Apparels. All Rights Reserved.
          </p>
          <p className="font-body text-xs text-[#444] font-light">
            Garment Manufacturing — Sonipat, Haryana, India
          </p>
        </div>
      </div>
    </footer>
  );
}
