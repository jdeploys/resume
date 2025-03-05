import type { ReactNode } from 'react';

interface TableHeaderLabelProps {
  children: ReactNode;
}

export const TableHeaderLabel = ({ children }: TableHeaderLabelProps) => {
  return <span className="text-zinc-200 font-semibold"> {children}</span>;
};
