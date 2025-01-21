import { ProjectContent } from '@/shared/types';

export const projectHistory: ProjectContent[] = [
  {
    period: {
      startAt: 2022,
    },
    imgUrl: '/public/images/projects/dongnealba/content.png',
    title: '동네알바 웹 서비스',
    titleLink: 'https://dongnealba.com/employer',
    description:
      '사장님을 위한 동네알바 채용 관리 서비스' +
      '\n추천인재 탐색, 인재 관리, 알림 관리, 대화하기, 광고 관리, 웹 결제 등 모든 기능 개발 (1인 개발)',
  },
  {
    period: {
      startAt: 2022,
    },
    title: '동네알바 공고 검색 서비스 (SEO)',
    titleLink:
      'https://www.dongnealba.com/job-ad/place/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%97%AD%EC%82%BC%EB%8F%99',
    imgUrl: '/public/images/projects/dongnealba/content.png',
    description:
      '신규 회원 유입을 위한 채용 공고 검색 서비스' +
      '\n지역별 공고 검색, JSON-LD 최적화, 키워드 검색 등 모든 기능 개발 (1인 개발)',
  },
  {
    period: {
      startAt: 2022,
    },
    title: '동네알바 앱 서비스',
    titleLink: 'https://dongnealba.com',
    description:
      '동네알바 채용 관리 서비스' +
      '\n동네알바 메인 서비스로 사장님/알바님을 위한 구인/구직 앱' +
      '\n2022년 2인 개발로 참여(이후 4인(2024년)까지 팀 규모 확장)' +
      '\nCI/CD 구축, CodePush 도입, Typescript 전환, 라이브러리 최신화, 마케팅 플랫폼 연동, 결제 기능 등 주요 프로젝트 참여',
    imgUrl: '/public/images/projects/dongnealba/logo.png',
    down: {
      count: '1,000,000+',
      link: 'https://play.google.com/store/apps/details?id=com.dongnealba.app.android',
    },
  },
  {
    period: {
      startAt: '2021. 5',
      endAt: '2021. 12',
    },
    title: '재활치료 원격 상담 시스템 (나우리)',
    description:
      '모바일 앱, Front-end 전체 개발 담당, 실시간 채팅, 초대 관리, 보호자 관리 기능 등 구축',
    skills: ['Typescript', 'React', 'React Native', 'Expo'],
    imgUrl: '',
  },
];
