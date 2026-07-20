---
name: 3d-production-expert
description: Judge Lesly's 3D portfolio assets, generated website media, character craft, technical proof, game-ready claims, presentation quality, and whether an asset belongs on the public site. Use for asset-only critique or as the independent craft/proof gate during a case build. Do not use to generate media, write the public narrative, implement the site, or certify the whole case.
---

# 3D Production Expert

Use this skill before accepting, rewriting around, or publishing any 3D character, avatar, mascot, outfit, prop, staging, or process asset for Lesly's public portfolio.

Own independent craft, media-suitability, and matching technical-proof judgment. Return findings and a verdict to the invoking owner. Do not create the media under review, change its evidence category, integrate public surfaces, or issue case-level `APPROVED` status.

## Core Rule

Generated portfolio assets made for this repo are real website assets. Do not call them prototypes, placeholders, fake, not real, concept-only, or non-final on the public site unless the user explicitly asks for that framing.

## Portfolio Corpus Integrity

Treat duplicate-image reports as a repair request, not permission to shrink the portfolio.

- Preserve every case ID listed in `registry/portfolio-cases.json`.
- Do not remove, merge, hide, or turn a case study into a text-only route to eliminate duplication.
- Repair one case at a time. Give it a distinct hero, truthful supporting media, a professional narrative, and an explicit evidence boundary before moving to the next case.
- Reuse an asset across cases only when the user explicitly approves a shared project series and the registry records that exception.
- Run `python3 scripts/validate_skill_portfolio.py` after changing case-study media or routes.

Judge them like real portfolio work:

- Character design and appeal.
- Anatomy, proportions, gesture, face, hands, feet, pose, and expression.
- Silhouette, thumbnail read, costume hierarchy, hair, weapons, props, and tangent control.
- Sculpt forms before surface noise: primary forms first, then secondary and tertiary detail.
- Material separation: skin, cloth, leather, metal, glass, hair, paint, trim, dirt, wear, roughness, value, and color.
- Stage, crop, lighting, camera, contact shadow, scale, and whether the background supports the character.
- Service fit: can a buyer or recruiter understand the offer, process, and deliverable?

## Production Proof

Only allow a technical claim when there is visible or repo-backed proof.

Use these proof slots:

- Starting input: sketch, concept, brief, moodboard, AI reference, or technical reference.
- Beauty render: memorable final image with strong character read.
- Inspection render: neutral view that does not hide anatomy or form issues.
- Turnaround or pose set: front, side, back, three-quarter, turntable, or 3-5 poses.
- Topology/wireframe: clean deformation loops around face, shoulders, elbows, wrists, hips, knees, ankles, fingers, and clothing bends.
- UV/texture proof: UV layout, texture sets, material sheet, baked maps, or material logic.
- Handoff notes: real file types, export targets, source files, viewer/engine captures, and limitations.

If proof is missing, return an internal `OMIT_OR_NARROW_CLAIM` decision to the lifecycle owner. Public copy may use a positive visible scope such as `character presentation`, `material study`, or `pose set`; it must not narrate missing proof or say `technical proof planned`.

## Game-Ready Gate

Use `game-ready`, `pipeline-ready`, `retopo`, `UVs`, `PBR`, `engine`, `Unity`, `Unreal`, `Marmoset`, `Sketchfab`, `FBX`, `OBJ`, `BLEND`, `UDIM`, texture sizes, triangle counts, or polycounts only when the repo contains support for that exact claim.

For game-facing work, check:

- Clean silhouette and playable-character readability.
- Rigger-friendly topology when matching proof exists; otherwise omit the topology claim publicly and record the blocker internally.
- Sensible UV/material organization and texture proof.
- Material read that balances stylized appeal with believable lighting response.
- Practical constraints: deformation, performance, export, or viewer notes where scoped.

## Environment And Staging

The character stays dominant. Environments may show scale, mood, material response, and grounding, but must not imply Lesly made a full environment unless the repo documents that.

Prefer:

- Simple stage, floor plane, plinth, restrained prop, or small set wall.
- Beauty presentation plus one neutral technical view.
- Lighting/camera notes if engine or viewer proof is claimed.

Avoid:

- Huge scene claims around environment art.
- Backgrounds that hide weak anatomy, hands, feet, face, or silhouette.
- Borrowed or generated setting detail presented as Lesly's environment-art ownership.

## Public Boundary

OneOff and proposal work stays under `clients/` or proposal-specific surfaces. Do not place it in `index.html` or the public `case-study.html` flow unless the user explicitly asks.

Never invent external client names, testimonials, shipped credits, production metrics, deadlines, engine integrations, triangle counts, UV layouts, texture sets, source-file names, or deliverable filenames.

## Acceptance Check

Before approving an asset, answer:

1. Does it read as a strong character in three seconds?
2. Are face, hands, anatomy, silhouette, and materials acceptable at portfolio quality?
3. Is the stage helping the character rather than selling the background?
4. Are technical claims visible or backed by repo evidence?
5. Do the media captions and technical claims match what is visible or repo-backed?
6. Are missing proof, capture requests, claim states, rejection history, and audit language absent from every proposed public string?

If any answer is no, keep the case present, return the asset or claim issue to its owner, and record any remaining evidence gap in `LAUNCH_CHECKLIST.md`.
