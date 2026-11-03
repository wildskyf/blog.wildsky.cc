---
target: 首頁
total_score: 20
max_score: 32
na_heuristics: 5,9
p0_count: 0
p1_count: 3
target_identity: "file:/Users/wildsky/Projects/blog.wildsky.cc/src/layouts/list.astro"
target_fingerprint: "sha256:7aa177cbedc49afd809d507eb109595c6ceb62f29f0c942cf10dc58bebf16539"
target_path: /Users/wildsky/Projects/blog.wildsky.cc/src/layouts/list.astro
timestamp: 2026-11-03T08-56-09Z
slug: src-layouts-list-astro
---
# Critique: Home (src/layouts/list.astro), v9

Method: dual-agent (A: design review sub-agent · B: detector + browser sub-agent)

## Design Health Score: 20/32 (63%, Acceptable)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Header leader shows location; progress line. `DEPTH 0 m` reads as status but is decoration |
| 2 | Match System / Real World | 2 | ENTRIES/LAST/DEPTH on zh site (recorded decision); zh menu shows lowercase English with no Chinese |
| 3 | User Control and Freedom | 3 | Menu closes on Esc/outside click, focus returns; theme persists |
| 4 | Consistency and Standards | 2 | ABOUT vs about vs Blogroll casing; plated toggle vs bare hamburger; two h1 |
| 5 | Error Prevention | n/a | Static index, no inputs |
| 6 | Recognition Rather Than Recall | 3 | Rows carry date/category/time/tags; mobile hides primary nav in hamburger |
| 7 | Flexibility and Efficiency | 2 | No skip link; ~55 Tab stops to pager |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained; hero eats ~570/900px, 1.5 posts above fold |
| 9 | Error Recovery | n/a | Nothing to recover from |
| 10 | Help and Documentation | 2 | No who/what orientation for first-timers |

## Design Specificity Verdict
Authored, not a template (graphite water column, broken-stroke W, drawn current line, date gutter + mono meta, ~0.06% red). Specificity lives in atmosphere and chrome; the content layer says nothing about who the author is.
Detector: exit 0; 10 advisory (6 font-size off DESIGN.md frontmatter ramp, 4 colour = mask #000, false positive). Browser: gradient-text, hero-eyebrow-chip, dark-glow (documented intent); undersized-ui-text 10px NEW (real); light-theme low-contrast .ds-tag 4.18–4.49 and one .ds-row-meta 4.46 at 390 (real, missed by A). No overflow; all focus stops visible.

## Priority Issues
- [P1] NEW is positional, not time-based: /en/ marks a 2025-09-06 post NEW. Fix: only within 30 days. Command: harden
- [P1] Translucent header lets 27px titles bleed through nav and 11px leader. Fix: bottom stop 88–92% or blur 16–20px. Command: polish
- [P1] Home never says who the author is (PRODUCT goals 1–2). Fix: one identity line under the manifesto linking /experiences (owner copy). Command: clarify
- [P2] Light-theme small text below AA (tags 4.18–4.49) and 10px NEW. Fix: light --fg-faint #4f5b66 (4.77 on darkest water); NEW 11px. Command: polish
- [P2] Two h1 (pageFactory/index.astro:57), no skip link, nav aria-label lowercase English contrary to PRODUCT.md. Command: harden

## Persona Red Flags
- Jordan: HUD readouts unexplained; notes/now/bookshelf only via hamburger.
- Sam: two h1; nav announced as "about"; ~55 Tabs; motion ignores reduced-motion (recorded decision).
- Casey: nav only top-right; first post at ~490px; fish over row meta at 390.
- Employer: no engineer/AI Labs/freelance above fold; stale NEW on /en/; footer joke disclaimer undercuts credibility.

## Minor Observations
Orphaned right-only pager; near-invisible light hover; W overlaps "certainty" on /en/; DESIGN.md type ramp incomplete (10/14/16/17/23/24/26px in use).

## Questions to Consider
- Why is the most valuable pixel `DEPTH 0 m` instead of who you are?
- Curated "start here" + log instead of 16 equal rows?
- Does NEW add anything the date doesn't?
