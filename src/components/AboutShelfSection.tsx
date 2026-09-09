'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionReveal } from './SectionReveal';

function ShelfPlate({ img, className = "" }: { img: string; className?: string }) {
  return (
    <div className={elative w-[220px] md:w-[280px] h-[160px] md:h-[200px] flex items-center justify-center }>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[160px] md:w-[200px] h-[30px] md:h-[40px] bg-[#EBE7DF] rounded-sm transform -skew-x-[30deg] shadow-[-20px_30px_40px_rgba(0,0,0,0.15)] z-0">
        <div className="absolute -bottom-[15px] md:-bottom-[20px] left-0 w-full h-[15px] md:h-[20px] bg-[#D4CFC3] transform skew-x-[30deg] origin-top rounded-b-sm border-b border-l border-white/20"></div>
        <div className="absolute top-0 -right-[15px] md:-right-[20px] w-[15px] md:w-[20px] h-full bg-[#C2BCB0] transform skew-y-[60deg] origin-left rounded-r-sm border-r border-b border-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none"></div>
      </div>

      <motion.div 
        whileHover={{ y: -8, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 w-[140px] md:w-[180px] h-[140px] md:h-[180px] z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] cursor-pointer"
      >
        <Image src={img} alt="Signature Dish" fill className="object-contain" unoptimized />
      </motion.div>
    </div>
  );
}

export function AboutShelfSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        <div className="lg:col-span-5 relative flex flex-col justify-between min-h-[700px]">
          <SectionReveal delay={0.1}>
            <div className="flex flex-col gap-6 pl-4 md:pl-8">
              <h2 className="font-serif text-4xl md:text-5xl text-espresso">Our Menu</h2>
              <ShelfPlate img="/images/chicken.png" className="-ml-8 md:-ml-12" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3} className="absolute top-1/2 left-[40%] md:left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
            <ShelfPlate img="/images/roulade.png" />
          </SectionReveal>

          <SectionReveal delay={0.5}>
            <div className="max-w-sm mt-auto pb-12 pt-48 lg:pt-0">
              <h2 className="font-serif text-4xl text-espresso mb-4">Trestiraming</h2>
              <p className="font-sans text-ink/70 text-sm md:text-base leading-relaxed">
                Experience an extraordinary culinary journey with our expertly crafted dishes, made from the finest ingredients and inspired by global flavors.
              </p>
            </div>
          </SectionReveal>
        </div>

        <div className="lg:col-span-7 relative flex flex-col justify-between">
          <SectionReveal delay={0.2}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[32px] md:rounded-[40px] shadow-2xl group border border-espresso/5 bg-espresso/5 mt-12 md:mt-0">
              <Image 
                src="/images/hall_12.jpg" 
                alt="About Us" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-105 rounded-[32px] md:rounded-[40px]" 
                unoptimized 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90 rounded-[32px] md:rounded-[40px]" />
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 -left-6 md:-left-10 transform -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 bg-espresso rounded-full flex items-center justify-center cursor-pointer shadow-xl border-4 border-ivory z-30"
              >
                <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[10px] md:border-l-[14px] border-l-ivory border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
              </motion.div>

              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-md pr-8 z-20">
                <h2 className="font-serif text-4xl md:text-6xl text-ivory mb-4 tracking-wide drop-shadow-md">About Us</h2>
                <p className="font-sans text-ivory/80 text-sm md:text-base leading-relaxed drop-shadow-sm">
                  From humble beginnings to a place of culinary excellence, our story is one of passion, craft and people.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mt-16 md:mt-24 gap-12 md:gap-6">
            <SectionReveal delay={0.4}>
              <ShelfPlate img="/images/58050.png" />
            </SectionReveal>
            
            <SectionReveal delay={0.6} className="max-w-xs text-center md:text-right pb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">Customer Reviews</h2>
              <p className="font-sans text-ink/70 text-sm leading-relaxed mb-8">
                Real people. Real experiences. See what our guests have to say about their time with us.
              </p>
              <button className="btn-gold rounded-full px-8 py-3.5 font-sans text-sm font-semibold tracking-wide shadow-lg inline-flex items-center gap-2">
                See the Them
              </button>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
