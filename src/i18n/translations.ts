export const translations = {
  tw: {
    site: {
      title: "Wildsky's Blog",
      description: 'Easy things should be easy, and hard things should be possible.',
      homeDescription: 'Humans can make mistakes. Always review before running the code.',
      // 首頁宣言。.pivot 是語意樞紐，唯一允許的紅字（27px 大字，AA Large 3.83 ✓）。
      // 拆成 4 個 .cl 子句：桌機兩句一行，手機一句一行。
      // 不用 <br> —— 固定斷行在 390px 會把「；」擠成孤兒行（實測裂成 7 行）。
      manifesto:
        '<span class="ln"><span class="cl">信仰不確定性，</span><span class="cl">卻以確定性為業<span class="pivot">；</span></span></span>' +
        '<span class="ln"><span class="cl">熱愛不確定性哲學，</span><span class="cl">同時用確定性工程過生活</span></span>',
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
      manifesto:
        '<span class="ln"><span class="cl">Faith in uncertainty,</span> <span class="cl">a trade in certainty<span class="pivot">;</span></span></span>' +
        '<span class="ln"><span class="cl">a philosophy of the unknown,</span> <span class="cl">a life engineered to be known</span></span>',
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
