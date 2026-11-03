---
target: 文章
total_score: 22
max_score: 32
na_heuristics: 5,9
p0_count: 0
p1_count: 2
target_identity: "file:/Users/wildsky/Projects/blog.wildsky.cc/src/components/Article.astro"
target_fingerprint: "sha256:21fe39ca746a58a9da285b9288f13f366fe624a0f77ecf53254db187cbf235ff"
target_path: /Users/wildsky/Projects/blog.wildsky.cc/src/components/Article.astro
timestamp: 2026-11-03T08-56-09Z
slug: src-components-article-astro
---
# Critique: Article (src/components/Article.astro), v9

Method: dual-agent (A: design review sub-agent · B: detector + browser sub-agent)

## Design Health Score: 22/32 (69%, Good)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Progress line + reading time; gauge only ≥1280px, metres invented |
| 2 | Match System / Real World | 3 | Natural first-person prose; `6 MIN` acceptable |
| 3 | User Control and Freedom | 3 | Translation link, related posts |
| 4 | Consistency and Standards | 3 | Consistent links; CJK blockquote synthesised italic |
| 5 | Error Prevention | n/a | Reading page |
| 6 | Recognition Rather Than Recall | 2 | No ToC, h2 ids without visible anchors; leader duplicates H1 |
| 7 | Flexibility and Efficiency | 2 | No skip link or section links; code copy unverified |
| 8 | Aesthetic and Minimalist Design | 3 | Clean column; fish cross body text; header bleed-through |
| 9 | Error Recovery | n/a | Nothing to recover from |
| 10 | Help and Documentation | 3 | Related reading + author bio CTAs |

## Design Specificity Verdict
Strongly authored: gold roman h2 numerals, fading blood-red quote rule, teal 45% link underline, depth gauge, 720px column on the water; body deliberately plain and legible.
Detector: exit 0; 12 advisory font-size (title clamp, 13px etc. documented in DESIGN.md prose, false positive for ramp). Browser: gradient-text/dark-glow (documented), em-dash-overuse (author content), wide-tracking on meta. No overflow; focus visible.

## Priority Issues
- [P1] Synthesised italic on CJK blockquotes (global.css:97). Fix: blockquote:lang(zh-Hant-TW) font-style normal. Command: typeset
- [P1] Fish schools cross body text (light theme legible over glyphs); consequence of reading-column exemption. Fix: fade within ±380px of column centre when is-reading. Command: quieter
- [P2] h2 numeral "I" reads as a stray bar. Fix: "I." or 15px with min-width. Command: typeset
- [P2] Long essays lack navigation (6 h2, no ToC/anchors). Fix: hover # anchors; compact ToC at 4+ h2. Command: layout
- [P2] Header leader duplicates truncated H1 over translucent header. Fix: show after H1 scrolls out; more opaque header. Command: polish

## Persona Red Flags
- Jordan: DEPTH 000–200 m implies data that doesn't exist.
- Sam: no skip link; faux-italic CJK; constant peripheral motion (recorded decision).
- Casey: mobile title breaks mid-word (新宇/宙), no Segmenter spans; fish over body; no back-to-top.
- Engineer from search: no ToC/anchors; no updated date on old technical posts.

## Minor Observations
Related pulled up with margin -32px (visible seam); bio avatar unreadable at 56px; all-small-caps on CJK CTAs inert; h4 15px muted reads as caption.

## Questions to Consider
- Replace invented metres with current section (II / VI)?
- One template for essays and technical posts?
- What marks the end of an essay here?
