'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { SectionReveal } from './SectionReveal';

export function PremiumIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative z-20 w-full bg-white pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 lg:px-24 overflow-visible border-b border-black/5">
      
      {/* Dice image on the border of the two sections */}
      <div className="absolute top-0 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[250px] h-[200px] md:h-[250px] pointer-events-none z-30 mix-blend-multiply">
        <Image src="/images/dice.jpg" alt="Dice decoration" fill className="object-contain drop-shadow-sm" unoptimized />
      </div>

      {/* Beads image in the corner */}
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] translate-y-[20%] -translate-x-[10%] pointer-events-none z-20 mix-blend-multiply opacity-90">
        <Image src="/images/beads.jpg" alt="Beads decoration" fill className="object-contain" unoptimized />
      </div>

      {/* Top element: rounded white element at extreme top-left as requested */}
      <div className="absolute top-0 left-0 w-[45vw] h-[18vw] bg-[#FDFDFD] rounded-br-[120px] shadow-[2px_2px_15px_rgba(0,0,0,0.02)] pointer-events-none z-0 hidden md:block"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Area (approx 48%) */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col pt-12 md:pt-16 z-20 relative">
          <SectionReveal>
            <h2 className="font-sans text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#2D2D2D] font-extrabold leading-[1.05] mb-6 tracking-tight">
              Premier Catering<br />
              Services Serving<br />
              Western MA
            </h2>
            
            <h3 className="font-sans text-xl md:text-2xl text-[#6B6B6B] mb-8 font-normal">
              For any affair, on any budget.
            </h3>
            
            <p className="font-sans text-[#8C8C8C] text-sm md:text-base leading-[1.8] max-w-[430px]">
              We built this hall so our neighbors could celebrate without compromise. A clean, beautiful canvas that you can decorate as you wish, paired with the legendary food you already know.
            </p>
          </SectionReveal>
        </div>

        {/* Right Visual Area */}
        <div className="md:col-span-6 lg:col-span-7 relative h-[450px] md:h-[600px] w-full flex items-center justify-end z-10 pointer-events-none">
          {/* Empty area where the grinder used to be. The space is preserved to keep the left-aligned text perfectly formatted. */}
        </div>

      </div>
    </section>
  );
}
