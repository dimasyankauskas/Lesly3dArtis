# Product Build Gate V1 — Local Decision-Equivalent

## Provenance Notice

The canonical artifact `artifacts/prompts/projects/codex-expert/product-build-gate/product_build_gate_v1_2026-07-04.md` is not present locally. This file records the required decision-equivalent gate for this repository. It must not be represented as the missing canonical artifact.

## Product Experience Decision

Lesly's site is a recruiter- and buyer-facing portfolio for US game-studio roles and elite freelance character work. A visitor must understand within one scan:

1. Lesly is a 3D Character Artist.
2. The visible project direction is professionally art-directed.
3. Which images are visual direction and which are verified 3D production evidence.
4. How to inspect the work and start a project.

The experience will use an honest hybrid model: premium reconstruction direction now, genuine technical captures when Lesly creates them. The site must never use visual polish to imply nonexistent production proof.

## Audience And Primary Jobs

- Recruiter or art director: assess character taste, silhouette, craft judgment, production awareness, and truthful evidence quickly.
- Freelance buyer or founder: understand available character services, project fit, process, and contact path.
- Lesly: receive coherent recreation packets that can guide future work in Blender, ZBrush, Substance, Maya, Marmoset, or another accurate tool.

## Information Architecture And Surface Map

- Homepage hero: strongest character direction, safe desktop/mobile crop, role and value, immediate project/contact path.
- Work grid: distinct project families with accurate thumbnails and concise roles.
- Case-study hero: project direction and intended value without unsupported technical claims.
- Case-study gallery: natural-ratio media, accessible captions, explicit distinction between direction, verified capture, and future evidence.
- Proof/deliverables sections: only repository-backed facts; otherwise production requirements and capture checklists.
- About/contact: approved likeness only, credible artist positioning, unobstructed inquiry path.

Existing section IDs and static HTML/CSS/vanilla-JavaScript architecture remain stable.

## UI Contract

- Maximum two font families, using existing design tokens.
- Images retain their intended aspect ratio unless an approved art-directed crop exists.
- The hero uses separate desktop and mobile-safe media rather than relying on one destructive crop.
- Wide boards or workflows remain wide and scroll-free; they stack or scale without clipping meaningful content.
- Captions and labels are HTML, not tiny generated text embedded in raster art.
- Media records may expose role, aspect, and evidence status to rendering code, but public wording remains portfolio language rather than audit jargon.
- Contact access remains visible. Navigation, theme, filters, reveals, and menu behavior remain functional.

## States And Recovery

- Missing asset: do not publish the reference; fail local verification.
- Unverified technical proof: show a professional build specification or omit the proof image, never fabricate it.
- Real capture required: preserve the project and give Lesly a capture checklist.
- Identity inconsistency or craft failure: block promotion and keep the last approved asset active.
- Mobile crop failure: use a dedicated crop/source or natural aspect ratio; do not accept hidden anatomy or labels.
- Generation failure: retain the approved baseline, revise with one corrective hypothesis, and stop after three failed targeted attempts.

## Visual Provenance Decision

Every public visual must be one of:

- `GENERATED_DIRECTION`: approved art direction or reconstruction target; cannot prove production execution.
- `VERIFIED_CAPTURE`: genuine tool, source-file, physical-output, or project capture supporting the accompanying claim.
- `PROJECT_EVIDENCE`: approved/redacted document, image, or workflow artifact from the real project.
- `CONTEXT_ILLUSTRATION`: supports presentation but is not used as operational or technical proof.
- `HOLD_FOR_REAL_CAPTURE`: not eligible for a proof slot until genuine evidence exists.

No generated image may be classified as `VERIFIED_CAPTURE` merely because it resembles a render, wireframe, UV layout, application screenshot, or slicer view.

## Verification Matrix

| Surface | Primary proof | Required checks |
|---|---|---|
| Homepage hero | Character direction and positioning | Head/face visible after refresh; desktop/mobile crop; CTA; load/performance |
| Work grid | Project differentiation | Correct thumbnail/alt/caption; no duplicate masquerading; responsive layout |
| Warrior series | Locked character identity | Face, body, costume, weapon, hands/feet, materials, and story continuity |
| Sculpt/retopo | Form direction versus real proof | No faux topology/UV claim; future capture checklist |
| Avatar/mascot/outfits/print | System consistency | Identity, expressions/poses, construction, and honest rig/print status |
| Interior props | Matching scene evidence | Procedural mesh not used to prove unrelated beauty art; exact claims removed/held |
| Workflow cases | Real decision flow | Meaningful labels, approved evidence, no generic decoration as proof |
| About/contact | Trust and conversion | Approved likeness, no trademarks, visible inquiry path |
| All pages | Site integrity | No broken assets/overflow; natural media ratios; keyboard/accessibility; JS/audit pass |

## Implementation Stop/Go

Result: `GO`

Reason: audience, product outcome, information architecture, UI behavior, provenance taxonomy, failure states, verification matrix, scope, and stop rules are decision-complete. Implementation must return `BLOCKED_PRODUCT_GATE` if any of these decisions are removed or contradicted.

## Final Revalidation — 2026-07-17

Result: `GO`

The final local release candidate still preserves the intended audience, public information architecture, two-font UI contract, responsive media rules, contact path, recovery behavior, and provenance taxonomy. Generated character images are labeled as reconstruction direction; staged workflow imagery is labeled as generated visual direction; all unsupported production-proof roles remain behind explicit real-capture requirements; and no project or public route was removed.
