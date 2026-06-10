# Blender MCP Selection and Production Recommendation

**Purpose:** Document the recommended MCP strategy for Lesly's professional Blender workflow: architect DWG/PDF input → structured specification → dimension-controlled 3D model → photoreal render → builder/client coordination package.

**Primary conclusion:** There is no public Blender MCP that should be treated as "100% production-safe, no bottlenecks, builder-grade" out of the box. The best strategy is to use an existing public Blender MCP only for prototyping and learning, then build a custom hardened Blender MCP specifically for Lesly's workflow.

**Last updated:** 2026-06-09

---

## 1. Executive recommendation

The best recommendation is a two-track strategy:

```text
Track 1 — Prototype quickly:
Use an existing public Blender MCP, especially ahujasid/blender-mcp, as a short proof-of-concept and learning reference.

Track 2 — Build production system:
Create a custom local MCP server: lesly-blender-production-mcp.
```

The reason is simple:

> Generic Blender MCP servers are useful for experimentation, but Lesly's work requires a narrow, reliable, testable, and professionally defensible workflow around DWG/PDF interpretation, verified dimensions, Blender scene generation, photoreal rendering, QC, and builder coordination.

The production system should not expose broad arbitrary control of Blender by default. It should expose narrow tools that create geometry, materials, cameras, renders, and reports from verified project specifications.

---

## 2. Why "100% working, no bottlenecks" is not realistic out of the box

A professional AI-assisted 3D system has several possible failure points:

- The architect drawing may be incomplete.
- DWG layers may be messy or inconsistent.
- PDF dimensions may be plotted but not semantically structured.
- A 2D drawing may omit depth, hidden geometry, material thickness, hardware, or tolerances.
- Blender can create precise geometry only when the input dimensions and rules are explicit.
- A generic MCP server may expose too much flexibility and too little task-specific validation.
- Builder-grade deliverables require human review and often fabricator/shop-drawing validation.

So the professional goal should not be:

```text
Any file → automatic perfect 3D model.
```

The professional goal should be:

```text
DWG/PDF + references → structured spec → human verification → controlled Blender execution → QC → coordination package.
```

That is much more reliable and defensible.

---

## 3. Existing public option: ahujasid/blender-mcp

The strongest public Blender MCP option to evaluate first is:

```text
https://github.com/ahujasid/blender-mcp
```

Why it is useful:

- It is a real public Blender MCP project.
- It can connect AI assistants to Blender through MCP.
- It demonstrates practical scene inspection and scene manipulation patterns.
- It can be used as a fast proof-of-concept.
- It can help validate whether MCP-based Blender control feels useful for Lesly's workflow.

Why it should not be treated as the final production layer:

- It is general-purpose rather than specialized for architect DWG/PDF → furniture/millwork workflows.
- It can expose broad Blender Python execution patterns, which are powerful but risky.
- It may include features that are not needed for Lesly's workflow, such as asset search or external model generation.
- It is not designed around builder coordination, verified dimensions, assumptions, RFIs, or QC overlays.
- Public community tools can change quickly and may not have the stability guarantees required for client/builder production.

Recommendation:

> Use ahujasid/blender-mcp for a short prototype only. Do not make it the core dependency for Lesly's professional workflow without hardening, pinning, security review, and task-specific restrictions.

---

## 4. Why a custom production MCP is the better path

Lesly does not need a generic "AI controls Blender" system.

She needs a focused production system for:

- architect drawing intake;
- DWG/PDF-derived geometry;
- dimension-controlled furniture/millwork models;
- bifold/sliding/open-close mechanisms;
- material and render setup;
- photoreal visuals;
- builder coordination deliverables;
- QC reports;
- assumption logs and RFI lists.

That requires custom tools and rules.

A custom MCP can be:

- local;
- private;
- sandboxed;
- versioned;
- testable;
- tied to her actual workflow;
- limited to safe deterministic commands;
- integrated with her material library;
- designed around project_spec.json;
- built with human approval gates.

This is how to get close to professional reliability.

---

## 5. Recommended production MCP name

Working name:

```text
lesly-blender-production-mcp
```

Mission:

> A local MCP server that lets an AI agent create, modify, render, validate, and package dimension-controlled Blender scenes from verified project specifications for high-end 3D visualization and builder coordination.

Not its mission:

> A general-purpose autonomous Blender agent that can run any command and freely invent geometry.

---

## 6. Correct architecture

```text
Architect DWG/PDF package
        ↓
CAD/PDF extraction layer
        ↓
project_spec.json
        ↓
Human verification gate
        ↓
Lesly Blender Production MCP
        ↓
Blender Python creates geometry from exact numbers
        ↓
QC overlays + dimension report
        ↓
Materials + Cycles photoreal render
        ↓
Builder/client coordination package
```

The key design principle:

> MCP should execute verified operations. It should not be the place where the agent freely guesses the design.

The AI reasoning layer should create and review a structured spec. The MCP layer should perform controlled actions in Blender.

---

## 7. Production tool philosophy

Avoid one broad magical tool.

Bad tool:

```text
make_3d_model_from_dwg(file)
```

Better tools:

```text
create_project_scene(project_name, units)
create_scene_from_project_spec(spec_path)
create_rectangular_panel(name, width_in, height_in, thickness_in)
create_arch_frame(name, width_in, height_in, radius_in, profile_width_in)
create_bifold_panel_set(name, total_width_in, height_in, panel_count)
create_shelf_array(name, width_in, depth_in, z_positions_in)
assign_material_preset(object_name, material_preset)
set_camera_front_orthographic()
set_camera_right_45_perspective()
render_named_camera(camera_name, output_path)
generate_dimension_report(output_path)
export_builder_coordination_package(output_dir)
```

Why narrow tools are better:

- They reduce hallucination.
- They are easier to test.
- They are easier to log.
- They are easier for Lesly to trust.
- They reduce accidental file damage.
- They force the agent to work from explicit dimensions.
- They support repeatability.

---

## 8. Minimum viable production MCP

### MVP 1 — Read and render from approved spec

First tool set:

```text
read_project_spec
validate_project_spec
create_scene_from_project_spec
list_scene_objects
render_preview
save_blend_copy
export_glb
generate_dimension_report
```

Goal:

> Given an approved project_spec.json, Blender creates a gray model, renders preview views, exports a review model, and generates a dimension report.

This is the safest first version because the agent is not yet inventing arbitrary geometry tool-by-tool. It is executing a verified specification.

### MVP 2 — Furniture/millwork geometry tools

Add:

```text
create_panel
create_frame
create_arch_frame
create_shelf
create_bifold_panel_set
create_track_proxy
create_lattice_glass
create_cabinet_base
create_wall_context
```

Goal:

> The agent can construct and modify specific furniture/millwork components from known dimensions.

### MVP 3 — Material and rendering tools

Add:

```text
assign_wood_material
assign_dark_metal_material
assign_clear_glass_material
assign_stained_glass_material
create_luxury_interior_lighting_setup
set_camera_front
set_camera_45
set_camera_detail
render_batch
```

Goal:

> The agent can transform a gray model into client-facing photoreal visuals.

### MVP 4 — Mechanism tools

Add:

```text
define_pivot
create_track_path
set_closed_state
set_open_state
create_open_close_keyframes
render_open_closed_comparison
run_basic_collision_check
```

Goal:

> The agent can explain and render open/closed behavior for folding/sliding/rotating systems.

### MVP 5 — QC and builder package

Add:

```text
render_orthographic_overlay
compare_model_to_reference
list_unverified_assumptions
generate_rfi_list
export_builder_coordination_package
```

Goal:

> The agent can produce review artifacts that help Lesly and builders understand what is verified, what is assumed, and what still needs confirmation.

---

## 9. What the custom MCP should not expose at first

Avoid these tools in the first production version:

```text
execute_any_python
run_shell_command
delete_file
overwrite_source_file
publish_to_web
download_random_assets
modify_scene_from_free_text
```

Why:

- They create security risk.
- They create reproducibility problems.
- They make errors harder to audit.
- They encourage the agent to improvise.
- They can damage client files.

If arbitrary Python execution is ever allowed, it should be:

- local only;
- sandboxed;
- logged;
- approval-gated;
- restricted to a project folder;
- disabled by default for normal production.

---

## 10. Recommended technical stack

| Layer | Recommendation |
|---|---|
| Blender | Pin a stable Blender version across machines |
| MCP server | Python MCP server |
| Blender bridge | Local Blender add-on or local socket service |
| Geometry generation | Blender Python / `bpy`, generated from verified specs |
| Spec format | `project_spec.json` |
| CAD intake | DWG → DXF → parsed entities |
| DXF parsing | Python DXF parser such as ezdxf |
| PDF parsing | PyMuPDF / pdfplumber / visual extraction |
| Materials | Local PBR material library |
| Rendering | Blender Cycles |
| QC | Orthographic overlays, dimension reports, assumption logs |
| Version control | Git / dated project snapshots |
| Safety | no arbitrary command execution by default |
| Reliability | logs, retries, snapshots, pinned dependencies, test files |

---

## 11. Production readiness checklist

Before Lesly depends on this professionally, the MCP should pass these checks:

```text
- Works on the same pinned Blender version repeatedly.
- Can open/create/save a Blender scene reliably.
- Can generate the same model from the same project_spec.json.
- Can render front, side, 45-degree, and detail views.
- Can create a dimension report.
- Can export GLB/FBX review files.
- Can save snapshots without overwriting source files.
- Logs every tool call.
- Has clear error messages.
- Does not expose arbitrary shell commands.
- Does not expose unrestricted Python execution by default.
- Can run on a local machine without uploading private client files.
- Has at least 3-5 test projects before real client reliance.
```

---

## 12. Test projects to validate the MCP

Before using the system for serious client/builder work, test it on controlled cases:

```text
Test 1: Simple rectangular cabinet from project_spec.json.
Test 2: Cabinet with shelves and glass doors.
Test 3: Arched frame with glass insert.
Test 4: Bifold panel set with open/closed states.
Test 5: Full bar-window wall with frame, shelves, bifold panels, and material skin.
```

Each test should verify:

```text
- correct dimensions;
- correct object names;
- correct material assignment;
- correct camera views;
- correct render output;
- correct export files;
- correct assumption report;
- repeatability from same spec.
```

---

## 13. Decision matrix

| Option | Speed | Reliability | Production safety | Best use |
|---|---:|---:|---:|---|
| Use public Blender MCP as-is | High | Medium/unknown | Low-medium | Demo/prototype |
| Fork public Blender MCP and harden | Medium | Medium-high | Medium | Transitional option |
| Build custom Lesly MCP | Medium-low initially | Highest long-term | Highest | Professional workflow |
| No MCP, scripts only | Medium | High if controlled | High | Good early MVP |

Recommendation:

```text
Start with scripts and/or public MCP prototype.
Then build custom Lesly MCP around project_spec.json.
```

---

## 14. Recommended rollout plan

### Week 1 — Prototype

```text
Install Blender.
Test existing public Blender MCP.
Run simple scene creation.
Run preview render.
Document what works and fails.
```

### Week 2 — Spec-first workflow

```text
Define project_spec.json.
Create one simple cabinet spec.
Generate Blender model from spec using script.
Render front/side/45-degree views.
```

### Week 3 — Custom MCP MVP

```text
Wrap the working script as MCP tools.
Expose only safe tools.
Create logging and snapshot behavior.
```

### Week 4 — S-Ranch-style model test

```text
Create spec for bar-window example.
Generate gray model.
Add materials.
Render open/closed states.
Generate dimension and assumption reports.
```

### Week 5+ — Harden

```text
Add QC overlays.
Add builder package export.
Add more geometry functions.
Add test suite.
Add failure handling.
```

---

## 15. Why this is the top-tier path

Top-tier professional work needs:

- predictable inputs;
- controlled geometry;
- repeatable rendering;
- safety boundaries;
- audit logs;
- source traceability;
- human verification;
- QC outputs;
- clear assumptions;
- builder/client handoff packaging.

A generic public MCP can show what is possible. A custom production MCP can make it reliable.

The strategic point:

> The goal is not to let AI freely play inside Blender. The goal is to let AI operate a controlled Blender production pipeline with professional constraints.

---

## 16. Recommended final answer

The best MCP strategy is:

```text
Use ahujasid/blender-mcp as a quick prototype/reference.
Do not rely on it as the final professional workflow.
Build a custom local production MCP for Lesly's DWG/PDF → project_spec.json → Blender → render/QC/export workflow.
```

The custom MCP should be:

```text
local
sandboxed
narrow-tool based
spec-driven
versioned
logged
approval-gated
Blender-version pinned
focused on furniture/millwork
integrated with QC and builder handoff
```

This is the most realistic way to approach professional reliability.

---

## 17. References

### Public Blender MCP prototype reference

- ahujasid/blender-mcp: https://github.com/ahujasid/blender-mcp

### MCP official references

- MCP introduction: https://modelcontextprotocol.io/docs/getting-started/intro
- MCP tools specification: https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- MCP resources specification: https://modelcontextprotocol.io/specification/2025-06-18/server/resources
- MCP prompts specification: https://modelcontextprotocol.io/specification/2025-06-18/server/prompts
- Build with Agent Skills: https://modelcontextprotocol.io/docs/develop/build-with-agent-skills

### Blender references

- Blender Python API: https://docs.blender.org/api/current/
- Blender Mesh API: https://docs.blender.org/api/current/bpy.types.Mesh.html
- Blender Cycles rendering: https://docs.blender.org/manual/en/latest/render/cycles/introduction.html

---

## 18. Final working principle

```text
MCP gives the agent hands.
Skills give the agent judgment.
project_spec.json gives the agent a verified source of truth.
Blender gives the agent a production/rendering engine.
QC gives Lesly professional trust.
```

That is the system to build.
