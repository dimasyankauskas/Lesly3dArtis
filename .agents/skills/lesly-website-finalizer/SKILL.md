---
name: lesly-website-finalizer
description: Use when finalizing, auditing, or launch-checking Lesly's public static portfolio website, including HTML/CSS/JS integration, public/private boundaries, local skill routing, launch checks, GitHub Pages readiness, and browser smoke tests.
---

# Lesly Website Finalizer

Use this skill for final public-site work on Lesly's static portfolio.

## Source Order

1. `AGENTS.md`.
2. Current user request.
3. `reserch/` source docs.
4. `CONTENT_STRATEGY.md`, `LAUNCH_CHECKLIST.md`, and `ENVIRONMENT_STRATEGY.md`.
5. Root site files: `index.html`, `case-study.html`, `styles.css`, `script.js`, `case-study.js`.

The folder is intentionally named `reserch/`; do not rename it.

## Routing

- Asset quality, craft, proof, or 3D production claims: use `3d-production-expert`.
- Hero, services, case-study, contact, or public portfolio wording: use `3d-portfolio-writing-director`.
- Human polish/de-AI pass: use `humanizer`.
- HTML/CSS/JS UI implementation: use `frontend-design`.
- Browser validation: use `webapp-testing`.

## Site Contract

- Static HTML/CSS/vanilla JS only. No build system, bundler, package manager, or external JS.
- Keep section IDs stable: `#work`, `#services`, `#process`, `#about`, `#contact`.
- Keep the inline theme FOUC-prevention script in `index.html` and `case-study.html`.
- Use `styles.css` tokens and existing vanilla JS patterns.
- Keep contact/start-project path visible and unobstructed.

## Public Boundary

This is Lesly's public portfolio website, not a client proposal.

Enforce:

- Repository skills stay under `.agents/skills/`, Codex's repository discovery path.
- Do not create or synchronize duplicate skill mirrors unless the user explicitly requests that separate maintenance task.
- Generated portfolio media is real site media and must be judged by craft quality.
- Do not re-label public assets as placeholder, prototype, fake, not real, or concept-only unless the user explicitly asks.
- OneOff/proposal work stays under `clients/` or proposal-specific surfaces and must not appear in `index.html` or public case-study navigation unless explicitly requested.
- Public copy must not include proposal, intake, audit, provenance, or internal agent comments.
- Do not invent external clients, shipped credits, testimonials, production metrics, engine integrations, polycounts, UV layouts, deadlines, source files, or deliverable filenames.

## Launch Audit

Run the deterministic audit when finalizing:

```bash
python3 .agents/skills/lesly-website-finalizer/scripts/audit_v2_launch.py
```

Exit codes:

- `0`: audited gates pass; browser verification is still required.
- `1`: blocked by missing launch assets or facts.
- `2`: launch-safety failure that needs fixing.

Also run targeted checks:

```bash
rg -n "placeholder|prototype|not real|concept-only|ASSET_INTAKE|proposal|OneOff|One Off|S-RANCH" index.html case-study.html case-study.js CONTENT_STRATEGY.md LAUNCH_CHECKLIST.md AGENTS.md
rg -n "cool characters|awesome art|fun designs|cute stuff|amazing things|dreams come true|make ideas real|beautiful 3D|bringing imagination to life|creative visionary|unlock your vision" index.html case-study.html case-study.js
node --check script.js
node --check case-study.js
```

## Browser Smoke

Before claiming launch-ready, preview locally and inspect:

- Homepage and case-study page load.
- No missing local images on visible sections.
- Nav, filters, theme toggle, reveal-on-scroll, and contact brief copy behavior work.
- Desktop and mobile have no horizontal overflow or incoherent overlap.
- OneOff/proposal links are absent from public homepage/case-study flows unless explicitly requested.

If a check cannot run, report the exact gap.
