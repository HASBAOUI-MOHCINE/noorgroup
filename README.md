# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Noor Group landing (Tailwind + chadcn guidance)

This repository now contains a simple Tailwind-based landing page scaffold that uses a local set of UI components (in `src/components`) and a Noor brand palette.

Brand colors (added to `tailwind.config.cjs`):
- #11110d
- #342d24
- #7c6c5b
- #7d5a34
- #bd915a

How Tailwind is provided in this project

This scaffold purposefully uses the Tailwind Play CDN at runtime instead of a local PostCSS/Tailwind build. That means:

- No local `postcss` build step is required for development.
- The CDN is injected in `index.html` and the Noor color palette is provided to the CDN runtime there.
- Local files `tailwind.config.cjs` and `postcss.config.cjs` are intentionally left as no-op placeholders and are not required.

To run the project locally:

1. Install project dependencies (you already have Vite and React):

	npm install

2. Start the dev server:

	npm run dev

If you'd rather use a build-time Tailwind (PostCSS) workflow instead of the CDN, I can switch the project back to that approach and remove the CDN script — tell me and I'll revert and configure it.
