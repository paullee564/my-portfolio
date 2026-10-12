# Paul Lee — Portfolio

Personal portfolio for Paul Lee, a Computer Science student at the University of Virginia seeking a Summer 2027 software engineering internship.

## Stack

- **React 19** with function components and hooks
- **TypeScript 6** in strict mode (plus `noUncheckedIndexedAccess`)
- **Vite 8** for the dev server and production bundle
- **Tailwind CSS v4**, configured in CSS via `@theme` (no `tailwind.config.js`)
- **oxlint** with the `react`, `typescript`, and `jsx-a11y` plugins

No UI or animation libraries — the design system lives in `src/index.css`.

## Getting started

```bash
npm install
npm run dev       # local dev server with hot module replacement
```

## Scripts

| Command           | What it does                                                  |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                                     |
| `npm run lint`    | Lint with oxlint, including static accessibility checks       |
| `npm run build`   | Type-check every project (`tsc -b`), then bundle into `dist/` |
| `npm run preview` | Serve the production build locally                            |

## Project structure

```
index.html          Entry document; loads fonts and src/main.tsx
public/             Copied to dist/ as-is (favicon, résumé PDF)
src/main.tsx        Mounts <App /> into #root
src/App.tsx         Page composition
src/index.css       Tailwind import, design tokens, custom utilities
```

Files in `public/` keep their exact names and are referenced by absolute path (`/Paul-Lee-Resume.pdf`). Files imported from `src/` are processed by Vite and given content-hashed names for caching.
