# Skill: Video Prompt Director

Use this skill to produce Gemini/Veo prompts.

## Rule
If accuracy matters, start with camera-only motion. Do not ask the model to animate complex doors until still images are correct.

## Key instruction
No morphing, no warping, no changing door count, no full room appearing behind the opening.

## Still-first gate

Do not generate final video prompts until stills pass `quality-control`.

Preferred sequence:

1. camera-only closed hero inspection,
2. camera-only left-open shallow-cove inspection,
3. camera-only both-open inspection after a correct both-open still exists,
4. separate clean diagram animation for fold/slide mechanism.

Treat glass/lattice/finish as concept unless confirmed. Preserve the approved still exactly; do not let video tools invent final infill, colors, extra panels, or a full room behind the window.
