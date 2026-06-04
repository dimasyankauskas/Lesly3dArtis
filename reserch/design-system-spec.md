# Design System Spec — Lesly Website

## Brand direction

**Brand feel:** cinematic, premium, artistic, warm, polished, character-driven.

**Visual keywords:** dark studio, gold accents, soft cream typography, cinematic character renders, refined portfolio layout.

Core positioning line:

> 3D Character Artist & AI-Assisted Visual Designer creating production-ready characters, avatars, mascots, and visual assets for games, creators, startups, and brands.

---

## Color system

| Token | Color | Usage |
|---|---:|---|
| `--color-bg` | `#0D0F14` | Main website background |
| `--color-surface` | `#161922` | Cards, sections, panels |
| `--color-surface-soft` | `#1E222B` | Secondary cards, form fields |
| `--color-border` | `#2B2A2F` | Card borders, dividers |
| `--color-gold` | `#C69A6B` | Primary accent, buttons, icons |
| `--color-gold-soft` | `#E3C7A5` | Hover states, highlights |
| `--color-text` | `#F2F2F2` | Main text |
| `--color-muted` | `#B9B5AF` | Secondary text |
| `--color-subtle` | `#7C7670` | Captions, metadata |
| `--color-rose` | `#A5689A` | Optional creative accent |

---

## Typography

### Display font

**Playfair Display** — large headings, hero titles, portfolio titles, section headers.

### Body / UI font

**Montserrat** — body copy, buttons, navigation, labels, cards, and forms.

---

## Type scale

### Desktop

| Style | Size | Line Height | Weight | Usage |
|---|---:|---:|---:|---|
| Hero H1 | 72–96px | 0.95–1.05 | 500–600 | Homepage hero |
| Page H1 | 56–72px | 1.05 | 500 | Page titles |
| Section H2 | 40–56px | 1.1 | 500 | Major sections |
| Card H3 | 22–28px | 1.2 | 600 | Service cards, portfolio cards |
| Body Large | 18–20px | 1.6 | 400 | Hero paragraphs |
| Body | 16px | 1.6 | 400 | Standard text |
| Small | 14px | 1.5 | 400–500 | Captions, metadata |
| Label | 12–13px | 1.4 | 600 | Eyebrows, tags, buttons |

### Mobile

| Style | Size |
|---|---:|
| Hero H1 | 44–52px |
| Page H1 | 40–48px |
| Section H2 | 32–40px |
| Card H3 | 20–24px |
| Body | 15–16px |
| Small | 13–14px |

---

## Grid system

### Desktop

- Max container width: `1280px`
- Page padding: `32px`
- Columns: `12`
- Gutter: `24px`
- Section spacing: `96px–140px`

### Tablet

- Page padding: `24px`
- Columns: `8`
- Gutter: `20px`
- Section spacing: `72px–96px`

### Mobile

- Page padding: `20px`
- Columns: `4`
- Gutter: `16px`
- Section spacing: `56px–72px`

---

## Reusable components

- Header
- Footer
- HeroPrimary
- HeroSplit
- SectionIntro
- ServiceCard
- PortfolioCard
- ProcessStepCard
- TestimonialCard
- CTASection
- ProjectBriefForm
- ToolIconGrid
- StatsBar
- TagPill
- FilterPill
- ImagePanel
- CaseStudyBlock
- BeforeAfterBlock

---

## Homepage layout

```text
[ Header ]

[ Hero Split ]
Left:
- Eyebrow
- H1
- Short copy
- CTA buttons
- Service tags

Right:
- Lesly portrait / character artwork

[ Trusted By / Client Types ]
[ Featured Work Grid ]
[ Services ]
[ Process ]
[ Why Work With Lesly ]
[ About Preview ]
[ CTA Band ]
[ Footer ]
```

---

## Design principles

1. Lead with outcomes, not tools.
2. Use fewer, stronger images.
3. Make every section support conversion.
4. Keep AI positioned as a workflow enhancement, not the main product.
5. Show process to build trust.
6. Use dark cinematic visuals, but keep text readable.
7. Make the “Start a Project” path obvious everywhere.