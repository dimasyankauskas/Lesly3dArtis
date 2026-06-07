# Lesly Site V2 Design System

This folder is the Belleza-based staging site for the next public host pass.

## Purpose

- Ship a readable, upright, premium 3D character artist portfolio.
- Keep all V2 site files in `v2/` so image/data fill-in can happen quickly.
- Preserve the primary positioning: **Lesly — 3D Character Artist**.
- Keep AI as workflow support only, never the professional title.

## Files

| File | Role |
|---|---|
| `index.html` | V2 homepage |
| `case-study.html` | V2 reusable case-study template |
| `styles.css` | V2 Belleza design system |
| `script.js` | Theme, nav, filters, reveals, placeholder form |
| `case-study.js` | Case-study reveal behavior |
| `assets/brand/` | Local V2 brand SVG assets |
| `assets/portfolio/` | Drop portfolio renders and thumbnails here |
| `assets/process/` | Drop wireframes, UVs, texture sheets, process images here |
| `assets/profile/` | Drop Lesly portrait and profile images here |

## Typography

- Display: `Belleza`, fallback `Tahoma`, `Arial`, `sans-serif`.
- Body: `Tahoma`, fallback `Arial`, `sans-serif`.
- Mono: `JetBrains Mono`, fallback system monospace.
- Display text is upright, non-cursive, non-slanted.
- Display text uses weight `400` plus spacing, not fake-heavy bold.
- Good for: H1, H2, card titles, capability chips, case-study numbers.
- Avoid: italic, script, cursive, negative letter spacing.

## Color Tokens

Light:

- `--bg:#faf7f1`
- `--surface:#f3eee0`
- `--surface-2:#ece6d6`
- `--border:#e3dcc8`
- `--border-strong:#c9c0a8`
- `--accent:#a64b2a`
- `--accent-hover:#8a3a1f`
- `--text:#0c0c0e`
- `--muted:#5a564f`
- `--subtle:#8a857a`

Dark:

- `--bg:#0e0c0a`
- `--surface:#181513`
- `--surface-2:#221d19`
- `--border:#2a2522`
- `--border-strong:#3a332c`
- `--accent:#c4664a`
- `--accent-hover:#d97e5e`
- `--text:#f0e8d8`
- `--muted:#a89e8a`
- `--subtle:#7a7064`

## Asset Rules

- Do not use `reserch/visuals/image*.png` as portfolio content; those are design mockups, not Lesly's real character renders.
- Use real portfolio assets only: renders, turnarounds, wireframes, UVs, texture sheets, process screenshots, and a real portrait.
- Put homepage hero and thumbnails in `assets/portfolio/`.
- Put topology, UV, texture, and process evidence in `assets/process/`.
- Put portrait assets in `assets/profile/`.
- Use explicit `width` and `height` on final `<img>` tags when image dimensions are known.

## Preview

From the repo root:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/v2/
```

## Hosting

GitHub Pages can host this folder at:

```text
https://dimasyankauskas.github.io/Lesly3dArtis/v2/
```

If V2 becomes the public root, copy the V2 files to the repo root only after final image/content approval.
