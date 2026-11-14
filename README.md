# Atharva Vaddepalli — Personal Developer Portfolio

> **Java Backend Developer | Spring Boot | AI/ML Enthusiast**  
> Third Year B.Tech Computer Science Engineering  
> N. B. Navale Sinhgad College of Engineering, Solapur  

A professional, modern, visually refined, and fully responsive developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **React Router**. Engineered to reflect genuine technical competencies, clean server architectures, data-driven systems, and authentic research projects.

---

## 🎨 Design Philosophy & Color Palette

The interface adheres to a sophisticated, restrained, and accessible aesthetic:
- **Primary Background**: Warm off-white (`#F7F7F2`)
- **Secondary Background**: Clean white (`#FFFFFF`)
- **Primary Accent**: Forest green (`#263B32`)
- **Secondary Accent**: Sage green (`#8A9B83`)
- **Main Text**: Dark charcoal (`#303632`)
- **Secondary Text**: Muted grey (`#737A75`)
- **Borders**: Soft neutral grey (`#E5E7E2`)

*Strictly avoids dark-mode-first designs, neon accents, excessive gradients, AI template tropes, and gimmicky visual effects.*

---

## 📁 Key Features & Website Structure

1. **Sticky Accessible Navbar**: Brand typography mark, smooth navigation across all sections, and instant modal resume preview.
2. **Hero Overview**: Clear professional positioning, introduction statement, verified social/GitHub links, and an interactive architectural specification card showcasing Spring Boot REST API layers and data flows.
3. **About Me**: Concise engineering background, core technical pillars, and authentic academic context.
4. **Verified Technical Skills**: Structured into functional layers (Programming, Backend, Database, Tools, AI/ML) with category filter pills and descriptive competency tags without artificial percentage bars.
5. **Featured Projects**:
   - **GREENSYNTH**: Data-driven research and analytics platform for green synthesis of semiconductor materials.
   - **NEUROSCOPE 3D**: Medical imaging research prototype for 3D brain tumor visualization using MRI voxel data.
   - **BUILDWISE AI**: AI-assisted construction estimation platform and Bill of Quantities generator.
   - **ODYSSEY**: College-to-company skill-based recruitment platform with multi-role access control.
6. **Individual Project Case Study Pages (`/projects/:slug`)**:
   - Problem statement & proposed solution
   - Interactive 4-tier pipeline architecture diagram
   - Full categorized technology stack
   - Atharva's specific direct contributions
   - Clearly differentiated **Completed** vs. **Planned Roadmap** features
   - Engineering challenges and architectural learnings
   - Next/Previous project routing
7. **Experience & Activities**: Leadership roles, hackathons, and collegiate development contributions grounded in authentic academic milestones.
8. **Achievements & Certifications**: Categorized honors, recognitions, and technical coursework.
9. **Formal Education**: Verified third-year undergraduate curriculum at N. B. Navale Sinhgad College of Engineering.
10. **Contact Form**: Client-side field validation with honest backend gateway notice providing direct `mailto:` links.
11. **Developer Resume Modal**: Instant print/PDF export and plain-text clipboard copy.

---

## ⚙️ Centralized Configuration

All personal data, links, education records, project case studies, and achievements are maintained in a single editable file:
- [`src/data/portfolioData.ts`](file:///c:/Users/Atharva/OneDrive/Documents/Atharva/Project/Port/src/data/portfolioData.ts)
- Type definitions in [`src/types/portfolio.ts`](file:///c:/Users/Atharva/OneDrive/Documents/Atharva/Project/Port/src/types/portfolio.ts)

To customize or update any section, simply edit `portfolioData.ts`.

---

## 🛠️ Project Structure

```text
src/
├── assets/                  # Static assets and icons
├── components/
│   ├── home/                # Homepage section components
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Hero.tsx
│   │   └── Skills.tsx
│   ├── layout/              # Structural components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── projects/            # Project showcase & architecture diagrams
│   │   ├── ArchitectureDiagram.tsx
│   │   └── ProjectCard.tsx
│   └── ui/                  # Reusable accessible UI components
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── ResumeModal.tsx
│       ├── SectionHeading.tsx
│       └── SocialIcons.tsx
├── data/
│   └── portfolioData.ts     # Centralized editable configuration
├── pages/
│   ├── HomePage.tsx
│   ├── NotFoundPage.tsx
│   └── ProjectDetailPage.tsx
├── types/
│   └── portfolio.ts         # TypeScript interfaces
├── App.tsx                  # Main router setup
├── index.css                # Tailwind directives & base styles
└── main.tsx                 # Application entry point
```

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Compile TypeScript and generate production bundle
npm run build

# Preview production build locally
npm run preview
```
