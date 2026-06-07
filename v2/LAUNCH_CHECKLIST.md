# V2 Launch Blocker Checklist

Goal: make V2 ready for public hosting with honest senior 3D Character Artist positioning and no fake portfolio proof.

## Current Status

- Status: visually staged and browser-reviewable; not final public launch until the blockers below are resolved.
- What changed: original generated V2 concept assets are integrated across the homepage, work cards, about/process visual, and one transparent case study.
- Safe current use: internal review, browser QA, copy review, and discussion of whether generated concept visuals can appear publicly with clear labels.
- Unsafe current use: claiming client work, shipped work, source 3D production proof, topology, UVs, texture maps, engine integration, commercial deliverables, testimonials, or production metrics.

## Immediate Launch Blockers

| Blocker | Exact section/file | Needed decision or file |
|---|---|---|
| Contact destination | `v2/index.html` contact form and `v2/ASSET_INTAKE.md` | Real email, Formspree endpoint, Airtable/HubSpot/Webflow form, or approved backend |
| Public profile links | Footer/about/contact follow-up surface | Approved LinkedIn, ArtStation, Behance, Upwork, Contra, or decision to omit |
| Public location/timezone | About/contact copy if public | Approved location or timezone, or decision to omit |
| Senior production proof | Case-study technical/process sections | Real Lesly mesh, UV, texture, wireframe, source-file, render, and handoff evidence if the case study should prove production capability |
| Real portrait | About section | Optional approved Lesly portrait if the site should show identity instead of a generated studio/process visual |

## Environment And Presentation Strategy

The V2 visual standard is character-first, studio-grade presentation. Environment details should make the character feel grounded, inspectable, and premium without implying that Lesly made full environment art unless that is verified.

Required environment/presentation checks for real launch assets:

- Beauty render: character-dominant stage, readable silhouette, soft contact shadow, controlled background, and lighting that supports face, hands, outfit, hair, accessories, and material response.
- Technical render: neutral background or turnaround stage that does not hide forms, topology, UVs, textures, bakes, or surface quality.
- Scale/context: small plinth, floor plane, prop, ruler, base, or set wall only when it clarifies scale/story and its source is known.
- Lighting/camera: record whether the image came from Blender, Marmoset, Sketchfab, Unity, Unreal, or another tool before naming the tool publicly.
- No environment-art claim unless Lesly created the environment or the borrowed/licensed stage asset is clearly credited.
- Generated V2 backgrounds remain concept presentation only. They do not prove real lighting, scene setup, engine integration, or environment production.

## Generated Assets Integrated

These files are created for V2 and may be used only with explicit generated-concept provenance:

| Section | File | What it can honestly prove |
|---|---|---|
| Homepage hero | `v2/assets/portfolio/hero-original-v2-concept.webp` | Original V2 visual direction |
| Work card 1 | `v2/assets/portfolio/work-concept-to-3d.webp` | Concept-to-character presentation direction |
| Work card 2 | `v2/assets/portfolio/work-game-ready-character.webp` | Game-character presentation direction, not game-ready source proof |
| Work card 3 | `v2/assets/portfolio/work-sculpt-retopo.webp` | Illustrative process direction, not topology proof |
| Work card 4 | `v2/assets/portfolio/work-avatar-character.webp` | Avatar presentation direction |
| Work card 5 | `v2/assets/portfolio/work-mascot-character.webp` | Mascot presentation direction |
| Work card 6 | `v2/assets/portfolio/work-outfits-accessories.webp` | Outfit/accessory presentation direction |
| About | `v2/assets/profile/studio-process-portrait.webp` | Studio/process mood only, not Lesly portrait |
| Case study | `v2/assets/process/original-v2-concept/*.webp` | Original generated concept case-study flow |

## Real Production Proof Needed To Upgrade The Case Study

If the public site should read as a senior production portfolio rather than a transparent generated concept presentation, replace the illustrative set with real Lesly proof and record the source in `v2/ASSET_INTAKE.md`.

| Case-study section | Required replacement path | What it must prove |
|---|---|---|
| Hero | `v2/assets/process/[project-slug]/hero.webp` | Approved Lesly final render |
| Starting point | `v2/assets/process/[project-slug]/starting-point.webp` | Original input, brief, sketch, moodboard, or reference board |
| Direction | `v2/assets/process/[project-slug]/direction.webp` | Direction board, exploration, or selected visual direction |
| Sculpt/model | `v2/assets/process/[project-slug]/sculpt-model.webp` | Real sculpt, clay, blockout, model, or progress screenshot |
| Technical proof | `v2/assets/process/[project-slug]/technical-proof.webp` | Wireframe, topology, UV layout, texture maps, material sheet, or export proof |
| Final renders | `v2/assets/process/[project-slug]/final-renders.webp` | Beauty render, turnaround, pose set, or closeups |
| Deliverables | `v2/assets/process/[project-slug]/deliverables.webp` | File list, handoff notes, source/export formats, or delivery screenshot |

Additional environment/presentation replacements, if available:

| Case-study section | Optional replacement path | What it must prove |
|---|---|---|
| Beauty stage | `v2/assets/process/[project-slug]/beauty-stage.webp` | Character-first cinematic stage with verified render source |
| Neutral stage | `v2/assets/process/[project-slug]/neutral-stage.webp` | Inspection-friendly render with plain lighting/background |
| Viewer/engine capture | `v2/assets/process/[project-slug]/viewer-engine.webp` | Real Sketchfab, Marmoset, Unity, or Unreal capture with accurate tool label |
| Environment notes | `v2/assets/process/[project-slug]/environment-notes.webp` | Lighting/camera/HDRI/prop notes or setup screenshot |

## Required Case-Study Facts For Real Lesly Work

Do not publish a real production case study until these are confirmed:

- Public project title.
- Project type: client, studio, personal, speculative, practice, or NDA-safe.
- Intended use: game, avatar, mascot, brand, pitch, animation, 3D print, or other.
- Starting input: sketch, written brief, moodboard, AI reference, existing concept, or original Lesly concept.
- Tools used, only if accurate.
- Technical proof available: wireframe, topology, UVs, textures, material sheet, engine/export notes, or explicit note that proof is unavailable.
- Real deliverables: final renders, BLEND, FBX, OBJ, texture maps, turnarounds, handoff notes, pose set, expression set, or other actual outputs.
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
- `reserch/visuals/mockup-reference.html` images.
- Page mockups, AI stock characters, fake stats, fake testimonials, fake client names, fake ratings, fake wireframes, fake UVs, or fake client logos.
- Generated images unless they are clearly labeled as original generated/site-created concept visuals and not presented as Lesly's finished client or production work.

## Hosting Checks

- `python3 -m http.server 8000 --bind 127.0.0.1`.
- `http://127.0.0.1:8000/v2/` returns 200.
- `http://127.0.0.1:8000/v2/case-study.html` returns 200.
- Desktop viewport: typography, nav, filters, theme, contact form, no broken local assets, no horizontal overflow.
- Mobile viewport: hamburger menu opens/closes, filters wrap cleanly, no horizontal overflow, case-study sections stack correctly.
- Targeted fake-risk search is clean except for intentional launch-blocker/checklist language.
