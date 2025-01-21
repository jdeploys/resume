import { useTranslations } from 'next-intl';

import { DescriptionLabel } from '@/components/label/DescriptionLabel';
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
    <div className={cn('flex flex-col gap-3', className)}>
      <h1 className="text-3xl">{t('title.name')}</h1>
      <p>{t('title.type')}</p>
      <DescriptionLabel>{t('title.description')}</DescriptionLabel>
      {socials ? (
        <div className="flex flex-row items-center gap-2">
          {Object.keys(socials).map((row: string) => {
            return (
              <a key={row} href={socials[row]} target="_blank" rel="noreferrer">
                {row === 'github' && <IconBrandGithubFilled size={20} />}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
