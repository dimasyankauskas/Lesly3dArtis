# Website Change History

**Document type:** Canonical website operations and release history

**Owner:** Website maintainers

**Last updated:** 2026-07-21

**Public targets:** [Custom domain](https://leslyyankauskas.com/) · [GitHub Pages](https://dimasyankauskas.github.io/Lesly3dArtis/)

This is the append-only tracking record for meaningful public-site changes. It separates source-control state, local verification, and public deployment so a local change is never mistaken for a live release. Goal-specific reports under [`docs/goals/`](goals/) remain historical evidence and do not supersede this record.

## Current release state

| Surface | Current evidence | Status |
| --- | --- | --- |
| Repository `main` and `origin/main` | Commit `61112e1` (`Rebuild portfolio case studies and harden Pages deploy`) | Current committed baseline |
| GitHub Pages | Content from commit `61112e1` was confirmed public on 2026-07-21 | Deployed |
| Custom-domain cloud host | Release directory `/srv/leslyyankauskas.com/releases/61112e1-cachefix1` was activated on 2026-07-21 | Deployed |
| Cache-version correction | Updated HTML asset query versions are live on the custom-domain host but remain part of the local, uncommitted worktree | Deployed, not committed |
| SEO foundation | Implemented and verified locally in the files listed below | Local verified; not deployed |
| Search engine ownership and indexing | Google Search Console ownership, sitemap submission, and indexing are not verified in this repository | Pending external verification |

## 2026-07-21 — SEO foundation

**Status:** Local verified; not committed, pushed, or deployed

### What changed

- Added page-level robots directives, canonical URLs, Open Graph metadata, and Twitter card metadata.
- Added `WebSite` and `Person` structured data to the homepage.
- Added case-specific titles, descriptions, canonical URLs, social metadata, and `CreativeWork` structured data for all 13 registered case studies.
- Added `noindex, follow` handling for invalid case IDs.
- Added `robots.txt` and `sitemap.xml`; the sitemap contains the homepage and all 13 registered case URLs.
- Included the two SEO files in public packaging and expanded deterministic validation to require them.

### Files changed

- `index.html`
- `case-study.html`
- `case-study.js`
- `robots.txt`
- `sitemap.xml`
- `scripts/package_public_site.py`
- `scripts/validate_skill_portfolio.py`

### Verification evidence

- JavaScript syntax checks passed.
- XML validation passed for `sitemap.xml`.
- The portfolio registry validator and website finalizer audit passed.
- The packaged public root contained eight approved root files and 42 referenced assets, with no private proposal material.
- Local rendered checks confirmed homepage metadata and structured data.
- All 13 case routes produced unique titles, descriptions, canonical URLs, and `CreativeWork` data; image loading and horizontal overflow checks passed.
- An invalid case ID produced the homepage canonical fallback and `noindex, follow`.

### Standards consulted

- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: Specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Control snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Google: Structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Schema.org: CreativeWork](https://schema.org/CreativeWork)

### Remaining gates

- Commit and push the reviewed SEO files.
- Deploy the SEO release to both public targets and repeat live metadata, route, asset, and private-boundary checks.
- Verify the property in Google Search Console, submit `sitemap.xml`, and review indexing results.
- Query-parameter case routes depend on client-side JavaScript. Google documents JavaScript indexing support, but static per-case URLs would offer more reliable social-preview parsing if that becomes a priority.

## 2026-07-21 — Custom-domain parity and cache correction

**Status:** Deployed

### What changed

- Replaced the stale custom-domain release with the latest reviewed portfolio content from commit `61112e1`.
- Corrected asset query versions in `index.html` and `case-study.html` so browsers request the current CSS and JavaScript instead of retaining the older presentation.
- Activated `/srv/leslyyankauskas.com/releases/61112e1-cachefix1` through the Caddy release symlink.
- Preserved the preceding release and Caddy configuration backups for rollback.

### Public verification evidence

- All 42 expected assets returned successfully.
- All 13 registered case routes loaded successfully.
- Six representative public asset hashes matched the local source files.
- Private and proposal-only paths returned `404`.
- Rendered desktop and mobile checks showed the latest case-study copy, no console errors, no broken images, and no horizontal overflow.

### Known operational debt

- `deploy/deploy-contract.sh` does not yet describe the current custom-domain release procedure accurately. Repair and validate that contract before relying on it for the next deployment.

## 2026-07-21 — Portfolio case-study rebuild

**Status:** Committed and deployed

- Commit: `61112e1` — `Rebuild portfolio case studies and harden Pages deploy`.
- Rebuilt the registered portfolio case studies with evidence-bounded copy and distinct supporting media.
- Hardened the GitHub Pages deployment contract and retained `.nojekyll`.
- GitHub Pages was confirmed at the commit before the custom-domain parity deployment above.

## Entry template

Add new entries above older entries and include:

1. Date and concise change name.
2. One explicit status: **Deployed**, **Local verified**, **Pending**, or **Rolled back**.
3. Public target, commit/release identity, and whether the worktree differs from it.
4. Changed behavior and files, without copying implementation noise.
5. Verification evidence, including rendered or live proof when applicable.
6. Rollback identity for production changes.
7. Remaining gates, known limitations, or external checks.

Do not mark an entry deployed from static validation alone.
