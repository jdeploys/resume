import { useTranslations } from 'next-intl';

import { DescriptionLabel } from '@/components/label/DescriptionLabel';
import LinkLabel from '@/components/label/LinkLabel';
import type { i18nComponent } from '@/shared/types/i18n';

export const ResumeAbout = () => {
  const t = useTranslations();

  const links = t.raw('about.links' as any);

  const components: i18nComponent = {};

  Object.entries(links).forEach(([key, value]) => {
    components[`link${key}`] = (chunks) => {
      return (
        <LinkLabel href={t(`about.links.${key}` as any)}>{chunks}</LinkLabel>
      );
    };
  });

  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold">{t('about.title')}</p>
      <DescriptionLabel>
        {t.rich('about.description', {
          ...components,
        })}
      </DescriptionLabel>
    </div>
  );
};
