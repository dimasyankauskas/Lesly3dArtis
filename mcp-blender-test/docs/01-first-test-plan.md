# First Blender MCP Test Plan

**Purpose:** Define the first controlled MCP/Blender test for Lesly's workflow.

**Goal:** Validate that a spec-first pipeline can create a dimension-controlled Blender gray model, render previews, and generate coordination outputs before attempting full DWG/PDF automation.

---

## 1. Test objective

The first test should prove this flow:

```text
sanitized project_spec.json
        ↓
validate spec
        ↓
create Blender scene
        ↓
build gray model
        ↓
set cameras
        ↓
render previews
        ↓
export review model
        ↓
generate dimension report + assumptions
```

This is intentionally narrower than:

```text
upload any DWG/PDF → automatic perfect model
```

The first version should be boring, controlled, repeatable, and easy to inspect.

---

## 2. Why this test comes first

The biggest risk is not Blender rendering. The biggest risk is uncontrolled interpretation.

Before the system reads real confidential DWG/PDF files, it should prove that it can:

- read a structured spec;
- generate predictable geometry;
- preserve units;
- name objects clearly;
- set cameras;
- save files;
- export review formats;
- produce a dimension report;
- document assumptions.

If this does not work from a clean spec, it will not work reliably from messy architect drawings.

---

## 3. Test input

Use a sanitized sample spec:

```text
mcp-blender-test/samples/project_spec_sranched_bar_window_sanitized_v001.json
```

This spec should include generic/sanitized data for:

- built-in wall context;
- arched central frame;
- lower bifold panel set;
- removable shelves;
- concealed track proxy;
- dark metal/glass material intent;
- warm wood millwork material intent;
- required render outputs;
- assumptions and not-for-construction warnings.

Do not use actual client/company DWG/PDF files in the public repo.

---

## 4. Expected outputs

The first MCP test should produce:

```text
projects/sranch-bar-window-test/blender/gray_model_v001.blend
projects/sranch-bar-window-test/renders/01_front_closed_gray.png
projects/sranch-bar-window-test/renders/02_right_45_gray.png
projects/sranch-bar-window-test/renders/03_open_closed_proxy_gray.png
projects/sranch-bar-window-test/exports/review_model_v001.glb
projects/sranch-bar-window-test/qc/dimension_report.csv
projects/sranch-bar-window-test/qc/assumptions.md
projects/sranch-bar-window-test/qc/model_status.md
```

---

## 5. MCP MVP tools

First tools only:

```text
validate_project_spec(spec_path)
create_scene_from_spec(spec_path, output_blend_path)
render_preview(blend_path, camera_name, output_path)
export_review_model(blend_path, output_format, output_path)
generate_dimension_report(blend_path, output_csv_path)
generate_assumptions_report(spec_path, output_md_path)
```

Do not include unrestricted tools yet:

```text
execute_any_python
run_shell_command
modify_scene_from_free_text
delete_file
overwrite_source_file
```

---

## 6. First geometry scope

Create only simple, auditable geometry:

```text
wall/context block
base cabinet block
arched frame proxy
lower bifold panel rectangles
shelf rectangles
concealed track proxy box/rail
basic glass panes
basic material placeholders
```

Do not start with:

```text
complex decorative carving
perfect stained glass detail
exact hardware simulation
fabrication tolerances
final joinery
```

---

## 7. Success criteria

The first test succeeds if:

```text
- The same spec generates the same scene every time.
- Units are consistent.
- Objects are named clearly.
- Main dimensions match the spec.
- Cameras are created and render without manual setup.
- GLB export succeeds.
- Dimension report is generated.
- Assumptions are written clearly.
- No source/client files are required in the public repo.
```

---

## 8. Human review checklist

Lesly or Dimas should review:

```text
Does the gray model match the intended component structure?
Are proportions believable?
Are fixed vs inferred dimensions clear?
Are open/closed states understandable?
Are outputs easy to find?
Are assumptions explicit?
Would this be useful as a starting point for a real architect package?
```

---

## 9. Next step after this test

After the spec-first test works, the next milestone is:

```text
private DWG/PDF input → extracted dimension table → draft project_spec.json → human approval → Blender scene generation
```

That should happen in private storage or a private repo if real company files are involved.
