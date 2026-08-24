export const MIN_INDEXABLE_TAG_POSTS = 3;
export const NOINDEX_ROBOTS = 'noindex, follow';

const ALWAYS_NOINDEX_PATHS = new Set([
  '/404/',
  '/feed.xml/',
  '/index.xml/',
  '/posts/vim-buffer-winodw-tab/',
  '/tags/%E6%B2%88%E9%BB%98%E8%AD%89%E6%93%9A/',
]);

export const getTagRouteSegment = (tag) => (tag === 'C#' ? 'C-sharp' : tag);

export const normalizePathname = (value) => {
  const pathname = new URL(value, 'https://blog.wildsky.cc').pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

export const shouldIndexTagCount = (postCount) => postCount >= MIN_INDEXABLE_TAG_POSTS;

export const shouldIndexPath = (pathname, tagPostCount) => {
  const normalized = normalizePathname(pathname);

  if (ALWAYS_NOINDEX_PATHS.has(normalized)) return false;
  if (/^\/(?:en\/)?search\/$/.test(normalized)) return false;
  if (/^\/(?:en\/)?page(?:\/\d+)?\/$/.test(normalized)) return false;

  const isTagDetail = /^\/(?:en\/)?tags\/[^/]+\/$/.test(normalized);
  if (isTagDetail) return shouldIndexTagCount(tagPostCount ?? 0);

  return true;
};

export const getRobotsDirective = (shouldIndex) => (shouldIndex ? undefined : NOINDEX_ROBOTS);
