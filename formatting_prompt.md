# Document Formatting Prompt

## Context

You will be given a multi-module Word document (.docx) containing legal/academic content — modules, chapters, section headings, body text, lists, and case summaries. Your task is to reformat the entire document for consistent, clean presentation by applying the style specification below and removing all whitespace irregularities.

---

## Target Formatting Specification

### Page Setup
- **Paper size:** A4 (8.27" × 11.69")
- **Margins:** 1 inch on all four sides
- **Layout:** Single column, single section throughout
- **No manual page breaks** between chapters or sections unless a chapter must begin on a new page (see heading rules below)
- **No header or footer** of any kind — remove entirely from all sections

---

### Typography

| Element | Font | Size | Colour | Weight |
|---|---|---|---|---|
| Body text | Calibri | 14 pt | Black (`#000000`) | Regular |
| Heading 1 (module/chapter title) | Calibri | 20 pt | Dark blue (`#0F4761`) | Bold |
| Heading 1 (section heading) | Calibri | 20 pt | Dark blue (`#0F4761`) | Bold |
| List items | Calibri | 14 pt | Black | Regular |
| Bold emphasis within body | Calibri | 14 pt | Black | Bold |

- Use **no other fonts** anywhere in the document.
- Do **not** use italic, underline, or strikethrough unless the source material requires it for a citation or legal term.
- Line spacing: **single (1.0)** for all paragraph styles.
- No space-before or space-after on body paragraphs and list items (set both to 0 pt).
- Heading 1 only: **18 pt space-before, 4 pt space-after** — no extra blank paragraphs around headings.

---

### Paragraph Styles

Apply exactly these three paragraph styles throughout, with no custom overrides:

#### 1. `Heading1` — Module titles, chapter titles, and all section/sub-section headings
- Every heading in the document, regardless of its hierarchical level, uses **Heading 1**.
- `keepNext` and `keepLines` enabled (heading never orphaned at page bottom).
- Left-aligned; no first-line indent.
- Module/chapter titles (e.g., "Module 1 : CH : 1") and section headings (e.g., "Introduction to intellectual property rights") both use this style.

#### 2. `BodyText` — All prose paragraphs
- Based on Normal.
- Left indent: **371 DXA** (~0.26 inches) from left margin.
- No first-line indent.
- No space-after (0 pt).

#### 3. `ListParagraph` — All bulleted and numbered list items
- Used for all list items; the bullet or number is supplied by the list numbering definition, never typed manually.
- Left indent consistent with list numbering hanging indent (see Lists below).
- No space-after (0 pt).

---

### Lists

- **Bulleted lists:** Use proper BULLET list format (`•`), with a 280 DXA left indent and 280 DXA hanging indent. Never manually type `•` or `–` as a character.
- **Numbered lists:** Use DECIMAL format (`1.`, `2.`, `3.`), same indent measurements.
- Each logically distinct list restarts numbering from 1 — do not chain separate lists with the same numbering reference.
- No blank paragraphs before or after a list block.

---

### Whitespace and Blank Page Rules

This is the most important cleanup task. Apply these rules strictly across the entire document:

1. **Remove all empty/blank paragraphs.** Delete any paragraph whose text content is empty or contains only spaces, tabs, or non-breaking spaces — regardless of style.
2. **Remove double spaces between sentences.** Use single space after every full stop, colon, and comma.
3. **Remove blank paragraphs between a heading and its first body paragraph.** The first body paragraph must immediately follow its heading.
4. **Remove blank paragraphs between a body paragraph and the next heading.** Only the heading's built-in `space-before` (18 pt) should create visual separation.
5. **Remove blank paragraphs inside lists.** List items must be contiguous.
6. **Remove blank pages.** Any page that is entirely empty (consisting only of blank paragraphs or a single empty paragraph) must be deleted.
7. **Remove manual page breaks** (Ctrl+Enter) that were inserted between sections. Allow content to flow naturally.
8. **Do not add new blank lines** anywhere for visual separation — use only the heading's built-in `space-before` and `space-after` values.

---

### Module and Chapter Title Format

Each module and chapter begins with a **Heading 1** paragraph following this pattern:

```
Module [N] : CH : [N]
```

Example: `Module 1 : CH : 1`

Immediately below the module/chapter title, the **chapter subject heading** also uses Heading 1:

```
Introduction to intellectual property rights (IPR)
```

There is **no blank paragraph** between the module/chapter line and the subject heading. Both are consecutive Heading 1 paragraphs.

---

### Case Summaries Format

Case summaries appear as structured sub-sections within chapters. Format them as follows:

- **Case name and citation** — Heading 1, bold, on a single line.
  Example: `Yahoo! Inc. v. Akash Arora — 1999 (19) PTC 201 (Del)`
- **Facts / Issues / Held / Principle** — Each is a Heading 1 paragraph.
- The content under each label (Facts, Issues, Held, Principle) uses **ListParagraph** with bullet formatting if the source has bullet points, or **BodyText** if it is prose.
- No blank paragraphs between the case name, its labels, or its content blocks.

---

### What to Preserve

- All substantive text, exactly as written (correct only obvious double-spaces or stray characters).
- All bold emphasis already present within body paragraphs.
- The logical heading hierarchy as expressed through Heading 1 (do not promote any heading to Heading 2 or demote any — keep the flat single-level heading structure).
- Numbered and bulleted list content and order.
- Citation text, case names, statute names, and treaty names verbatim.

---

### What to Remove or Fix

| Issue | Action |
|---|---|
| Empty paragraphs (blank lines) | Delete entirely |
| Blank pages | Delete entirely |
| Manual page breaks between sections | Remove |
| Page numbers in footer | Remove footer entirely from all sections |
| Any header content | Remove header entirely from all sections |
| Mixed font remnants (non-Calibri) | Replace with Calibri 14 pt |
| Inconsistent heading sizes | Standardise to Heading 1 spec above |
| Unicode bullets typed as characters (`•`, `–`, `-`) | Replace with proper ListParagraph + numbering |
| Double spaces | Replace with single space |
| Extra space-before/after on body paragraphs | Set to 0 pt |
| Trailing spaces at end of paragraphs | Remove |

---

## Output Requirements

- Deliver a single `.docx` file with the above formatting applied uniformly across all modules and chapters.
- The document must open cleanly in Microsoft Word and Google Docs without any missing-font warnings.
- Validate that no blank pages remain and that every heading is immediately followed by content (no orphaned heading at the bottom of a page where the next content starts on the following page — use `keepNext` to prevent this).
- Confirm that headers and footers are completely absent — no page numbers, no document title, no decorative lines in any section's header or footer zones.
- Do not change the document's content, order, or meaning.
