import { type ReactNode, useState } from 'react';

interface HoverLabelProps {
  children: ReactNode;
}

const HoverLabel = ({ children }: HoverLabelProps) => {
  return <a className="cursor-pointer">{children}</a>;
};

export default HoverLabel;
