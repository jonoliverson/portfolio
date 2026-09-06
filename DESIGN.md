# Proposed portfolio design specification

Status: proposal for review; this document does not authorize application changes. Updated September 6, 2026. Values are recommended starting points for later implementation and browser validation.

## Visual direction

Combine Editorial Clarity with Precision Workspace: readable project narratives, deliberate spacing, and precise alignment of supporting information. Present Jonathan Oliverson as an experienced instructional designer who makes complex software and operational workflows understandable.

Preserve the existing name, Outfit typeface, navy/blue identity, full copy, page routes, project order, thumbnails, resume download, contact workflow, and course exports. Keep project IDs `project-01` through `project-04`, inbound fragment links, preview sources and titles, and the Problem → Solution → Outcome format. Do not invent results, metrics, or new marketing content.

Reduce the full-page decorative grid, layered gradients, repeated shadows, and nested bordered cards. Use a plain cool canvas, solid reading surfaces, and restrained panels for supporting details. All treatments below are proposals; recorded inconsistencies are not assumed to have been fixed.

## Typography

- Use `"Outfit", system-ui, sans-serif` throughout, explicitly including native buttons and form controls. Body weight 400; metadata 500; controls and subheadings 600; major headings 700.
- Body: `1rem`, line height `1.65`. Introductory text: `1.125rem`, line height `1.6`. Long-form reading width: approximately `60–68ch`.
- Page title: `clamp(2rem, 1.25rem + 2.5vw, 3.25rem)`, line height `1.15`, letter spacing `-0.02em`, maximum width about `26ch`. Give the existing long titles more room than the current `13–16ch` limits.
- Section/project heading: `clamp(1.5rem, 1.15rem + 1.2vw, 2.125rem)`, line height `1.25`. Subheading: `1.125rem`, line height `1.35`.
- Metadata: `0.875rem`, line height `1.5`. Short eyebrow labels: `0.8125rem`, weight 600, letter spacing `0.08em`. Reserve uppercase for short labels; use title case for narrative subsection headings.
- Avoid forced line breaks, fixed text heights, truncation, and line clamping. Let project titles and resume details wrap naturally.

The documented native-button font difference would be addressed through explicit font inheritance, with intentional size and weight overrides.

## Color

Retain ink `#1c2733`, muted text `#566473`, accent blue `#215b8f`, and deep navy `#163f63`. Use white reading surfaces, `#f4f6f8` page canvas, and occasional `#dfeaf4` informational highlights. No new project-specific theme colors or broad dark sections are proposed.

Use ink for narrative text, navy for important headings and primary actions, and blue for links and interaction feedback. Reserve muted text for secondary details. Decorative dividers may use `#d6dde5`; propose stronger `#748395` for essential control boundaries. Keep success `#1f6b45` and error `#b23b3b`, always accompanied by explanatory text.

For the documented experience-color conflict, propose company names in ink, dates in muted text, and section labels in navy. Use scoped component rules so broad paragraph styling does not accidentally override hierarchy. Verify actual foreground/background combinations during implementation.

## Layout

- Center the site in a shell with maximum width `70rem` and fluid side gutters. Preserve existing page and section order.
- Keep a wide-screen home hero split around `1.2fr 0.8fr`, with a `2rem` gap. Organize its supporting focus/work-style content with spacing and dividers instead of nested cards.
- Keep competencies and quick-access items aligned in grids. Present long resume content in readable sections without shortening the existing chronology or bullet points.
- Retain the contact page's direct-details/form relationship and the case studies' narrative/sidebar relationship.
- Use shrinkable grid tracks and `min-width: 0`. Keep visual order aligned with source order when layouts stack.

## Spacing

Use a shared scale of `4, 8, 12, 16, 24, 32, 48, 64px`, expressed in rem. Group related information more tightly than unrelated sections.

| Relationship | Proposed value |
| --- | --- |
| Page gutters | `clamp(1rem, 3vw, 2rem)` |
| Hero top/bottom padding | `clamp(2rem, 5vw, 4rem)` |
| Between major sections | `clamp(3rem, 5vw, 4rem)` |
| Between separate case studies | `clamp(3rem, 6vw, 5rem)` |
| Narrative/sidebar gap | `2rem` |
| Gallery/component gap | `1.5rem` |
| Panel padding | `1.5rem` desktop; `1rem` mobile |
| Between narrative subsections | `2rem` |
| Heading to paragraph | `0.75rem` |
| Between paragraphs | `1rem` |
| Metadata gap | `0.5rem` |

Apply spacing once at each section boundary rather than accumulating parent gaps and child margins.

## Navigation

Keep Home, About, Portfolio, Resume, and Contact in their existing order, with the name linking home. Propose a compact sticky desktop header with an opaque white surface, subtle divider, `0.75rem` top offset, and at most one light shadow. Remove backdrop blur. Propose `12px` corners at all widths instead of the documented desktop/mobile radius difference.

Use navy text, weight 600, and an underline for the actual current page. Preserve `aria-current="page"` only on a link representing that page. Keep keyboard focus visually distinct from hover and current-page state.

Keep mobile links visible and wrapping. At `40rem` and below, propose a static header so multiple navigation rows do not consume the reading viewport. Retain anchor visibility using actual header geometry where it is sticky.

Open decision: Case Studies currently has neither its own navigation item nor an active parent link. Do not silently add navigation, label Portfolio as the current page, or change routes. Its navigation identity requires an explicit design decision before that particular behavior is implemented.

## Buttons

Preserve existing action labels, destinations, and hierarchy. Use navy primary actions and outlined secondary actions, Outfit at `1rem`, weight 600, line height `1.25`, minimum height `44px`, padding `0.75rem 1rem`, and `8px` corners. Allow multiline labels and flexible height.

Primary: navy fill and white text; hover fill `#102d46`. Secondary: white fill, navy text, stronger control border; hover pale blue fill. Use color/border feedback instead of translating buttons on hover.

Keep anchors for navigation/downloads and buttons for preview opening, closing, and form submission. Preserve progress, disabled submission state, and success/error feedback. Do not nest controls or make every action primary.

The documented email difference remains recorded. Proposed future treatment: an underlined `mailto:` link on both Contact and Resume, preserving the displayed address. This is an interaction recommendation, not a current change.

## Cards and panels

Use one restrained container for each interactive project and selected supporting information. Organize ordinary narrative through headings, whitespace, and occasional dividers. Avoid a separate bordered box for every paragraph or subsection.

Propose opaque surfaces, `12px` panel corners, `8px` control corners, and no routine card shadows. Reserve depth primarily for the header and modal. Case-study sidebar groups may share one quiet surface while retaining separate Tools, Skills Demonstrated, and Project Preview sections.

Metadata chips should look informational, not clickable: `0.875rem` text, padding `0.25rem 0.625rem`, gap `0.5rem`, pale neutral fill, and pill corners. This shared treatment is the proposed resolution to the documented project/case-study chip spacing difference.

## Project gallery

Preserve all four projects, their order, full descriptions, metadata, images, preview bindings, and case-study fragment links. Recommend two columns above `48rem` and one column at or below that width, giving existing long titles more room than the current three-column layout.

Retain 16:9 thumbnail areas. Reduce decorative browser chrome and frame padding so the training samples carry the visual interest. Verify existing thumbnail cropping before choosing a fit mode; do not conceal meaningful image content.

Use `1.5rem` content padding on desktop and `1rem` on mobile. Keep preview triggers and case-study links distinct. Align footer actions where practical without fixed card heights or hidden copy. Keep launch affordances visible without hover, and preserve the course lightbox and source URLs.

## Case studies

Preserve every project article, title, summary, ID, and existing paragraph. Keep Problem → Solution → Outcome in that exact order, followed in source order by Tools, Skills Demonstrated, and Project Preview. Do not use tabs, accordions, carousels, or shortened versions of the narrative.

Above `56.25rem`, propose `minmax(0, 1fr) minmax(16rem, 20rem)` with a `2rem` gap and narrative text no wider than `68ch`. Place the project heading and summary above both columns. Separate projects with generous whitespace and a fine rule.

Use open narrative subsections and clear headings instead of nested bordered panels. A restrained pale blue Outcome background is optional if browser review shows it improves scanning; retain all wording and claims. Keep the sidebar visually secondary and non-sticky. Stack it after the complete narrative at narrower widths.

Preserve initial-load and subsequent fragment navigation. Recheck anchor alignment with zoom and wrapped headers. Heading levels should reflect page title, project title, and narrative subsection without changing visible text.

## Responsive behavior

Use these starting breakpoints, adjusting only if actual content needs it:

| Width | Proposed behavior |
| --- | --- |
| Above `56.25rem` / 900px | Split hero, case studies, and contact layout; up to three columns for short competency items. |
| Above `48rem` through `56.25rem` | Stack hero, contact, and case-study columns; retain two gallery columns. |
| At or below `48rem` / 768px | Single-column gallery and competency items; let metrics stack without truncation. |
| At or below `40rem` / 640px | Static wrapping header; `1rem` panel padding; naturally wrapping action rows. |

Verify at 320, 375, 768, 900, and 1280 CSS pixels, intermediate widths, and landscape. Avoid horizontal page scrolling. Let long addresses and tool names wrap. Text enlargement must not overlap controls or hide content.

Preserve viewport-aware preview sizing, safe-area padding, and landscape support. Small-screen dialogs should use available viewport height, keep Close reachable, and allow body scrolling. Avoid fixed iframe minimum heights that exceed the viewport. Course exports remain unchanged; test their responsive behavior separately from the outer portfolio.

## Accessibility

These are acceptance criteria for later implementation, not a statement that the current site has passed an audit:

- Maintain contrast of at least `4.5:1` for ordinary text, `3:1` for large text, and `3:1` for essential control boundaries/state indicators against adjacent colors.
- Start with a `3px solid #215b8f` focus ring and `3px` offset. Check every surface and add a contrasting separator where needed. Do not clip outlines.
- Preserve semantic landmarks, meaningful image alternatives, visible form labels, and announced submission status. Add a keyboard-visible skip link in the future implementation.
- Target `44 × 44px` minimum for standalone controls and navigation links. Inline text links remain naturally sized and underlined.
- Verify keyboard operation, 200% text resizing, and 400% zoom/reflow. Keep source, reading, and focus order aligned.
- For previews, move focus into the named dialog, contain keyboard focus, make background content inert, and restore focus to the trigger on close. Preserve visible Close, Escape handling, and course unloading so audio stops.
- Test keyboard entry into and exit from course iframes. Escape inside an iframe does not automatically reach the parent; retain a reachable close control and respect origin boundaries for any frame coordination.

Current gaps: the lightbox code has dialog attributes and parent Escape handling but no explicit focus placement, containment, or restoration. Reduced-motion support is also absent. Styling alone does not resolve these gaps.

## Motion and interaction

Use minimal functional motion: `150ms ease-out` transitions for color, background, and border. Avoid card lift, perpetual pulsing, decorative scrolling, and long staggered entrances. Content should be visible by default even if JavaScript fails or is unavailable.

Honor `prefers-reduced-motion: reduce`: disable decorative animation and reveal transforms, and use immediate anchor scrolling in CSS and JavaScript. Immediate scrolling is also acceptable in the default experience.

Preserve previews, links, form submission, and feedback. Hover must not reveal unique content, and interactive feedback needs a keyboard equivalent.

The documented status-dot/pulse color mismatch remains recorded. Propose a static accent-blue dot with the existing availability text, removing the competing animated color.

## Design tokens

Recommended future stylesheet values; this block is documentation only. Map existing aliases such as `--deep-teal` deliberately rather than performing an unrelated rename.

```css
:root {
  --font-sans: "Outfit", system-ui, sans-serif;
  --bg: #f4f6f8;
  --bg-alt: #eef2f5;
  --surface: #ffffff;
  --surface-strong: #ffffff;
  --ink: #1c2733;
  --muted: #566473;
  --accent: #215b8f;
  --accent-deep: #163f63;
  --accent-hover: #102d46;
  --highlight: #dfeaf4;
  --line: #d6dde5;
  --line-control: #748395;
  --success: #1f6b45;
  --error: #b23b3b;
  --focus: #215b8f;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --page-max: 70rem;
  --reading-max: 68ch;
  --page-gutter: clamp(1rem, 3vw, 2rem);
  --section-gap: clamp(3rem, 5vw, 4rem);
  --font-body: 1rem;
  --font-small: 0.875rem;
  --font-h1: clamp(2rem, 1.25rem + 2.5vw, 3.25rem);
  --font-h2: clamp(1.5rem, 1.15rem + 1.2vw, 2.125rem);
  --line-body: 1.65;
  --radius-control: 8px;
  --radius-panel: 12px;
  --radius-dialog: 16px;
  --radius-pill: 999px;
  --shadow-header: 0 4px 16px rgb(15 23 34 / 4%);
  --shadow-dialog: 0 18px 48px rgb(15 23 34 / 18%);
  --control-min: 2.75rem;
  --motion-fast: 150ms;
  --motion-ease: ease-out;
}
```

Keep breakpoint values in media queries; ordinary CSS custom properties cannot supply media-query conditions. Anchor offsets should reflect actual header geometry rather than assume a fixed header height.

## Do / Don't guidelines

| Do | Don't |
| --- | --- |
| Preserve Outfit, navy, blue, and cool neutrals. | Introduce unrelated fonts, neon accents, or decorative themes. |
| Use typography, alignment, and whitespace for hierarchy. | Give every paragraph a border, background, or shadow. |
| Preserve copy, project sequence, routes, anchors, and previews. | Rewrite claims, shorten stories, rename IDs, or replace exports. |
| Keep Problem → Solution → Outcome visible and sequential. | Hide core case-study content in tabs or accordions. |
| Test real content at zoom, narrow widths, and with a keyboard. | Assume desktop appearance establishes accessibility. |
| Track open decisions explicitly. | Treat undocumented inconsistencies as approved design rules. |
| Implement only after separate authorization. | Treat this document as permission to change application files now. |

**Preserved source audit and decision history**

Source review of the six top-level HTML pages and `styles.css`, dated September 6, 2026. These observations describe the current implementation; they do not establish a preferred style. No HTML, CSS, or behavior has been changed. Browser rendering has not been verified. Exported course interfaces are outside this review.

| Area | Existing variants and source evidence | Unresolved decision |
| --- | --- | --- |
| Navigation state | Home, About, Portfolio, Resume, and Contact mark their current navigation link with `.active` and `aria-current="page"`. `case-studies.html:19` includes the same navigation but marks no item active and provides no Case Studies item. | Whether case studies should indicate a parent section or have a separate navigation identity. |
| Direct email presentation | `contact.html:45` presents the email as a `.contact-value` span. `resume.html:57` presents the same address as a `mailto:` anchor. The span receives ink color and weight 500; the anchor has no dedicated site-wide inline-link styling. | Whether the same contact detail should share appearance and interaction across pages. |
| Button typography | The body uses Outfit (`styles.css:34`), but `.button` and `.project-open` do not set or inherit `font-family`. Anchor buttons inherit the body family, while native buttons can retain the browser's control font. Form fields and `.lightbox-close` explicitly use `font: inherit` (`styles.css:719` and `styles.css:825`). This affects Contact submit, case-study launch buttons, and Portfolio project content. | Which existing typography treatment should apply to native buttons; exact rendered differences require browser verification. |
| Experience text color | `.experience-company` declares ink color and `.experience-dates` declares deep teal, but the more specific `.card p` rule sets both to muted (`styles.css:169`, `styles.css:472`). Other paragraph labels such as `.card-number` inside cards are also overridden by `.card p`. | Whether the shared card paragraph color or the role-specific color declarations represent the intended hierarchy. |
| Header corners across widths | `.site-header` has a 12px radius (`styles.css:62`), changing to 28px at widths of 640px or less (`styles.css:913`). Cards retain their 18px radius. | Whether the larger mobile header radius is an intentional responsive variant. |
| Project metadata pills | `.case-study-tags li` uses padding `0.36rem 0.56rem` with a `0.45rem` container gap; `.project-meta li` uses `0.35rem 0.55rem` with a `0.4rem` gap (`styles.css:431` and `styles.css:671`). Both use the same pill shape, background, border, and font size. | Whether these small spacing differences between project metadata components are intentional. |
| Status animation color | The home status dot uses the accent color and an initial shadow based on RGB `33, 91, 143` (`styles.css:274`). Its `pulse` animation uses brighter RGB `30, 168, 245` (`styles.css:874`). | Whether the pulse should intentionally differ from the dot's base accent. |

The table preserves the original observations and questions. Proposed treatments now appear in the relevant specification sections above; no application fixes have been made. Case Studies navigation identity remains open. Source line numbers refer to the original audit and should be rechecked during implementation. Responsive and component differences may have been intentional; the proposal does not retroactively classify every variation as a defect.
