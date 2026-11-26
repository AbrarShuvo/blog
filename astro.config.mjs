import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site URL lives in ONE place: this value.
// Default is the GitHub Pages fallback address. Vercel sets ASTRO_SITE to
// the production URL, and when the blog moves to blog.abrarzamil.com,
// change the default below (see README.md).
const site = process.env.ASTRO_SITE ?? 'https://abrarshuvo.github.io/blog';

// The site lives at the root on Vercel and under /blog on GitHub Pages.
// When the site URL itself carries a subpath, that subpath is the base,
// so canonical URLs, the sitemap and og:image all include it.
// The Pages workflow also sets ASTRO_BASE=/blog explicitly.
const sitePath = new URL(site).pathname.replace(/\/$/, '');
const base = process.env.ASTRO_BASE ?? (sitePath || '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
