# Image-Model Media Protocol

Use this protocol only after missing-visual triage selects `GENERATE_PRESENTATION`. Direct image generation creates genuine public portfolio media, but it cannot create production history or operational evidence.

## Contents

1. [Eligibility](#eligibility)
2. [Source inspection and locks](#source-inspection-and-locks)
3. [Role and prompt specification](#role-and-prompt-specification)
4. [Generation sequence](#generation-sequence)
5. [Original-resolution review](#original-resolution-review)
6. [Masters, derivatives, and lineage](#masters-derivatives-and-lineage)
7. [Category recipes](#category-recipes)

## Eligibility

Generate only when all are true:

- the professional question and distinct proof purpose are recorded;
- approved source art or an approved continuity image exists;
- source ownership, permission, privacy, and public-use boundaries are known;
- the intended output is presentation, direction, comparison, or risk media;
- the image adds proof not already supplied by the hero or another support;
- no reasonable reader would need to mistake it for technical, operational, approval, physical, or outcome evidence for it to be useful.

Require real capture instead when the claim depends on topology, UVs, maps, source tools, engine state, rigging, tracking, client comments, approval, construction records, slicer evidence, test prints, physical objects, shipment, adoption, or measured outcomes.

Omit the image when it is decorative, redundant, misleading, unreadable, or professionally weaker than the finished public story. Record the reason only in the internal truth guard.

## Source Inspection And Locks

1. Inspect every approved reference and active case image with direct computer vision at original resolution.
2. Record native dimensions, source owner, permission, whether it may appear publicly, and whether it is an exact asset or direction reference.
3. Record identity locks:
   - face, species, age, body proportions, and silhouette;
   - hair, markings, palette, costume layers, construction, and materials;
   - props, handedness, scale relationships, damage/wear, and repeated motifs;
   - category-specific contact, balance, camera, or staging constraints.
4. Record visible source defects that must not be propagated.
5. Reject a generation branch when continuity cannot be anchored without using private, unlicensed, or unresolved material.

## Role And Prompt Specification

Choose the role before writing the prompt:

- **Hero:** make one immediate, memorable statement of subject identity and professional value.
- **Supporting proof:** answer one named question the approved hero does not answer.

Choose the output ratio from the real site slot. Do not generate first and force a misleading crop later.

Write every prompt from this schema:

```text
Professional question:
Proof purpose and public role:
Evidence category: GENERATED_PRESENTATION_MEDIA | RECONSTRUCTION_DIRECTION
Approved continuity references:
Source and permission boundary:
Identity locks:

Subject and action:
Anatomy and silhouette:
Costume, prop, or construction logic:
Materials and surface hierarchy:
Camera and lens intent:
Composition, crop, and negative space:
Lighting, contact shadow, and ground contact:
Background or stage boundary:
Output ratio and intended site slot:

Forbidden implications:
Negative constraints:
```

Always include explicit negative constraints for:

- identity drift or changed age/species/proportions;
- broken anatomy, asymmetry, duplicate limbs, merged fingers, malformed hands or feet, or hidden defects;
- inconsistent costume layers, props, handedness, scale, materials, or markings;
- floating feet, missing contact shadow, impossible weight, tangents, or contradictory perspective;
- fake UI, fake software chrome, fake wireframes, fake topology, fake technical overlays, decorative process boards, or status tokens;
- unreadable text, accidental logos, watermarks, client names, approvals, measurements, and unsupported proof.

Keep factual labels, comparisons, captions, and handoff structure in semantic HTML whenever possible. Do not ask an image model to render evidence-bearing text or interface states.

## Generation Sequence

1. Generate the hero first from approved source art.
2. Review it at original resolution and reject identity or craft defects before proceeding.
3. Use the approved hero together with the original source as continuity references for supporting media.
4. Generate one supporting image at a time.
5. Change only the variables required by that support's professional question.
6. Review and approve or reject each result before generating another.
7. Stop when the professional question is answered. Do not fill a target image count.

Reject and regenerate weak work. Never obtain a pass by cropping away hands, feet, props, contact, identity drift, or construction defects, or by explaining them away in captions.

## Original-Resolution Review

Inspect every candidate directly at native resolution:

- identity, face, expression, age, species, and proportions;
- anatomy, gesture, hands, fingers, feet, weight, and balance;
- silhouette, costume hierarchy, construction joins, attachments, and prop logic;
- material separation, roughness/value behavior, repeated details, and continuity;
- camera, perspective, composition, crop, negative space, lighting, shadows, and ground contact;
- background ownership and whether staging overclaims another discipline;
- artifacts, unreadable marks, fake interface/technical language, and accidental brand elements;
- consistency with the master source, approved hero, case contract, and intended evidence category;
- likelihood that a scan reader could mistake the image for unsupported production proof.

Require `3d-production-expert` to inspect the raw native-resolution file and the case contract. A thumbnail or optimized derivative is insufficient for acceptance.

## Masters Derivatives And Lineage

- Retain the lossless generated master.
- Create optimized public derivatives without overwriting the master.
- Use Python only for permitted validation, metadata inspection, color/format conversion, compression, and resizing/cropping of approved assets; never use it to create or repair public imagery.
- Record master and derivative paths, dimensions, format, crop, source references, prompt purpose, evidence category, supported claim, forbidden implication, and reviewer state in the internal lineage record.
- Classify every image as `SOURCE_ART`, `GENERATED_PRESENTATION_MEDIA`, `RECONSTRUCTION_DIRECTION`, or `VERIFIED_PRODUCTION_EVIDENCE`.
- Never upgrade generated media to verified production evidence through captions, annotations, review scores, or public placement.
- Do not expose evidence-category names, forbidden implications, missing captures, or reviewer state as public page architecture. When disclosure is useful, use one concise credit such as `Portfolio presentation image created from approved source art`.

## Category Recipes

### Character Identity, Construction, And Movement Risk

- Define the identity read, role silhouette, costume layers, props, movement question, and target slot.
- Generate one identity-led hero with complete face, hands, feet, props, and ground contact.
- Generate at most one coordinated neutral/construction view and one movement-risk direction when each answers a distinct question.
- Hold face, proportions, costume, handedness, prop scale, and material hierarchy constant.
- Label support views as direction. Never imply one captured model, rig, deformation test, topology, or engine result.

### Prop Family, Scale, Construction, And Materials

- Define family purpose, object hierarchy, scale relationship, repeated construction language, materials, viewing distance, and scene role.
- Generate the strongest hero object or set first.
- Add either a family/scale direction or a material/construction comparison, only when distinct.
- Keep object count, proportions, hardware, materials, camera, and environment ownership consistent.
- Never imply real modularity, functional hardware, UVs, shaders, optimization, collision, LOD, or engine setup.

### Visual-Direction Comparison And Handoff

- Start from one permissioned input and state whether the workflow is real, fictional, or reconstructed.
- Generate genuinely different direction options one at a time while controlling unrelated variables.
- State the selection criteria and rationale in HTML/captions.
- Present the handoff as proposed requirements or a direction package, not fake software or approval UI.
- Never invent client comments, reviewers, versions, dates, selected/approved states, implementation, or measured impact.

### Collectible Form And Proposed Components

- Define identity, intended scale read, silhouette, center-of-gravity concern, base contact, fragile forms, and physical-risk questions.
- Generate a beauty or clay/form hero first.
- Add coordinated risk views or proposed component grouping only when clearly labelled `proposed`.
- Preserve ears, horns, cape, tail, staff, ornaments, hands, feet, and base relationships across views.
- Never imply actual cuts, keys, tolerances, wall thickness, watertightness, hollowing, drainage, supports, slicer results, test prints, assembly, or manufacturability.
