# CLAUDE.md

Guidance for Claude Code and adjacent local agents in this repository.

## Project

Static portfolio website for **Lesly — 3D Character Artist**. "AI Workflow Support" is supporting language only, not Lesly's title.

The production target is GitHub Pages at:

```text
https://dimasyankauskas.github.io/Lesly3dArtis/
```

## Current Site Shape

There is one active website version: the repo-root static site.

```text
index.html
case-study.html
case-study.js
script.js
styles.css
assets/
```

Do not add a parallel `/v2/`, V1 comparison, theme experiment, or duplicate website folder. If a future redesign is needed, branch it in git rather than keeping multiple public site versions in the repo.

## Source Of Truth

Read `reserch/` before changing copy, layout, positioning, or visual direction. The folder name is intentionally misspelled and must not be renamed.

Primary docs:

- `reserch/upgrade-jd-aligned-website-copy.md`
- `reserch/website-information-architecture.md`
- `reserch/final-ai-workflow-update.md`
- `reserch/design-system-spec.md`
- `reserch/visual-assets-checklist.md`
- `reserch/implementation-plan.md`
- `CONTENT_STRATEGY.md`
- `ASSET_INTAKE.md`
- `LAUNCH_CHECKLIST.md`
- `ENVIRONMENT_STRATEGY.md`

## Tech Stack

- Pure static HTML/CSS/vanilla JavaScript.
- No build system, bundler, package manager, or automated test suite.
- No external JavaScript dependencies.
- External assets are Google Fonts in `index.html` and `case-study.html`.
- `styles.css` owns the final Belleza-based design system.
- `script.js` owns theme, mobile nav, filters, reveal-on-scroll, and placeholder form behavior.
- `case-study.js` owns the case-study data/rendering.

## Asset Rules

- Generated concept visuals must remain labeled as generated/site-created visuals.
- Do not claim generated visuals are Lesly's client work, shipped work, source 3D files, topology, UVs, texture proof, engine proof, or deliverables.
- Do not use `reserch/visuals/image*.png` as portfolio proof.
- Real Lesly proof can replace generated concept assets only after source files and public facts are recorded in `ASSET_INTAKE.md`.

## Local Preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8000/
http://127.0.0.1:8000/case-study.html
```

## Verification

For HTML/CSS/JS changes:

- Run a local preview.
- Check desktop and mobile.
- Confirm no broken local assets.
- Confirm no horizontal overflow.
- Run the repo-local audit:

```bash
python3 .codex/skills/3d-character-portfolio-finalizer/scripts/audit_v2_launch.py
```

The script name is historical; it audits the final root site.
