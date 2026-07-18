---
name: build-lesly-case-study
description: Build, rebuild, or materially repair one Lesly portfolio case study from audit through professional media, evidence-bounded narrative, static-site integration, independent expert approval, and rendered browser verification. Use when adding a case or category, replacing missing or duplicated case media, rebuilding a weak case presentation, or completing a case-specific visual and content upgrade. Do not use for isolated copy typos, asset-only critique with no case change, or a site-wide launch audit that does not build a case.
---

# Build Lesly Case Study

Coordinate one case from protected route to recorded approval. Preserve model judgment about the creative solution while keeping claims, public boundaries, and verification gates strict.

## Ownership

Orchestrate the work; do not duplicate specialist judgment.

- Read and use `../3d-production-expert/SKILL.md` for asset quality, 3D credibility, technical proof, and the final visual gate.
- Read and use `../3d-portfolio-writing-director/SKILL.md` for the public narrative and buyer value.
- Use `../humanizer/SKILL.md` only after substantive copy decisions when the prose needs a natural-language pass.
- Read and use `../frontend-design/SKILL.md` for HTML, CSS, and JavaScript presentation work.
- Read and use `../lesly-website-finalizer/SKILL.md` for deterministic audits and rendered-browser verification.

Keep this skill responsible for case lifecycle, sequencing, and approval evidence.

## Non-Negotiable Contract

- Work on exactly one case ID at a time. Mark it approved before starting another.
- Preserve every ID in `registry/portfolio-cases.json`. Never delete, merge, hide, or turn a case text-only to repair media or copy.
- Keep the contact path visible and public/proposal boundaries intact.
- Treat generated media as real portfolio media and judge it to professional standards. Do not call it a placeholder, prototype, fake, or disposable.
- Use approved source art or direct image generation for public imagery. Do not use Python, PIL, canvas, or procedural board generation to create or repair it.
- Preserve retired or superseded media on disk unless the user explicitly authorizes deletion; remove it only from active presentation.
- Do not publish invented clients, shipped credits, testimonials, metrics, dates, approvals, software captures, topology, UVs, maps, source files, engine integration, exports, construction findings, or outcomes.
- Keep external publishing, deployment, or destructive cleanup outside the skill unless the user explicitly requests that action.

## Case Loop

### 1. Establish the baseline

1. Read `AGENTS.md`, the current user request, `registry/portfolio-cases.json`, and only the relevant portfolio strategy or research files.
2. Inspect `git status` and preserve unrelated work. A dirty tree is not automatically a blocker: inspect overlapping diffs, continue around known in-scope changes, and stop only when ownership of a required overlapping edit is genuinely ambiguous.
3. Find every active data, override, homepage, related-case, and media reference for the case ID. Do not assume the first object is the final runtime source.
4. Inspect current media with computer vision at original resolution. Identify duplicates, missing files, identity drift, weak crops, pseudo-interface decoration, and unsupported claims.
5. Mark the case as active using the existing review-record conventions when a durable record exists.

For a new case, choose one stable lowercase-hyphenated ID, add it to the registry, and keep its homepage and case route discoverable. Do not change existing IDs to make the new one fit.

### 2. Define the case contract

Write a short internal brief before generating or editing media:

- **Professional job:** the buyer, recruiter, or production question this case answers.
- **Distinct identity:** subject, silhouette or architecture, materials, palette, staging, and visual family that separate it from every active case.
- **Evidence status:** verified production evidence, approved source art, reconstruction direction, or a clearly bounded mix.
- **Source boundary:** permission, privacy, licensing, and whether starting references may appear publicly or only guide new derivatives.
- **Identity locks:** details that must remain coherent across all views.
- **Proof slots:** what the hero and each supporting visual must demonstrate.
- **Claim boundary:** facts that cannot be published without matching evidence.
- **Reject criteria:** visible defects, duplication, drift, pseudo-UI, or overclaims that force revision.

Default to one memorable hero plus two case-specific supporting visuals. Each support image must answer a different professional question. Deviate only when genuine evidence makes another count more truthful, and record why.

Do not reuse an active asset from another case unless the user explicitly approves a shared series and the registry records the exception.

For a new category or unfamiliar production domain, run a prebuild specialist gate on the brief, identity locks, evidence boundary, media plan, and reject criteria before generating assets. Treat this as direction validation, not final approval.

### 3. Build the media package

1. Create the hero first and make its subject identity inspectable at thumbnail and full-page scale.
2. Use the approved hero or source art as the reference for supporting images when continuity matters.
3. Make support media show meaningful development, construction, materials, views, movement risks, evidence hierarchy, or handoff questions—not decorative variants.
4. Keep framing, anatomy, hands, feet, props, ground contact, materials, lighting, camera, and subject-specific technical logic professional.
5. Reject bubbles, status tokens, tiny repeated thumbnails, charts, fake wireframes, fake software chrome, fake approvals, and ornamental process boards unless genuine source evidence requires them.
6. Retain lossless generated masters and create optimized public derivatives without overwriting the masters. Record the media purpose and public evidence boundary beside the asset package when useful.

Use computer vision for visual judgment. Metadata and static checks may support the review but cannot replace it.

### 4. Run the independent expert gate

For a substantive new or rebuilt package, obtain a separated review before integration approval:

- When subagents are available, give a temporary reviewer the raw images, active case copy, case ID, and specialist skill with minimal task-local context. Do not leak the desired verdict or prior diagnosis.
- Otherwise, run a clearly separated second pass and disclose that no independent agent was available.
- Require inspection of original-resolution media, continuity, professional value, visible craft, caption accuracy, and claim boundaries.
- Require a score of at least `92/100` and no unresolved high-severity issue.

Treat `REJECT` as a required repair, not a suggestion. Fix the blocker, replace the affected source master and derivative when necessary, and re-run the gate. Do not relabel, crop, hide, or delete evidence merely to obtain a pass.

### 5. Integrate every public surface

Update the smallest complete set of active surfaces:

- case title, metadata, lead, problem, process, details, deliverables, proof, and evidence requirements;
- approved hero and gallery objects with correct paths, dimensions, alt text, captions, roles, and evidence status;
- final runtime overrides and public-copy layers;
- homepage card image, title, category, metadata, description, and link;
- related-case mapping and visual-family taxonomy where applicable;
- `registry/portfolio-cases.json` and the validator's locked case contract for a new case; extend protection rather than weakening existing invariants;
- CSS or JavaScript only when the existing presentation cannot express the case well.

Search again for the case ID and retired media paths. Confirm stale layers cannot override the approved package at runtime.

Write public copy as Lesly's calm professional narrative. Keep internal review history, scores, rejection language, provenance notes, and agent commentary out of public pages. Use captions and evidence sections to state limitations naturally.

### 6. Verify the actual experience

Run the checks owned by the repository, including:

```bash
node --check script.js
node --check case-study.js
python3 scripts/validate_skill_portfolio.py
git diff --check
python3 .agents/skills/lesly-website-finalizer/scripts/audit_v2_launch.py
```

Then use the user-requested browser surface, or the built-in rendered browser by default:

1. Preview through a local HTTP server, not only `file://`.
2. Inspect the case at approximately `1440 × 1000` and `393 × 852` target viewports.
3. View the hero, every gallery image, captions, evidence boundary, related work, and contact path.
4. Confirm native image dimensions, distinct sources, no broken images, no horizontal overflow, and no console warning or error.
5. Inspect the homepage card and its category filter. For a new case, also verify the all-project count and route uniqueness.
6. Use screenshots or direct computer vision to judge rendered hierarchy and crop; do not claim browser proof from static checks.

Fix and repeat any failed gate.

### 7. Record approval

Update the existing case-review record with:

- case ID and final public identity;
- previous defect or missing value;
- independent verdict and final score;
- active media paths and native dimensions;
- professional strengths and mandatory remediation completed;
- evidence and human-responsibility boundaries;
- desktop and mobile browser evidence;
- homepage category, related-work, contact, duplicate, broken-image, overflow, and console results.

Use `APPROVED` only when every required gate passes. `READY_FOR_REVIEW` is not approval.

For a multi-case request, repeat the complete loop sequentially. After the last case, run a corpus-wide route, homepage-card, active-media uniqueness, category, public-boundary, responsive, and contact audit before claiming the batch complete.

## Stop Rules

Stop and request direction only when a choice would materially change the public project story, expose private or unlicensed work, overwrite unrelated changes, remove a registered route, or publish externally without authority.

Do not stop merely because production evidence is incomplete. Build the strongest professional reconstruction or presentation direction the evidence supports, state the boundary, and identify the real captures required to upgrade the claim later.
