# Jabal Dreams

Portfolio website for Jabal Dreams Intl. LLC, built with Next.js App Router, React,
Tailwind CSS, and local portfolio image data.

## Requirements

- Node.js 20.9 or newer
- npm

## Commands

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The dev server runs on `http://localhost:3000`.

## Structure

- `app/page.tsx` - homepage composition
- `app/work/page.tsx` - work index
- `app/work/[category]/page.tsx` - static category galleries
- `app/work/[category]/[project]/page.tsx` - static project detail pages
- `app/lib/projects.ts` - generated project catalog and image metadata
- `app/lib/site.ts` - company, services, industries, and category notes
- `app/lib/i18n.ts` - English and Arabic UI/content localization
- `public/work` - portfolio images referenced by `app/lib/projects.ts`
- `public/brand` - brand assets
- `Ref` - source company profile PDFs

## Content Model

`app/lib/projects.ts` is marked as generated from the company profile PDFs. It defines:

- project slug, title, client, place, year, category, blurb, and description
- all referenced image paths
- image dimensions, orientation, and blur placeholders

When adding work, keep these rules:

- Every project slug must be unique.
- Every image path in `projects.ts` must exist under `public/work`.
- Every `public/work/*.webp` file should be referenced by a project.
- Category names must match the `categories` array exactly.

Useful integrity check in a Bash-compatible shell:

```bash
node - <<'NODE'
const fs = require("fs");
const src = fs.readFileSync("app/lib/projects.ts", "utf8");
const refs = Array.from(src.matchAll(/"src": "\/work\/([^"]+)"/g), m => m[1]).sort();
const files = fs.readdirSync("public/work").filter(f => f.endsWith(".webp")).sort();
console.log({
  refs: refs.length,
  files: files.length,
  missing: refs.filter(f => !files.includes(f)),
  unused: files.filter(f => !refs.includes(f)),
});
NODE
```

## SEO

The app provides:

- root metadata in `app/layout.tsx`
- generated Open Graph image at `/opengraph-image`
- sitemap at `/sitemap.xml`
- robots rules at `/robots.txt`
- static category and project metadata
- LocalBusiness JSON-LD

The Arabic experience is currently client-side language switching. For full Arabic SEO,
add server-rendered `/ar` routes and `hreflang` alternates.

## Contact

The contact modal opens a prefilled email draft to `jabaldreams@gmail.com`. This avoids
discarding inquiries when no mail provider or CRM endpoint is configured.

If a backend is added later, replace the mail draft workflow with an API route or hosted
form provider, validate input server-side, and only show success after a confirmed send.

## Deployment

This project uses `next/image` and is configured for a Next.js/Vercel-style runtime.
It is not configured for static export. If deploying to static-only hosting, update image
handling and Next config intentionally.
