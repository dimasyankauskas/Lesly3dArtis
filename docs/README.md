# Lesly Portfolio Documentation

**Status:** Canonical documentation front door

**Owner:** Website maintainers

**Last updated:** 2026-07-22

Use this page to find the current operational record without treating goal reports as current release truth.

## Current website records

- [Website change history](website-change-history.md) — canonical release, deployment, verification, rollback, and pending-work ledger.
- [Launch checklist](../LAUNCH_CHECKLIST.md) — launch quality gates and media requirements.
- [Environment strategy](../ENVIRONMENT_STRATEGY.md) — environment and deployment expectations.
- [Content strategy](../CONTENT_STRATEGY.md) — public positioning and content boundaries.

## Goal and evidence records

The files under [`goals/`](goals/) are scoped plans, progress reports, and evidence ledgers. They preserve the state and conclusions of their original work. They do not override the current deployment state recorded in the website change history.

## Documentation rule

Add future public-site changes to the website change history when they are implemented, deployed, rolled back, or materially reverified. Keep these states distinct:

- **Deployed** — confirmed on a named public target.
- **Local verified** — implemented and checked in the workspace, but not confirmed public.
- **Pending** — planned or blocked work with no completion claim.
- **Rolled back** — removed from the public target, with the replacement release identified.
