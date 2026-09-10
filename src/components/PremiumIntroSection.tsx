'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { SectionReveal } from './SectionReveal';

export function PremiumIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative z-20 w-full bg-white pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 lg:px-24 overflow-visible border-b border-black/5">
      
      {/* Dice image on the border of the two sections (Right Side, 40% Larger) */}
      <div className="absolute top-0 right-[2%] md:right-[8%] -translate-y-1/2 w-[490px] md:w-[700px] lg:w-[840px] h-[700px] md:h-[920px] lg:h-[1050px] pointer-events-none z-30">
        <Image src="/images/dice_transparent.png" alt="Dice decoration" fill sizes="(max-width: 768px) 490px, 840px" quality={85} className="object-contain object-right drop-shadow-md" />
      </div>

      {/* Beads image in the corner (Contained within section, massive scale) */}
      <div className="absolute bottom-0 right-[-5%] w-[500px] md:w-[800px] lg:w-[1100px] h-[400px] md:h-[600px] lg:h-[850px] pointer-events-none z-20 opacity-95 drop-shadow-lg">
        <Image src="/images/beads_transparent.png" alt="Beads decoration" fill sizes="(max-width: 768px) 500px, 1100px" quality={85} className="object-contain object-right-bottom" />
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
