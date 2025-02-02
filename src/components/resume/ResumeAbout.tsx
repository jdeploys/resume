'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useShallow } from 'zustand/react/shallow';

import { DescriptionLabel } from '@/components/label/DescriptionLabel';
import LinkLabel from '@/components/label/LinkLabel';
import type { i18nComponent } from '@/shared/types/i18n';
import { useResumeStore } from '@/shared/zustand/useResumeStore';

export const ResumeAbout = () => {
  const t = useTranslations();

  const links = t.raw('about.links' as any);
  const components: i18nComponent = {};

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setShowSection } = useResumeStore(
    useShallow((state) => ({
      setShowSection: state.setShowSection,
    })),
  );

  Object.entries(links).forEach(([key]) => {
    components[`link${key}`] = (chunks) => {
      return (
        <LinkLabel href={t(`about.links.${key}` as any)}>{chunks}</LinkLabel>
      );
    };
  });

  useEffect(() => {
    setShowSection('about', inView);
  }, [inView, setShowSection]);

  return (
    <section ref={ref} id="about" className="flex flex-col gap-3">
      <p className="sticky top-0 py-2 left-0 backdrop-blur lg:hidden font-bold">{t('about.title')}</p>
      <DescriptionLabel>
        {t.rich('about.description', {
          ...components,
        })}
      </DescriptionLabel>
    </section>
  );
};
