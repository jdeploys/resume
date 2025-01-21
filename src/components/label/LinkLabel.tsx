import type { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import type { Cn } from '@/shared/types';

interface LinkLabelProps extends Cn {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
}

const LinkLabel = ({
  className,
  href,
  target = '_blank',
  children,
}: LinkLabelProps) => {
  return href ? (
    <a
      className={cn(
        'underline underline-offset-4 text-zinc-300 decoration-zinc-500',
        className,
      )}
      href={href}
      target={target}
    >
      {children}
    </a>
  ) : (
    <p>{children}</p>
  );
};

export default LinkLabel;
