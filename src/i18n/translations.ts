export const translations = {
  tw: {
    site: {
      title: "Wildsky's Blog",
      description: 'Easy things should be easy, and hard things should be possible.',
      homeDescription:
        '軟體工程師 Wildsky 的技術與思考筆記，記錄 AI Agent、self-hosting、Web 開發，以及工作、生活與世界觀察。',
      manifesto: '信仰不確定性，同時用確定性工程過生活',
    },
    nav: {
      home: 'home',
      bookshelf: 'bookshelf',
      about: 'about',
      now: 'now',
      notes: 'notes',
      blogroll: 'Blogroll',
      tags: 'tags',
      categories: 'categories',
      languages: 'Languages',
    },
    home: {
      categoryIntro: '目前涵蓋',
      categoryOutro: '等主題',
    },
    categories: {
      軟體工程: 'Software Engineering',
      職涯工作: 'Career',
      生活體驗: 'Life',
      思考觀點: 'Thoughts',
      理財投資: 'Finance',
      資訊科學: 'Computer Science',
      其他: 'Others',
    },
    common: {
      readMore: '繼續閱讀',
      previous: '上一頁',
      next: '下一頁',
      page: '第',
      pageOf: '頁',
      newerPosts: '← 較新的文章',
      olderPosts: '較舊的文章 →',
    },
  },
  en: {
    site: {
      title: "Wildsky's Blog",
      description: 'Easy things should be easy, and hard things should be possible.',
      homeDescription:
        'Personal blog about software engineering, career growth, life experiences, and thoughts.',
      manifesto: 'Faith in uncertainty, while engineering life with certainty',
    },
    nav: {
      home: 'home',
      bookshelf: 'bookshelf',
      about: 'about',
      now: 'now',
      notes: 'notes',
      blogroll: 'Blogroll',
      tags: 'tags',
      categories: 'categories',
      languages: 'Languages',
    },
    home: {
      categoryIntro: 'Topics include ',
      categoryOutro: ' and more',
    },
    categories: {
      軟體工程: 'Software Engineering',
      職涯工作: 'Career',
      生活體驗: 'Life',
      思考觀點: 'Thoughts',
      理財投資: 'Finance',
      資訊科學: 'Computer Science',
      其他: 'Others',
    },
    common: {
      readMore: 'Read more',
      previous: 'Previous',
      next: 'Next',
      page: 'Page',
      pageOf: 'of',
      newerPosts: '← Newer posts',
      olderPosts: 'Older posts →',
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.tw;
