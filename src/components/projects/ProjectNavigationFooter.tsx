import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import type { ProjectCaseStudy } from '../../types/portfolio';

interface ProjectNavigationFooterProps {
  prevProject: ProjectCaseStudy | null;
  nextProject: ProjectCaseStudy | null;
  currentIndex: number;
  totalProjects: number;
}

export const ProjectNavigationFooter: React.FC<ProjectNavigationFooterProps> = ({
  prevProject,
  nextProject,
  currentIndex,
  totalProjects,
}) => {
  return (
    <nav
      aria-label="Previous and Next Project Navigation"
      className="space-y-4 pt-8 border-t border-portfolio-border"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-portfolio-muted">
        <span>Section N: Project Navigation</span>
        <span>
          Sequence Order: {currentIndex + 1} of {totalProjects}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Project Card */}
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="p-5 rounded-xl bg-white border border-portfolio-border hover:border-portfolio-forest transition-all shadow-subtle group flex items-start gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
            aria-label={`Go to previous project: ${prevProject.title}`}
          >
            <div className="p-2 rounded-lg bg-portfolio-surface-subtle group-hover:bg-portfolio-sage-light text-portfolio-forest transition-colors mt-0.5">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-muted block">
                Previous Case Study
              </span>
              <h4 className="font-bold text-sm sm:text-base text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors truncate">
                {prevProject.title}
              </h4>
              <p className="text-xs text-portfolio-muted truncate mt-0.5">
                {prevProject.subtitle}
              </p>
            </div>
          </Link>
        ) : (
          <div className="p-5 rounded-xl bg-portfolio-surface-subtle/50 border border-dashed border-portfolio-border text-center flex flex-col items-center justify-center text-xs font-mono text-portfolio-muted">
            <span>First Project in Portfolio</span>
            <span className="text-[10px] text-portfolio-sage font-medium mt-1">
              GreenSynth is Project 01
            </span>
          </div>
        )}

        {/* Next Project Card */}
        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="p-5 rounded-xl bg-white border border-portfolio-border hover:border-portfolio-forest transition-all shadow-subtle group flex items-start justify-between gap-3 text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
            aria-label={`Go to next project: ${nextProject.title}`}
          >
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-muted block">
                Next Case Study
              </span>
              <h4 className="font-bold text-sm sm:text-base text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors truncate">
                {nextProject.title}
              </h4>
              <p className="text-xs text-portfolio-muted truncate mt-0.5">
                {nextProject.subtitle}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-portfolio-surface-subtle group-hover:bg-portfolio-sage-light text-portfolio-forest transition-colors mt-0.5">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ) : (
          <div className="p-5 rounded-xl bg-portfolio-surface-subtle/50 border border-dashed border-portfolio-border text-center flex flex-col items-center justify-center text-xs font-mono text-portfolio-muted">
            <span>Final Project in Portfolio</span>
            <span className="text-[10px] text-portfolio-sage font-medium mt-1">
              Odyssey completes the series
            </span>
          </div>
        )}
      </div>

      {/* Central Action Bar: Back to All Projects */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-portfolio-forest font-semibold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects Overview</span>
        </Link>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-portfolio-border bg-white text-portfolio-charcoal hover:border-portfolio-forest transition-colors shadow-subtle font-mono text-[11px]"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-portfolio-forest" />
          <span>View All 4 Projects Grid</span>
        </Link>
      </div>
    </nav>
  );
};
