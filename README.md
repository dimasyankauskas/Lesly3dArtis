# Lesly 3D Artist Website Base

Mobile-friendly static website and reusable design system for **Lesly**, a 3D Character Artist & AI-Assisted Visual Designer.

## What this repo contains

- `index.html` — full responsive one-page website / design system demo
- `styles.css` — design tokens, typography, grid, components, responsive rules
- `script.js` — mobile nav, portfolio filters, before/after slider, form validation, reveal animations
- `.nojekyll` — GitHub Pages compatibility file
- `reserch/` — strategy notes, chat history, and all generated visual assets from the project conversation

> Note: the folder is named `reserch` exactly as requested.

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages preview

After pushing this repo to GitHub:

1. Go to **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the default branch, usually `main`.
4. Select `/root`.
5. Save.

The site should become available at:

```text
https://dimasyankauskas.github.io/Lesly3dArtis/
```

## Replacing placeholders

The HTML currently uses media placeholders so the layout stays clean before real assets are finalized.

Replace placeholder blocks like this:

```html
<div class="media-placeholder image-placeholder aspect-4-3">
  <span>Project Image</span>
</div>
```

With real images:

```html
<img class="image-panel aspect-4-3" src="reserch/visuals/10-lesly-about-page.jpg" alt="Lesly artist profile presentation">
```

Or videos:

```html
<video class="image-panel aspect-16-9" controls poster="reserch/visuals/11-lesly-homepage-hero-cta.jpg">
  <source src="assets/showreel.mp4" type="video/mp4">
</video>
```

## Recommended next steps

1. Replace placeholders with Lesly's strongest real portfolio pieces.
2. Add 3 detailed project case studies.
3. Connect the contact form to Formspree, Webflow, Framer, Airtable, HubSpot, or a custom backend.
4. Update contact email and social/profile links.
5. Add a custom domain after GitHub Pages is working.
