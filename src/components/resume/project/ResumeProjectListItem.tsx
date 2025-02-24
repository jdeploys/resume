import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { DescriptionLabel } from '@/components/label/DescriptionLabel';
import LinkLabel from '@/components/label/LinkLabel';
import type { ProjectContent } from '@/shared/types';

interface ResumeProjectListItemProps {
  item: ProjectContent;
  priority?: boolean;
}

export const ResumeProjectListItem = ({
  item,
  priority,
}: ResumeProjectListItemProps) => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 md:col-span-3 md:pl-4">
        <Image
          src={item.imgUrl}
          alt={item.title}
          width={140}
          height={80}
          quality={100}
          priority={priority}
        />
      </div>
      <div className="col-span-12 md:col-span-9 flex flex-col gap-3">
        <LinkLabel className="font-semibold" href={item.titleLink}>
          {item.title}
        </LinkLabel>
        <DescriptionLabel>
          {t.rich('content', {
            content: item.description,
          })}
        </DescriptionLabel>
      </div>
    </div>
  );
};
