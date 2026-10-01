# Component Boundaries

Use these boundaries as the application is designed. They describe responsibilities, not confirmed components; do not create components until the framework and design have been analyzed.

- **Routes/pages:** own URL-level composition and page-specific data needs. Keep them focused on coordinating the page.
- **Page sections:** group content that forms a meaningful part of one page. Extract sections when structure, behavior, or reuse justifies it.
- **Reusable UI components:** express confirmed shared presentation or interaction. Keep APIs small, typed, and accessible; avoid abstractions based only on possible future reuse.
- **Content/data:** keep content separate from presentation when it has independent ownership, reuse, or update needs. Validate external or user-controlled data at boundaries.
- **Utilities:** hold focused, framework-independent logic where practical. Avoid catch-all modules and hidden side effects.
- **Assets:** keep source assets in a discoverable location and reference them consistently. Preserve licenses and design provenance; avoid duplicating optimized/generated files without a need.

Choose concrete folders and component boundaries after the framework and Figma structure are inspected. Avoid cross-layer dependencies that make changes difficult to isolate.
