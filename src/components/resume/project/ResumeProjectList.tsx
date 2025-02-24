'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useShallow } from 'zustand/react/shallow';

import { ResumeProjectListItem } from '@/components/resume/project/ResumeProjectListItem';
import { projectHistory } from '@/shared/history/projectHistory';
import { useResumeStore } from '@/shared/zustand/useResumeStore';

interface ResumeProjectListProps {}

export const ResumeProjectList = ({ ...props }: ResumeProjectListProps) => {
  const t = useTranslations();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setShowSection } = useResumeStore(
    useShallow((state) => ({
      setShowSection: state.setShowSection,
    })),
  );

  useEffect(() => {
    setShowSection('project', inView);
  }, [inView, setShowSection]);

  return (
    <div ref={ref} id="project" className="flex flex-col gap-12">
      {projectHistory.map((item) => (
        <ResumeProjectListItem key={item.title} item={item} />
      ))}
    </div>
  );
};
