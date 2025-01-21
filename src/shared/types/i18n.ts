import type { ReactNode } from 'react';

export interface i18nComponent {
  [key: string]: (chunks: ReactNode) => ReactNode;
}
