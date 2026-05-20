# Interface Design — portpolio

This document describes the current design decisions for the Next.js application (App Router), so the portfolio remains consistent in typography, color, layout, and dark mode behavior as it grows.

## Document Location

This file is stored in the **repository root** (`DESIGN.md`, alongside `package.json` and `README.md`).

**Reason:** it is easy for contributors to find, aligns with common open-source repository conventions, and is easy for tools/agents to discover when design context is needed.

**Alternative:** if documentation grows significantly (ADR, deployment guides, etc.), it can move to `docs/DESIGN.md` with a pointer from `README.md`. For now, the root location is sufficient for the project size.

---

## Experience Goals

- Keep the interface **minimal** and content-focused (personal portfolio).
- Ensure strong readability on both mobile and desktop with flexible layout and constrained content width when needed.
- Use **two themes only — black and white**: no gray palette, zinc tones, color opacity overlays, or hex values outside `#ffffff` / `#000000` for system text/background.
- Support **dark mode** through system preference (`prefers-color-scheme: dark`) by swapping text/background (black <-> white). A manual toggle can be added later (for example with `next-themes`).

---

## UI Stack

| Component | Role |
|----------|------|
| Next.js 16 | App Router and optimized font loading via `next/font` |
| React 19 | UI component model |
| Tailwind CSS v4 | Utility-first styling with `@import "tailwindcss"` and `@theme inline` in `app/globals.css` |
| Geist / Geist Mono | Fonts from `next/font/google` |

---

## Typography

- **Sans (default):** Geist via CSS variable `--font-geist-sans`, mapped in `@theme` to `--font-sans`; `layout` applies `font-sans` on `<html>` with `antialiased`.
- **Mono:** Geist Mono via `--font-geist-mono`, used for code and technical labels.
- **Body:** `font-family` uses `var(--font-sans)` (Geist) with system fallback stack.

**Current scale (sample page):**

- Main heading: around `text-3xl`, `font-semibold`, `tracking-tight`, `text-foreground`.
- Description paragraph: `text-lg`, also `text-foreground` (no gray hierarchy; black/white only by theme). Inline links use `underline` for distinction without extra color.

---

## Color and Tokens (Black / White Only)

### CSS Variables (`:root`)

| Token | Light (`:root`) | Dark (`prefers-color-scheme: dark`) |
|-------|------------------|-------------------------------------|
| `--background` | `#ffffff` | `#000000` |
| `--foreground` | `#000000` | `#ffffff` |

- In `@theme inline`, map these into `--color-background` and `--color-foreground` for Tailwind utilities such as `bg-background`, `text-foreground`, `bg-foreground`, and `text-background`.

### Conventions in `page.tsx`

- Full page uses `bg-background text-foreground`.
- **Filled CTA:** `bg-foreground text-background`, with `border-2 border-foreground`; hover swaps colors (`hover:bg-background hover:text-foreground`) without intermediate tones.
- **Outline CTA:** `border-2 border-foreground bg-background text-foreground`; hover swaps to `hover:bg-foreground hover:text-background`.
- SVG logo uses conditional `filter: invert` (`dark:invert` for dark backgrounds; deploy button uses `invert dark:invert-0` to match black/white button backgrounds).

**Principle:** all UI "color" comes from those two values. Hierarchy is created with typography (weight/size), underline, and 2px borders, not extra grayscale levels.

---

## Layout and Spacing

- **Root:** `<body className="min-h-full flex flex-col">` for full-height column layout, compatible with future header/footer expansion.
- **Current homepage:** `flex flex-col flex-1`; `main` uses `max-w-3xl`, `py-32`, `px-16`, centered on mobile (`items-center`, `text-center`) and left-aligned from `sm:` onward.
- **Timeline alignment:** all time markers (for example `period` in education/experience entries) should be placed in the right column and right-aligned for consistent scanability.

**Principle:** use generous vertical spacing for a minimal landing feel, and keep `max-w-*` constraints for readable line length (~65-75 characters).

---

## Components and Patterns

- **Images:** `next/image` with `priority` for above-the-fold logo; `dark:invert` for light SVG assets on dark backgrounds.
- **Links:** `font-medium` and high-contrast styling; external links include `rel="noopener noreferrer"` and `target="_blank"`.
- **Pill buttons:** `rounded-full`, fixed height (`h-12`), full width on mobile and fixed `md:w-[158px]` on larger screens.

---

## Accessibility Guidance

- Keep `<html lang>` aligned with actual content language (`en` currently; update if site language changes).
- Every `Image` should have concise descriptive `alt` text.
- Maintain WCAG contrast compliance for text/background when introducing new colors or overlays.
- For interactive components, use consistent Tailwind `focus-visible:outline` / ring patterns.

---

## Portfolio Extension Directions

1. **Pages / sections:** About, Projects, Contact while reusing `max-w-*` and Tailwind spacing scale.
2. **Theme:** if persistent light/dark preference is needed, consider `next-themes` with `dark` class on `html` instead of only `prefers-color-scheme`.
3. **Design tokens:** centralize color/spacing in `@theme` to reduce JSX magic values.
4. **Motion:** keep transitions subtle; if View Transition API is adopted, add a dedicated section to this document.

---

## Related Files

| File | Design-related responsibility |
|------|-------------------------------|
| `app/layout.tsx` | Fonts, metadata, and `html`/`body` shell |
| `app/globals.css` | Tailwind v4 setup, `@theme`, color variables |
| `app/page.tsx` | Current page layout and visual styles |

Update `DESIGN.md` whenever major design-system decisions change (fonts, color tokens, component conventions).
