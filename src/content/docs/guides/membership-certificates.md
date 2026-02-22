---
title: Membership Certificates
description: How to issue and print certificates for your members.
---

The membership certificate printing page lets you issue certificates to members, set issue dates, and print in bulk.

**Location:** Admin → Printing → Membership Certificates (`/admin/printing/membership-certificates/`)

## Before You Start

You need at least one **Certificate Type** configured before you can issue certificates. See [Certificate Type Setup](/guides/certificate-type-setup/).

## Issue Certificates to Members

1. Navigate to **Admin → Printing → Membership Certificates**
2. At the top of the page, set:
   - **Certificate Type** — select which certificate template to use
   - **Membership Tier** — filter the member list by tier (optional — leave blank to see all active members)
   - **Issue Date** — the date that will be printed on new certificates (defaults to today)
3. The table shows contacts who match your filters
4. Check the contacts you want to issue certificates to
5. Click **Issue & Print Selected** to generate PDFs

## Change the Issue Date for Existing Records

If you need to backdate a certificate (e.g., honoring a founding date):

- **Per row:** Click the issue date directly in the table row and edit it inline
- **Bulk:** Check multiple rows, then use the **Set Issue Date for Selected** action from the actions dropdown

The issue date on an existing record only changes when you explicitly edit it — the system never overwrites it automatically.

## Reprint a Certificate

If a certificate has already been issued, reprinting it shows the existing issue date (not today). To reprint with a new date, update the issue date first, then reprint.

## Notes

- The certificate list is filtered to active members (and those in grace period) by default.
- Each contact can have at most one issued certificate per certificate type. Issuing again updates the record — it does not create a duplicate.
- PDFs are generated server-side and download directly. There is no stored PDF — each print generates fresh from the current template and issue date.
