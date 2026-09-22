'use client';

import { useEffect, useState, useRef } from 'react';
import { AnimatedNumber } from '@/components/core/animated-number';
import { useInView } from 'framer-motion';

export function AnimatedNumberBasic() {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "100px" });

  useEffect(() => {
    if (inView) {
      setValue(2000);
    }
  }, [inView]);

  return (
    <div ref={containerRef} className='flex w-full items-center justify-center py-6 sm:py-8 bg-ivory border-y border-espresso/10 relative z-20'>
      <div className='inline-flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          width='16'
          height='16'
          className='mr-3 h-4 w-4 fill-transparent stroke-zinc-800 stroke-[1.3] dark:stroke-zinc-50 text-gold'
        >
          <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z'></path>
        </svg>
        <AnimatedNumber
          className='inline-flex items-center font-mono text-2xl sm:text-3xl font-light text-zinc-800 dark:text-zinc-50'
          springOptions={{
            bounce: 0,
            duration: 2000,
          }}
          value={value}
        />
        <span className='font-mono text-2xl sm:text-3xl font-light text-zinc-800 dark:text-zinc-50 ml-0.5'>+</span>
      </div>
    </div>
  );
}
