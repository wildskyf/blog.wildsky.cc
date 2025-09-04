export const translations = {
  tw: {
    site: {
      title: "Wildsky's Blog",
      description: "Easy things should be easy, and hard things should be possible.",
      homeDescription: "Dev blog about web dev, server hosting, and some of my daily stuffs."
    },
    nav: {
      home: "home",
      bookshelf: "bookshelf",
      about: "about",
      now: "now",
      blogroll: "Blogroll",
      languages: "Languages"
    },
    common: {
      readMore: "繼續閱讀",
      previous: "上一頁",
      next: "下一頁",
      page: "第",
      pageOf: "頁",
      newerPosts: "← 較新的文章",
      olderPosts: "較舊的文章 →"
    }
  },
  en: {
    site: {
      title: "Wildsky's Blog",
      description: "Easy things should be easy, and hard things should be possible.",
      homeDescription: "Dev blog about web dev, server hosting, and some of my daily stuffs."
    },
    nav: {
      home: "home",
      about: "about",
      languages: "Languages"
    },
    common: {
      readMore: "Read more",
      previous: "Previous",
      next: "Next",
      page: "Page",
      pageOf: "of",
      newerPosts: "← Newer posts",
      olderPosts: "Older posts →"
    }
  }
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.tw;
