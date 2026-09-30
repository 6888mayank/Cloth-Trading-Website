import { useState } from 'react';
import { MapPin, Mail, Send, CheckCircle } from 'lucide-react';

const productOptions = [
  'Shirts',
  'Trousers',
  'Cordsets / Co-ord Sets',
  'Multiple Products',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real deployment, wire this to an email service or Supabase
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#f0ece4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#8a7a62]" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7a62]">Get In Touch</span>
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
            Let's Create Something<br />
            <span className="italic text-[#8a7a62]">Fashionable</span>
          </h2>
          <p className="reveal font-body text-sm text-[#6b5e4a] mt-4 font-light">
            Have a manufacturing requirement? Get in touch with Mittal Apparels.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Address */}
            <div className="reveal">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#d4c8b4] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#8a7a62]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8a7a62] mb-2">Address</div>
                  <address className="font-body text-sm text-[#444] not-italic leading-[2] font-light">
                    Plot No. 2126, Phase 2<br />
                    Rai Industrial Area, HSIIDC<br />
                    Sonipat, Haryana – 131029<br />
                    India
                  </address>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="reveal">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#d4c8b4] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-[#8a7a62]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8a7a62] mb-2">Email</div>
                  <a
                    href="mailto:mittal.sonsapprals@gmail.com"
                    className="font-body text-sm text-[#444] hover:text-[#1a1a1a] transition-colors duration-200 font-light"
                  >
                    mittal.sonsapprals@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Email button */}
            <div className="reveal">
              <a
                href="mailto:mittal.sonsapprals@gmail.com"
                className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase px-6 py-3 bg-[#1a1a1a] text-white hover:bg-[#8a7a62] transition-colors duration-300"
              >
                <Mail size={13} />
                Email Us
              </a>
            </div>

            {/* Map embed */}
            <div className="reveal">
              <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8a7a62] mb-3">Location</div>
              <div className="w-full aspect-[4/3] overflow-hidden border border-[#d4c8b4]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3!2d77.02!3d28.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUmFpIEluZHVzdHJpYWwgQXJlYSwgU29uaXBhdA!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mittal Apparels Location"
                />
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="reveal h-full flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 border border-[#8a7a62] flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-[#8a7a62]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-3xl font-light text-[#1a1a1a] mb-4">
                  Enquiry Submitted
                </h3>
                <p className="font-body text-sm text-[#777] font-light max-w-sm leading-relaxed">
                  Thank you for reaching out. We will review your enquiry and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="reveal">
                    <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#8a7a62] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full font-body text-sm text-[#1a1a1a] bg-white border border-[#d4c8b4] px-4 py-3 outline-none focus:border-[#8a7a62] transition-colors duration-200 placeholder:text-[#bbb] font-light"
                    />
                  </div>
                  <div className="reveal reveal-delay-1">
                    <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#8a7a62] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full font-body text-sm text-[#1a1a1a] bg-white border border-[#d4c8b4] px-4 py-3 outline-none focus:border-[#8a7a62] transition-colors duration-200 placeholder:text-[#bbb] font-light"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="reveal">
                    <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#8a7a62] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full font-body text-sm text-[#1a1a1a] bg-white border border-[#d4c8b4] px-4 py-3 outline-none focus:border-[#8a7a62] transition-colors duration-200 placeholder:text-[#bbb] font-light"
                    />
                  </div>
                  <div className="reveal reveal-delay-1">
                    <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#8a7a62] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full font-body text-sm text-[#1a1a1a] bg-white border border-[#d4c8b4] px-4 py-3 outline-none focus:border-[#8a7a62] transition-colors duration-200 placeholder:text-[#bbb] font-light"
                    />
                  </div>
                </div>
                <div className="reveal">
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#8a7a62] mb-2">
                    Product Requirement
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full font-body text-sm text-[#1a1a1a] bg-white border border-[#d4c8b4] px-4 py-3 outline-none focus:border-[#8a7a62] transition-colors duration-200 font-light appearance-none cursor-pointer"
                  >
                    <option value="">Select product type</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="reveal">
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#8a7a62] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your manufacturing requirements..."
                    className="w-full font-body text-sm text-[#1a1a1a] bg-white border border-[#d4c8b4] px-4 py-3 outline-none focus:border-[#8a7a62] transition-colors duration-200 placeholder:text-[#bbb] font-light resize-none"
                  />
                </div>
                <div className="reveal">
                  <button
                    type="submit"
                    className="flex items-center gap-3 font-body text-sm tracking-[0.15em] uppercase px-8 py-4 bg-[#1a1a1a] text-white hover:bg-[#8a7a62] transition-colors duration-300 group"
                  >
                    Submit Enquiry
                    <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
