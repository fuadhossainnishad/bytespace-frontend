# ByteSpace Frontend

A responsive Next.js frontend implementation of the **ByteSpace New** design assessment, built from the provided Figma source of truth.

The project implements the primary landing experience along with the additional authentication, course discovery, course detail, learning, review, creator, and error-state screens represented in the provided design.

## Live Demo

**Production:**  
https://fuadhossainnishad-bytespace-fronten.vercel.app/

**Repository:**  
https://github.com/fuadhossainnishad/bytespace-frontend

## Design Source

The provided Figma file is the visual source of truth for the implementation:

https://www.figma.com/design/yz6q1YlNv7qfSTdXNfQjm0/Untitled?node-id=0-1&p=f&t=ppPG3FhiK6ae24vK

The implementation follows the confirmed layouts, visual hierarchy, spacing, responsive behavior, component structure, and interaction/navigation requirements represented in the design.

Detailed design documentation is maintained in:

```text
docs/design/README.md
```

---

## Project Overview

ByteSpace is implemented as a modern frontend application using the Next.js App Router.

The project focuses on:

- Responsive UI implementation
- Component-based architecture
- Reusable design primitives
- Route-aware navigation
- Maintainable feature boundaries
- Type-safe TypeScript
- Accessible semantic markup
- Production-oriented build and validation
- Documentation designed for both developers and coding agents

The implementation was developed with an emphasis on **engineering quality rather than a one-off visual mockup**.

---

## Implemented Screens

The following designed screens are implemented:

| Screen | Route | Status |
|---|---|---|
| Home | `/` | Complete |
| Login | `/login` | Complete |
| Register | `/register` | Complete |
| Search | `/search` | Complete |
| Course Details | `/courses/digital-asset` | Complete |
| Course Lessons | `/courses/digital-asset/lessons` | Complete |
| Course Reviews | `/courses/digital-asset/reviews` | Complete |
| Creator Profile | `/creators/purepearl-studio` | Complete |
| 404 Not Found | Invalid routes | Complete |

The landing page is the primary required assessment deliverable. The authentication and additional product screens extend the implementation to cover the relevant designed experience.

---

## Technology Stack

### Core

- **Next.js 16**
- **React**
- **TypeScript**
- **App Router**
- **CSS**

### Development

- ESLint
- TypeScript compiler
- npm
- Git
- Vercel

### Engineering Principles

The project follows:

- Strict TypeScript
- Feature-oriented component organization
- Explicit component boundaries
- Reusable UI primitives
- Semantic HTML where appropriate
- Responsive-first implementation
- Accessible interactive elements
- Minimal client-side state
- No unnecessary dependencies
- No speculative functionality

---

## Project Structure

```text
bytespace-frontend/
├── public/
│   └── assets/
│
├── src/
│   ├── app/
│   │   ├── courses/
│   │   ├── creators/
│   │   ├── login/
│   │   ├── register/
│   │   ├── search/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── auth/
│   │   ├── catalog/
│   │   ├── course/
│   │   ├── home/
│   │   ├── layout/
│   │   └── ui/
│   │
│   └── ...
│
├── docs/
│   ├── architecture/
│   ├── decisions/
│   ├── design/
│   ├── development/
│   └── reviews/
│
├── AGENTS.md
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

### Architectural organization

The application separates:

- **App routes** — route composition and page entry points
- **Feature components** — domain-specific UI such as home, catalog, course, and authentication
- **Shared UI** — reusable primitives such as buttons and search controls
- **Layout components** — shared header/footer and site-level structure
- **Assets** — static design assets under `public/assets`
- **Documentation** — durable architecture, design, workflow, decisions, and review information

---

## Component Architecture

The project uses reusable components instead of implementing each screen as one large page component.

Examples include:

```text
components/
├── auth/
│   ├── AuthPage
│   └── AuthShowcase
│
├── catalog/
│   ├── CourseCatalog
│   └── ...
│
├── course/
│   └── ...
│
├── home/
│   ├── Hero
│   ├── CategoryGrid
│   ├── CourseGrid
│   ├── CourseCard
│   ├── GrowthSection
│   ├── CreatorCta
│   └── ...
│
├── layout/
│   ├── Header
│   └── Footer
│
└── ui/
    ├── Button
    └── SearchBar
```

The goal is to keep route-level files focused on composition while reusable visual and behavioral concerns remain in components.

---

## Getting Started

### Requirements

Recommended environment:

- Node.js `20.9+`
- npm
- Git

### Clone

```bash
git clone https://github.com/fuadhossainnishad/bytespace-frontend.git
cd bytespace-frontend
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production build

```bash
npm run build
```

Creates the production build.

### Production server

```bash
npm run start
```

Runs the production build locally.

### Type checking

```bash
npm run typecheck
```

Runs TypeScript validation without emitting application code.

### Linting

```bash
npm run lint
```

Runs the configured ESLint checks.

---

## Validation

The implementation was validated through multiple levels of checks.

### Static validation

- TypeScript typecheck
- ESLint
- Production build
- `git diff --check`

### Runtime validation

HTTP smoke checks were performed against the implemented routes.

Browser smoke checks were also performed at:

- `1440px` desktop viewport
- `375px` mobile viewport

The checks covered:

- Route availability
- Navigation between implemented screens
- Responsive layout behavior
- Horizontal overflow
- Broken image detection
- Major Home page geometry
- Authentication navigation
- Custom 404 behavior

### Final audit

A focused assessment/SQA review was performed and documented at:

```text
docs/reviews/assessment-audit.md
```

The audit covered:

- Visual fidelity
- Navigation correctness
- Responsive behavior
- Accessibility observations
- Architecture/code quality
- Performance observations
- Documentation consistency
- Assessment-specific risks

---

## Responsive Design

The implementation supports the desktop and mobile layouts represented by the provided design.

The primary validation viewports were:

```text
Desktop: 1440px
Mobile: 375px
```

Responsive behavior is implemented through the application's CSS rather than maintaining separate desktop and mobile pages.

---

## Navigation

Implemented navigation includes:

- Header navigation
- Footer navigation
- Home search navigation
- Course card navigation
- Search result navigation
- Course detail → lessons/reviews navigation
- Login ↔ Register navigation
- Creator navigation
- Custom 404 handling

Only routes that have corresponding implemented experiences are exposed as functional application navigation.

---

## Design Fidelity

The Figma design is treated as the visual source of truth.

Implementation decisions are based on confirmed design information rather than assumptions.

Where an exact asset or design dependency was unavailable in the repository, the implementation avoids inventing external dependencies or unsupported design values.

Current documented limitations include:

### Course preview imagery

Some exact Figma course preview assets were not available among the local project assets. The implementation therefore uses the available project assets rather than introducing unverified external assets.

### Figma-specific fonts

The exact Satoshi and Clash Display font files referenced by the design were not available locally in the repository.

The existing project font strategy was retained instead of introducing an unverified external font dependency.

These limitations are documented in the assessment audit.

---

## Engineering Documentation

The repository contains a progressive-disclosure documentation structure intended to keep project knowledge discoverable without duplicating the source code.

### `AGENTS.md`

Repository-level engineering contract and agent instructions.

It defines:

- Project boundaries
- Engineering standards
- Agent workflow
- Validation requirements
- Documentation rules
- Design source-of-truth rules
- Scope-control principles
- Git/branch expectations

### Architecture

```text
docs/architecture/
```

Contains stable architectural principles and component boundaries.

### Design

```text
docs/design/README.md
```

Contains confirmed design knowledge and the Figma source-of-truth reference.

### Development

```text
docs/development/
```

Contains development workflow, validation information, and current project status.

### Decisions

```text
docs/decisions/
```

Contains architecture decision records for meaningful technical decisions.

### Reviews

```text
docs/reviews/
```

Contains assessment and quality-review findings.

---

## Development Workflow

The project uses feature branches rather than direct development on `master`.

Current implementation branch:

```text
feat/project-foundation
```

Target branch:

```text
master
```

Changes should be reviewed through a pull request before merging into the default branch.

### Recommended workflow

```bash
git checkout -b feat/<change>
```

Implement the change, then validate:

```bash
npm run typecheck
npm run lint
npm run build
git diff --check
```

Review the final diff:

```bash
git status
git diff
```

Commit using a focused conventional commit message:

```bash
git commit -m "feat: ..."
```

Push the feature branch:

```bash
git push origin feat/<change>
```

Then open a pull request against `master`.

---

## Git History

The implementation and assessment remediation were intentionally kept as separate commits.

The primary implementation was completed first, followed by a focused audit-remediation commit.

This keeps the engineering history easier to review and makes it clear which changes belong to the original implementation versus post-implementation quality corrections.

---

## Assessment Context

This repository was created for the **ByteSpace New — Jr. Software Engineer (Frontend)** assessment.

### Primary requirement

Implement the landing page from the supplied Figma design.

### Additional implementation

The project also implements:

- Login
- Register
- Search
- Course Details
- Course Lessons
- Course Reviews
- Creator Profile
- Custom 404

The implementation emphasizes production-oriented frontend engineering practices rather than only reproducing a static visual screenshot.

---

## Deployment

The application is deployed through Vercel.

Production deployment:

https://fuadhossainnishad-bytespace-fronten.vercel.app/

The application is configured as a Next.js application and is intended to be deployed using Vercel's Next.js build/runtime integration.

---

## Repository Status

Current development branch:

```text
feat/project-foundation
```

The working implementation has completed:

- Core landing page
- Authentication screens
- Additional designed screens
- Route/navigation implementation
- Responsive implementation
- Assessment audit
- Scoped audit remediation
- Production build validation

The remaining work, if any, should be limited to review feedback, deployment/submission requirements, or explicitly requested feature changes.

---

## License

This project was created as a software engineering assessment implementation.

Unless otherwise specified, project source code should be treated as assessment/project work rather than as a separately licensed open-source package.