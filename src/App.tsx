/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { About, Services, PrecisionCare, Doctors } from './components/Sections';
import { BentoGrid, Testimonials, FAQ, Booking } from './components/BottomSections';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0b1a30] font-sans selection:bg-brand-pink selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <PrecisionCare />
        <Doctors />
        <BentoGrid />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
