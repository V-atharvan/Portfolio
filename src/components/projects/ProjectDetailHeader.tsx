import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { ProjectCaseStudy } from '../../types/portfolio';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectDetailHeaderProps {
  project: ProjectCaseStudy;
  currentIndex: number;
  totalProjects: number;
}

export const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({
  project,
  currentIndex,
  totalProjects,
}) => {
  return (
    <header className="space-y-6">
      {/* Top Breadcrumb & Project Counter */}
      <nav aria-label="Project Navigation" className="flex items-center justify-between">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-portfolio-forest hover:text-portfolio-forest-hover hover:underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-mono text-portfolio-muted bg-white px-2.5 py-1 rounded border border-portfolio-border shadow-subtle">
          <span>Case Study</span>
          <span className="text-portfolio-border">|</span>
          <span className="font-bold text-portfolio-forest">
            {currentIndex + 1} of {totalProjects}
          </span>
        </div>
      </nav>

      {/* Main Header Card */}
      <div className="bg-white rounded-2xl border border-portfolio-border p-6 sm:p-10 shadow-card space-y-6">
        {/* Top Badges & Verified External Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-portfolio-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-forest bg-portfolio-sage-light px-2.5 py-1 rounded">
              {project.accentTag}
            </span>
            <span className="text-xs font-mono text-portfolio-muted bg-portfolio-surface-subtle px-2.5 py-1 rounded border border-portfolio-border">
              {project.statusBadge}
            </span>
            <span className="text-xs font-mono text-portfolio-muted">
              {project.category}
            </span>
          </div>

          {/* Verified External Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-portfolio-border bg-white text-xs font-medium text-portfolio-charcoal hover:border-portfolio-forest hover:text-portfolio-forest transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <GithubIcon className="w-4 h-4 text-portfolio-forest" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-portfolio-surface-subtle text-xs font-mono text-portfolio-muted border border-portfolio-border">
                <span>Repository: Private / In-Development</span>
              </span>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                aria-label={`Open ${project.title} live interactive preview`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Interactive Prototype</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* Title, Official Title & Subtitle */}
        <div className="space-y-3 min-w-0">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-portfolio-charcoal break-words">
            {project.title}
          </h1>
          {project.officialTitle && (
            <p className="text-xs sm:text-sm font-mono text-portfolio-muted leading-relaxed uppercase tracking-wide break-words">
              {project.officialTitle}
            </p>
          )}
          <p className="text-base sm:text-xl font-medium text-portfolio-forest break-words">
            {project.subtitle}
          </p>
        </div>

        {/* Short Executive Summary */}
        <p className="text-sm sm:text-base text-portfolio-charcoal/90 leading-relaxed max-w-4xl">
          {project.shortDescription}
        </p>
      </div>
    </header>
  );
};
