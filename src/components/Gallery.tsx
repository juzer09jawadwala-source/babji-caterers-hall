'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';

const images = [
  { src: '/images/hall_12.jpg', aspect: 'aspect-[4/3]' },
  { src: '/images/regenerate_2K_202608301011.jpeg', aspect: 'aspect-[3/4]' },
  { src: '/images/thaal.jpg', aspect: 'aspect-[1/1]' },
  { src: '/images/sizzler.jpg', aspect: 'aspect-[4/3]' },
  { src: '/images/fish.jpg', aspect: 'aspect-[3/4]' },
  { src: '/images/rollet.jpg', aspect: 'aspect-[16/9]' },
];

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <SectionReveal key={i} delay={(i % 3) * 0.1}>
            <div
              className={`relative w-full rounded-[16px] overflow-hidden shadow-soft cursor-zoom-in group transform transition-transform duration-500 hover:-translate-y-1 ${img.aspect} break-inside-avoid`}
              onClick={() => {
                setCurrentIndex(i);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={img.src}
                alt="Hall Gallery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={100}
                unoptimized
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300" />
            </div>
          </SectionReveal>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-espresso/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-ivory/50 hover:text-ivory transition-colors z-50 p-2"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex].src}
                alt="Lightbox View"
                fill
                className="object-contain"
                quality={100}
                unoptimized
              />
              
              <div className="absolute inset-y-0 left-0 flex items-center px-4">
                <button
                  className="w-12 h-12 rounded-full bg-espresso/50 text-ivory flex items-center justify-center backdrop-blur-md hover:bg-gold transition-colors shadow-xl"
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                >
                  &larr;
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-4">
                <button
                  className="w-12 h-12 rounded-full bg-espresso/50 text-ivory flex items-center justify-center backdrop-blur-md hover:bg-gold transition-colors shadow-xl"
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                >
                  &rarr;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
