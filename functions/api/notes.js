const DEFAULT_FEED_URL = 'https://social.wildsky.cc/@wildsky/feed.rss';
const DEFAULT_CACHE_SECONDS = 60;
const UPSTREAM_TIMEOUT_MS = 4000;
const MAX_ITEMS = 20;
const MAX_MEDIA_PER_NOTE = 4;
const ALLOWED_MEDIA_HOST = 'social.wildsky.cc';
const ALLOWED_MEDIA_PATH_PREFIX = '/fileserver/';
const ALLOWED_IMAGE_TYPES = new Set([
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/webp',
]);

export async function onRequestGet(context) {
  const { request, env, waitUntil } = context;
  const cacheSeconds = parsePositiveInt(env.NOTES_CACHE_SECONDS, DEFAULT_CACHE_SECONDS);
  const cacheKey = new Request(new URL(request.url).toString(), request);

  if (cacheSeconds > 0 && typeof caches !== 'undefined') {
    const cached = await caches.default.match(cacheKey);
    if (cached) {
      const response = new Response(cached.body, cached);
      response.headers.set('x-notes-cache', 'HIT');
      return response;
    }
  }

  const response = await buildNotesResponse(env, cacheSeconds);
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

async function buildNotesResponse(env, cacheSeconds) {
  const feedUrl = env.GTS_NOTES_FEED_URL || DEFAULT_FEED_URL;

  try {
    const rss = await fetchTextWithTimeout(feedUrl, UPSTREAM_TIMEOUT_MS, cacheSeconds);
    const items = parseRssItems(rss).slice(0, MAX_ITEMS);
    const notes = items
      .map(toNote)
      .filter((note) => note.url && (note.html.trim() || note.media.length > 0));

    return jsonResponse({
      ok: true,
      count: notes.length,
      source: feedUrl,
      fetchedAt: new Date().toISOString(),
      html: renderNotes(notes),
    }, cacheSeconds);
  } catch (error) {
    return jsonResponse({
      ok: true,
      count: 0,
      source: feedUrl,
      fetchedAt: new Date().toISOString(),
      html: '',
      upstreamError: error instanceof Error ? error.message : 'unknown upstream error',
    }, Math.min(cacheSeconds, 30));
  }
}

async function fetchTextWithTimeout(url, timeoutMs, cacheSeconds) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort('upstream timeout'), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/rss+xml, application/xml;q=0.9, text/xml;q=0.8, */*;q=0.1',
        'user-agent': 'blog.wildsky.cc notes feed proxy',
      },
      signal: controller.signal,
      cf: cacheSeconds > 0 ? { cacheTtl: cacheSeconds, cacheEverything: true } : undefined,
    });

    if (!response.ok) {
      throw new Error(`upstream returned ${response.status}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function parseRssItems(xml) {
  return Array.from(xml.matchAll(/<item\b[\s\S]*?<\/item>/gi), (match) => match[0]);
}

function toNote(itemXml) {
  const rawHtml = extractTag(itemXml, 'content:encoded') || extractTag(itemXml, 'description');
  const pubDate = decodeXml(extractTag(itemXml, 'pubDate'));
  const link = decodeXml(extractTag(itemXml, 'link') || extractTag(itemXml, 'guid'));
  const isoDate = toIsoDate(pubDate);

  return {
    html: sanitizeHtml(rawHtml),
    media: extractMediaEnclosures(itemXml),
    url: sanitizeUrl(link) || '',
    date: isoDate,
    displayDate: formatDate(isoDate),
  };
}

function extractMediaEnclosures(itemXml) {
  return Array.from(String(itemXml || '').matchAll(/<enclosure\b([^>]*)>/gi), (match) => {
    const attrs = parseXmlAttrs(match[1]);
    const type = String(attrs.type || '').toLowerCase();
    const url = sanitizeMediaUrl(attrs.url);

    if (!url || !ALLOWED_IMAGE_TYPES.has(type)) {
      return null;
    }

    return {
      url,
      type,
    };
  })
    .filter(Boolean)
    .slice(0, MAX_MEDIA_PER_NOTE);
}

function parseXmlAttrs(rawAttrs) {
  const attrs = {};
  for (const match of String(rawAttrs || '').matchAll(/([a-zA-Z:-]+)\s*=\s*("[^"]*"|'[^']*'|[^\s"'>]+)/g)) {
    attrs[match[1].toLowerCase()] = decodeXml(stripQuotes(match[2]));
  }

  return attrs;
}

function extractTag(xml, tagName) {
  const tag = escapeRegExp(tagName);
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (!match) return '';

  const inner = match[1].trim();
  const cdata = inner.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return cdata ? cdata[1] : decodeXml(inner);
}

function sanitizeHtml(input) {
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

function jsonResponse(body, cacheSeconds) {
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

function toIsoDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function formatDate(value) {
  return new Intl.DateTimeFormat('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

function sanitizeUrl(value) {
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
      url.pathname.startsWith(ALLOWED_MEDIA_PATH_PREFIX)
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

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value) {
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
