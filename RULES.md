# RULES.md — SbuForce Security website

Permanent design and development rulebook for this project. If you are an AI agent or developer making changes here, read this before touching any visual or content code. The goal of this file is to stop the site from drifting toward generic "AI startup" design over successive edits.

This file describes the system that is **already implemented**. When in doubt, match what exists rather than inventing something new.

---

## 1. Brand identity

- Company: **SbuForce Security** (legal name **SBUFORCE SECURITY (PTY) LTD**), founded 2020 by Miss Sikeza Stiwa, based in Meadowdale, Germiston, Gauteng.
- PSIRA registered, CIPC registered, B-BBEE compliant — a real, regulated South African private security company, not a startup. (Status only is shown on-site — see section 19; the underlying numbers are not.)
- Logo: a black-and-gold winged shield with an "S" monogram ([src/assets/sbuforce-logo.png](src/assets/sbuforce-logo.png)). The shield/wings motif is the only illustrative brand mark used anywhere. Do not introduce a second logo treatment, icon-as-logo, or wordmark-only variant.
- All company facts (names, numbers, registrations, services, addresses) live in **[src/lib/company.ts](src/lib/company.ts)** — the single source of truth, transcribed from the client's company profile. Never hardcode a phone number, email, registration number, or service description directly inside a component; import it from `company.ts`. If a new fact is needed and isn't in `company.ts`, that's a signal to ask the client for it — not to invent it.
- **`company.ts` holding a fact does not mean the site should show it.** The file is a factual record (it still keeps the real PSIRA/CIPC/tax registration numbers for administrative reference); components decide what's customer-facing. See section 18.

## 2. Design philosophy

Professional security firm, not generic security website. The site should read as if a design agency was briefed specifically on SbuForce Security's actual business — guarding, control room monitoring, CCTV/access-control installation, armed response — not as a security-industry template with the logo swapped in.

Every section must earn its place with real content from `company.ts`. If a section would be empty or generic without invented copy, cut the section instead of filling it.

## 3. Colour usage

Defined in [src/styles.css](src/styles.css) as OKLCH custom properties. Do not add new colours outside this system; do not use raw hex/rgb values in components.

| Token | Role | Value |
|---|---|---|
| `--primary` / `bg-primary` | Near-black graphite — used for hero, services, credentials, header, footer | `oklch(0.19 0.008 60)` |
| `--graphite` / `bg-graphite` | Slightly lighter dark, used for hover states on dark cards | `oklch(0.28 0.008 60)` |
| `--gold` / `text-gold`, `bg-gold` | The one accent colour — CTAs, rules, icons, eyebrows, active states | `oklch(0.735 0.128 79)` |
| `--cream` / `--background` | Warm off-white for light sections | `oklch(0.985 0.008 88)` |
| `--secondary` | Slightly deeper neutral for alternating light sections (e.g. Sectors) | `oklch(0.94 0.012 88)` |

Rules:
- **One accent colour only** — gold. It is used for CTAs, small rules/dividers, icon fills, eyebrow labels, hover states, and focus rings. Never introduce a second accent (no blue links, no green "success" colour, no red beyond the semantic `--destructive` token which isn't currently used on the marketing site).
- Sections alternate between dark (`bg-primary`) and light (`bg-background` / `bg-secondary`) for rhythm — see section 6. Don't add gradients between them beyond the single existing hero scrim.
- The only gradient in the codebase is the hero's photo-darkening overlay (`bg-gradient-to-r from-primary via-primary/85 to-primary/40` in [Hero.tsx](src/components/site/Hero.tsx)), which exists purely to keep hero text readable over a photo. Do not add decorative gradients anywhere else.

## 4. Typography

- Display font: **Oswald** (condensed, uppercase, tracked) — used for all headings (`h1`–`h4`, set globally in `styles.css`), the `eyebrow` utility, nav links, and buttons.
- Body font: **Barlow** — used for paragraph text, form inputs, everything else.
- Both loaded via Google Fonts `<link>` in [src/routes/__root.tsx](src/routes/__root.tsx) (`preconnect` + a single stylesheet request, weights 400–700 only). Don't add more weights/styles than are used.
- Heading sizes stay controlled: hero `h1` tops out at `text-6xl` on large screens; section `h2` at `text-4xl`. Don't scale headings up further for "impact" — the condensed uppercase Oswald treatment already reads as strong at moderate sizes.
- The `eyebrow` utility class (`text-[0.72rem] uppercase tracking-[0.22em] text-gold font-display font-semibold`) precedes every section heading as a small label (e.g. "Our Services", "Compliance"). Keep using it — don't replace it with icon+label combos.

## 5. Spacing

- `.shell` utility = page content container: `max-width: 78rem`, centered, `padding-inline: 1.25rem`. All section content sits inside `.shell`, full-bleed backgrounds sit on the `<section>` itself.
- Section vertical rhythm: `py-20 sm:py-24` (Hero uses `py-20 sm:py-28 lg:py-36` since it's the primary landing block). Keep this consistent — don't tighten some sections and loosen others.
- The `gold-rule` utility (a 3.5rem × 3px gold bar) follows every `eyebrow` + heading pair as the section's visual anchor. Use it under H2s and H3s that introduce a new content block; don't use it decoratively elsewhere.

## 6. Layout

Current section order and treatment (top to bottom in [src/routes/index.tsx](src/routes/index.tsx)), chosen to match customer content priority — who they are, what they do, who they protect, why to trust them, then contact:

1. **Hero** — dark, full-bleed photo
2. **About** — light, split two-column (copy + sticky control-room photo)
3. **Services** — dark, two service groups with a featured/secondary hierarchy + installations split block
4. **Sectors ("Who We Protect")** — secondary (deeper neutral), tag-style list of real customer segments + coverage note
5. **Trust ("Why Clients Trust Us")** — dark, a real-numbers stat band + guard-vetting points + a compact trust-badge row + leadership credit (see section 19)
6. **FAQ** — light, real questions answered from facts that exist elsewhere on the site
7. **Contact** — light, form + contact-detail cards

This dark/light/secondary alternation is intentional and load-bearing for visual rhythm — preserve it when adding or reordering sections. Layouts already vary (full-width grids, two-column splits, sticky image) rather than repeating one `[icon][heading][text][button]` block; keep that variation when adding sections instead of defaulting to a generic feature-card grid.

There used to be a separate "Compliance" section and a "Credentials" section (registrations displayed as a 6-card paperwork grid). They were merged into the single **Trust** section — two consecutive sections both answering "why should I trust you" read as padding, and the old Credentials grid printed raw registration numbers (see section 18). Don't re-split Trust back into two sections without a reason beyond "more sections feels more thorough."

**Services architecture** ([Services.tsx](src/components/site/Services.tsx)): the flat 9-card grid was replaced with two named groups from `serviceGroups` in `company.ts` — "Guarding & Armed Response" (the core offering the H1 promises: guards, patrols, guard house, armed response) as the **primary** group in a looser 2-column grid of individually-bordered cards, and "Monitoring & Access Control" (control room, CCTV, alarms, electric fence, access control) as the **secondary** group in the original tighter flush grid. This is a real distinction, not decoration — guarding is what "Security guard services you can trust" is actually about; monitoring/technology supports it. If a new service is added, decide which group it actually belongs to rather than appending a third group by default. The separate "Installations, Maintenance and Repairs" block stays a third, visually distinct block (it's a different kind of offering — one-off technical work, not an ongoing guarding/monitoring service).

**Sectors reframing** ([Sectors.tsx](src/components/site/Sectors.tsx)): the section answers "who do you protect," not just "here is a tag list" — the heading and one-line intro were rewritten to speak to a visitor recognising their own site type, but the actual list of segments is still the client's real, unedited list from `company.ts`. Don't add segments the client hasn't confirmed they serve.

**FAQ** ([FAQ.tsx](src/components/site/FAQ.tsx)): every question's answer is a paraphrase of a fact that already exists elsewhere in `company.ts` (`faqs` export) — armed response inclusion, guard vetting, control room hours, CCTV installation vs. monitoring, PSIRA/CIPC status, how to get a quote. Do not add a question whose answer would require inventing a policy, a number, or a promise SbuForce hasn't actually made (e.g. no "what's your response time guarantee" unless a real SLA number exists). Uses the shadcn `Accordion` primitive from [src/components/ui/accordion.tsx](src/components/ui/accordion.tsx) — this is the component-quality-section example of a justified `ui/` primitive use (real expand/collapse behavior, not just styling), so don't reimplement an accordion by hand elsewhere. `FAQPage` JSON-LD is emitted from the same `faqs` array in [index.tsx](src/routes/index.tsx) — keep both in sync by only ever editing `company.ts`.

## 7. Component design

- Corners: `rounded-sm` only, everywhere (buttons, cards, inputs, images). No `rounded-xl`/`rounded-2xl`/`rounded-full` pill shapes except where a control is inherently circular (there currently are none on the marketing site).
- Borders over shadows: cards use `border border-border` (light) or `border border-white/12` (dark), not drop shadows. The only shadow in the codebase is a small `shadow-lg` on the WhatsApp FAB, justified because it's a floating fixed element that needs to lift off the page.
- Dividers/accents use a solid 2px gold left-border (`border-l-2 border-gold`) on pull-quotes and tag items, not decorative lines elsewhere.

## 8. Buttons

Two variants only:
- **Primary**: solid `bg-gold text-gold-foreground`, uppercase, `tracking-[0.14em]`, `font-display`, `rounded-sm`, hover = `bg-gold/85`. Used for "Request a Quote" everywhere it appears (hero, header, mobile menu, contact form).
- **Secondary**: transparent with a border (`border-white/25` on dark, `border-input` on light), same type treatment, hover = border/text turns gold. Used for "View Our Services", "Chat on WhatsApp", "Call {number}".

No glow, no box-shadow on buttons, no scale-on-hover, no gradient fills. Colour change plus a small `-translate-y-0.5` lift on hover (see section 14) — nothing larger than a 2px lift.

Every "Request a Quote" / "View Our Services" style CTA carries a small trailing `ArrowUpRight` icon (`size-3.5`–`size-4`, `inline-flex items-center gap-1.5/2`); phone-call buttons carry a `Phone` icon instead (a directional arrow doesn't make sense for "call this number"); the WhatsApp button keeps its `MessageCircle` icon. This was a deliberate, consistent addition across every instance of each button — if you add a new CTA of an existing variant, give it the matching icon; don't leave some buttons iconless and others not.

## 9. Cards

Flat, bordered, generously padded (`p-6`–`p-7`), one icon (Lucide, `size-5`/`size-6`, gold) top-left where an icon adds real meaning (service type, compliance checkmark) — not decoratively on every block. Sectors uses text-only tag cards with a left gold border instead of icons, which is correct: not every card needs an icon. Bordered cards (Trust's compliance points, Sectors tags, the primary Services group) lift slightly and their border tints gold on hover; the flush secondary Services grid does not (see section 14) — still no shadows. The trust-badge chips in Trust are compact `rounded-sm` pills-that-aren't-pills (square corners) with an icon + short label — see section 19.

## 10. Navigation

- A non-sticky top utility bar (`lg:` and up only — hidden on mobile/tablet) sits above the header: office phone, primary email, short address, on a slim `bg-graphite` strip. It scrolls away with the page; only the header below it is sticky. This exists so contact info doesn't have to be crammed into the main nav row, and so it appears once per page load rather than being repeated in the sticky chrome on every scroll. Real data only (`company.phones[2]`, `company.emails[0]`, `company.address.short`) — no social icons, because there are no confirmed social profiles for this client; don't add placeholder/fake social links to fill the space.
- Sticky header, `bg-primary/95` with backdrop blur, single row: logo + wordmark, anchor links (desktop only, `lg:flex`), phone number, "Request a Quote" button.
- The header is borderless/flat at the top of the page and picks up a hairline border + a soft shadow (`shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]`) once the page is scrolled more than 8px (tracked via a `scroll` listener in `SiteHeader`). This is the only scroll-position-driven style change on the site — don't wire up more of these without a reason.
- Desktop nav links get an animated gold underline on hover (`after:` pseudo-element growing from `w-0` to `w-full`), not a colour change alone.
- Mobile: hamburger toggles a full-width dropdown panel with the same links stacked, plus a call button and quote button. The panel is always mounted and animates open/closed via the `nav-collapse`/`nav-collapse-open` utilities (a CSS `grid-template-rows: 0fr → 1fr` transition — see section 14), not conditional mounting. It carries `aria-hidden` and the links get `tabIndex={-1}` while closed so keyboard users can't tab into a collapsed menu. No off-canvas drawer, no overlay/scrim needed since it's a simple in-flow panel.
- Nav links are anchors to in-page sections (`#about`, `#services`, etc.) since this is a single-page site. If a dedicated route is ever added, update both `SiteHeader` and `SiteFooter` link lists together.

## 11. Hero section

One `h1`, one supporting paragraph, two CTAs max (primary + secondary), one real-data strip (Experience / Control Room hours / Location, all from `company.ts`), one photo. No floating stat cards, no badge clusters, no carousel. The sub-bar below the hero (armed-response note + office number) is the only additional element, and it's informational, not decorative.

The eyebrow above the `h1` reads "PSIRA Registered Security Company" — a status, not "PSIRA No. 3132804 | Reg No. 2020/232382/07". Never put a raw registration number back in the hero (see section 18). The "Experience" stat is `yearsOperating` from `company.ts` — computed from the founding year at render time (`new Date().getFullYear() - Number(company.founded)`), never a hand-typed number that will silently go stale.

The `h1` is set as two stacked lines (`<span className="block">`), not one run-on sentence: a plain-colour line followed by a gold line — the exact same real wording as before, just given more visual weight through the line break and colour split rather than through new copy. If the headline wording ever changes, keep the two-line/two-colour structure rather than collapsing back to one inline sentence.

## 12–13. Images & photography

- Three photos currently used, all specific to the actual business: a guard at an industrial access gate ([hero-guard.jpg](src/assets/hero-guard.jpg)), an operator at a control-room monitoring wall ([control-room.jpg](src/assets/control-room.jpg)), a technician installing CCTV on an electric-fenced perimeter ([installations.jpg](src/assets/installations.jpg)). None are generic stock (no suits-in-a-boardroom, no stock police cars, no guns, no anonymous skyscrapers).
- Every image ships a specific, descriptive `alt` attribute describing what's actually happening in the photo — not the filename, not "security image."
- Treatment: `rounded-sm`, `object-cover`, explicit `width`/`height` to prevent layout shift, `loading="lazy"` on everything below the fold.
- If new photography is added, it must be sourced or approved by the client and depict the real service being described (guarding, patrol, control room, installation) — never a stand-in stock image chosen because it "looks like security."

## 14. Animations

Three motion primitives, all one-shot (nothing loops or re-triggers). No animation library is installed or needed — don't add Framer Motion or similar for a static content site like this.

1. **Scroll reveal** — [Reveal.tsx](src/components/site/Reveal.tsx) + [use-reveal.ts](src/hooks/use-reveal.ts). `<Reveal>` wraps a single block (a heading group, a form, an image); `<RevealGroup>` wraps a grid/list whose direct children carry the `reveal-item` class and an inline `style={{ "--reveal-i": i }}` for a staggered cascade (~70ms per item, capped by grid size — never hand-tune this per section). Both use one `IntersectionObserver` per instance (`threshold: 0.15`), fire once, then disconnect — elements never re-hide on scroll-up. The CSS itself lives in [styles.css](src/styles.css) as the `reveal` / `reveal-visible` / `reveal-item` utilities: opacity 0 + `translateY(1.25rem)` → opacity 1 + `translateY(0)` over 600–700ms with an ease-out curve. Every section from About down uses this for its heading block and its content block(s) — the Hero is exempt (see below) and the footer is exempt (it's reached by scrolling past everything else, so there's nothing left to "reveal").
2. **Hero entrance** — the hero is already in view on load, so it doesn't use the scroll observer. Its content wrapper plays a single `hero-in` CSS keyframe (fade + translateY) on mount instead. The WhatsApp FAB does the same with a `fab-in` keyframe, delayed ~1s so it doesn't compete with the hero for attention on first paint.
3. **Count-up stats** — [Counter.tsx](src/components/site/Counter.tsx) + [use-count-up.ts](src/hooks/use-count-up.ts). Animates a number from 0 to a real target once it scrolls into view (reuses `useReveal` as the trigger, then a `requestAnimationFrame` loop with an ease-out cubic curve over ~1.2s). Used for the Hero's Experience/Control-Room figures and the Trust section's stat band (years operating, sectors served, services offered). **Every target passed to `<Counter>` must be a real, exact, derived value** (`yearsOperating`, `sectors.length`, a `.length` off a real array) — never a rounded-up marketing figure, never a suffix like "+" that implies "more than" when the number is exact. If you can't derive the number from `company.ts`, it doesn't get a counter.

Reduced motion applies to counters too, via the same hook checking `prefers-reduced-motion` directly (not just the CSS block below) — it jumps straight to the final value instead of animating.

Micro-interactions layered on top of the existing flat/bordered component language (don't add more without a reason):
- Buttons (`Request a Quote`, `View Our Services`, `Chat on WhatsApp`, the WhatsApp FAB): `hover:-translate-y-0.5` alongside the existing colour change — a 2px lift, not a bounce.
- Bordered cards (Trust's compliance points, Sectors tags, the primary "Guarding & Armed Response" service cards): `hover:-translate-y-1 hover:border-gold/40` on top of the existing background/colour hover. The **secondary "Monitoring & Access Control" service grid is the one exception** — its cards are flush against each other using a `gap-px` hairline-divider trick, so lifting them on hover would break the seamless grid illusion; it keeps the background-colour-only hover it always had.
- About/Services photography: wrapped in an `overflow-hidden` container with `hover:scale-105 transition-transform duration-500` for a subtle zoom — common on editorial sites, not a gimmick.
- Anchor-nav jumps still rely on the global `scroll-behavior: smooth`.

**Reduced motion is mandatory, not optional.** `styles.css` has a `@media (prefers-reduced-motion: reduce)` block that (a) collapses every transition/animation duration to ~0 globally and (b) forces `.reveal`/`.reveal-item` to `opacity: 1; transform: none` outright, so content is never stuck invisible for a user who has motion reduction on and never triggers the observer path. Any new animation must be covered by this block — don't add motion that only checks `prefers-reduced-motion` in JS while the CSS ignores it.

Still forbidden regardless of the above: parallax, looping/bouncing/spinning icons, scroll-jacking, autoplay carousels, and animating more than a heading block + one content block per section (no per-word text animations, no animating every icon individually).

## 15. Responsive behaviour

Mobile-first Tailwind (`sm:`/`lg:` breakpoints). Grids collapse to 1 column on mobile, 2–3 on `sm`/`lg`. Test at minimum 375px, 768px, 1024px, 1440px before shipping a layout change. No horizontal scroll is currently present — keep it that way (watch long unbroken strings like emails/URLs, which already use `break-all`).

## 16. Accessibility

Already in place, keep it that way for anything new:
- Every section has an `id` and is reachable via anchor nav; header nav has `aria-label="Main"`, mobile nav `aria-label="Mobile"`, footer nav `aria-label="Footer"`.
- All icons are `aria-hidden="true"` (decorative) — meaning is always carried by adjacent text, never by the icon alone.
- Form inputs have real `<label htmlFor>` pairs and `autoComplete` where relevant.
- Focus states on inputs: `focus:border-gold focus:ring-2 focus:ring-gold/30`. Any new interactive element needs a visible focus style — don't rely on browser default outline removal.
- Mobile menu button has `aria-expanded` and `aria-controls`.

## 17. SEO

- Root route sets a default title/description/OG/Twitter-card meta and favicon ([src/routes/__root.tsx](src/routes/__root.tsx)); the home route overrides with page-specific title/description and a `SecurityService` JSON-LD schema block ([src/routes/index.tsx](src/routes/index.tsx)) built from `company.ts` fields.
- Any new route must set its own `head()` title + description — don't rely on the root defaults alone.
- Keep meta descriptions natural, factual, and under ~160 characters. No keyword stuffing.

## 18. Content

`company.ts` is the only place copy originates from. When editing site copy:
- Quote or closely paraphrase the client's own wording (mission/vision statements are copied near-verbatim from the company profile) rather than rewriting into generic marketing voice.
- Never add statistics, testimonials, client counts, "X years protecting Y clients" type claims, awards, or partnership logos unless they appear in `company.ts`.
- Service descriptions stay concise and specific (what the service actually is), not benefit-speak ("peace of mind guaranteed").

**Never add information merely because it exists in the company profile. Only surface information that improves the customer's understanding, trust, or conversion.** The profile (`company.ts`) is allowed to hold more than the site shows — a company profile document is written for compliance/administrative purposes, a website is written for a visitor deciding whether to call. Before adding a field from `company.ts` to a component, ask "does this help someone answer who/what/who-do-you-protect/where/why-trust/how-to-contact" (section 3 of the original brief) — if not, it doesn't belong on the page even though it's true and even though it's in the file.

**Administrative information — company registration numbers, CIPC numbers, tax/VAT numbers, PSIRA registration numbers, director IDs, internal reference numbers — must not be displayed unless there is a clear customer-facing reason.** Concretely on this site: `company.regNo`, `company.cipcRegNo`, and `company.psiraNo` are never rendered as raw values in any component. What a customer sees instead is a short status via `trustBadges` (e.g. "PSIRA Registered", "CIPC Registered Company") — the fact of registration, not the paperwork. If a future request asks to "add the registration number back," point back to this rule and ask what specific customer problem the number solves; if there's a genuine one (e.g. a client's procurement department needs it to onboard SbuForce as a supplier), give it to them via the contact form/email, not a public page.

## 19. Security-industry credibility

Trust is built from three real, non-administrative elements, all in the **Trust** section ([Trust.tsx](src/components/site/Trust.tsx)):
1. **Compliance** — the guard screening/vetting standards from the profile (S.O.S. grading, ID verification, training, polygraph testing). This is operational substance, not paperwork — keep it.
2. **`trustBadges`** — a short row of status marks (PSIRA Registered, PSIRA Grade B, CIPC Registered Company, Tax Compliant, B-BBEE Compliant), styled as small `rounded-sm` chips (never `rounded-full` pills — see section 7), each with a plain-text line underneath: "Full registration and compliance documents are available on request." This is the elegant version of section 18's rule — status as a trust signal, documents available on request rather than printed.
3. **Leadership** — the two named directors, name + role only. Their direct cell/email numbers are real data in `company.ts` (`management[].cell/.email`) and are NOT duplicated here; the same people's numbers are already the primary contact channels in Header/Hero/Footer/Contact (`company.phones[0]` is the Managing Director's own cell — that's how this business actually operates, not a placeholder). Showing name+role here is about visible, accountable leadership, not a second contact list.

## 20. Conversion strategy

"Request a Quote" is the single primary CTA, repeated consistently (header, hero, mobile menu, contact section) — don't introduce competing primary CTAs with different labels. Secondary paths (call, WhatsApp, email) are always available but visually subordinate. The WhatsApp FAB ([WhatsAppFab.tsx](src/components/site/WhatsAppFab.tsx)) is the only persistent floating element on the page — don't add a second floating widget (chat bot, cookie banner, promo popup) without a real business reason.

## 21. Code quality

- One component per section in [src/components/site/](src/components/site/), named for the section (`Hero`, `About`, `Services`, ...), composed in [src/routes/index.tsx](src/routes/index.tsx).
- shadcn/ui primitives live in [src/components/ui/](src/components/ui/) — generic, unbranded; the marketing site currently uses plain HTML elements styled with Tailwind utilities directly rather than these primitives (simpler for static marketing content). Only reach for a `ui/` primitive when you need its behavior (e.g. `Accordion`, `Dialog`); don't convert existing plain markup to shadcn components without a functional reason.
- No secrets or API keys in frontend code. This site currently has no backend calls — the contact form submits via `mailto:` link generation, not an API.
- Tailwind v4 CSS-first config lives entirely in [src/styles.css](src/styles.css) (no `tailwind.config.js`). Add new design tokens via the `@theme` / `:root` blocks there, not inline arbitrary values scattered through components, unless it's a true one-off.

## 22. Explicitly forbidden

**Do not introduce generic AI design patterns.** Concretely, do not introduce any of the following:

- Glowing buttons, neon gradients, glassmorphism
- Floating decorative blobs or shapes
- Gradients other than the one hero photo scrim
- Rounded-xl/2xl/full "pill" UI beyond genuinely circular controls
- Heavy drop shadows / soft-UI ("neumorphism") styling
- Generic SaaS layout patterns (giant centered hero + logo cloud + 3-tier pricing table — this is not a SaaS product)
- Fabricated statistics, testimonials, review scores, client logos, awards, or "X years experience" claims not present in `company.ts`
- Generic security slogans ("YOUR SAFETY IS OUR PRIORITY", "PROTECTING WHAT MATTERS MOST") not grounded in the client's actual wording
- Scroll-jacking, parallax, auto-playing carousels, bouncing/spinning icon animation
- Icon-per-sentence UI — icons only where they carry real meaning
- Emoji in UI copy
- AI-generated illustration style (isometric blobs, gradient mesh backgrounds, abstract 3D shapes)
- Stock photography unrelated to the client's actual services (generic suits, generic CCTV clip-art, police cars, firearms, unrelated skyscrapers)
- A second accent colour alongside gold
- Multiple competing primary CTAs
- Raw registration/CIPC/tax/PSIRA numbers or director IDs anywhere on the page (section 18) — status badges only
- Dumping a fact onto the page just because it exists in `company.ts` (section 18) — every piece of content must answer one of: who are you / what do you solve / what services / who do you protect / where / why trust you / how to contact / how fast

## 23. Rules for future AI-assisted development

- Read this file and [CLAUDE.md](CLAUDE.md) before making visual changes.
- Before adding new copy, check whether the fact already exists in `company.ts`. If it doesn't exist and isn't verifiable, ask rather than invent.
- Before adding *any* field from `company.ts` to a page — even one that's already there — check it against the content-priority question list in section 22. "It's true and it's in the file" is not sufficient justification (section 18).
- Before adding a new color, spacing value, or font, check whether an existing token in `styles.css` already covers the need.
- When adding a new section, pick the next background in the dark/light/secondary alternation (section 6) rather than defaulting to white.
- Run `npm run build` and `npm run lint` before considering a change done. As of the last audit, `npm run build` is clean; `npm run lint` reports only pre-existing Prettier formatting nits (auto-fixable with `npm run lint -- --fix` or `npm run format`) and standard shadcn `react-refresh/only-export-components` warnings in `src/components/ui/` — no functional errors.
- If a change makes any section look like it could belong to any other company, or to a generic AI-generated template, revert and redo it — that is the one hard failure condition for this project.
- If a change makes the page read like a printout of the company profile (every registration number, every internal detail, restated in full) rather than a website written for a prospective customer, that is the other one — see section 18.
