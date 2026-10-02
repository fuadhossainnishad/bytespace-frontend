# Engineering Contract

## Purpose and boundaries

Build and maintain the Bytespace frontend with clear, accessible, performant, and reliable user experiences. Work only within this repository and the scope of the current task. Do not add application behavior, files, or dependencies unrelated to that scope.

## Agent Execution Protocol

For every task:

1. Read `AGENTS.md` first.
2. Check the current branch and worktree before making changes.
3. Identify the smallest relevant scope.
4. Read only the documentation and source files relevant to that scope.
5. Reuse established project patterns before introducing new abstractions.
6. Inspect the Figma source when the task requires design verification.
7. Make the smallest coherent implementation.
8. Run the applicable project validation.
9. Inspect the final diff and worktree.
10. Report changes, validation results, and material limitations.
11. Do not commit or push unless explicitly requested.

### Progressive disclosure

Do not load the entire repository or all documentation by default.

Use this order:

`AGENTS.md → relevant docs → relevant source → deeper investigation only when required`

### Uncertainty

If information is available in the repository, documentation, Figma source, or project configuration, inspect it before asking the user.

Never invent requirements, design values, architecture decisions, implementation details, or validation results.

### Scope control

Do not fix unrelated issues unless they:

- directly prevent the requested work,
- create a concrete correctness, security, accessibility, or build problem, or
- are explicitly requested.

Record non-blocking findings instead of expanding scope.

### Validation

Use the project's existing scripts and configuration to determine applicable checks.

Do not claim a check passed unless it was actually executed successfully.

### Completion

A task is complete when:

- the requested behavior is implemented,
- applicable validation passes,
- the final diff is coherent, and
- no known blocking issue remains.

Do not continue refactoring solely to make the implementation "better" after the task is complete.

## Working rules

- Read this file, check the branch and worktree, and inspect only the relevant files before changing anything. Consult the relevant docs rather than loading the whole repository.
- `master` is the intended protected default branch. Do implementation work on focused working branches and merge changes through pull requests; never commit or push directly to `master`. Verify the configured remote and host protection settings rather than assuming them.
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

## Design Source of Truth

The ByteSpace UI must follow the approved Figma design.

- Canonical design reference: `docs/design/README.md`
- Figma source: https://www.figma.com/design/yz6q1YlNv7qfSTdXNfQjm0/Untitled?node-id=0-1&p=f&t=ppPG3FhiK6ae24vK
- Inspect the relevant Figma frame/component before implementing or materially changing UI when possible.
- Do not invent design facts when the source is unknown.
- Record confirmed design knowledge in `docs/design/README.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
