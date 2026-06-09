# Skill: Asset Generation Pipeline

Use this skill before generating, selecting, renaming, accepting, rejecting, or integrating AI still images for the One Off / S-RANCH proposal.

## Production route

Default route: **AI stills first**.

For client render assets, "AI stills" means photorealistic image-generation output from the source reference packet. Do not satisfy render requests with deterministic PIL/canvas/SVG diagrams, flat boards, screenshots, HTML mockups, or hand-drawn schematic assets.

If the image tool cannot use the required PDF/image references, stop and report the blocker. Do not generate reference-blind or diagram-only substitutes and call them renders.

Do not start video or advanced polish until the still-image mechanism passes QC.

## Required final asset set

Produce and QC these assets in order:

1. Closed hero.
2. Left-pair-open view.
3. Correct both-sides-open view.
4. Shallow cove / niche detail.
5. Rail, bearing, shoulder-bolt, or mechanism board.
6. Material direction board labeled as concept only.
7. Portal mockup.

The both-sides-open view is the proof asset. Generate it before additional mood polish.

## Source references

Use:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`
- `assets/source_images/linear_rail_hardware_notes.png`
- `assets/client_intake/2026-06-09/client_msg_bifold_pairs.png`
- `assets/client_intake/2026-06-09/client_msg_cove_wall_thickness.png`
- `assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg`
- `assets/client_intake/2026-06-09/client_msg_colors_lattice.jpg`

Use the exterior white bifold-window photo only as a mechanism reference, never as visual style.

## Prompt rules

- Generate one asset at a time.
- Client render outputs must read as real photorealistic studio architectural/product photography unless the asset is explicitly a mechanism board or portal UI mockup.
- Do not mark an image PASS merely because text/QC rules were drawn onto a board. PASS requires visual inspection against the requested photographic render style.
- Start from a neutral base: no forced final colors, no forced lattice, no asserted final finish.
- Always include four lower panels total and two panels per side.
- Both-sides-open must show one folded stack parked left and one folded stack parked right.
- Keep the visible back area as a shallow cove/display niche, not a room.
- Label walnut, bronze, blackened steel, stained glass, or lattice as concept/mood unless One Off confirms them.
- Prefer tool-specific prompt variants when needed, but keep the same technical constraints.

## File routing

- Put experiments in `assets/visuals/iterations/`.
- Put failed but instructive examples in `assets/visuals/rejected_or_caution/`.
- Put final passing assets in `assets/visuals/accepted/`.
- Use descriptive lowercase filenames with state and reason, for example `both_sides_open_two_stacks_shallow_niche_concept.png`.
- Update `assets/MANIFEST.md` when adding final repo assets.

## QC scorecard

For every accepted candidate, record a pass/fail rationale against:

- photorealistic studio render quality for all render views,
- actual use of required source references or explicit blocker if references could not be used,
- exactly four lower panels,
- left pair is panels 1+2 folded/parked left,
- right pair is panels 3+4 folded/parked right when both sides are open,
- no four independent swing doors,
- no full room, kitchen, sink, or walk-in depth,
- no final finish/infill overclaim,
- premium ranch / custom metalwork mood,
- concept-vs-fabrication boundary clear.

Reject any candidate with a critical mechanism or depth failure, even if beautiful.

Reject any candidate that is a diagram/card/board when the requested asset is a photorealistic render, even if the diagram is technically correct.
