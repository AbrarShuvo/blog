# Abrar Zamil — Notes

A blog for useful, experience-based articles: Python, workflow
automation, AI integrations, data dashboards and websites. Astro, static
output, Markdown articles in `src/content/blog`. No React, no Tailwind, one
CSS file, no client-side JS except what Astro needs. Bento glass design:
glass cards on a gradient background, CSS-only animations, light and dark
follow the system setting.

Live site: see below (Vercel is the primary host).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview the production build
```

## Add an article

1. Create a file in `src/content/blog/`, e.g. `my-article.md`.
2. Frontmatter:

```yaml
---
title: Your title here            # under 60 characters
description: One plain sentence.  # under 160 characters
pubDate: 2026-11-26               # the real publish date
updatedDate: 2026-11-27           # only when you later change it
tags: [python, automation]
cover: /og-my-article.png         # optional; default cover is used otherwise
draft: false                      # true keeps it out of the build, sitemap and RSS
portfolioLink: https://abrarshuvo.github.io/loom-to-tasks.html  # optional
---
```

3. Write the article in Markdown. Follow `WRITING.md`.
4. `npm run build` must pass. The build fails if a title is over 60
   characters or a description over 160.
5. Check the page at 390px wide: no horizontal scroll.

To publish a draft, set `draft: false` and add `pubDate`.

## Deploy on Vercel (primary)

1. Push this repo to GitHub.
2. In Vercel: Add New → Project → Import the `blog` repository.
   Framework preset: **Astro**. No build settings to change
   (`npm run build`, output `dist/`).
3. Environment variable (one time): `ASTRO_SITE` = the production URL
   Vercel gives the project (e.g. `https://blog-xxxx.vercel.app`).
   This makes canonical URLs, the sitemap and RSS point at the live site.
   Every push to `main` redeploys automatically.

## Deploy on GitHub Pages (fallback)

A workflow (`.github/workflows/deploy.yml`) builds the site and deploys
`dist/` to Pages on every push to `main`.

1. In the repo: Settings → Pages → Build and deployment → Source:
   **GitHub Actions**.
2. The workflow builds with `ASTRO_BASE=/blog`, so the site is served at
   `https://abrarshuvo.github.io/blog/`.
3. The default `site` in `astro.config.mjs` is that Pages address, so the
   fallback works with no extra configuration.

## Switch the domain later

The site URL lives in **one place**: the `site` value in
`astro.config.mjs` (default `https://abrarshuvo.github.io/blog`).

1. Buy the domain and point it at the host (for Vercel: add the domain in
   the Vercel project; for the blog the plan is `blog.abrarzamil.com`).
2. Change the default `site` value to the new address.
3. If `ASTRO_SITE` is set in Vercel, update it to the new address too.
4. Push. Canonical URLs, the sitemap, RSS and `robots.txt` all follow
   from that one value — nothing else needs changing.

## What is where

- `src/content/blog/` — articles (Markdown/MDX). Drafts stay out of the build.
- `src/layouts/` — `BaseLayout` (head, SEO tags, header/footer) and
  `BlogPost` (article page: date, reading time, breadcrumbs, related
  articles, the "Need something like this?" box, Article JSON-LD).
- `src/pages/` — home, article pages (`/blog/<slug>/`), tag pages
  (`/blog/tags/<tag>/`), about, 404 (noindex), RSS (`/rss.xml`),
  `robots.txt` (generated from the site URL).
- `src/styles/global.css` — the only stylesheet.
- `public/og-cover.png` — default social cover image.
- `WRITING.md` — the rules every article must follow.
