# MCP Blender Test — Documentation Index

This folder collects the documentation and working plan for the first Blender MCP test.

---

## Core planning documents already created

These documents live in the existing `reserch/` archive:

1. [`ai-agent-skills-3d-mcp-guide.md`](../../reserch/ai-agent-skills-3d-mcp-guide.md)  
   Scientist-facing explanation of AI agents, skills, reference libraries, and MCP for 3D workflows.

2. [`blender-mcp-cad-to-3d-pipeline-plan.md`](../../reserch/blender-mcp-cad-to-3d-pipeline-plan.md)  
   Full Blender + MCP + DWG/PDF → precise 3D model → render → builder coordination pipeline.

3. [`blender-mcp-selection-production-recommendation.md`](../../reserch/blender-mcp-selection-production-recommendation.md)  
   Recommendation to prototype with a public Blender MCP but build a custom hardened production MCP.

4. [`custom-blender-mcp-build-process-best-practices.md`](../../reserch/custom-blender-mcp-build-process-best-practices.md)  
   Best practices, architecture, phased build process, and first milestone for the custom MCP.

---

## Documents in this test workspace

1. [`01-first-test-plan.md`](01-first-test-plan.md)  
   Concrete first-test workflow for the Blender MCP experiment.

2. [`02-private-file-handling.md`](02-private-file-handling.md)  
   Rules for handling DWG/PDF/client files without leaking confidential project data.

3. [`../schemas/project_spec.schema.json`](../schemas/project_spec.schema.json)  
   Initial schema for the verified source-of-truth file used by Blender automation.

4. [`../samples/project_spec_sranched_bar_window_sanitized_v001.json`](../samples/project_spec_sranched_bar_window_sanitized_v001.json)  
   Sanitized sample spec inspired by the bar-window workflow, without committing actual client drawings.

---

## Working principle

```text
Spec first.
Geometry second.
QC third.
Beauty fourth.
Builder handoff last.
```

---

## Do not commit here

Do not commit actual confidential/company files unless the repo is private and publishing rights are confirmed:

```text
*.dwg
*.dxf
*.pdf
client screenshots
architect drawing packages
material boards
shop drawings
fabricator documents
```

Use private storage for those files during testing.
