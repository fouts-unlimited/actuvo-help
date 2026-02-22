---
title: Certificate Type Setup
description: How to create and configure certificate templates for your organization.
---

A **Certificate Type** is a template — it defines what a certificate looks like (background, fonts, logo placement, signature). Once created, you can issue that certificate to any number of members.

Examples: "Founding Member Certificate," "Level 1 Trainer Completion," "2024 Conference Attendance."

## Create a Certificate Type

1. Go to **Admin → Certificates → Certificate Types**
2. Click **Add Certificate Type**
3. Fill in:
   - **Name** — internal label (e.g., "Founding Member 2026")
   - **Organization** — select your org
   - **Title Line** — the text printed as the certificate title (e.g., "Certificate of Membership")
   - **Body Text** — the body paragraph on the certificate. Use `{name}` as a placeholder for the recipient's name.
   - **Background Image** — upload a high-resolution PNG or JPG (recommended: 2550×3300 px for letter portrait)
   - **Signature Image** — upload a PNG of the signature (transparent background recommended)
   - **Logo Position** — where to place the org logo on the certificate: Bottom Left, Bottom Right, Top Left, Top Right, or Hidden

4. Click **Save**

## Preview Before Issuing

After saving, return to the Certificate Types list. You can issue a test certificate by going to the membership certificate printing page and selecting this type.

## Notes

- Background images are stored in Cloudflare R2. Large files upload fine but may take a moment.
- The `{name}` placeholder in Body Text is replaced with the contact's full name at print time.
- Logo is pulled from your organization's logo on file. If no logo is set, the logo is omitted regardless of the Logo Position setting.
- You can have multiple certificate types per org — one for each program, year, or tier.
- Updating a certificate type does not re-generate already-issued certificates. Re-issue from the printing page if needed.
