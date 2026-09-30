import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Manufacturing from '@/components/Manufacturing';
import Quality from '@/components/Quality';
import WhyUs from '@/components/WhyUs';
import BrandStatement from '@/components/BrandStatement';
import Gallery from '@/components/Gallery';
import B2B from '@/components/B2B';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Mittal Apparels | Garment Manufacturer | Fabric to Fashion';
  }, []);

  return (
    <div className="bg-[#faf9f7]">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <Quality />
      <WhyUs />
      <BrandStatement />
      <Gallery />
      <B2B />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
