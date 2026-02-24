---
title: Changelog
description: What's new in Actuvo.
---

## 2026-02-24 — CSV Contact Import

### Added
- **Import Contacts** tool in the sidebar under People — upload a CSV to create or update contacts in bulk
- Auto-maps Spanish and English column headers (e.g., "Nombre Completo", "Numero de Telefono")
- Full name auto-splitting: a single name column is split into first and last name automatically
- Phone number normalization: formats numbers with the correct country code for Central America and US/Canada
- Duplicate detection: finds existing contacts by email or name+phone and shows a side-by-side preview before saving
- Optional conference registration and group assignment during import
- **Church** field on contacts — tracks which church or congregation a contact belongs to
- Church is shown on the contact detail page, included in CSV exports, and carried through contact merges

### Fixed
- Contact CSV export now correctly filters by organization (previously could export across all orgs)
