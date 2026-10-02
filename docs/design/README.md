# Design Documentation

## Source of Truth

The provided Figma design is the visual source of truth for the ByteSpace implementation.

**Figma:**
https://www.figma.com/design/yz6q1YlNv7qfSTdXNfQjm0/Untitled?node-id=0-1&p=f&t=ppPG3FhiK6ae24vK

Detailed design tokens, typography, assets, responsive behavior, component patterns, and section mapping are recorded as source frames are inspected.

## Documentation Rules

* Record only details confirmed from the Figma source.
* Do not invent design values, components, behaviors, or assets.
* Keep implementation-specific knowledge in the codebase and its relevant engineering documentation.
* Treat Figma as the visual reference when validating UI fidelity.
* Update this document as design analysis is completed and confirmed.

## Confirmed Screens

The following approved frames were inspected for the current implementation. Each is 1440px wide; responsive behavior was adapted in code and checked at 375px because these inspected frames provide desktop layouts.

| Screen | Figma frame | Confirmed structure |
| --- | --- | --- |
| Search | `1:1410` | 360px blue search hero; category and filter rows; six rows of three course cards; pagination; footer begins at y=3328. |
| Course Details | `1:2122` | 957px blue course hero with a 720×479 video preview and enrollment panel; 1233px About section. |
| Course Lessons | `1:2338` | Shared course hero and enrollment panel; 1400px Lessons section with module list and 55% progress display. |
| Course Reviews | `1:2570` | Shared course hero and enrollment panel; 1966px Reviews section with rating summary and four review cards. |
| Creator Profile | `1:3000` | 592px blue profile hero; filter/sort row; six course cards in two rows; footer begins at y=1611. |
| 404 Not Found | `1:2897` | 960px blue hero with oversized gradient 404, explanatory heading, and Back to Home action. |

The course video still and play glyph are local source assets from frame `1:2221`; course thumbnails, creator avatar, and student avatars reuse existing local assets.
