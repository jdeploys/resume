'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useShallow } from 'zustand/react/shallow';

import { ResumeExperienceItem } from '@/components/resume/experience/ResumeExperienceItem';
import { Switch } from '@/components/ui/Switch';
import { experienceHistory } from '@/shared/history/experienceHistory';
import { useResumeStore } from '@/shared/zustand/useResumeStore';

export const ResumeExperienceList = () => {
  const t = useTranslations();

  const { ref, inView } = useInView();

  const { isShowSummary, toggleSummary, setShowSection } = useResumeStore(
    useShallow((state) => ({
      isShowSummary: state.isShowSummary,
      toggleSummary: state.toggleSummary,
      setShowSection: state.setShowSection,
    })),
  );

  useEffect(() => {
    setShowSection('experience', inView);
  }, [inView, setShowSection]);

  return (
    <div ref={ref} id="experience" className="flex flex-col gap-3">
      <p className="sticky top-0 py-2 left-0 backdrop-blur lg:hidden font-bold">{t('exp.title')}</p>
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <Switch
            id="summary"
            checked={!isShowSummary}
            onCheckedChange={() => {
              toggleSummary(!isShowSummary);
            }}
          />
          <label htmlFor="summary" className="text-sm cursor-pointer">
            {t('archive.show')}
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {experienceHistory.map((item) => (
          <ResumeExperienceItem
            key={item.title}
            item={item}
            isShowSummary={isShowSummary}
          />
        ))}
      </div>
    </div>
  );
};
