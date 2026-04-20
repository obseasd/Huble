# Snippets production-ready — Huble

Ce dossier contient les **composants sélectionnés** du design system, prêts à être intégrés dans le code de production du site.

## Comment utiliser

### Option A — tout en un
1. Copie `snippets/buttons.css` dans `css/` à la racine de ton site
2. Ajoute en haut de `css/main.css` : `@import url('./buttons.css');`
3. Copie les blocs HTML depuis `snippets/*.html` dans les bonnes sections de ton `index.html`

### Option B — sélectif
Chaque fichier `.html` contient des blocs indépendants que tu peux copier un par un.

---

## Mapping — où utiliser quoi

| Section du site | Composant à utiliser | Fichier snippet |
|---|---|---|
| Nav · "Nous contacter" | Bouton **Flip** | `buttons.html` §2 |
| Hero · CTA principal | Bouton **Liquid** (goutte de mint) | `buttons.html` §1 |
| Hero · composition background | Hero composition avec blobs + ring + chips | voir `preview/hero-bg.html` de la skill |
| Contact · submit en cours | Bouton **Loading** | `buttons.html` §3 |
| Contact · succès d'envoi | Bouton **Success** | `buttons.html` §4 |
| Process · les 4 étapes | Process step avec timeline animée | voir `preview/card-process.html` |
| Services · cards | Service card glass avec top-rule au hover | déjà présent dans `css/sections.css` ✓ |
| FAQ | Accordion glass | déjà présent dans `css/sections.css` ✓ |
| Form fields | Inputs avec focus mint glow | déjà présent dans `css/sections.css` ✓ |

---

## Checklist de conformité

Avant de déployer, demande à Claude Code :

> Audite `css/main.css`, `css/sections.css` et `index.html`. Vérifie que :
> 1. Toutes les couleurs vertes utilisées sont dans la mint scale (`--mint`, `--mint-light`, `--mint-lighter`, `--mint-dark`, `--mint-darker`). Aucune autre valeur verte.
> 2. Tous les gradients verts utilisent les tokens `--grad-mint`, `--grad-mint-soft`, `--grad-wash-1`, `--grad-wash-2`, ou `--grad-footer`.
> 3. Toutes les surfaces glass utilisent `--glass-bg` ou `--glass-bg-strong` + `backdrop-filter: blur(16-20px)`.
> 4. Toutes les icônes SVG ont `stroke-width` entre 1.8 et 2, avec `stroke-linecap: round` et `stroke-linejoin: round`.
> 5. Aucune emoji dans le HTML.
> 6. Aucun texte en "nous" (doit être "on").
>
> Liste les infractions avec le numéro de ligne et propose un fix.

---

## Logo

Le logo on-white définitif est dans `.claude/skills/huble-design/assets/logo-huble-on-white.svg`.

Pour l'utiliser sur ton site :
1. Copie le fichier dans `assets/images/logo-huble.svg` (écrase l'ancien)
2. Le balisage HTML existant continue de fonctionner — même chemin
