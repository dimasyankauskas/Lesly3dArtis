# 04 — Private Commission Portal Product Spec

## Concept
A private digital atelier page for each high-value custom commission. The client, designer, and One Off team can use it to review visual direction, track progress, approve decisions, and leave comments on images.

## Business rationale
For a $50k–$100k+ custom commission, the client is not only buying an object. They are buying trust, anticipation, status, reassurance, and participation in the making of a one-of-a-kind piece.

A private commission portal helps:

- reduce scattered communication across texts/emails
- make the experience feel premium
- create a single visual home for approvals
- help clients follow progress
- reduce confusion about drawings and technical details
- create reusable marketing material after completion

## Minimum viable portal
- Project title and private client greeting
- Current phase / status
- Hero image
- Mood / material direction
- Technical approval notes
- View gallery
- Video updates
- Tap-to-comment image review
- Approval / request-change buttons
- Progress timeline
- Final reveal archive

## Advanced portal
- User login / private token link
- Comment pins on images
- Email/SMS notification when new update is posted
- Approval tracking
- CRM or project-management integration
- Staff dashboard
- Asset library
- Exportable PDF approval summary

## Example client journey
1. Client receives private link.
2. They see mood, design intent, and current status.
3. They review hero render and open/closed state.
4. They tap a detail and leave a comment.
5. One Off receives the comment in dashboard/email/Slack.
6. Lesly or the team updates the visual, adds a note, and notifies the client.
7. The final page becomes the commission archive and marketing story.

## Prototype behavior in `site/index.html`
The demo includes a front-end-only tap-to-comment component. In production, this would connect to a backend, CRM, email, or project-management system.
