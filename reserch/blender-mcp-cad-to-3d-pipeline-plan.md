# Blender + MCP CAD-to-3D Pipeline Plan

**Purpose:** Define a practical production pipeline for turning architect-provided DWG/PDF drawing packages into precise Blender models, photoreal renders, mechanism studies, and builder-coordination deliverables.

**Primary use case:** Lesly receives drawings from an architect or boss, such as a DWG export and a PDF drawing sheet for a custom bar-window / built-in millwork system. The AI agent should help interpret the drawings, extract dimensions, generate a controlled 3D model in Blender, apply materials, render photoreal images, and package clear outputs for review.

**Important boundary:** This is a workflow for precise visualization and builder coordination. It is not automatically a replacement for final shop drawings, fabricator review, hardware engineering, or construction sign-off.

**Last updated:** 2026-06-09

---

## 1. Executive summary

The correct pipeline is not:

```text
Upload drawing → AI guesses 3D model → hope it is correct.
```

The correct pipeline is:

```text
Architect DWG/PDF package
        ↓
CAD/document intake
        ↓
Dimension and component extraction
        ↓
Human verification gate
        ↓
Structured project specification JSON
        ↓
Blender Python / MCP execution
        ↓
Precise gray model
        ↓
Material and photoreal render layer
        ↓
Open/closed mechanism study
        ↓
QC overlays and dimension report
        ↓
Client + builder coordination package
```

The source of truth should be **structured, verified dimensions**, not a visual prompt.

Blender can produce highly precise geometry **when the dimensions and rules are explicit**. Blender cannot guarantee 100% fabrication precision from an incomplete or ambiguous 2D drawing without validation. If the drawing package is marked "coordination" or "not for construction," the output must be treated as a coordination model unless final shop drawings, material specs, hardware specs, tolerances, and fabricator approval are provided.

---

## 2. Case context: S-Ranch bar-window package

The current example includes:

- Architect PDF sheet: `25 1022_S Ranch_Bar Window (3).pdf`
- CAD file: `S RANCH_WINDOW CAD EXPORT (2).dwg`
- PDF drawing content: bar-window enlarged elevation, section, plan, dimensions, concealed bifold track, removable shelving, bifold window, stained/leaded/lattice glass, and a colored design reference.
- Project context: S-Ranch / Box Elder Ranch / custom luxury bar-window and millwork feature.
- Drawing status: coordination drawing / not for construction.

The DWG file is especially valuable because it is a CAD/vector source, not just a screenshot. In the local file check, the DWG was identified as an **AutoCAD 2018/2019/2020 DWG** file. That means it is a much stronger geometry source than a raster image.

Strategic interpretation:

> This is not merely a cabinet-rendering task. It is a technical-to-visual translation task for a custom architectural millwork / bar-window system. The workflow must preserve geometry, show open/closed function, communicate materials, and clearly separate verified data from assumptions.

---

## 3. Source hierarchy

The agent should prioritize sources in this order:

```text
1. DWG / DXF CAD file              ← best source for linework, layers, geometry, dimensions
2. Architect PDF sheet             ← best source for plotted notes, labels, sheet context, scale, dimensions
3. Screenshots / markups           ← useful for communication and quick review
4. Material references             ← wood, metal, glass, stone, finish, lighting mood
5. Boss examples                   ← style, quality bar, expected transformation pattern
6. Builder/fabricator specs        ← required for construction confidence
7. Human review comments           ← feedback loop and decision record
```

The agent should not build primarily from a screenshot if DWG/DXF is available.

The recommended order is:

```text
DWG → DXF / parsed CAD entities → structured spec → Blender model
PDF → labels, dimensions, sheet notes, visual confirmation
Screenshots → human communication / quick annotations
Material refs → photoreal skin
Boss examples → presentation style and quality benchmark
```

---

## 4. Precision: what is possible and what is not

### What can be precise

The Blender model can be precise for:

- visible, explicit dimensions;
- DWG/DXF linework;
- extracted panel widths and heights;
- shelf locations shown in section/elevation;
- frame sizes shown in the drawing;
- arch radius if defined or derivable;
- repeated spacing if explicitly marked as equal;
- object positions generated from verified coordinates;
- open/closed states if pivot/track rules are defined.

### What cannot be guaranteed without additional data

The agent cannot guarantee 100% fabrication precision for:

- hidden backside geometry not shown;
- material thicknesses not specified;
- exact glass thickness;
- exact hardware manufacturer/model;
- hinge/track tolerances;
- joinery details;
- site-specific field conditions;
- fabrication allowances;
- structural requirements;
- code/compliance issues;
- details inferred from a decorative reference image.

### Recommended professional language

Use this wording:

> The agent can create a dimensionally controlled Blender model based on verified DWG/PDF information. The model can be suitable for visualization, review, and builder coordination. It should not be treated as final fabrication documentation unless all construction-critical dimensions, hardware, tolerances, materials, and shop-drawing details have been validated by the responsible professionals.

---

## 5. Output categories

There are four different output levels. They should not be confused.

| Output type | Description | Suitable for builders? |
|---|---|---|
| Concept render | Beautiful visual interpretation | No |
| Precise visual model | Dimensionally controlled for visible/verified dimensions | Limited coordination use |
| Builder coordination package | Model + dimensions + assumptions + RFI list | Yes, as coordination support |
| Fabrication/shop drawing package | Final tolerances, joinery, hardware, construction details | Requires fabricator/CAD validation |

For this workflow, the first realistic target is:

> **Precise visual model + builder coordination package.**

Not:

> **Fully automatic final shop drawings.**

---

## 6. Blender-first architecture

```text
User uploads architect package
        ↓
AI agent validates inputs
        ↓
CAD extraction service converts/parses DWG/DXF
        ↓
Document extraction reads PDF notes and dimensions
        ↓
Agent classifies views: elevation / section / plan / reference
        ↓
Agent extracts component tree and dimensions
        ↓
Human verifies project_spec.json
        ↓
MCP server exposes safe Blender tools
        ↓
Agent calls Blender tools or writes Blender Python
        ↓
Blender creates precise gray model
        ↓
Agent applies materials, lighting, cameras
        ↓
Cycles creates photoreal renders
        ↓
QC layer compares model against source drawings
        ↓
Output package generated
```

The important rule:

> The agent should generate geometry from numbers and component rules, not from vague visual prompts.

---

## 7. Dependency stack

| Layer | Recommended dependency | Purpose |
|---|---|---|
| AI reasoning layer | ChatGPT / Claude / local LLM agent | Task planning, extraction, skill execution |
| Agent orchestration | MCP-capable client / local controller | Connect model to files, tools, workflows |
| MCP server | Python or TypeScript local MCP server | Controlled bridge between agent and Blender/CAD tools |
| 3D engine | Blender, pinned version | Modeling, animation, materials, rendering |
| Blender scripting | Blender Python / `bpy` | Deterministic scene and geometry generation |
| Rendering | Cycles | Photoreal rendering |
| CAD intake | DWG → DXF conversion; DXF parser | Read CAD linework and dimensions |
| DXF parsing | `ezdxf` | Read/modify/write DXF documents in Python |
| PDF parsing | PyMuPDF / pdfplumber / vision extraction | Extract text, drawing labels, dimensions, sheet metadata |
| OCR / vision | Optional OCR + visual model | Recover labels or symbols missed by text extraction |
| Data model | JSON / YAML / SQLite | Store verified project spec, dimensions, assumptions |
| Material assets | PBR texture library | Wood, metal, glass, stone, roughness/normal maps |
| QC | Overlay renders, dimension reports, object metadata | Validate geometry and prevent unsupported inference |
| Versioning | Git / Git LFS / dated snapshots | Track iterations, specs, outputs, decisions |

---

## 8. Required agent skills

The pipeline should use specialized skills rather than one generic 3D prompt.

| Skill | Purpose | Inputs | Outputs |
|---|---|---|---|
| Task Intake Skill | Convert boss/architect request into structured requirements | Task text, PDF, DWG, examples | Intake report, missing info list |
| CAD Intake Skill | Normalize DWG/DXF and inspect layers/entities | DWG/DXF | CAD entity summary, layer map |
| Drawing View Classification Skill | Separate elevation, section, plan, references | PDF/DWG views | View map |
| Dimension Extraction Skill | Extract and normalize dimensions | PDF/DWG dimensions/text | Dimension table |
| Component Decomposition Skill | Break object into buildable parts | Drawings + examples | Component tree |
| 2D-to-3D Construction Skill | Infer 3D relationships from plan/section/elevation | View map + dimensions | 3D construction plan |
| Mechanism Skill | Define moving parts, pivots, tracks, open/closed states | Plan/section/notes | Motion spec |
| Blender Execution Skill | Generate geometry/material/camera operations | Project spec | Blender scene |
| Material/Skin Skill | Apply wood/metal/glass/stone and surface realism | Material refs | PBR material assignment |
| Render Direction Skill | Create camera, lighting, and shot package | Output requirements | Render queue |
| QC Skill | Compare output against source and flag uncertainty | Model + drawings + spec | QC report, overlays, RFI list |
| Builder Handoff Skill | Package model, dimensions, assumptions, notes | Final model + QC | Builder coordination package |

---

## 9. Input package Lesly should request

For any builder-related or precise 3D task, Lesly should ask for:

### Required

```text
- DWG file
- PDF drawing sheet set
- drawing date and revision
- drawing status: concept / coordination / construction / shop drawing
- units: inches, feet, millimeters, etc.
- scale
- front elevation
- side section
- plan view
- dimensions
- material/finish notes
- expected output type: render / 3D model / builder reference / animation
```

### Strongly recommended

```text
- DXF export
- clean isolated DWG with only the target object
- layer legend
- blocks/components named clearly
- open/closed mechanism drawings
- hardware specs: tracks, hinges, pivots, slides, pulls
- glass thickness/type
- wood species and finish
- metal finish
- stone/counter material
- site field measurements for built-ins
- boss/client-approved examples
- rejected examples or known mistakes
```

### Needed for builder/fabricator reliability

```text
- final verified dimensions
- material thicknesses
- hardware model numbers
- joinery details
- tolerances and clearances
- assembly sequence
- shop drawings if available
- fabricator review/sign-off
```

---

## 10. CAD/DWG intake process

### Step 1 — File validation

The agent checks:

```text
File name
File type
File size
DWG/DXF version if available
Units if available
Layer count
Block count
Entity types
Whether drawing is 2D, 3D, or mixed
Whether relevant object is isolated or embedded in a larger drawing
```

### Step 2 — DWG conversion or access

Blender should usually not be the first interpreter of DWG.

Recommended path:

```text
DWG → DXF → parsed CAD entities → structured JSON → Blender
```

Reasons:

- DXF is easier to parse programmatically than DWG.
- CAD entity extraction should happen before visual modeling.
- The agent needs semantic interpretation, not just imported linework.
- Directly importing all CAD lines into Blender can produce messy curves instead of clean component geometry.

### Step 3 — CAD entity extraction

Extract:

```text
layers
blocks
lines
polylines
arcs
splines
hatches
dimensions
leaders
text labels
view boundaries
symbols
scale references
```

### Step 4 — View classification

Classify the CAD/PDF content into:

```text
front elevation
side section
plan view
colored/reference image
details
notes/title block
scale bars
```

### Step 5 — Dimension table

Create a table like:

```text
dimension_id | value | unit | source_view | component | confidence | needs_verification
D-001        | 5'-5" | inches/feet | elevation | frame_width | high | yes
D-002        | 6'-0" | inches/feet | elevation | frame_height | high | yes
D-003        | 4'-7 1/2" | inches/feet | section/elevation | concealed_track | medium | yes
D-004        | shelf positions | inches/feet | section | removable_shelves | medium | yes
```

No geometry generation should start until the key dimensions are verified.

---

## 11. The project specification file

The central artifact should be `project_spec.json`.

This is the contract between the AI interpretation layer and Blender execution layer.

Example:

```json
{
  "project": "S-Ranch Bar Window",
  "units": "inches",
  "source_status": "coordination_drawings_not_for_construction",
  "origin": "centerline_front_face_floor",
  "model_use": "visualization_and_builder_coordination",
  "components": [
    {
      "id": "bar_window.frame",
      "type": "arched_frame",
      "width_in": 65,
      "height_in": 72,
      "depth_in": null,
      "source": "enlarged_elevation",
      "confidence": "verified_width_height_depth_unknown",
      "fabrication_status": "coordination_only"
    },
    {
      "id": "bifold_panels.lower",
      "type": "bifold_panel_set",
      "count": 4,
      "material": "dark_bronze_metal_and_glass",
      "movement": "folding_sliding",
      "source": "elevation_plan_section",
      "confidence": "needs_hardware_confirmation"
    },
    {
      "id": "interior_shelves",
      "type": "removable_shelves",
      "source": "section_elevation",
      "confidence": "partial_depth_needs_verification"
    }
  ],
  "assumptions": [
    "Exact hardware manufacturer unknown",
    "Glass thickness not specified",
    "Track clearance requires fabricator confirmation",
    "Drawing is coordination/not-for-construction unless newer documents say otherwise"
  ],
  "required_outputs": [
    "front_closed_render",
    "right_45_closed_render",
    "front_open_render",
    "open_closed_comparison",
    "section_depth_view",
    "dimension_report",
    "assumptions_and_rfi"
  ]
}
```

The agent may draft this file, but Lesly or a responsible reviewer must approve it before it becomes the modeling source of truth.

---

## 12. Blender scene standards

### Unit convention

Use a strict internal convention:

```text
Canonical input units: inches
Blender internal conversion: use one conversion function everywhere
Scene display: Imperial
Object metadata: store original source dimensions
```

Every created object should include custom properties:

```json
{
  "source_dimension": "D-001",
  "source_view": "enlarged_elevation",
  "confidence_level": "verified",
  "fabrication_use": "coordination_only",
  "verified_by": "human_required",
  "tolerance_note": "not_fabrication_tolerance"
}
```

### Naming convention

```text
PROJECT_COMPONENT_SUBCOMPONENT_STATE_VERSION
SRANCH_BARWINDOW_FRAME_ARCH_CLOSED_V001
SRANCH_BARWINDOW_PANEL_LOWER_01_CLOSED_V001
SRANCH_BARWINDOW_SHELF_REMOVABLE_02_V001
SRANCH_BARWINDOW_TRACK_CONCEALED_V001
```

### Collections

```text
00_REFERENCE
01_GRAY_MODEL
02_MOVING_PARTS
03_MATERIALS
04_LIGHTING
05_CAMERAS
06_RENDERS
07_QC_OVERLAYS
08_EXPORTS
```

---

## 13. Blender model-generation stages

### Stage 1 — Reference setup

```text
Import front elevation as reference plane
Import section as side reference plane
Import plan as top reference plane
Scale reference images using known dimensions
Lock reference planes
Set origin and coordinate system
```

### Stage 2 — Gray model

```text
Create wall/millwork context
Create base cabinet mass
Create central bar-window frame
Create arch geometry
Create lower panel divisions
Create shelf volumes
Create concealed track zone
Create side display shelving if needed
```

This stage should be plain, clear, and dimension-checkable.

### Stage 3 — Component detail

```text
Add frame profiles
Add bevels
Add panel rails/stiles
Add glass panes
Add lattice/stained-glass pattern
Add track representation
Add shelf thicknesses
Add cabinet trim
Add decorative surround only where supported by drawing/reference
```

### Stage 4 — Mechanism states

```text
Closed state
Open state
Intermediate folding state
Panel pivot points
Track path
Collision/clearance check
Simple animation preview
```

### Stage 5 — Material skin

```text
warm stained wood millwork
dark bronze / blackened steel frame
semi-reflective glass
stained/leaded/lattice glass
stone or dark counter
bottle/glassware props if needed
soft interior/ranch/luxury lighting
```

### Stage 6 — Photoreal render

```text
Cycles rendering
camera depth of field if appropriate
area lights / HDRI / interior light setup
beveled edges for realism
PBR materials
high-resolution output
render passes if needed
```

---

## 14. MCP tool design for Blender

MCP should expose narrow, safe, deterministic tools. Avoid one broad magical tool.

Bad MCP tool:

```text
make_3d_model_from_dwg(file)
```

Better MCP tools:

```text
create_project_scene(project_name, units)
import_reference_image(path, view_type, scale_dimension)
create_wall_context(width_in, height_in, depth_in)
create_rectangular_panel(name, width_in, height_in, thickness_in, location)
create_arch_frame(name, width_in, height_in, radius_in, profile_width_in, depth_in)
create_bifold_panel_set(name, panel_count, total_width_in, height_in, thickness_in)
create_shelf_array(name, width_in, depth_in, z_positions_in)
create_concealed_track(name, width_in, depth_in, height_in, location)
create_leaded_glass_pattern(name, width_in, height_in, diamond_spacing_in)
assign_material(name, material_preset)
set_camera_orthographic(view_type)
set_camera_perspective_hero()
render_preview(output_path)
export_model(format, output_path)
generate_dimension_report()
run_overlay_qc(reference_view, generated_view)
```

### Why narrow tools are better

Narrow tools:

- reduce hallucination;
- make inputs explicit;
- are easier to test;
- are easier to approve;
- support audit logs;
- prevent the agent from running unsafe arbitrary operations;
- make results reproducible.

---

## 15. MCP tool groups

### CAD tools

```text
inspect_file_type
convert_dwg_to_dxf
extract_cad_layers
extract_cad_entities
extract_dimensions
extract_text_labels
classify_views
export_view_images
```

### Spec tools

```text
create_project_spec
validate_project_spec
list_missing_dimensions
approve_project_spec
version_project_spec
```

### Blender geometry tools

```text
create_scene
set_units
create_box
create_panel
create_profile_frame
create_arch_frame
create_curve_from_polyline
extrude_profile
create_shelf
create_bifold_panel_set
create_track_proxy
create_lattice_pattern
```

### Material tools

```text
create_wood_material
create_dark_metal_material
create_clear_glass_material
create_stained_glass_material
assign_material
load_pbr_texture_set
```

### Animation/mechanism tools

```text
define_pivot
define_track_path
set_closed_state
set_open_state
create_open_close_keyframes
run_collision_check_basic
render_animation_preview
```

### Render tools

```text
create_camera
set_front_orthographic_camera
set_right_45_camera
set_section_camera
create_lighting_setup
set_cycles_render_settings
render_still
render_batch
```

### QC tools

```text
generate_dimension_report
render_orthographic_overlay
compare_against_reference
list_unverified_assumptions
generate_rfi_list
export_qc_package
```

---

## 16. Human verification gates

A professional pipeline needs explicit human gates.

### Gate 1 — Input completeness

Before extraction:

```text
Do we have DWG?
Do we have PDF?
Do we know units?
Do we know drawing status?
Do we know expected output?
```

### Gate 2 — Dimension approval

Before modeling:

```text
Are the main width/height/depth dimensions confirmed?
Are all moving-part dimensions confirmed?
Are material thicknesses known or flagged as assumptions?
```

### Gate 3 — Gray model approval

Before materials/rendering:

```text
Does the model match elevation/section/plan?
Are the proportions correct?
Are moving parts separated correctly?
```

### Gate 4 — Render approval

Before client/builder sharing:

```text
Are materials accurate?
Are assumptions clearly listed?
Are views labeled correctly?
Is there any risk someone mistakes this for final fabrication documentation?
```

---

## 17. QC and validation package

The agent should generate:

```text
dimension_report.csv
component_schedule.csv
material_schedule.csv
assumptions.md
rfi_questions.md
front_overlay_qc.png
section_overlay_qc.png
plan_overlay_qc.png
open_closed_collision_notes.md
model_status.md
```

### QC checklist

```text
- Generated front view matches elevation proportions.
- Generated section view matches depth relationships.
- Generated plan view matches width/depth and opening logic.
- Panel count matches drawing.
- Shelf count and approximate positions match drawing.
- Arch radius/shape is sourced or flagged.
- Glass/lattice pattern is stylistic unless dimensioned.
- Track and hinge details are proxy unless hardware is specified.
- Hidden/inferred parts are marked as assumptions.
- Materials match supplied references.
- File names and object names are clean.
- No unsupported decorative features are added without labeling them as inferred.
```

---

## 18. Builder coordination package

If builders are expected to use the output, the package should include:

```text
/blender/SRANCH_BARWINDOW_v001.blend
/exports/SRANCH_BARWINDOW_v001.glb
/exports/SRANCH_BARWINDOW_v001.fbx
/renders/01_front_closed_hero.png
/renders/02_right_45_closed.png
/renders/03_front_open.png
/renders/04_open_closed_comparison.png
/renders/05_section_depth_view.png
/renders/06_track_detail_closeup.png
/renders/07_stained_glass_detail.png
/qc/dimension_report.csv
/qc/component_schedule.csv
/qc/material_schedule.csv
/qc/assumptions.md
/qc/rfi_questions.md
/qc/front_overlay_qc.png
/qc/section_overlay_qc.png
/qc/model_status.md
```

The package should contain a clear disclaimer:

```text
This model is based on architect-provided DWG/PDF coordination information and human-reviewed assumptions. It is intended for visualization and builder coordination. It is not a final fabrication/shop drawing package unless separately validated and approved by the responsible architect, designer, fabricator, and builder.
```

---

## 19. Precision tiers

| Tier | Input quality | Output confidence | Recommended use |
|---|---|---|---|
| Tier 0 | Screenshot only | Low | Concept visualization only |
| Tier 1 | Dimensioned PDF | Medium | Visual model with assumptions |
| Tier 2 | Vector PDF + DWG/DXF | Medium-high | Strong coordination model |
| Tier 3 | CAD + hardware/material specs + tolerances | High | Builder coordination / pre-shop-drawing support |
| Tier 4 | Fabricator shop drawings + sign-off | Highest | Fabrication-ready documentation |

The S-Ranch package appears to be in the Tier 2 direction because it includes DWG + PDF, but it remains coordination-level unless final shop/fabrication details are supplied.

---

## 20. Render package

The rendering output should separate client beauty views from builder clarity views.

### Client / design views

```text
01_front_closed_hero.png
02_right_45_closed.png
03_front_open.png
04_open_closed_comparison.png
05_luxury_context_view.png
06_stained_glass_detail.png
07_metal_glass_track_detail.png
```

### Builder / coordination views

```text
08_front_gray_model_dimensioned.png
09_section_gray_model_dimensioned.png
10_plan_gray_model_dimensioned.png
11_open_closed_mechanism_gray.png
12_component_exploded_view.png
13_assumptions_and_rfi_summary.pdf
```

Client views sell clarity and confidence. Builder views reduce ambiguity.

---

## 21. Recommended GitHub/project folder structure

```text
/project_name/
  input/
    dwg/
    dxf/
    pdf/
    screenshots/
    material_refs/
    boss_examples/
  extracted/
    cad_layers.json
    cad_entities.json
    dimension_table.csv
    view_map.json
  specs/
    project_spec_v001.json
    project_spec_v002_approved.json
  blender/
    scripts/
    scene_files/
    templates/
  renders/
    preview/
    final/
  qc/
    overlays/
    reports/
    assumptions.md
    rfi_questions.md
  exports/
    glb/
    fbx/
    obj/
  notes/
    decision_log.md
    revision_history.md
```

---

## 22. Recommended MVP roadmap

### MVP 1 — No MCP yet: extraction and spec

Goal:

```text
Upload DWG/PDF → extract dimensions → create project_spec.json → human approval.
```

Deliverables:

```text
view_map.json
dimension_table.csv
component_tree.json
project_spec_v001.json
missing_information.md
```

### MVP 2 — Scripted Blender generation

Goal:

```text
Approved project_spec.json → Blender Python creates precise gray model.
```

Deliverables:

```text
model_generation.py
SRANCH_BARWINDOW_gray_v001.blend
front/section/plan gray model renders
```

### MVP 3 — Materials and renders

Goal:

```text
Gray model → material skin → photoreal render set.
```

Deliverables:

```text
material_library.blend
render_preset_cycles.json
front_closed_hero.png
open_closed_comparison.png
track_detail.png
```

### MVP 4 — QC overlays

Goal:

```text
Generated model → orthographic render → overlay against PDF/DWG reference.
```

Deliverables:

```text
front_overlay_qc.png
section_overlay_qc.png
plan_overlay_qc.png
qc_report.md
```

### MVP 5 — MCP connection

Goal:

```text
AI agent calls safe Blender/CAD tools through MCP.
```

First MCP tools:

```text
read_project_spec
create_scene_from_spec
render_preview
generate_dimension_report
export_review_model
```

Only after these are stable should the server expose more complex write tools.

---

## 23. Safety and security rules

Because MCP can allow an AI agent to invoke tools, run operations, and modify files, the workflow needs guardrails.

Recommended rules:

```text
- Run locally first.
- Use sandboxed project folders.
- Never expose private client files to public tools by default.
- Use read-only tools first.
- Add write tools gradually.
- Require confirmation before overwriting any file.
- Require confirmation before exporting or publishing.
- Log all tool calls.
- Avoid arbitrary shell execution.
- Avoid unrestricted Python execution unless isolated.
- Keep client drawings separate from public internet references.
- Record source provenance for every generated model decision.
```

Good tool design:

```text
render_preview(camera_name, resolution, output_path)
```

Risky tool design:

```text
run_any_command(command)
```

The safer the tool contract, the easier it is for Lesly to trust and review the workflow.

---

## 24. Success metrics

The workflow is successful if it improves production quality and reduces ambiguity.

| Metric | Measurement |
|---|---|
| Requirement completeness | Missing information found before modeling |
| Geometry fidelity | Model matches elevation/section/plan within defined tolerance |
| Revision reduction | Fewer preventable boss/client corrections |
| Material consistency | Wood/metal/glass/stone stay consistent across views |
| Mechanism clarity | Open/closed behavior is understandable and physically plausible |
| Builder usefulness | Builder can understand components, assumptions, and RFIs |
| Hallucination reduction | Unsupported details are flagged instead of hidden |
| Reproducibility | Same approved spec produces the same model structure |
| Handoff quality | Files, reports, assumptions, and outputs are organized |
| Human trust | Lesly knows what is verified vs inferred |

---

## 25. Strategic positioning for Lesly

This workflow positions Lesly as more than a 3D artist.

A stronger role description:

> **AI-assisted 3D Visualization and Coordination Specialist**

or:

> **Client Visualization and Builder Coordination Artist**

The value is not merely making attractive renders. The value is translating architect drawings and design intent into:

- clear 3D visualization;
- photoreal client-facing images;
- open/closed function studies;
- component-aware models;
- builder coordination packages;
- assumption and RFI documentation.

This is a higher-value bridge between design, client approval, and fabrication coordination.

---

## 26. Recommended statement to Lesly

A clear explanation:

> The DWG and PDF give us the technical evidence. The AI agent should not simply guess from the image. It should extract dimensions, classify the elevation/section/plan, create a verified component spec, and then use Blender through scripts or MCP to generate a precise model. Blender can make the model photoreal, but builder reliability depends on verified dimensions, material specs, hardware specs, tolerances, and human review. MCP is useful because it lets the agent operate Blender through controlled tools, but the professional quality comes from the full pipeline: inputs, skills, structured spec, QC, and review.

---

## 27. Technical references

### MCP

- MCP introduction: https://modelcontextprotocol.io/docs/getting-started/intro
- MCP Tools specification: https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- MCP Resources specification: https://modelcontextprotocol.io/specification/2025-06-18/server/resources
- MCP Prompts specification: https://modelcontextprotocol.io/specification/2025-06-18/server/prompts
- Build with Agent Skills: https://modelcontextprotocol.io/docs/develop/build-with-agent-skills

### Blender

- Blender Python API — Mesh type: https://docs.blender.org/api/current/bpy.types.Mesh.html
- Blender Manual — Scene units: https://docs.blender.org/manual/en/4.3/scene_layout/scene/properties.html
- Blender Manual — Cycles introduction: https://docs.blender.org/manual/en/latest/render/cycles/introduction.html
- Blender Python API home: https://docs.blender.org/api/current/

### CAD/DXF

- ezdxf documentation: https://ezdxf.readthedocs.io/en/stable/
- Autodesk DXF reference landing page: https://help.autodesk.com/view/OARX/2024/ENU/?guid=GUID-235B22E0-A567-4CF6-92D3-38A2306D73F3
- Open Design Alliance: https://www.opendesign.com/

---

## 28. Final recommendation

Build the system in this order:

```text
1. Task/reference library
2. DWG/PDF extraction pipeline
3. project_spec.json schema
4. Human verification gate
5. Blender Python gray-model generator
6. Material/render layer
7. QC overlay and dimension report
8. Builder coordination package
9. MCP connection to Blender
10. More advanced automation only after the first pipeline is reliable
```

The disciplined version of the promise is:

> Upload DWG + PDF + references → agent extracts a structured spec → human verifies → Blender creates a precise visual/coordination model → agent applies material skin and photoreal rendering → QC compares the result back to source drawings → package is shared with clear assumptions and builder notes.

That is realistic, valuable, and professionally defensible.
