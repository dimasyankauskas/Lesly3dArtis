# Architecture Evaluation Scenarios

Use this file only to maintain or forward-test the skill architecture. Do not load it during ordinary case work, and do not expose expected results to an independent test agent.

## Routing Scenarios

| User job | Expected owner and route | Non-owner |
|---|---|---|
| Rebuild Forge Warden media, story, and route | `build-lesly-case-study` coordinates expert, writer, frontend, and finalizer | No companion coordinator |
| Judge whether a Sol render is portfolio quality without changing the case | `3d-production-expert` only | Case builder remains dormant |
| Rewrite the Tideglass narrative without changing facts or media | `3d-portfolio-writing-director`, then humanizer if needed | Case builder remains dormant |
| Fix a mobile gallery crop without changing story or evidence | `frontend-design`, then `lesly-website-finalizer` for rendered proof | Case builder remains dormant |
| Launch-audit the full public site | `lesly-website-finalizer` | Case builder remains dormant |
| Create one missing support visual for a registered case | `build-lesly-case-study` loads image protocol and production expert | No image-generation companion |

Forward-test each prompt with only the named skill path, raw task-local artifacts, and read-only authority. Ask for the proposed first action, required handoffs, evidence boundary, and stop/continue decision. Do not leak this table's expected route.

## Frozen-Handoff Scenarios

Confirm these fields survive internal lifecycle and truth/craft handoffs unchanged unless the test introduces new evidence:

- case ID;
- professional question;
- evidence category;
- source and permission boundary;
- identity locks;
- claim blockers;
- approved media role.

The public writer and frontend receive the positive facts and approved media that result from these fields, not the internal field names, blockers, or proof ledger. Test the corridor:

```text
builder contract
→ production expert verdict
→ positive facts plus approved media
→ first-person artist narrative
→ frontend implementation packet
→ finalizer rendered receipt
→ builder certification
```

Fail when a specialist silently changes authorship, permission, evidence category, project status, technical claim, or public outcome. Also fail when the writer treats the frozen contract as a required public schema or paraphrases its internal labels.

Also fail when generated or reconstruction media receives `MATCHING_EVIDENCE_VERIFIED`; it may receive only `PRESENTATION_SUPPORTED` for a bounded visible claim.

Run a separate public/internal separation test. Only the `PUBLIC_STORY_PACKET` may reach the writer and frontend. Fail when any public string exposes or paraphrases claim states, proof ledgers, capture requests, missing-proof notes, source-lineage mechanics, forbidden implications, rejection history, approval state, or audit commentary.

## Missing-Visual Scenarios

| Scenario | Required decision |
|---|---|
| DCC wireframe is missing for a retopology title | `CAPTURE_REAL`; narrow title until captured |
| Character hero is missing but approved source art and permission exist | `GENERATE_PRESENTATION`; inspect identity at original resolution |
| Proposed second beauty image repeats the hero's value | `OMIT` |
| Client approval screenshot or comments are absent | `CAPTURE_REAL`; never generate them |
| Prop-family material-direction image is missing | Generate only presentation direction; capture real maps/shaders for technical claims |
| Physical collectible result is absent | Capture a real print; generated form or proposed grouping remains direction only |
| Requested visual is a dashboard, process board, or fake wireframe | `OMIT` or replace with semantic HTML plus truthful media |
| Direction comparison has no real review history | Generate only labelled reconstructed options; do not imply approval |

## Browser And Set-Level Gates

For an implemented representative case, verify through local HTTP at approximately `1440 × 1000` and `393 × 852`:

- first 10 seconds: result, title, positive scope, supportable contribution, and assignment;
- first 30 seconds: problem, constraint, decision, consequence, and strongest supportable process/result;
- hero/support crop and native loading;
- public captions/credits, related work, and contact;
- no overflow, broken media, console warning, or console error.

Use a positive scope label instead of an evidence/status field. Fail the first-10-second gate when public text leads with caveats or when the project, supportable contribution, and strongest finished visual are unclear. Fail the first-30-second gate when deleting caveats leaves a thin page without a brief, challenge, meaningful decision, visible result, and professional value.

Across all registered cases, compare:

- professional question;
- hero family and active file digest;
- evidence category;
- recruiter/buyer value;
- category and related-case rationale.

Preserve every ID. Equal prominence and equal page length are not required.

## Artist-Narrative Scenarios

Forward-test the writer and lifecycle gate with raw approved media plus positive supported facts. Do not expose the expected result to the test agent.

The following must fail:

- a complete facts grid plus problem/process/detail cards but no developed first-person prose;
- `Portfolio case author`, `Zero-to-one website presentation`, or website-building narration used as the role for an artwork case;
- one template reused across cases with only the project name and art nouns changed;
- internal evidence, capture, approval, or provenance language in captions, metadata, hidden public data, or shipped JavaScript;
- repeated AI/presentation status labels on every image;
- a fabricated sculpting, modeling, topology, texturing, rigging, engine, client, or outcome history.

The following must pass:

- a sparse-evidence visual-direction case with several first-person paragraphs grounded in approved media;
- at least three specific observations about form, silhouette, costume, materials, composition, lighting, or staging;
- a visible artistic rationale where no production decision record exists;
- a grounded result and reflection that does not invent technical work or chronology;
- at most one unobtrusive presentation-image credit;
- case-specific headings and prose that differ materially from the rest of the portfolio.

Test both a character case and a non-character case. A valid narrative must remain possible when technical proof is absent and the affected technical claim is omitted.

## Keep Split Retire Criteria

Keep the architecture when:

- full case work routes to one lifecycle owner;
- asset-only critique, copy-only, frontend-only, and site-wide audit prompts remain with their specialists;
- optional references load only for their branches;
- frozen fields and hard blockers survive handoffs;
- representative cases complete without duplicated rules or a second coordinator.

Consider a separate image-creation skill only when repeated independent asset-only jobs demonstrate all of:

- a stable trigger that does not compete with case repair;
- a reusable output that has value outside the case lifecycle;
- a distinct owner and evaluation boundary;
- lower routing/context cost than the builder-owned reference;
- passing adjacent-negative and handoff tests.

Retire or refuse the split when it competes for case prompts, duplicates truth or craft rules, self-certifies its media, or cannot produce a meaningful accepted outcome without `build-lesly-case-study`.
