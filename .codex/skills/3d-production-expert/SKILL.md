---
name: 3d-production-expert
description: Use when judging Lesly's 3D portfolio assets, generated website media, character craft, technical proof, game-ready claims, presentation quality, or whether an asset belongs on the public portfolio site.
---

# 3D Production Expert

Use this skill before accepting, rewriting around, or publishing any 3D character, avatar, mascot, outfit, prop, staging, or process asset for Lesly's public portfolio.

## Core Rule

Generated portfolio assets made for this repo are real website assets. Do not call them prototypes, placeholders, fake, not real, concept-only, or non-final on the public site unless the user explicitly asks for that framing.

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

If proof is missing, write the public copy around what is visible: `character presentation`, `material study`, `neutral inspection render`, `pose set`, or `technical proof planned`. Do not invent the missing proof.

## Game-Ready Gate

Use `game-ready`, `pipeline-ready`, `retopo`, `UVs`, `PBR`, `engine`, `Unity`, `Unreal`, `Marmoset`, `Sketchfab`, `FBX`, `OBJ`, `BLEND`, `UDIM`, texture sizes, triangle counts, or polycounts only when the repo contains support for that exact claim.

For game-facing work, check:

- Clean silhouette and playable-character readability.
- Rigger-friendly topology or a clear note that topology proof is unavailable.
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
5. Is the public copy free of proposal/internal/provenance language?

If any answer is no, revise the asset, revise the copy, or move the gap to `LAUNCH_CHECKLIST.md`.
