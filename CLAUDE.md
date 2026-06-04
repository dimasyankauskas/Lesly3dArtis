# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static portfolio website for **Lesly — 3D Character Artist** (with "AI Workflow Support" as a supporting phrase, not a title), intended for GitHub Pages at `https://dimasyankauskas.github.io/Lesly3dArtis/`. Targets both US game-studio FT roles and elite freelance ($100/hr) work, balanced.

Positioning, copy, and visual direction are documented in `reserch/` — read those before editing copy or layout. They're the source of truth for brand voice.

## Repository layout

```
index.html        # One-page site (hero, services, work, case-study preview, process, about, AI workflow support, contact)
case-study.html   # Reusable case study template (5-part structure — research-validated)
case-study.js     # Reveal-on-scroll for cs-step process stages (mobile nav handled by shared script.js)
script.js         # Shared: theme toggle, mobile nav, portfolio filters, reveal-on-scroll, form placeholder
styles.css        # Design system: tokens, light/dark theme, typography, components, responsive
.nojekyll         # GitHub Pages: serve repo as static site, no Jekyll processing
README.md         # Public-facing repo README (deploy + placeholder replacement)
reserch/          # Strategy, IA, copy, visual assets, design direction (see below)
reserch/design-directions.html  # 4 design directions shown side-by-side (Direction 4 was picked)
```

The `reserch/` directory (note the spelling, kept as requested in `reserch/README.md`) is the project decision log:

- `reserch/platform-strategy.md` — freelance positioning and platform choices
- `reserch/website-information-architecture.md` — site structure and copy direction
- `reserch/design-system-spec.md` — colors, typography scale, grid, components
- `reserch/upgrade-jd-aligned-website-copy.md` — JD-aligned copy (USE THIS as source of truth for headline, services, form fields)
- `reserch/upgrade-jd-aligned-linkedin.md` — matching LinkedIn upgrade
- `reserch/final-ai-workflow-update.md` — final AI workflow support framing (use "3D Character Artist" as title, "AI Workflow Support" as supporting phrase only)
- `reserch/visual-assets-checklist.md` — launch visual asset requirements
- `reserch/chat-history.md` — condensed project transcript
- `reserch/version-2-website-materials.md` — long-form V2 spec (sections, sitemap, FAQ, SEO)
- `reserch/research-jd-references.md` — JD terminology sourcing for the JD-aligned copy
- `reserch/visuals/visual-index.md` + `visual-gallery.html` + `image*.png` — 9 reference mockups

## Tech stack & conventions

- **No build system, no bundler, no package manager, no tests.** Pure HTML/CSS/vanilla JS.
- **No external JS dependencies.** Only external assets are Google Fonts (`Cormorant Garamond` + `Inter` + `JetBrains Mono`) loaded in `index.html` and `case-study.html`.
- **CSS uses a small design-token system** at the top of `styles.css` (custom properties on `:root` and `:root[data-theme="dark"]`). All colors, fonts, radii, and shadows should be referenced through these tokens — do not introduce hardcoded color literals.
- **JS is hand-written and minifier-style** (one long expression chain per file). Match this style for new behavior: top-level `const` + optional chaining, no modules, no build step.
- **`styles.css` is multi-line for readability** (single-line minification abandoned after the V2 rebuild). The Quiet Premium design system reads better as a structured file.
- **Theme system:** the `<html>` element carries `data-theme="light"` (default) or `data-theme="dark"`. An inline script in `<head>` sets the theme from `localStorage['lesly-theme']` *before* CSS loads, to prevent FOUC. The toggle in the header (`<div class="theme-toggle">` with two `<button data-theme-set="...">` children) flips the attribute and persists the choice. Always keep the inline FOUC-prevention script in both pages.
- **Placeholder media is intentional.** The site ships with text-only `.thumb` / `.case-hero` / `.case-hero-bg` / `.about-portrait` blocks in place of real images; swap to `<img>` or `<video>` from `reserch/visuals/` when assets land.
- **Case study architecture (research-driven, see `~/.claude/.../memory/lesly-ft-portfolio-research.md`):** The dominant FT-job funnel lever is recruiter friction. The site uses a one-reusable-page architecture: a single `case-study.html` template with the 5-part quotable structure (Hero → Constraints → What this is → Goals → Process → Outcomes → Related) and per-stage tool credits. Portfolio cards in `index.html` are `<a>` links to `case-study.html?id=<slug>`. The 6 current slugs match the portfolio cards: `game-hero`, `sculpt-to-retopo`, `avatar-character`, `mascot-character`, `outfits-accessories`, `pbr-texturing`. To add a new case study, copy `case-study.html` and update the content — do not split it into multiple files unless content volume demands it.

## Design tokens (from `styles.css`)

**Light (default):**
- bg `#faf7f1` (cream), surface `#f3eee0`, surface-2 `#ece6d6`
- border `#e3dcc8`, border-strong `#c9c0a8`
- accent `#a64b2a` (terracotta), accent-hover `#8a3a1f`
- text `#0c0c0e`, muted `#5a564f`, subtle `#8a857a`
- Display: `Cormorant Garamond` (italic). Body/UI: `Inter`. Data: `JetBrains Mono`.
- Max content width `880px` (narrow, type-driven) / `1240px` (wide). Section padding `clamp(4rem, 9vw, 7rem)` vertical.
- Responsive breakpoints: `900px` (tablet) and `600px` (mobile).

**Dark (`[data-theme="dark"]`):**
- bg `#0e0c0a` (warm near-black), surface `#181513`, surface-2 `#221d19`
- border `#2a2522`, border-strong `#3a332c`
- accent `#c4664a` (terracotta brightened for dark)
- text `#f0e8d8` (warm off-white), muted `#a89e8a`, subtle `#7a7064`
- Same type stack.

Theme is set on `<html data-theme="...">`. The `<meta name="theme-color">` tags use `media="(prefers-color-scheme: ...)"` so mobile browser chrome matches.

## Local development

There is no build step. To preview locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Alternatively, `open index.html` directly in a browser — there are no server-side requirements.

## Deployment

Static GitHub Pages. After `git push` to `main`, GitHub Pages serves the repo root. No build command. `.nojekyll` is already present to skip Jekyll processing.

## Local skills

Project-local skills live in `.claude/skills/<skill-name>/SKILL.md` and are auto-discovered by Claude Code when run from this project root. Installed (8 total):

**Brand & copy (segment-specific)**
- `3d-character-artist-portfolio` — segment positioning, FT-hire rubric, case-study anatomy, package framing, red-flag patterns, Lesly-specific facts. **Read this first** before any copy or IA work.
- `humanizer` (blader v2.7.0, MIT) — 30-pattern detection + 3-pass rewrite to remove AI-writing tells. Run on any new copy before shipping.

**UI / visual**
- `frontend-design` (Anthropic official) — anti-AI-slop frontend UI guidance
- `canvas-design` (Anthropic official) — visual art / PDF / PNG design philosophy generator
- `theme-factory` (Anthropic official) — 10 pre-set color/font themes. Probably not useful; design tokens already locked in `styles.css`.

**3D display (Sketchfab preferred, GLB fallback)**
- `threejs-fundamentals` + `threejs-loaders` — Three.js scene setup and GLTF/texture/model loading. Only needed if Lesly switches from Sketchfab embed to self-hosted GLB.

**Testing**
- `webapp-testing` (Anthropic official) — Playwright-based testing for when we wire up real interactivity / form backend.

Do **not** install skills globally (`/plugin marketplace add` with no project flag) — keep all installs inside `.claude/skills/` so the site is fully portable.

### Skill-to-task routing

| Task | Skill |
|---|---|
| Edit copy, write hero, services, or case-study text | `3d-character-artist-portfolio` |
| Edit existing copy to remove AI tells | `humanizer` |
| Build/refine HTML/CSS/JS visual layer | `frontend-design` |
| Add a 3D character viewer to the page | `threejs-fundamentals` + `threejs-loaders` (or `<iframe>` to Sketchfab, no skill needed) |
| Generate a PDF portfolio cover, social banner, or poster | `canvas-design` |
| Test a feature end-to-end with Playwright | `webapp-testing` |

## Common tasks

- **Edit copy or section structure** — update `index.html`. Keep section IDs (`#work`, `#services`, `#process`, `#about`, `#contact`) stable; the nav and smooth-scroll depend on them.
- **Add a portfolio item** — add an `<a class="work-card" data-category="..." href="case-study.html?id=<slug>">` inside the `.work-grid` block in `#work`. Supported filter categories: `game`, `avatar`, `mascot`, `outfit`, `process`. Multiple categories per card are space-separated in `data-category`. Don't forget to add a matching entry to the `.cs-related-grid` on `case-study.html`.
- **Adjust design tokens** — edit the `:root` and `:root[data-theme="dark"]` blocks at the top of `styles.css`. Both modes share typography and spacing tokens; only color tokens swap. Avoid hardcoding values inside rules; reference the tokens.
- **Add a new theme or change theme colors** — add a new `:root[data-theme="..."]` block. The toggle in the header auto-generates buttons from `[data-theme-set]` elements, so add a button to both `.site-header .nav` blocks in `index.html` and `case-study.html` for the new theme.
- **Swap a placeholder for real media** — replace the placeholder `<div class="thumb">` (or `.case-hero`, `.case-hero-bg`, `.about-portrait`) block with `<img src="reserch/visuals/imageN.png" alt="...">` (or `<video>`).
- **Wire the contact form to a real backend** — `script.js` currently calls `preventDefault` and writes a placeholder note. Replace the submit handler (`.contact-form` submit listener in `script.js`) with the chosen service (Formspree, Airtable, HubSpot, Webflow, custom).

## Things to watch for

- The `reserch/` folder name is misspelled on purpose (per `reserch/README.md`) — do not rename it without confirming with the user.
- `script.js` is intentionally minified-style; when adding behavior, follow the same style (top-level `const`, optional chaining, no modules) rather than introducing a build pipeline.
- The hero, portfolio, and about-portrait blocks currently render text-only placeholders — visuals are queued per `reserch/visual-assets-checklist.md`.
- The site is a marketing/lead-generation surface, not a content app: keep the conversion path (nav CTA `#contact`, hero primary button, contact form) prominent and unobstructed.
- The light/dark theme uses `color-mix(in srgb, var(--bg) 88%, transparent)` for the sticky header — make sure any new theme's `--bg` plays nicely with that formula. If you change `--bg` to something saturated, you may need to adjust the percentage.
