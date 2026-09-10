'use client';

import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import { useRef } from 'react';

export type RevealVariant =
  | 'fade-up'
  | 'heading'
  | 'image'
  | 'card'
  | 'scale'
  | 'fade'
  | 'slide-left'
  | 'slide-right';

// Luxury editorial motion parameters: smooth gentle curve [0.16, 1, 0.3, 1]
const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const variantStyles: Record<
  RevealVariant,
  {
    initial: { opacity: number; y?: number; x?: number; scale?: number };
    animate: { opacity: number; y?: number; x?: number; scale?: number };
    duration: number;
  }
> = {
  'fade-up': {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    duration: 0.85,
  },
  heading: {
    initial: { opacity: 0, y: 38 },
    animate: { opacity: 1, y: 0 },
    duration: 0.95,
  },
  image: {
    initial: { opacity: 0, y: 24, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    duration: 1.05,
  },
  card: {
    initial: { opacity: 0, y: 28, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    duration: 0.85,
  },
  scale: {
    initial: { opacity: 0, scale: 0.94 },
    animate: { opacity: 1, scale: 1 },
    duration: 0.85,
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    duration: 0.8,
  },
  'slide-left': {
    initial: { opacity: 0, x: -32 },
    animate: { opacity: 1, x: 0 },
    duration: 0.9,
  },
  'slide-right': {
    initial: { opacity: 0, x: 32 },
    animate: { opacity: 1, x: 0 },
    duration: 0.9,
  },
};

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  duration,
  variant = 'fade-up',
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  once?: boolean;
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once,
    margin: '-8% 0px -5% 0px',
  });

  const selected = variantStyles[variant] || variantStyles['fade-up'];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={selected.initial}
      animate={isInView ? selected.animate : selected.initial}
      transition={{
        duration: duration ?? selected.duration,
        ease: LUXURY_EASE,
        delay,
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className = '',
  stagger = 0.12,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once,
    margin: '-8% 0px -5% 0px',
  });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const selected = variantStyles[variant] || variantStyles['fade-up'];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants: Variants = {
    hidden: selected.initial,
    visible: {
      ...selected.animate,
      transition: {
        duration: selected.duration,
        ease: LUXURY_EASE,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

