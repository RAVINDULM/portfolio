import React from 'react';
import Hero from '../components/Hero';
import OrbitFocusFeature from '../components/OrbitFocusFeature';
import BrandSection from '../components/BrandSection';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <OrbitFocusFeature />
      <BrandSection />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
