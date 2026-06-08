export const authorProfile = {
  name: '范耿誌 Rance',
  handle: 'Wildsky',
  schemaName: 'Wildsky',
  schemaAlternateName: 'wildsky',
  jobTitle: 'Senior Software Engineer',
  knowsAbout: ['AI Agent', 'Self-hosted Systems', 'Web Development', 'Node.js', 'React', 'TypeScript'],
  avatar: {
    src: '/images/author-avatar.jpeg',
    alt: {
      tw: '范耿誌 Rance 的 avatar',
      en: 'Avatar of 范耿誌 Rance',
    },
  },
  sameAs: [
    'https://social.wildsky.cc/@wildsky',
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
      subtitle: '軟體工程師，長期關注 AI 工具、PKM、self-hosted 與軟體工程。',
      summary: 'Vimer + Taiwanese + Web Dev，近日和 IoT 設備混得比較熟。正在往 systems architect / operator / productized builder 演化。',
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
      subtitle: 'A software engineer focused on AI tools, PKM, self-hosting, and software engineering.',
      summary: 'Vim user + Taiwanese + web dev. Lately I have been getting along pretty well with IoT devices, and gradually evolving toward a systems architect / operator / productized builder.',
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
