# One Off / S-RANCH Client Visualization System

This local repo is a complete working package for building a polished client-facing pitch, mobile presentation, visual-approval workflow, and repeatable creative system around the S-RANCH bar-window project.

The strategic goal is **not** to sell Lesly as a low-level 3D operator. The goal is to position her as a **Client Visualization & Experience Director**: someone who translates technical coordination drawings, fabrication logic, and luxury-client expectations into a premium approval experience.

## Start here

1. Open `site/index.html` in a mobile-width browser preview.
2. Read `AGENTS.md` before asking Codex to modify the project.
3. Use `.codex/skills/final-proposal-orchestrator/SKILL.md` before final client proposal or asset work.
4. Use `docs/02_TECHNICAL_ANALYSIS_BAR_WINDOW.md` as the source of truth for the door/window mechanism.
5. Use `docs/06_FINAL_PITCH_MESSAGE.md` when preparing the message to One Off.
6. Use `prompts/image/expert_blueprint_aligned_render_prompt_pack.md` before generating presentation renders; use the smaller files in `prompts/image/` as one-asset entrypoints.
7. Use `prompts/presentation/final_client_presentation_structure_prompt.md` to generate or revise the send-ready presentation structure and copy.
8. Use `site/alignment-questionnaire.html` before final outreach to confirm assumptions, uncertainties, and proposed answers.
9. Use `docs/14_CLIENT_MATERIAL_INTAKE_AUDIT.md` to see which temp/client materials are covered, useful, duplicate, or rejected.

## Local preview

```bash
cd oneoff-s-ranch-visualization-repo-polished
python3 -m http.server 4173
# then open http://localhost:4173/site/
```

Or with npm:

```bash
npm run dev
```

## Important technical correction

The four lower panels are **not four normal swing doors**. They are **two sliding bifold assemblies**:

- left pair: two panels fold together and slide/park left
- right pair: two panels fold together and slide/park right
- top and bottom concealed linear rail / square-tube track logic
- behind the opening: shallow-to-moderate recessed bar/display niche, not a full room

## Current accepted visual assets

- `assets/visuals/accepted/hero_closed_bar_wall_concept.png`
- `assets/visuals/accepted/right_45_closed_concept.png`
- `assets/visuals/accepted/left_pair_open_shallow_niche_concept.png`

These are concept visuals, not final fabrication-accurate renders.

## Repo purpose

This package is meant to help Codex or any local agent generate:

- updated mobile proposal pages
- polished pitch copy
- more accurate visual-generation prompts
- project-specific client-portal product specs
- internal engagement strategy notes
- final email / message to One Off
- internal QA checklists for future visuals


## Polished mobile rebuild

`site/index.html` has been rebuilt using the original polished mobile design system: cinematic hero, mobile-first canvas, bottom pill navigation, KPI grid, tabs, asset grid, mood cards, portal prototype, scope cards, and role card. See `docs/12_MOBILE_DESIGN_SYSTEM.md` and `.codex/skills/mobile-presentation-design-system/SKILL.md`.

## Alignment review

`docs/13_ALIGNMENT_AUDIT_AND_QUESTIONNAIRE.md` records the latest consistency audit. `site/alignment-questionnaire.html` is an interactive mobile-first review surface for accepting, changing, or marking uncertainty on the proposed answers before the final pitch.

## Client material intake

The copied 2026-06-09 client-material intake lives at `assets/client_intake/2026-06-09/`. It preserves the extra messages, screenshots, hardware notes, and reference photos from `/Users/atma/Desktop/temp` using clean repo-local filenames.

## Final proposal gate

Before generating final assets or sending a client proposal, use `.codex/skills/final-proposal-orchestrator/SKILL.md` and `.codex/skills/asset-generation-pipeline/SKILL.md`. The client-send package should include only the polished proposal page and final message; internal questionnaires, archived pages, raw intake, and audits stay internal.
