# Installation — Claude Code / VS Code

Ce dossier est une **Skill Claude** prête à l'emploi. Voici comment l'installer dans ton projet Huble.

## 1. Place le dossier au bon endroit

À la racine de ton repo Huble (celui que tu ouvres dans VS Code) :

```
ton-repo-huble/
├── .claude/
│   └── skills/
│       └── huble-design/      ← tout le contenu de ce zip va ici
│           ├── SKILL.md
│           ├── README.md
│           ├── colors_and_type.css
│           ├── assets/
│           ├── preview/
│           ├── ui_kits/
│           └── reference/
├── src/
├── package.json
└── ...
```

Si le dossier `.claude/skills/` n'existe pas, crée-le. Claude Code le détectera automatiquement au prochain lancement.

## 2. Vérifie que la skill est visible

Ouvre Claude Code dans VS Code et tape :

```
/skills
```

Tu devrais voir **huble-design** dans la liste. Si ce n'est pas le cas, redémarre VS Code.

## 3. Utilise-la

Dans Claude Code, invoque la skill explicitement :

```
utilise la skill huble-design pour refaire la section services
```

Ou plus naturellement — Claude Code la chargera tout seul si tu mentionnes Huble et que tu lui demandes un travail de design :

```
ajoute une section témoignages à la home, style Huble
```

## 4. Bonus — tokens partagés avec ton code

Si tu veux que ton site **et** Claude utilisent exactement la même source de vérité pour les couleurs et la typo :

- Copie `colors_and_type.css` dans `src/styles/` de ton site
- Importe-le dans ton CSS principal : `@import url('./styles/colors_and_type.css');`
- Dans tes composants, utilise les variables (`var(--mint)`, `var(--font-heading)`, etc.)

Comme ça, quand tu changes une couleur dans le fichier, elle change partout — et Claude utilisera automatiquement les bonnes valeurs puisqu'il lit le même fichier.

## 5. Bonus — CLAUDE.md racine (optionnel)

Si tu veux que **certaines règles de marque soient toujours chargées** (sans invoquer la skill), crée un `CLAUDE.md` minimal à la racine de ton repo :

```markdown
# Huble — règles de marque

Quand tu écris ou modifies du code pour ce site :

- **Voix** : français uniquement. "On" jamais "nous". "Vous" pour le client. Pas de jargon. Sentence case.
- **Couleurs** : palette mint monochromatique. Jamais de bleu, violet, orange. Voir `.claude/skills/huble-design/colors_and_type.css`.
- **Typo** : Space Grotesk (titres) + Inter (corps). Tracking négatif sur les displays.
- **Pas d'emoji.** Icônes SVG line (stroke 1.8, Feather/Lucide) dans des pastilles mint.
- **Cartes** : glassmorphism — `rgba(255,255,255,0.75)` + `backdrop-filter: blur(20px)` + radius 32px.
- **Hover** : `translateY(-10px)` + shadow bloom mint. Jamais de scale.
- **Easing** : `cubic-bezier(0.16, 1, 0.3, 1)`.

Pour plus de détails, lis `.claude/skills/huble-design/README.md`.
```

## Structure du livrable

```
SKILL.md                → manifeste (lu par Claude Code en premier)
README.md               → contexte de marque complet, fondations, iconographie
colors_and_type.css     → tous les tokens CSS (couleurs, typo, radius, shadows, gradients)
assets/                 → logos, favicon, icônes SVG
preview/                → specimens visuels (un fichier HTML par élément du design system)
ui_kits/marketing/      → recréation complète du site en composants React/JSX
reference/              → copie du repo GitHub original pour inspection
```

Claude Code lira **SKILL.md** en premier, puis **README.md** pour le contexte, puis explorera `preview/` et `ui_kits/` selon le besoin.

---

**Question fréquente** : "Je dois commit `.claude/skills/` dans Git ?"
→ Oui, pour que toute ton équipe (et toi sur une autre machine) ait la skill. Ce n'est pas du code sensible.
