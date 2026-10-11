# FIXED: Offline navigation and working animations

**Open `index.html` directly:** All internal navigation and CSS/JS assets now use relative paths and work via `file://`, without a server. Filtered results also use relative links. Scroll reveals and CSS fallback forest motion run without internet.

**Forest stock videos:** Footage is hosted by an external provider and **requires an internet connection**. If the provider blocks playback or the clips are removed, the site shows a moving forest-inspired fallback, not an actual stock video. Autoplay may be blocked by browser settings or reduced-motion preferences. For guaranteed video playback, download legitimately licensed MP4 clips, place them in `assets/videos/` and update `data-video-src` in HTML files to relative paths.

**Preferred test:** `python -m http.server 8000` in this folder, then open `http://localhost:8000/`. On GitHub Pages, these same relative paths work under `gamiforest.com`.

# GamiForest — deploy to GitHub Pages

A complete static, mobile-first forest games and research atlas. No npm, server, API keys, database or build step required.

## Deployment

1. Create a **public** GitHub repository, such as `gamiforest`.
2. Upload all files and directories from this ZIP to the repository root (including `.nojekyll`, `CNAME`, `games/`, `research/`, `workshops/`, `assets/`, etc.).
3. GitHub repository → **Settings → Pages** → Deploy from branch → `main` → `/ (root)` → Save.
4. In Pages, set **Custom domain** to `gamiforest.com` and check **Enforce HTTPS** once DNS/SSL is ready.
5. In your registrar DNS, set apex **A** records for GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. For `www`, add CNAME `YOUR-GITHUB-USERNAME.github.io` and configure redirects according to GitHub Pages guidance. Do not change DNS records until you verify your registrar's existing setup.
6. Submit `https://gamiforest.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools after the site goes live.

GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## SEO included

- Dedicated crawlable HTML for every game, paper, and workshop year, plus 6 section pages
- Canonical URLs, descriptions, social metadata, JSON-LD structured data
- `sitemap.xml`, `robots.txt`, responsive viewport, semantic headings, breadcrumb navigation
- Relevant internal crosslinks and outbound links to primary sources
- Lightweight static pages with no required JavaScript for primary content

**Important:** Links to external authoritative sites are outbound citations, NOT backlinks to GamiForest. Genuine backlinks require other websites to link to your site. Search ranking is never guaranteed.

## Content and editorial accuracy

`data.js` is the source for the homepage interactive directory, while individual HTML entries are pre-generated in this ZIP. For adding entries, update `data.js` and regenerate or edit the corresponding static HTML pages and `sitemap.xml`. Do not publish unverifiable citations. GamiFOREST programme listings are marked according to available documentation. GamiForest is independent and not an official GamiFIN property.

## Submission form

`index.html` uses an email-draft form via `mailto:hello@gamiforest.com`. Create that mailbox or replace the address before launch. No backend is included.

## Image and privacy considerations

The homepage currently uses externally hosted Unsplash imagery and Google Fonts. Secure usage rights and consider self-hosting licensed image assets for better performance/privacy. The SVG social preview is supplied locally. Review the privacy statement if you add analytics, third-party embeds or a backend.

## Testing

Locally run `python -m http.server 8000` from the extracted folder and open `http://localhost:8000`. For GitHub Pages custom domain test after DNS resolves.


## Cinematic Motion Edition

- Video backgrounds are muted, inline, looping and automatically play only while in view; video URLs are loaded on demand.
- A floating Pause motion / Play motion control is available. Reduced-motion preferences disable automatic video and parallax.
- Footage is illustrative stock video, **not recorded gameplay or documented workshop footage**. Do not describe it as such.
- Stock clips are streamed from Mixkit's CDN. They are not included in this ZIP. Review their current Free Video License at https://mixkit.co/license/ before deploying and consider downloading authorized copies to `/assets/videos/` for more dependable hosting.
- External videos may be blocked by network conditions. CSS backgrounds provide fallbacks.
- Motion implementation: `motion.css`, `motion.js`, video elements injected into homepage and secondary pages.
- For the best production experience, host compressed WebM/MP4 variants locally, and feature original SIMAplay/game footage only with permission.


## Analytics and privacy
All 28 HTML pages include Microsoft Clarity (`yw97ulz6xm`) and Google Analytics 4 (`G-TVEGV4MHV0`) in the head. Both require internet connectivity. Before launching for EU visitors, review applicable consent requirements, implement a consent management mechanism where required, and update the site privacy page to accurately describe the tools and cookie usage. The scripts as supplied are not consent-gated.
