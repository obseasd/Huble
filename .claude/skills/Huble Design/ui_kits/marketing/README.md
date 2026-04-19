# Huble Marketing — UI Kit

A pixel-close recreation of the Huble marketing site, built from the `obseasd/Huble` codebase. Vanilla React with Babel standalone, split into small JSX components. The `index.html` stitches them together into a scrolling single-page showcase.

## Components

| File | Purpose |
|---|---|
| `Nav.jsx` | Fixed top nav that blurs on scroll. Huble logo + link pills + primary CTA. Mobile hamburger. |
| `Hero.jsx` | Full-viewport hero with animated mint blobs, floating glass shapes, dual CTAs, scroll chevron. |
| `Services.jsx` | Three-card grid: sites, social, automatisations. Glass cards with mint top-line on hover. |
| `Process.jsx` | Four numbered glass tiles with mint gradient number chips. |
| `About.jsx` | Two-col block: copy + 3 value cards on left, blurred mint blob with orbiting glass cards on right. |
| `FAQ.jsx` | Accordion — first item open by default. |
| `Contact.jsx` | Section label + invite text on left, glass form on right. |
| `Footer.jsx` | Mint gradient footer with three columns and copyright. |
| `Icon.jsx` | Small helper — renders named Feather-style icons inline. |

## Usage

Open `index.html` in a browser. Scroll through the page to see every component in context. Components expose sensible props for reuse but default values match the live site copy.

## Fidelity notes

- Colors, radii, spacing, and shadow tokens come from the shared `../../colors_and_type.css`.
- Hover states match the codebase: `translateY(-3px)` on buttons, `translateY(-10px)` on service cards, mint-tinted shadow bloom.
- Icons are inline SVG, stroke-width 1.8, round caps/joins — extracted from the source HTML.
- The orbit in the About section uses a slow CSS rotation to approximate the JS-driven 0.12°/frame orbit.
- The custom right-side draggable mint scrollbar is intentionally omitted from the kit (kept in `reference/js/scrollbar.js` for reference).

## Screens represented

A single page representing the whole marketing site. Clicking `Services` / `Notre approche` / `À propos` / `FAQ` / `Contact` smooth-scrolls between sections. Sub-interactions: hovering cards lifts them with mint shadow bloom; FAQ items expand; form inputs reveal mint focus rings.
