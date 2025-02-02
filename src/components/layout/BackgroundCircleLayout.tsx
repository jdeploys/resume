'use client';

import { type ReactNode, useRef } from 'react';
import { useMouse } from 'react-use';

import { cn } from '@/lib/utils';
import type { Cn } from '@/shared/types';

interface BackgroundCircleLayout extends Cn {
  children: ReactNode;
}

export const BackgroundCircleLayout = ({
  className,
  children,
}: BackgroundCircleLayout) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { docX, docY } = useMouse(ref as any);

  return (
    <div ref={ref} className={cn('relative', className)}>
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300 lg:absolute min-h-screen"
        style={{
          background: `radial-gradient(600px at ${docX || 0}px ${docY || 0}px, rgba(113, 113, 122, 0.15), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

