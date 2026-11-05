// social.wildsky.cc runs snac (it replaced GoToSocial in 2026-11). Notes come from the
// Mastodon-compatible public API, which pages natively with max_id.
const DEFAULT_INSTANCE_URL = 'https://social.wildsky.cc';
const DEFAULT_ACCOUNT = 'wildsky';
const DEFAULT_CACHE_SECONDS = 60;
const UPSTREAM_TIMEOUT_MS = 4000;
const DEFAULT_PAGE_SIZE = 10;
const MAX_PAGE_SIZE = 20;
const MAX_MEDIA_PER_NOTE = 4;
// Upstream pages are filtered (no replies, boosts or unlisted posts), so a page of notes may
// need more than one upstream request.
const UPSTREAM_PAGE_SIZE = 40;
const MAX_UPSTREAM_PAGES = 3;
const ALLOWED_MEDIA_HOST = 'social.wildsky.cc';
// /fileserver/ serves media of posts imported from GoToSocial; /users/wildsky/s/ is snac's.
const ALLOWED_MEDIA_PATH_PREFIXES = ['/fileserver/', '/users/wildsky/s/'];

export async function onRequestGet(context) {
  const { request, env, waitUntil } = context;
  const requestUrl = new URL(request.url);
  const cacheSeconds = parsePositiveInt(env.NOTES_CACHE_SECONDS, DEFAULT_CACHE_SECONDS);
  const page = getPageParams(requestUrl);
  const cacheKey = new Request(requestUrl.toString(), request);

  if (cacheSeconds > 0 && typeof caches !== 'undefined') {
    const cached = await caches.default.match(cacheKey);
    if (cached) {
      const response = new Response(cached.body, cached);
      response.headers.set('x-notes-cache', 'HIT');
      return response;
    }
  }

  const response = await buildNotesResponse(env, cacheSeconds, page);
  response.headers.set('x-notes-cache', 'MISS');

  if (cacheSeconds > 0 && response.ok && typeof caches !== 'undefined') {
    waitUntil(caches.default.put(cacheKey, response.clone()));
  }

  return response;
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      allow: 'GET, OPTIONS',
      'cache-control': 'public, max-age=60',
    },
  });
}

async function buildNotesResponse(env, cacheSeconds, page) {
  const instanceUrl = env.NOTES_INSTANCE_URL || DEFAULT_INSTANCE_URL;
  const account = env.NOTES_ACCOUNT || DEFAULT_ACCOUNT;
  let feedUrl = instanceUrl;

  try {
    const accountId = await lookupAccountId(instanceUrl, account, cacheSeconds);
    const notes = [];
    let upstreamCursor = page.cursor;
    let upstreamDone = false;

    for (let i = 0; i < MAX_UPSTREAM_PAGES && notes.length <= page.limit && !upstreamDone; i += 1) {
      feedUrl = buildStatusesUrl(instanceUrl, accountId, upstreamCursor);
      const statuses = await fetchJsonWithTimeout(feedUrl, UPSTREAM_TIMEOUT_MS, cacheSeconds);

      if (!Array.isArray(statuses) || statuses.length === 0) {
        upstreamDone = true;
        break;
      }

      for (const status of statuses) {
        if (!isListedNote(status)) continue;
        const note = toNote(status);
        if (note.url && (note.html.trim() || note.media.length > 0)) notes.push(note);
      }

      upstreamCursor = sanitizeCursor(statuses[statuses.length - 1].id);
      upstreamDone = statuses.length < UPSTREAM_PAGE_SIZE || !upstreamCursor;
    }

    const pageNotes = notes.slice(0, page.limit);
    const lastNote = pageNotes[pageNotes.length - 1];
    const hasMore = notes.length > page.limit || (!upstreamDone && pageNotes.length === page.limit);

    return jsonResponse({
      ok: true,
      count: pageNotes.length,
      source: instanceUrl,
      feed: feedUrl,
      limit: page.limit,
      cursor: page.cursor || null,
      hasMore,
      nextCursor: hasMore && lastNote ? lastNote.id || null : null,
      fetchedAt: new Date().toISOString(),
      html: renderNotes(pageNotes),
    }, cacheSeconds);
  } catch (error) {
    return jsonResponse({
      ok: true,
      count: 0,
      source: instanceUrl,
      feed: feedUrl,
      limit: page.limit,
      cursor: page.cursor || null,
      hasMore: false,
      nextCursor: null,
      fetchedAt: new Date().toISOString(),
      html: '',
      upstreamError: error instanceof Error ? error.message : 'unknown upstream error',
    }, Math.min(cacheSeconds, 30));
  }
}

function getPageParams(requestUrl) {
  return {
    limit: parseBoundedPositiveInt(requestUrl.searchParams.get('limit'), DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE),
    cursor: sanitizeCursor(requestUrl.searchParams.get('cursor') || requestUrl.searchParams.get('max_id')),
  };
}

async function lookupAccountId(instanceUrl, account, cacheSeconds) {
  const url = new URL('/api/v1/accounts/lookup', instanceUrl);
  url.searchParams.set('acct', account);
  const result = await fetchJsonWithTimeout(url.toString(), UPSTREAM_TIMEOUT_MS, cacheSeconds);
  const id = sanitizeCursor(result && result.id);

  if (!id) {
    throw new Error(`account ${account} not found`);
  }

  return id;
}

function buildStatusesUrl(instanceUrl, accountId, cursor) {
  const url = new URL(`/api/v1/accounts/${accountId}/statuses`, instanceUrl);
  url.searchParams.set('limit', String(UPSTREAM_PAGE_SIZE));

  if (cursor) {
    url.searchParams.set('max_id', cursor);
  }

  return url.toString();
}

async function fetchJsonWithTimeout(url, timeoutMs, cacheSeconds) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort('upstream timeout'), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
        'user-agent': 'blog.wildsky.cc notes feed proxy',
      },
      signal: controller.signal,
      cf: cacheSeconds > 0 ? { cacheTtl: cacheSeconds, cacheEverything: true } : undefined,
    });

    if (!response.ok) {
      throw new Error(`upstream returned ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

// Same selection as the old GoToSocial RSS feed: public top-level posts, no boosts.
function isListedNote(status) {
  return Boolean(status) &&
    status.visibility === 'public' &&
    !status.in_reply_to_id &&
    !status.reblog;
}

function toNote(status) {
  const isoDate = toIsoDate(status.created_at);

  return {
    id: sanitizeCursor(status.id),
    html: sanitizeHtml(status.content),
    media: extractMedia(status.media_attachments),
    url: sanitizeUrl(status.url || status.uri) || '',
    date: isoDate,
    displayDate: formatDate(isoDate),
  };
}

function extractMedia(attachments) {
  return (Array.isArray(attachments) ? attachments : [])
    .map((item) => {
      const url = sanitizeMediaUrl(item && item.url);
      return url && item.type === 'image' ? { url, type: item.type } : null;
    })
    .filter(Boolean)
    .slice(0, MAX_MEDIA_PER_NOTE);
}

export function sanitizeHtml(input) {
  let html = String(input || '').slice(0, 50000);

  html = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\s*(script|style|iframe|object|embed|svg|math|canvas|video|audio)\b[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\/?(?:script|style|iframe|object|embed|form|input|button|textarea|select|option|svg|math|canvas|video|audio|source|track|meta|link)\b[\s\S]*?>/gi, '');

  return html.replace(/<\/?([a-zA-Z0-9:-]+)([^>]*)>/g, (tag, rawName, rawAttrs = '') => {
    const name = rawName.toLowerCase();
    const closing = tag.startsWith('</');

    if (!ALLOWED_TAGS.has(name)) {
      return '';
    }

    if (closing) {
      return `</${name}>`;
    }

    if (VOID_TAGS.has(name)) {
      return `<${name}>`;
    }

    const attrs = sanitizeAttrs(name, rawAttrs);
    return attrs ? `<${name} ${attrs}>` : `<${name}>`;
  });
}

const ALLOWED_TAGS = new Set([
  'a', 'p', 'br', 'strong', 'b', 'em', 'i', 's', 'u', 'blockquote', 'code', 'pre',
  'ul', 'ol', 'li', 'span', 'time', 'small', 'del', 'ins', 'hr',
]);

const VOID_TAGS = new Set(['br', 'hr']);

function sanitizeAttrs(tagName, rawAttrs) {
  if (tagName !== 'a' && tagName !== 'time') return '';

  const attrs = [];
  for (const match of rawAttrs.matchAll(/([a-zA-Z:-]+)\s*=\s*("[^"]*"|'[^']*'|[^\s"'>]+)/g)) {
    const name = match[1].toLowerCase();
    const value = stripQuotes(match[2]);

    if (tagName === 'a' && name === 'href') {
      const href = sanitizeUrl(value);
      if (href) {
        attrs.push(`href="${escapeAttr(href)}"`);
        attrs.push('rel="nofollow noopener noreferrer"');
        attrs.push('target="_blank"');
      }
    }

    if (tagName === 'a' && name === 'title') {
      attrs.push(`title="${escapeAttr(value)}"`);
    }

    if (tagName === 'time' && name === 'datetime') {
      attrs.push(`datetime="${escapeAttr(value)}"`);
    }
  }

  return dedupeAttrs(attrs).join(' ');
}

function renderNotes(notes) {
  return notes.map((note) => `
<article class="note-card">
  <div class="article-content note-content">${note.html}</div>
  ${renderNoteMedia(note.media)}
  <footer class="note-meta">
    <time datetime="${escapeAttr(note.date)}">${escapeHtml(note.displayDate)}</time>
    <a class="note-permalink" href="${escapeAttr(note.url)}" target="_blank" rel="nofollow noopener noreferrer">View on social.wildsky.cc</a>
  </footer>
</article>`).join('');
}

function renderNoteMedia(media) {
  if (!Array.isArray(media) || media.length === 0) return '';

  const images = media.map((item) => `
    <a class="note-media-link" href="${escapeAttr(item.url)}" target="_blank" rel="nofollow noopener noreferrer">
      <img src="${escapeAttr(item.url)}" loading="lazy" decoding="async" alt="" />
    </a>`).join('');

  return `<figure class="note-media">${images}</figure>`;
}

export function jsonResponse(body, cacheSeconds) {
  const ttl = Math.max(0, cacheSeconds || 0);
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': ttl > 0
        ? `public, max-age=${ttl}, s-maxage=${ttl}`
        : 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

function parsePositiveInt(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function parseBoundedPositiveInt(value, fallback, max) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(parsed, max);
}

function sanitizeCursor(value) {
  const cursor = String(value || '').trim();
  return /^[0-9a-zA-Z]{1,64}$/.test(cursor) ? cursor : '';
}

function toIsoDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

export function formatDate(value) {
  return new Intl.DateTimeFormat('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

export function sanitizeUrl(value) {
  try {
    const url = new URL(decodeXml(value || ''), 'https://social.wildsky.cc');
    if (url.protocol === 'http:' || url.protocol === 'https:' || url.protocol === 'mailto:') {
      return url.toString();
    }
  } catch (_error) {
    return '';
  }
  return '';
}

function sanitizeMediaUrl(value) {
  try {
    const url = new URL(decodeXml(value || ''), 'https://social.wildsky.cc');
    if (
      url.protocol === 'https:' &&
      url.hostname === ALLOWED_MEDIA_HOST &&
      ALLOWED_MEDIA_PATH_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))
    ) {
      return url.toString();
    }
  } catch (_error) {
    return '';
  }

  return '';
}

function decodeXml(value) {
  return String(value || '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_match, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, '&');
}

function stripQuotes(value) {
  return String(value || '').replace(/^['"]|['"]$/g, '');
}

export function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function dedupeAttrs(attrs) {
  const seen = new Set();
  return attrs.filter((attr) => {
    const name = attr.split('=')[0];
    if (seen.has(name)) return false;
    seen.add(name);
    return true;
  });
}
