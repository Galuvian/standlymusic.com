# Standly Website

Marketing site for Standly, a digital music stand app for Windows tablets.

## Structure

- `docs/` — All publicly served files (GitHub Pages deploys from this folder)
- `docs/index.html` — Landing page (static HTML + Tailwind CSS via CDN)
- `docs/images/` — Branding assets (favicon, logo)
- `docs/screenshots/` — App screenshots

## Development

No build step. Edit HTML directly. To preview locally:

```
cd docs
python -m http.server 8080
```

## Hosting

GitHub Pages, deploying from the `/docs` folder on the `master` branch.
(GitHub's branch deploy only allows `/(root)` or `/docs`, hence the folder name.)
Custom domain: standlymusic.com (configured via `docs/CNAME`).
