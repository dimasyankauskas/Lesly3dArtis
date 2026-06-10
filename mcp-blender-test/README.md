# MCP Blender Test Workspace

**Purpose:** Dedicated workspace for the first Blender MCP test focused on Lesly's professional workflow: architect DWG/PDF input → verified project specification → dimension-controlled Blender model → photoreal render → QC → builder/client coordination package.

**Status:** Planning and test scaffolding. No confidential client/company DWG or PDF files are committed here.

---

## Why this folder exists

This folder separates the MCP/Blender production experiment from the public portfolio website files.

The first test will use the S-Ranch-style bar-window/millwork workflow as the target pattern:

```text
DWG/PDF package
        ↓
CAD/PDF extraction
        ↓
project_spec.json
        ↓
Human verification
        ↓
Blender MCP / Blender Python
        ↓
Gray model
        ↓
QC report
        ↓
Photoreal render
        ↓
Builder/client coordination package
```

The goal is not to build a generic autonomous Blender assistant. The goal is to build a controlled, spec-first, QC-backed production workflow.

---

## Important confidentiality rule

The actual architect/company files, such as DWG/PDF drawing packages, should **not** be committed to this public repository unless there is explicit permission to publish them.

Use this repo for:

- documentation;
- schemas;
- sanitized test specs;
- MCP design notes;
- scripts/templates;
- placeholder folder structure;
- non-confidential examples.

Use private storage or a private repo for:

- actual DWG files;
- actual PDF drawing sets;
- client screenshots;
- confidential material boards;
- proprietary builder/fabricator documents.

---

## Folder map

```text
mcp-blender-test/
  README.md
  docs/
    00-documentation-index.md
    01-first-test-plan.md
    02-private-file-handling.md
  schemas/
    project_spec.schema.json
  samples/
    project_spec_sranched_bar_window_sanitized_v001.json
  projects/
    sranch-bar-window-test/
      README.md
      input/
        PRIVATE_FILES_NOT_COMMITTED.md
        dwg/.gitkeep
        pdf/.gitkeep
        screenshots/.gitkeep
        material_refs/.gitkeep
      specs/.gitkeep
      blender/.gitkeep
      renders/.gitkeep
      qc/.gitkeep
      exports/.gitkeep
```

---

## First milestone

The first practical milestone is:

```text
Given a sanitized/approved project_spec.json,
the MCP can:
1. validate the spec;
2. create a Blender scene;
3. build a gray model;
4. set cameras;
5. render previews;
6. export GLB;
7. generate a dimension report;
8. generate assumptions/RFI notes.
```

This should be built and tested before attempting automatic DWG/PDF extraction.
