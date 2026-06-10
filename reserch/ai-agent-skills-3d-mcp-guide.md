# AI Agents, Agent Skills, Internet Reference Libraries, and MCP for 3D Workflows

**Audience:** Lesly / scientist-facing explanation  
**Purpose:** Explain why one boss example is not enough for reliable AI-assisted 3D work, what information should be collected with each task, how internet examples should be curated, what specialized agent skills are needed, and how MCP can connect an AI agent to 3D software.

**Last updated:** 2026-06-09

---

## 1. Executive summary

The right mental model is not: "AI is a magic generator."

A more accurate model is:

> A foundation model is a broad statistical prior.  
> An AI agent is that model placed inside a workflow with goals, tools, context, instructions, examples, and quality checks.  
> An agent skill is a reusable SOP / protocol that teaches the agent how to handle one class of task reliably.  
> A reference library is calibration material that helps the agent understand what "good," "wrong," "professional," and "acceptable" mean.

For professional 3D work, especially tasks such as converting a 2D sketch, blueprint, or technical drawing into a 3D object, render, or animation, one example from a boss is useful but insufficient. It is only one positive control. It does not define the full decision rule, the acceptable variance, the edge cases, the material logic, the geometry rules, the mechanism logic, or the failure modes.

The practical recommendation is:

1. Collect the boss task and boss-provided examples.
2. Annotate exactly what each example teaches.
3. Collect additional high-quality external examples from the internet and prior projects.
4. Organize those examples into reference clusters.
5. Build specialized agent skills around recurring task types.
6. Only then connect an agent to 3D software through scripts or MCP.

The key point:

> MCP gives the agent hands. Skills give the agent judgment. Reference examples give the agent calibration.

---

## 2. Why this matters for a scientist

A strong scientist already understands that reliable work does not come from intelligence alone. It comes from the system around the intelligence: protocols, controls, references, measurement standards, calibration, validation, reproducibility, and review.

AI agents are similar.

A base AI model may be broadly capable, but broad capability is not the same as professional reliability. If the task is under-specified, the model fills missing information with plausible guesses. In text tasks, those guesses may appear as fabricated details. In 3D work, the same problem can appear as:

- invented geometry,
- wrong depth,
- incorrect proportions,
- inconsistent materials,
- impossible mechanisms,
- changed silhouettes,
- wrong camera views,
- decorative details that were never requested,
- beautiful but technically useless renders.

This is why structured skills and curated examples matter.

The goal is not to make AI complicated. The goal is to make AI less random, less ambiguous, and more reproducible.

---

## 3. Core definitions

| Term | Practical meaning | Scientific analogy |
|---|---|---|
| Foundation model | Broad AI model trained on large-scale patterns | Broad statistical prior |
| Prompt | User instruction for one run | Experimental condition / task instruction |
| Agent | Model inside a workflow with tools, context, and actions | Research assistant following a workflow |
| Skill | Reusable procedure for a task type | SOP / protocol package |
| Examples | Reference cases that define quality and pattern | Calibration / validation set |
| Boss before/after example | One approved transformation | Positive control |
| Negative example | Bad or rejected output | Failed experiment / negative control |
| Quality rubric | Criteria for acceptance | QC checklist / acceptance criteria |
| MCP | Standard interface for connecting AI to tools and data | Instrument-control interface / lab automation bridge |

---

## 4. Why one boss example is not enough

A boss-provided before/after example is valuable because it shows one successful transformation.

But one example only says:

> "For this input, this output was acceptable."

It does **not** fully explain:

- which details mattered,
- which details were accidental,
- which details should generalize,
- which details were project-specific,
- what should happen when the sketch is incomplete,
- what degree of creative inference is allowed,
- what level of realism is expected,
- what material or style rules are fixed,
- what counts as a technical error,
- what would make a future result unacceptable.

Scientifically, one before/after pair is sample size `n = 1`. It is a useful positive control, but it is not enough to infer the entire protocol.

If an AI agent learns from only one example, it may overfit to that example. It may copy irrelevant details or miss the deeper rule.

That is why more curated examples matter.

---

## 5. The 2D-to-3D task is an inverse problem

Turning a 2D sketch, blueprint, elevation, or drawing into a 3D object is not a simple conversion. It is an inverse problem.

A 2D drawing usually does not fully specify:

- depth,
- backside geometry,
- hidden surfaces,
- material thickness,
- scale,
- internal structure,
- exact joinery,
- movement path,
- hinge/track/pivot logic,
- surface finish,
- lighting,
- camera perspective,
- manufacturing tolerances.

Many different 3D objects can be consistent with the same 2D sketch.

So the AI has to infer missing information. If it lacks constraints and examples, it will infer from generic patterns. That can produce a result that looks good but is wrong.

A professional 3D agent needs to know:

- what is fixed,
- what is flexible,
- what can be inferred,
- what must never be invented,
- what should be flagged as uncertain,
- how the result will be judged.

---

## 6. Why internet examples are useful

The purpose of collecting internet examples is not to copy them.

The purpose is to build a broader **reference distribution**.

One boss example is one point. A curated internet/reference library gives the agent a map of the space:

- what similar products look like,
- how similar mechanisms work,
- how professionals present similar objects,
- what materials are common,
- what camera angles are useful,
- what level of detail is expected,
- what mistakes to avoid,
- what current industry standards look like.

In scientific terms:

> Internet examples act like calibration and reference cases. They help the agent triangulate the professional pattern instead of guessing from one sample.

However, this does **not** mean collecting random images without structure.

Bad collection rule:

> "Collect as much as possible."

Better collection rule:

> "Collect as much high-quality, relevant, source-linked, annotated material as possible."

Random examples create noise. Curated examples create judgment.

---

## 7. What external examples should be collected

For 3D / animation / 2D-to-3D work, collect examples in clusters.

| Reference cluster | What it teaches the agent |
|---|---|
| Similar finished products | Real-world product language, proportions, details, use context |
| Before/after transformations | How rough inputs become polished outputs |
| 2D blueprint + 3D result pairs | How flat drawings translate into volume |
| CAD screenshots / technical drawings | Scale, structure, dimensions, assembly logic |
| Mechanism references | Folding, sliding, rotating, opening, closing, pivot logic |
| Material references | Wood, metal, glass, fabric, stone, plastic, finish, reflection |
| Render style references | Lighting, camera angle, mood, realism level, client-facing polish |
| Negative examples | What "wrong" looks like |
| Client-approved examples | Real quality bar and style preference |
| Competitor / industry examples | Professional terminology, presentation standards, market expectations |

Recommended minimum for one serious project:

| Cluster | Minimum useful amount |
|---|---:|
| Boss examples | 1-3 |
| Similar real products | 10-20 |
| Mechanism examples | 5-10 |
| Material/style references | 10-20 |
| Technical/CAD references | 5-10 |
| Bad/rejected examples | 3-10 |
| Final presentation examples | 5-10 |

The goal is not volume alone. The goal is **coverage of ambiguity**.

---

## 8. Legal and ethical reference-use rule

Internet references should be used as references, not copied deliverables.

Recommended practice:

- Keep source URLs.
- Record creator/company names when visible.
- Respect licenses and copyright.
- Do not claim external references as original work.
- Do not train, fine-tune, or redistribute copyrighted material unless rights allow it.
- Use references to extract general principles: mechanism logic, material behavior, presentation style, professional vocabulary.
- Avoid uploading confidential client drawings to public tools.
- Separate internal client files from public internet references.

A good reference library is not a theft library. It is a research and calibration library.

---

## 9. Reference annotation template

Every useful reference should be annotated. Otherwise the agent may not know what to learn from it.

```text
Reference name:
Source link:
Source type: product / portfolio / CAD / mechanism / material / render / negative example / other
Why this is relevant:
What the agent should learn:
What should NOT be copied:
Useful geometry details:
Useful material/style details:
Useful mechanism details:
Failure risks:
Applies to which skill:
Confidence level: high / medium / low
```

Example:

```text
Reference name: Folding glass bar-window mechanism
Source link: [URL]
Source type: mechanism reference
Why relevant: Similar open/closed bifold behavior.
What agent should learn: Panels fold from a concealed top track; hinge spacing matters.
What should NOT be copied: Exact decorative pattern, brand-specific design, final dimensions.
Useful geometry details: Panel thickness, open angle, vertical frame spacing.
Useful material/style details: Dark metal frame, reflective glass, warm wood context.
Useful mechanism details: Closed state, partially open state, fully open state.
Failure risks: AI may invent impossible hinge geometry or ignore track clearance.
Applies to which skill: Mechanism Skill, Open/Closed Animation Skill, QC Skill.
Confidence level: high.
```

---

## 10. What to collect with every boss task

For every task from the boss, she should collect a structured task package.

### AI / 3D Task Intake Pack

#### 1. Task objective

```text
What is the boss actually asking for?
Final goal:
Who will review it:
What decision should this output help them make:
Is this for concept, client presentation, fabrication, animation, marketing, or internal exploration?
```

#### 2. Source materials

```text
Original sketch / blueprint / PDF / image:
CAD files if available: DWG, DXF, STEP, IGES, SKP, Rhino, Revit, Blender, OBJ, FBX, GLB:
Dimensions / scale / units:
Front, side, plan, section, or elevation views:
Material references:
Photos of similar real objects:
Existing brand / style references:
```

#### 3. Boss example analysis

For each boss-provided before/after example:

```text
What should the AI learn from this example?
What details were preserved?
What details were inferred?
What details were changed intentionally?
What details should not be copied?
What makes the "after" version successful?
What mistakes would make a new output unacceptable?
```

#### 4. Geometry rules

```text
Which dimensions are fixed?
Which proportions are approximate?
What parts must align?
What parts are movable?
What parts are decorative only?
What parts are structural or functional?
Are there hidden/back-side details that need to be inferred?
```

#### 5. Material and style rules

```text
Main materials:
Finish:
Texture:
Color palette:
Lighting mood:
Level of realism:
Should it look technical, luxury, playful, industrial, cinematic, product-rendered, or architectural?
```

#### 6. Animation / mechanism rules

If the object moves:

```text
What opens, folds, slides, rotates, bends, or transforms?
What stays fixed?
Where are hinges, tracks, pivots, or joints?
What are the open and closed positions?
Should the output show motion stages?
```

#### 7. Output requirements

```text
Final format needed: image, animation, 3D model, CAD model, render set, presentation, annotated diagram:
File formats:
Number of views:
Required camera angles:
Resolution:
Deadline:
Tool preference: Blender, Rhino, Maya, Cinema 4D, Revit, Fusion, FreeCAD, etc.:
```

#### 8. Quality criteria

```text
The output is successful if:
- It matches the source.
- It preserves required proportions.
- It avoids invented details.
- It uses correct material.
- It shows the correct mechanism.
- It is visually professional.
- It is usable for the intended decision.
```

#### 9. Negative examples

Attach examples of:

```text
Outputs that look too generic:
Outputs that are technically wrong:
Outputs with incorrect style:
Outputs that hallucinate extra details:
Outputs that are beautiful but not useful:
```

#### 10. Open questions

```text
Missing dimensions:
Missing materials:
Missing view angles:
Unknown mechanism:
Unclear style:
Unclear deliverable:
```

---

## 11. Specialized skills recommended for a 3D production agent

A professional 3D AI workflow should not be one generic agent. It should be a set of narrow skills that compose together.

| Skill | Purpose | Required examples/data | Success metric |
|---|---|---|---|
| Task Intake Skill | Convert boss request into structured requirements | Boss tasks, deliverable specs, review comments | Fewer missing requirements before production |
| Example Annotation Skill | Extract what each before/after example teaches | Approved and rejected examples | Agent correctly separates relevant vs accidental details |
| Internet Reference Curation Skill | Find, classify, and annotate similar external examples | Product pages, portfolios, CAD references, mechanism videos | Better coverage of similar problems without copying |
| Blueprint Interpretation Skill | Read plans, sketches, elevations, sections, dimensions | PDFs, screenshots, DWG/DXF exports, annotated drawings | Correct identification of geometry, scale, fixed constraints |
| 2D-to-3D Inference Skill | Infer depth, volume, backside, and missing geometry conservatively | 2D + 3D pairs, CAD examples, prior projects | Plausible geometry with uncertainty flagged |
| Material / Style Skill | Keep finish, texture, mood, and visual language consistent | Material boards, renders, photos, brand/style references | Consistent material read and reduced generic styling |
| Mechanism Skill | Understand folding, sliding, rotating, hinges, tracks, open/closed states | Mechanism diagrams, videos, open/closed examples | Physically plausible movement and correct fixed/moving parts |
| Render Direction Skill | Plan camera views, lighting, composition, and deliverable set | Prior render sets, shot lists, client presentations | Professional, consistent, decision-useful visuals |
| DCC Execution Skill | Create or modify assets in Blender/Rhino/FreeCAD/etc. | Scripts, API docs, tool commands, templates | Agent can generate repeatable scene/model operations |
| QC Skill | Check output against source, references, and acceptance criteria | Rubrics, failure examples, revision history | Fewer hallucinations and fewer preventable revision cycles |
| Handoff Skill | Package files, assumptions, notes, and review questions | Final deliverable examples, naming rules, folder structures | Clean handoff and fewer clarification loops |

The skills are not theoretical. They are production protocols.

---

## 12. What MCP is

MCP stands for **Model Context Protocol**.

It is an open standard for connecting AI applications to external systems such as data sources, tools, applications, and reusable workflows.

A useful analogy:

> MCP is like USB-C for AI tools, or like an instrument-control interface in a lab.

In a lab, a scientist may have software that controls a sequencer, microscope, liquid handler, or analysis pipeline. The scientist is still responsible for the scientific logic, but the interface lets software trigger real operations.

MCP works similarly for AI agents.

The agent can discover and call external capabilities through standardized interfaces.

MCP commonly exposes three important categories:

1. **Resources** — context/data the agent can read, such as files, project references, schemas, scene summaries, or documentation.
2. **Prompts** — reusable task templates or workflows.
3. **Tools** — executable functions the model can call, such as importing a file, creating an object, running a script, rendering a preview, or exporting a model.

Important distinction:

> MCP is not the brain. MCP is the bridge. The model/agent provides reasoning. Skills provide workflow judgment. MCP provides controlled access to external systems.

---

## 13. What MCP can do with 3D software

For 3D work, an MCP server could connect an AI agent to software such as:

- Blender,
- Rhino / Grasshopper,
- FreeCAD,
- Fusion,
- Maya,
- Cinema 4D,
- Houdini,
- Revit / BIM tools,
- local file systems,
- render pipelines,
- asset libraries.

A 3D MCP server could expose tools such as:

```text
read_scene_summary
import_reference_image
import_blueprint_pdf
import_cad_file
create_box_from_dimensions
create_curve_profile
extrude_profile
create_panel_assembly
assign_material
set_camera_view
set_lighting_setup
create_animation_keyframes
render_preview
export_glb
export_fbx
save_iteration_snapshot
compare_scene_against_brief
```

It could also expose resources such as:

```text
project_brief.md
reference_library.json
approved_materials/
client_examples/
boss_before_after_examples/
current_scene_summary.json
render_outputs/
qc_checklist.md
```

And prompts such as:

```text
/interpret-blueprint
/create-3d-construction-plan
/generate-render-shot-list
/check-open-closed-mechanism
/qc-against-brief
/package-client-handoff
```

---

## 14. Value of MCP for Lesly's workflow

MCP is valuable because it can move the agent from "giving advice" to "performing controlled production actions."

Without MCP:

```text
Lesly asks AI what to do.
AI writes instructions or scripts.
Lesly manually copies work into 3D software.
```

With MCP:

```text
Lesly gives task package + references.
Agent reads the brief and examples.
Agent selects the right skill.
Agent calls controlled 3D software tools.
Agent creates or modifies a scene/model.
Agent renders previews.
Agent checks the output against the brief.
Lesly reviews and approves/corrects.
```

This can create value in several ways:

1. **Faster first drafts**  
   The agent can generate initial geometry, scene setup, cameras, materials, or render passes faster than manual setup.

2. **Better consistency**  
   Reusable skills and prompts can keep camera angles, material naming, file naming, and deliverable structure consistent.

3. **Less repetitive work**  
   Repeated tasks such as importing references, setting cameras, creating standard render views, naming objects, and exporting files can be automated.

4. **Better use of examples**  
   The agent can retrieve relevant prior examples and internet references before acting.

5. **Better QC**  
   The agent can compare the output against the task intake pack: fixed dimensions, materials, mechanism logic, required views, and known failure modes.

6. **Better handoff**  
   The agent can package assumptions, open questions, render outputs, source links, and revision notes.

---

## 15. MCP does not solve everything

MCP should not be described as automatic perfect 2D-to-3D conversion.

That would be misleading.

MCP lets the agent operate tools. It does not remove the fundamental ambiguity of an inverse problem.

The agent still needs:

- good task context,
- dimensions,
- material rules,
- mechanism constraints,
- examples,
- negative examples,
- QC criteria,
- human review.

The safe framing:

> MCP can help an agent produce a stronger, faster first draft and automate repetitive 3D actions. It does not replace expert review, artistic judgment, or dimensional validation.

---

## 16. Best phased implementation path

Do **not** start by building a fully automatic "2D blueprint to perfect 3D model" system. That is too broad and unreliable.

Start narrower.

### Phase 1 — Build the task/reference library

Collect 10-20 real boss tasks and organize them:

- original request,
- source drawings,
- boss examples,
- final outputs,
- review comments,
- what changed,
- what was approved,
- what failed.

Also collect curated internet/reference examples for each task type.

Deliverable:

```text
reference_library/
  boss_tasks/
  boss_before_after_examples/
  internet_references/
  material_references/
  mechanism_references/
  negative_examples/
  approved_outputs/
```

### Phase 2 — Build narrow skills

Start with five skills:

1. Task Intake Skill
2. Example Annotation Skill
3. Reference Curation Skill
4. Blueprint-to-Visual Brief Skill
5. QC Checklist Skill

These can work before any MCP automation exists.

### Phase 3 — Add script-generation assistance

Use the agent to generate:

- Blender Python scripts,
- Rhino Python scripts,
- FreeCAD Python scripts,
- simple procedural geometry,
- camera setup scripts,
- material setup scripts,
- export scripts.

At this stage, Lesly or Dimas still runs/reviews the scripts manually.

### Phase 4 — Prototype a local MCP server

Create a local MCP server for one 3D application, probably Blender first if the goal is visualization, rendering, and animation.

Start with safe read-only and low-risk tools:

```text
read_scene_summary
list_objects
list_materials
import_reference_image
set_camera_view
render_preview
save_snapshot
```

Then add controlled write tools:

```text
create_basic_geometry
assign_material
create_light_setup
create_animation_keyframes
export_preview_model
```

Avoid dangerous tools at first:

```text
arbitrary_shell_command
unrestricted_file_delete
unrestricted_python_exec
publish_to_web
overwrite_source_files
```

### Phase 5 — Add QC and human approval gates

Before exporting or overwriting anything, the agent should produce:

```text
What I changed:
Why I changed it:
Which reference examples I used:
What is still uncertain:
What needs human approval:
Files that will be created or modified:
```

Human review should remain part of the workflow.

---

## 17. Recommended architecture

```text
Boss task + boss examples + source files
        ↓
Task Intake Skill
        ↓
Reference Retrieval / Internet Reference Skill
        ↓
Example Annotation Skill
        ↓
Blueprint / Sketch Interpretation Skill
        ↓
3D Construction Plan
        ↓
MCP server or script agent connected to Blender/Rhino/FreeCAD/etc.
        ↓
Draft model / render / animation
        ↓
QC Skill compares output against task package and references
        ↓
Human review
        ↓
Feedback stored back into reference library
```

This creates a learning loop.

The agent becomes better not because it magically "understands," but because the workflow captures:

- inputs,
- examples,
- decisions,
- corrections,
- final outputs,
- failure cases.

---

## 18. Tool choice recommendations

### Blender

Best for:

- visualization,
- rendering,
- animation,
- procedural scene creation,
- stylized or photoreal presentation,
- camera and lighting automation,
- client-facing previews.

Recommended first MCP target if the goal is AI-assisted 3D presentation and animation.

### Rhino / Grasshopper

Best for:

- NURBS modeling,
- architectural/product forms,
- design iteration,
- parametric workflows,
- clean geometry logic.

Useful if the work involves design geometry, millwork, product surfaces, or architectural components.

### FreeCAD / Fusion / SolidWorks-style CAD

Best for:

- dimensionally constrained parametric modeling,
- mechanical parts,
- fabrication-oriented geometry,
- engineering-like precision.

Better than Blender when manufacturability and exact dimensions matter more than visual polish.

### Revit / BIM tools

Best for:

- building systems,
- architectural documentation,
- BIM context,
- construction-related coordination.

Useful if the 3D work needs to connect to architectural models rather than standalone visual assets.

---

## 19. Quality metrics for the system

A good AI-agent 3D workflow should be measured by practical outcomes, not by how impressive the agent sounds.

| Metric | What to measure |
|---|---|
| Requirement completeness | How often the task intake catches missing information before production |
| Geometry fidelity | How accurately outputs preserve source proportions and fixed dimensions |
| Material consistency | Whether wood/metal/glass/fabric/etc. remain consistent across views |
| Mechanism plausibility | Whether moving parts fold/slide/rotate correctly |
| Hallucination rate | How often the agent invents unsupported details |
| Revision reduction | Fewer preventable revision cycles from boss/client feedback |
| Repeatability | Same brief produces consistent output structure across runs |
| Reference usefulness | Agent selects relevant examples rather than random inspiration |
| Handoff quality | Files, assumptions, questions, and outputs are easy to review |
| Human trust | Lesly can predict where the agent is reliable and where she must verify |

The strongest success metric:

> Does the workflow reduce ambiguity and produce better first drafts with fewer corrections?

---

## 20. Security and safety rules for MCP

Because MCP can let an agent call tools and potentially modify files or run scripts, guardrails are necessary.

Recommended rules:

1. Start local and sandboxed.
2. Use read-only tools first.
3. Add write tools gradually.
4. Require approval before overwriting files.
5. Require approval before exporting/publishing.
6. Log every tool call.
7. Keep backups of source files.
8. Use narrow tool descriptions and strict input schemas.
9. Avoid arbitrary shell access.
10. Avoid unrestricted Python execution unless isolated.
11. Keep private client data separate from public references.
12. Do not expose confidential files to internet-based tools unless explicitly approved.

Good MCP tool design should be narrow and explicit.

Bad tool:

```text
run_any_command(command: string)
```

Better tool:

```text
render_preview(camera_name: string, resolution: string, output_path: string)
```

Bad tool:

```text
modify_scene(instruction: string)
```

Better tools:

```text
create_panel(width, height, thickness, material_name)
assign_material(object_name, material_name)
set_camera_view(camera_name, view_type)
create_open_closed_animation(panel_group, start_frame, end_frame, open_angle)
```

The narrower the tool, the easier it is to validate.

---

## 21. How to explain the whole thing in one paragraph

An AI model is a broad probabilistic system. An AI agent is that model inside a workflow with tools and goals. A skill is a reusable SOP that tells the agent how to perform a class of tasks. For professional 3D work, one boss example is not enough because it is only one positive control. The agent needs curated examples, constraints, references, negative examples, and QC criteria to understand what good means and what mistakes to avoid. MCP can connect the agent to 3D software so it can perform controlled actions, but MCP only gives the agent access to tools. The real quality comes from skills, examples, constraints, and human review.

---

## 22. Practical next step

The immediate next step is not full automation.

The immediate next step is to create a structured reference and task library.

Recommended first folder/table columns:

```text
Project name
Task type
Boss request
Source files
Boss example link
Internet reference links
Reference cluster
What to learn
What not to copy
Fixed constraints
Flexible areas
Material/style notes
Mechanism notes
Required output
Success criteria
Failure examples
Final output link
Boss/client feedback
Skill tags
```

After 10-20 tasks are collected and annotated, it becomes much easier to design serious agent skills and decide whether Blender MCP, Rhino automation, FreeCAD scripting, or another technology path is most useful.

---

## 23. Source references for MCP and skills

Useful official references:

- Model Context Protocol introduction: https://modelcontextprotocol.io/docs/getting-started/intro
- MCP Tools specification: https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- MCP Resources specification: https://modelcontextprotocol.io/specification/2025-06-18/server/resources
- MCP Prompts specification: https://modelcontextprotocol.io/specification/2025-06-18/server/prompts
- Build with Agent Skills: https://modelcontextprotocol.io/docs/develop/build-with-agent-skills
- Rhino.Python guides: https://developer.rhino3d.com/guides/rhinopython/

These references support the practical framing in this document: MCP connects AI applications to external systems; tools expose executable actions; resources expose contextual data; prompts expose reusable workflows; agent skills provide portable instruction sets for task-specific work.

---

## 24. Final takeaway

The right professional system is not:

```text
One prompt → one AI output → hope it is good.
```

The right professional system is:

```text
Task package → curated references → specialized skill → controlled tool use → QC → human review → feedback loop.
```

That is how AI becomes useful for serious 3D production work.
