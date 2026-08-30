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
          top: `calc(15vh + ${index * 20}px)` 
        }} 
        className="relative w-[90vw] md:w-[800px] h-[55vh] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl origin-top border border-ivory/20 group"
      >
        <Image 
          src={item.img} 
          alt={item.name} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />
        
        {/* Badge */}
        <div className="absolute top-8 left-8 bg-espresso/80 backdrop-blur-md px-4 py-2 rounded-full border border-ivory/20">
          <span className="font-sans text-[10px] tracking-[0.2em] text-ivory uppercase font-bold">{item.badge}</span>
        </div>

        {/* Title */}
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="font-serif text-3xl md:text-5xl text-ivory tracking-wide">{item.name}</h3>
        </div>
      </motion.div>
    </div>
  );
}
