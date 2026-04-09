# Design Review Results: Kany Dev — All Pages

**Review Date**: 2026-04-09  
**Routes Reviewed**: `/` · `/about` · `/services` · `/projects` · `/contact`  
**Focus Areas**: Visual Design · Responsive/Mobile · Accessibility · Micro-interactions/Motion · Consistency  
**Review Method**: Live browser inspection (localhost:5173) + accessibility audit (axe-core 4.11.1) + static code analysis

---

## Summary

Kany Dev is a visually ambitious portfolio with a strong brutalist/dark aesthetic, effective use of GSAP animations, and excellent desktop presentation. However, several critical gaps threaten usability and inclusivity: the site is **completely unnavigable on mobile** (no hamburger menu), has **3 confirmed WCAG AA violations** from the automated audit, and **multiple pages bypass the design token system** with raw Tailwind opacity utilities — making the light theme largely non-functional. Addressing the mobile nav and accessibility issues would have the highest immediate impact.

---

## Issues

| # | Issue | Criticality | Category | Location |
|---|-------|-------------|----------|----------|
| 1 | No mobile navigation menu — nav links are `hidden md:flex` with no hamburger toggle, making the site entirely unnavigable on mobile | 🔴 Critical | Responsive | `src/components/Navbar.tsx:14-27` |
| 2 | About page bio renders markdown asterisks literally (`**Kany Dev**`) instead of bold — content bug | 🔴 Critical | Visual Design | `src/pages/About.tsx:18` |
| 3 | Social icon links in `Contact.tsx` have no `aria-label` — 3 links with no accessible text, confirmed by audit | 🔴 Critical | Accessibility | `src/components/Contact.tsx:27-29` |
| 4 | No `prefers-reduced-motion` support — all GSAP animations (hero, preloader, scroll reveal, page transitions) run unconditionally | 🟠 High | Micro-interactions | `src/App.tsx:86-99`, `src/components/Hero.tsx:17-44`, `src/components/Preloader.tsx:11-35` |
| 5 | Footer text `text-white/40` (#666666 on #000000) has contrast ratio of **3.65:1**, failing WCAG AA (requires 4.5:1) — confirmed by audit | 🟠 High | Accessibility | `src/App.tsx:153` |
| 6 | `focus:outline-none` on all form inputs removes browser focus indicator without any custom replacement | 🟠 High | Accessibility | `src/pages/ContactPage.tsx:62,66,72,82` |
| 7 | Light theme toggle is visually broken — most pages use raw `text-white/60`, `text-white/80`, `text-white/40` instead of `text-muted` design token, so text stays white in light mode | 🟠 High | Consistency | `src/pages/About.tsx:17`, `src/pages/Services.tsx:37,48`, `src/components/Contact.tsx:15` |
| 8 | GSAP horizontal pinned scroll in Projects section (`w-[400vw]`, `x: "-300vw"`) not adapted for mobile — likely broken/unscrollable on small screens | 🟠 High | Responsive | `src/components/Projects.tsx:41-57,67` |
| 9 | Hero heading `text-7xl md:text-[8rem]` (112px on mobile) risks overflow on narrow viewports; no `overflow-hidden` guard on section | 🟠 High | Responsive | `src/components/Hero.tsx:51` |
| 10 | `ThemeToggle` swaps Moon/Sun icon without any `aria-live` or `sr-only` status text — screen readers cannot detect the state change | 🟠 High | Accessibility | `src/components/ThemeToggle.tsx:15-22` |
| 11 | Navbar "MENU" button links to `/contact` — the label is misleading (users expect a menu, not a page jump); should open a mobile nav or be renamed "Contact" | 🟡 Medium | Consistency | `src/components/Navbar.tsx:31` |
| 12 | No active link state in navbar — keyboard and screen reader users cannot tell which page they're on (`aria-current="page"` is missing) | 🟡 Medium | Accessibility | `src/components/Navbar.tsx:14-27` |
| 13 | `glass-card:hover` uses hardcoded `rgba(255,255,255,0.07)` instead of a CSS variable or design token | 🟡 Medium | Visual Design | `src/index.css:117-120` |
| 14 | `glitch-hover` animation uses hardcoded hex values `#3B82F6` and `#facc15` in CSS instead of referencing `--app-accent` | 🟡 Medium | Visual Design | `src/index.css:99-101` |
| 15 | `glitch-hover` plays `infinite` — continuous animation is visually distracting and also violates `prefers-reduced-motion` (see #4) | 🟡 Medium | Micro-interactions | `src/index.css:98-101` |
| 16 | `brutal-card` has hardcoded `background-color: white; color: black` — always white regardless of theme toggle; won't adapt in dark mode variations | 🟡 Medium | Consistency | `src/index.css:122-128` |
| 17 | One Unsplash image URL fails to load with `ERR_BLOCKED_BY_ORB` in both Home and Projects pages — broken project image | 🟡 Medium | Consistency | `src/pages/ProjectsArchive.tsx:30`, `src/components/Projects.tsx:24` |
| 18 | AITerminal has a fixed height `h-64` with no responsive adjustment — can feel cramped on small screens or over-padded on large ones | 🟡 Medium | Responsive | `src/components/AITerminal.tsx:59` |
| 19 | Contact email inconsistency: `hello@kanydev.com` in `Contact.tsx` vs `hello@kanydev.ai` in `ContactPage.tsx` | 🟡 Medium | Consistency | `src/components/Contact.tsx:22` vs `src/pages/ContactPage.tsx:25` |
| 20 | `<select>` in contact form has `appearance-none` (native arrow removed) but no custom chevron/icon provided | 🟡 Medium | Visual Design | `src/pages/ContactPage.tsx:72` |
| 21 | `Scene3D` container div is not `aria-hidden="true"` — the Three.js canvas is detected as an unlabeled landmark region by the accessibility tree | 🟡 Medium | Accessibility | `src/components/Scene3D.tsx:87` |
| 22 | `prefers-reduced-motion` is ignored and custom cursor GSAP listener always runs, even on mobile where the cursor div is `hidden` | ⚪ Low | Micro-interactions | `src/App.tsx:31-57` |
| 23 | Scroll indicator `SCROLL TO ANALYZE` uses class `vertical-text` which is not defined in `index.css` — text will not be vertical | ⚪ Low | Visual Design | `src/components/Hero.tsx:88`, `src/index.css` |
| 24 | `index.html` has no `lang` attribute on `<html>` — while axe passes this, the page is in French and should declare `lang="fr"` | ⚪ Low | Accessibility | `index.html` |

---

## Criticality Legend

- 🔴 **Critical**: Breaks functionality or violates accessibility standards (must fix immediately)
- 🟠 **High**: Significantly impacts user experience or design quality
- 🟡 **Medium**: Noticeable issue that should be addressed
- ⚪ **Low**: Nice-to-have improvement

---

## Next Steps

**Immediate (Critical):**
1. Add a mobile hamburger menu to `Navbar.tsx` — this is the most impactful fix
2. Fix the markdown rendering bug in `About.tsx` line 18 (remove asterisks or use `<strong>`)
3. Add `aria-label` to all 3 icon-only social links in `Contact.tsx`

**Short-term (High priority):**
4. Add `prefers-reduced-motion` guard to all GSAP animations (`gsap.matchMedia()` or CSS `@media (prefers-reduced-motion: reduce)`)
5. Increase footer text opacity (use `text-white/60` minimum, or add to `.light-theme` override)
6. Replace `focus:outline-none` with a custom `focus:ring-2 focus:ring-primary` on all form inputs
7. Replace all `text-white/*` hardcoded classes with `text-muted` / `text-main` tokens to fix light theme

**Medium-term:**
8. Test and fix the GSAP horizontal scroll on mobile (consider switching to a vertical scroll or a swipeable carousel for mobile)
9. Add `aria-current="page"` to the active nav link using `useLocation()`
10. Add an `aria-hidden="true"` to the `Scene3D` container div
11. Add `aria-live="polite"` to `ThemeToggle` with a screen-reader-only status text
12. Define `vertical-text` CSS utility or replace with a Tailwind `[writing-mode:vertical-rl]` class
13. Fix the blocked Unsplash image URL (replace with a working one)
14. Standardize the contact email across both components
15. Add a custom chevron to the `<select>` element

---

## Strengths Worth Preserving

- ✅ Excellent preloader animation — polished and brand-consistent
- ✅ GSAP `ScrollTrigger` reveal animations are smooth and performant
- ✅ Design token system (`--app-*` CSS variables) is well-structured — just needs more consistent usage
- ✅ Page transition overlay is a nice touch
- ✅ Magnetic interaction on CTAs adds premium feel
- ✅ Three.js particle background is subtle and effective
- ✅ Custom cursor with mix-blend-mode difference is elegant
