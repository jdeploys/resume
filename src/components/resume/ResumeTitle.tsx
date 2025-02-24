import { useTranslations } from 'next-intl';

import { DescriptionLabel } from '@/components/label/DescriptionLabel';
import NavigationLink from '@/components/nav/NavigationLink';
import { cn } from '@/lib/utils';
import type { Cn } from '@/shared/types';
import { IconBrandGithubFilled } from '@tabler/icons-react';

interface Socials {
  [key: string]: string;
}

export const ResumeTitle = ({ className }: Cn) => {
  const t = useTranslations();

  const socials: Socials = t.raw('title.socials' as any);

  return (
    <section className={cn('col-span-12 lg:col-span-5', className)}>
      <div className="lg:fixed left-12 flex flex-col gap-3">
        <h1 className="text-3xl">{t('title.name')}</h1>
        <p>{t('title.type')}</p>
        <DescriptionLabel>{t('title.description')}</DescriptionLabel>
        <div className="hidden lg:flex flex-col gap-4 pt-8">
          <NavigationLink
            title={t('about.title')}
            link="#about"
            sectionKey="about"
          />
          <NavigationLink
            title={t('exp.title')}
            link="#experience"
            sectionKey="experience"
          />
          <NavigationLink
            title={t('project.title')}
            link="#project"
            sectionKey="project"
          />
        </div>
        {socials ? (
          <div className="lg:fixed bottom-16 left-12 flex flex-row items-center gap-2">
            {Object.keys(socials).map((row: string) => {
              return (
                <a
                  key={row}
                  href={socials[row]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {row === 'github' && <IconBrandGithubFilled size={20} />}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};
