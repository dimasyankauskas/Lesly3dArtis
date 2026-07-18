# Lesly Top-Tier Visual Rebuild Goal

## Objective

Deliver a locally verified, professional, honest-hybrid rebuild of every public visual surface in Lesly's portfolio. Preserve every project, replace weak or misleading presentation, create durable 3D-recreation direction for Lesly, and block unsupported technical proof from being presented as finished production evidence.

## Stopping Condition

This goal is complete only when:

- Every visual used by the homepage and every public case-study route has an evidence-ledger decision: `KEEP`, `REBUILD`, `REAL_CAPTURE_REQUIRED`, or `BLOCK`.
- Every public image is either approved at the quality gate or replaced/reframed; no unexplained bubbles, overlapping rectangles, empty bars, pseudo-UV layouts, or decorative technical panels remain.
- Generated media is presented only as reconstruction direction, a production target, or a build specification. Real topology, UV, rig, engine, slicer, mesh, export, and physical-print claims map to genuine evidence.
- The homepage, all case-study routes, and the contact path pass desktop, tablet, and mobile browser verification.
- The deterministic launch audit, JavaScript syntax checks, asset checks, responsive checks, and independent senior 3D review pass.
- The result is a local release candidate with a final evidence report. Public push or deployment is not part of this goal.

Items may remain `REAL_CAPTURE_REQUIRED` only when the public site does not present them as completed proof and the final report gives Lesly an exact capture/recreation checklist.

## Product Build Gate Required

Before generating public media or writing UI code, read and validate:

`docs/goals/product-build-gate-v1-local.md`

Implementation may begin only if its result remains `GO`. If it becomes `BLOCKED_PRODUCT_GATE`, stop and report the missing product experience, information architecture, UI contract, state/recovery, provenance, or verification fields.

The canonical Product Build Gate V1 file named by the goal-builder skill was not present locally. This repository-local gate is an explicit decision-equivalent fallback; do not claim the missing canonical artifact was applied.

## Starting Context

Read before changing anything:

1. `AGENTS.md`.
2. `.agents/skills/3d-production-expert/SKILL.md`.
3. `.agents/skills/lesly-website-finalizer/SKILL.md`.
4. `.agents/skills/frontend-design/SKILL.md`.
5. `.agents/skills/webapp-testing/SKILL.md`.
6. `CONTENT_STRATEGY.md`, `LAUNCH_CHECKLIST.md`, and the relevant files under `reserch/` named by `AGENTS.md`.
7. `index.html`, `case-study.html`, `styles.css`, `script.js`, and `case-study.js`.

Baseline audit facts to re-verify:

- Source references currently include approximately 99 image paths with roughly 80 effective unique public visuals after overrides and duplicates.
- Several board families reuse ornamental circles, rectangles, empty bars, and generic tiles without production meaning.
- The flagship warrior changes identity, costume construction, weapons, and proportions between related views.
- The procedural interior-props OBJ/MTL package does not visually match the rich shelf beauty images and cannot support those images as genuine mesh/UV/PBR proof.
- Mobile CSS forces wide gallery media toward a cropped 4:3 presentation.

## Scope

In scope:

- All public media referenced by the homepage and case-study system.
- Hero and work-card imagery, case-study galleries, profile/about imagery, meaningful brand-size variants, responsive crops, alt text, captions, and evidence-safe case-study wording.
- Visual bibles and reconstruction packets for the warrior project series, sculpt, avatar, mascot, outfit/accessory, print, interior-props, visualization, and workflow families.
- Responsive gallery presentation and the smallest HTML/CSS/JS changes required to show media honestly and professionally.
- A visual evidence ledger and final verification report under `docs/goals/`.

Out of scope:

- Deleting projects or rewriting them as fictional proposals.
- Modeling, sculpting, rigging, UV creation, engine integration, slicing, or physical printing without genuine source files and suitable software.
- Client/proposal work under `clients/`.
- Unrelated site redesign, framework migration, dependency installation, global configuration, cross-repository work, GitHub push, or public deployment.

## Truth And Creative Rules

- Treat every project as a real Lesly project direction, but never invent clients, shipped credits, tools, polycounts, texture sizes, metrics, source files, engine integrations, deadlines, or results.
- Do not remove projects. Preserve existing assets until replacements pass; use versioned replacements and switch references only after approval.
- Describe generated work as `3D reconstruction direction`, `production target`, or `build specification`, not as finished technical proof.
- Keep the recurring warrior cases as one transparent project series with a locked identity rather than pretending inconsistent images are separate finished models.
- Do not generate or replace Lesly's likeness without an approved portrait source. Remove accidental trademarks and fictional branded software from any promoted portrait.
- Public imagery must come from approved source art or direct image generation. Python/PIL/canvas/procedural generators may not create or repair public art; they may be used only for validation, preview, metadata, conversion, compression, and approved resizing/cropping.
- Generate clean source panels individually. Do not ask an image model to manufacture dense technical boards or tiny embedded labels. Keep explanations and labels as accessible HTML.

## Work Phases

### Phase 0: Evidence Ledger And Gate

- Re-run the public-asset inventory and hash duplicate analysis.
- Create `docs/goals/lesly-visual-evidence-ledger.md` with project, current asset, public role, provenance, claim level, decision, replacement target, reviewer state, and real-capture requirement.
- Revalidate the local Product Build Gate and record `GO` or stop.

### Phase 1: Locked Visual Systems

- Build a consistent flagship-warrior bible covering face, proportions, hair, costume layers, weapon, hands/feet, silhouette, palette, and material response.
- Create separate bibles for the sculpt character, avatar, and mascot.
- Define the exact clean source views needed for each family before generation.

### Phase 2: Flagship Character Surfaces

- Rebuild the homepage hero with dedicated desktop and mobile-safe compositions.
- Rebuild Concept to Character, Game Character, Character Staging, Original Site Concept, and Sculpt/Retopology presentation around the locked direction.
- Replace pseudo-technical evidence with production specifications and explicit future-capture requirements.

### Phase 3: Character Systems

- Rebuild avatar, mascot, outfits/accessories, and print-character media with stable identities and construction logic.
- Keep the mascot's strongest appeal and palette while correcting pose-to-pose drift.
- Require genuine rig, blendshape, UV, slicer, wall-thickness, watertightness, support, and test-print evidence before making those claims.

### Phase 4: Props, Workflow, And Portrait

- Reframe the current interior-props beauty imagery as direction until a genuinely matching 3D scene exists; remove unsupported exact mesh/PBR proof claims.
- Replace dense AI-pipeline pseudo-UI with meaningful, labeled workflow presentation.
- Prefer real, redacted project evidence for Santa Cruz and construction workflows. Generated editorial imagery may provide context but may not serve as operational proof.
- Promote a new portrait only after Lesly's likeness/source is approved.

### Phase 5: Responsive Integration

- Replace the gallery tuple format with media objects containing `src`, `alt`, `caption`, `role`, `aspect`, and `evidenceStatus` where this improves honest rendering.
- Preserve natural aspect ratios on mobile; do not force wide boards into 4:3 crops.
- Use desktop/mobile `<picture>` sources for the hero.
- Keep captions and proof language readable as HTML.
- Convert approved exports to sRGB WebP with these budgets: hero <= 400 KB desktop and <= 250 KB mobile; gallery image <= 350 KB; thumbnail <= 180 KB unless a documented quality exception is approved.

### Phase 6: Independent Verification And Revision

- Use a temporary read-only senior 3D reviewer who did not generate the asset batch.
- Each asset receives `PASS`, `REVISE`, `HOLD_FOR_REAL_CAPTURE`, or `BLOCK`.
- Re-review every revision. A score below 90/100 or any hard failure prevents promotion.

## Quality Gate

Review identity consistency, anatomy, proportions, face, hands/paws, feet, silhouette, pose, tangents, costume construction, prop scale, material separation, lighting, staging, crop, resolution, compression, accessibility, mobile presentation, trademarks, and evidence integrity.

Hard failures:

- Identity or costume drift across supposedly consistent views.
- Malformed anatomy, grip, hands, feet, paws, face, or silhouette.
- Decorative diagrams with no explained production meaning.
- Generated imagery presented as real topology, UV, rig, engine, slicer, source-file, or physical-print proof.
- A critical face, hand, foot, weapon, or label cropped from the public mobile presentation.
- Accidental trademarks, watermarks, invented client evidence, or unsupported technical claims.

## Allowed Side Effects

- Repository-scoped edits to public HTML, CSS, vanilla JavaScript, approved media, and goal/evidence documentation.
- Direct image generation and targeted image edits needed by this visual rebuild.
- Local preview servers, browser automation, screenshots, validation artifacts, compression, resizing/cropping of approved masters, and deterministic audits.
- Purposeful temporary sub-agent review.
- Local branch and local commits when they improve recovery and reviewability.

## Forbidden Side Effects

- Public push, deployment, domain, CDN, hosting, account, or production mutations.
- Credentials, purchases, plugin installation, dependency upgrades, global skills, global configuration, or Blender installation.
- Changes outside this repository, to `clients/`, or to unrelated dirty work.
- Destructive Git commands or deletion of existing project assets.
- Quietly weakening acceptance criteria to obtain a pass.

## Evidence Required

At minimum:

```bash
python3 .agents/skills/lesly-website-finalizer/scripts/audit_v2_launch.py
node --check script.js
node --check case-study.js
git diff --check
```

Also require:

- A no-missing-public-assets check.
- Full-page browser screenshots for the homepage and every case-study route at desktop, tablet, 393px, and 375px widths.
- No horizontal overflow; natural gallery aspect ratios; readable captions; visible contact path.
- Regression proof for hero head clearance after refresh and mobile menu dismissal from the Lesly brand link.
- Image dimensions, color profile, file-size budget, and compression checks.
- Targeted public-copy searches for proposal language, invented proof, and weak generic wording.
- Independent reviewer ledger with every hard failure resolved or held behind honest public wording.

## Checkpoints

Update `docs/goals/lesly-top-tier-visual-rebuild-progress.md` at the end of each phase and after any material blocker. Every user-facing status must use exactly:

- `Checkpoint`
- `Verified`
- `Remaining`
- `Blocked`
- `Next proof`

## Stop Rule

Stop and request user direction when:

- A required likeness, client-safe artifact, or genuine 3D capture is indispensable and unavailable, and no honest public presentation remains possible.
- Required edits overlap unrelated user work.
- The same asset family fails three targeted revision attempts without a new corrective hypothesis.
- Completion requires deployment, credentials, dependency/plugin/software installation, destructive action, or broader scope.
- The Product Build Gate returns `BLOCKED_PRODUCT_GATE`.

Do not stop merely because some real technical captures remain future work when the public presentation can truthfully mark them `HOLD_FOR_REAL_CAPTURE` and the rest of the goal can complete.

## Final Report

Report:

- Files and public surfaces changed.
- Final evidence classification for every asset family.
- Generated reconstruction assets versus verified captures.
- Independent review results and revision history.
- Exact static and browser checks executed.
- Performance, accessibility, and responsive results.
- Remaining real-capture checklist for Lesly.
- Residual risks and deployment-readiness status.
