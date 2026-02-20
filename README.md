# Polished

Landing page for [Polished](https://lecroy.github.io/polished) — AI-built, human-designed web apps at a flat rate.

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Pages](https://pages.github.com) for hosting

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushes to `main` auto-deploy to GitHub Pages via GitHub Actions.

Live at: `https://lecroy.github.io/polished`

### Moving to a custom domain (e.g. getpolished.com)

1. Remove `BASE_PATH: /polished` from `.github/workflows/deploy.yml`
2. Add a `CNAME` file to the repo root with your domain
3. Point your DNS to GitHub Pages
4. Update the `basePath` line in `next.config.ts` (already handled via env var)

## Customization

- **Apply link:** Search for `applyUrl` in `app/page.tsx` — swap in your real form URL or email.
- **Copy / colors:** All in `app/page.tsx`.
