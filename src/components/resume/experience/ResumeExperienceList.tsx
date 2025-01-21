'use client';

import { useTranslations } from 'next-intl';

import { ResumeExperienceItem } from '@/components/resume/experience/ResumeExperienceItem';
import { Switch } from '@/components/ui/Switch';
import { experienceHistory } from '@/shared/history/experienceHistory';
import { useResumeStore } from '@/shared/zustand/useResumeStore';

export const ResumeExperienceList = () => {
  const t = useTranslations();

  const { isShowSummary, toggleSummary } = useResumeStore();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center gap-3">
        <p className="font-bold">{t('exp.title')}</p>
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <Switch
            id="summary"
            checked={isShowSummary}
            onCheckedChange={() => {
              toggleSummary(!isShowSummary);
            }}
          />
          <label htmlFor="summary" className="text-sm cursor-pointer">
            요약 보기
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
