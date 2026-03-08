# aws-eks-walkthrough

Build Amazon EKS from scratch: VPC, networking, cluster, and platform components.

The walkthrough is published as a static documentation site powered by [Astro Starlight](https://starlight.astro.build/), using [astrodocs-demo](https://github.com/jdevto/astrodocs-demo) as reference.

## Quick start

**Requires Node.js >=18.20.8** (or use Node 20/22; `.nvmrc` is set to 22).

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`). Edits to `src/content/docs/` will hot-reload.

### Test locally

- **Dev server:** `npm run dev` — live reload, best for writing content.
- **Production preview:** `npm run build` then `npm run preview` — serves the built site from `dist/` (same as GitHub Pages).

## Deploy

The site is deployed to GitHub Pages using the official Astro GitHub Action. Push to the `main` branch to trigger a build and deploy.

1. In your GitHub repo: **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
2. Ensure `astro.config.mjs` has `site` and `base` set for your repo (e.g. `base: '/aws-eks-walkthrough'` for project Pages).

## Project structure

- `astro.config.mjs` — Astro and Starlight configuration (site URL, base path, theme, social links).
- `src/content/docs/` — Documentation pages; file structure drives the sidebar.
- `public/` — Static assets (favicon, images) served as-is.

## Customization: themes

This project uses the **starlight-theme-vintage** community theme. To use another Starlight theme (e.g. Rosé Pine, Catppuccin):

1. Install the theme package, e.g. `npm install starlight-theme-rose-pine`
2. Add the theme in `astro.config.mjs` (see the theme’s README).
3. Browse options at [Starlight Themes](https://starlight.astro.build/themes/).

## License

MIT — see [LICENSE](LICENSE).
