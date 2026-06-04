# Design System — Lesly

Strict, documented design tokens, components, and patterns for the V2 (Quiet Premium) and V1 (Dark Editorial) versions of the site. Use this as the source of truth; do not introduce arbitrary values.

## Two systems, one file pair

| File | Role | When active |
|---|---|---|
| `styles.css` | V2 Quiet Premium (cream + terracotta, Cormorant Garamond italic + Inter) | `data-version="v2"` (default) |
| `v1-brand.css` | V1 Dark Editorial (warm near-black + gold, Playfair Display + Montserrat) | `data-version="v1"` |
| `script.js` | Theme + version toggle, mobile nav, portfolio filters, reveal-on-scroll, form placeholder | both |

All V1 selectors are scoped to `:root[data-version="v1"] { ... }` so V2 is the unstyled default. V1-only markup (`.work-tag`, `.card-corner`, `.hero-tags`, `.case-corner`) is hidden in V2 via `:root:not([data-version="v1"]) .work-tag { display: none }`.

## Tokens (V2 — `styles.css`)

### Color (light)
- `--bg:#faf7f1` (cream)
- `--surface:#f3eee0` (deeper cream for `.section.alt`)
- `--surface-2:#ece6d6` (deeper still, for input fills etc.)
- `--border:#e3dcc8`
- `--border-strong:#c9c0a8`
- `--accent:#a64b2a` (terracotta)
- `--accent-hover:#8a3a1f`
- `--accent-text:#faf7f1` (text on accent buttons)
- `--accent-soft:rgba(166,75,42,.08)`
- `--text:#0c0c0e`
- `--muted:#5a564f`
- `--subtle:#8a857a`

### Color (dark)
- `--bg:#0e0c0a`
- `--surface:#181513`
- `--surface-2:#221d19`
- `--border:#2a2522`
- `--border-strong:#3a332c`
- `--accent:#c4664a` (terracotta brightened for dark)
- `--accent-hover:#d97e5e`
- `--accent-text:#0e0c0a`
- `--text:#f0e8d8`
- `--muted:#a89e8a`
- `--subtle:#7a7064`

### Typography
- `--display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif` (italic headlines)
- `--body: Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif`
- `--mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace`
- Heading sizes use `clamp(min, vw, max)` for fluid scaling
- `h1` `clamp(2.6rem, 6vw, 4.2rem)` · `h2` `clamp(1.9rem, 4.4vw, 2.8rem)` · `h3` `clamp(1.25rem, 2vw, 1.5rem)` · `h4` `clamp(1.1rem, 1.6vw, 1.25rem)`
- `text-wrap: balance` on h1-h4 for proper line breaks
- All headings: italic display font, weight 500

### Spacing scale (use these — do not introduce arbitrary values)
- `--space-1: .25rem` (4px)
- `--space-2: .5rem` (8px)
- `--space-3: .75rem` (12px)
- `--space-4: 1rem` (16px)
- `--space-5: 1.5rem` (24px)
- `--space-6: 2rem` (32px)
- `--space-7: 2.5rem` (40px)
- `--space-8: 3rem` (48px)
- `--space-9: 4rem` (64px)
- `--space-10: 5rem` (80px)
- `--space-11: 6rem` (96px)
- `--space-12: 7rem` (112px)

Section padding-block: `clamp(4rem, 9vw, 7rem)` (vertical rhythm). Container side padding: `clamp(1rem, 4vw, 2rem)`.

### Layout
- `--max: 880px` (narrow type-driven reading width)
- `--max-wide: 1240px` (wide grid sections)
- `--radius: 2px` (smallest radius)
- `--radius-card: 4px` (cards and tiles)
- Buttons use `border-radius: 999px` (pill)

### Type scale (use these — do not introduce arbitrary font sizes)
- `--text-xs: .68rem` (caption / tag / meta)
- `--text-sm: .78rem` (small UI, eyebrow)
- `--text-md: .95rem` (body in compact areas)
- `--text-lg: 1.1rem` (large body)
- `--text-xl: 1.3rem` (work card title)
- `--text-2xl: 1.6rem` (service row title)
- `--text-3xl: 2.2rem` (process step title)
- `--text-4xl: 3rem` (large display)

### Line height
- `--leading-tight: 1.05` (headings)
- `--leading-snug: 1.25` (h3/h4)
- `--leading-normal: 1.5` (default)
- `--leading-relaxed: 1.65` (body)

### Motion
- `--ease: cubic-bezier(.4, 0, .2, 1)` (used everywhere)
- Theme transitions: 0.35s
- Hover transitions: 0.15-0.2s
- Reveal-on-scroll: 0.7s

## Components (V2)

All components use only the tokens above. Inline `style=""` is forbidden — use utility classes `.mt-2` / `.mt-3` for spacing (defined in `styles.css`).

### `.container` / `.container-wide`
Constrains width and adds responsive side padding. Use `.container-wide` for work grids and case previews (1240px max). Use `.container` for type-driven content (880px max).

### `.section` / `.section.alt` / `.section-tight`
Vertical rhythm for page sections. Use `.section.alt` to alternate background with `--surface`. Use `.section-tight` for transitions (3-4rem).

### `.eyebrow`
Mono, uppercase, letter-spaced, accent color, inline-block. Use above every h2 to label the section.

### `.btn` / `.btn-primary` / `.btn-accent`
Pill buttons. `.btn` is outline. `.btn-primary` is filled with `--text` (inverts on hover to `--accent`). `.btn-accent` is filled with `--accent`. All use uppercase mono-style letter-spacing and small font-size.

### `.capabilities`
Full-bleed strip with horizontal rules top and bottom. Each `<li>` is italic display type with right-border separator. Borders collapse on mobile (`<700px`).

### `.services-list` / `.service-row`
Single-column type-driven list. Each row: number (mono, accent) + h3 (italic display) + p (muted). Borders between rows. 80px number column.

### `.work-grid` / `.work-card` / `.thumb`
`auto-fit, minmax(280px, 1fr)` responsive grid. Each card is a vertical flex column (thumb + h3 + meta + p). Thumb is 4:3 aspect, surface bg, border, radius. Work cards have `min-width: 0` to prevent text overflow.

### `.case-preview` / `.case-hero` / `.case-stats` / `.case-steps`
Two-column case study preview. Collapses to one column `<900px`. `case-stats` is a 2x2 grid of label/value pairs. `case-steps` is a vertical list with 60px number column.

### `.process-list` / `.process-row`
Same pattern as `.case-steps` — 60px number + content. No borders at top of first row.

### `.about` / `.about-portrait` / `.about-tools`
Two-column: portrait (4:5) + bio. Tools are pill chips below bio. Collapses `<900px`.

### `.ai-support` / `.ai-card`
Two-column grid of border-top + h3 + p cards. Collapses `<700px`.

### `.contact` / `.contact-form`
Two-column: copy + form. Form fields are underline-style (border-bottom only) with focus state on accent. Collapses `<900px`.

### `.site-header` / `.site-header-inner` / `.brand` / `.nav` / `.nav-cta` / `.nav-toggle` / `.theme-toggle` / `.version-toggle`
Sticky header with backdrop-blur. Brand is a circle monogram + italic wordmark. Nav is horizontal links with theme + version pill toggles. Collapses to a hamburger menu `<900px`.

### `.site-footer`
Border-top, flex space-between. Two columns: brand + tagline on the left, research links on the right.

## Components (V1)

V1 (`v1-brand.css`) overrides most V2 component styles. Tokens:
- `--bg: #0d0f14` (warm near-black)
- `--surface: #161922`
- `--accent: #c69a6b` (gold)
- `--accent-hover: #d8a978`
- `--rose: #a5689a` (secondary, used sparingly)
- `--display: Playfair Display, ...` (italic display)
- `--body: Montserrat, Inter, ...` (geometric sans)
- `--radius: 18px` (large pill)
- `--radius-card: 14px` (chunky card corners)

V1 distinctive features:
- `.hero-tags` (eyebrow tag chips: "Artistic / Dark / Strong / Stylized")
- `.work-tag` (per-card category pill, top-left of thumb)
- `.card-corner` (gold L-bracket ornaments on each corner of the thumb)
- `.case-hero::before` and `.about-portrait::after` (gold corner brackets)
- 5-step horizontal process pipeline with gold `›` connectors (desktop only)
- `.work-card .thumb` radial gradient + subtle gold grid pattern (placeholder)
- `.work-card .meta` is a gold-bordered pill

V1 light mode (V1-Light) uses cream-tinted bg `#f4ede1` with same Playfair + Montserrat.

## Rules of the system

1. **No inline styles.** Use existing classes or utility classes (`.mt-2`, `.mt-3`).
2. **No arbitrary px values** in component rules — use `var(--space-N)` and `var(--text-N)`.
3. **All colors via tokens.** No hardcoded hex / rgba literals in component rules.
4. **V1 markup is hidden in V2** via the `:root:not([data-version="v1"])` selector at the top of `styles.css`. V1 rules then re-show them with `:root[data-version="v1"]`.
5. **Min-width: 0 on grid children** that contain long text (work cards, service rows, process rows, about, case steps) — prevents text overflow.
6. **overflow-wrap: break-word** on titles and long words.
7. **text-wrap: balance** on h1-h4.
8. **`<picture>` with WebP + JPG fallback** for any real images (when Lesly provides renders). Include `width` and `height`. Use `loading="eager" fetchpriority="high"` for above-fold hero only.
9. **Skip-link for a11y**: first focusable element on each page, points to `#top` (home) or `#main` (case study).
10. **`:focus-visible` ring** is global (`2px solid var(--accent)`, `offset: 3px`). Don't override without good reason.
11. **Respect `prefers-reduced-motion`** — `.reveal` and `html { scroll-behavior: smooth }` are disabled under it.

## Adding a new component

1. Add the markup to `index.html` and `case-study.html` (or a new page).
2. Add styles to `styles.css` (V2) using only the documented tokens.
3. If it needs V1 styling, add an override block at the bottom of `v1-brand.css`, scoped to `:root[data-version="v1"] { ... }`.
4. If it adds V1-only visual chrome, also add a hide rule to `styles.css` under the V1-only chrome block.
5. Test at 1440px, 1024px, 768px, 414px, 375px. Verify both V1 and V2 look correct.
6. Test with both light and dark themes.
7. Test keyboard navigation (Tab, Enter, Esc, arrow keys for filters).

## Common tasks

- **Edit copy** — update `index.html` / `case-study.html`. Section IDs (`#work`, `#services`, `#process`, `#about`, `#contact`) are load-bearing — don't change them.
- **Add a portfolio item** — add an `<a class="work-card" data-category="..." href="case-study.html?id=<slug>">` to the `.work-grid` in `#work`. Add the matching entry to the `.cs-related-grid` in `case-study.html`. Filter categories: `game`, `avatar`, `mascot`, `outfit`, `process` (space-separated multi-cat).
- **Change a color** — update the token at the top of `styles.css` (V2) or `v1-brand.css` (V1). Do not edit component rules.
- **Add a new theme** — add a new `:root[data-theme="..."]` block, add a `<button data-theme-set="...">` to the `.theme-toggle` in both pages.
- **Swap a placeholder for a real image** — see `CLAUDE.md` "Things to watch for" for the verify-first rule.
