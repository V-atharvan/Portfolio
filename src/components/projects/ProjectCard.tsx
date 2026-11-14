import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, FileCode } from 'lucide-react';
import type { ProjectDetail } from '../../types/portfolio';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectCardProps {
  project: ProjectDetail;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getDemoBadge = (status: ProjectDetail['demoStatus']) => {
    switch (status) {
      case 'live':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Demo
          </span>
        );
      case 'prototype':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded border border-portfolio-sage/30">
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-sage" />
            Prototype
          </span>
        );
      case 'research_phase':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-portfolio-charcoal bg-portfolio-surface-subtle px-2 py-0.5 rounded border border-portfolio-border">
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-muted" />
            Research Project
          </span>
        );
      case 'repository_only':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-portfolio-muted bg-white px-2 py-0.5 rounded border border-portfolio-border">
            Source Code Available
          </span>
        );
    }
  };

  const techPills = project.technologies
    .flatMap((t) => t.items)
    .slice(0, 5);

  return (
    <article className="bg-white rounded-xl border border-portfolio-border shadow-subtle hover:shadow-card hover:border-portfolio-sage transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Graphic Header (Technical Schematic Card) */}
      <div className="p-5 pb-0">
        <div className="h-44 sm:h-48 w-full rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/80 p-4 relative overflow-hidden flex flex-col justify-between">
          
          {/* Subtle grid pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#263B32 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Top Bar of the preview */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-portfolio-forest font-bold bg-white px-2 py-0.5 rounded border border-portfolio-border shadow-subtle">
              {project.accentTag}
            </span>
            {getDemoBadge(project.demoStatus)}
          </div>

          {/* Center Schematic Articulation */}
          <div className="relative z-10 my-auto py-2">
            <div className="font-mono text-xs text-portfolio-forest font-semibold flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-portfolio-sage" />
              <span>{project.slug}.architecture</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5 text-[10px] font-mono">
              <div className="bg-white/90 p-1.5 rounded border border-portfolio-border text-center text-portfolio-charcoal">
                REST API
              </div>
              <div className="bg-white/90 p-1.5 rounded border border-portfolio-border text-center text-portfolio-charcoal">
                Data Core
              </div>
              <div className="bg-white/90 p-1.5 rounded border border-portfolio-border text-center text-portfolio-charcoal">
                Analytics
              </div>
            </div>
          </div>

          {/* Bottom preview info */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-portfolio-muted pt-2 border-t border-portfolio-border/50">
            <span>{project.completedFeatures.length} completed features</span>
            <span>{project.technicalArchitecture.steps.length} tier pipeline</span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
          </div>

          <p className="text-xs text-portfolio-forest font-medium mb-3">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-portfolio-muted line-clamp-3 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-portfolio-surface-subtle text-portfolio-charcoal border border-portfolio-border/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.flatMap(t => t.items).length > 5 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-portfolio-surface-subtle text-portfolio-muted">
                +{project.technologies.flatMap(t => t.items).length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action bar */}
        <div className="pt-4 border-t border-portfolio-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-portfolio-charcoal hover:text-portfolio-forest font-medium transition-colors"
                aria-label={`${project.title} GitHub repository`}
              >
                <GithubIcon className="w-3.5 h-3.5 text-portfolio-forest" />
                <span>Code</span>
              </a>
            )}
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-portfolio-charcoal hover:text-portfolio-forest font-medium transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-3.5 h-3.5 text-portfolio-forest" />
                <span>Demo</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-portfolio-muted">
                {project.demoStatus === 'prototype' ? 'Local Prototype' : 'Research Build'}
              </span>
            )}
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-portfolio-forest bg-portfolio-sage-light/60 hover:bg-portfolio-sage-light px-3 py-1.5 rounded-md border border-portfolio-sage/30 transition-colors"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>

    </article>
  );
};
