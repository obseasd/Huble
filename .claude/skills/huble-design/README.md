# Huble Design System

Huble is a French web agency that simplifies the digital world for small businesses, freelances, startups, and SMBs. Tagline: **"On simplifie. Vous brillez."** (We simplify. You shine.)

Huble offers three core services:
1. **Création & amélioration de sites web** — custom websites, e-commerce, landing pages
2. **Identité réseaux sociaux** — social brand identity, templates, editorial strategy
3. **Automatisations & IA** — process audits, chatbots, workflows, integrations

The visual language is **modern glassmorphism in a warm mint palette** — frosted-glass cards, blurred mint blobs floating in the background, floating glass shapes, soft shadows, pill-shaped buttons with mint gradients, and `Space Grotesk + Inter` as the type pairing.

## Sources

- **Marketing site codebase**: GitHub `obseasd/Huble@main` — vanilla HTML/CSS/JS, GSAP + ScrollTrigger animations, Formspree contact form, custom draggable scrollbar. Imported to `reference/`.
- **Brand assets provided by user**: `uploads/huble.png`, `uploads/logo-huble.svg`, `uploads/favicon.svg` — copied to `assets/`.
- The site deployed to Vercel; analytics/speed-insights scripts are injected at the server edge.
- Additional user-supplied notes on tone, palette, radius scale, and animation system (condensed into `README.md` and `colors_and_type.css`).

## Index

```
colors_and_type.css   Root design tokens — colors, mint scale, glass, type, radius, shadows, gradients
README.md             This file — brand context, content fundamentals, visual foundations, iconography
SKILL.md              Agent-Skills manifest (cross-compatible)
assets/               Logos, favicon, brand imagery
preview/              Design System tab cards — small, focused specimens
ui_kits/
  marketing/          Huble marketing site — recreation with JSX components and an interactive index
reference/            Full imported source from obseasd/Huble for inspection
```

---

## Content Fundamentals

Huble writes in **French only**. The voice is young, warm, dynamic, direct, and deeply informal without being slangy — the kind of agency copy that sounds like a real person who knows their craft.

### Voice rules

- **"On" instead of "nous"** — the hallmark of the brand. *"On échange pour comprendre…"*, *"On simplifie. Vous brillez."*, *"On conçoit et développe votre projet."* Never *"nous"*.
- **"Vous" when addressing the client** — formal "you", but used in a friendly, non-corporate way. *"Un café virtuel ? On est là pour discuter de vos idées."*
- **No jargon, no filler** — claim from the About section: *"Pas de jargon, pas de superflu — juste des résultats."* Copy should feel like it earned every word.
- **Short, punchy headlines.** Sometimes two sentences. *"On simplifie. Vous brillez."* *"Parlons de votre projet."* *"Une équipe passionnée par le digital."*
- **Warm, concrete benefits over features.** *"Plus de productivité, moins de friction."* *"Vous gagnez du temps et vous vous concentrez sur ce qui compte vraiment."*
- **Bold for emphasis** inside paragraphs — used sparingly to anchor key phrases: *"<strong>Pas de jargon, pas de superflu</strong>"*, *"<strong>simplifier la vie</strong>"*.

### Casing

- **Sentence case** for headlines and subtitles. Never Title Case.
- **UPPERCASE labels** (section eyebrows) with letter-spacing — e.g. `CE QU'ON FAIT`, `QUI SOMMES-NOUS`, `FAQ`.
- Buttons: sentence case — *"Découvrir nos services"*, *"Nous contacter"*, *"Envoyer le message"*.

### Punctuation quirks (French typography)

- French spacing before `?` `!` `:` `;` — e.g. *"Vous travaillez avec des entreprises de quelle taille ?"*
- **Em-dashes** used liberally for emphasis: *"Des solutions digitales complètes — pour propulser votre entreprise."*
- Ellipses `…` for implied continuation: *"TPE, PME, freelances, startups…"*

### Emoji usage

**None.** The site contains zero emoji. All visual accents come from custom SVG icons, mint color, and glass shapes. Do not introduce emoji when writing copy or building screens for Huble.

### Sample copy

| Context | Line |
|---|---|
| Hero | *"On simplifie. Vous brillez."* |
| Service card (sites) | *"Sites vitrines, e-commerce ou sur-mesure. On crée des expériences web performantes, esthétiques et pensées pour convertir vos visiteurs en clients."* |
| Service card (IA) | *"On audite vos processus pour identifier les tâches répétitives et mettre en place des automatisations intelligentes. Plus de productivité, moins de friction."* |
| Process step | *"Découverte — On échange pour comprendre votre entreprise, vos objectifs et vos besoins spécifiques."* |
| FAQ answer | *"Chaque projet est unique. On propose un devis gratuit et personnalisé après un premier échange. Pas de surprise, tout est transparent dès le départ."* |
| Contact invite | *"Un café virtuel ? On est là pour discuter de vos idées et trouver la solution qui vous correspond."* |

---

## Visual Foundations

### Palette

The palette is **almost monochromatic on mint green**, with pure neutrals as the only other hue. The mint carries all emotion — calm, fresh, natural, tech-forward.

- **`--mint #A2DBB6`** — primary. Used for CTAs, logo background, gradient base, decorative blobs, selection color, focus rings.
- **`--mint-light #C8ECDA`** — hover tints, badges, inner gradient of service icons.
- **`--mint-lighter #E5F5EC`** — wash backgrounds for section transitions.
- **`--mint-dark #7BC99A`** — gradient terminators, pressed states.
- **`--mint-darker #5AB87E`** — eyebrow text color, checkmark icon strokes, accent text on mint.
- **Neutrals**: `--black #1A1A1A` (primary text), `--dark #2D2D2D` (secondary), `--gray #6B7280` (body copy), `--white #FFFFFF`.
- **Only semantic color**: `--danger #E74C3C` for form errors.

No blues, no purples, no warm tones. Do not introduce them.

### Typography

- **Headings**: **Space Grotesk** — geometric, modern, slightly quirky. Weights 600 / 700. Negative tracking on display sizes (`-0.03em` for hero, `-0.02em` for h2). Used also for navigation, buttons, labels, and form field labels.
- **Body**: **Inter** — weights 300 / 400 / 500. Line-height 1.6–1.75. Body color is `--gray`, not black, giving the page a softer, airier feel.
- **Eyebrow labels**: Space Grotesk 600, uppercase, `letter-spacing: 0.1em`, color `--mint-darker`, preceded by an 8px mint dot.

### Backgrounds

Layered, never flat. The page is built of four overlapping layers:

1. **Base gradient wash** — a diagonal or vertical sweep between `--white` and `--mint-lighter`. Every major section has one.
2. **Huge blurred blobs** (500–600 px, `filter: blur(80px)`) in `--mint`, `--mint-light`, `--mint-dark` — positioned off-edge, floating slowly with 12–18s keyframe loops.
3. **Floating glass shapes** — 45–120 px rounded rectangles or circles, `rgba(255,255,255,0.15)` with `backdrop-filter: blur(8px)` and a faint white border. Drift vertically, rotate slightly.
4. **Content in glass cards** sitting on top.

No full-bleed photography. No repeating patterns or textures. No hand-drawn illustrations. The mood is generated entirely by gradient + blur + transparency.

### Cards (the signature pattern)

```
background:        rgba(255,255,255,0.75)
backdrop-filter:   blur(20px)
border:            1px solid rgba(255,255,255,0.5)
border-radius:     32px   (--radius-xl)
box-shadow:        0 4px 24px rgba(0,0,0,0.04)
padding:           2.5rem 2rem
```

**Hover state** (critical — this is the whole personality):

```
transform:         translateY(-10px)
box-shadow:        0 20px 50px rgba(162,219,182,0.2),
                   0 8px 20px rgba(0,0,0,0.04)
border-color:      var(--mint-light)
transition:        0.4s cubic-bezier(0.16, 1, 0.3, 1)
```

A hover-revealed 3px mint gradient line appears on the top edge of service cards (opacity 0 → 1).

### Buttons

- **Primary** — pill (`border-radius: 9999px`), `linear-gradient(135deg, mint 0%, mint-dark 100%)`, black text, mint glow shadow. Hover: `translateY(-3px)` + stronger shadow.
- **Secondary** — transparent with glass blur, 1.5px semi-black border, black text. Hover: fills to black background, white text. Same Y-lift.
- **Focus-visible** — a pulsing mint glow animation + 2px dashed mint-dark outline at 2px offset.

### Animation & easing

- **Easing of choice**: `cubic-bezier(0.16, 1, 0.3, 1)` — "smooth-stop" ease-out. Used for card hovers, scroll-triggered entrances, dropdowns.
- **Card hovers** — always a Y-translate lift (3–10 px) plus shadow; never scale.
- **Blobs** — 12–18s loops, translate + subtle scale, `ease-in-out infinite`.
- **Glass shapes** — 6–10s loops, vertical drift + slight rotation.
- **Scroll reveals** — GSAP ScrollTrigger; fades and y-20 → y-0 on entrance.
- **About orbit** — four glass cards orbiting a centered blob, 30s linear infinite rotation.
- `prefers-reduced-motion` honored globally — all animations clamped to 0.01ms.

### Hover & press states

- **Hover on cards**: Y-lift + shadow bloom + border goes mint-light. Never color change on background.
- **Hover on nav links**: underline sweeps in left-to-right as a mint-dark gradient bar.
- **Hover on buttons**: Y-lift + shadow; secondary button fills dark.
- **Press**: no dedicated press state; rely on browser default active.

### Borders & shadows

- Borders are almost never opaque. Use `rgba(255,255,255,0.4-0.6)` for glass, or `rgba(0,0,0,0.08)` for form inputs.
- Shadows are low-opacity, wide-blur, with a mint-tinted variant for hover bloom (`rgba(162,219,182,0.2)`).

### Transparency & blur

Transparency and blur are the primary device for depth. Anywhere the design could feel flat, reach for `backdrop-filter: blur(16-20px)` with `rgba(255,255,255,0.6-0.75)`. The nav bar blurs on scroll. The mobile menu overlay uses `blur(30px)`. Glass shapes use `blur(8px)`. Form inputs even get `rgba(255,255,255,0.7)`.

### Corner radius

Huble is heavily rounded. The radius scale is:

- `--radius-sm 10px` — inputs, small tags
- `--radius-md 16px` — FAQ items, small glass shapes
- `--radius-lg 24px` — value cards, orbit cards
- `--radius-xl 32px` — hero glass, service cards, process steps, contact form
- `--radius-full 9999px` — pills, CTAs, avatar-like icons, the pastille dot

Nothing square-cornered except bespoke SVG icons.

### Layout

- **Max-width** `1200px`, padded `clamp(1.25rem, 4vw, 2rem)` horizontally.
- **Section padding** `clamp(3rem, 6vw, 5rem)` vertical.
- **Section-snap scroll** on desktop (disabled mobile).
- **Fixed top nav** (blurs on scroll) + custom draggable right-side mint scrollbar.
- **Grids**: 3-col services, 4-col process, 2-col about/contact. Mobile collapses to 1-col.

### Footer

Unlike the white body, the footer is a **full mint gradient** (`linear-gradient(135deg, mint → mint-dark)`) with dark text. This is the single high-saturation surface of the site.

---

## Iconography

Huble uses **inline SVG icons, line style, 1.8–2 stroke width**, drawn hand-picked from a Feather/Lucide-adjacent vocabulary. There is no icon font, no sprite, no Lucide dependency — icons are pasted inline into HTML with `stroke-linecap: round; stroke-linejoin: round` and `fill: none`.

**Style rules:**
- Stroke `1.8–2`, round caps/joins.
- 24×24 viewBox.
- Stroke color inherits from parent (`currentColor`), which is nearly always `--black` inside a mint-gradient icon pill.
- Icons live inside **circular or rounded-square gradient pills** (60×60 for service icons, 52×52 for value icons, 40×40 for contact details) with `--grad-mint-soft` background and a `--shadow-mint-sm` glow.

**Found in codebase (copied to `assets/icons/`):**
- `site.svg` — monitor with code-prompt (service 1)
- `share.svg` — three-node graph (service 2)
- `bolt.svg` — lightning (service 3, value "Résultats")
- `lightbulb.svg` — innovation value
- `leaf.svg` — simplicity value
- `users.svg` — clients orbit card
- `server.svg` — rapid orbit card
- `mail.svg` — contact
- `chevrons-down.svg` — hero scroll indicator
- `help-circle.svg` `grid.svg` — custom-select options
- `chevron-down.svg` — select arrow

**No emoji. No unicode icon substitutes.** If you need a glyph not in the set above, add a Feather/Lucide match and keep stroke 1.8.

**Recommended fallback**: If extending, use **Lucide** (<https://lucide.dev>) — closest stroke weight and visual DNA. If using via CDN: `<script src="https://unpkg.com/lucide@latest"></script>`.

---

## Caveats / substitutions

- **Fonts**: Space Grotesk and Inter are both loaded from Google Fonts — no local `.ttf` files needed. If you want offline capability, mirror them to `fonts/`.
- The three project SVGs (`auto-*`, `site-*`, `social-*`) in `reference/assets/projects/` are before/after mocks for the Réalisations page — they're illustrative, not real screenshots of client work.
