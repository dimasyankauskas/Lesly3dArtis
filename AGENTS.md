# AGENTS.md

Repository-local operating guide for Codex in this project. This file is the Codex source of truth for repo behavior and should stay aligned with `CLAUDE.md` where the two overlap.

## Project

Static portfolio website for **Lesly — 3D Character Artist**. "AI Workflow Support" is a supporting phrase, not Lesly's title. The site targets both US game-studio full-time roles and elite freelance work.

This is a real product portfolio. Generated assets created for this portfolio are real site assets, not prototypes or placeholders. Review them with high craft standards: character design, anatomy, silhouette, face, hands, costume logic, material read, stage, crop, lighting, and fit with the service being sold.

OneOff and other client proposal work stays under `clients/` or proposal-specific surfaces. Do not display it on the public portfolio site unless the user explicitly asks for that project to be public.

The production target is GitHub Pages at:

```text
https://dimasyankauskas.github.io/Lesly3dArtis/
```

## Repo-Local Only

- Keep Codex configuration and skills inside this repository.
- Use `.codex/skills/<skill-name>/SKILL.md` for local skills.
- Do not install or update skills globally under `~/.codex` for this project unless the user explicitly asks.
- Do not synchronize local artifacts with symlinks. Copy actual files or directories.
- Treat `.claude/` as the existing Claude Code local setup and `.codex/` as the Codex-local mirror.

## Source Of Truth

Read the `reserch/` materials before changing copy, layout, positioning, or visual direction. The folder name is intentionally misspelled and must not be renamed without user confirmation.

Primary docs:

- `reserch/upgrade-jd-aligned-website-copy.md` — source of truth for headline, services, and contact form copy.
- `reserch/website-information-architecture.md` — hero and section structure.
- `reserch/final-ai-workflow-update.md` — final AI workflow support framing.
- `reserch/design-system-spec.md` — visual system.
- `reserch/visual-assets-checklist.md` — launch media requirements.
- `reserch/visuals/visual-index.md` and `reserch/visuals/visual-gallery.html` — design references.

## Tech Stack

- Pure static HTML/CSS/vanilla JavaScript.
- No build system, bundler, package manager, or automated test suite.
- No external JavaScript dependencies.
- External assets are Google Fonts in `index.html` and `case-study.html`.
- `styles.css` owns the final Belleza-based design system.
- There is no alternate website version or version toggle in the final repo.

## File Map

- `index.html` — one-page site.
- `case-study.html` — reusable case study template.
- `case-study.js` — case-study reveal-on-scroll behavior.
- `script.js` — shared theme toggle, mobile nav, filters, reveal-on-scroll, and copyable project-brief behavior.
- `styles.css` — final tokens, layout, components, and responsive styling.
- `assets/` — final site assets.
- `CONTENT_STRATEGY.md`, `LAUNCH_CHECKLIST.md`, `ENVIRONMENT_STRATEGY.md` — final strategy, launch blockers, asset detail standards, and presentation standards.
- `.nojekyll` — required for GitHub Pages static serving.
- `reserch/` — strategy, IA, copy, visual references, and decision log.

## Implementation Rules

- Prefer existing patterns and smallest complete changes.
- Keep section IDs stable: `#work`, `#services`, `#process`, `#about`, `#contact`.
- Keep the inline theme FOUC-prevention script in both HTML pages.
- Use design tokens from `styles.css`; avoid hardcoded colors inside component rules.
- Match the existing vanilla JS style in `script.js`: top-level `const`, optional chaining, no modules, no build step.
- Generated portfolio media is real site media. Do not re-label it as placeholder/prototype/concept-only unless the user explicitly asks.
- Do not create or "fix" public portfolio images with Python/PIL, canvas scripts, or procedural board generators. Public case-study and homepage imagery must come from approved source art/assets or direct image generation such as Creative Production/imagegen. Python is acceptable only for validation, local preview servers, metadata checks, format conversion, compression, or resizing/cropping of already approved assets.
- Do not use Python scripts to generate public portfolio images. Public case-study and homepage imagery must come from approved source art/assets or direct image generation such as Creative Production/imagegen.
- Public website content must read as Lesly's portfolio content, not proposal copy, internal review notes, or client-meeting material.
- Keep OneOff/proposal links out of `index.html` and public case-study flows unless explicitly requested.
- Do not invent external client names, shipped credits, engine integrations, testimonials, metrics, or source-file facts that are not represented in the repo.
- The site is a marketing and lead-generation surface. Keep the contact path prominent and unobstructed.

## Local Skills

Use the repo-local Codex skills in `.codex/skills/`. They were imported from `.claude/skills/` for local Codex use.

| Task | Skill |
|---|---|
| Judge 3D asset quality, craft proof, generated media, game-ready claims, or portfolio suitability | `3d-production-expert` |
| Edit hero, services, case studies, contact copy, positioning, or public portfolio narratives | `3d-portfolio-writing-director` |
| Finalize the public website, audit launch readiness, or enforce public/proposal boundaries | `lesly-website-finalizer` |
| Legacy segment context for 3D character portfolio conventions | `3d-character-artist-portfolio` |
| Humanize or de-AI new copy | `humanizer` |
| Build or refine HTML/CSS/JS UI | `frontend-design` |
| Add self-hosted 3D model display | `threejs-fundamentals` + `threejs-loaders` |
| Create static poster, PDF cover, banner, or non-portfolio visual artifact | `canvas-design` |
| Test local web behavior with Playwright | `webapp-testing` |
| Apply a prebuilt theme to a non-site artifact | `theme-factory` |

Before using a skill, read only the relevant `SKILL.md` and any directly needed referenced files.

## Local Preview

There is no build step.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Opening `index.html` directly in a browser also works.

## Verification

- For HTML/CSS/JS changes, run a local preview and inspect the changed page where practical.
- For static edits, verify with the smallest relevant check: file read, link/path check, browser preview, or targeted search.
- Never claim success without naming what was checked.
- If a check cannot be run, state exactly what remains unverified.

## Deployment

Static GitHub Pages serves the repo root after pushing to `main`. There is no build command. Keep `.nojekyll`.
