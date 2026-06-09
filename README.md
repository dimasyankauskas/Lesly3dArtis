# Lesly 3D Character Artist Portfolio

Final static portfolio website for **Lesly — 3D Character Artist**.

The site is served from the repository root for GitHub Pages:

```text
https://dimasyankauskas.github.io/Lesly3dArtis/
```

## Status

The root website is the only active website version in this repository. It is browser-reviewable and visually populated with real site assets created for this portfolio build.

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
- `script.js` - theme toggle, mobile nav, filters, reveals, and copyable project-brief behavior.
- `styles.css` - final Belleza-based design system.
- `assets/` - final site assets.
- `LAUNCH_CHECKLIST.md` - launch blockers and verification requirements.
- `CONTENT_STRATEGY.md` - positioning, services, pricing, and case-study guidance.
- `ENVIRONMENT_STRATEGY.md` - character-first stage, lighting, camera, and proof standards.
- `reserch/` - strategy and reference archive. Do not rename it.

## Asset Rules

Generated assets created for this portfolio are treated as real website assets. Review each asset at the level of character design, silhouette, anatomy, material read, staging, lighting, crop, and client-facing usefulness before publishing.

Do not use `reserch/visuals/image*.png` as portfolio proof. Those files are design/mockup references.
