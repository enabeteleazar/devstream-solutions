# DevStream Solutions

Site vitrine de DevStream Solutions, studio de développement de sites web, plateformes SaaS et applications web.

En ligne : https://devstream-solutions.vercel.app (domaine `devstream-solutions.fr` prévu)

## Stack

React 18, TypeScript, Vite, Tailwind CSS, Lucide (icônes), Vitest. Hébergement Vercel avec une fonction serveur pour le formulaire de contact.

## Modifier le contenu

Tous les textes (services, projets, méthode, FAQ, e-mail de contact) sont dans `src/content.ts`.
Les mentions légales sont dans `src/pages/Legal.tsx` : complétez les champs `[à compléter]`.

## Commandes

Le projet utilise [pnpm](https://pnpm.io) (version fixée dans `package.json`, activable avec `corepack enable`).

```bash
pnpm install     # installer les dépendances
pnpm dev         # serveur de développement
pnpm lint        # vérification du code
pnpm test        # tests
pnpm build       # build de production dans dist/
```

## Formulaire de contact

La fonction `api/contact.ts` envoie les messages via [Resend](https://resend.com). Variables à définir dans Vercel (Settings → Environment Variables) :

| Variable | Rôle |
| --- | --- |
| `RESEND_API_KEY` | Clé API Resend |
| `CONTACT_EMAIL` | Adresse qui reçoit les messages |
| `CONTACT_FROM` | Expéditeur sur un domaine vérifié dans Resend (facultatif) |

Sans domaine vérifié, Resend n'envoie qu'à l'adresse du compte Resend : `CONTACT_EMAIL` doit alors être cette adresse.
