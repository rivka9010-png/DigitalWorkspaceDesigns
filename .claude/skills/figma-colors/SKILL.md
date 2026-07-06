---
name: figma-colors
description: Use exact design-system colors (not approximations) when implementing any component from this project's Figma files. Triggers whenever building/editing UI from a figma.com link, or touching colors in home/** or components/**.
---

# Figma color fidelity

This project's colors come from a Figma "design system" library (fileKey
`d5lzJA4vObFG3BKTBaa0bJ`, e.g.
https://www.figma.com/design/d5lzJA4vObFG3BKTBaa0bJ/design-system?node-id=18-2&view=variables).
Component designs (e.g. the "רכיבי שולחן" file, fileKey `IaP6jGb6AgxuCQaja9mPiv`)
reference that library's tokens.

Rule: never eyeball or approximate a color. When `get_design_context` returns
CSS like `var(--blue/blue-900,#00033d)`, the value after the comma is the
resolved token value from the design-system library — use that exact hex in
Tailwind arbitrary values (e.g. `text-[#00033d]`), not a close guess. If a
color is needed but wasn't in the fetched node, use `search_design_system`
(scoped to the relevant fileKey) to find the token by name before guessing.

## Known tokens (confirmed against the design-system library)

| Token | Hex | Used for |
|---|---|---|
| blue/blue-900 | #00033d | titles, default footer text/icons |
| blue/blue-500 | #2b7fff | hover/active card border, hover accent |
| blue/blue-50 | #f0f6fd | active card background |
| gray/gray-200 | #e2e8f0 | default card border |
| gray/gray-700 | #4a5568 | subtitle, active-state footer text/icons |
| status blue (badge) | bg #eff4ff / border #c6daf6 / text #2864c8 | status pill ("מתנהל") |
| categorical/cat-5 (ארועים) | bg #f3ebfd / border #8b5cf6 / text #7c3aed | events category badge |
| feedback/amber (הודעות) | bg #fdf3e0 / border #e8c77a / text #8a6100 | messages category badge |
| feedback/green (ביקורות) | bg #e6f4ea / border #a3d9b1 / text #1b7b3a | inspections category badge |

Reference implementation: [home/Reports/FeedItem.tsx](../../../home/Reports/FeedItem.tsx).

## Process for new components

1. Fetch the node with `get_design_context` and read the `var(--token,#hex)`
   fallbacks directly from the returned code — do not retype colors from the
   screenshot by eye.
2. If a token's hex isn't visible in the fetched code, look it up with
   `search_design_system` (pass `includeLibraryKeys` scoped to the design
   system library once known) rather than approximating.
3. Add any newly confirmed token to the table above so it doesn't need
   re-deriving next time.
