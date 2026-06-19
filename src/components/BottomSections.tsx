import { ArrowLeft, ArrowRight, Star, Plus } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

export function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-brand-lightblue text-white py-16 md:py-24 my-8 md:my-12 rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-12 shadow-inner border-[4px] md:border-[8px] border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 md:px-6 text-center mb-12 md:mb-20"
      >
        <h2 className="heading-serif text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6 text-white leading-[1.1]">Smarter dental care <br className="hidden sm:block" /> is now <span className="italic text-brand-yellow font-light">simple.</span></h2>
        <p className="text-white/80 text-[10px] sm:text-sm font-semibold tracking-widest uppercase">Healthy smiles, designed just for you.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="sm:col-span-1 md:col-span-5 bg-[#e5d8f3] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-brand-blue relative overflow-hidden flex flex-col justify-between min-h-[280px] md:min-h-[340px] shadow-lg group border border-white/50"
        >
          <div className="z-10">
            <h3 className="heading-serif text-3xl md:text-4xl mb-2 md:mb-4 pr-10 leading-[1.1]">Regain confidence in just weeks</h3>
            <p className="text-[10px] md:text-xs font-semibold max-w-[200px] opacity-70 leading-relaxed uppercase tracking-wider">Clear Aligners, Whitening, Implants - fast, safe & proven.</p>
          </div>
          <div className="mt-8 flex items-end justify-between z-10 w-full relative">
            <img src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?auto=format&fit=crop&q=80&w=200" alt="Aligner" className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full shadow-xl border-[4px] md:border-[6px] border-white/60 group-hover:rotate-[15deg] group-hover:scale-105 transition-all duration-500 relative z-20" />
            <button className="flex items-center gap-2 md:gap-3 bg-white text-brand-blue px-4 py-3 md:px-6 md:py-4 rounded-full text-[9px] md:text-[10px] font-extrabold tracking-widest hover:bg-brand-pink transition-colors shadow-lg z-10 -ml-4 pl-6 md:pl-8 group-hover:scale-105">
              GET STARTED <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="sm:col-span-1 md:col-span-7 bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-12 text-brand-blue flex flex-col justify-between shadow-lg border border-brand-blue/5 min-h-[280px] md:min-h-[340px]"
        >
          <p className="heading-serif text-2xl sm:text-3xl md:text-[2.5rem] leading-snug mb-6 md:mb-8 font-medium">
            "I used to hide my smile. Now, I can't stop showing it off. Dr. Nidhi's expert orthodontic Aligners gave me results I never thought possible."
          </p>
          <div className="flex items-center gap-4 md:gap-5 pt-4 md:pt-6 border-t border-brand-blue/5">
             <img src="https://i.pravatar.cc/100?img=9" alt="Sarah" className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-xs md:text-sm">Sarah, Goregaon West</p>
              <p className="text-[9px] md:text-[10px] opacity-60 font-bold tracking-widest uppercase mt-0.5">Clear Aligners • 3-month course</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="sm:col-span-1 md:col-span-5 bg-[#fdf5f9] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-brand-blue flex flex-col justify-center shadow-lg border border-brand-pink/20 relative overflow-hidden min-h-[300px]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-3xl"></div>
          <h3 className="heading-serif text-3xl md:text-4xl mb-6 md:mb-8 leading-tight relative text-brand-purple">What's your smile<br/>goal?</h3>
          <div className="flex flex-col gap-2 md:gap-3 items-start w-full relative">
            <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-left px-6 py-3 md:px-8 md:py-4 bg-brand-yellow rounded-full text-xs md:text-sm font-bold shadow-sm hover:scale-[1.02] transition-transform text-[#0b1a30] border border-brand-yellow">Straighten my teeth</button>
            <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-left px-6 py-3 md:px-8 md:py-4 bg-white rounded-full text-xs md:text-sm font-bold shadow-sm hover:scale-[1.02] transition-transform text-[#0b1a30] border border-gray-100">Whiten my smile</button>
            <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-left px-6 py-3 md:px-8 md:py-4 bg-brand-green border-[1px] border-brand-green rounded-full text-xs md:text-sm font-bold shadow-sm hover:scale-[1.02] transition-transform text-[#0b1a30]">Treat toothache & pain</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="sm:col-span-1 md:col-span-7 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden min-h-[300px] shadow-lg relative group"
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
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
      >
        <div>
          <h2 className="heading-serif text-5xl md:text-[80px] text-brand-blue leading-[1.1] md:leading-[0.9] mb-2 md:mb-4">Real Patients.<br/><span className="italic text-brand-blue/70">Real Smiles.</span></h2>
        </div>
        <div className="flex gap-2 sm:gap-3 self-end md:self-auto hidden sm:flex">
          <button onClick={() => scroll('left')} className="p-3 sm:p-4 rounded-full border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors bg-white shadow-sm active:scale-95">
            <ArrowLeft size={18} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 sm:p-4 rounded-full bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors shadow-md active:scale-95">
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-auto lg:min-w-[300px] lg:pr-12 lg:border-r border-brand-blue/10 flex flex-col sm:flex-row lg:flex-col justify-between sm:items-center lg:items-start gap-6 lg:gap-0"
        >
          <div>
            <h3 className="heading-serif text-5xl sm:text-6xl md:text-7xl text-brand-lightblue mb-2 md:mb-4">5.0<span className="text-2xl sm:text-3xl text-brand-blue/40">/5</span></h3>
            <p className="text-xs sm:text-sm font-semibold text-brand-blue/70 mb-4 md:mb-8 max-w-[220px] leading-relaxed">Trusted across Goregaon West with a solid 5-star Google review rating.</p>
          </div>
          
          <div>
            <div className="flex -space-x-4 mb-4 md:mb-8">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 border-[#f8f9fa] shadow-sm relative z-40 hover:scale-110 transition-transform" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 border-[#f8f9fa] shadow-sm relative z-30 hover:scale-110 transition-transform" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 border-[#f8f9fa] shadow-sm relative z-20 hover:scale-110 transition-transform" />
              <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 border-[#f8f9fa] shadow-sm relative z-10 hover:scale-110 transition-transform" />
            </div>
            
            <p className="text-[9px] md:text-[10px] font-extrabold text-brand-blue/60 mb-4 md:mb-6 uppercase tracking-widest max-w-[200px]">Based on 99+ organic Google Maps Reviews.</p>
            <button 
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Dr.+Nidhi%27s+Dental+Clinic+Goregaon+West+Mumbai', '_blank', 'noopener,noreferrer')}
              className="bg-brand-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-[9px] md:text-[10px] font-extrabold tracking-widest hover:bg-brand-pink transition-colors w-full sm:w-auto shadow-md"
            >
              WRITE A REVIEW
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-6 md:pb-8 snap-x snap-mandatory pt-2 md:pt-4 w-full cursor-grab active:cursor-grabbing px-2 -mx-2 md:mx-0 md:px-0"
        >
          {[
            { name: "Pooja Mehta", text: "\"I was terrified of teeth scaling and extraction. Dr. Nidhi made the whole root canal and cleaning absolutely painless.\"", role: "Goregaon Resident" },
            { name: "Aslam Uddin", text: "\"The dental implant procedure was extremely professional. Beautiful state-of-the-art clinic right near SV road.\"", role: "Local Business Owner" },
            { name: "Jenny Wilson", text: "\"Dr. Nidhi's team didn't just align my teeth with aligners, they gave me back my complete active confidence.\"", role: "Educator" },
            { name: "Esther Howard", text: "\"The best clinical checkup. Highly transparent transparent charges, very warm staff, exceptionally clean hygiene standard.\"", role: "Tech Lead" },
          ].map((review, i) => (
            <div key={i} className="min-w-[280px] sm:min-w-[340px] bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-brand-blue/5 snap-start flex flex-col justify-between hover:shadow-md transition-shadow group">
               <div>
                  <div className="flex gap-1 text-brand-pink mb-6 md:mb-8">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" strokeWidth={0} />)}
                    <span className="text-brand-blue/20 ml-2 font-bold opacity-30 cursor-pointer hover:opacity-100 transition-opacity"><Plus size={16}/></span>
                  </div>
                  <p className="text-lg md:text-xl font-medium text-brand-blue mb-8 md:mb-10 leading-relaxed font-serif italic text-brand-blue/80">"{review.text}"</p>
               </div>
               <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-brand-blue/5">
                 <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={review.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200" />
                 <div>
                   <p className="text-xs md:text-sm font-bold text-brand-blue">{review.name}</p>
                   <p className="text-[9px] md:text-[10px] text-brand-blue/50 font-bold tracking-widest uppercase mt-0.5">{review.role}</p>
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
  {
    q: "Do I need an appointment or can I walk in?",
    a: "We highly recommend booking to keep your wait time near zero. For walk-ins or urgent toothaches, call 082382 11414 first."
  },
  {
    q: "Do you offer professional teeth whitening?",
    a: "Yes! We specialize in advanced laser teeth whitening which removes deep stains, giving you a safe and bright white shade in just one clinical session."
  },
  {
    q: "What types of dental implants do you provide?",
    a: "We offer premium bio-compatible titanium implants, customized bridges, and dentures that reconstruct complete chewing strength and function."
  },
  {
    q: "Is the treatment painful?",
    a: "Dr. Nidhi is highly specialized in gentle dentistry. We use pediatric micro-needle methods and modern numbing gels to ensure you remain completely pain-free."
  },
  {
    q: "Are you open on Sundays?",
    a: "Our standard hours are 10 AM to 2 PM, and reopens 5 PM to 9 PM, Monday to Saturday. Please call for Sunday emergency requests."
  },
  {
    q: "Where is the clinic located?",
    a: "Our clinic is at Ashoka Super Market, B-20, Aarey Rd (near Bata Showroom, right off Swami Vivekanand Road), Goregaon West, Mumbai."
  },
  {
    q: "Do you treat toddlers and paediatric cases?",
    a: "Yes, we provide specialized children's check-ups, teeth protection sealants, decay fillings, and preventive braces guidance in a playful environment."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-brand-blue/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 lg:sticky top-24 self-start text-center lg:text-left"
      >
        <h2 className="heading-serif text-4xl sm:text-5xl md:text-[4.5rem] text-brand-blue leading-[1.1] mb-6 md:mb-8">
          Healthy Smiles,<br/><span className="italic text-brand-blue/50 font-light">Clear Answers</span>
        </h2>
        <p className="text-xs sm:text-sm text-brand-blue/70 mb-8 md:mb-10 max-w-sm leading-relaxed font-semibold mx-auto lg:mx-0">
          Worry less, smile more - we've answered your most common questions.
        </p>
        <button 
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] hover:bg-brand-pink transition-colors shadow-md hover:scale-[1.02] active:scale-95 text-xs text-brand-blue/80"
        >
          BOOK APPOINTMENT
        </button>
      </motion.div>
      
      <div className="lg:col-span-7 flex flex-col">
        {faqsList.map((faq, i) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i} 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="py-5 md:py-6 border-b border-brand-blue/10 flex flex-col justify-center group cursor-pointer hover:bg-white/50 px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl transition-colors"
          >
            <div className="flex justify-between items-center w-full">
              <h4 className={`font-bold text-sm sm:text-base md:text-lg transition-colors pr-4 ${openIndex === i ? 'text-brand-pink' : 'text-brand-blue'}`}>{faq.q}</h4>
              <motion.div 
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:text-white transition-all text-brand-blue/50 shrink-0 ml-2"
              >
                <Plus size={18} />
              </motion.div>
            </div>
            <motion.div 
              initial={false}
              animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="text-brand-blue/70 text-xs sm:text-sm font-medium mt-3 md:mt-4 leading-relaxed pr-8 md:pr-12 pb-2">
                {faq.a}
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
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="booking" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 mb-8 md:mb-12 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center p-6 sm:p-8 md:p-20 shadow-2xl"
      >
        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1600" alt="Clinic background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-blue/30 backdrop-blur-[2px]"></div>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 bg-white/95 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-[1.5rem] md:rounded-[2rem] max-w-[500px] w-full shadow-2xl border border-white/50 mx-auto md:mx-0"
        >
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-green text-3xl flex items-center justify-center rounded-full mb-6 shadow-md shadow-brand-green/20">
                🎉
              </div>
              <h3 className="heading-serif text-2xl sm:text-3xl text-brand-blue mb-4">Request Received!</h3>
              <p className="text-xs sm:text-sm text-brand-blue/70 font-medium leading-relaxed mb-6">
                Thank you, <strong>{name}</strong>! Dr. Nidhi's team will call/WhatsApp you on <strong>{phone}</strong> within 1 hour to finalize your time slot.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setName(""); setPhone(""); }}
                className="bg-brand-pink text-brand-blue font-extrabold text-[10px] tracking-wider px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                BOOK ANOTHER APPOINTMENT
              </button>
            </motion.div>
          ) : (
            <>
              <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-brand-blue mb-8 md:mb-10 leading-tight text-center md:text-left">Book your dental<br className="hidden sm:block" />consultation.</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Full name*" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-brand-blue/20 pb-2 md:pb-3 text-xs md:text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-blue/40" 
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      placeholder="WhatsApp / Phone*" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border-b border-brand-blue/20 pb-2 md:pb-3 text-xs md:text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-blue/40" 
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                </div>
                
                <div className="relative group">
                  <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border-b border-brand-blue/20 pb-2 md:pb-3 text-xs md:text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors text-brand-blue/70"
                  >
                    <option value="" disabled>Select Preferred Treatment</option>
                    <option value="Teeth Whitening">Teeth Whitening & Cleaning</option>
                    <option value="Braces & Aligners">Braces and Aligners Treatment</option>
                    <option value="Dental Implants">Dental Implants & Implant Surgery</option>
                    <option value="Root Canals">Painless Root Canal Treatment</option>
                    <option value="Cosmetic Bonding">Veneers, Reshaping & Cosmetic Procedures</option>
                    <option value="General Check-up">General Check-up & X-Ray</option>
                  </select>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
                </div>

                <div className="relative group">
                  <textarea placeholder="Tell us about any specific pain or requests... (optional)" rows={2} className="w-full border-b border-brand-blue/20 pb-2 md:pb-3 text-xs md:text-sm font-semibold bg-transparent focus:outline-none focus:border-brand-blue transition-colors resize-none placeholder:text-brand-blue/40 mt-2 md:mt-4"></textarea>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-focus-within:w-full"></span>
                </div>
                
                <button type="submit" className="mt-4 md:mt-8 w-full flex items-center justify-between bg-brand-blue text-white rounded-full p-2 pl-6 md:p-2.5 md:pl-8 pr-2 md:pr-2.5 hover:bg-brand-pink transition-colors shadow-lg group hover:scale-[1.02] active:scale-95 duration-300">
                  <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.15em] md:tracking-[0.2em] uppercase">BOOK APPOINTMENT</span>
                  <div className="bg-white text-brand-blue p-3 md:p-4 rounded-full group-hover:scale-95 transition-transform">
                    <ArrowRight size={16} strokeWidth={2.5} className="md:w-[18px] md:h-[18px]" />
                  </div>
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
