export interface ExperienceAchievement {
  title: string;
  // 성과 결과 (예: 100% 상승)
  result: string;
  skills?: string[];
}

export interface Period {
  startAt: string | number;
  endAt?: string | number;
}

export interface DescriptionHover {
  title?: string;
  content: string;
}

export interface ProjectImage {
  alt: string;
  url: string;
}

export interface ProjectContent {
  company?: string;
  period: Period;
  imgUrl: string;
  images?: ProjectImage[];
  title: string;
  titleLink?: string;
  description: string;
  skills?: string[];
  star?: {
    count: string;
    link: string;
  };
  down?: {
    count: string;
    link: string;
  };
  useTitle?: boolean;
}

export interface ExperienceContent {
  period: Period;
  title: string;
  company: string;
  titleLink?: string;
  description: string;
  descriptionHovers?: DescriptionHover[];
  skillStacks: string[];
  achievements?: ExperienceAchievement[];
  projects?: ProjectContent[];
  appLink?: {
    iOS: string;
    android: string;
  };
}

export interface Cn {
  className?: string;
}
