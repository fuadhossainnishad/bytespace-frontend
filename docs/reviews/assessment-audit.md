# ByteSpace Assessment Audit

**Audit date:** 2026-10-02
**Reviewed revision:** `9c923e3` (`feat: complete ByteSpace assessment screens`)
**Scope:** The initial assessment covered the nine requested routes read-only. This update records only the user-authorized remediation and its verification.

## Executive Summary

All nine routes render from the production build. The invalid-route response uses the custom 404, course cards link to detail content only when that content exists, and the Home desktop section positions and total height now match the measured Figma frame. The 404 typography, Home search-bar desktop typography/position, and favicon metadata are also corrected. Typecheck and build pass; lint reports 31 existing `no-img-element` warnings.

The Course Details preview imagery still differs because the repository has no matching local lesson-preview assets. The inspected Figma fonts Satoshi and Clash Display are not available as local assets or project dependencies, so the global font strategy remains unchanged. Login/Register, search filtering, and several visible controls remain static prototype UI; no backend behavior was specified, so these are recorded as limitations or risks rather than assumed backend defects.

## Remediation Update — 2026-10-02

| Finding | Status | Verified result |
| --- | --- | --- |
| D-01 course-card destinations | Resolved | Only “Build Digital Asset,” the course with an implemented detail route, is an anchor on Home, Search, and Creator Profile. Other course cards remain presentational cards. |
| D-02 404 typography | Resolved | At 1440px Chrome reports a 480px numeral and 72px heading; at 375px the responsive rules produce a 202.5px numeral and 33.75px heading with no horizontal overflow. |
| D-03 Home desktop geometry | Resolved | At 1440px Growth starts at y=3120, Creator CTA at y=4580, Testimonials at y=5068, Footer at y=5852, and document height is 6377px, matching the measured Figma frame. Corrections are scoped to desktop widths at or above 1101px. |
| D-04 Course Details preview imagery | Unresolved: assets unavailable | Reviewed every existing local raster asset. None matches the four Figma lesson-preview scenes; catalog thumbnails remain unchanged rather than substituting unrelated art. |
| D-07 Home search-bar desktop typography/position | Resolved | At 1440px input and button compute to 18px and the bar has a 72px top margin. At 375px existing overrides remain 12px, 14px, and 28px respectively. |
| D-08 favicon | Resolved | Root metadata declares the existing `/assets/bytespace-symbol.svg`; that URL returns HTTP 200 and is emitted as the page icon link. |
| D-09 font mismatch | Investigated; unchanged | No Satoshi or Clash Display files are present under `public`/`src` or installed as project dependencies. No global font change was made. |

No maintained browser smoke command or test framework exists. A temporary HTTP and Chrome DevTools Protocol smoke script exercised every route at 1440px and 375px; all route responses were expected, all pages had no horizontal overflow, and completed local images had non-zero dimensions. The only error response was the intentionally invalid route returning the custom 404.

## Assessment Scope & Acceptance Criteria

The approved design is the Figma file linked from `AGENTS.md` and `docs/design/README.md`. Desktop source frames are 1440px wide. The requested routes were checked for response status, route links, expected content, local images, and 375px responsive layout. Mobile Figma frames were not available, so mobile visual fidelity is not asserted.

| Screen | Route | Result |
| --- | --- | --- |
| Home | `/` | 200; sections render; desktop geometry matches measured Figma frame after remediation |
| Login | `/login` | 200; route and cross-link present; submit is static |
| Register | `/register` | 200; route and cross-link present; submit is static |
| Search | `/search` | 200; cards render; query does not affect results |
| Course Details | `/courses/digital-asset` | 200; detail content renders |
| Course Lessons | `/courses/digital-asset/lessons` | 200; lesson content renders |
| Course Reviews | `/courses/digital-asset/reviews` | 200; review content renders |
| Creator Profile | `/creators/purepearl-studio` | 200; profile content renders |
| 404 Not Found | invalid route | 404; custom not-found content renders |

## SQA Findings

### Confirmed defects

#### D-01 — Course cards do not have course-specific detail destinations (resolved; original observation)

- **Severity:** High
- **Location:** `src/components/home/CourseGrid.tsx`; `src/components/catalog/CourseCatalog.tsx`; `/courses/digital-asset`
- **Observation:** All six distinct Home courses and all 18 Search cards link to `/courses/digital-asset`. That page always displays “Build Digital Asset,” regardless of the clicked course title.
- **Impact:** Five Home course cards and unrelated Search results open details for a different course. This makes the course journey misleading and fails a course-specific navigation expectation.
- **Recommended direction:** Add explicit destinations/content mapping when course detail requirements exist; until then, link only cards with a matching implemented detail page or clearly constrain the prototype data.

#### D-02 — 404 typography is materially smaller than the approved frame (resolved; original observation)

- **Severity:** High
- **Location:** `src/app/feature-pages.css` (`.not-found-number`, `.not-found-content h1`); Figma frame `1:2897`
- **Observation:** Figma specifies a 480px “404” numeral and 72px heading. Desktop CSS caps the numeral at 440px and sets the heading to 48px. The implementation therefore wraps the heading later and gives the page a different visual hierarchy.
- **Impact:** This is a prominent first-view mismatch on a required assessment screen.
- **Recommended direction:** Align the desktop typography and line wrapping to the measured Figma values, then retain responsive overrides for smaller widths.

#### D-03 — Home’s lower sections and total page height drift from Figma (resolved; original observation)

- **Severity:** Medium
- **Location:** Home composition in `src/app/page.tsx`; section sizing in `src/app/globals.css`; Figma Home frame `1:3314`
- **Observation:** At 1440px, the browser document is 6,138px high versus the 6,377px Figma frame. Measured section starts include Growth at y=3,060 vs Figma y=3,120; Creator CTA at y=4,462 vs y=4,580; Testimonials at y=4,950 vs y=5,068; and Footer at y=5,689 vs y=5,852.
- **Impact:** The lower Home page accumulates vertical spacing differences and ends 239px earlier than the source frame.
- **Recommended direction:** Compare the affected section heights and gaps to their source-frame bounds; preserve the current responsive layout while correcting desktop spacing.

#### D-04 — Course Details preview images do not match the Figma “Sneak Peak” assets (unresolved; no matching local assets)

- **Severity:** Medium
- **Location:** `src/components/course/CoursePage.tsx` (`AboutContent`); Figma frame `1:2122`
- **Observation:** The implementation reuses `course-figma.png`, `course-digital-asset.png`, `course-money.png`, and `course-big-data.png`. The approved frame shows four distinct lesson-preview images (writing/workstation/mobile-device scenes), which differ from the reused catalog thumbnails in the rendered page.
- **Impact:** A recognizable asset mismatch in the Course Details content area weakens fidelity even though the hero video still matches.
- **Recommended direction:** Use the corresponding approved local lesson-preview assets if available; do not substitute unrelated catalog art.

#### D-05 — Search submits a query but results ignore it

- **Severity:** Medium
- **Location:** `src/app/search/page.tsx`; `src/components/catalog/CourseCatalog.tsx`
- **Observation:** `/search?q=unlikely-query` returns the same catalog cards as `/search`; the query is not read or used to filter the static list.
- **Impact:** The search form accepts text and navigates, but does not fulfill the apparent search action.
- **Recommended direction:** Confirm whether the assessment expects client-side filtering or only the static Figma screen. If filtering is in scope, derive results from the query and show an empty state; do not invent a backend contract.

#### D-06 — Auth fields are not in a form and submit controls are inert

- **Severity:** Medium
- **Location:** `src/components/auth/AuthPage.tsx` lines 84–98, 109–115
- **Observation:** Login/Register fields are in a `div role="group"`, not a `<form>`. The primary button is `type="button"` with no handler, fields are not required, and social buttons have no handlers.
- **Impact:** Enter does not submit, native form validation is absent, and all submit/social controls are no-ops. Labels and autocomplete are present, but form semantics are missing.
- **Recommended direction:** If auth behavior becomes in scope, use a semantic form and connect it to a defined auth flow. Keep social actions disabled or clearly unavailable until providers are specified.

#### D-07 — Desktop search-bar typography differs from its Figma component (resolved; original observation)

- **Severity:** Medium
- **Location:** `src/components/ui/SearchBar.tsx`; `src/app/globals.css` (`.search-bar input`, `.search-bar .button`); Figma node `1:3345`
- **Observation:** The Figma Home search component uses 18px Satoshi for its placeholder and button. The implementation sets both to 14px and uses the global DM Sans family. The Home screenshot also places the bar about 32px above the Figma position.
- **Impact:** The primary Home action is visibly smaller and vertically tighter than the approved component.
- **Recommended direction:** Match the Figma type scale and search-bar position at desktop, then verify the 375px override.

#### D-09 — Global font families do not match the inspected Figma text styles

- **Severity:** Medium
- **Location:** `src/app/globals.css:1` and the `--display-font` / `--body-font` tokens; inspected Figma nodes `1:3345` and `1:2897`
- **Observation:** Inspected Figma styles specify Satoshi for body/labels, Poppins for headings, and Clash Display for the wordmark. The app uses DM Sans and Poppins, including Poppins for the wordmark.
- **Impact:** Typeface metrics differ across screens and can change widths, line breaks, and visual identity. D-02 and D-07 show concrete examples.
- **Recommended direction:** Confirm the available/licensed font assets and align type families at the shared token layer; verify page-specific line wrapping after the change.

#### D-08 — Favicon request returns 404 (resolved; original observation)

- **Severity:** Low
- **Location:** `public/` and `src/app/layout.tsx`
- **Observation:** HTTP check of `/favicon.ico` returns 404. Headless Chrome recorded the corresponding failed-resource message on Home and invalid-route visits. No other project-page runtime exceptions were observed.
- **Impact:** Browser tabs/bookmarks lack the expected icon and the request adds a console/network error.
- **Recommended direction:** Add a project icon through the existing Next.js metadata asset convention when branding requirements are available.

### Likely risks / static prototype controls

#### R-01 — Several controls look interactive but do not change state

- **Severity:** Medium
- **Location:** `src/components/home/CourseFilters.tsx`; `src/components/catalog/CourseCatalog.tsx`; `src/components/course/CoursePage.tsx`
- **Observation:** Home topic pills all link to `#courses`; category cards open generic Search without selecting a category; Search toolbar/category controls and pagination are spans; review-rating chips are spans; the course “Share” pill and video play glyph are `aria-hidden` presentation. None filters, paginates, shares, or plays video.
- **Impact:** Users and evaluators may treat these visual controls as working actions. The `Share` label is additionally hidden from assistive technology.
- **Recommended direction:** Confirm required interactions. Implement them with native buttons/links and accessible state only where behavior is specified; otherwise render them as clearly static labels.

#### R-02 — Search/category data is hardcoded and repeated

- **Severity:** Low
- **Location:** `src/components/home/CourseGrid.tsx`; `src/components/catalog/CourseCatalog.tsx`; `src/components/auth/AuthShowcase.tsx`
- **Observation:** The same six course records are duplicated across Home and Catalog, and Search creates 18 cards by repeating the six-item array three times. Several visible statistics and course details are literals.
- **Impact:** Titles, images, and destinations can drift; Search looks populated but does not represent independent records.
- **Recommended direction:** If content remains shared or grows, define one typed static catalog source with explicit route/content fields. Avoid introducing data layers solely for this fixed prototype.

#### R-03 — Footer newsletter has no subscription behavior

- **Severity:** Low
- **Location:** `src/components/layout/Footer.tsx`; `src/components/ui/SearchBar.tsx`
- **Observation:** Compact mode is an email input with a “Search” button and no action/backend. Native submission returns to the current path with an email query; it does not subscribe.
- **Impact:** The label and copy promise a newsletter action that is not performed.
- **Recommended direction:** Confirm whether this is intentionally a visual-only assessment element. If functional behavior is required, define a subscription endpoint and clear success/error states.

## Figma Fidelity Findings

Figma was directly inspected for Home (`1:3314`, hero `1:3315`, search bar `1:3345`), Login (`1:1248`), Register (`1:1097`), Search (`1:1410`), Course Details (`1:2122`), Course Lessons (`1:2338`), Course Reviews (`1:2570`), Creator Profile (`1:3000`), and 404 (`1:2897`).

The original 404/Home/search-bar mismatches (D-02, D-03, D-07) are resolved as verified in the remediation section. Course Details preview assets still differ (D-04). The primary color tokens (`#003BE2`, `#D4FB20`) and major feature-page dimensions are close: Search is 3,855px vs 3,853px; Course Details 2,717px vs 2,717px; Lessons 2,884px vs 2,883px; Reviews 3,450px vs 3,449px; Creator Profile 2,138px vs 2,136px; and 404 1,485px vs 1,485px. Login and Register are both 1,024px high, matching their source frames.

Inspected Figma text styles use Satoshi for body/labels, Poppins for headings, and Clash Display for the wordmark. The app imports DM Sans and Poppins globally and uses Poppins for the wordmark. This family substitution is a likely source of width/wrapping differences; exact font parity is not established from the app screenshots beyond the specific nodes in D-02 and D-07.

## Navigation/Functional Findings

**Confirmed working:** Home Search submits to `/search`; Header Sign In/Join Us route to Login/Register; auth cross-links point to the opposite auth route; course tabs route to About/Lessons/Reviews; course creator links route to Creator Profile; creator Follow routes to Login; footer Browse links route to Search; invalid paths return HTTP 404 with the custom page.

**Confirmed incorrect at the original audit:** D-01; this is resolved by linking only cards with the implemented matching detail page. D-05; search query has no effect. R-01 lists visual controls that are static. The Footer platform/legal items without routes are plain text, so they do not create broken placeholder links.

## Responsive Findings

Headless Chrome checked every implemented route plus an invalid route at 1440×900 and 375×812. At 375px, `document.documentElement.scrollWidth` equaled `clientWidth` on every route; at 1440px, it also equaled the layout viewport after scrollbar width was accounted for. No horizontal overflow or completed-but-broken `<img>` elements were found. Mobile page heights were: Home 8,871px; Login 899px; Register 889px; Search 8,537px; Details 3,253px; Lessons 3,438px; Reviews 3,649px; Creator 4,031px; and 404 1,429px.

No approved mobile Figma frames were found in the inspected source. These checks establish no horizontal overflow at 375px, not pixel-level mobile fidelity or full interaction usability.

## Accessibility Findings

### Confirmed strengths

- `<html lang="en">`, route-level headings, semantic navigation/main/footer landmarks, visible labels tied to auth inputs, autocomplete values, Search labels, and descriptive alt text for the learning hero/course instructor are present.
- Focus-visible outlines are defined globally; reduced-motion preferences disable smooth scrolling and shorten transitions.
- Decorative imagery is commonly given empty alt text or hidden from assistive technology.

### Issues

- **Severity: Medium | Location:** `src/components/auth/AuthPage.tsx` | **Observation:** Auth controls lack form semantics, required-field validation, and a working submit action (D-06). **Impact:** Keyboard submission and native validation are unavailable. **Recommended direction:** Use a semantic form once the expected auth flow is defined.
- **Severity: Medium | Location:** `src/components/course/CoursePage.tsx` (`.course-share`) | **Observation:** Share is a visible label but `aria-hidden` and not interactive (R-01). **Impact:** It suggests an action visually while being absent to keyboard and screen-reader users. **Recommended direction:** Implement an accessible button when share behavior is specified, or present it as non-control text.
- **Severity: Low | Location:** `src/components/layout/Header.tsx` | **Observation:** The menu toggle exposes `aria-expanded` but has no `aria-controls` relationship to the navigation element. **Impact:** Some assistive-technology users get less context about which region is expanded. **Recommended direction:** Add a stable navigation ID and reference it if this menu remains stateful.

No automated WCAG/axe audit or keyboard-only/manual screen-reader test was available; contrast ratios were not measured.

## Runtime/Validation Findings

- **HTTP route smoke at original audit:** All intended routes returned 200; an invalid path returned 404 and contained the custom not-found message. The missing favicon at that time was resolved by metadata in the remediation.
- **Headless Chrome:** No uncaught JavaScript exceptions were observed. The remediation smoke loaded all routes at 1440px and 375px; all completed images had non-zero natural dimensions. The only error response was the intentionally invalid-route 404.
- **Typecheck:** `npm run typecheck` passed.
- **Lint:** `npm run lint` passed with 0 errors and 31 `@next/next/no-img-element` warnings.
- **Diff whitespace:** `git diff --check` passed after remediation; the report file was also checked for trailing whitespace.
- **Production build:** `npm run build` passed after remediation. The sandboxed attempt received empty output from Next.js’s TypeScript child process; rerunning outside the sandbox passed.
- **Browser tooling:** No Playwright/Cypress package or maintained smoke command exists. System Chrome was driven via the DevTools Protocol; no test dependency was added.

## Architecture Findings

### Verified strengths

- App Router pages are separated by route; `CoursePage` shares the common course hero, tabs, and page shell across Details/Lessons/Reviews.
- Reusable Home UI is split into page sections, and shared controls/cards are in `src/components`.
- Internal routes use Next.js `Link`; the single stateful Header client component owns its menu state.
- The layout is small and dependency-free beyond Next/React; no new client-side state library or API abstraction has been added.

### Concerns

- **Severity: Low | Location:** Home/Catalog/Auth showcase course arrays | **Observation:** Course records are duplicated and Search manufactures repeated rows (R-02). **Impact:** Shared mock values and destinations can diverge, and repeated results appear to be distinct records. **Recommended direction:** Consolidate only if content maintenance or course-specific routes become a real requirement.
- **Severity: Low | Location:** `src/components/course/CoursePage.tsx` | **Observation:** Content arrays and page markup live together in one module. **Impact:** This is manageable at current scale but makes course-specific content harder to supply independently. **Recommended direction:** Keep the current shared page boundary; extract typed content only when additional courses need distinct content.
- **Severity: Low | Location:** `src/components/catalog/CourseCatalog.tsx` | **Observation:** A boolean `creator` prop switches catalog labels, counts, categories, and pagination. **Impact:** The API is still small, but it combines page modes. **Recommended direction:** Retain unless a third distinct catalog mode appears; then use a specific variant/content config.

## Code Quality Findings

- TypeScript is strict; no explicit `any`, unsafe type assertions, or non-null assertions were found in `src` during the static scan. Route metadata and the `CourseTab` union are explicit.
- **Severity: Low | Location:** `src/app/not-found.tsx` and `src/app/layout.tsx` | **Observation:** The custom 404 renders with the root title “ByteSpace | Learn Something New” rather than a not-found-specific title. **Impact:** Browser tab and search/share metadata are less descriptive on an error route. **Recommended direction:** Add route-specific not-found metadata if supported by the installed Next.js version.
- **Severity: Low | Location:** `package.json` | **Observation:** No unit/component/e2e test script is configured; only lint, typecheck, build, dev, and start scripts exist. **Impact:** Regression coverage for route links and stateful controls is manual. **Recommended direction:** Add automated tests after expected interactive behavior is defined; avoid testing unspecified backend flows.
- No unsafe HTML injection, secrets, API credentials, or unvalidated server-side data boundaries were observed. There is no backend/API integration in this frontend to audit.

## Performance Findings

- **Severity: Medium | Location:** Home hero and shared image components; `npm run lint` output | **Observation:** Lint reports 31 raw `<img>` warnings. The above-fold Home student image is among them. **Impact:** The build does not apply Next Image optimization to these elements, which may increase transfer/LCP cost; no Lighthouse or Core Web Vitals measurement was run. **Recommended direction:** Measure before converting; prioritize large above-fold photographs and retain direct `<img>` for small SVG/decorative assets when optimization is not beneficial.
- **Severity: Low | Location:** `src/app/globals.css:1` | **Observation:** Google Fonts are loaded through CSS `@import` (DM Sans/Poppins); this creates a third-party font request and does not use Next font loading. **Impact:** Font loading depends on an external request and can affect render timing/privacy. **Recommended direction:** Measure and choose a self-hosted/Next-supported font strategy if the design font/license and deployment requirements are confirmed.
- **Severity: Low | Location:** `public/assets/growth-student.png`, `public/assets/hero-cone-two.png` | **Observation:** These two files appear unreferenced by source; avatar and partner scan misses are dynamic filename construction, not missing files. All browser-loaded local images resolved. **Impact:** The two assets may be stale, though their purpose/provenance is not established. **Recommended direction:** Confirm intended use and provenance before any cleanup.

## Documentation Findings

- **Severity: Medium | Location:** `docs/development/status.md:26–50` | **Observation:** Status says Login/Register are not implemented, calls the landing page the current endpoint, and lists Figma verification and PR prep as future work, although all nine assessment routes exist and the branch is submitted. **Impact:** A new contributor or reviewer gets an inaccurate project state. **Recommended direction:** Update durable project status in a separate documentation task.
- **Severity: Low | Location:** `docs/architecture/component-boundaries.md`; `docs/development/validation.md` | **Observation:** The architecture document says Figma structure is not analyzed and validation says browser/responsive/visual/asset checks remain unselected, while design notes and this audit show inspected frames and actual checks. **Impact:** Guidance and evidence disagree. **Recommended direction:** Reconcile these docs when documentation edits are permitted.
- **Severity: Low | Location:** `docs/design/README.md` | **Observation:** The screen table records the six newer frames but omits Home/Login/Register, which were also found in the same Figma file (Home `1:3314`, Login `1:1248`, Register `1:1097`). **Impact:** Canonical design documentation does not cover all implemented assessment screens. **Recommended direction:** Add confirmed source frame summaries in a future docs-only update.

## Critical/High Priority Gaps

- **No unresolved Critical or High findings** from the original audit. D-01 and D-02 are resolved; see the remediation table.
- **No Critical issues** were identified in this frontend-only audit.

## Medium/Low Priority Gaps

- **Medium:** D-04 Course Details preview images differ because matching local assets are unavailable; D-05 search ignores `q`; D-06 auth form controls are static; D-09 global font families differ from inspected Figma styles; R-01 visible controls are static; accessibility gaps described above; image/font performance risks and stale documentation.
- **Low:** R-02 duplicated/mock catalog data; newsletter has no backend; 404 title uses the root title; no automated test suite; two apparently unused local assets.

## Verified Strengths

- Nine intended paths are represented and route responses are correct, including real HTTP 404 behavior.
- Main route links, auth cross-links, course tabs, creator route, and footer browse destinations resolve to existing pages.
- Tested desktop/mobile layouts have no horizontal overflow; all browser-loaded local images resolved.
- Course-related page heights closely match Figma, course hero video asset/geometry is present, and the primary color tokens match.
- Strict TypeScript and lint complete successfully; the repository has no dependency changes for this work.

## Recommended Next Actions

1. Supply the approved Course Details lesson-preview assets if they become available in the repository; keep current local imagery until then.
2. Decide which mock controls and auth/newsletter actions are required by the assessment; avoid implying functionality that is intentionally absent.
3. Refresh stale project/design/validation docs and add automated tests only for confirmed interactions.
4. Measure image/font performance before changing the existing image strategy.

## Evidence / Commands Used

- Read `AGENTS.md`, `docs/design/README.md`, architecture/development docs, `package.json`, route/component source, `tsconfig.json`, `eslint.config.mjs`, and `next.config.ts`.
- Figma metadata/screenshots inspected: Home `1:3314`/Hero `1:3315`/SearchBar `1:3345`; Login `1:1248`; Register `1:1097`; Search `1:1410`; Course Details `1:2122`; Lessons `1:2338`; Reviews `1:2570`; Creator Profile `1:3000`; 404 `1:2897`.
- `git status --short --branch`; `git log -1 --oneline`; `git diff --check HEAD`.
- `npm run typecheck` — passed.
- `npm run lint` — passed, 31 `@next/next/no-img-element` warnings.
- `npm run build` — passed. The sandboxed run received empty output from Next.js’s TypeScript child process; rerunning outside the sandbox passed.
- `git diff --check` — passed after remediation.
- HTTP and Chrome DevTools Protocol smoke checks against the production server at 1440×900 and 375×900 for all routes: 200 for each intended route, custom 404 for invalid route, no horizontal overflow, no broken images, one supported detail destination per course list, and icon asset 200.
- Browser section geometry and computed styles were compared against Figma: Home section positions/document height match the 1440px measurements; 404/search bar desktop values and responsive mobile overrides were verified.
- No Playwright/Cypress package or maintained browser smoke script exists; these checks used a temporary `/tmp` script and added no dependency.
