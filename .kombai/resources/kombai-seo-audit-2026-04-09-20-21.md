# SEO Audit Report — Kany Dev Portfolio

**URL Audited**: http://localhost:5173/ (Home Page)  
**Date**: 2026-04-09  
**Overall SEO Score**: **71/100** (Lighthouse)  
**Method**: Lighthouse SEO audit + static code review across all pages

---

## Summary

The site has a solid foundation (crawlable, valid meta descriptions, good link text) but is held back by two critical automated failures: a missing `robots.txt` and 4 uncrawlable links caused by zero-dimension hidden elements. There are also deeper structural SEO issues identified through code review — incomplete Open Graph tags, missing structured data, duplicate/inconsistent title patterns, and the SPA rendering architecture which can hinder crawlers.

---

## Issues Found

### 🔴 Critical

| # | Issue | Detail | Fix |
|---|-------|---------|-----|
| 1 | **No `robots.txt` file** | Lighthouse found 23 parse errors because the server serves the SPA's `index.html` at `/robots.txt` instead of a proper robots file. All crawl directives are missing. | Create `public/robots.txt` with at minimum `User-agent: * / Allow: /` and add a `Sitemap:` directive. |
| 2 | **4 uncrawlable links (zero dimensions)** | The 4 project card `<a href="/projects">` links inside the `Projects` component have zero dimensions at page load because they are inside an `opacity: 0` GSAP-animated `.reveal` element. Googlebot sees them as hidden and cannot crawl them. | Either pre-show these links in SSR/initial HTML (opacity trick via CSS only), or ensure the links are not hidden by JS initial state. Apply `opacity: 0` via CSS instead of GSAP `set()` so the DOM elements still have layout dimensions. |

---

### 🟠 High

| # | Issue | Detail | Fix |
|---|-------|---------|-----|
| 3 | **No `sitemap.xml`** | There is no sitemap in `/public`. Crawlers must discover the 5 routes (`/`, `/about`, `/services`, `/projects`, `/contact`) blindly. | Create `public/sitemap.xml` listing all 5 routes with `<lastmod>`, `<changefreq>`, and `<priority>` tags. |
| 4 | **SPA with client-side routing — no SSR/SSG** | All content is rendered via React Router in the browser. Googlebot can execute JS, but content rendered after GSAP preloader animation (~2s) may not be indexed. The LCP is **4412ms** (measured during preloader). | Consider pre-rendering with `vite-plugin-ssg` or Astro for static output. Short-term: reduce preloader duration or skip it for bots via user-agent detection. |
| 5 | **No Open Graph / Twitter Card meta tags** | None of the pages include `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`. Social sharing previews will be blank. | Add OG + Twitter meta in each page's `<Helmet>` block. Add a default `og:image` (1200×630px) in `public/`. |
| 6 | **Inconsistent / short `<title>` tags** | Home has `"Kany Dev | Designer de Solutions AI & SEO"` (good), but it conflicts with the one in `index.html` (`"Kany Dev | Designer de Solutions Web, SEO & IA"`). The static `index.html` title is what Googlebot sees before JS executes. | Set a meaningful default title in `index.html` identical to the Home page's Helmet title. |
| 7 | **No structured data (JSON-LD)** | No `Person`, `WebSite`, `Service`, or `BreadcrumbList` schema markup anywhere on the site. This misses rich result eligibility. | Add a `<script type="application/ld+json">` block with `Person` schema on the home page and `Service` schema on `/services`. |
| 8 | **10 color contrast issues on initial render** | Lighthouse flagged 10 contrast ratio failures during audit (nav links, hero text, logo). These are visible during the GSAP reveal animation when elements are `opacity: 0`. Scores as a contrast failure. | The `.reveal` elements (opacity:0) are audited as invisible text on the page background — solution is CSS-only initial hidden state rather than GSAP `set()`. |

---

### 🟡 Medium

| # | Issue | Detail | Fix |
|---|-------|---------|-----|
| 9 | **No `<meta name="description">` in `index.html`** | `react-helmet-async` injects descriptions only after JS hydration. Crawlers reading the raw HTML see no description. | Add a default `<meta name="description">` directly in `index.html` as a fallback. |
| 10 | **Image `alt` text is generic** | Project images use `alt={project.title}` (e.g. `"AI Agent Orchestrator"`) which is acceptable but misses keyword-rich descriptions. | Use descriptive `alt` text including the service type: e.g. `"AI Agent Orchestrator — Custom AI integration project by Kany Dev"`. |
| 11 | **Anchor `href="#"` on social links** | Social/network links in `Contact.tsx` and `ContactPage.tsx` use `href="#"`. These are crawlable but semantically meaningless — and can create duplicate content signals. | Link to real social profile URLs or use `href="https://linkedin.com/in/..."`. If not known, use `aria-disabled` pattern instead. |
| 12 | **No canonical tag** | Lighthouse marked canonical as N/A (no tag present). With React Router, the same component can render at multiple paths in theory. | Add `<link rel="canonical">` per page via `react-helmet-async`. |
| 13 | **Page titles not keyword-optimized on inner pages** | `/about` → `"Expertise | Kany Dev"`, `/services` → (check), `/contact` → `"Démarrer un Projet | Kany Dev"`. These are short and not geo/service targeted. | Use descriptive, keyword-rich titles: e.g. `"Développement React & IA Paris | Kany Dev"` for About. |
| 14 | **No `hreflang` for French content** | Site is entirely in French but serves no `hreflang="fr"` tag. International SEO is undefined. | Add `<link rel="alternate" hreflang="fr" href="...">` in `index.html` or per-page Helmet. |

---

### ⚪ Low

| # | Issue | Detail | Fix |
|---|-------|---------|-----|
| 15 | **No `<meta name="author">`** | Minor signal missing. | Add `<meta name="author" content="Kany Dev">` to `index.html`. |
| 16 | **Heading hierarchy not fully validated** | Pages use `<h1>` correctly (one per page), but the Projects horizontal scroll section has an `<h2>` only visible on desktop — the mobile vertical section also has an `<h2>`. Ensure headings are never duplicated in the DOM simultaneously (one set is `hidden md:block`, the other `block md:hidden`). | Audit rendered DOM to confirm only one `<h1>` and one `<h2>` per page is visible at any time. |
| 17 | **`favicon.svg` is the only icon format** | No `apple-touch-icon`, no 192px/512px PNG for PWA manifests. | Add `apple-touch-icon` and a `manifest.webmanifest` with icon array. |

---

## Passing Checks ✅

| Check | Result |
|-------|--------|
| HTTP Status | 200 OK |
| Crawlability (5 bots checked) | All allowed |
| Link text descriptiveness | 18/18 links pass |
| `lang="fr"` on `<html>` | ✅ (fixed in previous session) |
| Meta description present | ✅ (via react-helmet-async) |
| Mobile viewport meta | ✅ |
| HTTPS-ready | ✅ (localhost dev) |
| Font legibility | 96.73% legible |

---

## Priority Action Plan

```
Priority 1 (immediate — blocks crawling)
├── Create public/robots.txt
├── Create public/sitemap.xml
└── Fix zero-dimension hidden links (CSS opacity instead of GSAP set)

Priority 2 (high impact — indexing quality)
├── Add OG + Twitter Card meta tags to all pages
├── Add JSON-LD structured data (Person + Service)
├── Add canonical tags per page
└── Add default meta description to index.html

Priority 3 (medium — refinement)
├── Keyword-optimize page titles
├── Add hreflang="fr"
├── Fix social href="#" links
└── Improve image alt text
```
