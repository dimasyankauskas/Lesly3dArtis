# Lesly 3D Character Artist Portfolio

Final static portfolio website for **Lesly — 3D Character Artist**.

The site is served from the repository root for GitHub Pages:

```text
https://dimasyankauskas.github.io/Lesly3dArtis/
```

## Status

The root website is the only active website version in this repository. It is browser-reviewable and visually populated with original generated concept assets created for this site.

It is not final public launch until the remaining launch blockers in `LAUNCH_CHECKLIST.md` are resolved, especially the contact destination and any approved public profile links.

## Local Preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8000/
http://127.0.0.1:8000/case-study.html
```

## File Map

- `index.html` - homepage.
- `case-study.html` - reusable case-study template.
- `case-study.js` - case-study data and rendering.
- `script.js` - theme toggle, mobile nav, filters, reveals, and form placeholder behavior.
- `styles.css` - final Belleza-based design system.
- `assets/` - final site assets.
- `ASSET_INTAKE.md` - source, approval, and fact tracking.
- `LAUNCH_CHECKLIST.md` - launch blockers and verification requirements.
- `CONTENT_STRATEGY.md` - positioning, services, pricing, and case-study guidance.
- `ENVIRONMENT_STRATEGY.md` - character-first stage, lighting, camera, and proof standards.
- `reserch/` - strategy and reference archive. Do not rename it.

## Asset Rules

Generated concept visuals must stay labeled as generated/site-created visuals. Do not claim them as client work, shipped work, source 3D files, topology, UVs, texture proof, engine integration, or handoff evidence.

Do not use `reserch/visuals/image*.png` as portfolio proof. Those files are design/mockup references.
