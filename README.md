# Neo-Brutalist Desktop OS

A playful **desktop-operating-system simulation in the browser**, styled in bold neo-brutalist design: thick borders, hard shadows, bright colors. You get a working "desktop" with draggable windows, a dock/taskbar, and a command palette — plus built-in apps (About, Art, Philosophy, Resume). Originally generated with [v0.app](https://v0.app) and maintained as a full Next.js project.

🖥️ **Live demo:** https://girishlade111.github.io/neo-brutalist-desktop-os/

## Features

- **Simulated desktop** — neo-brutalist window manager: draggable windows, dock, taskbar
- **Command palette** — `cmdk`-powered quick launcher (⌘K style)
- **Built-in apps** — About, Art (p5.js canvas sketches), Philosophy, Resume — all windowed
- **Eyes widget** — playful animated component tracking your cursor
- **Global UI state** — zustand store (`lib/ui-store.ts`) for active app/window state
- **Dark theme** — via `next-themes`, Radix UI primitives, Tailwind CSS v3, Geist font
- **Analytics** — `@vercel/analytics` integrated

## Tech stack

| Layer     | Tech                                              |
|-----------|---------------------------------------------------|
| Framework | Next.js 15.2 (App Router), React 19, TypeScript    |
| Styling   | Tailwind CSS v3, tailwindcss-animate, Geist        |
| UI kit    | Radix UI primitives, shadcn/ui-style `components/ui` |
| State     | zustand                                           |
| Canvas    | p5.js                                             |
| Palette   | cmdk                                              |
| Deploy    | GitHub Pages (static export)                       |

## Quick start

```bash
# install
pnpm install        # or: npm install --legacy-peer-deps

# dev server
pnpm dev            # http://localhost:3000

# production build (static export)
pnpm build          # output goes to out/
```

> **Security note:** `next` was bumped from `15.2.4` → `15.2.8` — earlier 15.2.x releases are affected by CVE-2025-55182 (React2Shell RCE).

## Project structure

```
app/                # App Router — layout.tsx, page.tsx (client), globals.css
  components/       # desktop OS pieces: Dock, Window, CommandPalette, Eyes, …
components/         # theme-provider + ui/ primitives
lib/
  ui-store.ts       # zustand UI state (activeApp, setActiveApp)
  utils.ts          # cn() helper
public/             # images
styles/             # global styles
```

## Environment variables

None required. `@vercel/analytics` works out of the box on Vercel; on GitHub Pages it is inert.

## Deployment notes

- This app has **no API routes and no server actions**, so it is statically exported (`output: 'export'` in `next.config.mjs`) and hosted on **GitHub Pages** from the `gh-pages` branch.
- `next.config.mjs` sets `basePath: '/neo-brutalist-desktop-os'` because GitHub Pages serves it from the `/neo-brutalist-desktop-os/` subpath. **If you deploy to a root domain or Vercel instead, remove the `basePath` line.**
- `images.unoptimized: true` is set, so no image-optimization backend is needed.

---

Built by Girish Lade — https://ladestack.in
