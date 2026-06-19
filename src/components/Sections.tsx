import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 max-w-6xl mx-auto px-6 relative bg-white rounded-[3rem] my-12 shadow-sm border border-brand-blue/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-semibold tracking-widest text-[#0b1a30]/60 uppercase mb-4">( ABOUT US )</p>
        <h2 className="heading-serif text-5xl md:text-6xl text-brand-blue leading-tight mb-6">
          Care - <span className="italic font-light">first.</span><br />
          Smile <span className="italic font-light">- always.</span>
        </h2>
        <p className="max-w-md mx-auto text-sm text-[#0b1a30]/70 font-medium leading-relaxed">
          We don't believe in one-size-fits-all dentistry. At Smilix, every patient receives thoughtful care - built on their goals, lifestyle, and comfort.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
      >
        <div className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm">
          <img src="https://images.unsplash.com/photo-1600171221764-7f152d1c9ef0?auto=format&fit=crop&q=80&w=600" alt="Smile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="md:col-span-1 rounded-3xl overflow-hidden relative group mt-12 shadow-sm">
          <img src="https://images.unsplash.com/photo-1598256989800-fea5c5c81855?auto=format&fit=crop&q=80&w=600" alt="Dentist tool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" alt="Dental care" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </motion.div>
    </section>
  );
}

const servicesList = [
  {
    title: "Teeth Whitening",
    description: "Personalized care. Trusted treatments. From whitening to implants, we've got every smile covered. Explore our most-requested dental services.",
    bg: "bg-[#e5d8f3]",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=400",
    has3d: true // indicates we need a 3D model like a tooth
  },
  {
    title: "Braces",
    description: "Personalized care. Trusted treatments. From whitening to implants, we've got every smile covered.",
    bg: "bg-[#d4cdf4]",
    image: "https://images.unsplash.com/photo-1593085260706-53818e19c991?auto=format&fit=crop&q=80&w=400",
    has3d: true // mouth with braces
  },
  {
    title: "Invisalign",
    description: "Personalized care. Trusted treatments. From whitening to implants, we've got every.",
    bg: "bg-[#90e0b3]",
    image: "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?auto=format&fit=crop&q=80&w=400",
    has3d: true
  },
  {
    title: "Ceramic Braces",
    description: "Personalized care. Trusted treatments. From whitening to implants.",
    bg: "bg-[#f2a89d]",
    image: "https://images.unsplash.com/photo-1600171221764-7f152d1c9ef0?auto=format&fit=crop&q=80&w=400",
    has3d: true
  }
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative"
      >
        <div className="max-w-xl">
          <h2 className="heading-serif text-5xl md:text-6xl text-brand-blue mb-4 leading-tight">Our core <span className="italic text-brand-pink">dental</span> services</h2>
          <p className="text-sm font-medium text-brand-blue/70 max-w-md">
            Personalized care. Trusted treatments. From whitening to implants, we've got every smile covered. Explore our most-requested dental services.
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-brand-blue/20 hover:bg-brand-blue hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pt-4 pb-12 cursor-grab active:cursor-grabbing"
      >
        {servicesList.map((service, idx) => (
          <div key={idx} className={`min-w-[320px] md:min-w-[400px] h-[480px] ${service.bg} p-8 rounded-[2rem] flex flex-col justify-between snap-center md:snap-start flex-shrink-0 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow`}>
            <div className="z-10 mt-auto text-center relative bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50">
              <h3 className="heading-serif text-3xl mb-3 text-brand-blue">{service.title}</h3>
              <p className="text-xs text-brand-blue/80 font-medium leading-relaxed">{service.description}</p>
            </div>
            
            {/* Display placeholder image, indicating where 3D models should go */}
            <motion.div 
              whileHover={{ y: -10, rotate: rotateForIndex(idx) }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="absolute top-12 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full overflow-hidden border-[6px] border-white/40 shadow-xl pointer-events-none"
            >
               <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                 {/* This label guides the user to upload real 3D models */}
                 <span className="text-white text-xs font-bold px-2 py-1 bg-black/50 rounded-md backdrop-blur-md">Upload 3D Model here</span>
               </div>
            </motion.div>
          </div>
        ))}
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
    <section ref={ref} className="bg-brand-purple text-white py-24 my-12 rounded-[3rem] mx-4 md:mx-12 overflow-hidden relative shadow-lg">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
           transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold tracking-widest text-[#dda6d6] uppercase mb-8">( PRECISION CARE )</p>
          <h2 className="heading-serif text-5xl md:text-7xl leading-tight mb-8">
            Smiles <span className="italic font-light text-[#eef29d]">are powerful.</span><br />
            Let's help you <span className="text-[#dda6d6] italic">own yours.</span>
          </h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-sm font-medium">
            We know that great dental care transforms more than your smile. It boosts your confidence, your mood, and how the world sees you. At Smilix, we care for your whole smile journey - inside and out.
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden ml-auto shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1593085260706-53818e19c991?auto=format&fit=crop&q=80&w=800" alt="Smiling with braces" className="w-full h-full object-cover mix-blend-overlay opacity-90 hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 via-transparent to-transparent pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-8 left-[-20px] md:left-[-60px] bg-[#fdf5f9] text-brand-purple p-6 rounded-2xl shadow-2xl border border-white/20 w-64 backdrop-blur-md z-10 hover:scale-105 transition-transform"
            >
              <p className="heading-serif italic text-lg opacity-80 mb-1">Smilix Score</p>
              <h3 className="heading-serif text-6xl mb-2 text-brand-purple">96<span className="text-3xl">%</span></h3>
              <p className="text-[10px] uppercase tracking-wider font-bold opacity-60 mb-4 text-[#dda6d6]">More smiles. Less stress.</p>
              <div className="h-[1px] w-full bg-brand-purple/10 mb-3"></div>
              <p className="text-xs font-bold opacity-70">Today • 12:00 pm</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-0 left-0 right-0 p-8 z-10"
            >
              <h4 className="heading-serif text-3xl mb-3 text-white">Precision is care.<br/>Personalization is power.</h4>
              <p className="text-xs text-white/80 font-medium leading-relaxed">Every smile is different. That's why Smilix treatments adapt to your needs - smart tools, expert hands, and results you can see.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const doctorsList = [
  { name: "Dr. Floyd Miles", title: "DDS - Orthodontist", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600", bg: "bg-brand-purple-light" },
  { name: "Dr. Dianne Russell", title: "DDS - Orthodontist", image: "https://images.unsplash.com/photo-1594824432258-f58ee2b81048?auto=format&fit=crop&q=80&w=600", bg: "bg-brand-yellow" },
  { name: "Dr. Marvin McKinney", title: "DDS - Surgeon", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600", bg: "bg-[#e5d8f3]" }
];

export function Doctors() {
  const [active, setActive] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setActive((prev) => (prev + 1) % doctorsList.length);
  const prev = () => setActive((prev) => (prev - 1 + doctorsList.length) % doctorsList.length);

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading-serif text-5xl md:text-7xl text-brand-blue mb-4">Meet the <span className="italic">Smilix Doctor</span></h2>
      </motion.div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-6 md:gap-12 w-full relative h-[500px]">
          {/* Previous Doctor Card */}
          <div className="hidden md:block w-48 h-64 rounded-[2rem] overflow-hidden opacity-40 grayscale transition-all duration-500 scale-90 border-4 border-white shadow-xl bg-gray-100 cursor-pointer hover:opacity-60" onClick={prev}>
            <img src={doctorsList[(active - 1 + doctorsList.length) % doctorsList.length].image} alt="Doctor" className="w-full h-full object-cover object-top mix-blend-multiply" />
          </div>

          {/* Active Doctor Card */}
          <motion.div 
            key={active}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full max-w-md h-[450px] rounded-[3rem] overflow-hidden z-10 shadow-2xl border-8 border-white group"
          >
            <div className={`absolute inset-0 ${doctorsList[active].bg} opacity-50 transition-colors duration-500`}></div>
            <img src={doctorsList[active].image} alt={doctorsList[active].name} className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute top-8 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50">
              <h3 className="heading-serif text-2xl text-brand-blue mb-1">{doctorsList[active].name}</h3>
              <p className="text-[10px] font-bold text-brand-blue/70 uppercase tracking-widest">{doctorsList[active].title}</p>
            </div>
            
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full px-6">
                <button className="w-full flex items-center justify-between bg-white shadow-2xl rounded-full p-2 pl-8 pr-2 hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-[10px] font-extrabold tracking-widest text-brand-blue uppercase">BOOK APPOINTMENT</span>
                  <div className="bg-brand-blue text-white p-3 rounded-full hover:bg-brand-pink transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
          </motion.div>

          {/* Next Doctor Card */}
          <div className="hidden md:block w-48 h-64 rounded-[2rem] overflow-hidden opacity-40 grayscale transition-all duration-500 scale-90 relative border-4 border-white shadow-xl bg-gray-100 cursor-pointer hover:opacity-60" onClick={next}>
            <img src={doctorsList[(active + 1) % doctorsList.length].image} alt="Doctor" className="w-full h-full object-cover object-top mix-blend-multiply" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block absolute right-4 top-1/3 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 z-20 hover:scale-[1.02] transition-transform text-center"
          >
            <div className="text-xl mb-2 text-brand-yellow">✨</div>
            <p className="text-xs font-semibold leading-relaxed text-brand-blue">Premium dental care with a personal touch. <span className="font-bold text-brand-pink">Designed for trust.</span></p>
          </motion.div>
        </div>

        <div className="flex gap-4 mt-8 md:absolute md:bottom-10 md:left-12 z-20">
          <button onClick={prev} className="p-3 rounded-full border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors bg-white shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className="p-3 rounded-full bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors shadow-lg">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
