'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useShallow } from 'zustand/react/shallow';

import { ResumeProjectListItem } from '@/components/resume/project/ResumeProjectListItem';
import { Link } from '@/i18n/routing';
import { productHistory } from '@/shared/history/productHistory';
import { useResumeStore } from '@/shared/zustand/useResumeStore';
import { IconClearAll } from '@tabler/icons-react';

interface ResumeProductListProps {}

export const ResumeProductList = ({ ...props }: ResumeProductListProps) => {
  const t = useTranslations();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const { setShowSection } = useResumeStore(
    useShallow((state) => ({
      setShowSection: state.setShowSection,
    })),
  );

  useEffect(() => {
    setShowSection('product', inView);
  }, [inView, setShowSection]);

  return (
    <div ref={ref} id="product" className="flex flex-col gap-12">
      <span className="text-sm font-semibold">PRODUCTS</span>
      {productHistory
        .filter((row) => row.useTitle)
        .map((item) => (
          <ResumeProjectListItem key={item.title} item={item} />
        ))}
      <Link className="flex flex-row gap-2 text-zinc-400" href="/products">
        <IconClearAll />
        {t('product.view_all')}
      </Link>
    </div>
  );
};
