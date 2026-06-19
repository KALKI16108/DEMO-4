import { ArrowRight, Star } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background Yellow Circle */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] md:w-[900px] md:h-[900px] bg-brand-yellow rounded-full -z-10 blur-3xl mix-blend-multiply pointer-events-none" 
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] bg-brand-yellow rounded-full -z-10 shadow-inner" 
      />

      {/* Floating Badges */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: -6, y: 0 }}
        transition={{ 
          opacity: { delay: 0.8, duration: 0.4 },
          scale: { delay: 0.8, duration: 0.4, type: "spring", bounce: 0.5 },
          rotate: { delay: 0.8, duration: 0.4, type: "spring" },
          y: { delay: 1.2, duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        className="absolute top-36 sm:top-44 left-[-2%] sm:left-[5%] md:left-[22%] px-3 py-1.5 sm:px-5 sm:py-2 bg-[#dbeafe] text-[#1e40af] text-xs sm:text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110"
      >
        Fast Fix
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -20, y: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: -12, y: 0 }}
        transition={{ 
          opacity: { delay: 0.9, duration: 0.4 },
          scale: { delay: 0.9, duration: 0.4, type: "spring", bounce: 0.5 },
          rotate: { delay: 0.9, duration: 0.4, type: "spring" },
          y: { delay: 1.5, duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        className="absolute top-48 sm:top-56 left-[-5%] sm:left-[0%] md:left-[16%] px-3 py-1.5 sm:px-5 sm:py-2 bg-[#fca5a5] text-[#7f1d1d] text-xs sm:text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110 hidden sm:block"
      >
        Glowing Teeth
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: 20, y: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 8, y: 0 }}
        transition={{ 
          opacity: { delay: 1.0, duration: 0.4 },
          scale: { delay: 1.0, duration: 0.4, type: "spring", bounce: 0.5 },
          rotate: { delay: 1.0, duration: 0.4, type: "spring" },
          y: { delay: 1.3, duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        className="absolute top-32 sm:top-40 right-[2%] sm:right-[10%] md:right-[24%] px-3 py-1.5 sm:px-5 sm:py-2 bg-brand-green/80 text-[#065f46] text-xs sm:text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110"
      >
        No Pain
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: 15, y: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 4, y: 0 }}
        transition={{ 
          opacity: { delay: 1.1, duration: 0.4 },
          scale: { delay: 1.1, duration: 0.4, type: "spring", bounce: 0.5 },
          rotate: { delay: 1.1, duration: 0.4, type: "spring" },
          y: { delay: 1.6, duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        className="absolute top-44 sm:top-52 right-[-2%] sm:right-[2%] md:right-[18%] px-3 py-1.5 sm:px-5 sm:py-2 bg-[#dda6d6] text-[#4c1d95] text-xs sm:text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110 hidden sm:block"
      >
        More Smiles
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 relative mt-4 sm:mt-12 hover:scale-[1.01] transition-transform duration-500 flex flex-col items-center"
      >
        {/* Google Reviews Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-brand-blue/10 shadow-sm z-20 hover:scale-105 hover:bg-white active:scale-95 cursor-pointer select-none"
          onClick={() => {
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex text-brand-yellow">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
          </div>
          <span className="text-[11px] font-bold text-brand-blue">
            5.0 <span className="text-brand-blue/60">(99 Google Reviews)</span>
          </span>
          <span className="h-3 w-[1px] bg-brand-blue/20"></span>
          <span className="text-[10px] sm:text-[11px] font-extrabold text-brand-pink tracking-wider uppercase">Goregaon's Best Dentist Clinic</span>
        </motion.div>

        <h1 className="heading-serif text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[130px] leading-[0.9] text-brand-blue tracking-tighter">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="block text-brand-lightblue/40 drop-shadow-sm"
          >
            Dr. Nidhi's
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="block italic mt-[-10px] sm:mt-[-15px] md:mt-[-30px] drop-shadow-sm text-brand-pink"
          >
            Dental Care.
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="block mt-[-10px] sm:mt-[-15px] md:mt-[-30px] text-brand-blue font-serif drop-shadow-sm"
          >
            In Goregaon
          </motion.span>
        </h1>
      </motion.div>

      {/* Center Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-[-60px] sm:mt-[-80px] md:mt-[-120px] z-20 relative w-full max-w-lg mx-auto flex justify-center group px-4"
      >
        <div className="relative inline-block">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=800" 
            alt="Smiling woman" 
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-[480px] md:h-[480px] object-cover rounded-full object-top border-[6px] md:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:scale-[1.02] transition-transform duration-700 ease-out z-10 relative"
            style={{clipPath: 'circle(50% at 50% 50%)'}}
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-black/5 pointer-events-none"></div>
          
          {/* Background overlay for image */}
          <div className="absolute inset-0 bg-brand-yellow rounded-full -z-10 mix-blend-overlay opacity-30"></div>
        </div>
      </motion.div>

      {/* Book Appointment floating button bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }}
        className="absolute bottom-10 sm:bottom-16 left-1/2 -translate-x-1/2 z-30 w-full px-6 flex justify-center"
      >
        <button 
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] rounded-full p-2 pl-8 sm:p-2.5 sm:pl-10 pr-2 sm:pr-2.5 group hover:scale-[1.03] transition-all duration-300 border border-white/50 w-full max-w-[280px] sm:max-w-max justify-between sm:justify-start gap-4"
        >
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] sm:tracking-[0.25em] sm:mr-10 text-brand-blue uppercase overflow-hidden text-ellipsis whitespace-nowrap">BOOK APPOINTMENT</span>
          <div className="flex-shrink-0 bg-brand-blue text-white p-3 sm:p-4 rounded-full group-hover:bg-brand-pink group-hover:text-brand-blue group-active:scale-95 transition-all">
            <ArrowRight size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
