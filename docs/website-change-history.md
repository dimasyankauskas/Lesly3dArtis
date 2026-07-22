# Website Change History

**Document type:** Canonical website operations and release history

**Owner:** Website maintainers

**Last updated:** 2026-07-22

**Public targets:** [Custom domain](https://leslyyankauskas.com/) · [GitHub Pages](https://dimasyankauskas.github.io/Lesly3dArtis/)

This is the append-only tracking record for meaningful public-site changes. It separates source-control state, local verification, and public deployment so a local change is never mistaken for a live release. Goal-specific reports under [`docs/goals/`](goals/) remain historical evidence and do not supersede this record.

## Current release state

| Surface | Current evidence | Status |
| --- | --- | --- |
| Repository `main` and `origin/main` | Merge commit `9fc8ae1`, containing reviewed release commit `16afb6b` from pull request `#2` | Current published baseline |
| GitHub Pages | Workflow run `29902789577` deployed merged `main` on 2026-07-22 | Deployed |
| Custom-domain cloud host | Immutable release `seo-20260722-1` was activated through the validated Caddy site route on 2026-07-22 | Deployed |
| SEO foundation | Canonical, social, structured-data, robots, and sitemap changes are live on both public targets | Deployed |
| Unreleased workspace work | Concurrent progressive-image and asset changes appeared after release commit `16afb6b`; they were preserved and excluded from this release | Unreviewed; not deployed |
| Search engine ownership and indexing | Google Search Console ownership, sitemap submission, and indexing are not verified in this repository | Pending external verification |

## 2026-07-22 — SEO and release-history publication

**Status:** Deployed to GitHub Pages and the custom-domain cloud host

### Release identity

- Reviewed source commit: `16afb6b` — `Add SEO foundation and release history`.
- GitHub pull request: `#2`, merged into `main` by commit `9fc8ae1`.
- GitHub Pages workflow: run `29902789577`, completed successfully from `main`.
- Custom-domain cloud release: `seo-20260722-1`.
- Rollback: the prior custom-domain release `61112e1-cachefix1` and a timestamped Caddy site-file backup remain available.

### Verification evidence

- The allowlisted artifact contained eight root files and 42 referenced assets with no private top-level paths.
- Registry validation, launch audit, JavaScript syntax checks, and sitemap XML validation passed before publication.
- Nine representative public-file hashes matched the release package on both hosts.
- All 13 registered case routes returned `200` on both hosts.
- Four representative repository-private paths returned `404` on both hosts.
- Rendered checks on the custom domain and GitHub Pages confirmed canonical metadata, social metadata, structured data, no broken images, no console warnings or errors, and no horizontal overflow.
- The custom domain passed desktop and 390-by-844 mobile checks.
- Invalid case IDs use `noindex, follow` and canonicalize to the displayed Forge Warden fallback route.
- Caddy configuration validation and graceful reload succeeded; the previous route file was backed up before activation.

### Deployment notes

- The first Pages attempt from the release branch was rejected by the `github-pages` environment protection rule. No site job ran. Merging the reviewed pull request into allowed branch `main` resolved the release blocker without changing the artifact.
- The local ignored deployment contract was repaired to sync the allowlisted package into a new immutable release instead of copying the repository root. Route activation still uses an explicit backup, validation, and reload step.
- Concurrent local progressive-image and asset work was not part of the reviewed release and remains uncommitted.

### Remaining external gate

- Verify the property in Google Search Console, submit `sitemap.xml`, and review indexing results.

## 2026-07-21 — SEO foundation

**Status:** Local verification completed; promoted by the 2026-07-22 release above

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
- An invalid case ID produced `noindex, follow` and canonicalized to the displayed Forge Warden fallback route.

### Standards consulted

- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: Specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Control snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Google: Structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Schema.org: CreativeWork](https://schema.org/CreativeWork)

### Remaining gates at the time of this entry

- Commit, push, and deploy the reviewed SEO files. Completed by the 2026-07-22 release above.
- Verify the property in Google Search Console, submit `sitemap.xml`, and review indexing results.
- Query-parameter case routes depend on client-side JavaScript. Google documents JavaScript indexing support, but static per-case URLs would offer more reliable social-preview parsing if that becomes a priority.

## 2026-07-21 — Custom-domain parity and cache correction

**Status:** Deployed

### What changed

- Replaced the stale custom-domain release with the latest reviewed portfolio content from commit `61112e1`.
- Corrected asset query versions in `index.html` and `case-study.html` so browsers request the current CSS and JavaScript instead of retaining the older presentation.
- Pointed the validated Caddy static-site route at `/srv/leslyyankauskas.com/releases/61112e1-cachefix1`.
- Preserved the preceding release and Caddy configuration backups for rollback.

### Public verification evidence

- All 42 expected assets returned successfully.
- All 13 registered case routes loaded successfully.
- Six representative public asset hashes matched the local source files.
- Private and proposal-only paths returned `404`.
- Rendered desktop and mobile checks showed the latest case-study copy, no console errors, no broken images, and no horizontal overflow.

### Operational follow-up

- The local ignored `deploy/deploy-contract.sh` was repaired and dry-run validated during the 2026-07-22 release. It now syncs only the allowlisted package; Caddy route activation remains an explicit validated operator step.

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
