# Atharva Vaddepalli — Personal Developer Portfolio

> **Java Backend Developer | Spring Boot | AI/ML Enthusiast**  
> Third Year B.Tech Computer Science Engineering  
> N. B. Navale Sinhgad College of Engineering, Solapur  
> Solapur, Maharashtra, India

A high-performance, accessible, and responsive personal developer portfolio website designed with an editorial, minimal aesthetic. Engineered around modern Java backend architecture, relational data modeling, and practical machine learning applications.

---

## 🎨 Visual Identity & Design System

The application strictly enforces a light, minimal, and content-first visual identity:
- **Primary Background**: Warm off-white (`#F7F7F2`)
- **Secondary Surfaces**: Pure white (`#FFFFFF`)
- **Primary Accent**: Deep forest green (`#263B32`)
- **Secondary Accent**: Muted sage green (`#8A9B83`)
- **Subtle Accent Surface**: Soft sage tint (`#E9EEE7`)
- **Main Text**: Charcoal grey (`#303632`)
- **Secondary Text**: Muted slate (`#737A75`)
- **Borders & Dividers**: Soft neutral grey (`#E5E7E2`)

*Strictly avoids dark mode as primary theme, black backgrounds, glowing neon cards, fake percentage bars, and generic AI templates.*

---

## 🛠️ Technology Stack

- **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/) with Rolldown bundling & route-level code splitting
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom fluid clamp typography
- **Routing**: [React Router DOM 7](https://reactrouter.com/) (Single Page Application architecture)
- **Icons**: [Lucide React](https://lucide.dev/) + custom vector SVG monograms
- **Quality Assurance**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (0 warnings, 0 errors)

---

## 🚀 Implemented Portfolio Features

1. **Sticky Navigation Bar**:
   - Brand typography mark (`ATHARVA.`)
   - Active section tracking based on scroll position
   - Desktop navigation links with animated underline indicator
   - Fullscreen mobile drawer toggle with background scroll lock and `Escape` key dismissal
   - Direct modal trigger for developer resume summary

2. **Hero Section**:
   - Academic status indicator pill (`Third Year B.Tech CSE • N.B.N. Sinhgad COE`)
   - Responsive fluid typography clamping (`hero-title-clamp`)
   - Verified GitHub, LinkedIn, and email channel badges
   - Interactive system architecture spec window with real-time layer switching (Architecture, REST API, Pipeline)

3. **About Me**:
   - Concise engineering narrative focusing on server-side logic and relational schemas
   - Three core development pillars: *Backend Engineering*, *Data & Persistence*, *Applied AI & ML*
   - Verified academic context card with current enrollment details

4. **Technical Skills & Competencies**:
   - Organized into 5 functional layers: Programming Languages, Backend Architecture, Database Management, Development Tools, and Data Science / Machine Learning
   - Category filtering pills with real-time category filtering
   - Genuine competency level tags without artificial progress percentages

5. **Featured Projects & Research Prototypes**:
   - **GreenSynth**: Phytochemical synthesis research and characterization analytics platform (Spring Boot 3.x, PostgreSQL, Python).
   - **NeuroScope 3D**: Medical imaging research prototype for 3D brain tumor visualization and volumetric metrics using MRI scans (Python, FastAPI, Vercel).
   - **BuildWise AI**: AI-assisted construction estimation platform and automated Bill of Quantities generator (FastAPI, Celery, PostgreSQL).
   - **Odyssey**: Role-based campus recruitment and skill matching platform (Java 17, Spring Boot 3.2.3, Spring Security, JWT, Docker; Team Pitch Recognition at E-Cell IIT Bombay Illuminate).

6. **Individual Technical Case Studies (`/projects/:slug`)**:
   Every project features a standardized 14-section architectural case study:
   - Section A: Project Header & Hero Banner
   - Callout Notice: Non-clinical research disclaimers, scientific integrity notes, or pitch recognition badges
   - Section B: Project Overview, Background & Motivation
   - Sections C & D: Problem Statement vs. Proposed Engineering Solution
   - Section E: Key Verified Implemented Features (with verification tags)
   - Section F: Categorized Technology Stack with specific technical purposes
   - Section G: System Architecture & Data Flow Pipeline (responsive vertical/horizontal flow)
   - Section H: Engineering Methodology & 5-Phase Development Lifecycle
   - Section I: Technical Challenges & Engineering Trade-Offs (Difficulty, Approach, Outcome)
   - Section J: Atharva's Direct Engineering Ownership & Deliverables
   - Section K: Interactive Technical Schematic & Architectural Blueprint Inspector
   - Section L: Implementation Status (Verified v1.0) vs. Future Roadmap Milestones
   - Section M: Verified Exploration Links (verified GitHub repositories & live deployments)
   - Section N: Sequential Project Navigation (Previous / Next / All Projects)

7. **Experience & Technical Activities**:
   - Vertical timeline calibrated with pixel-perfect node alignment
   - E-Cell IIT Bombay Illuminate Pitch Lead, TEDx Creative Lead, and departmental backend engineering

8. **Honors & Achievements**:
   - E-Cell IIT Bombay Illuminate Team Pitch Recognition, TEDx Appointment, and AICTE IDE Bootcamp Selection

9. **Formal Education**:
   - Degree details, coursework highlights, and laboratory training environment at N. B. Navale Sinhgad College of Engineering

10. **Contact Form**:
    - Client-side validation with real-time error descriptions (`aria-invalid`, `aria-describedby`)
    - Honest backend gateway notice providing direct `mailto:` pre-filled draft integration

11. **Developer Resume Modal**:
    - In-browser preview with instant Print/Save PDF export and plain-text clipboard copy

---

## 📁 Project Structure

```text
Port/
├── public/
│   ├── favicon.svg             # Minimal geometric AV monogram favicon
│   ├── apple-touch-icon.png    # 180x180 mobile touch icon
│   ├── og-image.png            # 1200x630 social sharing preview card
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # XML sitemap with canonical route URLs
├── src/
│   ├── assets/                 # Vector graphics & illustration assets
│   ├── components/
│   │   ├── common/             # Reusable UI primitives (Button, SectionHeading, ResumeModal)
│   │   ├── contact/            # Contact form and validation components
│   │   ├── layout/             # Navbar, Footer, Container, SectionContainer
│   │   ├── projects/           # Modular project case study section components (A through N)
│   │   └── skills/             # Skill category cards and technology items
│   ├── config/
│   │   ├── navigation.ts       # Centralized navbar links
│   │   ├── personal.ts         # Education, headlines, and bio configuration
│   │   └── social.ts           # Verified social URLs and handles
│   ├── data/
│   │   ├── projectDetails.ts   # Exhaustive 14-section case study data for all 4 projects
│   │   ├── projects.ts         # Project summary cards for homepage grid
│   │   ├── skills.ts           # Technical skills data
│   │   ├── experience.ts       # Experience timeline data
│   │   ├── achievements.ts     # Honors & achievements data
│   │   └── education.ts        # Formal education & coursework data
│   ├── pages/
│   │   ├── HomePage.tsx        # Homepage orchestrating all 8 sections
│   │   ├── ProjectDetailPage.tsx # Dynamic case study renderer with lazy loading
│   │   └── NotFoundPage.tsx    # Styled 404 fallback page
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interface definitions
│   ├── App.tsx                 # Route declarations with Suspense & code splitting
│   ├── index.css               # Tailwind directives, color variables & fluid clamping
│   └── main.tsx                # React DOM root entry point
├── .env.example                # Documented environment variable placeholders
├── .gitignore                  # Git exclusion rules (build artifacts, local env files)
├── index.html                  # SEO metadata, Open Graph, fonts, and Schema.org JSON-LD
├── package.json                # Dependencies, scripts, and package metadata
├── tailwind.config.js          # Custom theme extensions, fonts, and colors
├── tsconfig.json               # TypeScript compiler configuration
├── vercel.json                 # Vercel deployment configuration, SPA rewrites & security headers
└── vite.config.ts              # Vite build setup with Rolldown manualChunks code splitting
```

---

## 💻 Local Setup & Development

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [npm](https://www.npmjs.com/) v9.0.0 or higher

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/V-atharvan/Port.git
cd Port

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

---

## 🔨 Build, Lint & Preview Commands

```bash
# Type-check with tsc and build optimized production bundle
npm run build

# Run fast Oxlint static analysis
npm run lint

# Preview the production build locally
npm run preview
```

---

## 🚢 Production Deployment (Vercel)

The repository includes a ready-to-deploy [`vercel.json`](file:///c:/Users/Atharva/OneDrive/Documents/Atharva/Project/Port/vercel.json) configuration:

1. **SPA Rewrites**: All deep routes (`/projects/greensynth`, etc.) redirect to `/index.html` with HTTP 200.
2. **Security Headers**:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
   - Strict `Content-Security-Policy` protecting fonts, scripts, and styles
3. **Static Asset Caching**: 1-year immutable caching for `/assets/*` bundles.

### Deploying to Vercel
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 📝 Maintenance & Content Customization

To update your portfolio content over time:

| What to Update | Source File | Description |
| :--- | :--- | :--- |
| **Personal Bio & Headlines** | `src/config/personal.ts` | Name, title, education, college, and quote |
| **Social Links & Handles** | `src/config/social.ts` | GitHub, LinkedIn, and Email URLs |
| **Case Study Details** | `src/data/projectDetails.ts` | Deep 14-section case study content for all projects |
| **Homepage Project Cards** | `src/data/projects.ts` | Project cards, summaries, and tags |
| **Technical Skills** | `src/data/skills.ts` | Add or update technologies and proficiency tags |
| **Experience Milestones** | `src/data/experience.ts` | Timeline roles, activities, and contributions |
| **Achievements** | `src/data/achievements.ts` | Pitch recognitions and honors |
| **Formal Coursework** | `src/data/education.ts` | Academic courses and focus areas |

---

## 📄 License & Attribution

Designed and engineered by **Atharva Vaddepalli**. All rights reserved. Source code is released under the MIT License for educational and portfolio reference.
