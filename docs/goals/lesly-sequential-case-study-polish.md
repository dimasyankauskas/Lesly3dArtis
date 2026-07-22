# Lesly Sequential Case-Study Polish

## Outcome

Polish, structure, complete, and verify every public Lesly portfolio case study, working on exactly one registered case at a time.

Use one primary executing agent for the full queue. Do not begin, inspect for implementation, generate media for, or modify the next case until the active case passes the complete `CASE_ADVANCE_GATE` and is recorded `APPROVED` for truthful public presentation.

> **Narrative-gate revision — 2026-07-21:** Apply the current repository skills when this brief conflicts with them. `CASE_ADVANCE_GATE` now requires developed first-person artist prose, case-specific visual decisions, and reflection; it must not require a public facts grid, fixed card sections, website-authorship metadata, or completion of irrelevant technical proof slots. The numbered public-story beats below are information goals, not a page schema.

Temporary reviewer agents may review only the currently active case when required for independent evidence. Never run parallel case builds.

## Source Truth

Read and follow:

- `AGENTS.md`
- `registry/portfolio-cases.json`
- `.agents/skills/build-lesly-case-study/SKILL.md`
- its conditionally required files under `.agents/skills/build-lesly-case-study/references/`
- `.agents/skills/3d-production-expert/SKILL.md`
- `.agents/skills/3d-portfolio-writing-director/SKILL.md`
- `.agents/skills/frontend-design/SKILL.md`
- `.agents/skills/lesly-website-finalizer/SKILL.md`
- `reserch/senior-3d-portfolio-case-study-benchmark.md`
- only the additional strategy/research files relevant to the active case
- the actual current runtime data, active overrides, media, review records, and worktree state

Treat `registry/portfolio-cases.json` as the authoritative case corpus. At the beginning, snapshot its ordered IDs into a durable queue. Preserve every ID and route.

Rank the queue before starting using:

1. unsupported or ambiguous public-claim risk;
2. flagship recruiter value;
3. missing first-read truth;
4. missing category proof;
5. weak differentiation from other cases.

Record the order and rationale. After implementation begins, reorder only if newly discovered evidence makes the next planned case unsafe or materially lower priority.

## Authority And Boundaries

Local, reversible edits needed to complete the cases are authorized, including evidence-bounded copy, direct image generation, approved-media derivatives, HTML/CSS/JavaScript integration, registries, and review records.

Do not:

- publish or deploy without an explicit separate request;
- delete registered cases or source/master media;
- merge, hide, rename, or convert a case to text-only;
- expose OneOff, proposals, private work, or unlicensed sources;
- overwrite unrelated dirty work;
- invent clients, authorship, approvals, shipped work, outcomes, metrics, tools, source files, topology, UVs, maps, engine state, construction records, print engineering, or physical results;
- use Python, PIL, canvas, or procedural board generation to create or repair public imagery.

Public imagery must come from approved source art or direct image generation. Python may be used only for validation, metadata, conversion, compression, and resizing or cropping approved assets.

## Execution

### 1. Establish The Queue

Before changing a case:

- inspect `git status`;
- freeze the registered case queue;
- record each case’s current public title, route, hero, category, evidence status, and highest visible risk;
- select exactly one active case ID;
- leave every other case implementation untouched.

### 2. Run The Complete Case Loop

For the active case, use `build-lesly-case-study` as the sole lifecycle owner.

#### A. Freeze The Case Contract

Record:

- project context and production/outcome state;
- Lesly’s role and authored scope;
- inherited inputs, collaborators, and downstream owners;
- source, owner, permission, privacy, and public-use boundaries;
- one professional question;
- one distinct recruiter or buyer value;
- strongest currently supportable claim and its claim state;
- highest-risk unsupported claim;
- category and identity locks;
- proof slots and reject criteria;
- one ranked next real capture.

Freeze the case ID, professional question, evidence categories, permission boundary, identity locks, claim blockers, and approved media roles across all handoffs.

#### B. Inspect The Real Current State

Find every active case object, runtime override, homepage card, related-case mapping, copy layer, and media path.

Inspect all active and candidate source media with direct computer vision at original resolution. Identify:

- missing or repeated images;
- weak or misleading views;
- identity drift;
- anatomy, hand, foot, prop, construction, material, crop, lighting, or grounding defects;
- ornamental boards, fake UI, fake technical proof, or unreadable text;
- delayed or ambiguous evidence boundaries;
- unsupported titles, captions, or outcomes.

#### C. Build The Proof Map

Load the relevant category module:

- character/game;
- props/interiors;
- visual-direction/client-review;
- print/collectible.

Assign every required or proposed visual exactly one action:

- `CAPTURE_REAL`
- `GENERATE_PRESENTATION`
- `OMIT`

Require one professional hero plus only the supporting visuals needed to answer distinct professional questions. Do not fill a generic image count.

Real production, operational, approval, construction, slicer, physical-object, and outcome evidence must come from the matching source asset or record. Never simulate it.

#### D. Create Or Repair Media

When direct generation is allowed, follow `references/image-model-media-protocol.md` completely:

1. inspect approved source art at original resolution;
2. record permissions and identity locks;
3. define the professional question, proof purpose, public role, ratio, and forbidden implications;
4. generate the hero first;
5. inspect and approve its identity before proceeding;
6. use the approved hero and source art for continuity;
7. generate one supporting visual at a time;
8. review every candidate at original resolution;
9. reject and regenerate weak work rather than hiding defects through crops or captions;
10. retain lossless masters and create optimized public derivatives;
11. record source lineage and evidence category.

Every image must be classified as:

- `SOURCE_ART`
- `GENERATED_PRESENTATION_MEDIA`
- `RECONSTRUCTION_DIRECTION`
- `VERIFIED_PRODUCTION_EVIDENCE`

Generated or reconstructed media may receive `PRESENTATION_SUPPORTED`; it must never receive `MATCHING_EVIDENCE_VERIFIED`.

#### E. Pass Independent Craft And Proof Review

Give the raw original-resolution media, frozen contract, intended captions, and claims to `3d-production-expert`.

Require:

- `PASS`;
- no unresolved high-severity craft defect;
- no identity, continuity, anatomy, construction, material, crop, camera, lighting, or grounding blocker;
- no unsupported technical or outcome claim;
- no hard truth blocker.

Treat scores as supporting evidence only. A high aggregate score cannot override missing permission, ambiguous authorship, unsupported titles, or absent real evidence.

Repair and repeat on `REJECT`.

#### F. Complete The Public Story

Split the handoff into an internal truth guard and a `PUBLIC_STORY_PACKET`. The internal record contains evidence categories, claim blockers, capture backlog, lineage, rejection history, and approval state. It may remove or narrow a public claim, but neither the writer nor frontend may quote, paraphrase, or render it.

Use `3d-portfolio-writing-director` to create a concise public narrative containing:

1. hero, title, positive scope, supportable contribution, and one-line assignment;
2. documented project brief and starting point;
3. creative or production challenge;
4. constraint, decision, rationale, and consequence;
5. strongest visible process or design development;
6. finished presentation or supportable result in context;
7. documented credits and one concise presentation-image credit when needed;
8. distinct related case and contact path.

Keep claim states, missing proof, capture requests, scores, rejection history, provenance/lineage mechanics, prompts, agent commentary, approval state, and audit language out of public copy. Unknown or unsupported facts are omitted, never published as unverified or pending. Use `humanizer` only after facts and substantive narrative are approved.

#### G. Implement Every Required Surface

Use `frontend-design` to integrate the approved package into:

- active case data and runtime overrides;
- hero and gallery objects;
- dimensions, alt text, public captions/credits, and roles;
- homepage card and category filter;
- related-case mapping;
- responsive layout and accessibility;
- finished public story and contact path.

The public renderer must reject internal truth-guard keys and dedicated evidence-status, proof-ledger, capture-required, or future-evidence sections.

Search again for stale case data and retired media paths. Confirm no stale override can replace the approved package at runtime.

### 3. CASE_ADVANCE_GATE

Do not begin the next case until every item below passes for the active case:

- relevant authorship, permission, identity, and public-claim boundaries recorded; irrelevant empty template fields are not blockers;
- source and permission boundary resolved;
- every proposed visual classified as capture, generate, or omit;
- hero and all required supporting media accepted at original resolution;
- independent 3D craft/proof verdict is `PASS`;
- public story contains developed first-person artist prose, at least three media-grounded decisions, and a grounded result/reflection;
- no public string contains internal-review language, missing-proof narration, evidence requests, hypothetical production instructions, future capture work, claim-state jargon, rejection history, or audit/gate commentary;
- deletion alone has not produced a thin page: the artistic premise, supported contribution, visible rationale, result, and professional value are present;
- all active public surfaces are implemented;
- claim states are recorded only for technical or outcome claims that require them;
- first-10-second gate passes;
- first-30-second gate passes;
- deterministic checks pass;
- rendered desktop and mobile checks pass;
- homepage card, filter, related work, and contact path pass;
- no broken images, repeated active sources, overflow, console warnings, or console errors;
- the case is distinct from the rest of the portfolio by professional question, hero family, evidence type, and recruiter value;
- review record is updated;
- final state is `APPROVED`.

`APPROVED` means truthful, professional public presentation. It does not certify production or outcomes without matching evidence.

If production evidence is unavailable, narrow the public title and claims and retain the strongest truthful presentation. Record `HOLD_FOR_REAL_CAPTURE` and the highest-value next capture only in the internal truth guard.

If the active case cannot become truthfully presentable because permission, ownership, source identity, or a material public-story decision is unresolved, stop the entire queue and request direction. Do not skip it or begin another case.

### 4. Verification

For every active case run:

```bash
node --check script.js
node --check case-study.js
python3 scripts/validate_skill_portfolio.py --case <active-case-id>
git diff --check
python3 .agents/skills/lesly-website-finalizer/scripts/audit_v2_launch.py --case <active-case-id>
```

Preview through local HTTP and inspect approximately:

- `1440 × 1000`
- `393 × 852`

Verify:

- first 10 seconds: result, title, positive scope, supportable contribution, and assignment;
- first 30 seconds: problem, constraint, decision, consequence, and strongest visible result;
- hero and every gallery image at rendered and original resolution;
- public captions/credits, related work, category filter, and contact;
- native image loading, crop, overflow, console state, and public/private boundaries.

Do not claim rendered success from static checks.

After the final case, run the validator and launch audit again without `--case` for the complete corpus.

## Completion

The goal is complete only when:

- every case ID frozen from `registry/portfolio-cases.json` has completed the full loop;
- every case has a distinct professional question, hero family, evidence profile, and reason to exist;
- every case is recorded `APPROVED` for truthful public presentation;
- every technical or outcome claim has matching evidence or has been narrowed, held, or omitted;
- no case contains decorative or misleading filler media;
- no route is removed, merged, hidden, renamed, or made text-only;
- all registered cases remain public, image-led, responsive, and connected to the contact path;
- the final corpus-wide audit passes.

After the final case, run a portfolio-wide audit of:

- all routes and homepage cards;
- registered IDs and media floors;
- active media paths and content digests;
- hero and professional-question differentiation;
- categories and related-case mappings;
- public-story separation from internal truth guards and claim states;
- first-read truth;
- desktop/mobile behavior;
- public/private boundaries;
- contact visibility;
- broken images, overflow, and console state.

## Final Report

Return:

- the frozen queue and completed order;
- one compact approval receipt per case;
- final active media paths and evidence categories;
- claim states and remaining real-capture needs;
- independent review and browser evidence;
- deterministic command results;
- corpus-wide differentiation and integrity results;
- any remaining unverified external surface.

Do not claim completion while any registered case remains below `APPROVED` or any required verification evidence is missing.
