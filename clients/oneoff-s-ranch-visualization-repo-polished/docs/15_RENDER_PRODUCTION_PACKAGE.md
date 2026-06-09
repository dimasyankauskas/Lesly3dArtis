# 15 - QC-Ready Visual Render Production Package

Date prepared: 2026-06-09

Source of truth: `prompts/image/expert_blueprint_aligned_render_prompt_pack.md`

Supporting source docs reviewed:

- `docs/02_TECHNICAL_ANALYSIS_BAR_WINDOW.md`
- `docs/03_VISUAL_APPROACH_AND_QC.md`
- `docs/14_CLIENT_MATERIAL_INTAKE_AUDIT.md`
- `assets/MANIFEST.md`

## Package Status

This package prepares the render plan and prompts only.

Correction after QA: the deterministic production-board PNGs created during the prior pass were not real photorealistic 2D-to-3D renders. They were rejected and moved to `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/`.

Those rejected boards must not be used in the client presentation and must not be promoted into `assets/visuals/accepted/`.

No new real photorealistic render assets are currently accepted from this package. No video assets were created. Final accepted promotion still requires real reference-guided image generation plus manual visual approval for photorealism, mechanism, depth, panel count, and finish boundary.

## Required Visual Set Coverage

| Visual | Status | Planned filename | Asset handling |
|---|---|---|---|
| Closed hero | Covered | `closed_hero_blueprint_aligned_studio_concept.png` | Generate experiments in `assets/visuals/iterations/`; move to `assets/visuals/accepted/` only after QC. Existing accepted concept: `assets/visuals/accepted/hero_closed_bar_wall_concept.png`. |
| Left-pair-open | Covered | `left_pair_open_blueprint_aligned_shallow_niche_studio_concept.png` | Generate experiments in `assets/visuals/iterations/`; move to `assets/visuals/accepted/` only after QC. Existing accepted concept: `assets/visuals/accepted/left_pair_open_shallow_niche_concept.png`. |
| Both-sides-open proof render | Covered | `both_sides_open_two_stacks_blueprint_aligned_studio_proof.png` | Generate in `assets/visuals/iterations/` first. Pause after three failed attempts. Do not accept if mechanism is uncertain. |
| Shallow cove / niche detail | Covered | `shallow_cove_niche_detail_blueprint_aligned_studio_concept.png` | Generate in `assets/visuals/iterations/` first. Accept only if depth reads shallow-to-moderate. |
| Mechanism board | Covered | `mechanism_board_linear_rail_two_bifold_pairs_studio_concept.png` | Generate in `assets/visuals/iterations/` first. Accept only if the 2+2 fold-slide logic is clear on mobile. |
| Material direction board | Covered | `material_direction_board_concept_only_studio.png` | Generate in `assets/visuals/iterations/` first. Accept only if finish and infill are clearly concept direction. |
| Portal mockup | Covered | `portal_mockup_private_review_page_studio_concept.png` | Generate in `assets/visuals/iterations/` first. Accept only if it avoids production software promises and commercial terms. |

## Rejected Prior Output

The following files were quarantined because they are non-photorealistic board/diagram assets, not client render images:

- `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/invalid_non_photoreal_closed_hero_blueprint_aligned_studio_concept.png`
- `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/invalid_non_photoreal_left_pair_open_blueprint_aligned_shallow_niche_studio_concept.png`
- `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/invalid_non_photoreal_both_sides_open_two_stacks_blueprint_aligned_studio_proof.png`
- `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/invalid_non_photoreal_shallow_cove_niche_detail_blueprint_aligned_studio_concept.png`
- `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/invalid_non_photoreal_mechanism_board_linear_rail_two_bifold_pairs_studio_concept.png`
- `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/invalid_non_photoreal_material_direction_board_concept_only_studio.png`
- `assets/visuals/rejected_or_caution/non_photoreal_boards_2026-06-09/invalid_non_photoreal_portal_mockup_private_review_page_studio_concept.png`

Rejection reason: they are deterministic PIL/canvas-style graphics and do not meet the user's requirement for real photorealistic renderings from the 2D drawings/PDF/source images.

## Global Generation Rules

Use this global prompt prefix before every render-specific prompt.

```text
Create a blueprint-aligned, studio-quality architectural product render of the One Off / S-RANCH bar-window wall, using the provided BAR WINDOW DETAILS PDF and reference images as the layout source of truth.

Preserve the proportional relationships from the enlarged elevation, section, and plan: central arched upper glass opening, four lower tall glass/metal window panels, side display shelving, lower paneled cabinetry, dark stone or stone-like counter plane, removable shelf / shallow display area behind the lower opening, concealed bifold track logic at the top and bottom, and an overall built-in bar-wall/cabinet composition.

Use the drawing callouts 5'-5" and 6'-0" only as proportional anchors. Use approx 12 inches only as the current working impression for shallow cove depth. Use the 3/4 x 1 1/2 tube note only to keep metal frames slim, rectangular, and fabricated.

Mechanism truth: exactly four lower panels total. Left pair = panels 1+2. Right pair = panels 3+4. Panels 1+2 fold together as one bifold pair and slide/park left. Panels 3+4 fold together as one bifold pair and slide/park right. No four independent swing doors. No extra panels. No all-four-panels-folded-to-one-side behavior. No normal cabinet-door operation.

Depth truth: behind the opening, show only a shallow-to-moderate recessed bar/display niche with close shelves, bottles or glassware, warm integrated lighting, and a finished back panel. Do not show a full room, kitchen, sink, walk-in bar, visible rear floor, or deep interior perspective.

Finish boundary: final colors are not confirmed. Lattice, stained glass, diamond glass, and other infill are not determined and can be omitted or kept very subtle. Use warm high-end material mood only as concept direction. Do not claim final fabrication accuracy, final colors, or confirmed lattice/infill.

Studio-photo direction: premium studio architectural product photography, controlled softbox lighting, clean shadows, realistic glass reflections, realistic metal thickness, clean wood grain, crisp edges, and a professional tilt-shift architectural camera feel. No people. No clutter that hides panel count.
```

Use this negative prompt with every visual.

```text
No four swing doors. No independent cabinet doors. No extra panels. No missing upper arch. No full room behind the opening. No kitchen. No sink. No walk-in bar. No rear floor. No generic white patio-door system. No final finish guarantee. No final lattice or infill claim. No visible dimension labels unless the render is the mechanism board and the labels are explicitly marked as coordination references.
```

## Reference Packet

Use the full reference packet when the image tool supports multiple references:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`
- `assets/client_intake/2026-06-09/enlarged_elevation_phone.jpg`
- `assets/client_intake/2026-06-09/pdf_section_crop.jpg`
- `assets/client_intake/2026-06-09/drawing_highlighted_depth.jpg`
- `assets/client_intake/2026-06-09/top_view_client_photo.jpg`
- `assets/client_intake/2026-06-09/client_msg_top_view_open_closed.png`
- `assets/client_intake/2026-06-09/client_msg_bifold_pairs.png`
- `assets/client_intake/2026-06-09/client_msg_cove_wall_thickness.png`
- `assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg`
- `assets/client_intake/2026-06-09/client_msg_colors_lattice.jpg`
- `assets/source_images/linear_rail_hardware_notes.png`
- `assets/source_images/linear_rail_and_shoulder_bolt_reference.png`

Use `assets/client_intake/2026-06-09/bifold_window_reference.jpg` only as a mechanism-behavior reference. Do not copy its white exterior patio-door style.

## Render 1 - Closed Hero

Suggested filename: `closed_hero_blueprint_aligned_studio_concept.png`

Required references:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`
- `assets/client_intake/2026-06-09/enlarged_elevation_phone.jpg`
- `assets/client_intake/2026-06-09/pdf_section_crop.jpg`
- `assets/client_intake/2026-06-09/client_msg_cove_wall_thickness.png`
- `assets/client_intake/2026-06-09/client_msg_colors_lattice.jpg`

Exact render-specific prompt:

```text
Create the S-RANCH bar-window wall in its fully closed state.

All four lower panels are closed and flat across the opening. The four panels should read as two future bifold pairs, not normal cabinet doors. Show subtle top/bottom concealed track logic only if it can be integrated cleanly into the architectural frame.

Preserve the drawing layout: central arched upper glass opening, four lower tall metal/glass panels closed across the main opening, side display shelves, lower paneled cabinetry, dark counter plane, and built-in bar-wall/cabinet composition.

Use a straight-on studio architectural product photograph, near-orthographic tilt-shift perspective, minimal distortion, soft controlled studio light, realistic glass reflections, crisp metal edges, refined wood/stone material definition, and premium Montana ranch / bespoke metalwork mood. Do not create a full room scene.
```

QC checklist:

- Exactly four lower panels are visible.
- All four lower panels are closed and flat.
- The lower assembly does not read as ordinary cabinet doors.
- Upper arched glass area is preserved.
- Side shelving, lower cabinetry, and dark counter plane remain consistent with the drawing.
- Niche behind glass reads shallow-to-moderate, not room-depth.
- No forced final lattice, stained glass, color, or fabrication claim.
- No visible dimension labels.

## Render 2 - Left-Pair-Open

Suggested filename: `left_pair_open_blueprint_aligned_shallow_niche_studio_concept.png`

Required references:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`
- `assets/client_intake/2026-06-09/enlarged_elevation_phone.jpg`
- `assets/client_intake/2026-06-09/pdf_section_crop.jpg`
- `assets/client_intake/2026-06-09/drawing_highlighted_depth.jpg`
- `assets/client_intake/2026-06-09/top_view_client_photo.jpg`
- `assets/client_intake/2026-06-09/client_msg_top_view_open_closed.png`
- `assets/client_intake/2026-06-09/client_msg_bifold_pairs.png`
- `assets/client_intake/2026-06-09/client_msg_cove_wall_thickness.png`
- `assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg`

Exact render-specific prompt:

```text
Create the S-RANCH bar-window wall with only the left bifold pair open.

Exactly four lower panels total. Panels 1+2 are the left pair. Panels 1+2 fold together as one compact bifold stack and slide/park to the left. Panels 3+4 remain closed, flat, and aligned on the right. Show the open left-center area clearly. The left stack should look like a folded fabricated metal/glass pair, not two unrelated swing doors.

Behind the open left side, show a shallow recessed bar/display niche with close shelves, bottles or glassware, warm integrated lighting, and a finished back panel. Use a straight-on or slight front-right tilt-shift view, only enough angle to read the left folded stack and shallow niche depth.
```

QC checklist:

- Exactly four lower panels total.
- Panels 1+2 form one compact folded stack parked left.
- Panels 3+4 remain closed, flat, and aligned on the right.
- The left open area is clear.
- The render does not show two independent swing doors.
- The render does not fold all four panels left.
- Niche reads approx 12 inches, not full room depth.
- No sink, kitchen, walk-in bar, rear floor, or deep back counter.

## Render 3 - Both-Sides-Open Proof

Suggested filename: `both_sides_open_two_stacks_blueprint_aligned_studio_proof.png`

Required references:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`
- `assets/client_intake/2026-06-09/enlarged_elevation_phone.jpg`
- `assets/client_intake/2026-06-09/pdf_section_crop.jpg`
- `assets/client_intake/2026-06-09/top_view_client_photo.jpg`
- `assets/client_intake/2026-06-09/client_msg_top_view_open_closed.png`
- `assets/client_intake/2026-06-09/client_msg_bifold_pairs.png`
- `assets/client_intake/2026-06-09/client_msg_cove_wall_thickness.png`
- `assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg`
- `assets/source_images/linear_rail_hardware_notes.png`
- `assets/source_images/linear_rail_and_shoulder_bolt_reference.png`

Exact render-specific prompt:

```text
Create the proof render of the S-RANCH bar-window wall with both sliding bifold pairs open. Beauty is secondary to technical clarity.

Exactly four lower panels total. Panels 1+2 fold together as one compact stack and slide/park left. Panels 3+4 fold together as one compact stack and slide/park right. The center opening is clear. The left stack and right stack should be symmetrical enough to make the 2+2 mechanism obvious. Top/bottom rail logic may be subtly visible or implied as concealed linear track.

Use a controlled studio architectural product photograph, straight-on or very slight elevated front view, crisp technical presentation, realistic metal/glass reflections, and soft shadows showing the folded stacks. Keep the arched upper opening and cabinet proportions aligned to the drawing.
```

QC checklist:

- Exactly four lower panels total.
- One folded stack is parked left.
- One folded stack is parked right.
- The center opening is clear.
- Left pair is panels 1+2 only.
- Right pair is panels 3+4 only.
- The render does not show all panels folded to one side.
- The render does not show four independent swing doors or many accordion segments.
- No full room/kitchen/sink/deep bar appears behind the opening.
- If this fails three attempts, pause before further generation.

## Render 4 - Shallow Cove / Niche Detail

Suggested filename: `shallow_cove_niche_detail_blueprint_aligned_studio_concept.png`

Required references:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/client_intake/2026-06-09/pdf_section_crop.jpg`
- `assets/client_intake/2026-06-09/drawing_highlighted_depth.jpg`
- `assets/client_intake/2026-06-09/client_msg_cove_wall_thickness.png`
- `assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg`

Exact render-specific prompt:

```text
Create a close detail studio render focused on the shallow recessed bar/display niche behind the lower bifold window.

Show the lower bar-window opening partially or fully open enough to see the niche. Include the near face of the metal/glass panel frame, counter plane, close shelves, bottles or glassware, warm integrated light, and finished back panel. Communicate shallow depth clearly, using approx 12 inches as the working cove-depth impression.

Use a studio product detail photograph with a 50mm to 85mm lens feel, controlled softbox lighting, crisp focus, realistic shadows inside the recess, and high-end custom metalwork and millwork detail.
```

QC checklist:

- Shallow cove/niche depth is the main read.
- The rear condition does not become a room, kitchen, or walk-in bar.
- Close shelves and finished back panel are visible.
- Warm integrated light supports depth without hiding structure.
- Slim fabricated metal frame reads consistent with the tube note.
- No sink, rear floor, deep back counter, people, or lifestyle clutter.
- No final finish or infill claim.

## Render 5 - Mechanism Board

Suggested filename: `mechanism_board_linear_rail_two_bifold_pairs_studio_concept.png`

Required references:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`
- `assets/source_images/linear_rail_hardware_notes.png`
- `assets/source_images/linear_rail_and_shoulder_bolt_reference.png`
- `assets/client_intake/2026-06-09/top_view_client_photo.jpg`
- `assets/client_intake/2026-06-09/client_msg_top_view_open_closed.png`
- `assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg`

Exact render-specific prompt:

```text
Create a studio product-board render that explains the S-RANCH bar-window mechanism and hardware logic without pretending to be a final fabrication drawing.

Board content: small clean render of closed state [1][2][3][4]; small clean render of left-open state [1+2 folded/parked left] + [3][4 closed]; small clean render of both-open state [1+2 folded left] + open center + [3+4 folded right]; detail callout for top and bottom concealed linear rail; detail callout for bearing / shoulder-bolt logic; note that hardware/fabrication details remain coordination-level until One Off confirms them.

Use a premium studio product board style with clean ivory/dark walnut background, dark metal linework, precise annotations, elegant minimal technical layout, and mobile-readable hierarchy.
```

Allowed text callouts:

- `3/4 x 1 1/2 tube note`
- `approx 12 in cove working assumption`
- `5'-5" / 6'-0" reference callouts`
- `coordination-level hardware logic`

QC checklist:

- Board shows closed, left-open, and both-open states.
- Closed state is exactly [1][2][3][4].
- Left-open state parks only panels 1+2 left and keeps panels 3+4 closed.
- Both-open state parks 1+2 left and 3+4 right.
- Top and bottom concealed linear rail concept is shown or clearly called out.
- Bearing / shoulder-bolt logic is present.
- Text does not imply final fabrication guarantee.
- Board is readable on mobile.

## Render 6 - Material Direction Board

Suggested filename: `material_direction_board_concept_only_studio.png`

Required references:

- `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
- `assets/client_intake/2026-06-09/client_msg_colors_lattice.jpg`
- `assets/visuals/accepted/hero_closed_bar_wall_concept.png`
- `assets/visuals/accepted/left_pair_open_shallow_niche_concept.png`

Exact render-specific prompt:

```text
Create a studio material-direction board for the S-RANCH bar-window presentation. This is concept direction only. It must not claim final finishes.

Board content: warm wood / rich wood sample; dark metal / blackened steel / dark bronze mood sample labeled as concept direction; dark stone counter direction; warm integrated lighting direction; optional glass sample kept plain or very subtle; optional lattice/infill area labeled not confirmed.

Use premium studio material photography, calm warm high-craft bespoke architectural metalwork mood, clean arrangement, realistic material samples, and soft shadows.
```

QC checklist:

- Board clearly reads as concept direction only.
- Final colors are not implied as confirmed.
- Lattice/infill is omitted or labeled not confirmed.
- No final stained-glass design is shown unless separately approved.
- Warm wood, dark metal, dark stone, and integrated light directions are represented.
- No bright corporate palette or generic software styling.
- No commercial terms.

## Render 7 - Portal Mockup

Suggested filename: `portal_mockup_private_review_page_studio_concept.png`

Required references:

- `site/index.html`
- `assets/visuals/accepted/hero_closed_bar_wall_concept.png`
- `assets/visuals/accepted/left_pair_open_shallow_niche_concept.png`
- `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`

Exact render-specific prompt:

```text
Create a studio-quality visual of a private mobile review page / portal concept for the S-RANCH bar-window project. This is a workflow concept, not a production software promise.

Use the accepted or generated S-RANCH render as the main image area. The page should show how One Off could present visuals, mechanism notes, approval questions, and tap-to-comment review points.

Composition: mobile-first presentation page shown as a clean device or flat UI surface; hero render area; small mechanism cards; review status labels; tap-to-comment pins; confirmation questions; no commercial terms; no login, CRM, Slack, email, database, or integration claims.

Style: premium dark walnut / ivory / brass presentation design; calm high-end tone; readable on phone and expandable up to a 1024px concept; studio-lit product/UI mockup.
```

QC checklist:

- Portal mockup is mobile-first and premium.
- It shows a render area, mechanism notes, review status, tap-to-comment pins, and confirmation questions.
- It does not show commercial terms.
- It does not promise login, CRM, Slack, email, database, or production integrations.
- It does not include internal questionnaire links, archived links, or visible placeholder text.
- It keeps the portal framed as a concept/workflow visual.

## QC Table

| Visual | Current asset | Pass/fail state | Rationale | Next action |
|---|---|---|---|---|
| Closed hero | none accepted from this package | Pending real render | Prior board output was rejected because it was not photorealistic. | Generate a real reference-guided studio render in `assets/visuals/iterations/`. |
| Left-pair-open | none accepted from this package | Pending real render | Prior board output was rejected because it was not photorealistic. | Generate a real reference-guided studio render in `assets/visuals/iterations/`. |
| Both-sides-open proof | none accepted from this package | Pending real render | Prior board output was rejected because it was not photorealistic. | Generate a real reference-guided proof render; pause after three failed attempts. |
| Shallow cove / niche detail | none accepted from this package | Pending real render | Prior board output was rejected because it was not photorealistic. | Generate a real reference-guided detail render in `assets/visuals/iterations/`. |
| Mechanism board | none accepted from this package | Pending board/mockup | A mechanism board may be a diagram, but it must be clearly labeled as a mechanism board, not a render. | Generate only after render assets are underway; keep separate from client render claims. |
| Material direction board | none accepted from this package | Pending studio board | A material board may be a board, but it must be studio-quality material photography or a clearly labeled concept board. | Generate after core renders; label concept only. |
| Portal mockup | none accepted from this package | Pending mockup | A portal mockup may be UI, but it must not be presented as a 2D-to-3D render. | Generate after real render assets exist for the main image area. |

## Acceptance Rules

- Save all experiments under `assets/visuals/iterations/`.
- Move a visual to `assets/visuals/accepted/` only after the QC checklist passes.
- For client render views, QC requires a real photorealistic reference-guided image. Do not accept deterministic PIL/canvas/SVG diagrams, flat boards, or HTML screenshots as render assets.
- If the image generator cannot attach/use the required PDF and image references, stop and report the blocker instead of making substitute graphics.
- Pause before moving any visual into `assets/visuals/accepted/` if mechanism, depth, panel count, or finish boundary is uncertain.
- Do not create video assets until stills 1-3 pass QC, especially the both-sides-open proof render.
- Do not update `site/index.html` unless an accepted asset path needs a verified reference update.
