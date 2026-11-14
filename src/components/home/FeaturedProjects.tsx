import React from 'react';
import { projectsData } from '../../data/portfolioData';
import { ProjectCard } from '../projects/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-portfolio-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-14">
          <SectionHeading
            badge="FEATURED ENGINEERING WORK"
            title="Projects & Research Prototypes"
            subtitle="Real software systems engineered around Java Spring Boot backend services, relational persistence, and applied data analytics."
            className="mb-0"
          />

          <div className="shrink-0 text-xs font-mono text-portfolio-muted">
            <span>4 Core Architectural Implementations</span>
          </div>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project verification and transparency note */}
        <div className="mt-12 p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-portfolio-muted">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-portfolio-forest shrink-0" />
            <span>
              Each project features a dedicated case study detailing problem definition, system architecture, database design, completed vs. planned capabilities, and engineering learnings.
            </span>
          </div>
          <a
            href="https://github.com/AtharvaVaddepalli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-portfolio-forest font-semibold hover:underline shrink-0"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
