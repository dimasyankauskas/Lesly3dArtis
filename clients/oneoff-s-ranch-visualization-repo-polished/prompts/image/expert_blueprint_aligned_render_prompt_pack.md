# Expert Blueprint-Aligned Render Prompt Pack

Use this pack to generate the visual renders that will be placed into the One Off / S-RANCH presentation. Generate one still at a time. Do not generate video until the stills pass QC.

The goal is not a loose luxury mood image. The goal is a studio-quality architectural product render that stays aligned to the provided 2D drawings, dimensions, screenshots, and client notes.

Critical boundary: the client render assets must be real photorealistic image-generation outputs from the provided references. Do not substitute deterministic PIL/canvas/SVG drawings, flat diagrams, HTML screenshots, or presentation boards for the requested 2D-to-3D renders. If the tool cannot attach/use the required references, stop and report the blocker instead of making reference-blind "concept" images.

## Reference Packet To Upload

Upload or attach these references with every render request when the image tool allows multiple references:

1. `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`
2. `assets/source_images/technical_sheet_highlighted_dimensions_clean.png`
3. `assets/client_intake/2026-06-09/enlarged_elevation_phone.jpg`
4. `assets/client_intake/2026-06-09/pdf_section_crop.jpg`
5. `assets/client_intake/2026-06-09/drawing_highlighted_depth.jpg`
6. `assets/client_intake/2026-06-09/top_view_client_photo.jpg`
7. `assets/client_intake/2026-06-09/client_msg_top_view_open_closed.png`
8. `assets/client_intake/2026-06-09/client_msg_bifold_pairs.png`
9. `assets/client_intake/2026-06-09/client_msg_cove_wall_thickness.png`
10. `assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg`
11. `assets/client_intake/2026-06-09/client_msg_colors_lattice.jpg`
12. `assets/source_images/linear_rail_hardware_notes.png`
13. `assets/source_images/linear_rail_and_shoulder_bolt_reference.png`

Use `assets/client_intake/2026-06-09/bifold_window_reference.jpg` only as a mechanism-behavior reference. Do not copy its white exterior patio-door style.

## Universal Technical Instructions

Use these instructions in every visual render prompt:

Create a blueprint-aligned, studio-quality architectural product render of the One Off / S-RANCH bar-window wall, using the provided `BAR WINDOW DETAILS` PDF and reference images as the layout source of truth.

Preserve the proportional relationships from the enlarged elevation, section, and plan:

- central arched upper glass opening
- four lower tall glass/metal window panels
- side display shelving
- lower paneled cabinetry
- dark stone or stone-like counter plane
- removable shelf / shallow display area behind the lower opening
- concealed bifold track logic at the top and bottom
- overall built-in bar-wall/cabinet composition, not a freestanding cabinet

Use the drawing callouts as proportional anchors:

- frame-size callouts include `5'-5"` and `6'-0"` in the reference drawing; use them to preserve relative scale and height relationships
- current client understanding says the wall/cove condition is approximately `12 inches` thick; render the rear cavity as shallow-to-moderate, not room-depth
- client notes say the four tall windows are planned as `3/4 x 1 1/2` tube; make the metal frames feel slim, rectangular, and fabricated, not chunky cabinet doors
- dimensions are reference/coordination only; do not add visible dimension labels or claim final fabrication accuracy in the image

Mechanism truth:

- exactly four lower panels total
- left pair = panels 1+2
- right pair = panels 3+4
- panels 1+2 fold together as one bifold pair and slide/park left
- panels 3+4 fold together as one bifold pair and slide/park right
- no four independent swing doors
- no extra panels
- no all-four-panels-folded-to-one-side behavior
- no normal cabinet-door operation

Depth truth:

- behind the opening, show only a shallow-to-moderate recessed bar/display niche
- the niche may contain close shelves, bottles, glassware, warm integrated lighting, and a finished back panel
- do not show a full room, kitchen, sink, walk-in bar, visible rear floor, or deep interior perspective

Finish boundary:

- final colors are not confirmed
- lattice / stained / diamond glass infill is not determined and can be left out
- use warm high-end material mood only as concept direction
- do not force final walnut, bronze, blackened steel, stained glass, or lattice unless specifically requested

Studio-photo direction:

- make the render look like premium studio architectural product photography
- controlled softbox lighting, clean shadows, high material definition
- realistic glass reflections, realistic metal thickness, clean wood grain, crisp edges
- camera should feel like a professional tilt-shift architectural camera, not a wide-angle real-estate photo
- neutral premium environment, minimal clutter, no people, no props that distract from the built-in object
- avoid exaggerated cinematic glow, fantasy lighting, warped symmetry, AI artifacts, distorted panels, melted hardware, unreadable mechanisms, or decorative objects hiding the panel count

## QC Gate For Every Render

Reject the render, even if beautiful, if any of these fail:

- The requested client render is not photorealistic.
- The image was not generated from the required reference packet but claims blueprint alignment.
- The image is a diagram/card/board instead of a real studio render.
- The lower assembly does not have exactly four panels.
- The open state does not read as two sliding bifold pairs.
- Left pair does not park left.
- Right pair does not park right when both sides are open.
- The render shows four normal swing doors.
- The render shows a full room, kitchen, sink, walk-in bar, or rear floor behind the opening.
- The upper arched area is missing.
- The render forces final lattice/diamond/stained glass when not requested.
- The render becomes a generic white aluminum patio bifold system.
- The render ignores the 2D drawing proportions.

## Prompt 1 — Closed Hero Studio Render

Create a blueprint-aligned studio architectural product render of the S-RANCH bar-window wall in its fully closed state.

Use the provided `BAR WINDOW DETAILS` PDF, enlarged elevation, section, plan, and client screenshots as the source of truth. Preserve the drawing layout: central arched upper glass opening, four lower tall metal/glass panels closed across the main opening, side display shelves, lower paneled cabinetry, dark counter plane, and built-in bar-wall/cabinet composition.

Panel state:

- all four lower panels are closed and flat across the opening
- the four panels should read as two future bifold pairs, not normal cabinet doors
- show subtle top/bottom concealed track logic if visible, integrated into the architectural frame

Measured alignment:

- use the reference drawing callouts `5'-5"` and `6'-0"` to keep the relative height/width proportions credible
- keep the four tall panels slim and fabricated, informed by the `3/4 x 1 1/2` tube note
- show shallow shelving/back panel behind the glass, consistent with approximately `12 inches` of wall/cove depth

Photography style:

- straight-on studio architectural product photograph
- professional tilt-shift camera, near-orthographic perspective, minimal distortion
- soft controlled studio light, realistic glass reflections, crisp metal edges, refined wood/stone material definition
- premium Montana ranch / bespoke metalwork mood, but no full room scene

Negative instructions:

No open panels. No four swing doors. No extra panels. No full kitchen behind the glass. No sink. No walk-in room. No white exterior patio-door style. No final lattice or stained glass unless explicitly requested. No visible dimension labels.

Suggested filename:

`closed_hero_blueprint_aligned_studio_concept.png`

## Prompt 2 — Left Pair Open Studio Render

Create a blueprint-aligned studio architectural product render of the S-RANCH bar-window wall with only the left bifold pair open.

Use the provided PDF, elevation, section, plan, top-view screenshot, bifold-pair message, cove-depth screenshot, and rail hardware notes as references. Preserve the exact built-in bar-wall composition from the drawings.

Panel state:

- exactly four lower panels total
- panels 1+2 are the left pair
- panels 1+2 fold together as one compact bifold stack and slide/park to the left
- panels 3+4 remain closed, flat, and aligned on the right
- show the open left-center area clearly
- the left stack should look like a folded fabricated metal/glass pair, not two unrelated swing doors

Measured alignment:

- keep the panel proportions aligned to the `5'-5"` and `6'-0"` frame-size callouts in the drawing
- use slim rectangular fabricated tube logic informed by the `3/4 x 1 1/2` tube note
- show the rear cove as approximately `12 inches` working depth, shallow-to-moderate only

Depth:

- behind the open left side, show a shallow recessed bar/display niche with close shelves, bottles/glassware, warm integrated lighting, and finished back panel
- no deep room perspective

Photography style:

- premium studio architectural product photography
- straight-on or slight front-right tilt-shift view, only enough angle to read the left folded stack and shallow niche depth
- controlled softbox light, crisp edges, realistic glass and metal reflections

Negative instructions:

No full room. No kitchen. No sink. No visible rear floor. No two separate left swing doors. No four independent swing doors. No all-four-panels-folded-left. No extra panels. No chunky cabinet doors. No final lattice/infill unless explicitly requested.

Suggested filename:

`left_pair_open_blueprint_aligned_shallow_niche_studio_concept.png`

## Prompt 3 — Both Sides Open Proof Render

Create the proof render: a blueprint-aligned studio architectural product render of the S-RANCH bar-window wall with both sliding bifold pairs open.

This image must prove the mechanism. Beauty is secondary to technical clarity.

Use the provided `BAR WINDOW DETAILS` PDF, enlarged elevation, plan/top-view references, client bifold-pair message, rail hardware notes, cove-depth screenshot, and technical sheet image as the source of truth.

Panel state:

- exactly four lower panels total
- panels 1+2 fold together as one compact stack and slide/park left
- panels 3+4 fold together as one compact stack and slide/park right
- the center opening is clear
- left stack and right stack should be symmetrical enough to make the 2+2 mechanism obvious
- top/bottom rail logic may be subtly visible or implied as concealed linear track

Measured alignment:

- maintain the drawing proportions and frame relationships from the `5'-5"` and `6'-0"` callouts
- use slim rectangular fabricated metal frames consistent with the `3/4 x 1 1/2` tube note
- keep the opening and stacked panels aligned with the elevation and plan logic
- do not stretch the cabinet, add extra bays, or change the arched upper opening

Depth:

- show a shallow-to-moderate recessed niche behind the clear center opening
- use approximately `12 inches` as the working cove-depth impression
- show close shelves and a finished back panel, not a room

Photography style:

- controlled studio architectural product photography
- straight-on or very slight elevated front view
- crisp, technical, presentation-ready
- realistic metal/glass reflections and soft shadows showing the folded stacks

Negative instructions:

No four swing doors. No four panels folded to one side. No accordion wall with many segments. No missing right stack. No missing left stack. No full room/kitchen/sink behind. No deep bar counter behind. No extra floor space behind. No white patio bifold aesthetic. No final lattice/stained-glass overclaim.

Suggested filename:

`both_sides_open_two_stacks_blueprint_aligned_studio_proof.png`

## Prompt 4 — Shallow Cove / Niche Detail Render

Create a blueprint-aligned close detail studio render focused on the shallow recessed bar/display niche behind the lower bifold window.

Use the PDF section, cove-depth screenshot, drawing-highlighted-depth reference, and client message about the wall/cove condition as the main sources.

Composition:

- show the lower bar-window opening partially or fully open enough to see the niche
- include the near face of the metal/glass panel frame, counter plane, close shelves, bottles/glassware, warm integrated light, and finished back panel
- communicate shallow depth clearly, approximately `12 inches` working depth
- do not create a full room behind the window

Measured alignment:

- the niche depth should feel shallow and built into a thick wall/cabinet condition
- keep frame thickness slim and fabricated, informed by the `3/4 x 1 1/2` tube note
- align shelf/counter placement to the section and elevation references

Photography style:

- studio product detail photograph
- 50mm to 85mm lens feel
- controlled softbox lighting, crisp focus, realistic shadows inside the recess
- high-end custom metalwork and millwork detail, not lifestyle clutter

Negative instructions:

No sink. No kitchen. No walk-in bar. No visible rear floor. No deep room. No large back counter. No people. No final finish claims. No decorative clutter hiding the shallow depth.

Suggested filename:

`shallow_cove_niche_detail_blueprint_aligned_studio_concept.png`

## Prompt 5 — Hardware / Mechanism Board Render

Create a studio product-board render that explains the S-RANCH bar-window mechanism and hardware logic without pretending to be a final fabrication drawing.

Use the PDF, technical sheet, rail hardware notes, linear rail / shoulder bolt reference, and top-view open/closed screenshot as references.

Board content:

- small clean render of closed state: `[1][2][3][4]`
- small clean render of left-open state: `[1+2 folded/parked left] + [3][4 closed]`
- small clean render of both-open state: `[1+2 folded left] + open center + [3+4 folded right]`
- detail callout for top and bottom concealed linear rail
- detail callout for bearing / shoulder-bolt logic
- note that hardware/fabrication details remain coordination-level until One Off confirms them

Visual style:

- premium studio product board
- clean ivory/dark walnut background, dark metal linework, precise annotations
- elegant, minimal, technical, easy to read on mobile
- no busy engineering clutter

Measurement references:

- include text callouts only if useful: `3/4 x 1 1/2 tube note`, `approx. 12 in cove working assumption`, `5'-5" / 6'-0" reference callouts`
- do not invent new dimensions

Negative instructions:

No fabrication guarantee language. No wrong door movement. No four swing-door diagram. No all-panels-one-side diagram. No full-room background.

Suggested filename:

`mechanism_board_linear_rail_two_bifold_pairs_studio_concept.png`

## Prompt 6 — Material Direction Board Render

Create a studio material-direction board for the S-RANCH bar-window presentation.

This is concept direction only. It must not claim final finishes.

Use the PDF, existing accepted concept visuals, client color/lattice note, and One Off public craft positioning as references.

Board content:

- warm wood / rich wood sample
- dark metal / blackened steel / dark bronze mood sample, labeled as concept direction
- dark stone counter direction
- warm integrated lighting direction
- optional glass sample kept plain or very subtle
- optional lattice/infill area labeled `not confirmed`

Style:

- premium studio material photography
- calm, warm, high-craft, bespoke architectural metalwork mood
- clean arrangement, realistic material samples, soft shadows
- no final product guarantee

Boundary:

- final colors are not confirmed
- lattice/infill is not determined and can be left out
- do not show a final stained-glass design unless specifically approved

Negative instructions:

No forced diamond glass. No final color labels. No over-polished fantasy moodboard. No generic SaaS-style board. No bright blue corporate palette.

Suggested filename:

`material_direction_board_concept_only_studio.png`

## Prompt 7 — Portal Mockup Visual

Create a studio-quality visual of a private mobile review page / portal concept for the S-RANCH bar-window project.

This is a workflow concept, not a production software promise.

Use the accepted or generated S-RANCH render as the main image area. The page should show how One Off could present visuals, mechanism notes, approval questions, and tap-to-comment review points.

Composition:

- mobile-first presentation page shown as a clean device or flat UI surface
- hero render area
- small mechanism cards
- review status labels
- tap-to-comment pins
- confirmation questions
- no pricing
- no login, CRM, Slack, email, database, or integration claims

Style:

- premium dark walnut / ivory / brass presentation design
- calm, high-end, not SaaS-blue
- readable on phone, expandable up to 1024px concept
- studio-lit product/UI mockup

Negative instructions:

No pricing. No dollar values. No fake production dashboard. No crowded analytics UI. No internal questionnaire links. No archived links. No placeholder text.

Suggested filename:

`portal_mockup_private_review_page_studio_concept.png`

## Best Generation Order

1. `closed_hero_blueprint_aligned_studio_concept.png`
2. `left_pair_open_blueprint_aligned_shallow_niche_studio_concept.png`
3. `both_sides_open_two_stacks_blueprint_aligned_studio_proof.png`
4. `shallow_cove_niche_detail_blueprint_aligned_studio_concept.png`
5. `mechanism_board_linear_rail_two_bifold_pairs_studio_concept.png`
6. `material_direction_board_concept_only_studio.png`
7. `portal_mockup_private_review_page_studio_concept.png`

Do not proceed to video prompts until assets 1-3 pass QC, especially the both-sides-open proof render.
