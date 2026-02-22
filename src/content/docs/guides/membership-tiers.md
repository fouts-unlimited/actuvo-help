---
title: Membership Tier Setup
description: How to create and configure membership tiers for your organization.
---

Membership tiers define the levels within your network — training certifications, leadership roles, participation categories, or any other grouping that makes sense for your ministry.

Each org defines its own tiers. Examples: "Founding Member," "Level 1 Trainer," "Field Leader," "Youth Coordinator."

## Create a Membership Tier

1. Go to **Admin → Membership → Membership Levels**
2. Click **Add Membership Level**
3. Fill in:
   - **Name** — the tier name shown to staff (e.g., "Founding Member")
   - **Organization** — select your org
   - **Access Rank** — a number used for ordering tiers (1 = lowest, higher = more senior). Used for future content gating.
   - **Annual Dues** — the annual fee for this tier (optional — leave blank for roles that don't pay dues)
   - **Grace Period Days** — how many days past the renewal date a member retains full access before lapsing (default: 30)

4. Click **Save**

## Edit or Deactivate a Tier

To rename or adjust a tier, click its name in the list and update the fields.

To stop enrolling new members in a tier, you can add a note in the name (e.g., "Level 1 — Archived") — there is no formal deactivation flag yet.

## Notes

- Tiers belong to your organization — other orgs cannot see yours.
- You can have as many tiers as needed.
- `Access Rank` is a simple integer — higher numbers mean more senior. There's no enforced hierarchy; it's for your reference and for future gating features.
- Dues are informational — Actuvo does not process tier dues via Stripe (as of this release). Record payments manually in Membership → Payments.
