# 💎 Diamond Construction — Official Website

<div align="center">
  <img src="./src/assets/images/logo.png" alt="Diamond Construction Logo" width="120" />
  <br/>
  <h3><em>Building Beyond Boundaries</em></h3>
  <p>A premium, animated React website for Diamond Construction — a Mangalore-based residential & commercial construction company.</p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white" />
    <img src="https://img.shields.io/badge/Deployed-GitHub_Pages-181717?logo=github&logoColor=white" />
  </p>

  <p>
    <a href="https://mohdhafeez07.github.io/diamond-construction">🌐 Live Site</a> •
    <a href="./ARCHITECTURE.md">🏗️ Architecture</a> •
    <a href="#-quick-start">🚀 Quick Start</a>
  </p>
</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Component Reference](#-component-reference)
- [Design System](#-design-system)
- [Key Features](#-key-features)
- [Quick Start](#-quick-start)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contact Information](#-contact-information)

---

## 🏢 About the Project

**Diamond Construction** is a Mangalore-based construction company with 15+ years of excellence in residential and commercial development. This repository contains the source code for their official corporate website.

The website is built as a **single-page application (SPA)** using React 19 and Vite, featuring premium animations powered by Framer Motion, a luxurious dark-gold design language, and full mobile responsiveness.

### Business Context

| Detail | Info |
|---|---|
| **Company** | Diamond Construction |
| **Industry** | Real Estate / Construction |
| **Location** | Mangaluru, Karnataka, India |
| **Office** | Shop No. 301, Lotus Paradise Centre, Kodailbail, Mangaluru – 575003 |
| **Phone** | +91 76193 19696 |
| **WhatsApp** | +91 97420 36696 |
| **Email** | diamondconstruction6696@gmail.com |
| **Website** | https://mohdhafeez07.github.io/diamond-construction |

### Key Statistics

| Stat | Value |
|---|---|
| Years of Excellence | 15+ |
| Major Milestones | 10+ |
| Area Executed | 50,000+ Sq Ft |
| Happy Customers | 500+ |

---

## 🌐 Live Demo

> 🔗 **[https://mohdhafeez07.github.io/diamond-construction](https://mohdhafeez07.github.io/diamond-construction)**

The site is deployed on **GitHub Pages** using the `gh-pages` package and is served from the `/dist` build output.

---

## 🛠 Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.2.0 | UI library (component-based SPA) |
| [ReactDOM](https://react.dev/) | ^19.2.0 | DOM rendering |
| [Vite](https://vitejs.dev/) | ^7.2.4 | Build tool & dev server |

### Routing

| Technology | Version | Purpose |
|---|---|---|
| [React Router DOM](https://reactrouter.com/) | ^7.12.0 | Client-side routing (SPA navigation) |

### Animation

| Technology | Version | Purpose |
|---|---|---|
| [Framer Motion](https://www.framer.com/motion/) | ^12.25.0 | Page transitions, scroll animations, carousel |
| [motion](https://motion.dev/) | ^12.25.0 | Core motion primitives |

### Styling

| Technology | Version | Purpose |
|---|---|---|
| [TailwindCSS](https://tailwindcss.com/) | ^3.4.17 | Utility-first CSS framework |
| [PostCSS](https://postcss.org/) | ^8.5.6 | CSS transformation |
| [Autoprefixer](https://autoprefixer.github.io/) | ^10.4.23 | Vendor prefix automation |

### UI & Icons

| Technology | Version | Purpose |
|---|---|---|
| [Lucide React](https://lucide.dev/) | ^0.562.0 | Icon library (Nav, Features, Contact) |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.5.0 | Extended icons (WhatsApp `FaWhatsapp`) |
| [React Use Measure](https://github.com/pmndrs/react-use-measure) | ^2.1.7 | DOM measurement hook |

### Fonts (via Google Fonts — loaded in `index.html`)

| Font | Usage |
|---|---|
| **Playfair Display** | Section headings, brand titles (`font-heading`) |
| **Inter** | Body text, UI elements (`font-body`, `font-number`) |
| **Bebas Neue** | "CONSTRUCTION" brand label (`font-display`) |

### DevDependencies & Tooling

| Tool | Purpose |
|---|---|
| `@vitejs/plugin-react` | React fast-refresh + JSX transform via Babel |
| `babel-plugin-react-compiler` | React 19 optimizing compiler |
| `eslint` + plugins | Code quality & linting |
| `gh-pages` | GitHub Pages deployment CLI |

---

## 📁 Project Structure

```
diamond-construction/
│
├── public/                         # Static assets (served as-is)
│   ├── favicon.png                 # Browser tab icon
│   └── brochures/
│       └── Diamond-Habitat.pdf     # Downloadable project brochure
│
├── src/                            # Application source code
│   ├── main.jsx                    # React entry point — mounts BrowserRouter + App
│   ├── App.jsx                     # Root component — Loader, Routes, Layout shell
│   ├── index.css                   # Global styles, Tailwind directives, design tokens
│   │
│   ├── assets/                     # Compiled/bundled assets
│   │   └── images/
│   │       ├── logo.png            # Diamond Construction logo (navbar + footer + loader)
│   │       └── projects/           # Project photography
│   │           ├── diamond-avenue.jpg
│   │           ├── diamond-avenue-mobile.jpg
│   │           ├── diamond-habitat.jpg
│   │           ├── diamond-habitat-mobile.jpg
│   │           ├── diamond-queen.jpg
│   │           ├── diamond-queen-mobile.jpg
│   │           ├── project1.jpeg   # Diamond Avenue (Projects page)
│   │           ├── project2.jpeg   # Diamond Queen (Projects page)
│   │           ├── project3.jpeg   # Diamond Habitat (Projects page + Upcoming)
│   │           └── project4.jpeg   # Diamond Arcade (Projects page)
│   │
│   ├── pages/                      # Route-level page components
│   │   ├── Home.jsx                # Landing page — orchestrates all home sections
│   │   ├── About.jsx               # Full About page — company story, values, compliance
│   │   ├── Projects.jsx            # Projects portfolio grid
│   │   └── Contact.jsx            # Contact cards + Google Maps embed
│   │
│   └── components/                 # Reusable UI components
│       ├── Navbar.jsx              # Floating pill navbar (auto-hides near footer)
│       ├── Footer.jsx              # Site footer with links, contacts, gold tubelight
│       ├── Loader.jsx              # Full-screen branded intro animation
│       ├── FloatingQuote.jsx       # Fixed right-edge slide-out contact panel
│       ├── HeroCarousel.jsx        # Auto-advancing full-screen image carousel
│       ├── AboutPreview.jsx        # Home "About Us" teaser + stats grid
│       ├── UpcomingProject.jsx     # "Diamond Habitat" feature section + brochure CTA
│       ├── WhyChooseUs.jsx         # 6-card features grid + brand statement
│       ├── Testimonials.jsx        # Auto-rotating client testimonials with progress bar
│       ├── ScrollToTop.jsx         # Scrolls window to top on route change
│       ├── PageTransition.jsx      # Page-level Framer Motion wrapper (utility)
│       ├── ScrollReveal.jsx        # Generic scroll-triggered reveal wrapper (utility)
│       ├── TextReveal.jsx          # Animated text reveal utility component
│       └── ui/
│           └── StatsGrid.jsx       # 2×2 animated stats display card
│
├── index.html                      # Vite HTML entry — Google Fonts, meta tags, root div
├── vite.config.js                  # Vite config — React plugin, base URL for GH Pages
├── tailwind.config.js              # Tailwind theme — custom colors, fonts, spacing
├── postcss.config.js               # PostCSS config — Tailwind + Autoprefixer
├── eslint.config.js                # ESLint config — React hooks + refresh rules
├── package.json                    # Dependencies, scripts, homepage (GH Pages)
├── package-lock.json               # Locked dependency tree
├── .gitignore                      # Git ignore rules
├── README.md                       # ← You are here
└── ARCHITECTURE.md                 # Deep architecture + flow diagrams
```

---

## 📄 Pages Overview

### 🏠 Home (`/`)

The landing page — assembled from multiple section components in sequence:

| Section | Component | Description |
|---|---|---|
| Hero | `HeroCarousel` | Full-screen auto-sliding image carousel (3 slides, 6s interval) |
| About Teaser | `AboutPreview` | Company intro text + 2×2 stats grid |
| Upcoming Project | `UpcomingProject` | Diamond Habitat spotlight + brochure download |
| Why Choose Us | `WhyChooseUs` | 6-card feature grid + brand statement |
| Testimonials | `Testimonials` | 3-client rotating testimonials with progress indicator |

### 🧾 About (`/about`)

Deep-dive company profile page with:
- Company introduction & philosophy
- Mission & Vision (2-column layout)
- Core Values (4 items with left-border accent)
- Certifications & Compliance (4 icon cards — Local Approvals, RERA, Structural Safety, Environmental)
- Why Clients Trust Us (4 icon cards — Track Record, Transparent Process, Attention to Detail, Long-Term Reliability)
- Construction Philosophy statement

### 🏗️ Projects (`/projects`)

4-card portfolio grid displaying completed and ongoing projects:

| Project | Status | Image |
|---|---|---|
| Diamond Avenue | ✅ Completed | `project1.jpeg` |
| Diamond Queen | ✅ Completed | `project2.jpeg` |
| Diamond Habitat | 🟡 Ongoing Construction | `project3.jpeg` |
| Diamond Arcade | ✅ Completed | `project4.jpeg` |

Cards feature hover lift animation, status badge (gold for ongoing), and glassmorphism styling.

### 📞 Contact (`/contact`)

Three-channel contact section + office information:

| Channel | Value |
|---|---|
| 📞 Call | +91 76193 19696 |
| 💬 WhatsApp | +91 97420 36696 |
| ✉️ Email | diamondconstruction6696@gmail.com |
| 📍 Address | Shop No. 301, Lotus Paradise Centre, Kodailbail, Mangaluru – 575003 |

Includes an embedded **Google Maps iframe** pinned to the office location.

---

## 🧩 Component Reference

### Layout Components

#### `Navbar.jsx`
- **Type:** Fixed, floating pill-style navigation bar
- **Mobile:** Shows icon-only navigation (Home, User, Briefcase, Mail icons)
- **Desktop:** Shows text labels with active indicator lamp animation
- **Smart hiding:** Uses `IntersectionObserver` on `#site-footer` — auto-hides when footer is visible
- **Animation:** Framer Motion `layoutId="lamp"` shared element for smooth active indicator transition

#### `Footer.jsx`
- **Type:** Full-width footer with rounded top corners
- **Sections:** Quick Links | Logo (desktop) | Contact Details
- **Visual:** Gold tubelight bar at top, grain texture overlay, dark glassmorphism background
- **ID:** `id="site-footer"` — used by Navbar's intersection observer

#### `Loader.jsx`
- **Type:** Full-screen intro splash (shown for ~3.4 seconds on first load)
- **Animation sequence:**
  1. Logo scales in from 1.6× → 1.0× with spring physics
  2. "DIAMOND" text fades up + gold shimmer sweep
  3. "CONSTRUCTION" label fades in with delay
  4. Tagline words "BUILDING · BEYOND · BOUNDARIES" stagger in
- **Exit:** Fades out via `AnimatePresence` in `App.jsx`
- **Logo:** Shared `layoutId="site-logo"` with Navbar for seamless logo morph

#### `FloatingQuote.jsx`
- **Type:** Fixed right-edge slide-out contact panel (always visible)
- **State:** Collapsed (shows "CONTACT US" rotated tab) / Expanded (shows quick action buttons)
- **Interaction:**
  - **Desktop (hover-capable):** Expands on mouse enter, collapses 900ms after mouse leave
  - **Mobile (touch):** Toggle on tap
- **Actions:** WhatsApp direct link + Phone call button

### Section Components

#### `HeroCarousel.jsx`
- 3 slides: Diamond Avenue, Diamond Habitat, Diamond Queen
- Responsive: separate desktop & mobile image variants
- Auto-advances every 6 seconds with fade + slight scale animation
- Dot indicators at bottom (clickable to jump to slide)

#### `AboutPreview.jsx`
- 2-column layout: text left, `StatsGrid` right
- Text: company tagline + brief description
- CTA: "READ MORE ABOUT US →" link to `/about`

#### `UpcomingProject.jsx`
- Featured project: **Diamond Habitat**
- Left: large project image with overlay
- Right: Description, 4 detail items (Configuration, Structure, Built Quality, Location)
- 3 CTAs: Download Brochure (`Diamond-Habitat.pdf`), Get a Quote (WhatsApp), Explore Other Projects

#### `WhyChooseUs.jsx`
- 6 feature cards in a 3-column grid (responsive 1→2→3 cols)
- Features: Extensive Experience, Diverse Portfolio, Prime Locations, Quality Construction, Customer Trust, Commitment to Excellence
- Bottom: 2-column brand statement block

#### `Testimonials.jsx`
- 3 client testimonials: Ramesh Shetty (Diamond Avenue), Anita Rao (Diamond Queen), Mohammed Faizal (Diamond Arcade)
- Auto-cycles every 7 seconds
- Left rail (desktop): animated progress bar
- Large dimmed index number background decoration
- Manual prev/next navigation buttons

### UI Components

#### `StatsGrid.jsx` (`ui/`)
- 2×2 grid of company statistics
- Each cell: animated number value + descriptive label
- Glassmorphism card with gold border glow
- scroll-triggered number reveal animation

### Utility Components

| Component | Purpose |
|---|---|
| `ScrollToTop.jsx` | Hooks into `react-router-dom`'s `useLocation` to scroll window to top on every route change |
| `PageTransition.jsx` | Wraps children with a Framer Motion `motion.div` for page-level enter/exit transitions |
| `ScrollReveal.jsx` | Generic `whileInView` wrapper for scroll-triggered reveal on any child element |
| `TextReveal.jsx` | Animated character/word reveal effect for text content |

---

## 🎨 Design System

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0B0B0B` | Page background (near-black) |
| `surface` | `#111111` | Elevated surface (section alternates) |
| `gold` | `#B89B5E` | Primary accent — headings, icons, borders, CTAs |
| `goldSoft` | `#E6D8A8` | Gradient endpoint for gold buttons |
| `muted` | `#9E9E9E` | Secondary text, labels, descriptions |
| `white` | `#FFFFFF` | Primary text |

### Typography Scale

| Class | Font | Usage |
|---|---|---|
| `font-heading` | Playfair Display (serif) | All section headings, brand name |
| `font-body` | Inter (sans-serif) | Body text, UI labels, descriptions |
| `font-display` | Bebas Neue (sans-serif) | "CONSTRUCTION" label in loader |
| `font-number` | Inter / system-ui | Statistics numbers |

### CSS Utility Classes (Global)

| Class | Definition |
|---|---|
| `.heading-xl` | `clamp(2.8rem, 6vw, 5.2rem)` — hero-scale italic headings |
| `.heading-lg` | `clamp(2.2rem, 4vw, 3.5rem)` — section headings |
| `.heading-md` | `clamp(1.8rem, 3vw, 2.6rem)` — sub-section headings |
| `.eyebrow` | Gold uppercase small-caps label |
| `.body-text` | Muted body paragraph |
| `.body-text-lg` | Larger muted body paragraph |
| `.btn-gold` | Gold gradient primary CTA button |
| `.container-main` | `max-w-7xl mx-auto px-6 md:px-12` |
| `.section-padding` | `py-24 md:py-32` |
| `.grain` | Subtle noise texture overlay (fixed) |

### Animation Conventions

All animations use **Framer Motion** with these consistent patterns:

```jsx
// Scroll reveal (standard)
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}

// Staggered children
transition={{ duration: 0.6, delay: i * 0.08 }}

// Hover lift
whileHover={{ y: -6 }}

// Slide-in from left
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
```

---

## ✨ Key Features

| Feature | Details |
|---|---|
| 🎬 **Branded Intro Loader** | Full-screen animated splash with logo morph, shimmer, and staggered tagline |
| 🖼️ **Hero Carousel** | Auto-advancing 3-slide full-screen image carousel with responsive images |
| 🧭 **Smart Navbar** | Floating pill navbar that auto-hides when footer is in view; icon-only on mobile |
| 📜 **Scroll Animations** | All sections animate into view using Framer Motion `whileInView` |
| 📐 **Glassmorphism Cards** | Frosted glass cards with gold border glow on hover throughout the site |
| 💬 **Floating Contact Panel** | Persistent right-edge slide-out panel for instant WhatsApp/Call access |
| 📥 **Brochure Download** | Direct PDF download link for Diamond Habitat brochure |
| 🗺️ **Google Maps Embed** | Office location embedded via Google Maps iframe on Contact page |
| 📱 **Mobile Responsive** | Full mobile-first responsive design; separate mobile hero images |
| 🌟 **Logo Shared Element** | Framer Motion `layoutId` shared between Loader and Navbar for fluid morph |
| 🔄 **Auto Testimonials** | Client testimonials rotate every 7 seconds with animated progress bar |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mohdhafeez07/diamond-construction.git
cd diamond-construction

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server will start at **http://localhost:5173** with hot module replacement.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **dev** | `npm run dev` | Start Vite development server (HMR enabled) |
| **build** | `npm run build` | Build production bundle to `/dist` |
| **preview** | `npm run preview` | Preview the production build locally |
| **lint** | `npm run lint` | Run ESLint across all source files |
| **predeploy** | *(auto)* | Runs `npm run build` before deploy |
| **deploy** | `npm run deploy` | Deploy `/dist` to `gh-pages` branch on GitHub |

---

## 🚢 Deployment

This project is configured for **GitHub Pages** deployment.

### Setup (One-time)

The `homepage` field in `package.json` is already set:
```json
"homepage": "https://mohdhafeez07.github.io/diamond-construction"
```

The `vite.config.js` sets the `base` path for asset resolution:
```js
base: "/diamond-construction/"
```

### Deploy Command

```bash
npm run deploy
```

This will:
1. Run `npm run build` → generates optimised `/dist` folder
2. Run `gh-pages -d dist` → pushes `/dist` content to the `gh-pages` branch
3. GitHub Pages automatically serves the `gh-pages` branch

### Build Output

After `npm run build`:
```
dist/
├── index.html
├── assets/
│   ├── *.js      (chunked JS bundles)
│   └── *.css     (Tailwind purged CSS)
└── brochures/
    └── Diamond-Habitat.pdf
```

---

## 📞 Contact Information

**Diamond Construction**
- 📍 Shop No. 301, Lotus Paradise Centre, Kodailbail, Mangaluru – 575003
- 📞 +91 76193 19696
- 💬 WhatsApp: [+91 97420 36696](https://wa.me/919742036696)
- ✉️ [diamondconstruction6696@gmail.com](mailto:diamondconstruction6696@gmail.com)
- 🌐 [https://mohdhafeez07.github.io/diamond-construction](https://mohdhafeez07.github.io/diamond-construction)

---

<div align="center">
  <p>© 2025 Diamond Construction. All rights reserved.</p>
  <p><em>Building Beyond Boundaries</em></p>
</div>
