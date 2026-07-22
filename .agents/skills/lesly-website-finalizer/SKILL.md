---
name: lesly-website-finalizer
description: Verify, audit, finalize, or launch-check Lesly's public static portfolio website, including implemented HTML/CSS/JS, public/private boundaries, local skill routing, deterministic launch checks, GitHub Pages readiness, and browser smoke tests. Use after implementation or for a site-wide audit. Do not use as the case lifecycle, media-quality, copy, or frontend implementation owner.
---

# Lesly Website Finalizer

Use this skill for final public-site work on Lesly's static portfolio.

Own deterministic and rendered verification of the implemented site. Report evidence and blockers to the invoking owner. Do not create case media, judge 3D craft, rewrite the narrative, implement frontend changes as the primary owner, or convert rendered success into case-level technical or outcome certification.

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
- Browser validation: use the browser surface requested by the user; otherwise use an available rendered-browser tool and state which surface supplied the evidence.

## Site Contract

- Static HTML/CSS/vanilla JS only. No build system, bundler, package manager, or external JS.
- Keep section IDs stable: `#work`, `#services`, `#process`, `#about`, `#contact`.
- Keep the inline theme FOUC-prevention script in `index.html` and `case-study.html`.
- Use `styles.css` tokens and existing vanilla JS patterns.
- Keep contact/start-project path visible and unobstructed.
- Preserve every case ID in `registry/portfolio-cases.json` and keep each route image-led. Duplicate repair must not remove, merge, hide, or convert a case to text-only.

## Public Boundary

This is Lesly's public portfolio website, not a client proposal.

Enforce:

- Repository skills stay under `.agents/skills/`, Codex's repository discovery path.
- Do not create or synchronize duplicate skill mirrors unless the user explicitly requests that separate maintenance task.
- Generated portfolio media is real site media and must be judged by craft quality.
- Do not re-label public assets as placeholder, prototype, fake, not real, or concept-only unless the user explicitly asks.
- OneOff/proposal work stays under `clients/` or proposal-specific surfaces and must not appear in `index.html` or public case-study navigation unless explicitly requested.
- Public copy must not include proposal, intake, audit, provenance, or internal agent comments.
- Public copy must not include internal truth-guard content: evidence/claim states, proof ledgers, missing-proof narration, capture requests, hypothetical production instructions, rejection history, approval/gate state, provenance mechanics, or future evidence work. The public renderer must not expose dedicated evidence-status or capture-required sections.
- Public case studies must contain developed first-person artist prose. A populated facts grid and repeated problem/process/detail cards do not constitute a case study.
- Website authorship may appear where the website itself is the subject, but repeated `Portfolio case author`, `Zero-to-one website presentation`, `website case`, case-structure, media-order, or public-narrative language fails the public audience gate.
- Public JavaScript must not ship internal evidence summaries, capture requests, proof-debt fields, or approval records and then rely on runtime deletion to hide them.
- Gallery captions must contain only public artistic description. Do not render media-state categories such as evidence type, generated status, reconstruction status, approval status, or review stage.
- GitHub Pages must publish the artifact created by `scripts/package_public_site.py`, never the repository root. Keep the workflow manual until the user separately authorizes release; the package may contain only the public root files and assets they reference.
- Do not invent external clients, shipped credits, testimonials, production metrics, engine integrations, polycounts, UV layouts, deadlines, source files, or deliverable filenames.

## Launch Audit

Run the deterministic audit when finalizing:

```bash
python3 scripts/validate_skill_portfolio.py --case <active-case-id>
python3 .agents/skills/lesly-website-finalizer/scripts/audit_v2_launch.py --case <active-case-id>
```

Use the targeted validator while one case is active. After the final case, run both commands without `--case` so the audience gate covers the complete registered corpus.

The validator also builds a temporary allowlisted publish artifact and fails if `clients/`, `docs/`, `reserch/`, skills, registries, scripts, or other repository-only material enters it. After an explicitly authorized deployment, verify representative private paths return `404` on both the custom domain and the direct GitHub Pages URL before calling the boundary safe.

Exit codes:

- `0`: audited gates pass; browser verification is still required.
- `1`: blocked by missing launch assets or facts.
- `2`: launch-safety failure that needs fixing.

Also run targeted checks:

```bash
rg -n "placeholder|prototype|not real|concept-only|ASSET_INTAKE|proposal|OneOff|One Off|S-RANCH" index.html case-study.html case-study.js CONTENT_STRATEGY.md LAUNCH_CHECKLIST.md AGENTS.md
rg -n "cool characters|awesome art|fun designs|cute stuff|amazing things|dreams come true|make ideas real|beautiful 3D|bringing imagination to life|creative visionary|unlock your vision" index.html case-study.html case-study.js
rg -n -i "Evidence status|not (yet )?verified|not documented|Required next|one capture that changes the claim|if the .* exists|What the current package makes inspectable|proof[- ]pending|Acceptance path|real capture required" index.html case-study.html case-study.js
rg -n -i "Portfolio case author|Zero-to-one website|website case|authored the case structure|media sequence|public narrative|evidenceSummary|captureRequired" index.html case-study.html case-study.js
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
- The first 10 seconds communicate project, positive scope, supportable contribution, and strongest finished visual; the first short scroll communicates the challenge, decision, consequence, and professional value without audit or proof-debt copy.
- The page contains several connected first-person paragraphs, at least three case-specific artistic decisions tied to visible media, and a grounded result/reflection. Fixed cards, labels, word counts, and validator success are supporting checks, not proof of narrative quality.
- Openings, role language, transitions, and conclusions are meaningfully distinct across the registered corpus.

If a check cannot run, report the exact gap.
