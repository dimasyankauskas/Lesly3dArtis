# Lesly Final Site Design System

This is the single active design system for the root portfolio site.

## Purpose

- Present Lesly as a senior-facing **3D Character Artist**.
- Keep the visual experience character-first, image-led, and premium.
- Use AI language only as workflow support, never as Lesly's title.
- Avoid alternate website versions, theme comparisons, or legacy design toggles.

## Files

| File | Role |
|---|---|
| `index.html` | Homepage |
| `case-study.html` | Reusable case-study template |
| `case-study.js` | Case-study data and rendering |
| `styles.css` | Final Belleza design system |
| `script.js` | Theme, nav, filters, reveals, placeholder form |
| `assets/brand/` | Brand SVG assets |
| `assets/portfolio/` | Homepage hero and work thumbnails |
| `assets/process/` | Case-study presentation boards and future proof assets |
| `assets/profile/` | Profile/process visuals |

## Typography

- Display: `Belleza`, fallback `Tahoma`, `Arial`, `sans-serif`.
- Body: `Tahoma`, fallback `Arial`, `sans-serif`.
- Mono: `JetBrains Mono`, fallback system monospace.
- Display text is upright, non-cursive, non-slanted.
- Display text uses weight `400` plus spacing, not fake-heavy bold.
- Avoid italic, script, cursive, negative letter spacing, and decorative text effects.

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

- Keep the character dominant in every hero, card, and case-study image.
- Use simple studio staging, grounded shadows, readable silhouette, and restrained context props.
- Do not use `reserch/visuals/image*.png` as portfolio content.
- Do not present generated visuals as Lesly's real client or production work.
- Real production proof belongs in `assets/process/[project-slug]/` with source/fact approval recorded in `ASSET_INTAKE.md`.

## Preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/
```
