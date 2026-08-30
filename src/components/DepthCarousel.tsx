'use client';

import React, { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import Image from 'next/image';

interface CarouselItem {
  img: string;
  title: string;
  desc: string;
}

interface DepthCarouselProps {
  items: CarouselItem[];
}

export function DepthCarousel({ items }: DepthCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spacing, setSpacing] = useState(85);

  useEffect(() => {
    const handleResize = () => {
      setSpacing(window.innerWidth < 768 ? 80 : 85);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = (e: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div 
      className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {items.map((item, i) => {
        const offset = i - currentIndex;
        const isCenter = offset === 0;
        const absOffset = Math.abs(offset);

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-[75vw] sm:w-[350px] md:w-[400px] lg:w-[450px]"
            initial={false}
            animate={{
              x: `calc(-50% + ${offset * spacing}%)`,
              y: '-50%',
              scale: isCenter ? 1 : 0.85,
              rotateY: offset * -15, // Creates the 3D angled look inwards
              opacity: absOffset > 2 ? 0 : isCenter ? 1 : 0.5,
              zIndex: 50 - absOffset,
              filter: isCenter ? 'blur(0px)' : 'blur(4px)',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onClick={() => setCurrentIndex(i)}
            style={{ cursor: isCenter ? 'grab' : 'pointer' }}
          >
            <div className={`relative aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group border border-sand/30 transition-colors duration-500 ${isCenter ? 'ring-1 ring-gold/30' : ''}`}>
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                quality={100} 
                unoptimized 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <motion.div 
                  initial={false}
                  animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: isCenter ? 0.2 : 0 }}
                >
                  <div className="w-12 h-px bg-gold mb-6" />
                  <div className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-bold mb-3">BABJI — MAZGAON</div>
                  <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-2 leading-tight">{item.title}</h3>
                  <p className="font-sans text-ivory/80 text-sm mt-3">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-gold w-8' : 'bg-gold/30 w-1.5 hover:bg-gold/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
