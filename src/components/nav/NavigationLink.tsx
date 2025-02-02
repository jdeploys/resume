'use client';

import { useShallow } from 'zustand/react/shallow';

import { cn } from '@/lib/utils';
import { useResumeStore } from '@/shared/zustand/useResumeStore';

interface NavigationLinkProps {
  title: string;
  link: string;
  sectionKey: string;
}

const NavigationLink = ({ title, link, sectionKey }: NavigationLinkProps) => {
  const { isShowSection } = useResumeStore(
    useShallow((state) => ({
      isShowSection: state.isShowSection,
    })),
  );

  return (
    <a className="flex flex-row items-center gap-3 " href={link}>
      <div
        className={cn(
          'transition-all duration-300 max-w-8 flex-1 bg-zinc-500 hover:active:bg-white h-[1px]',
          isShowSection[sectionKey] && 'bg-white max-w-12',
        )}
      />
      <div
        className={cn(
          'transition-all duration-300 font-semibold',
          !isShowSection[sectionKey] && 'text-zinc-500',
        )}
      >
        {title}
      </div>
    </a>
  );
};

export default NavigationLink;
