# Writing rules for this blog

These rules are the point of the blog. An article that breaks them does not get published.

## What to write about

- Each article solves **one real problem a client would search for**, from my own work.
- Write from experience. If I have not done it, I do not write about it.

## How to write

- Plain, specific client language. Say what the tool does, who it is for, and what the client gets.
- No hype, no keyword stuffing.
- No invented numbers, testimonials or dates. Every number in an article must come from the real work (test counts, sample sizes). If I do not know it, I leave it out.
- No prices, rates or payment talk.

## Links

- Link to the matching portfolio page **once**, naturally, using the article's `portfolioLink` frontmatter. That link appears in the box at the end of the article.
- Never publish thin or mass-generated articles. One useful article beats ten filler ones.

## Cross-posting

- When cross-posting to Dev.to or Medium, set their canonical URL to the article on this blog, so search engines credit this site.
- Publish here first, then cross-post.

## Publishing checklist

1. Title under 60 characters, description under 160 (the content schema enforces this — the build fails otherwise).
2. `pubDate` set to the real publish date. `updatedDate` set only when the article is later changed.
3. `draft: false` to publish. Drafts are excluded from the build, the sitemap and RSS.
4. `npm run build` passes, then check the article page at 390px.
