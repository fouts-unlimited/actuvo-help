---
title: Changelog
description: What's new in Actuvo.
---

## [2026-02-22] — Membership Certificates

### Added
- Membership certificate printing at `/admin/printing/membership-certificates/`
- Filter members by membership tier and set issue date before printing
- Inline-editable issue date per row
- Bulk "Set Issue Date for Selected" action

### Added
- Certificates app with `CertificateType` and `IssuedCertificate` models
- Certificate types support custom background image, signature image, and logo position
- Unique constraint per contact per certificate type — reprint updates the record, no duplicates

## [2026-02-22] — Membership App

### Added
- Membership app with full state machine: pending → active → grace → lapsed / cancelled
- Membership tiers (org-defined, flexible names) with `access_rank` for future content gating
- Membership payments — offline-capable (cash, bank transfer, etc.)
- `member_since` field set once at first activation, never overwritten
- Grace period: members retain full access while payment catches up (default 30 days)
- Status history log for every state transition
