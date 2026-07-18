# Lesly Top-Tier Visual Rebuild — Final Local Report

Date: 2026-07-17
Branch: `codex/lesly-top-tier-visual-rebuild`
Release action: local verified candidate only; not committed, pushed, or deployed by this goal

## Outcome

The local portfolio is now image-led, responsive, evidence-aware, and internally consistent. The homepage preserves all projects, uses twelve distinct card sources, restores the About portrait, and replaces the flagged collectible pseudo-board with an independently approved color/form direction. Case studies no longer repeat their hero file in the gallery, and every route has a meaningful visual hero without treating generated direction as production proof.

## Public Visual System

- Desert Guardian: approved desktop and portrait reconstruction directions.
- Sol mascot: approved canonical mascot direction.
- Sol collectible: approved paired color and neutral form direction; 95/100 independent PASS.
- Ember avatar, sculpt bust, and interior shelf: retained within their narrow approved reconstruction-direction roles.
- Workflow cases: image-led heroes restored and labeled `Generated visual direction`; decision structure and evidence boundaries remain in HTML.
- About: existing illustrated public portrait restored after live-site comparison and user direction.

## Duplicate And Missing-Image Result

- Homepage work cards: 12 sources, 12 unique, 0 failed loads.
- Selected grid: 6 sources, 6 unique.
- Case-study routes inspected: 13.
- Route hero failures: 0.
- Hero/gallery source duplicates: 0.
- Unique referenced local asset paths checked: 110; missing: 0.
- The rejected collectible part-study remains unreferenced and documented.

## Built-In Browser Verification

Computer vision and the built-in ChatGPT browser were the visual authority. The final matrix covers the homepage plus all thirteen case-study routes at 1440, 1024, 393, and 375 CSS pixels: 56/56 page-and-viewport combinations passed. Each combination was checked for a complete hero, visible broken images, horizontal overflow, gallery/caption parity, unique gallery sources, hero/gallery duplication, and a contact path.

The verified interaction and presentation surfaces include:

- Desktop selected and expanded work grids.
- Desktop About portrait and fact grid.
- Mobile selected grid, expanded collectible card, and About portrait.
- Mobile concept-to-character wide/portrait gallery.
- Mobile collectible hero and evidence caption.
- Mobile workflow visual hero and generated-direction label.
- Mobile navigation open/close behavior and anchor navigation.
- All thirteen case-study routes for hero presence, gallery uniqueness, media status, and failed loads.

The full-page evidence was captured after a browser-native prewarm pass stabilized lazy media and page height. An earlier unstable stitched set that repeated regions was rejected and replaced. Final screenshots and machine-readable results are stored locally at `/tmp/lesly-iab-matrix-final/`; representative focused screenshots remain at `/tmp/lesly-iab-final-rc3/`.

## Public-Domain Comparison

The production site at `https://leslyyankauskas.com/` was separately swept in the built-in browser at 393 CSS pixels across the same fourteen pages.

- Broken visible images: 0.
- Horizontal-overflow routes: 0.
- Homepage project sources: 12 unique.
- Hero/gallery duplicate routes: 4 — `ai-visual-pipeline`, `santa-cruz-ai-visual-pipeline`, `construction-client-progress-workflow`, and `print-startup-direction`.
- Production still serves the older homepage hero and ornamental board presentation. The user's blue browser-comment overlay is not itself a missing-image state.

The reported issue is therefore deployment drift plus older duplicated/pseudo-technical presentation, not missing production files. The corrected local candidate has not been deployed under this goal.

## Independent Guardrails

- Integrated senior 3D review: 94/100 PASS before the final image-restoration correction.
- Integrated UX/content/schema review: 94/100 PASS before the final image-restoration correction.
- New collectible part-study: 87/100 REVISE and blocked from promotion.
- New collectible color/form study: 95/100 PASS with no blockers.

## Static Verification

- `audit_v2_launch.py`: PASS.
- `node --check script.js`: PASS.
- `node --check case-study.js`: PASS.
- Asset-reference existence audit: 110 unique public paths, 0 missing.
- `git diff --check`: PASS.
- Design system remains limited to Montserrat and Playfair Display through tokens.
- Promoted rebuild exports: sRGB WebP; hero, mobile, and gallery budgets pass.
- Homepage thumbnails: twelve distinct 900×675 or equivalent card images, 45–152 KB; no file exceeds the 180 KB thumbnail budget. The seven optimized derivatives were visually rechecked at 1440, 1024, 393, and 375 pixels.

## Evidence Boundary

No current generated image is classified as verified topology, UV, rig, engine, export, source-scene, slicer, or physical-print evidence. Each case states the real captures required before those claims can be added.

## Release Boundary

This report certifies the local working-tree candidate only. Commit, push, DNS, hosting, and cloud deployment require a separate explicit release instruction.
