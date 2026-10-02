# Component Boundaries

The Next.js route boundary is established; the Figma structure is not yet analyzed. These are responsibility guidelines, not confirmed design components. Do not create UI components before design analysis.

- **Routes/pages:** own URL-level composition and page-specific data needs. Keep them focused on coordinating the page.
- **Page sections:** group content that forms a meaningful part of one page. Extract sections when structure, behavior, or reuse justifies it.
- **Reusable UI components:** express confirmed shared presentation or interaction. Keep APIs small, typed, and accessible; avoid abstractions based only on possible future reuse.
- **Content/data:** keep content separate from presentation when it has independent ownership, reuse, or update needs. Validate external or user-controlled data at boundaries.
- **Utilities:** hold focused, framework-independent logic where practical. Avoid catch-all modules and hidden side effects.
- **Assets:** keep source assets in a discoverable location and reference them consistently. Preserve licenses and design provenance; avoid duplicating optimized/generated files without a need.

`src/app` contains the Next.js route entry points. Defer other concrete folders and component boundaries until the design structure is understood. Avoid cross-layer dependencies that make changes difficult to isolate.
