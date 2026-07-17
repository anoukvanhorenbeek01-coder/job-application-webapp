# Agent Instructions for job-application

## Project overview
- This repository is a minimal personal Job application built with React, TypeScript, Vite, and Tailwind CSS.
- It is a static frontend app only; there is no backend, server API, or complex application layer.
- Key files are `src/App.tsx`, `src/main.tsx`, `src/index.css`, `vite.config.ts`, and `package.json`.

## What agents should know
- The primary goal is to keep the site simple and lightweight.
- Use React 19 and TypeScript idioms.
- Styling is handled by Tailwind CSS; prefer Tailwind utility classes over adding new CSS frameworks.
- The app structure is intentionally small, so avoid over-engineering state management or routing unless explicitly requested.
- Preserve the current page entrypoint and Vite setup.

## Common tasks
- Update or extend `src/App.tsx` for content and layout changes.
- Add new React components inside `src/` and import them from `App.tsx`.
- Keep `src/main.tsx` and `vite.config.ts` unchanged unless there is a strong reason.
- Use `index.css` only for global styles or Tailwind imports.

## Build and validation commands
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production output: `npm run build`
- Run ESLint: `npm run lint`

## Notes for AI agents
- Do not introduce unnecessary runtime dependencies or state libraries.
- Keep changes aligned with a simple personal Job application.
- If adding content, use the current visual style as a guideline: centered layout, simple typography, and a dark background.
- Link to existing documentation instead of duplicating it: [README.md](README.md).
