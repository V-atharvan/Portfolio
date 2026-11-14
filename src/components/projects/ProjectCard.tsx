import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, FileCode, Info } from 'lucide-react';
import type { ProjectItem } from '../../data/projects';
import { GithubIcon } from '../ui/SocialIcons';
import { ProjectTag } from '../common/ProjectTag';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isHighEmphasis = project.featured;

  // Flatten top technologies to display
  const allTechs = project.technologies.flatMap((t) => t.items);
  const displayTechs = allTechs.slice(0, 5);

  return (
    <article
      className={`bg-white rounded-xl border border-portfolio-border shadow-subtle hover:shadow-card hover:border-portfolio-sage transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
        isHighEmphasis ? 'ring-1 ring-portfolio-forest/10' : ''
      }`}
    >
      {/* Top Visual Area (Technical Schematic Preview) */}
      <div className="p-5 pb-0">
        <div
          className={`w-full rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/80 p-4 relative overflow-hidden flex flex-col justify-between ${
            isHighEmphasis ? 'h-48 sm:h-52 bg-gradient-to-br from-[#FAF9F5] to-[#F0F2EB]' : 'h-40 sm:h-44'
          }`}
        >
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#263B32 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
            aria-hidden="true"
          />

          {/* Top Bar of Graphic */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-1.5 min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-widest text-portfolio-forest font-bold bg-white px-2 py-0.5 rounded border border-portfolio-border shadow-subtle shrink-0">
              {project.category.split('/')[0].trim()}
            </span>

            {/* Live Demo / Prototype Status */}
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-300 hover:bg-emerald-100 transition-colors shadow-subtle shrink-0"
                aria-label={`Open live demo for ${project.title}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Deployed Demo</span>
                <ExternalLink className="w-3 h-3 text-emerald-700 ml-0.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded border border-portfolio-sage/30 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-portfolio-sage" />
                <span>{project.statusBadge}</span>
              </span>
            )}
          </div>

          {/* Center Schematic Articulation */}
          <div className="relative z-10 my-auto py-2">
            <div className="font-mono text-xs text-portfolio-forest font-semibold flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-portfolio-sage" />
              <span>{project.slug}.architecture</span>
            </div>

            <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-[10px] font-mono text-center">
              <div className="bg-white/95 p-1.5 rounded border border-portfolio-border text-portfolio-charcoal truncate shadow-subtle">
                REST Ingestion
              </div>
              <div className="bg-white/95 p-1.5 rounded border border-portfolio-border text-portfolio-charcoal truncate shadow-subtle">
                Data Modeling
              </div>
              <div className="bg-white/95 p-1.5 rounded border border-portfolio-border text-portfolio-charcoal truncate shadow-subtle">
                Analytics Core
              </div>
            </div>
          </div>

          {/* Bottom preview info */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-portfolio-muted pt-2 border-t border-portfolio-border/60">
            <span>{project.completedFeatures.length} completed features</span>
            <span className="text-portfolio-forest font-medium">Verified Stack</span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Subtitle */}
          <div className="mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            <p className="text-xs text-portfolio-forest font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Short description */}
          <p className="text-xs sm:text-sm text-portfolio-muted line-clamp-3 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Scientific / Status Note Callout */}
          {project.highlightNotice && (
            <div className="mb-4 p-2.5 rounded bg-portfolio-surface-subtle border border-portfolio-border text-[11px] text-portfolio-charcoal/90 leading-relaxed flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-portfolio-forest shrink-0 mt-0.5" />
              <span>{project.highlightNotice}</span>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {displayTechs.map((tech) => (
              <ProjectTag key={tech} variant="neutral">
                {tech}
              </ProjectTag>
            ))}
            {allTechs.length > 5 && (
              <ProjectTag variant="outline">
                +{allTechs.length - 5}
              </ProjectTag>
            )}
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-portfolio-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-portfolio-charcoal hover:text-portfolio-forest font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded"
                aria-label={`${project.title} GitHub repository`}
              >
                <GithubIcon className="w-3.5 h-3.5 text-portfolio-forest" />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-portfolio-muted">
                Repository Private
              </span>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-900 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-portfolio-forest bg-portfolio-sage-light/60 hover:bg-portfolio-sage-light px-3 py-1.5 rounded-md border border-portfolio-sage/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
            aria-label={`View detailed case study for ${project.title}`}
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
