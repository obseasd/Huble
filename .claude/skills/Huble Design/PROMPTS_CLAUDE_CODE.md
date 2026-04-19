# Prompts prêts à l'emploi pour Claude Code

Copie-colle ces prompts dans Claude Code (extension VS Code) dans l'ordre. Chacun est **précis et auto-suffisant** — pas besoin que la skill soit détectée automatiquement.

---

## 1. Audit de conformité (à faire en premier)

```
Lis d'abord .claude/skills/huble-design/README.md et .claude/skills/huble-design/colors_and_type.css.

Puis audite css/main.css, css/sections.css, css/responsive.css, css/animations.css, css/realisations.css et index.html. Liste chaque infraction avec le numéro de ligne :

1. Toute couleur verte hardcodée qui n'est PAS dans la mint scale (#A2DBB6, #C8ECDA, #E5F5EC, #7BC99A, #5AB87E, #3E9A62). Je veux uniquement ces 6 valeurs vertes sur tout le site.
2. Tout gradient vert qui n'utilise pas un token (--grad-mint, --grad-mint-soft, --grad-wash-1/2, --grad-footer).
3. Toute surface blanche semi-transparente qui n'utilise pas --glass-bg ou --glass-bg-strong + backdrop-filter blur(16-20px).
4. Toute icône SVG avec stroke-width hors de 1.8-2, ou sans stroke-linecap="round".
5. Toute emoji dans le HTML.
6. Tout "nous" qui devrait être "on" (voix de marque Huble).

Ne modifie rien. Donne-moi juste la liste.
```

---

## 2. Remplace le logo par la version on-white

```
Remplace le contenu de assets/images/logo-huble.svg par le contenu de .claude/skills/huble-design/assets/logo-huble-on-white.svg. C'est la version définitive du logo.
```

---

## 3. Intègre les 4 nouveaux boutons

```
Lis .claude/skills/huble-design/snippets/buttons.css et .claude/skills/huble-design/snippets/buttons.html.

1. Copie buttons.css dans css/buttons.css
2. Ajoute en haut de css/main.css : @import url('./buttons.css');
3. Dans index.html, nav :
   - Remplace le bouton "Nous contacter" (.btn.btn-primary.nav-cta) par le bouton Flip du snippet (§2)
4. Dans index.html, section hero, CTA principal :
   - Remplace le bouton "Discutons de votre projet" par le bouton Liquid du snippet (§1)
5. Dans js/contact-form.js, modifie le handler de submit :
   - Pendant l'envoi : le bouton submit devient .btn-loading avec texte "Envoi en cours…"
   - En succès : le bouton devient .btn-success avec texte "Message envoyé"
   - En erreur : reviens à l'état initial

Ne touche à rien d'autre. Confirme chaque modification.
```

---

## 4. Refais la section process avec la timeline animée

```
Lis .claude/skills/huble-design/preview/card-process.html — c'est la version cible de la section "Notre approche".

Dans index.html, section .process :
- Remplace la structure .process-steps actuelle par la structure du preview (4 cercles numérotés, path SVG animé entre eux, labels kickoff/en cours/à venir, progression bar en bas)
- Extrais les styles depuis le <style> du preview vers css/sections.css (remplace la section /* ---- PROCESS ---- */)
- Garde les 4 étapes actuelles : Découverte, Proposition, Création, Livraison
- Garde l'eyebrow "COMMENT ON TRAVAILLE"

Ne touche pas aux autres sections.
```

---

## 5. Refais le hero avec la composition signature

```
Lis .claude/skills/huble-design/preview/hero-bg.html — c'est la version cible du hero.

Dans index.html, section .hero :
- Garde le texte actuel ("On simplifie. Vous brillez." + sous-titre + CTAs)
- Ajoute les éléments décoratifs du preview : ring dashed orbital, chip "Lighthouse 98/100", chip avatars + étoiles, mini disc mint, marquee clients en bas
- Le marquee doit contenir de vrais noms de clients si j'en ai, sinon garde les placeholders du preview
- Adapte les styles dans css/sections.css section /* ---- HERO ---- */

Le texte principal reste aligné à gauche comme dans le preview, pas centré.
```

---

## 6. Supprime la section stats inutile

```
Claude Code a ajouté une section "stats" avec 4 cards (150%, 40+, 15h/sem, 98%) qui n'était pas demandée.

Dans index.html, supprime la section <section class="stats">. Dans css/sections.css, supprime tout le bloc /* ---- STATS ---- */.
```

---

## Astuce finale

Pour que Claude Code **lise toujours** la skill sans que tu aies à le rappeler à chaque fois, ajoute un fichier `CLAUDE.md` à la racine de ton repo avec ce contenu minimal :

```markdown
# Huble — contexte de marque

Avant toute modification visuelle ou CSS, lis :
- `.claude/skills/huble-design/README.md` — règles de marque complètes
- `.claude/skills/huble-design/colors_and_type.css` — tous les tokens
- `.claude/skills/huble-design/snippets/README.md` — composants production

Règles absolues :
- Palette mint uniquement. Jamais d'autre couleur chromatique.
- Space Grotesk (titres) + Inter (corps).
- "On" jamais "nous". Français uniquement. Pas d'emoji.
- Cards : glassmorphism + hover translateY(-10px) + easing cubic-bezier(0.16, 1, 0.3, 1).
- Ne jamais ajouter de section non demandée.
```
