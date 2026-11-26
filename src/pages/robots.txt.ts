// robots.txt is generated, not a static file, so the sitemap URL always
// matches the site URL in astro.config.mjs (the single source of truth).
export function GET({ site }: { site: URL }) {
  const base = site.toString().endsWith('/') ? site.toString() : site.toString() + '/';
  const sitemap = new URL('sitemap-index.xml', base).toString();
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
