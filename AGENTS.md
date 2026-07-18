# AGENTS.md

Repository guidance for Codex when this repository is available in a tool-capable Codex surface.

## Scope And Authority

- This file applies to the repository root. A nested `AGENTS.md` or `AGENTS.override.md` may add or override guidance only within its subtree.
- Repository instructions do not grant repository, terminal, model, API, or connected-service access. In particular, an ordinary ChatGPT conversation has no such access unless its current surface explicitly provides it.
- For change requests, safe in-scope local edits and non-destructive checks are authorized. Confirm before destructive or irreversible actions, external writes, purchases, or material scope expansion.
- Preserve unrelated work in a dirty worktree. Stop and report a conflict when the requested edit overlaps unrelated user changes.

## Project Contract

This is the static public portfolio for **Lesly — 3D Character Artist**, targeting US game-studio roles and elite freelance work. "AI Workflow Support" is supporting language, not Lesly's title.

The production target is:

```text
https://dimasyankauskas.github.io/Lesly3dArtis/
```

- Generated assets made for this portfolio are real site assets, not placeholders or prototypes. Judge them to professional 3D character-art standards: anatomy, silhouette, face, hands, costume logic, materials, staging, crop, lighting, and fit with the service being sold.
- Keep OneOff and all other client-proposal work under `clients/` or proposal-specific surfaces. Do not expose it through `index.html` or public case-study flows unless the user explicitly asks to make that project public.
- Public copy must read as Lesly's portfolio, not as proposal, intake, audit, provenance, or internal-review material.
- Do not invent clients, shipped credits, testimonials, production metrics, engine integrations, topology/UV/source-file facts, deadlines, or deliverable names absent from repository evidence.
- Keep the contact path prominent and unobstructed.

## Sources Of Truth

Before changing copy, layout, positioning, or visual direction, read only the relevant files under `reserch/`. The folder name is intentionally misspelled; do not rename it without confirmation.

- `reserch/upgrade-jd-aligned-website-copy.md` — headline, services, and contact copy.
- `reserch/website-information-architecture.md` — hero and section structure.
- `reserch/final-ai-workflow-update.md` — AI workflow support framing.
- `reserch/design-system-spec.md` — visual system.
- `reserch/visual-assets-checklist.md` — launch media requirements.
- `reserch/visuals/visual-index.md` and `reserch/visuals/visual-gallery.html` — design references.
- `CONTENT_STRATEGY.md`, `LAUNCH_CHECKLIST.md`, and `ENVIRONMENT_STRATEGY.md` — final strategy, launch blockers, asset-detail standards, and presentation standards.

## Stack And Implementation

- Pure static HTML, CSS, and vanilla JavaScript; no build system, package manager, automated test suite, or external JavaScript dependency.
- Root site files are `index.html`, `case-study.html`, `styles.css`, `script.js`, and `case-study.js`; final media lives under `assets/`. Keep `.nojekyll` for GitHub Pages.
- Preserve section IDs `#work`, `#services`, `#process`, `#about`, and `#contact`.
- Keep the inline theme FOUC-prevention script in both HTML pages.
- Use `styles.css` design tokens rather than hardcoded component colors.
- Match the existing JavaScript style: top-level `const`, optional chaining, no modules, and no build step.
- Prefer the smallest complete change and existing patterns.
- Keep searches targeted. Avoid unrestricted reads over `temp/`, archived proposal HTML, binary assets, or files containing inline base64 data; inspect size/type/path first, then read only the needed section.
- Public portfolio imagery must come from approved source art or direct image generation. Do not create or repair it with Python/PIL, canvas scripts, or procedural board generators. Python is allowed for validation, local preview, metadata checks, format conversion, compression, and resizing/cropping approved assets.

## Repository Skills

Codex-discoverable repository skills live under `.agents/skills/`. Do not install, copy, synchronize, or modify skills outside this repository unless the user explicitly requests that separate action. Read the relevant `SKILL.md` before using a skill and load only directly needed references.

- `registry/skills.json` is the machine-readable inventory. Every active skill must have one distinct user job and one owner there.
- `3d-production-expert` — 3D craft, proof, generated media, game-ready claims, and portfolio suitability.
- `3d-portfolio-writing-director` — public hero, services, case-study, contact, and positioning copy.
- `build-lesly-case-study` — one-case-at-a-time orchestration from preserved route through expert and browser approval.
- `lesly-website-finalizer` — launch readiness and public/proposal boundaries.
- `humanizer` — natural-language polish after substantive copy decisions.
- `frontend-design` — HTML/CSS/JS interface work.
- `threejs-fundamentals` and `threejs-loaders` — self-hosted 3D display.

Do not remove, merge, hide, or convert a public case study to text-only merely to resolve duplicate imagery. Preserve every case ID in `registry/portfolio-cases.json`; repair one case at a time with a distinct hero, truthful supporting media, and evidence-bounded copy. The registry validator owns this invariant.

## Preview And Verification

There is no build step. Preview locally with:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`.

- For HTML/CSS/JS changes, inspect the changed page at relevant desktop and mobile widths where practical; check behavior, local assets, overflow, and public/proposal boundaries.
- When finalizing or launch-checking the site, follow `.agents/skills/lesly-website-finalizer/SKILL.md`, including its deterministic audit and targeted checks.
- For skill or case-registry changes, run `python3 scripts/validate_skill_portfolio.py` before the launch audit.
- For static documentation edits, use the smallest relevant file, link/path, and diff checks.
- Report exactly what was checked and any remaining unverified surface. Do not claim launch readiness from static checks alone.
