---
name: 3d-character-portfolio-finalizer
description: Use when finalizing, auditing, or launch-checking Lesly's final 3D Character Artist portfolio, especially content strategy, real portfolio assets, case studies, work cards, services, pricing, contact flows, and anti-misrepresentation proof.
---

# 3D Character Portfolio Finalizer

Use this skill for launch-readiness work on a senior-facing 3D Character Artist portfolio. The goal is a truthful, conversion-ready portfolio that can survive recruiter, art-director, client, and public review.

## Source Order

1. Repo instructions in `AGENTS.md`.
2. Current user request.
3. `reserch/` source docs, especially:
   - `platform-strategy.md`
   - `version-2-website-materials.md`
   - `upgrade-jd-aligned-website-copy.md`
   - `final-ai-workflow-update.md`
   - `visual-assets-checklist.md`
   - `implementation-plan.md`
4. Current `CONTENT_STRATEGY.md`.
5. Current root site files, especially `LAUNCH_CHECKLIST.md` and `ASSET_INTAKE.md` when they exist.

The folder is intentionally named `reserch/`; do not rename it.

## Positioning Rules

- Primary title: `3D Character Artist`.
- Positioning: production-ready 3D characters for games, creators, startups, brands, and real-time worlds.
- Strongest offer: concept, sketch, moodboard, written brief, AI reference, or existing concept to polished 3D character.
- AI language is support only. Use `AI Workflow Support` or `AI references` as secondary language, not as Lesly's title.
- Avoid broad claims such as generic 3D designer, AI artist, can do anything, cheap modeling, metaverse/NFT language, and unsupported trust claims.

## Real Asset Gate

Do not present an image, screenshot, wireframe, UV, texture sheet, render, mockup, client logo, testimonial, metric, polycount, file list, engine target, project title, or shipped result as real unless the repo or user explicitly verifies it.

Allowed states:

- `real approved work`: verified by user or authoritative repo note as Lesly's actual work.
- `non-final placeholder`: clearly labeled in visible UI and launch checklist.
- `reference/mockup only`: allowed in research docs or internal notes, never as portfolio proof.

Forbidden:

- Using `reserch/visuals/image*.png` as portfolio work unless the user has verified it as real Lesly work.
- Inventing project names, client names, production stats, triangle counts, UV layouts, texture sets, engine targets, deadlines, deliverable filenames, or outcomes.
- Hiding fake-risk placeholders behind polished styling.
- Letting generated images imply real portfolio work.

## Case Study Anatomy

A launch-quality case study needs real evidence for:

1. Project goal or client/use-case goal.
2. Starting point: sketch, brief, moodboard, AI reference, or existing concept.
3. Design direction and constraints.
4. Sculpt/modeling process.
5. Technical proof: retopology, wireframe, UVs, texture/material sheets, engine/export notes, or a clear explanation of what is unavailable.
6. Final renders.
7. Deliverables: real file types and handoff notes, not invented filenames.
8. Result or intended use.

If real project facts or visuals are missing, keep the page as a template or blocked intake surface. Do not complete the narrative by guessing.

## Visual Proof Requirements

Minimum portfolio proof before launch:

- Hero render or explicitly marked non-final hero placeholder.
- Work cards that either show real approved thumbnails or visible non-final placeholders.
- At least one real case study only if real project facts and assets exist.
- Launch blocker list naming exact missing filenames/sections when proof is absent.

High-value proof for senior-level review:

- Beauty render.
- Turnaround.
- Wireframe/topology.
- UV layout.
- Texture/material sheet.
- Sculpt/clay view.
- Before/after reference to final.
- Deliverables list and production handoff notes.

## Environment And Presentation Strategy

For a top-tier 2026 character-artist portfolio, "environment" means the support system around the character, not a claim that Lesly is an environment artist.

Use environment details to prove taste, scale, material response, and production awareness:

- Use a simple cinematic stage: grounded floor plane, soft contact shadow, readable silhouette, controlled backdrop, and one or two context props only when they clarify story or scale.
- Keep the character dominant in every hero, work-card, and case-study render. Environment detail should frame the character, not compete with anatomy, costume, face, hands, hair, accessories, or material work.
- Include at least one neutral technical presentation per real case study: plain background, turntable/turnaround, no dramatic color grade, and lighting that makes topology, surface breakup, silhouette, and texture work readable.
- Include at least one beauty presentation: key/fill/rim or HDRI-based lighting, intentional camera focal length, tasteful depth of field, grounded shadow, and a backdrop that supports the character's story.
- If a real-time viewer or engine capture is used, document the environment/HDRI/lighting mode, engine or viewer, and any limitations. Do not claim Unreal, Unity, Sketchfab, or Marmoset proof unless the capture is real.
- Avoid large dioramas unless Lesly actually made the scene. A character on a small plinth, studio floor, simple set wall, or scale prop is safer than a full environment that implies environment-art ownership.
- Do not use generated background details as proof of level design, environment art, material work, engine integration, or production lighting.

Environment proof to request for real Lesly projects:

- Beauty render with character-grounding stage.
- Neutral clay/material check render.
- Lighting/camera notes or screenshots when available.
- Turnaround on a consistent background.
- Optional engine/viewer capture with named tool and real settings.
- Optional scale/context prop, only if Lesly made it or it is licensed/credited.

## Pricing And Rate Handling

- Do not place an unapproved hourly rate in the hero, nav, or top-level services.
- Prefer: `Projects are quoted by scope, complexity, timeline, and deliverables.`
- Keep budget ranges in the contact form unless public ranges are explicitly approved.
- If visible ranges are approved, label them as starting ranges and keep consulting/hourly pricing limited to consulting or art-direction support.
- Never invent approved pricing.

## Content Finalization Checklist

Before editing the final site:

1. Read required strategy docs.
2. Audit `index.html`, `case-study.html`, `styles.css`, `script.js`, and `CONTENT_STRATEGY.md`.
3. Inventory local assets with `find` and verify what is real, placeholder, or reference-only.
4. Check `ASSET_INTAKE.md` before replacing any visible placeholder.
5. Run targeted `rg` searches for placeholder/fake-risk terms.

For a deterministic local audit, run:

```bash
python3 .codex/skills/3d-character-portfolio-finalizer/scripts/audit_v2_launch.py
```

Exit codes: `0` means audited gates pass, `1` means truthfully blocked by missing real assets/facts, and `2` means a launch-safety failure needs fixing.

Before claiming launch-ready:

1. Every work/case-study visual is real approved work or visibly marked non-final.
2. Every project fact is sourced or removed.
3. Placeholder copy resolvable from docs is replaced.
4. Missing assets/facts are listed in a launch blocker checklist with exact section and filename needs.
5. Desktop and mobile browser checks pass: layout, nav, filters, theme, no horizontal overflow, and no broken local assets.

## Useful Fake-Risk Searches

Use targeted searches such as:

```bash
rg -n "\\[|placeholder|drop image|Project Name|One paragraph|One or two|~18k|18\\.4k|2k / 1k|Unreal 5|4 weeks|client|shipped|trusted|testimonial|logo|Lorem|TBD|TODO|fake|mockup" index.html case-study.html case-study.js ASSET_INTAKE.md LAUNCH_CHECKLIST.md
rg -n "AI-Assisted Visual Designer|AI Artist|generative AI artist|can make anything|stunning|passionate|bringing .* to life" index.html case-study.html CONTENT_STRATEGY.md reserch
rg -n "reserch/visuals/image[0-9]*\\.png|image[0-9]*\\.png" index.html case-study.html case-study.js ASSET_INTAKE.md LAUNCH_CHECKLIST.md reserch
```

## Stop Rule

If a section needs real art, a real project fact, or an approved business fact and none exists, stop fabrication. Replace the claim with a truthful placeholder/blocked state and add the exact intake need to the launch checklist.
