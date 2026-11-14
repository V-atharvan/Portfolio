import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { projects } from '../data/projects';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ArrowRight } from 'lucide-react';
import { socialConfig } from '../config/social';

export const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects" background="white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-14">
        <SectionHeading
          badge="FEATURED ENGINEERING WORK"
          title="Featured Projects & Research Prototypes"
          subtitle="Real software systems engineered around Java Spring Boot backends, medical image analysis, and applied research workflows."
          className="mb-0"
        />

        <div className="shrink-0 text-xs font-mono text-portfolio-muted font-medium">
          <span>4 Core Architectural Implementations</span>
        </div>
      </div>

      {/* Grid of Projects */}
      <ProjectGrid projects={projects} />

      {/* Verification note & GitHub link */}
      <div className="mt-12 p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-portfolio-muted">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-portfolio-forest shrink-0" aria-hidden="true" />
          <span className="font-sans">
            Each project is structured with verified source repositories, detailed technical architecture traces, and explicit distinctions between completed features and future milestones.
          </span>
        </div>
        <a
          href={socialConfig.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-portfolio-forest font-semibold hover:underline shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded"
          aria-label="Explore all public repositories on GitHub"
        >
          <span>Explore repositories on GitHub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </SectionContainer>
  );
};
