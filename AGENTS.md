# Repository Guidelines

## Project Structure & Module Organization

This is a small Next.js app using the App Router. The primary page is `app/page.tsx`, with shared layout, global styles, and font CSS in `app/layout.tsx`, `app/globals.css`, and `app/fonts.css`. Reusable UI and page sections live in `components/`; shadcn-style primitives are under `components/ui/`. Utility functions belong in `lib/`. Static assets such as icons and placeholders live in `public/`, and standalone CSS for the pricing slider is in `styles/slider.css`.

## Build, Test, and Development Commands

Use pnpm because this repo includes `pnpm-lock.yaml`.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the local Next.js development server at `http://localhost:3000`.
- `pnpm build`: create a production build and catch type/build errors.
- `pnpm start`: serve the production build after `pnpm build`.
- `pnpm lint`: run ESLint across the repository.

## Coding Style & Naming Conventions

Write TypeScript and React function components. Match the existing style: 2-space indentation, single quotes, no semicolons, and `@/` imports for project paths. Component files use kebab-case names such as `pricing-calculator.tsx`; exported components use PascalCase. Keep Tailwind classes inline for component styling, and use `cn()` from `lib/utils.ts` when class names need conditional merging. Add `'use client'` only to components that need client-side state, effects, or event handlers.

## Testing Guidelines

No test framework is currently configured. Before opening a PR, run `pnpm lint` and `pnpm build`. For UI changes, manually verify the main page in a browser at desktop and mobile widths, especially navigation, pricing controls, and section anchors. If adding tests later, prefer colocated `*.test.ts` or `*.test.tsx` files and document the new command in `package.json`.

## Commit & Pull Request Guidelines

Git history uses short imperative summaries, sometimes with Conventional Commit prefixes, for example `feat: enhance hero component and pricing calculator formatting` or `Refresh site color palette`. Keep commits focused and describe the user-visible change. Pull requests should include a concise summary, validation steps run (`pnpm lint`, `pnpm build`), linked issues when applicable, and screenshots or screen recordings for visual changes. Note any v0-generated changes clearly, since merges to `main` automatically deploy.

## Security & Configuration Tips

Do not commit secrets or local environment files. Keep public assets in `public/` and avoid hard-coding deployment-only URLs unless they are meant to be public. Review dependency changes carefully, especially framework, React, and UI package upgrades.
