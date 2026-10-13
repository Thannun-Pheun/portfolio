# Pheun Thannun — Portfolio (React + TypeScript)

The portfolio rebuilt as a **Vite + React 18 + TypeScript** app. Same design
as the hand-coded version: near-black monochrome (reference style), light/dark
mood, looping typewriter name, timeline experience cards, repo-style projects.

## Commands

```bash
npm install       # once
npm run dev       # local dev server with hot reload → http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
```

## Where things live

```
index.html                    Vite entry (head: fonts, theme boot script, meta)
src/
├── main.tsx                  React root
├── App.tsx                   assembles the page
├── hooks.ts                  useTheme, useRevealOnScroll, useScrollSpy,
│                             useTypewriterLoop, useInViewOnce
├── util.ts                   cssVars helper for inline custom properties
├── styles.css                the entire design system (edit :root tokens here)
├── data/content.ts           ← ALL YOUR TEXT/PROJECTS/LINKS — edit this file
├── components/               Nav · Hero · About · Skills · Projects ·
│                             Experience · Education · Contact · Footer · Icons
└── assets/images/            ← YOUR PICTURES go here
    ├── profile.jpg                     (square headshot, ≥600×600)
    ├── projects/booking-system.jpg     (1680×720)
    ├── projects/shoe-store.jpg         (1280×640)
    └── projects/my-portfolio.jpg       (1280×640)
public/
├── favicon.svg               tab icon (copied verbatim into dist)
└── og-cover.png              social-share preview image
```

## Customize

- **Text, projects, links, experience items** → `src/data/content.ts`. Everything
  is typed — the interfaces at the top describe each shape. Add a new project by
  appending an object to `projects[]`; add a screenshot by importing a file into
  `src/assets/images/projects/` and mapping it in `Projects.tsx` (`SCREENSHOTS`).
- **Photos** → overwrite the files in `src/assets/images/` (same names). Vite
  hashes and bundles them on build.
- **Colors / fonts / spacing** → `src/styles.css` `:root` (dark) and
  `:root[data-theme="light"]` (light).
- **Remove the theme toggle** → delete the `theme-btn` button in
  `src/components/Nav.tsx`, the boot script in `index.html`, and the light
  block in `styles.css`.

## Deploy (after `npm run build`)

The build output in `dist/` is plain static files with **relative asset URLs**
(`base: './'` in `vite.config.ts`), so it works everywhere:

- **GitHub Pages (recommended):** create repo `thannun-pheun.github.io`, upload
  the *contents* of `dist/`, Settings → Pages → Deploy from a branch → `main` /
  root. Live at your username URL. (Project-page sub-paths also work thanks to
  relative base.)
- **Firebase** (like your old web.app): `firebase init hosting` → public dir =
  `dist` → `firebase deploy`.
- **Netlify / Vercel:** drag-and-drop `dist/`, or connect the repo with build
  command `npm run build` and publish dir `dist`.

## What this build keeps

Accessibility (skip link, focus rings, aria labels, `prefers-reduced-motion`),
SEO meta + Open Graph, light/dark with system-follow + saved choice (no flash),
reveal-on-scroll, scroll-spy nav, the mailto contact form (no backend needed),
and mobile-first responsive layouts.
