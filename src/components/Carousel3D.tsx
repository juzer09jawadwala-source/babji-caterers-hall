'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

interface CarouselItem {
  img: string;
  title: string;
  desc: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
}

export function Carousel3D({ items }: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  // Autoplay functionality: ONLY runs when visible in viewport to prevent background CPU/GPU drain
  useEffect(() => {
    if (!isClient || isPaused || !isInView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [isClient, isPaused, isInView, items.length]);

  if (!isClient) return <div className="h-[520px] sm:h-[600px] md:h-[750px] w-full" />;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[600px] md:h-[750px] flex items-start justify-center overflow-hidden py-8 sm:py-12"
      style={{ perspective: isMobile ? '1000px' : '1500px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div 
        className="relative w-[65vw] max-w-[260px] sm:w-[260px] md:w-[320px] lg:w-[350px] h-full mt-6 sm:mt-12 md:mt-20 flex flex-col items-center" 
        style={{ transformStyle: 'preserve-3d' }}
      >
        <AnimatePresence initial={false}>
          {items.map((item, i) => {
            // Infinite loop math for mapping items symmetrically around the current index
            const half = Math.floor(items.length / 2);
            let offset = ((i - currentIndex + items.length + half) % items.length) - half;

            // Optional: Limit how many items are rendered if the list grows large
            if (Math.abs(offset) > 2) return null;

            const isActive = offset === 0;

            // Concave Panorama Math matching the reference image:
            // Side cards move outwards (x), come CLOSER to the viewer (z), and tilt INWARDS (rotateY)
            const x = isMobile 
              ? `calc(${offset * 85}% + ${offset * 8}px)`
              : `calc(${offset * 115}% + ${offset * 15}px)`;
            const z = isMobile ? Math.abs(offset) * 60 : Math.abs(offset) * 120; 
            const rotateY = isMobile ? offset * -15 : offset * -22; 
            const scale = isActive ? (isMobile ? 1.15 : 1.25) : 0.85; 
            const opacity = isActive ? 1 : (isMobile ? 0.35 : 0.4);
            const zIndex = isActive ? 50 : 10 - Math.abs(offset);
            
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  x,
                  z,
                  rotateY,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1], // Premium spring ease
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`absolute top-0 left-0 w-full flex flex-col items-center ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
                onClick={() => {
                  if (offset < 0) prev();
                  if (offset > 0) next();
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -50 || velocity.x < -500) next();
                  else if (offset.x > 50 || velocity.x > 500) prev();
                }}
              >
                {/* Image Card Container */}
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-sand/30" style={{ willChange: 'transform' }}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 65vw, (max-width: 1024px) 320px, 350px"
                    quality={85}
                  />
                  {/* Subtle curved lighting effect for 3D realism */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />
                </div>

                {/* Text positioned below the card with fluid mobile bounds */}
                <motion.div 
                  animate={{ opacity: isActive ? 1 : 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-center w-[95%] sm:w-[120%] mt-6 sm:mt-8 md:mt-10"
                >
                  <div className="font-sans text-[11px] md:text-[13px] tracking-[0.2em] text-gold font-bold mb-2 sm:mb-3">
                    #0{i + 1}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-espresso mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  
                  {/* Only show the description for the active center card to maintain minimalism */}
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-ink/70 text-xs md:text-sm pt-1 sm:pt-2">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Accessible dots indicator with full 44px touch targets */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2 z-30">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="p-2 sm:p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className={`transition-all duration-500 rounded-full block ${i === currentIndex ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gold' : 'w-1.5 h-1.5 bg-espresso/20 hover:bg-espresso/40'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}