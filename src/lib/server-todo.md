# Server code dropped during Astro port

Astro is configured for `output: 'static'`. The following TanStack Start
server-side code from `genai/` does **not** translate to a static build and
was intentionally dropped. If any of it is needed, re-introduce it with an
Astro adapter (`@astrojs/node`, `@astrojs/cloudflare`, …) and `output: 'server'`.

## Dropped files

- `genai/src/server.ts`
  - TODO: Cloudflare-style `fetch` handler that delegates to
    `@tanstack/react-start/server-entry` and normalizes catastrophic SSR
    responses into a custom error page. No equivalent in static Astro.

- `genai/src/start.ts`
  - TODO: TanStack Start client/server bootstrap entry.

- `genai/src/router.tsx` / `genai/src/routeTree.gen.ts`
  - TODO: TanStack Router setup + generated route tree. Replaced by Astro's
    file-based routing under `src/pages/`.

- `genai/src/routes/__root.tsx`
  - TODO: Root shell wired `QueryClientProvider` (@tanstack/react-query),
    `<HeadContent>`, `<Scripts>`, and custom 404 / error components. The
    head/meta and 404 copy are now handled by `src/layouts/Layout.astro` and
    Astro's routing. The React-Query provider was dropped — no data fetching
    in the ported landing page.

- `genai/src/lib/error-capture.ts`, `genai/src/lib/error-page.ts`
  - TODO: SSR error capture + HTML error-page renderer. Only meaningful with
    a server runtime.

- `genai/src/lib/config.server.ts`
  - TODO: Server-only configuration loader.

- `genai/src/lib/api/example.functions.ts`
  - TODO: TanStack Start server functions (example). Re-implement as Astro
    endpoints (`src/pages/api/*.ts`) or an external API if needed.

## Notes

- The waitlist form (`src/components/WaitlistForm.tsx`) posts directly to a
  client-side `WEBHOOK` constant — no server route required.
- The shadcn/ui component library under `genai/src/components/ui/` was not
  ported: those 45 components are referenced only by each other and never by
  the landing page, so none are operator-visible.
