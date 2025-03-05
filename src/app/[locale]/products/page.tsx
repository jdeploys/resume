import sortBy from 'lodash/sortBy';
import { useTranslations } from 'next-intl';

import { DescriptionLabel } from '@/components/label/DescriptionLabel';
import LinkLabel from '@/components/label/LinkLabel';
import { TableHeaderLabel } from '@/components/label/TableHeaderLabel';
import { Badge } from '@/components/ui/Badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/HoverCard';
import { productHistory } from '@/shared/history/productHistory';
import { projectHistory } from '@/shared/history/projectHistory';
import { IconArrowLeftDashed } from '@tabler/icons-react';

const allHistories = sortBy(
  projectHistory.concat(productHistory),
  (row) => row.period.endAt,
).reverse();

const getHostname = (url: string): string => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname?.replace('www.', '');
  } catch (error) {
    return '';
  }
};

export default function ProductPage() {
  const t = useTranslations();

  return (
    <section className="col-span-12 space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 text-zinc-400">
          <IconArrowLeftDashed />
          <span className="font-semibold">{t('title.name')}</span>
        </div>
        <h1 className="text-2xl font-semibold">{t('product.view_all')}</h1>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left w-16 py-4">
              <TableHeaderLabel>{t('product.year')}</TableHeaderLabel>
            </th>
            <th className="text-left">
              <TableHeaderLabel>{t('product.name')}</TableHeaderLabel>
            </th>
            <th className="text-left max-lg:hidden">
              <TableHeaderLabel>{t('product.company')}</TableHeaderLabel>
            </th>
            <th className="text-left max-md:hidden">
              <TableHeaderLabel>{t('product.skills')}</TableHeaderLabel>
            </th>
            <th className="text-left max-sm:hidden">
              <TableHeaderLabel>{t('product.links')}</TableHeaderLabel>
            </th>
          </tr>
        </thead>
        <tbody>
          {allHistories.map((item) => (
            <tr key={item.title} className="border-b border-zinc-700">
              <td className="w-16 text-left py-4 align-text-top">
                <span className="text-sm text-zinc-400">
                  {item.period.endAt}
                </span>
              </td>
              <td className="align-text-top">
                <HoverCard>
                  <HoverCardTrigger>{item.title}</HoverCardTrigger>
                  <HoverCardContent className="bg-zinc-800 md:w-96">
                    <DescriptionLabel>{item.description}</DescriptionLabel>
                  </HoverCardContent>
                </HoverCard>
              </td>
              <td className="align-text-top max-lg:hidden">
                <span className="text-sm text-zinc-400">{item.company}</span>
              </td>
              <td className="align-text-top max-w-60 py-2 max-md:hidden">
                {!!item.skills?.length && (
                  <div className="flex flex-row flex-wrap items-center gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                )}
              </td>
              <td className="align-text-top max-w-40 max-sm:hidden">
                <LinkLabel
                  className="break-all text-ellipsis line-clamp-1"
                  href={item.titleLink || item.down?.link}
                >
                  {getHostname(item.titleLink || item.down?.link || '')}
                </LinkLabel>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
