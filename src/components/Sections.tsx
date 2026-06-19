import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 relative bg-white rounded-[2rem] md:rounded-[3rem] my-8 md:my-12 shadow-sm border border-brand-blue/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 px-2"
      >
        <p className="text-xs font-semibold tracking-widest text-[#0b1a30]/60 uppercase mb-4">( ABOUT US )</p>
        <h2 className="heading-serif text-4xl sm:text-5xl md:text-6xl text-brand-blue leading-tight mb-6">
          Care - <span className="italic font-light">first.</span><br />
          Smile <span className="italic font-light">- always.</span>
        </h2>
        <p className="max-w-md mx-auto text-xs sm:text-sm text-[#0b1a30]/70 font-medium leading-relaxed">
          We don't believe in one-size-fits-all dentistry. At Dr. Nidhi's Dental Clinic in Goregaon, every patient receives thoughtful, empathetic care - tailored precisely to your diagnostic goals, comfort, and lifestyle.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
      >
        <div className="md:col-span-1 sm:row-span-2 md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden relative group shadow-sm">
          <img src="https://images.unsplash.com/photo-1600171221764-7f152d1c9ef0?auto=format&fit=crop&q=80&w=600" alt="Smile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="md:col-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group md:mt-12 shadow-sm hidden sm:block">
          <img src="https://images.unsplash.com/photo-1598256989800-fea5c5c81855?auto=format&fit=crop&q=80&w=600" alt="Dentist tool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="sm:col-span-2 md:col-span-1 md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden relative group shadow-sm">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" alt="Dental care" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </motion.div>
    </section>
  );
}

const servicesList = [
  {
    title: "Teeth Whitening",
    description: "Bring back your bright, confident smile with our professional teeth whitening, laser whitening and deep cleaning treatments.",
    bg: "bg-[#e5d8f3]",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=400",
    has3d: true
  },
  {
    title: "Braces & Aligners",
    description: "Achieve the perfect teeth alignment with advanced clear aligners and modern braces treatment tailored by Dr. Nidhi.",
    bg: "bg-[#d4cdf4]",
    image: "https://images.unsplash.com/photo-1593085260706-53818e19c991?auto=format&fit=crop&q=80&w=400",
    has3d: true
  },
  {
    title: "Dental Implants",
    description: "Premium single & multi-tooth dental implants to restore full function, confidence, and natural biting strength safely.",
    bg: "bg-[#90e0b3]",
    image: "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?auto=format&fit=crop&q=80&w=400",
    has3d: true
  },
  {
    title: "Painless Root Canals",
    description: "Experience pain-free root canal treatment using state-of-the-art diagnostic and advanced rotary endodontics tools.",
    bg: "bg-[#f2a89d]",
    image: "https://images.unsplash.com/photo-1600171221764-7f152d1c9ef0?auto=format&fit=crop&q=80&w=400",
    has3d: true
  }
];

const allServices = [
  "Teeth whitening",
  "Bonding",
  "Check-ups",
  "Cosmetic procedures",
  "Dental implants",
  "Dentures & bridges",
  "Emergency care",
  "Extractions",
  "Fillings and sealants",
  "Laser dentistry",
  "Mouth guards",
  "Oral surgery",
  "Paediatrics",
  "Root canals",
  "Teeth cleaning",
  "Teeth reshaping",
  "Veneers & crowns",
  "X-ray",
  "Braces and aligners treatment",
  "Dental Implant"
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 relative"
      >
        <div className="max-w-xl">
          <h2 className="heading-serif text-4xl sm:text-5xl md:text-6xl text-brand-blue mb-4 leading-tight">Our core <span className="italic text-brand-pink">dental</span> services</h2>
          <p className="text-xs sm:text-sm font-medium text-brand-blue/70 max-w-md">
            Personalized care. Trusted treatments. From whitening to implants, we've got every smile covered. Explore our most-requested dental services.
          </p>
        </div>
        <div className="flex gap-2 self-start md:self-auto hidden sm:flex">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-brand-blue/20 hover:bg-brand-blue hover:text-white transition-colors active:scale-95 duration-200">
            <ArrowLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors active:scale-95 duration-200">
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pt-4 pb-8 md:pb-12 cursor-grab active:cursor-grabbing px-2 -mx-2 md:mx-0 md:px-0"
      >
        {servicesList.map((service, idx) => (
          <div key={idx} className={`w-[280px] min-w-[280px] sm:w-[320px] sm:min-w-[320px] md:min-w-[400px] h-[400px] md:h-[480px] ${service.bg} p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between snap-center sm:snap-start shrink-0 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow`}>
            <div className="z-10 mt-auto text-center relative bg-white/40 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/50">
              <h3 className="heading-serif text-2xl md:text-3xl mb-2 md:mb-3 text-brand-blue">{service.title}</h3>
              <p className="text-[10px] md:text-xs text-brand-blue/80 font-medium leading-relaxed">{service.description}</p>
            </div>
            
            {/* Display placeholder image, indicating where 3D models should go */}
            <motion.div 
              whileHover={{ y: -10, rotate: rotateForIndex(idx) }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white/40 shadow-xl pointer-events-none"
            >
               <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                 {/* This label guides the user to upload real 3D models */}
                 <span className="text-white text-[10px] sm:text-xs font-bold px-2 py-1 bg-black/50 rounded-md backdrop-blur-md">Upload 3D Model here</span>
               </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* COMPREHENSIVE SERVICES CATALOG */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="mt-6 md:mt-12 bg-white rounded-[2rem] p-6 md:p-10 border border-brand-blue/5 shadow-sm"
      >
        <div className="text-center mb-8">
          <span className="bg-brand-pink/20 text-brand-purple font-extrabold text-[9px] md:text-[10px] px-3.5 py-1.5 rounded-full tracking-widest uppercase">
            Full Service Offerings
          </span>
          <h3 className="heading-serif text-3xl md:text-4xl text-brand-blue mt-3 mb-2">Our Complete Dental Catalog</h3>
          <p className="text-xs text-brand-blue/60 max-w-md mx-auto leading-relaxed">
            From routine diagnostics to full mouth reconstructions, Dr. Nidhi's clinic provides unmatched clinical precision and compassionate patient management.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {allServices.map((service, i) => (
            <div 
              key={i} 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2.5 px-4 py-3 bg-[#f8f9fa] rounded-xl border border-gray-100/80 hover:border-brand-pink/30 hover:bg-white hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow flex-shrink-0 group-hover:bg-brand-pink transition-colors"></div>
              <span className="text-[11px] sm:text-[13px] font-bold text-brand-blue leading-tight group-hover:text-[#0b1a30]">{service}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Helper to add varied rotation to hover states
function rotateForIndex(idx: number) {
  const rotations = [5, -5, 8, -8];
  return rotations[idx % rotations.length];
}

export function PrecisionCare() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-brand-purple text-white py-16 md:py-24 my-8 md:my-12 rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-12 overflow-hidden relative shadow-lg">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
           transition={{ duration: 0.8 }}
           className="text-center lg:text-left"
        >
          <p className="text-xs font-semibold tracking-widest text-[#dda6d6] uppercase mb-6 md:mb-8">( PRECISION CARE )</p>
          <h2 className="heading-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 md:mb-8">
            Smiles <span className="italic font-light text-[#eef29d]">are powerful.</span><br className="hidden sm:block" />
            Let's help you <span className="text-[#dda6d6] italic">own yours.</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm font-medium mx-auto lg:mx-0">
            We know that great dental care transforms more than your smile. It boosts your confidence, your mood, and how the world sees you. At Dr. Nidhi's Dental Clinic, we care for your entire oral health journey - inside and out.
          </p>
        </motion.div>
        
        <div className="relative mt-8 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden mx-auto lg:ml-auto shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1593085260706-53818e19c991?auto=format&fit=crop&q=80&w=800" alt="Smiling with braces" className="w-full h-full object-cover mix-blend-overlay opacity-90 hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 via-transparent to-transparent pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-4 sm:top-8 left-[-10px] sm:left-[-20px] lg:left-[-60px] bg-[#fdf5f9] text-brand-purple p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20 w-48 sm:w-64 backdrop-blur-md z-10 hover:scale-105 transition-transform"
            >
              <p className="heading-serif italic text-sm md:text-lg opacity-80 mb-1">Clinic Rating</p>
              <h3 className="heading-serif text-4xl sm:text-6xl mb-1 sm:mb-2 text-brand-purple">5.0<span className="text-xl sm:text-3xl">/5</span></h3>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold opacity-60 mb-2 sm:mb-4 text-[#dda6d6] leading-snug">99 Google Reviews • Goregaon</p>
              <div className="h-[1px] w-full bg-brand-purple/10 mb-2 sm:mb-3"></div>
              <p className="text-[10px] sm:text-xs font-bold opacity-70">Highly Recommended</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10"
            >
              <h4 className="heading-serif text-2xl sm:text-3xl mb-2 sm:mb-3 text-white">Precision is care.<br/>Personalization is power.</h4>
              <p className="text-[10px] sm:text-xs text-white/80 font-medium leading-relaxed hidden sm:block">Every smile is unique. That's why our expert diagnostics and gentle treatments adapt to your specific biological needs.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const doctorsList = [
  { name: "Dr. Nidhi", title: "BDS, MDS - Chief Dentist & Orthodontist", image: "https://images.unsplash.com/photo-1594824432258-f58ee2b81048?auto=format&fit=crop&q=80&w=600", bg: "bg-brand-purple-light" },
  { name: "Dr. Rohan Sharma", title: "MDS - Oral & Maxillofacial Surgeon", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600", bg: "bg-brand-yellow" },
  { name: "Dr. Priya Patel", title: "BDS - Paediatric Dentist & Consultant", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600", bg: "bg-[#e5d8f3]" }
];

export function Doctors() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setActive((prev) => (prev + 1) % doctorsList.length);
  const prev = () => setActive((prev) => (prev - 1 + doctorsList.length) % doctorsList.length);

  return (
    <section ref={ref} className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="heading-serif text-4xl sm:text-5xl md:text-7xl text-brand-blue mb-4">Meet <span className="italic">Dr. Nidhi & Team</span></h2>
      </motion.div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-4 md:gap-12 w-full relative h-[450px] md:h-[500px]">
          {/* Previous Doctor Card */}
          <div className="hidden lg:block w-48 h-64 rounded-[2rem] overflow-hidden opacity-40 grayscale transition-all duration-500 scale-90 border-4 border-white shadow-xl bg-gray-100 cursor-pointer hover:opacity-60" onClick={prev}>
            <img src={doctorsList[(active - 1 + doctorsList.length) % doctorsList.length].image} alt="Doctor" className="w-full h-full object-cover object-top mix-blend-multiply" />
          </div>

          {/* Active Doctor Card */}
          <motion.div 
            key={active}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full max-w-[320px] sm:max-w-md h-[400px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden z-10 shadow-2xl border-4 md:border-8 border-white group"
          >
            <div className={`absolute inset-0 ${doctorsList[active].bg} opacity-50 transition-colors duration-500`}></div>
            <img src={doctorsList[active].image} alt={doctorsList[active].name} className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute top-4 sm:top-8 left-4 sm:left-6 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl md:rounded-2xl shadow-sm border border-white/50">
              <h3 className="heading-serif text-xl sm:text-2xl text-brand-blue mb-1">{doctorsList[active].name}</h3>
              <p className="text-[8px] sm:text-[10px] font-bold text-brand-blue/70 uppercase tracking-widest">{doctorsList[active].title}</p>
            </div>
            
             <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 w-full px-4 sm:px-6">
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-between bg-white shadow-2xl rounded-full p-1.5 sm:p-2 pl-6 sm:pl-8 pr-1.5 sm:pr-2 hover:scale-[1.02] transition-transform duration-300"
                >
                  <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest text-brand-blue uppercase">BOOK APPOINTMENT</span>
                  <div className="bg-brand-blue text-white p-2.5 sm:p-3 rounded-full hover:bg-brand-pink transition-colors">
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                </button>
              </div>
          </motion.div>

          {/* Next Doctor Card */}
          <div className="hidden lg:block w-48 h-64 rounded-[2rem] overflow-hidden opacity-40 grayscale transition-all duration-500 scale-90 relative border-4 border-white shadow-xl bg-gray-100 cursor-pointer hover:opacity-60" onClick={next}>
            <img src={doctorsList[(active + 1) % doctorsList.length].image} alt="Doctor" className="w-full h-full object-cover object-top mix-blend-multiply" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden xl:block absolute right-4 top-1/3 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 z-20 hover:scale-[1.02] transition-transform text-center"
          >
            <div className="text-xl mb-2 text-brand-yellow">✨</div>
            <p className="text-xs font-semibold leading-relaxed text-brand-blue">Premium dental care with a personal touch. <span className="font-bold text-brand-pink">Designed for trust.</span></p>
          </motion.div>
        </div>

        <div className="flex gap-4 mt-6 md:mt-8 md:absolute md:bottom-10 md:left-12 z-20">
          <button onClick={prev} className="p-3 rounded-full border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors bg-white shadow-sm active:scale-95 duration-200">
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className="p-3 rounded-full bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors shadow-lg active:scale-95 duration-200">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
