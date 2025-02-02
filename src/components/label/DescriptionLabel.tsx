import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface DescriptionLabelProps {
  className?: string;
  children?: ReactNode;
}

export const DescriptionLabel = ({
  className,
  children,
}: DescriptionLabelProps) => {
  return (
    <p className={cn('text-zinc-400 whitespace-pre-line font-light', className)}>
      {children}
    </p>
  );
};
