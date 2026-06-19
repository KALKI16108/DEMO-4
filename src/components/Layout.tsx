import { User, ShoppingBag, Instagram, Twitter, Linkedin, Facebook, ArrowRight, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-50"
      >
        <div className="text-2xl md:text-3xl font-bold tracking-tighter text-[#0b1a30] heading-serif flex items-center">
          Dr. Nidhi's<span className="text-brand-pink text-sm align-super ml-0.5">✦</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold tracking-widest text-[#0b1a30]/80">
          <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">PRODUCT</a>
          <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">SERVICE</a>
          <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">APPOINTMENT</a>
          <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">CONTACT</a>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="p-2.5 hover:bg-black/5 rounded-full transition-colors text-brand-blue active:scale-95 duration-300">
            <User size={18} />
          </button>
          <button className="p-2.5 hover:bg-black/5 rounded-full transition-colors text-brand-blue relative active:scale-95 duration-300">
            <ShoppingBag size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-pink rounded-full border-2 border-[#f8f9fa]"></span>
          </button>
          <button 
            className="lg:hidden p-2.5 hover:bg-black/5 rounded-full transition-colors text-brand-blue active:scale-95 duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl z-40 p-6 flex flex-col gap-4 text-center border border-brand-blue/10 lg:hidden"
        >
          <a href="#" className="font-bold text-xs tracking-widest uppercase text-brand-blue/80 hover:text-brand-pink transition-colors py-2">Product</a>
          <a href="#" className="font-bold text-xs tracking-widest uppercase text-brand-blue/80 hover:text-brand-pink transition-colors py-2">Service</a>
          <a href="#" className="font-bold text-xs tracking-widest uppercase text-brand-blue/80 hover:text-brand-pink transition-colors py-2">Appointment</a>
          <a href="#" className="font-bold text-xs tracking-widest uppercase text-brand-blue/80 hover:text-brand-pink transition-colors py-2">Contact</a>
        </motion.div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-purple-light text-white pt-16 md:pt-24 pb-8 px-6 mt-12 overflow-hidden relative" style={{ borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 text-sm">
          
          {/* Clinic Brand Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-bold mb-4 font-serif text-white tracking-tight">Dr. Nidhi's Dental Clinic</h4>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-brand-yellow text-brand-blue font-bold px-2 py-0.5 text-xs rounded-full">⭐ 5.0</span>
              <span className="text-white/80 text-xs font-semibold">(99 reviews) • Dentist</span>
            </div>
            <p className="text-white/70 text-xs leading-relaxed mb-6 font-medium">
              Goregaon's premier dental clinic providing pain-free, modern, and personalized care. Specializing in braces, implants, root canals, and cosmetic dentistry.
            </p>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 backdrop-blur-sm">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-brand-yellow">● Timings</span>
                <span className="text-white/80 font-semibold">10 AM - 2 PM, 5 PM - 9 PM</span>
              </div>
              <p className="text-[10px] text-white/60 leading-normal">Open · Closes 2 pm · Reopens 5 pm</p>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-4 md:mb-6 text-white text-base">Key Services</h4>
            <ul className="space-y-3 text-white/70 font-medium text-xs">
              <li>• Teeth whitening & Cleaning</li>
              <li>• Clear Aligners / Braces treatment</li>
              <li>• Painless Root Canals</li>
              <li>• Dental Implants & Dental Surgery</li>
              <li>• Paediatric Dentistry</li>
              <li>• Veneers & Crowns / Whitening</li>
              <li>• Laser Dental Care</li>
            </ul>
          </div>

          {/* Location & Contact Column */}
          <div className="lg:col-span-5">
            <h4 className="font-bold mb-4 md:mb-6 text-white text-base">Location & Contact</h4>
            <div className="space-y-4 text-white/80 font-medium text-xs">
              <div className="flex gap-2 items-start bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-brand-pink font-bold">📍</span>
                <p className="leading-relaxed text-white/70 text-xs">
                  Ashoka Super Market, B-20, Aarey Rd, near Bata Showroom, off Swami Vivekanand Road, Piramal Nagar, Goregaon West, Mumbai, Maharashtra 400104
                </p>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="flex gap-2 items-center">
                  <span className="text-brand-pink font-bold">📞</span>
                  <span className="text-white/70 font-bold">082382 11414</span>
                </div>
                <a href="tel:08238211414" className="bg-brand-pink hover:bg-brand-pink/90 text-brand-blue px-3 py-1.5 rounded-lg text-[10px] font-extrabold tracking-wider transition-colors">
                  CALL NOW
                </a>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Dr.+Nidhi%27s+Dental+Clinic+Goregaon+West+Mumbai" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold text-[10px] px-4 py-2 rounded-full hover:bg-brand-yellow transition-colors hover:scale-[1.02] shadow-sm tracking-wider uppercase"
                >
                  🗺️ GET DIRECTIONS ON MAP <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-8 mb-8 gap-8 border-t pt-8 overflow-hidden items-center lg:items-end">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none heading-serif font-bold text-[#dda6d6] tracking-tighter mt-[-10px] md:mt-[-30px] transition-transform duration-700 cursor-default flex-shrink-0"
          >
            Dr. Nidhi's
          </motion.div>
          
          <div className="max-w-xs w-full pb-4 z-20 flex-shrink-0">
            <h4 className="font-bold mb-4 text-sm tracking-wide text-center lg:text-left">Sign up for dental tips</h4>
            <div className="flex border-b border-white/30 pb-3 mb-6 focus-within:border-white transition-colors group">
              <input type="email" placeholder="Enter e-mail here" className="bg-transparent text-xs focus:outline-none flex-grow placeholder:text-white/40" />
              <button className="group-hover:text-brand-pink transition-colors"><ArrowRight size={18} /></button>
            </div>
            <div className="flex justify-between items-center text-xs font-bold">
              <span>Follow Us</span>
              <div className="flex gap-4 opacity-85">
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Instagram size={16} /></a>
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Twitter size={16} /></a>
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Facebook size={16} /></a>
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Linkedin size={16} /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between text-[11px] font-bold text-white/50 tracking-wider items-center gap-4">
          <p>© 2026, Dr. Nidhi's Dental Clinic. All Rights Reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
