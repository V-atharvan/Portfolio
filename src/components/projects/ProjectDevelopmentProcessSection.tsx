import React from 'react';
import { Calendar, GitPullRequest, ListChecks } from 'lucide-react';
import type { ProjectDevelopmentPhase } from '../../types/portfolio';

interface ProjectDevelopmentProcessSectionProps {
  phases: ProjectDevelopmentPhase[];
}

export const ProjectDevelopmentProcessSection: React.FC<ProjectDevelopmentProcessSectionProps> = ({
  phases,
}) => {
  return (
    <section aria-labelledby="section-development-process" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
          <GitPullRequest className="w-4 h-4" />
          <span id="section-development-process">Section H: Engineering Methodology & Development Lifecycle</span>
        </div>
        <span className="text-xs font-mono text-portfolio-muted">
          {phases.length} Structured Phases
        </span>
      </div>

      <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-portfolio-charcoal">
            Engineering Process & Iterative Execution
          </h2>
          <p className="text-xs sm:text-sm text-portfolio-muted mt-1">
            Systematic progression from domain inquiry and architectural constraints to verified implementation.
          </p>
        </div>

        <div className="space-y-4">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border/80 hover:border-portfolio-sage transition-colors space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-portfolio-border/70">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded border border-portfolio-sage/30">
                    Phase 0{idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-portfolio-charcoal">
                    {phase.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-portfolio-muted">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{phase.phase}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed">
                {phase.summary}
              </p>

              {/* Bulleted Activities */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-portfolio-forest">
                  <ListChecks className="w-3.5 h-3.5" />
                  <span>Key Engineering Milestones:</span>
                </div>
                <ul className="space-y-1 pl-4">
                  {phase.activities.map((act, actIdx) => (
                    <li key={actIdx} className="text-xs text-portfolio-muted list-disc leading-relaxed">
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
