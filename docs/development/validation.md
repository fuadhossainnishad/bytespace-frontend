# Validation

Validation should match the changed behavior and provide evidence using the scripts configured in `package.json`.

## Validation categories

- **Formatting:** consistent, automated formatting once tooling is established.
- **Linting:** static checks for correctness and maintainability.
- **Type checking:** verify the configured TypeScript project.
- **Production build:** confirm the production artifact can be produced.
- **Browser/runtime behavior:** check key interactions and runtime errors.
- **Responsive behavior:** inspect supported viewport sizes and layouts.
- **Visual fidelity:** compare implementation with the analyzed design source.
- **Accessibility:** check semantics, keyboard use, focus, contrast, and assistive-technology behavior as applicable.
- **Asset integrity:** verify referenced assets resolve, have appropriate formats, and retain required provenance or licensing.

## Available commands

- `npm install` — install dependencies from the lockfile.
- `npm run lint` — run ESLint.
- `npm run typecheck` — run TypeScript with `--noEmit`.
- `npm run build` — create the Next.js production build.
- `npm run dev` and `npm run start` — run the development server and serve a production build, respectively.

Formatting automation, browser/runtime, responsive, visual, accessibility, and asset checks remain to be selected or added when the design and application needs are analyzed. Do not document guessed commands.
