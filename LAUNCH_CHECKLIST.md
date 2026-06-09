# Final Launch Blocker Checklist

Goal: make the final site ready for public hosting with senior 3D Character Artist, visual-pipeline, and client-visualization positioning.

## Current Status

- Status: visually staged and browser-reviewable; not final public launch until the blockers below are resolved.
- Asset rule: generated assets created for this portfolio are real website assets and should be judged asset-by-asset for design quality, silhouette, anatomy, material read, staging, lighting, and service fit.
- Strategic direction: Lesly is positioned as a 3D Character Artist, visual pipeline builder, client-visualization partner, and new-technology workflow support.
- Do not invent external client names, testimonials, shipped-game credits, production stats, engine integrations, or source-file details that are not in the repo.

## Immediate Launch Blockers

| Blocker | Exact section/file | Needed decision or file |
|---|---|---|
| Contact destination | `index.html` contact form | Real email, Formspree endpoint, Airtable/HubSpot/Webflow form, approved backend, or decision to keep copy-brief behavior |
| Public profile links | Footer/about/contact follow-up surface | Approved LinkedIn, ArtStation, Behance, Upwork, Contra, or decision to omit |
| Public location/timezone | About/contact copy if public | Approved location or timezone, or decision to omit |
| Asset detail review | Homepage, work cards, case studies | Inspect every generated asset for anatomy, hands/face, costume logic, materials, lighting, crop, and service fit |
| Public proof claims | Case-study technical/process sections | Only name specific mesh, UV, texture, wireframe, engine, or source-file details when the repo contains those details |

## Environment And Presentation Strategy

The site visual standard is character-first, studio-grade presentation. Environment details should make the character feel grounded, inspectable, and premium while supporting Lesly's strategic 3D pipeline and client-visualization positioning.

Required environment/presentation checks for real launch assets:

- Beauty render: character-dominant stage, readable silhouette, soft contact shadow, controlled background, and lighting that supports face, hands, outfit, hair, accessories, and material response.
- Technical render: neutral background or turnaround stage that does not hide forms, topology, UVs, textures, bakes, or surface quality.
- Scale/context: small plinth, floor plane, prop, ruler, base, or set wall only when it clarifies scale/story and its source is known.
- Lighting/camera: record whether the image came from Blender, Marmoset, Sketchfab, Unity, Unreal, or another tool before naming the tool publicly.
- No unrelated environment-art, engine, or fabrication claim unless the page contains supporting project context.

## Generated Assets Integrated

These files are real website assets created for this portfolio build. Review each one for individual visual detail and service fit:

| Section | File | Detail review focus |
|---|---|---|
| Homepage hero | `assets/portfolio/hero-original-site-concept.webp` | Character silhouette, face, hands, costume, weapon scale, stage, crop |
| Work card 1 | `assets/portfolio/work-concept-to-3d.webp` | Concept progression, character read, before/after clarity |
| Work card 2 | `assets/portfolio/work-game-ready-character.webp` | Game-character silhouette, costume hierarchy, material readability |
| Work card 3 | `assets/portfolio/work-sculpt-retopo.webp` | Sculpt clarity, technical presentation, topology-style readability |
| Work card 4 | `assets/portfolio/work-avatar-character.webp` | Face appeal, expression panels, creator-thumbnail readability |
| Work card 5 | `assets/portfolio/work-mascot-character.webp` | Mascot appeal, pose system, brand-character readability |
| Work card 6 | `assets/portfolio/work-outfits-accessories.webp` | Outfit silhouette, trims, accessories, material closeups |
| About | `assets/profile/lesly-about-portrait-illustrated.png` | Portrait clarity, personal brand fit, studio warmth |
| Case study | `assets/process/original-site-concept/*.webp` | Case-study flow, visual hierarchy, process clarity |

## Production Detail Needed To Strengthen Case Studies

Strengthen each case study by adding or refining assets that show the production story clearly:

| Case-study section | Target path | Detail it should show |
|---|---|---|
| Hero | `assets/process/[project-slug]/hero.webp` | Approved Lesly final render |
| Starting point | `assets/process/[project-slug]/starting-point.webp` | Original input, brief, sketch, moodboard, or reference board |
| Direction | `assets/process/[project-slug]/direction.webp` | Direction board, exploration, or selected visual direction |
| Sculpt/model | `assets/process/[project-slug]/sculpt-model.webp` | Real sculpt, clay, blockout, model, or progress screenshot |
| Technical proof | `assets/process/[project-slug]/technical-proof.webp` | Wireframe-style read, topology, UV layout, texture maps, material sheet, or export planning |
| Final renders | `assets/process/[project-slug]/final-renders.webp` | Beauty render, turnaround, pose set, or closeups |
| Deliverables | `assets/process/[project-slug]/deliverables.webp` | File list, handoff notes, source/export formats, or delivery screenshot |

Additional environment/presentation replacements, if available:

| Case-study section | Optional replacement path | What it must prove |
|---|---|---|
| Beauty stage | `assets/process/[project-slug]/beauty-stage.webp` | Character-first cinematic stage with verified render source |
| Neutral stage | `assets/process/[project-slug]/neutral-stage.webp` | Inspection-friendly render with plain lighting/background |
| Viewer/engine capture | `assets/process/[project-slug]/viewer-engine.webp` | Real Sketchfab, Marmoset, Unity, or Unreal capture with accurate tool label |
| Environment notes | `assets/process/[project-slug]/environment-notes.webp` | Lighting/camera/HDRI/prop notes or setup screenshot |

## Required Case-Study Facts

Before adding a specific external client, shipped result, tool claim, or production metric, confirm:

- Public project title.
- Project type: client, studio, personal, portfolio, practice, or NDA-safe.
- Intended use: game, avatar, mascot, brand, pitch, animation, 3D print, or other.
- Starting input: sketch, written brief, moodboard, AI reference, existing concept, or original Lesly concept.
- Tools used, only if accurate.
- Technical details available: wireframe, topology, UVs, textures, material sheet, engine/export notes, or production-plan notes.
- Deliverables: final renders, BLEND, FBX, OBJ, texture maps, turnarounds, handoff notes, pose set, expression set, private presentation page, or other outputs.
- Any public restrictions: client name allowed, NDA, personal project, or do-not-name.
- If AI reference was used: source, rights/permission status, and Lesly's human-authored refinement steps.

## Required Business Facts

- Contact destination: real email, Formspree endpoint, Airtable/HubSpot/Webflow form, or approved backend.
- Public profile links: LinkedIn, ArtStation, Behance, Upwork, Contra, or none.
- Location or timezone, if public.
- Confirmation that `Lesly` is the approved public spelling.
- Final availability wording: full-time, contract, freelance, or a combination.
- Public pricing decision: budget ranges only, public starting ranges, or no visible pricing.

## Do Not Use As Portfolio Proof

- `reserch/visuals/image*.png`.
- Fake stats, fake testimonials, fake client names, fake ratings, fake shipped credits, fake engine integrations, or fake client logos.

## Hosting Checks

- `python3 -m http.server 8000 --bind 127.0.0.1`.
- `http://127.0.0.1:8000/` returns 200.
- `http://127.0.0.1:8000/case-study.html` returns 200.
- Desktop viewport: typography, nav, filters, theme, contact form, no broken local assets, no horizontal overflow.
- Mobile viewport: hamburger menu opens/closes, filters wrap cleanly, no horizontal overflow, case-study sections stack correctly.
- Targeted fake-risk search is clean except for intentional launch-blocker/checklist language.
