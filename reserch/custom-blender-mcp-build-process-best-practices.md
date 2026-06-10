# Custom Blender MCP Build Process and Best Practices

**Purpose:** Define the best process for building a custom MCP system for Lesly's professional Blender workflow: architect DWG/PDF input → verified project specification → dimension-controlled Blender model → photoreal render → QC → builder/client coordination package.

**Primary recommendation:** Do not build one giant autonomous Blender agent. Build a spec-first production system, then expose the safest and most repeatable operations through MCP.

**Last updated:** 2026-06-09

---

## 1. Core principle

The system should be designed around this principle:

```text
AI interprets and plans.
project_spec.json is the verified source of truth.
MCP executes controlled Blender operations.
QC proves what is correct.
Human review approves anything builder-relevant.
```

MCP is not the whole product. MCP is the controlled bridge between the agent and Blender. The real product is the full production workflow:

```text
inputs → extraction → verified spec → Blender execution → QC → handoff
```

The goal is not to let AI freely play inside Blender. The goal is to let AI operate a controlled 3D production pipeline with professional constraints.

---

## 2. What this project is really building

This should be treated as a production system, not as a demo.

The system should help Lesly convert architect-provided drawing packages into:

- dimension-controlled 3D gray models;
- photoreal furniture/millwork renders;
- open/closed mechanism studies;
- source-aware component models;
- dimension reports;
- assumption and RFI logs;
- GLB/FBX review exports;
- builder/client coordination packages.

The system should **not** promise automatic final fabrication drawings unless shop drawings, hardware details, tolerances, and fabricator approval are included.

---

## 3. Four-layer architecture

Build the system in four layers.

```text
Layer 1 — Inputs and extraction
DWG / DXF / PDF / references / boss examples / material specs

Layer 2 — Verified project spec
Dimension table + component tree + project_spec.json + assumptions.md

Layer 3 — Blender execution through MCP
Safe tools that create geometry, materials, cameras, renders, exports

Layer 4 — QC and handoff
Dimension report, overlays, render package, builder coordination package
```

The agent should not jump directly from uploaded drawing to Blender model. That is the fragile version.

The professional version is:

```text
Upload architect package
        ↓
Extract dimensions and components
        ↓
Create structured project_spec.json
        ↓
Human verifies dimensions and assumptions
        ↓
MCP calls Blender tools
        ↓
Generate gray model first
        ↓
QC against drawings
        ↓
Apply materials and render photoreal views
        ↓
Export builder/client coordination package
```

---

## 4. Best-practice rule: scripts before MCP

Before building MCP, create one working local Blender Python script that can read `project_spec.json` and generate a simple dimension-controlled model.

First target:

```text
project_spec.json → Blender Python → simple cabinet or bar-window gray model
```

Why this matters:

- It proves the modeling logic works.
- It avoids debugging MCP and Blender geometry at the same time.
- It creates stable functions that can later be wrapped as MCP tools.
- It keeps the first milestone concrete and testable.

Only after the script works should it become an MCP tool.

Correct order:

```text
1. Build script.
2. Test script manually.
3. Add schema validation.
4. Add logging and error handling.
5. Wrap stable function as MCP tool.
6. Add agent workflow around it.
```

---

## 5. Best-practice rule: project_spec.json as the contract

The most important artifact is `project_spec.json`.

This file is the contract between the AI interpretation layer and the Blender execution layer.

A minimal structure:

```json
{
  "project_name": "S-Ranch Bar Window",
  "units": "inches",
  "drawing_status": "coordination_not_for_construction",
  "model_use": "visualization_and_builder_coordination",
  "components": [],
  "dimensions": [],
  "materials": [],
  "mechanisms": [],
  "assumptions": [],
  "required_outputs": []
}
```

Everything Blender creates should come from this spec, not from a vague prompt.

The AI agent may draft this file, but human review should approve it before it drives builder-relevant geometry.

---

## 6. Best-practice rule: narrow MCP tools only

Avoid broad magical tools.

Bad tool:

```text
make_3d_model_from_drawing(file)
```

Better tools:

```text
validate_project_spec(spec_path)
create_scene_from_spec(spec_path, output_blend_path)
create_arch_frame(name, width_in, height_in, radius_in, profile_width_in)
create_bifold_panel_set(name, total_width_in, height_in, panel_count)
create_shelf_array(name, width_in, depth_in, z_positions_in)
assign_material_preset(object_name, material_preset)
set_camera_view(camera_name, view_type)
render_preview(blend_path, camera_name, output_path)
generate_dimension_report(blend_path, output_csv_path)
export_coordination_package(blend_path, output_dir)
```

Narrow tools are better because they are:

- safer;
- easier to test;
- easier to log;
- easier to validate;
- less likely to hallucinate;
- more repeatable;
- easier for Lesly to trust.

---

## 7. Separate resources, tools, and skills

Use MCP concepts cleanly.

| Concept | Meaning in this project |
|---|---|
| Resources | Project files, specs, CAD summaries, material libraries, render outputs |
| Tools | Controlled executable operations in Blender/CAD/QC |
| Prompts/skills | Repeatable workflows and instructions for the agent |

Examples:

### Resources

```text
project_spec.json
dimension_table.csv
component_tree.json
material_library.json
source_drawing_notes.md
qc_report.md
```

### Tools

```text
validate_project_spec
create_scene_from_spec
render_preview
generate_dimension_report
export_glb
export_coordination_package
```

### Skills / prompts

```text
Draft project spec from drawings
Review project spec for missing data
Build gray model from approved spec
Run QC against source drawings
Prepare builder coordination package
```

The agent should use skills to decide what to do, and MCP tools to execute controlled actions.

---

## 8. Recommended implementation phases

### Phase 0 — Define the product, not the technology

Before coding, define the exact deliverables Lesly needs.

Target deliverables:

```text
1. Front closed gray model
2. Front open gray model
3. 45-degree photoreal render
4. Detail render
5. Open/closed comparison
6. Dimension report
7. Assumption/RFI list
8. GLB/FBX review export
9. .blend working file
10. Builder/client coordination package
```

Define what is out of scope:

```text
- automatic final shop drawings
- automatic fabrication sign-off
- unsupported hidden geometry
- hardware decisions without specs
- tolerance decisions without fabricator input
- arbitrary AI modification of source files
```

### Phase 1 — Build the data contract

Create schemas first:

```text
project_spec.schema.json
dimension_table.schema.json
component_tree.schema.json
material_library.schema.json
mechanism_spec.schema.json
qc_report.schema.json
```

This creates the system backbone.

First agent skill:

```text
DWG/PDF package → draft project_spec.json + missing_information.md
```

The output should separate:

```text
verified dimensions
inferred dimensions
missing information
assumptions
RFI questions
```

### Phase 2 — Build deterministic Blender scripts

Create local scripts before MCP:

```text
generate_scene_from_spec.py
create_arch_frame.py
create_panel_set.py
create_shelf_array.py
create_materials.py
create_cameras.py
render_batch.py
generate_dimension_report.py
```

Goal:

```text
Approved project_spec.json → repeatable gray Blender model
```

### Phase 3 — Wrap stable scripts as MCP tools

Only stable, tested scripts become MCP tools.

First MCP tools:

```text
validate_project_spec(spec_path)
create_scene_from_spec(spec_path, output_blend_path)
render_preview(blend_path, camera_name, output_path)
generate_dimension_report(blend_path, output_csv_path)
export_review_model(blend_path, output_format, output_path)
```

This first MCP should be boring and reliable.

Do not start with arbitrary Python execution.

### Phase 4 — Add geometry tools

After scene-from-spec is stable, add narrower component tools:

```text
create_rectangular_panel
create_arch_frame
create_bifold_panel_set
create_concealed_track_proxy
create_shelf_array
create_lattice_glass_pattern
create_wall_context
```

Each tool must have:

```text
clear input schema
strict unit handling
error messages
dimension metadata
object naming convention
test case
```

### Phase 5 — Add material and photoreal rendering

Only after gray geometry passes QC, add materials and rendering.

Tools:

```text
assign_wood_material
assign_dark_metal_material
assign_clear_glass_material
assign_stained_glass_material
create_luxury_interior_lighting
set_front_camera
set_45_camera
set_detail_camera
render_batch
```

Rule:

```text
Geometry first. Beauty second.
```

Beautiful renders should not hide bad geometry.

### Phase 6 — Add QC and builder coordination

QC is what makes the system professional.

Tools:

```text
render_front_orthographic
render_section_orthographic
render_plan_orthographic
generate_dimension_report
compare_overlay_to_reference
list_unverified_assumptions
generate_rfi_list
export_builder_coordination_package
```

The builder package should always separate:

```text
verified dimensions
inferred dimensions
assumptions
missing specs
hardware questions
not-for-construction warnings
```

---

## 9. Recommended local architecture

```text
lesly-3d-agent/
  mcp-server/
    server.py
    tools/
      spec_tools.py
      blender_tools.py
      render_tools.py
      qc_tools.py
    resources/
      project_resource_provider.py
    prompts/
      build_gray_model.md
      run_qc.md
      export_package.md

  blender-addon/
    __init__.py
    bridge.py
    operators.py

  schemas/
    project_spec.schema.json
    dimension_table.schema.json
    component_tree.schema.json
    material_library.schema.json
    mechanism_spec.schema.json
    qc_report.schema.json

  blender-scripts/
    generate_scene_from_spec.py
    geometry_primitives.py
    materials.py
    cameras.py
    exporters.py
    reports.py

  tests/
    fixtures/
      simple_cabinet/
      arched_frame/
      bifold_panels/
      sranch_bar_window/
    test_spec_validation.py
    test_geometry.py
    test_reports.py
    test_exports.py

  projects/
    sranch_bar_window/
      input/
        dwg/
        dxf/
        pdf/
        screenshots/
        material_refs/
      extracted/
        dimension_table.csv
        component_tree.json
        view_map.json
      specs/
        project_spec_v001.json
        project_spec_v002_approved.json
      blender/
        scene_files/
        scripts/
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
      notes/
        decision_log.md
        revision_history.md
```

---

## 10. Development roadmap

A realistic roadmap:

| Stage | Duration | Goal |
|---|---:|---|
| Discovery | 2-3 days | Define outputs, inputs, risks, and boundaries |
| Schema design | 3-5 days | Create spec schemas and validation rules |
| Blender script MVP | 1-2 weeks | Generate simple gray furniture model from spec |
| S-Ranch prototype | 1-2 weeks | Generate bar-window gray model from structured spec |
| MCP MVP | 1 week | Wrap stable scripts as safe MCP tools |
| Render layer | 1 week | Materials, cameras, Cycles render presets |
| QC layer | 1-2 weeks | Dimension report, overlays, assumptions/RFI list |
| Hardening | ongoing | Tests, logs, installer, docs, failure recovery |

The first serious win:

```text
Approved spec → repeatable Blender gray model → QC report → render package
```

That is enough to provide real value before full automation exists.

---

## 11. First production milestone

The first production milestone should be:

```text
Given:
- project_spec_v001.json
- material_library.json
- output_settings.json

The MCP can:
1. validate the spec
2. create a Blender scene
3. build a gray model
4. assign basic materials
5. set front/side/45-degree cameras
6. render previews
7. export GLB
8. generate dimension_report.csv
9. generate assumptions.md
```

This milestone is small enough to build, but valuable enough to prove the workflow.

---

## 12. Testing strategy

Use golden test projects.

Recommended tests:

```text
Test 1: simple rectangular cabinet
Test 2: cabinet with shelves and glass doors
Test 3: arched frame with glass insert
Test 4: bifold panel set with open/closed states
Test 5: S-Ranch-style bar window wall
```

Each test should verify:

```text
- correct dimensions
- correct object names
- correct scene collections
- correct material assignment
- correct camera views
- correct render output
- correct GLB/FBX export
- correct dimension report
- correct assumption report
- repeatability from same spec
```

The same spec should generate the same model structure every time.

---

## 13. Security and safety rules

Because MCP gives the agent access to tools, it must be controlled.

Rules:

```text
- Run locally first.
- Keep client files private by default.
- Use a sandboxed project folder.
- Do not expose arbitrary shell commands.
- Do not expose unrestricted Python execution by default.
- Do not allow source files to be overwritten without approval.
- Log every MCP tool call.
- Require human approval before builder-facing export.
- Version every generated output.
- Keep public internet references separate from private client documents.
- Use clear permissions for read-only vs write tools.
```

Bad tool:

```text
run_any_command(command)
```

Better tool:

```text
render_preview(camera_name, resolution, output_path)
```

Bad tool:

```text
modify_scene_from_text(instruction)
```

Better tools:

```text
create_panel(width_in, height_in, thickness_in)
assign_material_preset(object_name, material_preset)
set_camera_view(camera_name, view_type)
```

---

## 14. Reliability practices

To reduce bottlenecks and production failures:

```text
- Pin Blender version.
- Pin Python package versions.
- Use local material libraries.
- Avoid random online asset dependencies in production.
- Use deterministic geometry generation.
- Validate project_spec.json before execution.
- Fail loudly when dimensions are missing.
- Save scene snapshots before major changes.
- Use structured logs.
- Generate human-readable reports.
- Separate gray model generation from material/render generation.
- Add retries only for safe operations.
- Keep a known-good demo project for regression testing.
```

---

## 15. Human verification gates

### Gate 1 — Input completeness

```text
Do we have DWG/DXF?
Do we have PDF?
Do we know drawing units?
Do we know drawing status?
Do we know target output?
```

### Gate 2 — Spec approval

```text
Are main dimensions verified?
Are missing dimensions flagged?
Are assumptions clear?
Are builder-relevant risks listed?
```

### Gate 3 — Gray model approval

```text
Does geometry match elevation/section/plan?
Are proportions correct?
Are moving parts separated correctly?
```

### Gate 4 — Render approval

```text
Are materials accurate?
Are camera views useful?
Does the render accidentally imply unsupported construction certainty?
```

### Gate 5 — Builder package approval

```text
Are verified/inferred details separated?
Are RFIs listed?
Is the not-for-construction status clear where needed?
```

---

## 16. Decision rule for adding MCP tools

Only add a tool if it is:

```text
repeatable
testable
safe
dimension-driven
useful for Lesly's actual deliverables
auditable after execution
```

Do not add a tool if it is:

```text
creative but uncontrolled
hard to validate
able to overwrite source files
dependent on random online assets
based on vague natural-language commands
impossible to reproduce
```

---

## 17. What to build first

Build first:

```text
1. project_spec.schema.json
2. project_spec_v001.json for a simple cabinet
3. generate_scene_from_spec.py
4. gray model render
5. dimension_report.csv
6. basic MCP wrapper for create_scene_from_spec
```

Then build:

```text
7. arched frame component
8. shelf array component
9. bifold panel component
10. material presets
11. camera/render presets
12. QC overlays
13. builder package export
```

Do not start with:

```text
- fully automatic DWG-to-3D
- arbitrary Blender Python tool
- online asset generation
- photoreal rendering before geometry validation
- builder package before QC
```

---

## 18. Best working principle

The strongest working principle for the project is:

```text
Spec first.
Geometry second.
QC third.
Beauty fourth.
Builder handoff last.
```

This keeps the workflow professional.

---

## 19. How this helps Lesly professionally

This system can help Lesly become faster and more reliable at:

- interpreting architect packages;
- turning technical drawings into 3D coordination assets;
- producing photoreal renders from controlled geometry;
- showing open/closed furniture and millwork mechanisms;
- creating visual explanations for clients and builders;
- documenting assumptions and missing information;
- avoiding unsupported fabrication claims.

The value is not only speed. The value is professional trust.

---

## 20. Final recommendation

Build the custom MCP as an incremental production pipeline:

```text
1. Define deliverables and boundaries.
2. Build schemas and project_spec.json.
3. Build deterministic Blender scripts.
4. Test with simple furniture models.
5. Prototype S-Ranch-style bar window.
6. Wrap stable scripts as MCP tools.
7. Add rendering and material tools.
8. Add QC overlays and dimension reports.
9. Add builder coordination package export.
10. Harden with logs, tests, snapshots, and human approval gates.
```

Do not build an open-ended autonomous Blender assistant first.

Build a controlled, spec-driven, QC-backed Blender production pipeline.

That is the safest and most professional path for Lesly's needs.
