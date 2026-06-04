# Lesly 3D Artist — Implementation Plan

**Status:** live working site, but text-only. This plan covers what to do before/after swap-in of real images and before pushing live.
**Updated:** 2026-06-04
**Owner of decisions:** the user. Owner of execution: Claude (this assistant) when invoked.

---

## 0. CRITICAL CORRECTION (added 2026-06-04)

**On re-verification, all 9 images in `reserch/visuals/image*.png` are FULL WEBSITE PAGE MOCKUPS, not character renders.** They show entire Direction 1 page designs (navigation, "GAMER PORT" header, "MY LATEST PROJECTS" gallery sections, "WORK PROCESS" pipelines, "STRATEGY MEETS CREATIVITY" case study pages) with embedded AI-generated character art. The character art inside the mockups is **NOT Lesly's actual portfolio work** — it's stock/AI-generated imagery.

**Consequence:** these mockups cannot be used as Lesly's portfolio on the live site. They were design reference for the V1 direction picker, not content.

**Action taken:** image swap-in from earlier this session was reverted (commit `533c476` reverted in `e8532ff`). Site is back to text-only placeholders.

**What we need from Lesly before the site can use real art:**
- Actual character renders (ZBrush/Marmoset output as JPG/PNG)
- Per-character turnaround sheets (front/side/back/3-4 view)
- Texture/material closeup sheets
- Wireframe over sculpt for at least 1-2 pieces
- A real portrait of Lesly for the About section
- For at least 1 detailed case study: sculpt screenshot, retopo wireframe, UV layout, bake maps, textured render, final presentation

Until these exist, the site stays text-only.

---

## 0. TL;DR (one screen)

- Site is structurally complete and live-previewable at `http://localhost:8765/`. Light/dark theme works, mobile nav works, portfolio filters work, form has a placeholder submit handler, work cards link to the case-study template.
- 9 mockup images are in `reserch/visuals/`. 16 placeholder slots need real art (7 on `index.html`, 9 on `case-study.html`).
- All copy is JD-aligned. Services order is correct. Hero, contact form, AI workflow support section all use the right positioning.
- The most load-bearing missing thing is **per-case-study content**. The site currently has 6 work cards but only 1 case study template with placeholder copy. Per the deep-research, case studies are the single highest-leverage change for FT hire.
- The next 4 weeks of work, in priority order: (1) image swap-in, (2) at least 1–2 real case studies, (3) form backend, (4) push live. Everything else is Phase 2+.

---

## 1. Audit — what's in place, what's broken, what's missing

### 1.1 What's in place and working

| Item | Status | Notes |
|---|---|---|
| Design system (Direction 4 — Quiet Premium) | ✓ | Cormorant Garamond + Inter + JetBrains Mono, terracotta accent, light/dark via `data-theme`, single-line minified JS |
| Single-page site (`index.html`) | ✓ | Hero, services, work, case-study preview, process, about, AI workflow support, contact |
| Reusable case study template (`case-study.html`) | ✓ | 5-part structure, 6-step process, per-stage tool credits, constraints stats, outcomes, related |
| Theme system with FOUC prevention | ✓ | Inline script in `<head>` reads `localStorage` before CSS loads |
| Mobile nav | ✓ | 900px breakpoint, hamburger toggle |
| Portfolio filters | ✓ | 6 categories (game, avatar, mascot, outfit, process, all) |
| Reveal-on-scroll | ✓ | `IntersectionObserver` with `prefers-reduced-motion` honored |
| Form submit handler | ⚠ Placeholder | Logs "connect this form to..." note. Real backend needed before launch. |
| JD-aligned copy throughout | ✓ | Title, services, form fields, AI framing — all match `upgrade-jd-aligned-website-copy.md` and `final-ai-workflow-update.md` |
| 4-direction design picker | ✓ | `reserch/design-directions.html` kept in repo for reference |
| Git history clean | ✓ | Latest commit `378eeb2` on top of origin/main, not yet pushed |
| `CLAUDE.md` project doc | ✓ | Reflects V2 architecture, new class names, theme system, slug list |
| `.claude/skills/` (8 project-local) | ✓ | No global pollution |
| 9 mockup images in `reserch/visuals/` | ✓ | 1.6–2.4 MB each, 1536×1024 (image.png is 1672×941) |

### 1.2 What's missing or broken

| Item | Status | Severity | What it needs |
|---|---|---|---|
| Real images in placeholders | ✗ 16 slots text-only | **High** | Image swap-in (Section 2 below) |
| Per-case-study content | ✗ Template only | **Critical for FT hire** | Real project descriptions, stats, process captions |
| Form backend | ✗ Placeholder handler | **High** | Formspree, Airtable, HubSpot, Webflow Forms, or custom |
| Lesly portrait | ✗ `image7.png`/`image8.png` in visuals but not referenced | Medium | Confirm which one is the portrait, drop in About section |
| Real Lesly bio | ⚠ Generic | Medium | Bio facts, painting background details, location, years of experience |
| Contact email | ✗ Form posts to nothing | **High** | Real email or backend URL |
| Social links (LinkedIn, ArtStation, Behance, Upwork) | ✗ Footer has none | Medium | URLs |
| Meta OG image / favicon | ✗ | Low | Drop a `reserch/visuals/image*.png` into `og-image.png` and `favicon.ico` |
| `README.md` describes deploy | ⚠ Stale (mentions V1) | Low | Update |
| Lighthouse / a11y / performance pass | ✗ Not run | Medium | Run via `webapp-testing` skill after image swap |
| LinkedIn profile / ArtStation / Behance / Upwork / Contra | ✗ None built | High (if acquisition matters) | Per `reserch/linkedin-profile-v2.md`, `reserch/upgrade-jd-aligned-linkedin.md` |
| PDF portfolio | ✗ | Medium | `canvas-design` skill |
| Real testimonials / client logos | ✗ | Low (none available) | If Lesly has past clients, collect quotes; otherwise skip |

### 1.3 Inconsistencies to flag

1. **Service order — two competing versions in `reserch/`:**
   - `upgrade-jd-aligned-website-copy.md` (the JD-aligned one, currently in `index.html`): Modeling → Game-Ready → Avatars → Outfits → Sculpt/Retopo/UV/Texture → Delivery
   - `version-2-website-materials.md` and `platform-strategy.md`: Concept-to-3D → Game-Ready → Avatar/VTuber → Outfits → Mascot → AI Art Direction

   **The current site uses the JD-aligned order**, which is the safer choice for FT hire. The version-2 order leads with the flagship "Concept / AI Reference → 3D" offer, which is the right move for freelance conversion but creates AI-led framing that risks the FT funnel. **Recommendation: keep current order, but consider adding a "Concept-to-3D" callout above the services list to satisfy both audiences.** Open question below.

2. **Mockup image — `image.png` is gold-on-black editorial; the rest are 1536×1024.**
   - I could only view `image.png` this session — the 3-column gold-on-black hero with character in center, Anton + Playfair, fashion-magazine layout. That aesthetic is Direction 1.
   - We picked Direction 4 (cream, Cormorant Garamond italic, terracotta accent) instead. The 8 unseen images probably match the editorial aesthetic of `image.png` (the user said they all dropped in the same session).
   - **Risk:** the images are likely gold-on-black editorial. Cream Quiet Premium might frame them awkwardly. Section 2 below recommends a re-check when real swapping begins.

3. **Mockup count vs visual-index count:** `visual-index.md` lists 12 visuals, but only 9 PNG files are in `reserch/visuals/`. The 3 missing are likely 07 (Lesly portrait — user-provided), 08 (Lesly full-body — user-provided), 12 (brand identity / social kit). Worth confirming.

4. **CLAUDE.md is updated, README.md is stale.** README still describes V1 architecture. Should be updated to match V2.

---

## 2. The image integration plan

### 2.1 Inventory

**9 mockup images, all in `reserch/visuals/`:**

| File | Dimensions | Size | What I know |
|---|---|---|---|
| `image.png` | 1672×941 | 1.6 MB | **Confirmed: gold-on-black editorial, 3-col hero, character center** |
| `image2.png` | 1536×1024 | 2.4 MB | Unseen — likely editorial variant |
| `image3.png` | 1536×1024 | 2.4 MB | Unseen — likely editorial variant |
| `image4.png` | 1536×1024 | 2.0 MB | Unseen |
| `image5.png` | 1536×1024 | 2.1 MB | Unseen |
| `image6.png` | 1536×1024 | 1.9 MB | Unseen |
| `image7.png` | 1536×1024 | 2.3 MB | Unseen — possibly Lesly portrait (per visual-index) |
| `image8.png` | 1536×1024 | 2.1 MB | Unseen — possibly Lesly full-body (per visual-index) |
| `image9.png` | 1536×1024 | 2.2 MB | Unseen |

**16 placeholder slots, 9 images — some images will be reused.**

### 2.2 Slot-by-slot mapping (best guess, needs verification)

The mapping below assumes `image2-image9` follow the same editorial aesthetic as `image.png` and roughly map to the 12 visuals in `visual-index.md`. The user should confirm or correct this when reviewing the plan.

| Slot | Where | Current text | Proposed image | Rationale |
|---|---|---|---|---|
| **Homepage hero** | `index.html` (added under the hero copy) | n/a (no hero image currently) | `image.png` | The hero render is the natural use of the strongest 3-col character render |
| **Work card #1** Game-Ready Character | `index.html` `.work-grid` | `[Final + wireframe]` | `image3.png` or `image4.png` (final render w/ wireframe overlay) | Visual index #02 = "Portfolio case-study layout" |
| **Work card #2** Sculpting to Retopology | `index.html` `.work-grid` | `[Sculpt → low-poly]` | `image5.png` (sculpt + retopo layout) | Visual index #03 = "Process breakdown" |
| **Work card #3** Avatar Character | `index.html` `.work-grid` | `[Avatar + expressions]` | `image6.png` (avatar presentation) | Avatar render |
| **Work card #4** Mascot Character | `index.html` `.work-grid` | `[Mascot + pose set]` | `image2.png` (mascot layout) | Mascot render |
| **Work card #5** Outfits | `index.html` `.work-grid` | `[Outfit variations]` | (no image, or reuse outfit mockup) | Likely covered by one of the layout images |
| **Work card #6** PBR Texturing | `index.html` `.work-grid` | `[Texture maps]` | (texture sheet layout) | Visual index #02 includes texture detail |
| **About portrait** | `index.html` `.about-portrait` | `[Lesly portrait — ref photo]` | `image7.png` OR `image8.png` (user-provided) | Visual index #07/#08 — user must confirm which is which |
| **Case study hero bg** | `case-study.html` `.cs-hero-bg` | `[Final 16:9 render — drop image here]` | `image.png` (full-bleed 16:9) OR `image3.png` | The cinematic case-study hero should be the strongest character render |
| **CS step 01 — Sculpt** | `case-study.html` `.cs-process .cs-step .ph` × 6 | `[Sculpt screenshot]` etc. | (need 6 process-step images, but only 9 total) | If process breakdown is in `image5.png`, that one image covers 1 step; the other 5 steps need crops or new images |

**Mapping problem:** the case study has 6 process steps and the homepage has 6 work cards. We have 9 images total. 1 is for the homepage hero, 1 is for the about portrait, 1 is for the case study hero. That leaves 6 images for 12 placeholder slots (6 work cards + 6 process steps). The case study will need to use smaller crops or repeat the hero image at lower resolution for the 6 process steps. **This is a real content gap — the user needs more process-step images, or the case study needs to use only 2–3 process steps instead of 6.**

### 2.3 How to integrate the images — the technical pattern

**The pattern is:** replace the placeholder `<div>` block with an `<img>` element. Add `loading="lazy"` (except hero — `loading="eager"` + `fetchpriority="high"`). Add proper `alt` text. Add `width`/`height` to prevent layout shift.

**Example for the hero image** (in `index.html`, after the hero copy):

```html
<img
  class="hero-image"
  src="reserch/visuals/image.png"
  alt="Stylized 3D character render — final hero presentation"
  width="1672" height="941"
  loading="eager" fetchpriority="high"
/>
```

**Example for a work card thumbnail** (replacing the `<div class="thumb">`):

```html
<img
  class="thumb"
  src="reserch/visuals/image3.png"
  alt="Game-Ready Character — final render with wireframe overlay"
  width="1536" height="1024"
  loading="lazy"
/>
```

**For the case study process steps:** same pattern, but the 4:3 crop ratio of `image3-image9` doesn't match the case study's process layout (which currently uses `.ph { aspect-ratio: 4/3 }`). The images are 1536×1024 = 3:2. Add `object-fit: cover` to crop them or change the aspect ratio. For steps that are full-bleed, `object-fit: cover` is the right call.

**Add the necessary CSS** (1 block in `styles.css`):

```css
.hero-image {
  display: block;
  width: 100%;
  height: auto;
  max-width: var(--max);
  margin: 2.5rem auto 0;
  border-radius: var(--radius-card);
}
.work-card .thumb {
  /* replace the current placeholder div background */
  padding: 0;       /* remove placeholder padding */
  border: 0;        /* remove placeholder border */
  overflow: hidden;
}
.work-card .thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;  /* cards are 4:3, images are 3:2 — cover crops */
}
.case-hero-bg,
.cs-hero-bg {
  background-size: cover;
  background-position: center;
}
.cs-process .cs-step-media .ph img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-card);
}
.about-portrait {
  padding: 0;
  overflow: hidden;
}
.about-portrait img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 2.4 Image optimization (before swap-in)

- PNGs at 1.6–2.4 MB are too heavy for production. Each should be converted to WebP (~80% size reduction) and a smaller fallback JPG.
- Tools: `cwebp` (CLI) or `sips` on macOS. Recommended target: <300 KB per image, max 600 KB for hero.
- Add `<picture>` element with WebP source + PNG fallback, or just use a single optimized format and accept the small loss.
- Add explicit `width` and `height` attributes to prevent CLS (Cumulative Layout Shift).

### 2.5 What I'd recommend instead of "swap in everything"

The research-validated pattern is **3 detailed case studies + 6 work cards** (per `reserch/visual-assets-checklist.md` "Must-have visual assets"). The case study is the load-bearing thing.

**Concrete recommendation:** start with **1 detailed case study + the 6 work cards** before doing the case study for all 6 slugs. This:

- Tells the recruiter skim story immediately (work grid is full, one card leads to a real case study)
- Saves time (1 case study is 4 hours of writing + image prep, 6 is 24 hours)
- Is the natural "ship first, iterate" approach
- Lets you decide whether the second/third case studies are worth writing based on whether the first gets you interviews

---

## 3. Data audit — every placeholder, every field

### 3.1 Placeholders currently in the site (16 total)

**`index.html` (7):**
1. Hero — no image currently (add `image.png`)
2. Work card 1: `[Final + wireframe]`
3. Work card 2: `[Sculpt → low-poly]`
4. Work card 3: `[Avatar + expressions]`
5. Work card 4: `[Mascot + pose set]`
6. Work card 5: `[Outfit variations]`
7. Work card 6: `[Texture maps]`
8. About portrait: `[Lesly portrait — ref photo]`

That's 8, not 7. Let me recount after the swap-in.

**`case-study.html` (9):**
1. `.cs-hero-bg`: `[Final 16:9 render — drop image here]`
2. `.cs-step` #1: `[Sculpt screenshot]`
3. `.cs-step` #2: `[Wireframe over sculpt]`
4. `.cs-step` #3: `[UV layout]`
5. `.cs-step` #4: `[Bake maps]`
6. `.cs-step` #5: `[Textured character]`
7. `.cs-step` #6: `[Final render]`
8–9. 2× related `.thumb` blocks (low priority — these can stay as text placeholders)

### 3.2 Real data we have vs. don't have

| Data point | Source | Status |
|---|---|---|
| **Positioning line** | `upgrade-jd-aligned-website-copy.md` | ✓ in site |
| **Title** ("3D Character Artist") | `final-ai-workflow-update.md` | ✓ in site |
| **Service list** | `upgrade-jd-aligned-website-copy.md` | ✓ in site, in correct order |
| **Process** (5 steps) | `version-2-website-materials.md` | ✓ in site |
| **About bio** (paragraphs) | `version-2-website-materials.md` "About Page Copy" section | ✓ in site (generic; should be personalized) |
| **Contact form fields** | `version-2-website-materials.md` "Start a Project Page Requirements" | ✓ in site, all 6 fields |
| **Form budget tiers** | `version-2-website-materials.md` | ✓ in site |
| **Project type options** | `upgrade-jd-aligned-website-copy.md` | ✓ in site |
| **AI workflow support language** | `final-ai-workflow-update.md` | ✓ in site |
| **Hero copy** | `upgrade-jd-aligned-website-copy.md` | ✓ in site |
| **Real Lesly bio details** | (none in repo) | ✗ Generic; needs Lesly's actual years, location, painting background specifics, education |
| **Email address** | (none) | ✗ |
| **Phone / preferred contact** | (none) | ✗ |
| **Location / timezone** | (none) | ✗ Helps with US-remote work positioning |
| **Real project case studies** | (none) | ✗ The single biggest gap |
| **Testimonials / quotes** | (none) | ✗ |
| **Past client names** | (none) | ✗ Even 2–3 logos = trust signal |
| **Lesly's portrait** | (assumed `image7.png` or `image8.png`) | ⚠ |
| **Lesly's full-body / lifestyle** | (assumed `image8.png` or `image7.png`) | ⚠ |
| **Logo / wordmark** | none | ✗ Site uses text "L" mark in header — that's a brand mark, not a logo. Real logo is optional. |
| **CV / resume PDF** | none | ✗ |
| **Social handles** (LinkedIn, ArtStation, Behance, Upwork, Contra) | none | ✗ |
| **Pricing tiers / starting prices** | none | ✗ $100/hr positioning requires visible pricing indicators, even if ranges |
| **Availability status** | (none) | ✗ "Available / 2-week wait / Booked" signal is high-conversion |
| **Response time promise** | (none) | ✗ "I respond within 24h" is a strong trust signal |
| **Languages spoken** | (none) | ✗ |

### 3.3 What's most important to get from the user before launch

In priority order:

1. **Per-case-study content for at least 1 work card** (game-hero or whichever is strongest). Without this, the FT-hire funnel breaks.
2. **Email address or backend choice** (where the contact form should send data).
3. **Real bio details** (2-3 sentences with specifics: years of painting, years of 3D, location, tool fluency).
4. **Lesly portrait confirmation** (which of `image7.png` / `image8.png` is the portrait).
5. **At least 2-3 social handles** for the footer.
6. **Availability status** (Available / 2-week wait / Booked through X).
7. **Pricing tiers** (visible in services or in a dedicated section — even rough ranges).

---

## 4. Skills audit

### 4.1 The 8 installed skills

| Skill | Origin | Used for | Used so far | Will use for |
|---|---|---|---|---|
| **`3d-character-artist-portfolio`** | Built locally | Segment positioning, copy, case-study anatomy, package framing, red-flag patterns, Lesly-specific facts | Yes — drafted services, copy audits | Yes — every copy edit |
| **`humanizer`** (blader v2.7.0) | MIT | 30-pattern detection + 3-pass rewrite to remove AI writing tells | Not yet | Yes — before any copy goes live |
| **`frontend-design`** | Anthropic official | Anti-AI-slop frontend UI guidance | Indirectly (V2 rebuild applied it) | Yes — when refining components |
| **`canvas-design`** | Anthropic official | PDF portfolio cover, social banner, poster design | Not yet | Yes — for the PDF portfolio (Phase 2) |
| **`theme-factory`** | Anthropic official | 10 pre-set color/font themes for artifacts | Not yet | **Unlikely** — design tokens are locked. Could be removed. |
| **`threejs-fundamentals`** | CloudAI-X | Three.js scene setup | Not yet | **Probably not** — Sketchfab `<iframe>` is the chosen 3D viewer path |
| **`threejs-loaders`** | CloudAI-X | GLTF/texture/model loading | Not yet | **Probably not** — same as above |
| **`webapp-testing`** | Anthropic official | Playwright-based end-to-end testing | Not yet | Yes — Lighthouse, a11y, link checking before push |

### 4.2 Skills we use vs. don't

**Use heavily:** `3d-character-artist-portfolio`, `frontend-design`, `webapp-testing`
**Use sometimes:** `humanizer`, `canvas-design`
**Probably never:** `theme-factory`, `threejs-fundamentals`, `threejs-loaders`

### 4.3 Skills we still need

**None strictly required.** But two are worth considering if budget allows:

1. **An image optimization skill** — for the PNG→WebP conversion, srcset generation, responsive image variants. Currently I'd do this with `sips` and manual `<picture>` markup. A dedicated skill would speed up Phase 1 (image swap-in) significantly.

2. **A copywriting / conversion audit skill** — for the 6-second recruiter skim audit. The `3d-character-artist-portfolio` skill gives the rules; we'd want a tool that scores copy against them. (The `humanizer` skill is the closest, but it's about AI-tell removal, not conversion.)

Both are nice-to-have, not blocking. Recommendation: **don't add skills until we hit a specific gap.**

### 4.4 Skill-to-task routing (for the rest of this plan)

| Task | Primary skill | Secondary |
|---|---|---|
| Hero / services / process / about copy edits | `3d-character-artist-portfolio` | `humanizer` |
| AI-tell removal pass on any new copy | `humanizer` | — |
| HTML / CSS / JS visual layer | `frontend-design` | — |
| Image swap-in (HTML markup, CSS, optimization) | `frontend-design` | — |
| Form backend wiring | (none — direct code) | — |
| Lighthouse / a11y / link-check before push | `webapp-testing` | — |
| PDF portfolio (Phase 2) | `canvas-design` | `3d-character-artist-portfolio` |
| LinkedIn profile (Phase 3) | `3d-character-artist-portfolio` | `humanizer` |
| Upwork / Contra / ArtStation / Behance profiles (Phase 3) | `platform-strategy.md` (already in `reserch/`) | `3d-character-artist-portfolio` |

---

## 5. Implementation roadmap

### Phase 0 — Audit & alignment (this doc)

**Status:** ✓ complete.
**Output:** this file (`reserch/implementation-plan.md`).
**Owner:** Claude.
**Next action:** user reviews, answers the open questions below.

---

### Phase 1 — Image integration + case study content (highest priority)

**Goal:** The site looks like a real portfolio, not a template. Recruiter and freelance-client can navigate the FT funnel and the paid-inquiry funnel without seeing placeholder text.

**Tasks (in order):**

1. **Optimize the 9 mockup PNGs** → WebP + JPG fallback, target <300 KB each.
   - Owner: Claude. Skill: `frontend-design` for image patterns; manual `sips` or `cwebp` for conversion.
   - Deliverable: `reserch/visuals/image*.webp` + `reserch/visuals/image*.jpg` alongside the originals. Originals stay as master.

2. **Confirm the 9-image-to-12-visual mapping** (which image is the portrait, which is the case-study hero, etc.).
   - Owner: user. Claude provides a best-guess mapping in Section 2.2 above; user confirms or corrects.
   - Blocker: until this is confirmed, the swap-in is guesswork.

3. **Write per-case-study content for at least 1 slug** (recommend `game-hero`).
   - Owner: user writes the project facts; Claude formats it into the template.
   - Inputs needed from user: project name, character description, brief, the 4 goals, 6-step process captions (or a paragraph to expand into 6), the deliverables file list, where it shipped.
   - The case study is where the FT-hire funnel lives. Don't ship without at least 1.
   - Skills: `3d-character-artist-portfolio` for the 7-part anatomy; `humanizer` to clean the resulting copy.

4. **Swap in real images** in `index.html` (7 placeholders) and `case-study.html` (8-9 placeholders).
   - Owner: Claude.
   - Deliverable: all 16 placeholder blocks replaced with `<img>` elements, proper `alt` text, `width`/`height`, `loading="lazy"` (or `eager` for hero).
   - Skills: `frontend-design`.

5. **Update README.md** to reflect V2 architecture.
   - Owner: Claude. 5-minute task.
   - Deliverable: `README.md` updated.

6. **Run a Lighthouse / a11y / link-check pass** on the live preview.
   - Owner: Claude. Skill: `webapp-testing`.
   - Deliverable: any issues fixed (likely: missing `alt` text, image sizes, contrast in dark mode, keyboard nav).

**Acceptance criteria for Phase 1:**
- The 6-second recruiter skim works: hero → name + role + level + 1 work card in 6 seconds, with no placeholder text visible
- Clicking the first work card shows a real case study (not a template)
- The About section shows Lesly's portrait, not a placeholder block
- Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices, SEO
- All images have `alt` text
- No `console.log` left over
- No broken links

**Estimated effort:** 1 working day, mostly waiting on user for case study content + image mapping confirmation.

---

### Phase 2 — Form backend + push live

**Goal:** Real inquiries land in Lesly's inbox (or CRM). Site is publicly accessible.

**Tasks:**

1. **Choose a form backend.** Options:
   - **Formspree** (free tier, no signup friction, posts to email) — recommended for fastest setup
   - **Airtable** (free tier, structured data, easy to export)
   - **HubSpot** (free CRM, lead routing)
   - **Webflow Forms** (only if moving to Webflow hosting)
   - **Custom endpoint** (most flexible, most work)

2. **Wire the backend** in `script.js`:
   - Replace the placeholder submit handler
   - Add a `data-endpoint` attribute to the form, or hardcode the URL
   - Add proper success / error UI states (currently the form just shows a note)

3. **Add the Lesly email address** to the form's success state (so people who can't wait can email directly).

4. **Push to GitHub.** The latest commit is on local `main`. `git push origin main` deploys via GitHub Pages. Verify at `https://dimasyankauskas.github.io/Lesly3dArtis/`.

5. **Test the live form** end-to-end.

6. **Add social handles to the footer** (LinkedIn, ArtStation, Behance, Upwork — whichever Lesly has).

**Estimated effort:** half a day.

---

### Phase 3 — 6-second recruiter skim audit

**Goal:** Validate that the site actually wins the FT filter. This is the research-validated load-bearing thing.

**Tasks:**

1. **Pick 2-3 real US game-studio character-artist JDs** (Riot, Insomniac, WildBrain, indie, etc.). `reserch/research-jd-references.md` has 10 JDs; pick 2-3 from there.

2. **Time the skim.** Open the site, start a 6-second timer, look at the hero. Does the role + level + work come through? If not, fix.

3. **Audit per the `3d-character-artist-portfolio` skill's red-flag list.** Run `humanizer` on the live copy. Check every section against the "What recruiters actually look for" rubric (turnarounds, wireframes, texture sheets, etc.).

4. **Audit per the FT-recruiter 3/5 score on Direction 4.** This was a known trade-off. The audit may surface that we need to bias back toward Direction 2 or 3 for the FT funnel, or add a "production proof" section above the fold.

5. **Optionally: have a real recruiter or industry contact review.** A 5-minute conversation beats any audit.

**Estimated effort:** half a day.

---

### Phase 4 — Real case studies for the other 5 work cards

**Goal:** All 6 work cards lead to real case studies, not templates.

**Tasks (per case study):**
- User writes the project facts
- Claude formats into the case-study template
- Images: use the relevant mockup, or add new process-step images
- Apply `humanizer` to clean copy

**Effort:** 2-3 hours per case study. 5 to go = 10-15 hours total.

**Priority order:** start with the cards most likely to be clicked (game-hero, avatar-character, mascot-character).

---

### Phase 5 — Acquisition layer (per `version-2-website-materials.md` Phase 3)

**Goal:** Upwork, Contra, ArtStation, Behance, LinkedIn profiles. All aligned with the site.

**Tasks:**
1. **LinkedIn profile** (per `reserch/upgrade-jd-aligned-linkedin.md` and `reserch/linkedin-profile-v2.md`).
2. **Upwork profile** + 2-3 narrow gigs (Concept-to-3D, Game-Ready, Mascot).
3. **Contra storefront** with 5 packages (per `3d-character-artist-portfolio` skill's package framing).
4. **ArtStation** with the same 6 case studies + extras (turnarounds, sculpt details, wireframes, texture sheets).
5. **Behance** with 1-2 visual case studies (Problem / Direction / Exploration / 3D Process / Final / Deliverables / Use case).

**Effort:** 2-3 days, mostly content writing.

---

### Phase 6 — Authority layer (per `version-2-website-materials.md` Phase 4)

**Goal:** 7 pieces of content that establish Lesly as a "voice" in the space.

**Tasks:**
- 3 posts on AI-to-3D workflow
- 3 posts on production breakdowns
- 1 long-form article: "Why AI images still need a 3D character artist"
- 1 long-form article: "What makes a 3D character game-ready?"

**Where they go:** LinkedIn, ArtStation blog, dev.to, Medium, the site's optional `/insights/` page.

**Effort:** 1-2 days.

---

### Phase 7 — PDF portfolio (optional but high-leverage)

**Goal:** A 6-page PDF that mirrors the case-study anatomy. For email pitches, applications, conferences.

**Tasks:**
- Use `canvas-design` skill to design the cover
- One project per page (Problem, Direction, Process, Final, Deliverables)
- 3-4 case studies
- Save as `Lesly-3D-Character-Artist-Portfolio.pdf` in the repo

**Effort:** 1-2 days.

---

## 6. The 6-second recruiter skim — what reads, what doesn't

Per the deep-research findings, the FT recruiter filter is 6-15 seconds. Direction 4 scored 3/5 on this. Here's the current state:

### 6.1 What reads in the first 6 seconds (current site)

- **"3D Character Artist"** — eyebrow in the hero, top-left. ✓ Clear role.
- **"Game-Ready Characters, Avatars, Mascots, Outfits & Accessories."** — large italic H1 in the hero. ✓ Clear scope.
- **"Lesly creates 3D characters and character assets from sketches, moodboards, written briefs, AI references, and existing concepts..."** — visible lead text. ✓ Clear service.
- **"Start a Project"** + **"View Work"** — both CTAs visible above the fold. ✓ Clear next step.
- **The capabilities strip** (Character Modeling, Sculpting, Retopology, UV Mapping, PBR Texturing, Blender · ZBrush · Substance) is visible right after the hero. ✓ Tools confirmed.

### 6.2 What does NOT read in 6 seconds

- **No character render in the hero.** The hero is type-only. This is the single biggest "I am a 3D character artist" signal that the page is missing. The 3D visual proof isn't visible until you scroll past the hero, capabilities, and into the work section.
- **No production signal in the first 1-2 screens.** Triangle counts, texture sets, engine targets — the things recruiters scan for in <2 seconds — are only visible in the case-study preview (4th screen) or by clicking into a case study. A recruiter who doesn't scroll past the second screen will not see them.
- **No testimonials, client logos, or "shipped at" line.** A single line like "Characters shipped at [Studio X], [Studio Y], [Game Z]" would be the highest-leverage trust signal. We don't have those yet.

### 6.3 Recommended fixes (pre-launch)

1. **Add a character render to the hero.** Either:
   - Add `image.png` (the 3-col gold-on-black editorial) as a full-width image below the hero copy, OR
   - Switch the hero to a 2-column split (left = copy, right = image) so the character is visible above the fold
2. **Add a "production proof" strip** between the capabilities strip and the work section. 4 small inline stats: "X characters shipped" / "Avg 18k tri count" / "ZBrush + Maya + Substance" / "UE5 / Unity ready"
3. **Surface the constraints stats in the case-study preview** (currently on the homepage) — make them more prominent
4. **Add a one-line "characters shipped at..."** with 2-3 client names or "personal + commissioned projects" if no shipped projects yet

These fixes all fit the Direction 4 aesthetic (cream + terracotta, type-driven) without losing the boutique feel.

---

## 7. Open questions for the user

These are the decisions that block Phase 1 work. The fewer of these you answer up front, the more iteration cycles we burn.

### Critical (block Phase 1)

1. **Which `image7.png` / `image8.png` is the Lesly portrait?** (or is neither, and the portrait is missing entirely?)
2. **Can you provide at least 1 real case study's project facts** (project name, character description, brief, goals, process captions, deliverables)? Even a paragraph per section is enough — I'll format it.
3. **Form backend choice:** Formspree / Airtable / HubSpot / Webflow / custom / skip for now?
4. **Hero image:** use `image.png` (the 3-col gold-on-black) or a different image? (Aesthetic mismatch risk — Direction 4 is cream, the image is gold-on-black.)
5. **Per-case-study approach:** start with 1 detailed case study (recommended) or all 6 templates filled in with thin content?

### High (block Phase 2 / push live)

6. **Email address** for the form to post to (or backend choice if not email).
7. **Real bio details** for the About section: years of painting, years of 3D, location, education, anything that adds proof.
8. **Social handles:** which platforms (LinkedIn, ArtStation, Behance, Upwork, Contra) and the URLs.
9. **Availability status:** Available / 2-week wait / Booked through [date]?
10. **Pricing:** rough starting price or price ranges visible on the site? Or "request quote" only?

### Medium (block Phase 3+)

11. **Service order:** keep the current JD-aligned order (Modeling → Game-Ready → Avatars → Outfits → Sculpt/Retopo/UV/Texture → Delivery) or switch to the version-2 / platform-strategy order (Concept-to-3D → Game-Ready → Avatar → Outfits → Mascot → AI Art Direction)?
12. **Concept-to-3D callout:** add a "Concept-to-3D" flagship offer above the services list, or keep services as equal-weight list items?
13. **"Characters shipped at..." line:** real client/studio names, or "personal + commissioned projects"?
14. **PDF portfolio:** when? (Phase 7, but worth scoping now if it's a priority.)
15. **LinkedIn profile:** same scope (Phase 5), or sooner?

### Low (defer)

16. **Languages spoken** for the About section.
17. **CV / resume PDF** download link.
18. **OG image / favicon** — drop one of the 9 images in.
19. **`theme-factory` skill** — keep or remove from `.claude/skills/` (unused).

---

## 8. Summary

**Site state:** structurally complete, Direction 4, light/dark theme, JD-aligned copy, working local preview, committed to local main, not yet pushed.

**Top 3 priorities:**
1. **Image swap-in** (Phase 1, Task 4) — 1-2 hours once the mapping is confirmed
2. **1 real case study** (Phase 1, Task 3) — 2-4 hours once the user provides project facts
3. **Push live** (Phase 2) — 30 minutes

**Biggest content gap:** per-case-study content. The site is built for case studies to be the load-bearing FT-hire asset, and they're still templates.

**Biggest risk:** aesthetic mismatch. The mockups are likely gold-on-black editorial (Direction 1 aesthetic); we picked cream Quiet Premium (Direction 4). When the images go in, check the hero — if it looks off, consider re-evaluating the direction choice.

**Biggest leverage opportunity:** the 6-second recruiter skim audit (Phase 3). The 3/5 FT-recruiter score on Direction 4 was a known trade-off; if the audit shows it actually hurts the funnel, switching to Direction 3 (Studio Reel — 5/5 FT) is a 4-hour rebuild.

**Skill coverage:** adequate. No new skills required. `theme-factory` and the `threejs-*` skills are unused and could be removed.

**Next action:** user reviews this plan, answers the 5 critical open questions in Section 7, and we start Phase 1.
