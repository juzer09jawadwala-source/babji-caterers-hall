'use client';

import { cn } from '@/lib/utils';
import { motion, SpringOptions, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = 'span',
}: AnimatedNumberProps) {
  const Component = (motion as any)[as as keyof typeof motion] || motion.span;
  const spring = useSpring(0, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(Number(current)).toString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <Component className={cn('tabular-nums', className)}>
      {display}
    </Component>
  );
}
