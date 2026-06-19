import { ArrowRight } from 'lucide-react';
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[900px] bg-brand-yellow rounded-full -z-10 blur-3xl mix-blend-multiply pointer-events-none" 
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-yellow rounded-full -z-10 shadow-inner" 
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
        className="absolute top-44 left-[5%] md:left-[22%] px-5 py-2 bg-[#dbeafe] text-[#1e40af] text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110"
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
        className="absolute top-56 left-[0%] md:left-[16%] px-5 py-2 bg-[#fca5a5] text-[#7f1d1d] text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110"
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
        className="absolute top-40 right-[10%] md:right-[24%] px-5 py-2 bg-brand-green/80 text-[#065f46] text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110"
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
        className="absolute top-52 right-[2%] md:right-[18%] px-5 py-2 bg-[#dda6d6] text-[#4c1d95] text-sm font-bold tracking-wide rounded-full shadow-lg z-20 whitespace-nowrap cursor-default hover:scale-110"
      >
        More Smiles
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 relative mt-12 hover:scale-[1.01] transition-transform duration-500"
      >
        <h1 className="heading-serif text-[4rem] md:text-8xl lg:text-[130px] leading-[0.9] text-brand-blue tracking-tighter">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="block text-brand-lightblue/40 drop-shadow-sm"
          >
            Confident
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="block italic mt-[-15px] md:mt-[-30px] drop-shadow-sm text-brand-blue"
          >
            Smile. Smarter
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="block mt-[-15px] md:mt-[-30px] text-brand-blue font-serif drop-shadow-sm"
          >
            Care.
          </motion.span>
        </h1>
      </motion.div>

      {/* Center Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-[-80px] md:mt-[-120px] z-20 relative w-full max-w-lg mx-auto flex justify-center group"
      >
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=800" 
            alt="Smiling woman" 
            className="w-72 h-72 md:w-[480px] md:h-[480px] object-cover rounded-full object-top border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:scale-[1.02] transition-transform duration-700 ease-out z-10 relative"
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
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30"
      >
        <button className="flex items-center bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] rounded-full p-2.5 pl-10 pr-2.5 group hover:scale-[1.03] transition-all duration-300 border border-white/50">
          <span className="text-[11px] font-extrabold tracking-[0.25em] mr-10 text-brand-blue uppercase">BOOK APPOINTMENT</span>
          <div className="bg-brand-blue text-white p-4 rounded-full group-hover:bg-brand-pink group-hover:text-brand-blue group-active:scale-95 transition-all">
            <ArrowRight size={20} strokeWidth={2.5} />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
