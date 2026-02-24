---
title: Import Contacts
description: How to import contacts from a CSV file into Actuvo, with column mapping, duplicate detection, and optional conference or group assignment.
---

Import Contacts lets you upload a CSV file to create or update contacts in bulk. It handles column mapping, phone number normalization, and automatically detects duplicates already in your system.

You'll find it in the sidebar under **People > Import Contacts**.

## Preparing Your CSV

Export your data as a **CSV file** (comma-separated values). If you're using Google Sheets, go to **File > Download > Comma-separated values (.csv)**.

:::tip
Excel files (.xlsx) are not supported. Always export to CSV first.
:::

Your CSV needs a **header row** as the first line. Column names can be in English or Spanish — the importer will auto-detect common headers like "Nombre Completo", "Numero de Telefono", or "Iglesia".

There is no required column order. You'll map each column in the next step.

## Step 1: Configure and Upload

1. Open **People > Import Contacts** from the sidebar
2. Select the **Default Country Code** for phone numbers (defaults to +504 Honduras)
3. Optionally select a **Conference** to register all imported contacts for
4. Optionally select one or more **Groups** to add contacts to, or type a new group name to create one
5. Click **Choose CSV file** and select your file

After selecting the file, a **column mapping table** appears showing each CSV column with a sample value. The importer auto-maps columns it recognizes. Review the mappings and adjust any that need correction.

### Available field mappings

| Field | What it does |
|-------|-------------|
| Full Name | Automatically splits into first name and last name (first word = first name, rest = last name) |
| First Name | Maps directly to the contact's given name |
| Last Name | Maps directly to the contact's family name |
| Email | Contact email address |
| WhatsApp Number | Phone number — automatically normalized with country code |
| City | City of residence |
| Country | Country (defaults to Honduras if not mapped) |
| Church | Church or congregation name |
| Ministry Position | Role or title in ministry |
| Photo URL | Link to a profile photo |
| Skip | Ignores the column |

:::note
Use **Full Name** when your CSV has a single name column. The importer splits it automatically — "Maria Elena Lopez Diaz" becomes first name "Maria" and last name "Elena Lopez Diaz". Single-word names are flagged for your review.
:::

### Phone number normalization

Phone numbers are automatically cleaned up:

- Formatting characters (spaces, hyphens, parentheses) are removed
- For Central American numbers: the last 8 digits are kept and the country code is prepended
- For US/Canada (+1): the last 10 digits are kept
- Numbers that already start with **+** are left as-is

For example, with country code +504: `9354-4924` becomes `+50493544924`.

## Step 2: Preview

Click **Preview Import** to see what will happen before any data is saved.

The preview shows a summary bar and a table of every row with its status:

| Badge | Meaning | Default action |
|-------|---------|---------------|
| **New** | No matching contact found — will be created | Create |
| **Match** | Strong duplicate found (same email, or same name + WhatsApp) | Update |
| **Possible Match** | Weak duplicate found (same name only, no other confirmation) | Skip |
| **Error** | Something is wrong with this row (e.g., missing required data) | Skip |

### How duplicates work

For rows that match an existing contact:

- **Update** fills in blank fields on the existing contact. It never overwrites data that's already there.
- **Skip** leaves the existing contact unchanged.

You can change the action for any row using the dropdown in the Action column.

For matched rows, the preview shows a field-by-field comparison:

- **Green** fields will be filled in (the existing contact has this field blank)
- **Yellow** fields differ between the CSV and the existing contact (the existing value is kept)
- Fields that match exactly are shown in gray

## Step 3: Import

Click **Import Contacts** to save. The results screen shows:

- How many contacts were **created**, **updated**, and **skipped**
- How many **conference registrations** were added
- How many **group memberships** were added
- Any errors, with the row number and error message

Each row is saved independently — if one row fails, the others still succeed.

Click **Import Another File** to start over, or **View Contacts** to see your contacts list.

## Tips

- **Maximum file size:** 5 MB
- **Maximum rows:** 1,000 per import
- **Re-importing the same file** is safe — duplicates are detected and default to Skip
- **Groups** can be selected or created during import. New groups are created automatically when you type a name
- The importer works across conferences — you can import a general contact list and optionally register them for an event at the same time
