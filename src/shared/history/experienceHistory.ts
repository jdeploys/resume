import type { ExperienceContent } from '@/shared/types';

export const experienceHistory: ExperienceContent[] = [
  {
    period: {
      startAt: '2022',
      endAt: 'current',
    },
    title: '프론트엔드 총괄 엔지니어',
    company: 'rarajob',
    titleLink: 'https://dongnealba.com/',
    description:
      '프론트엔드 총괄 엔지니어로써 모든 서비스와 제품에 기여하였으며, 앱과 앱을 비롯한 프론트엔드의 전반적인 생태계를 1년 만에 재구축하였습니다.' +
      '\n자체 디자인 시스템을 구축 및 협력하여 플랫폼 전체의 사용자 경험을 유지하고, 새 제품을 언제든 출시할 수 있는 생태계를 사전에 구축하여 적절한 시기에 사업 확장이 기능하도록 기반을' +
      ' 만들었습니다.' +
      '\n전체적인 기술 스택은 React를 기반으로 구축하였습니다. 사용성에 따라 필요한 곳에는 적절한 프레임워크를 활용하여 하나의 스택이 아니라 적정 기술을 선택하여 서비스를 운용하였습니다.',
    skillStacks: [
      'Javascript',
      'Typescript',
      'React',
      'React Native',
      'Tailwind',
      'Vite',
      'Next.js',
    ],
    achievements: [
      {
        title: '공고 검색 SEO 적용, B2C 고객 대상 유입 서비스',
        result: 'YoY 300% 성장, 누적 노출 2,500만, 유입 100만 달성',
        skills: ['Self driven', 'SEO', 'Google', 'Naver', 'Bing'],
      },
      {
        title: '동네알바 Ads, 기업용 광고 관리 플랫폼',
        result:
          'YoY 매출 성장 250%, 내부 광고 관리 시스템과 연동하여 신규 매출 성과 달성',
        skills: ['Self driven'],
      },
      {
        title: 'CX 상담 데이터 수집 및 자동화 개선',
        result:
          '카카오톡 상담으로 누락되는 데이터를 Chrome Extension 제작하여 수집 및 데이터베이스화, 기존 수동 수집 및 보고서 작성 자동화로 기존 7일 이상 소요되는 작업을' +
          ' 1시간으로 단축하여 팀 업무 효율 개선',
        skills: ['Self driven', 'Chrome Extension'],
      },
      {
        title: '기존 서비스 개편을 통한 DX 개선',
        result:
          'Javascript 기반의 프론트엔드를 Typescript로 전환, 각 서비스별 상이하던 스타일 관리를 Tailwind로 통합, 공통 라이브러리 및 디자인 시스템을 포함한 디자인 토큰' +
          ' 구축, 지속적인 기술 부채 개선 (구 라이브러리 최신화 등 서비스가 노후화되지 않도록 관리/운용)',
        skills: ['Micro-Frontend Architecture'],
      },
    ],
  },
  {
    period: {
      startAt: '2020. 11',
      endAt: '2021. 12',
    },
    company: '원메딕스인더스트리',
    title: '프론트엔드 2팀 리드 엔지니어',
    description:
      '프론트엔드 개발 2팀 리드 엔지니어를 맡아 기존 제품 유지보수 및 신규 프로젝트 출시를 담당하였습니다.' +
      '\n구조 없이 구성된 프로젝트를 재구성하고 유지보수를 용이하기 위한 리팩터링을 주로 진행하고, 별도 검증 부서가 없기 때문에 테스트를 도입하여 시스템 안정성을 높이는데 집중하였습니다.' +
      '\n경량화된 버전과 함께 코로나(COVID19) 특수에 따른 원격 진료 등 빠르게 준비해서 출시해야하는 프로젝트에 참여하여 제품을 출시하였습니다.' +
      '\n브랜드 사이트 부터, 신규 시스템까지 1년간 6개의 앱/웹 프로젝트에 기여하여 회사의 목표를 달성하는데 기여했습니다.',
    skillStacks: [
      'Typescript',
      'React',
      'React Native',
      'react-native-ui-lib',
      'Expo',
      'Ant design',
      'Next.js',
    ],
    achievements: [],
  },
  {
    period: {
      startAt: '2019. 9',
      endAt: '2020. 11',
    },
    company: '포잉',
    title: '시니어 프론트엔드 엔지니어',
    description:
      '시니어 프론트엔드 엔지니어를 맡아 기존 제품 유지보수 및 신규 프로젝트 출시를 담당하였습니다.' +
      '\nPHP 기반의 Laravel Vue 서비스 아키텍쳐를 좀 더 명확하고 간편하게 재구성하여 성능 및 접근성 향상을 도모하였습니다.' +
      '\nDX 개선을 목표로 자동화된 CI/CD 도입, 반복된 선언 CLI화 등 팀원의 리소스를 감소시키는 방향으로 개선했습니다.' +
      '\n기존 시스템 개편부터, Vue 3 도입, 그리고 <hover0>신규 서비스 출시</hover0>까지 기여하였습니다.',
    descriptionHovers: [
      {
        title: 'Poing OS',
        content: '레스토랑 사업자용 (B2B) 예약 관리 시스템 (포잉 OS)',
      },
    ],
    skillStacks: [
      'Typescript',
      'Vue',
      'Vuex',
      'Quasar',
      'Cypress',
      'iOS(Swift)',
      'PHP(Laravel)',
    ],
    achievements: [],
  },
  {
    period: {
      startAt: '2019. 1',
      endAt: '2020. 9',
    },
    company: '경연 파트너스',
    title: '프론트엔드 엔지니어 (과장)',
    description:
      '프론트엔드 엔지니어를 맡아 <hover0>헤드헌팅 서비스</hover0>의 신규 출시를 담당하였습니다.' +
      '\n개발팀 신설로 모든 환경을 새로 구축하였습니다. 기존 업무와 자동화되면서 변경된 업무의 프로세스를 일원화하는데 기여하였습니다.' +
      '\n타 부서에서 서비스의 언어팩을 관리할 수 있는 시스템을 구축하여 변경에 용이할 수 있도록 제공했습니다.' +
      '\n글로벌 서비스로 런칭하여 SEO, 다국어 환경 등을 제공할 수 있게 구축하였습니다.',
    descriptionHovers: [
      {
        title: 'RunawaySuccess, RUNSS',
        content: '글로벌 헤드헌터를 위한 통합 채용 솔루션',
      },
    ],
    skillStacks: [
      'Typescript',
      'Vue',
      'Vuex',
      'Vuetify',
      'Quasar',
      'Graphql',
      'Electron',
      'Docker',
      'Cypress',
      'Jenkins',
    ],
    achievements: [],
  },
  {
    period: {
      startAt: '2018. 3',
      endAt: '2019. 1',
    },
    company: '푸른밤',
    title: '프론트엔드 엔지니어 (Project Lead)',
    description:
      '프론트엔드 엔지니어로 기존 서비스를 개선하고, 신규 서비스를 출시하기 위해 합류하였습니다.' +
      '\n출퇴근 기록을 기반으로 한 급여 정산 시스템, 출퇴근 기록기 앱, 웹 관리자 서비스 기능 개발에 참여하였습니다.' +
      '\n개발자 위주의 관리자 시스템을 실제 사용하는 CX 조직에 맞게 사용성을 개선하는데 주로 기여하였습니다.' +
      '\n기획 조직이 별도로 없어서 기획 업무를 병행하여 외부 협의, 기획, 업무 조율 등 PL 역할도 수행하였습니다.',
    achievements: [],
    skillStacks: ['Typescript', 'React', 'React Native', 'redux-saga'],
  },
  {
    period: {
      startAt: '2014. 1',
      endAt: '2017. 1',
    },
    company: 'NSE',
    title: '연구원',
    description:
      '풀 스택 엔지니어로 기존 고객사에 제공하는 솔루션을 자사 솔루션으로 내재화하는 업무에 참여했습니다.' +
      '\n원자력 안전 연구 플랫폼에서 소프트웨어의 생애 주기를 관리하는 부분을 분리하여 ALM 서비스를 만들었습니다.' +
      '\n이와 파생된 제품을 만들어, 고객사에 납품하고 운용하는데 기여하였습니다.' +
      '\n기획/디자인 조직이 없어서 기획과 디자인을 직접 구현하고, 고객사가 원하는 제품을 만드는데 최우선으로 협력하였습니다.',
    achievements: [],
    skillStacks: [
      'Javascript',
      'ExtJS',
      'C#',
      'MS SQL',
      'Entity Framework',
      'Hudson',
    ],
  },
  {
    period: {
      startAt: '2011. 6',
      endAt: '2013. 8',
    },
    company: '삶은동네',
    title: 'CTO',
    description:
      '4인이 모여서 창업한 회사로 기술 개발 총괄 이사를 담당하여 직책을 맡았습니다.' +
      '\n문화 정보 기반의 여행과 맛집을 결합한 정보 제공 플랫폼을 구축하는데 기여하였습니다.' +
      '\n부족한 자금을 채우기 위해서 다양한 프로젝트나 과제를 진행하여 회사를 안정적으로 운용하는데 기여했습니다.' +
      '\n그 외에도 교육, 전시, 플리마켓 등 다양한 분야에서 기술과 문화를 융합한 서비스를 실험하고 선보였습니다.',
    achievements: [],
    skillStacks: ['Javascript', 'PHP', 'MY SQL', 'jQuery'],
  },
  // {
  //   period: {
  //     startAt: '2020. 11',
  //     endAt: '2021. 12',
  //   },
  //   company: '원메딕스인더스트리',
  //   title: '재활치료 원격 상담 시스템 (나우리)',
  //   description:
  //     '프론트엔드 개발 2팀 리드 엔지니어를 맡아 기존 제품 유지보수 및 신규 프로젝트 출시를 담당하였습니다.' +
  //     '\n모바일 앱, Front-end 전체 개발 담당, 실시간 채팅, 초대' +
  //     ' 관리,' +
  //     ' 보호자' +
  //     ' 관리' +
  //     ' 기능' +
  //     ' 등' +
  //     ' 구축',
  //   skillStacks: ['Typescript', 'React', 'React Native', 'Expo'],
  //   achievements: [],
  // },
  // {
  //   period: {
  //     startAt: '2020. 11',
  //     endAt: '2021.12',
  //   },
  //   company: '원메딕스인더스트리',
  //   title: '재활치료 원격 상담 관리용 웹 관리자 (나우리 케어센터)',
  //   description:
  //     '웹 앱, Front-end 전체 개발 담당, 상담사 별 채팅 기능, 매크로(수동 챗봇) 채팅 등 구축',
  //   skillStacks: ['Typescript', 'React', 'React Native', 'Expo'],
  //   achievements: [],
  // },
];
