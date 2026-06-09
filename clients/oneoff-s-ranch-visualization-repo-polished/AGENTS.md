# AGENTS.md — Local Codex Operating Instructions

## Role
You are assisting on a high-stakes creative/business proposal for One Off Furniture and the S-RANCH bar-window project. Treat this as a premium client-experience strategy project, not a generic website or render portfolio.

## Primary positioning
Lesly should be positioned as:

**Client Visualization & Experience Director**

Alternative wording:

**Client Visualization Director for Bespoke Furniture & Architectural Metalwork**

Do not reduce her to “3D artist who converts 2D to 3D.” That framing is strategically weak and commoditizes the work.

## Core thesis
One Off’s technical drawings are production/coordination artifacts. The business opportunity is to add a premium client-facing visualization layer: concept mockups, approval visuals, mechanism explanations, private commission portals, progress updates, video, material studies, and marketing-ready assets.

## Technical source of truth
Use `docs/02_TECHNICAL_ANALYSIS_BAR_WINDOW.md` and the PDF in `assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf`.

Most important mechanism rule:

- There are four lower panels total.
- They operate as two sliding bifold pairs.
- The left pair is panels 1+2. It folds together and slides/parks left.
- The right pair is panels 3+4. It folds together and slides/parks right.
- Do not render four independent swing doors.
- Do not render a full room/kitchen behind the opening.
- Behind the open window is a shallow-to-moderate recessed bar/display niche.

## Design language
Use warm, high-end, atelier/lodge language:

- walnut / warm wood
- blackened steel / dark bronze
- stained or leaded diamond glass
- dim warm integrated lighting
- dark stone counter
- custom metalwork / architectural element
- private commission / white-glove experience

Avoid generic SaaS visuals, bright blue dashboards, corporate gradients, and cheap “AI tool” language.

## Asset production boundary

Client-facing visuals in this repo are premium proposal assets, not procedural placeholders. Do not create or "fix" accepted visuals with Python/PIL, canvas scripts, SVG diagrams, HTML screenshots, or deterministic board generators. Use approved source/reference assets or direct image generation such as Creative Production/imagegen for new visual candidates.

Python is acceptable for validation, local preview servers, manifests, metadata checks, format conversion, compression, or resizing/cropping of already approved assets. Keep deterministic/non-photoreal boards in `assets/visuals/rejected_or_caution/` and never wire them into `site/` pages, `assets/visuals/accepted/`, or client-send materials.

## Mobile-first requirement
The proposal is intended to be viewed on a phone. Keep the site within a mobile-first canvas. It may be readable on desktop, but do not optimize it as a wide desktop layout unless explicitly requested.

## Tone
Respectful, strategic, warm, practical. Do not insult One Off’s drawings or current workflow. Use wording like:

“Technical drawings are essential for fabrication, but they are not optimized for high-end client approval.”

## Pricing language
Use ranges and package logic, not exact guarantees. The recommended offer structure is:

- Visual Strategy Pilot: $2,500–$5,000
- Project Visualization Package: $5,000–$12,000
- Premium Private Commission Portal: $12,000–$25,000+
- Fractional Visualization Director Retainer: $6,000–$15,000+/month

These are strategic starting points, not legal/financial advice.

## Output quality checklist
Before finalizing any page, prompt, visual, or pitch copy, verify:

1. Lesly is not positioned as a commodity 3D operator.
2. The bifold/sliding mechanism is not misrepresented.
3. The recessed niche is not rendered as a full room.
4. The proposal speaks to One Off’s business, designers, and VIP clients.
5. The work is framed as client experience, approval confidence, and perceived value.
6. The language is respectful and credible.
