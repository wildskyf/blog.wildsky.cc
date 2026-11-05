import { escapeAttr, escapeHtml, formatDate, jsonResponse, sanitizeHtml, sanitizeUrl } from './notes.js';

// Replies to the fediverse post of an article. ~/bin/blog-fedi/blog_fedi.py on the Mac mini exports
// the public ones as static JSON, so this function needs no access token for the snac account.
const COMMENTS_BASE = 'https://social.wildsky.cc/archive/comments/';
const CACHE_SECONDS = 60;
const TIMEOUT_MS = 4000;
const MAX_COMMENTS = 200;

export async function onRequestGet({ request }) {
  const slug = new URL(request.url).searchParams.get('slug') || '';

  if (!/^[\p{L}\p{N}_-][\p{L}\p{N}_.-]{0,200}$/u.test(slug)) {
    return jsonResponse({ ok: false, error: 'invalid slug' }, 0);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort('upstream timeout'), TIMEOUT_MS);

  try {
    const response = await fetch(`${COMMENTS_BASE}${encodeURIComponent(slug)}.json`, {
      headers: { accept: 'application/json', 'user-agent': 'blog.wildsky.cc comments proxy' },
      signal: controller.signal,
      cf: { cacheTtl: CACHE_SECONDS, cacheEverything: true },
    });

    // Older articles have no fediverse post, so no comment section either.
    if (response.status === 404) {
      return jsonResponse({ ok: true, hasPost: false, count: 0, html: '' }, CACHE_SECONDS);
    }
    if (!response.ok) {
      throw new Error(`upstream returned ${response.status}`);
    }

    const doc = await response.json();
    const comments = (Array.isArray(doc.comments) ? doc.comments : []).slice(0, MAX_COMMENTS);

    return jsonResponse({
      ok: true,
      hasPost: true,
      postUrl: sanitizeUrl(doc.post) || null,
      count: comments.length,
      html: comments.map(renderComment).join(''),
    }, CACHE_SECONDS);
  } catch (error) {
    return jsonResponse({
      ok: true,
      hasPost: false,
      count: 0,
      html: '',
      upstreamError: error instanceof Error ? error.message : 'unknown upstream error',
    }, Math.min(CACHE_SECONDS, 30));
  } finally {
    clearTimeout(timeout);
  }
}

function renderComment(comment) {
  const author = comment.author || {};
  const name = escapeHtml(author.name || author.handle || '');
  const handle = escapeHtml(author.handle || '');
  const profile = sanitizeUrl(author.url);
  const avatar = httpsOnly(author.avatar);
  const link = sanitizeUrl(comment.url);
  const date = new Date(comment.published);
  const hasDate = !Number.isNaN(date.getTime());
  const nameHtml = profile
    ? `<a href="${escapeAttr(profile)}" target="_blank" rel="nofollow noopener noreferrer">${name}</a>`
    : name;
  const timeHtml = hasDate
    ? `<time datetime="${escapeAttr(date.toISOString())}">${escapeHtml(formatDate(date.toISOString()))}</time>`
    : '';

  return `
<article class="note-card fedi-comment">
  <header class="fedi-comment-head">
    ${avatar ? `<img class="fedi-comment-avatar" src="${escapeAttr(avatar)}" alt="" width="40" height="40" loading="lazy" decoding="async" referrerpolicy="no-referrer" />` : ''}
    <div class="fedi-comment-who"><strong>${nameHtml}</strong><span>${handle}</span></div>
  </header>
  <div class="article-content note-content">${sanitizeHtml(comment.content)}</div>
  <footer class="note-meta">
    ${timeHtml}
    ${link ? `<a class="note-permalink" href="${escapeAttr(link)}" target="_blank" rel="nofollow noopener noreferrer">View original</a>` : ''}
  </footer>
</article>`;
}

function httpsOnly(value) {
  const url = sanitizeUrl(value);
  return url.startsWith('https:') ? url : '';
}
