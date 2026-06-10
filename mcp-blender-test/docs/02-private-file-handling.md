# Private File Handling for MCP Blender Tests

**Purpose:** Define how to handle architect/company DWG, DXF, PDF, screenshot, and material files safely while building the Blender MCP workflow.

---

## 1. Core rule

Do not commit confidential company/client files to a public repository.

This includes:

```text
*.dwg
*.dxf
*.pdf
architect drawing packages
client screenshots
material boards
shop drawings
fabricator documents
private emails or instructions
```

This repo may contain sanitized schemas, examples, and planning documentation. Real project files should stay in private storage unless permission is explicit.

---

## 2. Recommended storage model

Use two locations:

### Public repo

Use for:

```text
documentation
schemas
sanitized examples
non-confidential test specs
scripts/templates
folder structure
README files
```

### Private storage or private repo

Use for:

```text
actual DWG files
actual DXF exports
actual PDF drawing packages
client screenshots
material boards
shop drawings
render outputs that reveal confidential designs
```

---

## 3. Suggested local/private folder structure

```text
private-project-files/
  sranch-bar-window/
    input/
      dwg/
      dxf/
      pdf/
      screenshots/
      material_refs/
    extracted/
      dimension_table.csv
      cad_layers.json
      view_map.json
    specs/
      project_spec_v001_private.json
      project_spec_v002_approved_private.json
    blender/
    renders/
    qc/
    exports/
```

This private folder can mirror the public test workspace, but it should not be pushed to the public repo.

---

## 4. `.gitignore` recommendation

If this repo later contains test scripts, add or confirm ignore rules for private source files:

```gitignore
# Private/client source files
*.dwg
*.dxf
*.pdf
*.blend
*.glb
*.fbx
*.obj
*.stp
*.step
*.iges
*.igs

# Private project folders
private/
private-project-files/
client-files/
company-files/

# Large generated outputs
mcp-blender-test/projects/**/input/dwg/*
mcp-blender-test/projects/**/input/dxf/*
mcp-blender-test/projects/**/input/pdf/*
mcp-blender-test/projects/**/input/screenshots/*
mcp-blender-test/projects/**/input/material_refs/*
mcp-blender-test/projects/**/blender/*
mcp-blender-test/projects/**/renders/*
mcp-blender-test/projects/**/exports/*
```

Use `.gitkeep` files to preserve folders without committing private files.

---

## 5. Sanitization rules

Before creating public samples:

```text
- Remove client names if needed.
- Remove addresses and site-specific identifiers.
- Remove project paths and internal company notes.
- Replace exact dimensions if confidential.
- Remove logos/title blocks if not approved.
- Use generic component names.
- Keep only the abstract workflow pattern.
```

A safe public sample can describe:

```text
arched frame
four bifold lower panels
removable shelves
concealed track proxy
warm wood material
dark metal/glass material
coordination-only status
```

without publishing the original drawing.

---

## 6. Human approval before publishing

Before any real project file is committed or shared publicly, confirm:

```text
Who owns the drawing?
Is the repo public or private?
Does Lesly have permission to publish it?
Does the file reveal client/project confidential information?
Could it expose address, design intent, fabrication details, or proprietary work?
Is Git LFS needed for large binary files?
```

Default answer should be:

```text
Do not publish.
```

---

## 7. Practical rule for the first MCP test

For the first public GitHub test, use only:

```text
sanitized project_spec.json
schemas
README docs
placeholder folders
non-confidential scripts
```

For real DWG/PDF testing, use:

```text
local private folder or private repo
```

Then copy only sanitized lessons, schemas, and generalized workflow improvements back to this public repo.
