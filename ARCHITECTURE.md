# 🏗️ Architecture — Diamond Construction Website

> A full technical breakdown of the application's structure, data flow, rendering pipeline, component hierarchy, and deployment architecture.

---

## 📑 Table of Contents

1. [High-Level Architecture](#1-high-level-architecture)
2. [Application Boot Sequence](#2-application-boot-sequence)
3. [Routing Architecture](#3-routing-architecture)
4. [Component Tree](#4-component-tree)
5. [Home Page Section Flow](#5-home-page-section-flow)
6. [Loader Animation Sequence](#6-loader-animation-sequence)
7. [Navbar Smart-Hide Logic](#7-navbar-smart-hide-logic)
8. [FloatingQuote Panel State Machine](#8-floatingquote-panel-state-machine)
9. [HeroCarousel Logic](#9-hercarousel-logic)
10. [Testimonials Cycle Logic](#10-testimonials-cycle-logic)
11. [Data Flow — Static Props & Local Data](#11-data-flow--static-props--local-data)
12. [Asset Pipeline & Build Flow](#12-asset-pipeline--build-flow)
13. [Deployment Pipeline (GitHub Pages)](#13-deployment-pipeline-github-pages)
14. [Design Token System](#14-design-token-system)
15. [Animation Architecture](#15-animation-architecture)
16. [Responsive Breakpoint Strategy](#16-responsive-breakpoint-strategy)
17. [File Dependency Graph](#17-file-dependency-graph)

---

## 1. High-Level Architecture

The application is a **React 19 Single-Page Application (SPA)** with client-side routing. There is no backend — all data is static (hardcoded in components) and all routing happens in the browser.

```mermaid
graph TB
    subgraph "Browser"
        USER["👤 User's Browser"]
    end

    subgraph "GitHub Pages CDN"
        STATIC["Static Files\n/dist (index.html, JS bundles, CSS, images, PDFs)"]
    end

    subgraph "React SPA Runtime"
        BR["BrowserRouter\n(react-router-dom v7)"]
        APP["App.jsx\n(Root Component)"]
        LOADER["Loader\n(3.4s intro splash)"]
        SHELL["Layout Shell\nNavbar + Routes + FloatingQuote + Footer"]
    end

    subgraph "Pages (Route-Level)"
        HOME["/  →  Home.jsx"]
        ABOUT["/about  →  About.jsx"]
        PROJECTS["/projects  →  Projects.jsx"]
        CONTACT["/contact  →  Contact.jsx"]
    end

    subgraph "Shared Section Components"
        HERO["HeroCarousel"]
        ABOUTPREV["AboutPreview"]
        UPCOMING["UpcomingProject"]
        WHY["WhyChooseUs"]
        TEST["Testimonials"]
    end

    subgraph "Static Data Sources"
        IMGS["src/assets/images/"]
        PDFS["public/brochures/"]
        EXT["External APIs\n(Google Maps Embed, WhatsApp URL, grainy-gradients CDN)"]
    end

    USER -->|"HTTP GET"| STATIC
    STATIC -->|"Serves index.html + JS bundles"| BR
    BR --> APP
    APP -->|"loading = true (3.4s)"| LOADER
    APP -->|"loading = false"| SHELL
    SHELL --> HOME
    SHELL --> ABOUT
    SHELL --> PROJECTS
    SHELL --> CONTACT
    HOME --> HERO
    HOME --> ABOUTPREV
    HOME --> UPCOMING
    HOME --> WHY
    HOME --> TEST
    HERO --> IMGS
    UPCOMING --> IMGS
    UPCOMING --> PDFS
    CONTACT --> EXT
    ABOUTPREV --> IMGS
```

---

## 2. Application Boot Sequence

This diagram shows exactly what happens from the moment the browser loads the page to when the user sees the full site.

```mermaid
sequenceDiagram
    participant B as Browser
    participant HTML as index.html
    participant MAIN as main.jsx
    participant APP as App.jsx
    participant LOADER as Loader.jsx
    participant NAV as Navbar.jsx

    B->>HTML: GET / (or /diamond-construction/)
    HTML->>HTML: Load Google Fonts (Playfair Display, Inter, Bebas Neue)
    HTML->>MAIN: Execute bundled JS (main.jsx entry)
    MAIN->>MAIN: ReactDOM.createRoot(#root)
    MAIN->>MAIN: Wrap with React.StrictMode + BrowserRouter
    MAIN->>APP: Render <App />

    APP->>APP: useState(loading = true)
    APP->>APP: useEffect → setTimeout(3400ms)
    APP->>LOADER: AnimatePresence renders <Loader /> (loading=true)

    Note over LOADER: PHASE 1 (0ms): Logo scales 1.6x → 1.0x
    Note over LOADER: PHASE 2 (800ms): "DIAMOND" text fades in
    Note over LOADER: PHASE 3 (1200ms): Gold shimmer sweeps across
    Note over LOADER: PHASE 4 (1350ms): "CONSTRUCTION" fades in
    Note over LOADER: PHASE 5 (2200ms): "BUILDING BEYOND BOUNDARIES" staggers in

    APP->>APP: After 3400ms → setLoading(false)
    LOADER->>LOADER: AnimatePresence exit → opacity: 0 (1s fade)

    APP->>NAV: Render <Navbar /> (loading=false)
    Note over NAV: Logo uses layoutId="site-logo" → morphs from Loader position
    APP->>APP: Render <Routes> (current page)
    APP->>APP: Render <FloatingQuote /> (persistent)
    APP->>APP: Render <Footer />
```

---

## 3. Routing Architecture

```mermaid
graph LR
    subgraph "React Router DOM v7"
        BR["BrowserRouter\n(wraps entire app in main.jsx)"]
        ST["ScrollToTop\n(useLocation hook → scrolls on change)"]
        ROUTES["Routes"]
    end

    subgraph "Route Definitions (App.jsx)"
        R1["path='/' → Home.jsx"]
        R2["path='/about' → About.jsx"]
        R3["path='/projects' → Projects.jsx"]
        R4["path='/contact' → Contact.jsx"]
    end

    subgraph "Navigation Sources"
        NAVBAR["Navbar.jsx\n(NavLink components)"]
        FOOTER["Footer.jsx\n(NavLink components)"]
        ABOUTPREV["AboutPreview.jsx\n(NavLink to /about)"]
        UPCOMING["UpcomingProject.jsx\n(NavLink to /projects#diamond-habitat)"]
        FLOATING["FloatingQuote.jsx\n(external href only)"]
    end

    BR --> ST
    ST --> ROUTES
    ROUTES --> R1
    ROUTES --> R2
    ROUTES --> R3
    ROUTES --> R4

    NAVBAR -->|"NavLink active state detection"| ROUTES
    FOOTER --> ROUTES
    ABOUTPREV --> ROUTES
    UPCOMING --> ROUTES
```

> **Note:** GitHub Pages serves only `index.html`. The Vite `base: "/diamond-construction/"` config ensures all asset URLs are prefixed correctly. All navigation is client-side — no server-side routing.

---

## 4. Component Tree

Full render tree showing parent-child relationships for every route.

```mermaid
graph TD
    MAIN["main.jsx\nReactDOM.createRoot"]
    STRICTMODE["React.StrictMode"]
    BROWSER["BrowserRouter"]
    APP["App.jsx"]
    SCROLLTOP["ScrollToTop"]
    ANIMP["AnimatePresence"]
    LOADER["Loader"]
    NAVBAR["Navbar"]
    ROUTES["Routes"]
    FLOATQ["FloatingQuote"]
    FOOTER["Footer"]

    HOME_PAGE["Home.jsx"]
    ABOUT_PAGE["About.jsx"]
    PROJ_PAGE["Projects.jsx"]
    CONT_PAGE["Contact.jsx"]

    HERO["HeroCarousel"]
    ABOUTPREV["AboutPreview"]
    STATSGRID["StatsGrid (ui/)"]
    UPCOMING["UpcomingProject"]
    WHY["WhyChooseUs"]
    TEST["Testimonials"]

    MAIN --> STRICTMODE
    STRICTMODE --> BROWSER
    BROWSER --> APP
    APP --> SCROLLTOP
    APP --> ANIMP
    ANIMP -->|"loading=true"| LOADER
    APP -->|"loading=false"| NAVBAR
    APP -->|"loading=false"| ROUTES
    APP -->|"loading=false"| FLOATQ
    APP -->|"loading=false"| FOOTER

    ROUTES -->|"path=/"| HOME_PAGE
    ROUTES -->|"path=/about"| ABOUT_PAGE
    ROUTES -->|"path=/projects"| PROJ_PAGE
    ROUTES -->|"path=/contact"| CONT_PAGE

    HOME_PAGE --> HERO
    HOME_PAGE --> ABOUTPREV
    HOME_PAGE --> UPCOMING
    HOME_PAGE --> WHY
    HOME_PAGE --> TEST

    ABOUTPREV --> STATSGRID
```

---

## 5. Home Page Section Flow

The Home page is purely a **composition layer** — it renders section components in order with visual separators.

```mermaid
flowchart TB
    HOME["Home.jsx\nbg-bg text-white overflow-hidden"]

    GRAIN["Global Grain Overlay\npointer-events-none, fixed, z-0, opacity-0.03\n(noise SVG from CDN)"]

    HERO_SECTION["section: HeroCarousel\nh-70vh md:h-screen\nFull-bleed hero images"]

    SEP1["Separator\nh-px w-full bg-gold/15 max-w-6xl mx-auto"]

    ABOUT_SECTION["section: pt-12 pb-16 md-py-28 px-6 md-px-16\nAboutPreview component"]

    SEP2["Separator\nh-px w-full bg-gold/15 max-w-6xl mx-auto"]

    UPCOMING_SECTION["section: py-20 md-py-28 px-6 md-px-16 bg-surface\nUpcomingProject component"]

    SEP3["Separator\nh-px w-full bg-gold/15 max-w-6xl mx-auto"]

    WHY_SECTION["section: py-20 md-py-28 px-6 md-px-16\nWhyChooseUs component"]

    SEP4["Separator\nh-px w-full bg-gold/15 max-w-6xl mx-auto"]

    TEST_SECTION["section: py-20 md-py-28 px-6 md-px-16 bg-surface\nTestimonials component"]

    HOME --> GRAIN
    HOME --> HERO_SECTION
    HERO_SECTION --> SEP1
    SEP1 --> ABOUT_SECTION
    ABOUT_SECTION --> SEP2
    SEP2 --> UPCOMING_SECTION
    UPCOMING_SECTION --> SEP3
    SEP3 --> WHY_SECTION
    WHY_SECTION --> SEP4
    SEP4 --> TEST_SECTION
```

---

## 6. Loader Animation Sequence

The Loader has a carefully timed multi-phase animation sequence built with Framer Motion.

```mermaid
gantt
    title Loader Animation Timeline (ms)
    dateFormat X
    axisFormat %Lms

    section Logo
    Logo scale 1.6x → 1.0x  :0, 2400

    section Brand Name
    "DIAMOND" fade up        :800, 1900
    Gold shimmer sweep       :1200, 3000
    "CONSTRUCTION" fade in   :1350, 2350

    section Tagline
    "BUILDING" fade in       :2200, 2800
    "BEYOND" fade in         :2450, 3050
    "BOUNDARIES" fade in     :2700, 3300

    section Exit
    Loader opacity 0 (exit)  :3400, 4400
```

### Animation Detail

```mermaid
flowchart LR
    subgraph "Logo (layoutId: site-logo)"
        L1["initial: scale(1.6)"]-->L2["animate: scale(1.6 → 1.08 → 1.0)\ntimes: 0, 0.7, 1\nduration: 2.4s\nease: cubic-bezier-spring"]
    end

    subgraph "DIAMOND text"
        D1["initial: opacity(0) y(20)"]-->D2["animate: opacity(1) y(0)\ndelay: 0.8s\nduration: 1.1s"]
    end

    subgraph "Gold Shimmer"
        S1["initial: x(-120%)"]-->S2["animate: x(120%)\ndelay: 1.2s\nduration: 1.8s\nbg-gradient gold/50"]
    end

    subgraph "CONSTRUCTION text"
        C1["initial: opacity(0) y(16)"]-->C2["animate: opacity(1) y(0)\ndelay: 1.35s\nduration: 1.0s"]
    end

    subgraph "Tagline (staggered)"
        T1["BUILDING\ndelay: 2.2s"]-->T2["BEYOND\ndelay: 2.45s"]-->T3["BOUNDARIES\ndelay: 2.7s"]
    end
```

---

## 7. Navbar Smart-Hide Logic

```mermaid
flowchart TD
    MOUNT["Navbar mounts"]
    FIND["Find #site-footer element"]
    OBS["Create IntersectionObserver\nthreshold: 0.15"]
    OBSERVE["observer.observe(footer)"]

    SCROLL{{"User scrolls"}}
    CHECK{"Is footer ≥ 15%\nvisible in viewport?"}

    HIDE_TRUE["setHide(true)\nNavbar: opacity-0, translate-y-8, pointer-events-none"]
    HIDE_FALSE["setHide(false)\nNavbar: opacity-100, translate-y-0"]

    UNMOUNT["Component unmounts\nobserver.disconnect()"]

    MOUNT --> FIND --> OBS --> OBSERVE --> SCROLL
    SCROLL --> CHECK
    CHECK -->|"Yes"| HIDE_TRUE
    CHECK -->|"No"| HIDE_FALSE
    HIDE_TRUE --> SCROLL
    HIDE_FALSE --> SCROLL
    MOUNT -->|"cleanup"| UNMOUNT
```

### Active Route Indicator ("Lamp")

```mermaid
flowchart LR
    LOCATION["useLocation()\nactive = location.pathname"]
    MATCH{"active === item.path?"}
    LAMP["Render motion.div\nlayoutId='lamp'\nbg-gold/10 rounded-full\n+ top tubelight bar\n+ glow blur"]
    NONE["No indicator"]
    SPRING["Framer Motion spring:\nstiffness: 280\ndamping: 30\n→ smooth slide between items"]

    LOCATION --> MATCH
    MATCH -->|"Yes"| LAMP
    MATCH -->|"No"| NONE
    LAMP --> SPRING
```

---

## 8. FloatingQuote Panel State Machine

```mermaid
stateDiagram-v2
    [*] --> Collapsed : Component mounts\n(expanded = false)

    Collapsed --> Expanded : Desktop: mouseEnter\nMobile: button click

    Expanded --> Collapsed : Desktop: mouseLeave\n(after 900ms delay)\n\nMobile: X button click\nor toggle click

    Expanded --> Expanded : clearTimeout(hideTimer)\non mouseEnter (desktop)

    note right of Collapsed
        Visual state:
        translateX(calc(100% - 36px))
        Only "CONTACT US" tab visible
    end note

    note right of Expanded
        Visual state:
        translateX(0)
        Full panel visible:
        - WhatsApp button
        - Call Now button
        - X close button
    end note
```

### Device Detection Logic

```mermaid
flowchart TD
    MOUNT["Component mounts"]
    DETECT["canDeviceHover()\nwindow.matchMedia('hover: hover').matches"]
    HOVER_TRUE["canHover = true\n(desktop / pointer device)"]
    HOVER_FALSE["canHover = false\n(touch / mobile device)"]

    LISTEN["addEventListener for\nmedia change events"]

    INTERACTION_D["Desktop:\nonMouseEnter → openPanel()\nonMouseLeave → scheduleCollapse(900ms)"]
    INTERACTION_M["Mobile:\nbutton onClick → toggle expanded"]

    MOUNT --> DETECT
    DETECT -->|"true"| HOVER_TRUE --> INTERACTION_D
    DETECT -->|"false"| HOVER_FALSE --> INTERACTION_M
    MOUNT --> LISTEN
```

---

## 9. HeroCarousel Logic

```mermaid
flowchart TD
    MOUNT["HeroCarousel mounts\nindex = 0"]

    INTERVAL["setInterval every 6000ms\n→ setIndex(prev + 1) % 3"]

    CURRENT["Current slide:\nslides[index]\n= { desktop: img, mobile: img }"]

    RENDER["AnimatePresence mode='wait'\nkey={index} triggers re-mount"]

    ANIM_IN["Enter animation:\ninitial: opacity(0) scale(1.03)\nanimate: opacity(1) scale(1)\nduration: 1s"]

    ANIM_OUT["Exit animation:\nopacity(0)\nduration: 1s"]

    DOTS["Dot indicators\ni === index → bg-gold\nelse → bg-white/40\nclickable: setIndex(i)"]

    RESPONSIVE["Responsive images:\ndesktop: hidden md:block\nmobile: block md:hidden"]

    UNMOUNT["clearInterval on unmount"]

    MOUNT --> INTERVAL
    INTERVAL --> CURRENT
    CURRENT --> RENDER
    RENDER --> ANIM_IN
    ANIM_IN --> ANIM_OUT
    ANIM_OUT --> INTERVAL
    MOUNT --> DOTS
    CURRENT --> RESPONSIVE
    MOUNT --> UNMOUNT
```

---

## 10. Testimonials Cycle Logic

```mermaid
flowchart TD
    MOUNT["Testimonials mounts\nactiveIndex = 0\n3 testimonials total"]

    AUTO["setInterval every 7000ms\n→ setActiveIndex(i + 1) % 3"]

    PREV_BTN["← button\nsetActiveIndex(i - 1 + 3) % 3"]
    NEXT_BTN["→ button\nsetActiveIndex(i + 1) % 3"]

    CURRENT["current = testimonials[activeIndex]"]

    QUOTE_ANIM["AnimatePresence mode='wait'\nblockquote key={activeIndex}\ninitial: y(24) opacity(0)\nanimate: y(0) opacity(1)\nexit: y(-16) opacity(0)\nduration: 0.5s"]

    PROGRESS["Left rail progress bar\nheight: (activeIndex+1)/3 × 100%\nanimated with Framer Motion"]

    BIG_NUM["Background big number\npadStart(2, '0')\ntext-white/5 (very subtle)"]

    UNMOUNT["clearInterval on unmount"]

    MOUNT --> AUTO
    AUTO --> CURRENT
    CURRENT --> QUOTE_ANIM
    CURRENT --> PROGRESS
    CURRENT --> BIG_NUM
    PREV_BTN --> CURRENT
    NEXT_BTN --> CURRENT
    MOUNT --> UNMOUNT
```

---

## 11. Data Flow — Static Props & Local Data

Since there is no backend API, all data is **co-located** inside the component files as JavaScript arrays.

```mermaid
graph LR
    subgraph "Data Sources (all static / hardcoded)"
        SLIDES_DATA["HeroCarousel.jsx\nslides[] = [\n  {desktop, mobile} × 3\n]"]
        STATS_DATA["StatsGrid.jsx\nstats[] = [\n  15+ Years,\n  10+ Milestones,\n  50000+ Sq Ft,\n  500+ Customers\n]"]
        FEATURES_DATA["WhyChooseUs.jsx\nfeatures[] = [\n  6 feature cards\n]"]
        TEST_DATA["Testimonials.jsx\ntestimonials[] = [\n  3 client reviews\n]"]
        PROJ_DATA["Projects.jsx\nprojects[] = [\n  4 projects\n]"]
        CONTACT_DATA["Contact.jsx\ninline array =\n  Phone, WhatsApp, Email\n"]
        UPCOMING_DATA["UpcomingProject.jsx\nHardcoded: Diamond Habitat\nDetails as JSX"]
    end

    subgraph "Asset Imports"
        LOGO["logo.png\n→ Navbar, Footer, Loader"]
        PROJ_IMGS["project1-4.jpeg\n→ Projects.jsx"]
        HERO_IMGS["diamond-avenue/habitat/queen .jpg\n→ HeroCarousel.jsx"]
        UPCOMING_IMG["project3.jpeg\n→ UpcomingProject.jsx"]
        PDF["/brochures/Diamond-Habitat.pdf\n→ UpcomingProject.jsx (href)"]
    end

    subgraph "External Resources"
        MAPS["Google Maps iframe\n→ Contact.jsx"]
        WA["wa.me/... links\n→ Contact, FloatingQuote, UpcomingProject"]
        GRAIN_CDN["grainy-gradients.vercel.app/noise.svg\n→ Home.jsx, Footer.jsx"]
    end

    SLIDES_DATA -->|props| HeroCarousel
    STATS_DATA -->|props| StatsGrid
    FEATURES_DATA -->|.map()| WhyChooseUs
    TEST_DATA -->|.map()| Testimonials
    PROJ_DATA -->|.map()| Projects
    CONTACT_DATA -->|.map()| Contact
    UPCOMING_DATA -->|JSX| UpcomingProject
```

---

## 12. Asset Pipeline & Build Flow

```mermaid
flowchart LR
    subgraph "Source (dev)"
        SRC_JSX["src/**/*.jsx\n(React components)"]
        SRC_CSS["src/index.css\n(Tailwind directives)"]
        SRC_IMGS["src/assets/images/*\n(logo, project photos)"]
        PUB_STATIC["public/*\n(favicon.png, brochures/*)"]
        IDX_HTML["index.html\n(entry point)"]
    end

    subgraph "Vite Build Pipeline"
        VITE_PLUGIN["@vitejs/plugin-react\n(Babel + React Compiler)"]
        ROLLUP["Rollup bundler\n(code splitting, tree shaking)"]
        TW["Tailwind CSS\n(purge unused classes)"]
        POST["PostCSS + Autoprefixer\n(vendor prefixes)"]
    end

    subgraph "Output: /dist"
        DIST_HTML["dist/index.html\n(injected script/link tags)"]
        DIST_JS["dist/assets/*.js\n(chunked, minified bundles)"]
        DIST_CSS["dist/assets/*.css\n(purged, minified)"]
        DIST_IMGS["dist/assets/*.jpg/png\n(hashed filenames)"]
        DIST_PUB["dist/brochures/*.pdf\ndist/favicon.png"]
    end

    SRC_JSX --> VITE_PLUGIN --> ROLLUP --> DIST_JS
    SRC_CSS --> TW --> POST --> DIST_CSS
    SRC_IMGS --> ROLLUP --> DIST_IMGS
    PUB_STATIC --> DIST_PUB
    IDX_HTML --> DIST_HTML
```

---

## 13. Deployment Pipeline (GitHub Pages)

```mermaid
flowchart TD
    DEV["Developer: npm run deploy"]

    PREDEPLOY["predeploy hook:\nnpm run build\n→ generates /dist"]

    GHPAGES["gh-pages -d dist\npushes /dist/* to 'gh-pages' branch"]

    GH_BRANCH["GitHub: gh-pages branch\n(contains dist contents)"]

    GH_PAGES_CDN["GitHub Pages CDN\nserves files from gh-pages branch"]

    DOMAIN["https://mohdhafeez07.github.io\n/diamond-construction/"]

    USER["👤 User visits URL"]
    SERVE["Server returns index.html\n+ all JS/CSS bundle URLs with base=/diamond-construction/"]

    DEV --> PREDEPLOY --> GHPAGES --> GH_BRANCH
    GH_BRANCH --> GH_PAGES_CDN --> DOMAIN
    USER -->|"GET /diamond-construction/"| DOMAIN
    DOMAIN --> SERVE
```

### Key Configuration Points

| File | Setting | Purpose |
|---|---|---|
| `package.json` | `"homepage": "https://mohdhafeez07.github.io/diamond-construction"` | Tells gh-pages the target URL |
| `vite.config.js` | `base: "/diamond-construction/"` | Prefixes all asset URLs in the build |
| `package.json` | `"predeploy": "npm run build"` | Auto-builds before deploying |

---

## 14. Design Token System

```mermaid
graph TD
    subgraph "tailwind.config.js — Theme Extension"
        COLORS["Colors:\n  bg: #0B0B0B\n  surface: #111111\n  gold: #B89B5E\n  goldSoft: #E6D8A8\n  muted: #9E9E9E"]
        FONTS["Font Families:\n  heading: Playfair Display serif\n  body: Inter sans-serif\n  display: Bebas Neue\n  number: Inter system-ui"]
        SPACING["Letter Spacing:\n  widest: 0.25em\n  numbers: 0.02em"]
    end

    subgraph "src/index.css — Component Classes"
        TYPO["Typography:\n  .heading-xl (clamp 2.8–5.2rem)\n  .heading-lg (clamp 2.2–3.5rem)\n  .heading-md (clamp 1.8–2.6rem)\n  .eyebrow (gold, uppercase)\n  .body-text\n  .body-text-lg"]
        BUTTONS[".btn-gold\n  gold gradient\n  tracking-widest"]
        LAYOUT[".container-main\n  max-w-7xl mx-auto\n  px-6 md:px-12\n\n.section-padding\n  py-24 md:py-32"]
        UTIL[".grain::after\n  noise texture fixed overlay"]
    end

    subgraph "index.html — Font Loading"
        GFONTS["Google Fonts preconnect\nPlayfair Display\nInter\nBebas Neue"]
    end

    COLORS --> TYPO
    FONTS --> GFONTS
    SPACING --> TYPO
```

---

## 15. Animation Architecture

All animation is handled by **Framer Motion v12**. No CSS animations or transitions are used for page-level or scroll animations.

```mermaid
graph TD
    subgraph "Animation Patterns Used"
        SCROLL_REVEAL["whileInView Reveal\ninitial: opacity(0) y(30)\nwhileInView: opacity(1) y(0)\nviewport: once:true\nUsed in: ALL sections"]

        STAGGER["Staggered Children\ndelay: i * 0.08\nUsed in: Projects, WhyChooseUs\nAbout FeatureCards"]

        HOVER_LIFT["Hover Lift\nwhileHover: y(-6)\nUsed in: Projects cards"]

        SHARED_ELEMENT["Shared Element (layoutId)\nlayoutId='site-logo'\nLoader logo → Navbar logo\n\nlayoutId='lamp'\nNavbar active indicator"]

        PAGE_TRANSITION["AnimatePresence\nLoader exit fade\nTestimonial slide transitions\nHero slide transitions"]

        SLIDE_OUT["Slide-out Panel\nCSS transform via Framer animate\ntranslateX(0 ↔ calc(100%-36px))\nFloatingQuote panel"]

        PROGRESS_BAR["Growth Animation\nheight: % value animated\nTestimonials progress rail"]
    end
```

### Framer Motion Component Usage Map

| Component | Framer Features Used |
|---|---|
| `Loader.jsx` | `motion.div`, `motion.img`, `motion.span`, `AnimatePresence` (exit), `layoutId="site-logo"` |
| `Navbar.jsx` | `motion.img` (logo), `motion.div` (lamp), `layoutId="lamp"`, `layoutId="site-logo"` |
| `HeroCarousel.jsx` | `AnimatePresence mode="wait"`, `motion.div` (scale+fade transition) |
| `AboutPreview.jsx` | `motion.div` (fade-up on animate) |
| `StatsGrid.jsx` | `motion.div` (whileInView), `motion.p` (number reveal) |
| `UpcomingProject.jsx` | `motion.div` (x-axis slide-in left/right) |
| `WhyChooseUs.jsx` | `motion.div` (staggered whileInView cards) |
| `Testimonials.jsx` | `AnimatePresence mode="wait"`, `motion.blockquote`, `motion.div` (progress bar height) |
| `Footer.jsx` | `motion.div` with `variants`, custom animation delays |
| `About.jsx` | `motion.h2`, `motion.p`, `motion.div` (all whileInView) |
| `Projects.jsx` | `motion.div` (staggered whileInView + whileHover) |
| `Contact.jsx` | `motion.a`, `motion.div` (whileInView) |

---

## 16. Responsive Breakpoint Strategy

Tailwind CSS default breakpoints used throughout:

| Breakpoint | Min Width | Usage |
|---|---|---|
| *(default)* | 0px | Mobile-first base styles |
| `sm:` | 640px | 2-column layouts begin |
| `md:` | 768px | Desktop navbar, full padding, show text labels |
| `lg:` | 1024px | 3-4 column grids, 2-col content layouts |
| `max-w-6xl` | 1152px | Article/content containers |
| `max-w-7xl` | 1280px | Wide content containers |

### Key Responsive Patterns

```
Navbar:
  Mobile: icon-only (Home/User/Briefcase/Mail icons), bottom-4
  Desktop: text labels (HOME/ABOUT/PROJECTS/CONTACT), top-6

Hero:
  Mobile: h-70vh, mobile-specific images (portrait crop)
  Desktop: h-screen, landscape images

Grids:
  StatsGrid:     1 col → sm:2 col
  WhyChooseUs:   1 col → sm:2 col → lg:3 col
  Projects:      1 col → sm:2 col → lg:4 col
  About Values:  1 col → sm:2 col
  About Cards:   1 col → sm:2 col → lg:4 col

Contact:
  Cards: 1 col → sm:2 col → md:3 col
  Office+Map: 1 col → lg:2 col

Footer:
  Logo: center (mobile hidden → desktop visible at col 2)
  Grid: 1 col → md:3 col
```

---

## 17. File Dependency Graph

Which files import which — showing the full import tree.

```mermaid
graph TD
    MAIN["main.jsx"]
    APP["App.jsx"]
    IDX_CSS["index.css"]
    HOME["pages/Home.jsx"]
    ABOUT["pages/About.jsx"]
    PROJ["pages/Projects.jsx"]
    CONT["pages/Contact.jsx"]
    NAV["components/Navbar.jsx"]
    FOOT["components/Footer.jsx"]
    LOADER["components/Loader.jsx"]
    FLOATQ["components/FloatingQuote.jsx"]
    SCROLLTOP["components/ScrollToTop.jsx"]
    HERO["components/HeroCarousel.jsx"]
    ABOUTPREV["components/AboutPreview.jsx"]
    UPCOMING["components/UpcomingProject.jsx"]
    WHY["components/WhyChooseUs.jsx"]
    TEST["components/Testimonials.jsx"]
    STATSGRID["components/ui/StatsGrid.jsx"]
    LOGO["assets/images/logo.png"]
    PROJ_IMGS["assets/images/projects/*"]

    MAIN --> APP
    MAIN --> IDX_CSS
    APP --> NAV
    APP --> FOOT
    APP --> LOADER
    APP --> FLOATQ
    APP --> SCROLLTOP
    APP --> HOME
    APP --> ABOUT
    APP --> PROJ
    APP --> CONT
    HOME --> HERO
    HOME --> ABOUTPREV
    HOME --> UPCOMING
    HOME --> WHY
    HOME --> TEST
    ABOUTPREV --> STATSGRID
    NAV --> LOGO
    FOOT --> LOGO
    LOADER --> LOGO
    HERO --> PROJ_IMGS
    UPCOMING --> PROJ_IMGS
    PROJ --> PROJ_IMGS
```

---

## Summary Comparison Table

| Concern | Solution |
|---|---|
| **Framework** | React 19 (JSX, function components, hooks) |
| **Build Tool** | Vite 7 (Rollup under hood, ESM native) |
| **Routing** | React Router DOM v7 (BrowserRouter, SPA) |
| **Animation** | Framer Motion v12 (whileInView, AnimatePresence, layoutId) |
| **Styling** | TailwindCSS v3 (utility classes + custom tokens) |
| **Icons** | Lucide React + React Icons |
| **Data** | 100% static — no API, no database, no CMS |
| **State** | Component-local useState/useEffect only — no global state manager |
| **SEO** | Meta tags in index.html; no SSR (CSR only) |
| **Deployment** | GitHub Pages via gh-pages npm package |
| **Hosting** | GitHub CDN (free static hosting) |
| **PDF** | Served from /public/brochures/ as static file |
| **Maps** | Google Maps iframe embed (no API key needed) |
| **Contact** | Direct href: tel:, mailto:, wa.me/ — no form, no server |

---

<div align="center">
  <p><em>Diamond Construction — Architecture Document</em></p>
  <p><em>Building Beyond Boundaries</em></p>
</div>
