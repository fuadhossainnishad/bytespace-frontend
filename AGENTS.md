# Engineering Contract

## Purpose and boundaries

Build and maintain the Bytespace frontend with clear, accessible, performant, and reliable user experiences. Work only within this repository and the scope of the current task. Do not add application behavior, files, or dependencies unrelated to that scope.

## Working rules

- Read this file, check the branch and worktree, and inspect only the relevant files before changing anything. Consult the relevant docs rather than loading the whole repository.
- `master` is the intended protected default branch. Do implementation work on focused working branches and merge changes through pull requests; never commit or push directly to `master`. The repository has no remote or protection configuration yet.
- Make the smallest coherent change. Avoid unrelated edits, speculative abstractions, giant components, and unnecessary dependencies.
- Before adding architecture, components, or dependencies, confirm the need in the actual framework, design, and task. Keep architecture proportional to the application.
- Preserve explicit boundaries between routes, page sections, reusable UI, content/data, utilities, and assets. Keep components focused, composable, and accessible; share code when reuse is real, not hypothetical.
- Use strict, specific TypeScript types. Avoid `any`, unsafe casts, non-null assertions, and other shortcuts; contain unavoidable uncertainty at a narrow boundary and explain it.
- Preserve design fidelity: use analyzed design references, tokens, typography, assets, and responsive behavior. Do not invent design facts when the source is unknown.
- Treat dependencies and assets as deliberate choices. Prefer existing project capabilities; assess bundle, licensing, security, and performance impact before adding more.
- Follow established formatting, naming, and patterns. Keep behavior deterministic, code readable, coupling low, and changes testable.
- If requirements, source material, or behavior are uncertain, inspect available evidence and state what remains unknown. Ask only when the uncertainty blocks a sound implementation; never present guesses as facts.

## Validation and documentation

- After changes, run applicable project checks and inspect the final diff. Do not claim checks that were not run. If no applicable checks exist, say so.
- Add or update documentation only for durable knowledge. `AGENTS.md` explains agent workflow; `docs/architecture` explains stable boundaries; `docs/design` records analyzed design knowledge; `docs/decisions` contains meaningful ADRs; `docs/development/status.md` records current state. Git history records changes.
- Keep docs and agent reports concise and useful. Report what changed, validation performed, and material limitations.
