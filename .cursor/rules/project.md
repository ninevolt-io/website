# Nine Volt Website – Project Rules

## Tech

- Next.js (App Router) + TypeScript + Tailwind
- Package manager: pnpm
- Use Server Components by default; add "use client" only when needed.

## Code style

- Prefer small, composable components.
- No inline styles. Use Tailwind utilities.
- Use named exports for components in /src/components and default exports for pages.
- Prefer `@/` import alias (do not use deep relative imports).

## Folder conventions

- Pages/routes: /src/app
- Reusable UI: /src/components
- Helpers/utilities: /src/lib
- Types: /src/types

## Safety

- Do not add new dependencies unless asked.
- If you change behavior, update the README.
- Keep the homepage fast: avoid heavy client-side JS.

## Output expectations

- When making changes, list files changed and a short rationale.
