export const authorProfile = {
  name: '范耿誌 Rance',
  handle: 'Wildsky',
  sameAs: [
    'https://g0v.social/@wildsky',
    'https://github.com/wildskyf',
    'https://www.linkedin.com/in/wildsky/',
  ],
  aboutPaths: {
    tw: '/about/',
    en: '/en/about-en/',
  },
  localeContent: {
    tw: {
      sectionLabel: '作者介紹',
      handleLabel: '網路上多半用 Wildsky 這個名字',
      subtitle: 'Frontend-leaning 軟體工程師，長期關注 AI 工具、PKM、self-hosted 與軟體工程。',
      summary: '這裡主要寫技術、工作、生活與思考，試著把複雜的事說清楚。',
      primaryCta: {
        label: '關於我',
        href: '/about/',
      },
      secondaryCta: {
        label: '工作經歷',
        href: '/experiences/',
      },
    },
    en: {
      sectionLabel: 'About the author',
      handleLabel: 'Mostly writing on the internet as Wildsky',
      subtitle: 'A frontend-leaning software engineer focused on AI tools, PKM, self-hosting, and software engineering.',
      summary: 'This blog is where I write about tech, work, life, and the occasional thought worth making explicit.',
      primaryCta: {
        label: 'About',
        href: '/en/about-en/',
      },
      secondaryCta: {
        label: 'Experience',
        href: '/en/experiences-en/',
      },
    },
  },
} as const;
