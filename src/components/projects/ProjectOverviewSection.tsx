import React from 'react';
import { BookOpen, Compass, Target } from 'lucide-react';

interface ProjectOverviewSectionProps {
  overview: {
    summary: string;
    background: string;
    motivation: string;
  };
}

export const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({
  overview,
}) => {
  return (
    <section aria-labelledby="section-overview" className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
        <BookOpen className="w-4 h-4" />
        <span id="section-overview">Section B: Project Overview</span>
      </div>

      <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-6">
        {/* Core Overview Statement */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-portfolio-charcoal">
            System Purpose & Objectives
          </h2>
          <p className="text-sm sm:text-base text-portfolio-charcoal/90 leading-relaxed">
            {overview.summary}
          </p>
        </div>

        {/* Background & Motivation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-portfolio-border">
          {/* Domain Background */}
          <div className="space-y-3 p-4 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/80">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-portfolio-forest uppercase tracking-wide">
              <Compass className="w-4 h-4 text-portfolio-sage" />
              <span>Domain Background</span>
            </div>
            <p className="text-xs sm:text-sm text-portfolio-charcoal/80 leading-relaxed">
              {overview.background}
            </p>
          </div>

          {/* Development Motivation */}
          <div className="space-y-3 p-4 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/80">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-portfolio-forest uppercase tracking-wide">
              <Target className="w-4 h-4 text-portfolio-sage" />
              <span>Engineering Motivation</span>
            </div>
            <p className="text-xs sm:text-sm text-portfolio-charcoal/80 leading-relaxed">
              {overview.motivation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
