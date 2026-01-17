import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Sections/HeroResponsive';
import QuranHadith from '@/components/Sections/QuranHadith';
import Benefits from '@/components/Sections/Benefits';
import Products from '@/components/Sections/Products';
import Delivery from '@/components/Sections/Delivery';
import Testimonials from '@/components/Sections/Testimonials';
import Contact from '@/components/Sections/Contact';
import FAQ from '@/components/Sections/FAQ';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuranHadith />
        <Benefits />
        <Products />
        <Delivery />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
