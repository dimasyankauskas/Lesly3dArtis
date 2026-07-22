---
name: build-lesly-case-study
description: Build, rebuild, materially repair, or certify one Lesly portfolio case study from protected route through evidence-bounded media, public narrative, static-site implementation, specialist review, and rendered verification. Use when adding a case or category, replacing missing or duplicated case media, rebuilding a weak case story, or completing a case-specific visual and content upgrade. Do not use for asset-only critique, copy-only edits, frontend-only fixes, or a site-wide launch audit that does not build a case.
---

# Build Lesly Case Study

Coordinate one case from protected route to recorded public-presentation approval. Preserve creative judgment while making ownership, evidence, and verification fail closed.

The public deliverable is an artist-authored case narrative, not a proof packet or a fixed collection of metadata cards. Use evidence to bound claims, never to dictate public page structure or prevent truthful discussion of visible artistic decisions.

## Ownership And Routing

Own the case lifecycle, contract, sequencing, media-creation execution, specialist handoffs, integration completeness, and final case-level certification. Do not duplicate specialist judgment.

- Read and use `../3d-production-expert/SKILL.md` to judge 3D craft, media suitability, and technical proof. The expert evaluates; it does not generate or integrate the package.
- Read and use `../3d-portfolio-writing-director/SKILL.md` to write the public narrative. The writer cannot upgrade evidence status.
- Use `../humanizer/SKILL.md` only after substantive copy decisions when the prose needs a natural-language pass.
- Read and use `../frontend-design/SKILL.md` to implement approved HTML, CSS, JavaScript, media, captions, and accessibility.
- Read and use `../lesly-website-finalizer/SKILL.md` to obtain deterministic and rendered-browser verification. The finalizer verifies the implementation; it does not certify 3D craft or case truth.

Use `APPROVED` only for truthful public presentation. Never treat it as proof of topology, game readiness, client approval, print engineering, shipment, adoption, or another production outcome. Certify those claims individually only from matching evidence.

## Conditional References

Load only the reference needed for the active branch:

- Read `references/case-outline-template.md` when establishing or updating the case contract, media lineage, or approval record.
- Read `references/category-proof-modules.md` after selecting character/game, props/interiors, visual-direction/client-review, or print/collectible.
- Read `references/image-model-media-protocol.md` only when missing-visual triage permits direct image generation.
- Read `references/evaluation-scenarios.md` only when maintaining or forward-testing this skill's architecture, never during ordinary case execution.

## Non-Negotiable Contract

- Work on exactly one case ID at a time. Complete its required gates before starting another.
- Preserve every ID in `registry/portfolio-cases.json`. Never delete, merge, hide, or turn a case text-only to repair media or copy.
- Keep the contact path visible and public/proposal boundaries intact.
- Treat generated media as real portfolio media and judge it to professional standards. Do not call it a placeholder, prototype, fake, or disposable.
- Use approved source art or direct image generation for public imagery. Do not use Python, PIL, canvas, or procedural board generation to create or repair it.
- Preserve retired or superseded media on disk unless the user explicitly authorizes deletion; remove it only from active presentation.
- Do not publish invented clients, credits, testimonials, metrics, dates, approvals, software captures, topology, UVs, maps, source files, engine integration, exports, construction findings, or outcomes.
- Keep external publishing, deployment, and destructive cleanup outside this skill unless the user explicitly requests that action.
- Keep two strictly separate handoffs: a public story packet and an internal truth guard. Claim states, proof ledgers, capture requests, rejection history, provenance/lineage records, approval receipts, and audit commentary are internal records. They must never become public sections, labels, captions, alt text, metadata, or related-card copy.
- Treat `CASE_ADVANCE_GATE` as a semantic audience gate, not a schema gate. Do not require a public facts grid, fixed section names, card counts, a proof section, a deliverables section, or one prescribed order when a stronger case-specific narrative communicates the same information.
- Missing technical or outcome evidence narrows technical or outcome claims. It does not block a first-person case study about the artistic premise, visible form, silhouette, costume, materials, composition, staging, or presentation that the approved media genuinely supports.

## Case Loop

### 1. Establish The Baseline

1. Read `AGENTS.md`, the user request, `registry/portfolio-cases.json`, and only relevant strategy or research files.
2. Inspect `git status` and preserve unrelated work. Continue around non-overlapping changes; stop only when ownership of a required overlapping edit is genuinely ambiguous.
3. Find every active data, override, homepage, related-case, copy, and media reference for the case ID. Do not assume the first object is the runtime source.
4. Inspect active media with direct computer vision at original resolution. Identify duplicates, missing files, identity drift, weak crops, pseudo-interface decoration, and unsupported claims.
5. Mark the case active using existing review-record conventions when a durable record exists.

For a new case, choose one stable lowercase-hyphenated ID, add it to the registry, and keep its homepage and route discoverable. Never rename an existing ID to make the new one fit.

### 2. Freeze The Case Contract

Use `references/case-outline-template.md` to record the relevant truth boundaries before public copy work:

- supported role and authored scope, inherited inputs, output, and any documented team, status, or date that affects a public claim;
- one artistic premise and one distinct recruiter or buyer value;
- positive visible scope, plus a claim state and highest-risk unsupported claim only when an intended technical or outcome claim needs them;
- source, permission, privacy, and public-use boundary;
- identity locks and category;
- only the proof slots, reject criteria, and next real capture that matter to an intended technical or outcome claim;
- one evidence category per media item: `SOURCE_ART`, `GENERATED_PRESENTATION_MEDIA`, `RECONSTRUCTION_DIRECTION`, or `VERIFIED_PRODUCTION_EVIDENCE`.

Freeze case ID, supported authorship, source/permission boundary, identity locks, and any claim blocker that affects public wording. Revise them only from new evidence or an explicit public-story decision, and record the reason. Unknown or irrelevant internal fields may remain unset; completing a template is not an approval requirement.

### 3. Select Proof And Triage Missing Visuals

Read the matching category module, then assign every proposed visual one action:

- `CAPTURE_REAL`: require a matching source asset, DCC or engine capture, client or site record, slicer result, physical object, or outcome record.
- `GENERATE_PRESENTATION`: create evidence-bounded direction or presentation media from approved source art.
- `OMIT`: exclude a duplicate, decorative, misleading, or professionally redundant visual.

For a new category or unfamiliar production domain, run a prebuild `3d-production-expert` gate on the frozen contract, identity locks, evidence boundary, proof map, and reject criteria before creating assets. Treat this as direction validation, not final approval.

Require one memorable hero and only the minimum supporting visuals needed to answer the professional question. Admit each supporting visual only when it proves something the hero and existing supports do not.

Treat claim-specific blockers as absolute for the affected claim. A quality score cannot compensate for missing source, ambiguous role, unsupported title, absent permission, or missing production/outcome evidence. Do not let one blocked technical claim suppress a supportable artistic narrative.

### 4. Build And Review The Media Package

If triage selects `GENERATE_PRESENTATION`, read and follow `references/image-model-media-protocol.md`. Generate the hero first, approve its identity, then create one supporting image at a time.

Do not postpone the public narrative until every desired proof slot exists. Once the supported role, artistic premise, and displayed-media subset are stable, write from that approved subset. Omit an unsupported technical claim or unnecessary support image instead of blocking the whole case.

For every media item:

1. Record its professional purpose, public role, evidence category, source lineage, and forbidden implication.
2. Preserve lossless masters and create optimized public derivatives without overwriting them.
3. Inspect the original-resolution result with direct computer vision; metadata and static checks cannot replace visual judgment.
4. Send the raw media, frozen contract, and relevant claims to `3d-production-expert` for a separated review.
5. Require `PASS`, no unresolved high-severity craft issue, and no hard truth blocker. Treat any rubric score as supporting evidence, not a compensating gate.
6. Repair and repeat on `REJECT`. Never crop, relabel, hide, or delete a defect merely to obtain a pass.

### 5. Write And Implement The Artist Case Narrative

Create two handoffs and keep them separate:

- `PUBLIC_STORY_PACKET`: positive project scope, supported contribution, artistic premise, approved factual inputs, visible decisions and rationale, finished presentation, credits, approved media roles, and at most one concise generated/reconstruction credit where needed.
- `INTERNAL_TRUTH_GUARD`: evidence categories, claim blockers, missing proof, capture backlog, lineage, rejected work, approval state, and audit notes.

The internal guard may cause a public claim to be narrowed or omitted. The writer must never quote, paraphrase, summarize, or turn it into public caveat copy. A missing fact is not a public story beat.

The public writer may inspect the approved public media directly and describe visible artistic relationships. The packet bounds historical, technical, ownership, and outcome claims; it is not a sentence inventory. Visible analysis such as silhouette balance, shape language, costume hierarchy, material contrast, pose, composition, or lighting does not require a separate production-history record.

Require the writer to return an `ARTIST_CASE_NARRATIVE` that:

- uses Lesly's natural first-person singular voice;
- contains several developed paragraphs, not only labels, facts, or card fragments;
- establishes the artistic premise, supported role, and intended visual read;
- explains at least three case-specific decisions tied to approved media;
- uses either a documented production decision or an honestly framed visible artistic rationale, without inventing chronology;
- closes with a grounded result and personal reflection on what the work demonstrates;
- uses case-specific headings and structure rather than a corpus-wide fill-in template.

Website authorship, Git, GitHub, and cloud delivery are valid only where the website itself is the project or resume subject. Never use `Portfolio case author`, `Zero-to-one website presentation`, media ordering, case structure, or public-narrative authorship as the repeated role or story for an artwork case.

Give frontend implementation only the approved public narrative and media:

- case title, positive scope label, lead, developed narrative paragraphs, supported contribution, artistic decisions and rationale, visible result, reflection, credits, and approved public captions;
- hero and gallery objects with paths, dimensions, alt text, captions, and public roles;
- homepage card, route, related-case mapping, and visual-family requirements;
- first-10-second and first-30-second information targets.

The frontend must support developed prose and must not force the narrative back into facts grids or repeated two-column cards. Cards are optional summaries, not the body of the case study. The frontend must not accept or render internal truth-guard keys. Dedicated evidence-status, proof-debt, capture-required, or future-evidence UI is forbidden; proof and deliverables sections default to hidden unless verified public content explicitly enables them.

Update the smallest complete set of active surfaces. Extend registry/validator protection for a new case rather than weakening existing invariants. Search again for the case ID and retired paths; confirm stale layers cannot override the approved package at runtime.

### 6. Verify The Actual Experience

Run the checks owned by the repository:

```bash
node --check script.js
node --check case-study.js
python3 scripts/validate_skill_portfolio.py
git diff --check
python3 .agents/skills/lesly-website-finalizer/scripts/audit_v2_launch.py
```

Then obtain rendered verification through local HTTP at approximately `1440 × 1000` and `393 × 852`:

1. In the first 10 seconds, confirm the artwork, title, positive scope, Lesly's supported role, and artistic premise are accurate and visible.
2. By 30 seconds or one short scroll, confirm the visual problem, case-specific decision or rationale, and finished result are clear.
3. Inspect the hero, every gallery image, public captions/credits, related work, and contact path.
4. Confirm native dimensions, distinct sources, no broken images, no horizontal overflow, and no console warning or error.
5. Inspect the homepage card and category filter; for a new case also verify project count and route uniqueness.
6. Use screenshots or direct computer vision to judge hierarchy and crop. Never claim rendered proof from static checks.

Fix and repeat every failed gate.

### 7. Certify And Record The Case

Update the case-review record with:

- frozen case contract and final public identity;
- independent craft/proof verdict and any supporting score;
- active media paths, native dimensions, evidence categories, and lineage;
- claim-specific `PRESENTATION_SUPPORTED`, `MATCHING_EVIDENCE_VERIFIED`, `HOLD_FOR_REAL_CAPTURE`, or `OMIT` decisions;
- completed remediation and remaining evidence boundary;
- first-10/30-second results and desktop/mobile browser evidence;
- homepage, related-work, contact, duplicate, broken-image, overflow, and console results;
- the single ranked next real capture when an intended claim remains held for matching evidence;
- set-level differentiation by professional question, hero family, evidence type, and recruiter value.

Use `APPROVED` only after every public-presentation gate passes. `READY_FOR_REVIEW` is not approval. Never convert a presentation approval into technical or outcome certification without the matching evidence record. Approval does not require every internal proof slot to be filled when the public narrative omits the affected claim.

The public-story gate fails when any visible string contains internal-review language, missing-proof narration, evidence requests, hypothetical production instructions, future capture work, claim-state jargon, rejection history, or audit/gate commentary. Seed failures include `Evidence status`, `not verified`, `not documented`, `Required next`, `one capture that changes the claim`, `if the model exists`, `proof pending`, `Acceptance path`, and `What the current package makes inspectable`.

Deletion is not a pass. Metadata and cards are not a case study. In the first 10 seconds, a hiring manager must understand the project, positive scope, supported contribution, and strongest finished visual. Within 30 seconds or one short scroll, developed first-person prose must communicate the artistic problem, at least one meaningful decision or visible rationale, the result, and the professional value. Across the complete page, the narrative must explain at least three case-specific artistic decisions and end with a grounded reflection. Any failure keeps the case below `APPROVED`.

For a multi-case request, repeat the complete loop sequentially. After the final case, run corpus-wide route, homepage-card, active-media uniqueness, category, question, evidence-type, responsive, public-boundary, and contact checks.

## Stop Rules

Stop and request direction only when a choice would materially change the public project story, expose private or unlicensed work, overwrite unrelated changes, remove a registered route, or publish externally without authority.

Do not stop merely because production evidence is incomplete. Build the strongest professional reconstruction or presentation direction the evidence supports, narrow or omit unsupported public claims, and keep the capture backlog and truth boundary in the internal record. A short presentation-image credit is allowed when needed; a public proof-debt narrative is not.
