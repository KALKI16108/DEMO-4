import { ArrowLeft, ArrowRight, Star, Plus } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

export function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-brand-lightblue text-white py-24 my-12 rounded-[3rem] mx-4 md:mx-12 shadow-inner border-[8px] border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center mb-20"
      >
        <h2 className="heading-serif text-5xl md:text-7xl mb-6 text-white leading-[1.1]">Smarter dental care <br/> is now <span className="italic text-brand-yellow font-light">simple.</span></h2>
        <p className="text-white/80 text-sm font-semibold tracking-widest uppercase">Healthy smiles, designed just for you.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="md:col-span-5 bg-[#e5d8f3] rounded-[2rem] p-10 text-brand-blue relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-lg group border border-white/50"
        >
          <div className="z-10">
            <h3 className="heading-serif text-4xl mb-4 pr-10 leading-[1.1]">Regain confidence in just weeks</h3>
            <p className="text-xs font-semibold max-w-[200px] opacity-70 leading-relaxed uppercase tracking-wider">Clear Aligners, Whitening, Implants - fast, safe & proven.</p>
          </div>
          <div className="mt-8 flex items-end justify-between z-10 w-full relative">
            <img src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?auto=format&fit=crop&q=80&w=200" alt="Aligner" className="w-28 h-28 object-cover rounded-full shadow-xl border-[6px] border-white/60 group-hover:rotate-[15deg] group-hover:scale-105 transition-all duration-500 relative z-20" />
            <button className="flex items-center gap-3 bg-white text-brand-blue px-6 py-4 rounded-full text-[10px] font-extrabold tracking-widest hover:bg-brand-pink transition-colors shadow-lg z-10 -ml-4 pl-8 group-hover:scale-105">
              GET STARTED <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="md:col-span-7 bg-white rounded-[2rem] p-12 text-brand-blue flex flex-col justify-between shadow-lg border border-brand-blue/5"
        >
          <p className="heading-serif text-3xl md:text-[2.5rem] leading-snug mb-8 font-medium">
            "I used to hide my smile. Now, I can't stop showing it off. Smilix gave me the results I never thought possible."
          </p>
          <div className="flex items-center gap-5 pt-6 border-t border-brand-blue/5">
             <img src="https://i.pravatar.cc/100?img=9" alt="Sarah" className="w-14 h-14 rounded-full hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-sm">Sarah, 3 months.</p>
              <p className="text-[10px] opacity-60 font-bold tracking-widest uppercase mt-0.5">Clear Aligners</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="md:col-span-5 bg-[#fdf5f9] rounded-[2rem] p-10 text-brand-blue flex flex-col justify-center shadow-lg border border-brand-pink/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-3xl"></div>
          <h3 className="heading-serif text-4xl mb-8 leading-tight relative text-brand-purple">What's your smile<br/>goal?</h3>
          <div className="flex flex-col gap-3 items-start w-full relative">
            <button className="w-full text-left px-8 py-4 bg-brand-yellow rounded-full text-sm font-bold shadow-sm hover:scale-[1.02] transition-transform text-[#0b1a30] border border-brand-yellow">Straighten my teeth</button>
            <button className="w-full text-left px-8 py-4 bg-white rounded-full text-sm font-bold shadow-sm hover:scale-[1.02] transition-transform text-[#0b1a30] border border-gray-100">Whiten my smile</button>
            <button className="w-full text-left px-8 py-4 bg-brand-green border-[1px] border-brand-green rounded-full text-sm font-bold shadow-sm hover:scale-[1.02] transition-transform text-[#0b1a30]">Treat dental pain</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-7 rounded-[2rem] overflow-hidden min-h-[340px] shadow-lg relative group"
        >
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Perfect smile" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
      >
        <div>
          <h2 className="heading-serif text-6xl md:text-[80px] text-brand-blue leading-[0.9] mb-4">Real Patients.<br/><span className="italic text-brand-blue/70">Real Smiles.</span></h2>
        </div>
        <div className="flex gap-3">
          <button onClick={() => scroll('left')} className="p-4 rounded-full border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors bg-white shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-4 rounded-full bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors shadow-md">
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-w-[300px] lg:pr-12 lg:border-r border-brand-blue/10"
        >
          <h3 className="heading-serif text-7xl text-brand-lightblue mb-4">4.9<span className="text-3xl text-brand-blue/40">/5</span></h3>
          <p className="text-sm font-semibold text-brand-blue/70 mb-8 max-w-[220px] leading-relaxed">We've helped 1,200+ smiles feel more confident and comfortable.</p>
          
          <div className="flex -space-x-4 mb-8">
            <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-12 h-12 rounded-full border-4 border-[#f8f9fa] shadow-sm relative z-40 hover:scale-110 transition-transform" />
            <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-12 h-12 rounded-full border-4 border-[#f8f9fa] shadow-sm relative z-30 hover:scale-110 transition-transform" />
            <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-12 h-12 rounded-full border-4 border-[#f8f9fa] shadow-sm relative z-20 hover:scale-110 transition-transform" />
            <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-12 h-12 rounded-full border-4 border-[#f8f9fa] shadow-sm relative z-10 hover:scale-110 transition-transform" />
          </div>
          
          <p className="text-[10px] font-extrabold text-brand-blue/60 mb-6 uppercase tracking-widest">Trusted by happy patients across the world.</p>
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg text-[10px] font-extrabold tracking-widest hover:bg-brand-pink transition-colors w-full md:w-auto shadow-md">LEAVE A REVIEW</button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory pt-4 w-full cursor-grab active:cursor-grabbing"
        >
          {[
            { name: "Marvin McKinney", text: "\"I was scared of dentists. Now, I look forward to my visits. That says everything!\"", role: "Teacher" },
            { name: "Aslam Uddin", text: "\"The experience was flawless from consultation to final result.\"", role: "Visual Designer" },
            { name: "Jenny Wilson", text: "\"Smilix didn't just fix my teeth. They gave me back my confidence.\"", role: "Freelance" },
            { name: "Esther Howard", text: "\"The best dental care I've ever received. Quick, painless, and professional.\"", role: "Marketing" },
          ].map((review, i) => (
            <div key={i} className="min-w-[340px] bg-white p-10 rounded-[2rem] shadow-sm border border-brand-blue/5 snap-start flex flex-col justify-between hover:shadow-md transition-shadow group">
               <div>
                  <div className="flex gap-1 text-brand-pink mb-8">
                    {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" strokeWidth={0} />)}
                    <span className="text-brand-blue/20 ml-2 font-bold opacity-30 cursor-pointer hover:opacity-100 transition-opacity"><Plus size={18}/></span>
                  </div>
                  <p className="text-xl font-medium text-brand-blue mb-10 leading-relaxed font-serif italic text-brand-blue/80">"{review.text}"</p>
               </div>
               <div className="flex items-center gap-4 pt-6 border-t border-brand-blue/5">
                 <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={review.name} className="w-12 h-12 rounded-full bg-gray-200" />
                 <div>
                   <p className="text-sm font-bold text-brand-blue">{review.name}</p>
                   <p className="text-[10px] text-brand-blue/50 font-bold tracking-widest uppercase mt-0.5">{review.role}</p>
                 </div>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const faqsList = [
  "Do I need an appointment or can I walk in?",
  "Do you offer teeth whitening?",
  "What types of dental implants do you provide?",
  "Is the treatment painful?",
  "How much does a check-up cost?",
  "Do you accept international patients?",
  "Are your dentists certified specialists?"
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-brand-blue/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-5 md:sticky top-24 self-start"
      >
        <h2 className="heading-serif text-5xl md:text-[4.5rem] text-brand-blue leading-[1.1] mb-8">
          Healthy Smiles,<br/><span className="italic text-brand-blue/50 font-light">Clear Answers</span>
        </h2>
        <p className="text-sm text-brand-blue/70 mb-10 max-w-sm leading-relaxed font-semibold">
          Worry less, smile more - we've answered your most common questions.
        </p>
        <button className="bg-brand-blue text-white px-8 py-4 rounded-full text-[11px] font-extrabold tracking-[0.2em] hover:bg-brand-pink transition-colors shadow-md hover:scale-[1.02] active:scale-95">
          BOOK APPOINTMENT
        </button>
      </motion.div>
      
      <div className="md:col-span-7 flex flex-col">
        {faqsList.map((faq, i) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i} 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="py-6 border-b border-brand-blue/10 flex flex-col justify-center group cursor-pointer hover:bg-white/50 px-6 -mx-6 rounded-2xl transition-colors"
          >
            <div className="flex justify-between items-center w-full">
              <h4 className={`font-bold text-base md:text-lg transition-colors ${openIndex === i ? 'text-brand-pink' : 'text-brand-blue'}`}>{faq}</h4>
              <motion.div 
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:text-white transition-all text-brand-blue/50 shrink-0 ml-4"
              >
                <Plus size={20} />
              </motion.div>
            </div>
            {/* Simple accordion dummy content */}
            <motion.div 
              initial={false}
              animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="text-brand-blue/70 text-sm font-medium mt-4 leading-relaxed pr-12 pb-2">
                Yes, our services are customized based on individual assessment. Feel free to book a consultation to know what's best for you.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-12 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[3rem] overflow-hidden min-h-[600px] flex items-center p-8 md:p-20 shadow-2xl"
      >
        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1600" alt="Clinic background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-blue/20 backdrop-blur-[2px]"></div>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 bg-white/95 backdrop-blur-md p-10 md:p-14 rounded-[2rem] max-w-[500px] w-full shadow-2xl border border-white/50"
        >
          <h2 className="heading-serif text-4xl md:text-5xl text-brand-blue mb-10 leading-tight">Book your dental<br/>consultation.</h2>
          
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <input type="text" placeholder="Full name" className="w-full border-b border-brand-blue/20 pb-3 text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-blue/40" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
              </div>
              <div className="relative group">
                <input type="email" placeholder="Email*" className="w-full border-b border-brand-blue/20 pb-3 text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-blue/40" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
              </div>
            </div>
            <div className="relative group">
              <input type="text" placeholder="Company name" className="w-full border-b border-brand-blue/20 pb-3 text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-blue/40" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
            </div>
            <div className="relative group">
              <textarea placeholder="Type your message..." rows={3} className="w-full border-b border-brand-blue/20 pb-3 text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors resize-none placeholder:text-brand-blue/40 mt-4"></textarea>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
            </div>
            
            <button type="button" className="mt-8 w-full flex items-center justify-between bg-brand-blue text-white rounded-full p-2.5 pl-8 pr-2.5 hover:bg-brand-pink transition-colors shadow-lg group hover:scale-[1.02] active:scale-95 duration-300">
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase">BOOK APPOINTMENT</span>
              <div className="bg-white text-brand-blue p-4 rounded-full group-hover:scale-95 transition-transform">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
