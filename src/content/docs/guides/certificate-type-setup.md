---
title: Certificate Type Setup
description: How to create and configure certificate templates, including background design dimensions and text layout reference.
---

A **Certificate Type** is a reusable template — it defines what a certificate looks like: background image, text content, logo placement, and signatures. Once created, you can issue that certificate to any number of members.

Examples: "Founding Member Certificate," "Level 1 Trainer Completion," "2024 Conference Attendance."

---

## Create a Certificate Type

Go to **Admin → Printing → Certificate Templates → Add Certificate Type**.

### Required fields

| Field | Description |
|-------|-------------|
| **Organization** | Your organization |
| **Name** | Internal label (e.g., "Founding Member 2026") |
| **Title** | Large headline printed on the certificate |
| **Body Line** | Short line of text (e.g., "This certifies that") |
| **Signer 1 Name** | Name printed below the first signature line |
| **Signer 1 Title** | Title printed below the first signer name |
| **Background** | Upload the certificate background image |

### Optional fields

| Field | Description |
|-------|-------------|
| **Subtitle** | Printed below the title in italic — good for program name or year |
| **Org Line** | Custom org name for the certificate (e.g., "Red Discovery Life Ministries"). If blank, uses your organization's name. Useful for sub-ministries or branches. |
| **Body Continuation** | Multi-line text printed after the recipient's name. Supports dynamic tokens (see below). |
| **Award Line** | Short recognition line (e.g., "in recognition of founding membership") |
| **Logo** | Upload your org logo |
| **Logo Position** | Where to place the logo: Bottom Left, Bottom Right, Top Left, Top Right, or Hidden |
| **Signer 2** | Second signature block (name, title, and optional signature image) |

---

## Dynamic Tokens (Body Continuation)

The **Body Continuation** field supports placeholders that are automatically replaced when the certificate is generated:

| Token | What prints |
|-------|-------------|
| `{{contact_name}}` | Recipient's full name |
| `{{org_name}}` | Your organization's name |
| `{{issue_date}}` | Formatted date (e.g., "2nd day of February in the year of our Lord, 2026.") |
| `{{membership_tier}}` | Membership tier name (e.g., "Founding Member") |

Example body continuation:
```
is hereby recognized as a member of the {{membership_tier}} class
of {{org_name}}, issued on the {{issue_date}}
```

---

## Image Upload Guidelines

All images are uploaded directly in the Certificate Type admin form.

| Image | Recommended Format | Recommended Size |
|-------|--------------------|-----------------|
| Background | JPG or PNG | 3301 × 2550 px at 300 dpi |
| Logo | PNG with transparent background | 400 × 400 px max |
| Signature 1 / 2 | PNG with transparent background | 600 × 300 px max |

Upload images after saving the Certificate Type — the upload fields appear once the record exists.

---

## Designing Your Background

The certificate prints on **letter size landscape (11 × 8.5 inches)** at 300 dpi.

**Recommended background dimensions:** 3301 × 2550 px at 300 dpi.

When designing your background in Photoshop or Illustrator, leave clear space where the system will print text. The table below shows where each text element is placed, measured in **points from the bottom of the page** (1 inch = 72 points).

**Tip:** In Photoshop, change your ruler units to **Points** and add guide lines at these Y values to see exactly where each element will land.

### Text element positions

| Element | Y Position | Font | Size | Color |
|---------|-----------|------|------|-------|
| Title | 470 pt | EB Garamond SemiBold | 43 pt | Near black |
| Subtitle | 430 pt | Source Sans 3 SemiBold Italic | 16 pt | Orange |
| Recipient Name | 355 pt | Alex Brush (script) | up to 70 pt | Dark gray |
| Body Line | 313 pt | Source Sans 3 SemiBold | 14 pt | Gray |
| Org Line | 287 pt | Source Sans 3 SemiBold | 18 pt | Orange |
| Body Continuation | 267 pt (first line) | Source Sans 3 SemiBold | 14 pt | Gray |
| Award Line | 215 pt (max) | Source Sans 3 SemiBold | 14 pt | Dark gray |
| Signature Rule Line | 144 pt | — | 110 pt wide | Light gray |
| Signer Name | 125 pt | Source Sans 3 SemiBold | 11 pt | Dark gray |
| Signer Title | 110 pt | Source Sans 3 SemiBold | 10 pt | Gray |

The **orange accent color** used by the system is **#d4793a**. Match this in your background design for visual consistency.

The **recipient's name** is truncated to first word of given name + first word of family name (e.g., "Wilfredo Alexander Nuñez Mejia" → "Wilfredo Nuñez"). The font auto-sizes down from 70 pt if the name is long.

With two signers, blocks are centered at x=260 pt (left) and x=530 pt (right). With one signer, it centers on the page.

---

## Logo Placement

| Position | Coordinates (bottom-left corner of logo) |
|----------|------------------------------------------|
| Bottom Left | x=55, y=25 |
| Bottom Right | x=642, y=25 |
| Top Left | x=55, y=492 |
| Top Right | x=642, y=492 |

Logo prints at 80 × 80 points, preserving aspect ratio.

---

## Notes

- You can have multiple Certificate Types per organization — one per program, year, or tier.
- Updating a Certificate Type does not regenerate already-issued certificates. Re-issue from the Membership Certificates printing page if needed.
- The **Org Line** field is useful when your certificate represents a sub-ministry or branch that has a different display name than your main organization record.
- Background images are stored securely in Cloudflare R2. Large files may take a moment to upload.
- Accented characters (í, ñ, é, etc.) are fully supported in all text fields.
