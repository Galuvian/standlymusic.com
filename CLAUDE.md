# Standly Website

Marketing site for Standly, a digital music stand app for Windows tablets.

## Structure

- `site/` — All publicly served files (GitHub Pages deploys from this folder)
- `site/index.html` — Landing page (static HTML + Tailwind CSS via CDN)
- `site/images/` — Branding assets (favicon, logo)
- `site/screenshots/` — App screenshots

## Development

No build step. Edit HTML directly. To preview locally:

```
cd site
python -m http.server 8080
```

## Hosting

GitHub Pages, deploying from the `site/` folder on the `master` branch.
Custom domain: standlymusic.com (configured via `site/CNAME`).
