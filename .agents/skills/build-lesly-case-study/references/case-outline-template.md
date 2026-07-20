# Case Contract And Outline Template

Use this internal template before media generation, public copy, or implementation. It is an internal truth record: do not publish, paraphrase, or expose its review language or field names on public surfaces.

## Contents

1. [Case contract](#case-contract)
2. [Evidence categories](#evidence-categories)
3. [Proof map](#proof-map)
4. [Media lineage record](#media-lineage-record)
5. [Frozen handoff fields](#frozen-handoff-fields)
6. [Public outline](#public-outline)
7. [Approval receipt](#approval-receipt)

## Case Contract

```text
Case ID:
Category: character-game | props-interiors | visual-direction-client-review | print-collectible

Project context: personal | client | fictional | reconstruction | unknown
Production/outcome state: in progress | delivered | shipped | paused | declined | not evidenced
Lesly's role:
Authored scope:
Inherited inputs:
Collaborators/downstream owners:
Team or solo:
Input/source:
Output:
Date/version, if evidenced:

Professional question:
Distinct recruiter/buyer value:
Strongest currently supportable claim:
Claim state:
Highest-risk unsupported claim:
Outcome statement supported by:

Source owner:
Permission/public-use boundary:
Private-only references:
Identity locks:
Distinct visual family:

Category hard blockers:
Reject criteria:
Single ranked next real capture:
```

Unknown facts remain internal and are omitted publicly. Never infer authorship, permission, production status, or outcome from polish, and never turn a missing fact into a public caveat.

## Evidence Categories

- `SOURCE_ART`: approved original or supplied art whose ownership and public-use boundary are known.
- `GENERATED_PRESENTATION_MEDIA`: image-model output that presents visual direction but does not prove a production process.
- `RECONSTRUCTION_DIRECTION`: a bounded reconstruction or proposed direction derived from approved material; not production history.
- `VERIFIED_PRODUCTION_EVIDENCE`: a matching source asset, tool capture, record, or physical result that supports the named claim.

Apply one category to each media item. A mixed board must classify each component or use the weakest truthful category for the whole board.

## Proof Map

| Slot | Professional question answered | Required evidence category | Existing or missing | Action | Forbidden implication |
|---|---|---|---|---|---|
| Hero |  |  |  | keep / capture / generate / omit |  |
| Support 1 |  |  |  | keep / capture / generate / omit |  |
| Support 2 |  |  |  | keep / capture / generate / omit |  |

Remove unused support rows. Add a row only when it proves something distinct.

## Media Lineage Record

Record one row per master and connect every public derivative to it.

| Field | Required value |
|---|---|
| Case ID | Registered ID |
| Master path | Lossless source or captured original |
| Public derivative | Optimized active path |
| Native dimensions | Width × height |
| Source asset | Approved reference or matching production source |
| Source owner | Known author, project, or provider |
| Permission | Public, private-reference-only, licensed, or unresolved |
| Date/version | When evidenced |
| Creation/capture type | Source art, direct generation, DCC capture, record, physical photo, derivative |
| Matching-asset status | Exact match, coordinated direction, or unrelated/not admissible |
| Public role | Hero, support, proof, homepage, related work |
| Evidence category | One category from this template |
| Supported claim | Exact public claim, or presentation-only |
| Forbidden implication | Claim this media must not suggest |

## Frozen Handoff Fields

Freeze and pass these fields unchanged to every specialist:

- case ID;
- professional question;
- evidence categories;
- source and permission boundary;
- identity locks;
- claim blockers;
- approved media roles.

Revise a frozen field only when new evidence or an explicit public-story decision requires it. Record the source and reason.

## Public Story Packet

This is the only packet the public writer and frontend may receive. Translate internal truth by omitting unsupported claims, never by publishing the omission reason.

1. Hero, title, positive scope label, supportable contribution, and one-line assignment.
2. Project brief and starting point using documented facts only.
3. Creative or production challenge.
4. Constraint, decision, rationale, and consequence when genuinely supported.
5. Minimum visible process or design-development sequence supported by approved media.
6. Finished presentation or supportable result in context.
7. Documented credits and one concise presentation-image credit when needed.
8. Distinct related case and contact path.

Never include evidence status, claim state, missing proof, capture requests, hypothetical instructions, lineage mechanics, rejection history, approval state, or audit commentary in this packet.

## Internal Truth Guard And Approval Receipt

Everything in this section is internal-only. It may remove or narrow a public claim; it may not be quoted or paraphrased in public copy.

Use claim states precisely:

- `PRESENTATION_SUPPORTED`: approved source or generated media visibly supports a bounded presentation/direction claim, but not production history.
- `MATCHING_EVIDENCE_VERIFIED`: a matching source asset, record, operational capture, or physical outcome verifies the exact claim.
- `HOLD_FOR_REAL_CAPTURE`: the case may remain public, but the claim needs real matching evidence.
- `OMIT`: the claim or media adds no truthful professional value.

```text
Case ID:
Public identity:
Craft/proof verdict:
Copy/truth verdict:
Frontend implementation result:
First-10-second result:
First-30-second result:
Desktop rendered result:
Mobile rendered result:
Public/private boundary result:
Claim decisions: PRESENTATION_SUPPORTED | MATCHING_EVIDENCE_VERIFIED | HOLD_FOR_REAL_CAPTURE | OMIT
Set-level differentiation result:
Single ranked next real capture:
Final state: READY_FOR_REVIEW | APPROVED
```

`APPROVED` means truthful public presentation only. Record production or outcome verification per claim.
