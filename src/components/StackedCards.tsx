'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface CardItem {
  img: string;
  badge: string;
  name: string;
}

interface StackedCardsProps {
  items: CardItem[];
}

export function StackedCards({ items }: StackedCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    // The container height is tall enough to allow scrolling through all cards
    <div ref={containerRef} className="relative w-full" style={{ height: `${items.length * 100}vh` }}>
      {items.map((item, index) => {
        return (
          <Card 
            key={index} 
            index={index} 
            item={item} 
            progress={scrollYProgress} 
            total={items.length}
          />
        );
      })}
    </div>
  );
}

function Card({ 
  index, 
  item, 
  progress, 
  total 
}: { 
  index: number; 
  item: CardItem; 
  progress: any; 
  total: number;
}) {
  // Define the range where this specific card starts scaling down
  // The card stays at scale 1 until the *next* card starts overlapping it.
  const startScaleDown = index / total;
  const endScaleDown = 1;

  // The card shrinks slightly as subsequent cards pile on top
  const targetScale = 1 - ((total - index) * 0.04);
  const scale = useTransform(
    progress,
    [startScaleDown, endScaleDown],
    [1, targetScale]
  );

  // The card gets pushed up slightly as it scales down to create a 3D deck effect
  const yOffset = useTransform(
    progress,
    [startScaleDown, endScaleDown],
    [0, -50]
  );

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ 
          scale, 
          y: yOffset,
          top: `calc(12vh + ${index * 16}px)`,
          willChange: 'transform'
        }} 
        className="relative w-[92vw] sm:w-[90vw] md:w-[800px] h-[52vh] sm:h-[55vh] md:h-[500px] rounded-[24px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.3)] origin-top border-2 sm:border-4 border-ivory/30 group ring-1 ring-black/5"
      >
        <Image 
          src={item.img} 
          alt={item.name} 
          fill 
          sizes="(max-width: 768px) 92vw, 800px"
          quality={85}
          className="object-cover transition-transform duration-1500 ease-out group-hover:scale-105" 
        />
        
        {/* Luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent pointer-events-none opacity-80" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[20px] sm:rounded-[32px] md:rounded-[36px] pointer-events-none" />
        
        {/* Badge */}
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 md:top-10 md:left-10 bg-white/10 backdrop-blur-md px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-white/20 shadow-lg">
          <span className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-ivory uppercase font-bold drop-shadow-md">{item.badge}</span>
        </div>

        {/* Title */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-12 md:left-12 md:right-12">
          <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide font-medium drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">{item.name}</h3>
        </div>
      </motion.div>
    </div>
  );
}
