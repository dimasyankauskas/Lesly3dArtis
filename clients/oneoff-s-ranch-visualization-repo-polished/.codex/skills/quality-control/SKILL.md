# Skill: Visual Quality Control

Use this skill to review generated images.

## Checklist
- real photorealistic render when the requested asset is a client render
- source references were actually used, or generation stops as blocked
- correct four-panel count
- correct bifold pair behavior
- no full room behind opening
- shallow niche only
- preserves wood/metal/glass design language
- visually premium but technically credible

Reject images that get the mechanism wrong, even if beautiful.

Also reject non-photoreal diagrams, cards, PIL/canvas drawings, SVG-style boards, or UI mockups when the requested output is a real client render.

## Severity gates

Critical failure, reject immediately:

- requested client render is not photorealistic,
- render was created without the required PDF/image references while claiming blueprint alignment,
- deterministic board/diagram output is presented as a real render,
- fewer or more than four lower panels,
- four independent swing doors,
- all panels folded to one side,
- left-open state does not keep right pair closed,
- both-open state lacks one folded stack parked left and one folded stack parked right,
- full room, kitchen, sink, walk-in space, or visible rear floor behind opening,
- final colors or lattice/infill presented as confirmed without One Off confirmation.

Major failure, revise before acceptance:

- weak shallow-cove read,
- side shelves or lower cabinetry lost,
- upper arched glass area missing,
- material mood feels generic, white aluminum, patio-door, hotel bar, or fantasy.

Minor failure, can be accepted only with note:

- small reflection artifacts,
- slight proportion softness,
- concept finish ambiguity when clearly labeled as concept.

## Required record

Every accepted asset needs a short rationale:

- asset purpose,
- source references used,
- why it qualifies as a photorealistic render, when applicable,
- pass/fail notes for mechanism, depth, finish/infill boundary,
- accepted filename or rejected/caution filename.

Compare candidates against:

- `docs/03_VISUAL_APPROACH_AND_QC.md`
- `docs/14_CLIENT_MATERIAL_INTAKE_AUDIT.md`
- `assets/visuals/accepted/`
- `assets/visuals/rejected_or_caution/`
