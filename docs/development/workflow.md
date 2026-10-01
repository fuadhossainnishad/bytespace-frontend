# Development Workflow

Use this lifecycle for focused changes:

1. **Inspect** — read `AGENTS.md`, check branch/worktree state, and inspect the relevant source and documentation.
2. **Plan** — identify the smallest coherent change, affected boundaries, and applicable validation. Resolve blocking uncertainty before assuming facts.
3. **Implement** — work on a focused working branch; keep the diff scoped and follow established patterns. `master` is the intended protected default branch.
4. **Validate** — run the checks applicable to the changed code and inspect the diff for correctness and unrelated edits. See [Validation](validation.md).
5. **Review** — summarize behavior, validation, and any known gaps. Open a pull request with context and verification results.
6. **Commit** — make clear, focused commits on the working branch. Changes reach `master` through pull requests; never commit or push directly to it. The repository has no remote or protection configuration yet.

Do not create extra branches for unrelated work or include drive-by changes. Keep pull requests reviewable and describe any validation that could not be run.
