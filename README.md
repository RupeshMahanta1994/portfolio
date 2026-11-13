# Portfolio (Next.js + TypeScript + Tailwind, static export)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
npm run start      # preview ./out
```

## Make it yours
1. `data/profile.ts`  - name, bio, links, awards, "now" panel
2. `data/projects.ts` - add a project and it gets a card AND a /projects/<slug>/ page
3. `data/skills.ts`   - skill groups
4. `app/globals.css`  - change `--color-accent`
5. Add `public/documents/CV.pdf`, `public/images/og.jpg`, and screenshots (WebP)
   then swap the gradient placeholders for `next/image` (set `unoptimized` already).
6. Set `siteUrl` in `data/profile.ts` before deploying.

## Static-only rules
`output: "export"` is on, so: no API routes, server actions, middleware or ISR.
Contact = mailto link (or a third-party form endpoint called from the browser).
Deploy the `out/` folder to Cloudflare Pages, Netlify, GitHub Pages, S3, etc.
