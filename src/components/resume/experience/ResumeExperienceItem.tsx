import { useTranslations } from 'next-intl';

import { DescriptionLabel } from '@/components/label/DescriptionLabel';
import LinkLabel from '@/components/label/LinkLabel';
import { Badge } from '@/components/ui/Badge';
import type { ExperienceContent } from '@/shared/types';
import type { i18nComponent } from '@/shared/types/i18n';

interface ResumeExperienceItemProps {
  item: ExperienceContent;
  isShowSummary?: boolean;
}

export const ResumeExperienceItem = ({
  item,
  isShowSummary,
}: ResumeExperienceItemProps) => {
  const t = useTranslations();

  const titleText = `${item.title} · ${item.company}`;

  const hovers = item.descriptionHovers || [];

  const components: i18nComponent = {};

  hovers.forEach((hover, index) => {
    components[`hover${index}`] = (chunks) => (
      <LinkLabel href={`/product/${hover.title}`} target="_self">
        {chunks}
      </LinkLabel>
    );
  });

  return (
    <section className="grid grid-cols-12 gap-3">
      <p className="col-span-12 md:col-span-3 text-zinc-500 font-semibold">
        {item.period.startAt} —{' '}
        {t('content', {
          content: t.has(item.period.endAt as any)
            ? t(item.period.endAt as any)
            : item.period.endAt,
        })}
      </p>
      <div className="col-span-12 md:col-span-9 flex flex-col gap-3">
        <LinkLabel className="font-semibold" href={item.titleLink}>{titleText}</LinkLabel>
        <DescriptionLabel>
          {t.rich('content', {
            content: item.description,
            ...components,
          })}
        </DescriptionLabel>
        {!!item.skillStacks.length && (
          <div className="flex flex-row flex-wrap items-center gap-2">
            {item.skillStacks.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        )}
        {!isShowSummary && !!item.achievements?.length && (
          <div className="flex flex-col gap-3 animate-in fade-out">
            <p className="font-bold text-slate-400 pt-2">
              {t('exp.achievements')}
            </p>
            {item.achievements.map((achievement) => (
              <div key={achievement.title} className="flex flex-col gap-2">
                <p className="text-sm">{achievement.title}</p>
                <DescriptionLabel className="text-sm">
                  {achievement.result}
                </DescriptionLabel>
                {!!achievement.skills?.length && (
                  <div className="flex flex-row flex-wrap items-center gap-2 mb-2">
                    {achievement.skills.map((skill) => (
                      <Badge className="bg-zinc-700 text-zinc-300" key={skill}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
