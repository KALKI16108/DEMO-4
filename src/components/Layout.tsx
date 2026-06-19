import { User, ShoppingBag, Instagram, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-50"
    >
      <div className="text-3xl font-bold tracking-tighter text-[#0b1a30] heading-serif flex items-center">
        Smilix<span className="text-brand-pink text-sm align-super ml-0.5">✦</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-widest text-[#0b1a30]/80">
        <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">PRODUCT</a>
        <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">SERVICE</a>
        <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">APPOINTMENT</a>
        <a href="#" className="hover:text-black transition-colors hover:-translate-y-0.5 duration-300">CONTACT</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2.5 hover:bg-black/5 rounded-full transition-colors text-brand-blue active:scale-95 duration-300">
          <User size={18} />
        </button>
        <button className="p-2.5 hover:bg-black/5 rounded-full transition-colors text-brand-blue relative active:scale-95 duration-300">
          <ShoppingBag size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-brand-pink rounded-full border-2 border-[#f8f9fa]"></span>
        </button>
      </div>
    </motion.nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-purple-light text-white pt-24 pb-8 px-6 mt-12 rounded-t-[3rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20 text-sm">
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Company</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Smilix</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Support</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Patient Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appointment Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Treatment FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Legal</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Services</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clear Aligners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Braces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Dental</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Join Smilix</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Become a Partner Clinic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refer a Friend</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smilix for Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smile Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download App</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-8 mb-8 gap-8 border-t pt-8 overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-[8rem] md:text-[16rem] leading-none heading-serif font-bold text-[#dda6d6] tracking-tighter mt-[-20px] md:mt-[-50px] transition-transform duration-700 cursor-default"
          >
            Smilix
          </motion.div>
          
          <div className="max-w-xs w-full pb-4 z-20">
            <h4 className="font-bold mb-6 text-base tracking-wide">Sign up to our newsletter</h4>
            <div className="flex border-b border-white/30 pb-3 mb-8 focus-within:border-white transition-colors group">
              <input type="email" placeholder="Enter e-mail here" className="bg-transparent text-sm focus:outline-none flex-grow placeholder:text-white/40" />
              <button className="group-hover:text-brand-pink transition-colors"><ArrowRight size={20} /></button>
            </div>
            <div className="flex justify-between items-center text-sm font-bold">
              <span>Follow</span>
              <div className="flex gap-5 opacity-80">
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Instagram size={18} /></a>
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Twitter size={18} /></a>
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Facebook size={18} /></a>
                <a href="#" className="hover:text-brand-pink hover:opacity-100 transition-all hover:-translate-y-1"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between text-xs font-bold text-white/50 tracking-wider">
          <p>© 2021-2025 ,smilix. All Rights Reserved</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
