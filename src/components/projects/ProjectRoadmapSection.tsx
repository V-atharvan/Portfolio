import React from 'react';
import { CheckCircle2, Clock, GitCommit } from 'lucide-react';
import type { ProjectRoadmapItem } from '../../types/portfolio';

interface ProjectRoadmapSectionProps {
  completedFeatures: ProjectRoadmapItem[];
  plannedFeatures: ProjectRoadmapItem[];
}

export const ProjectRoadmapSection: React.FC<ProjectRoadmapSectionProps> = ({
  completedFeatures,
  plannedFeatures,
}) => {
  return (
    <section aria-labelledby="section-roadmap" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
          <GitCommit className="w-4 h-4" />
          <span id="section-roadmap">Section L: Implementation Status & Future Roadmap</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-emerald-700 font-semibold">{completedFeatures.length} Verified</span>
          <span className="text-portfolio-border">|</span>
          <span className="text-portfolio-muted">{plannedFeatures.length} In-Roadmap</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Completed & Verified Features */}
        <div className="bg-white rounded-xl border border-portfolio-border p-6 shadow-subtle flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-portfolio-border">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Implemented Features</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                Functional & Tested
              </span>
            </div>

            <div className="space-y-3">
              {completedFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/70 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-xs sm:text-sm text-portfolio-charcoal">
                      {feat.name}
                    </h4>
                    <span className="text-[10px] font-mono font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/80 shrink-0">
                      {feat.badge}
                    </span>
                  </div>
                  <p className="text-xs text-portfolio-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-portfolio-border text-[11px] font-mono text-emerald-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>All completed items verified through integration or unit execution.</span>
          </div>
        </div>

        {/* Planned Future Milestones */}
        <div className="bg-white rounded-xl border border-portfolio-border p-6 shadow-subtle flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-portfolio-border">
              <div className="flex items-center gap-2 text-portfolio-forest font-bold text-sm">
                <Clock className="w-4 h-4 text-portfolio-sage" />
                <span>Planned Future Scope</span>
              </div>
              <span className="text-[10px] font-mono text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded font-semibold border border-portfolio-sage/30">
                Future Roadmap
              </span>
            </div>

            <div className="space-y-3">
              {plannedFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/70 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-xs sm:text-sm text-portfolio-charcoal">
                      {feat.name}
                    </h4>
                    <span className="text-[10px] font-mono font-medium text-portfolio-forest bg-portfolio-sage-light px-1.5 py-0.5 rounded border border-portfolio-sage/30 shrink-0">
                      {feat.badge}
                    </span>
                  </div>
                  <p className="text-xs text-portfolio-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-portfolio-border text-[11px] font-mono text-portfolio-muted flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-portfolio-sage" />
            <span>Future milestones clearly separated from current code implementation.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
