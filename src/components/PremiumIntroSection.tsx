'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { SectionReveal } from './SectionReveal';

function SpiceScatter() {
  const [spices, setSpices] = useState<Array<{ id: number; size: number; x: number; y: number; color: string; blur: number; delay: number }>>([]);

  useEffect(() => {
    const colors = ['#2D2D2D', '#2D2D2D', '#5B3A29', '#8B2B2B', '#C9643B', '#5A6B42', '#D8C6A3'];
    const newSpices = Array.from({ length: 80 }).map((_, i) => {
      const biasX = Math.pow(Math.random(), 1.5) * 100; 
      const biasY = Math.pow(Math.random(), 1.5) * 100;
      return {
        id: i,
        size: Math.random() * 6 + 3,
        x: 100 - biasX,
        y: 100 - biasY,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.7 ? Math.random() * 2 : 0,
        delay: Math.random() * 0.4
      };
    });
    setSpices(newSpices);
  }, []);

  return (
    <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[80%] pointer-events-none z-20">
      {spices.map(spice => (
        <motion.div
          key={spice.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6, delay: spice.delay, ease: "easeOut" }}
          className="absolute rounded-full"
          style={{
            width: spice.size,
            height: spice.size,
            right: `${spice.x}%`,
            bottom: `${spice.y}%`,
            backgroundColor: spice.color,
            filter: spice.blur ? `blur(${spice.blur}px)` : 'none',
            boxShadow: spice.blur === 0 ? '1px 2px 4px rgba(0,0,0,0.15)' : 'none'
          }}
        />
      ))}
    </div>
  );
}

export function PremiumIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yGrinder = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const ySpices = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={containerRef} className="relative w-full bg-white pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-black/5">
      
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

        {/* Right Visual Area: Grinder and Spice Scatter */}
        <div className="md:col-span-6 lg:col-span-7 relative h-[450px] md:h-[600px] w-full flex items-center justify-end z-10 pointer-events-none">
          
          <motion.div style={{ y: yGrinder }} className="relative w-full max-w-[500px] h-full flex justify-end">
            
            {/* The uploaded screenshot acts as the illustration base. We mask the left side using overflow-hidden on this wrapper if needed, or rely on object-right. */}
            <div className="absolute top-0 right-[-10%] md:right-[-20%] w-[150%] md:w-[800px] h-[120%] md:h-[800px] -mt-[5%] md:-mt-[15%] opacity-90 mix-blend-multiply">
              <Image 
                src="/images/spice_illustration.png" 
                alt="Pepper Grinder Illustration" 
                fill 
                className="object-cover object-right" 
                unoptimized
              />
            </div>
            
            {/* The dynamically generated scattered spices overlay */}
            <motion.div style={{ y: ySpices }} className="absolute inset-0">
              <SpiceScatter />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
