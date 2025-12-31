import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import SocialProof from './components/sections/SocialProof';
import Features from './components/sections/Features';
import Benefits from './components/sections/Benefits';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
