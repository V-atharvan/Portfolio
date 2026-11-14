import React from 'react';
import { CheckCircle2, Cpu, UserCheck } from 'lucide-react';
import type { ProjectContributionArea } from '../../types/portfolio';

interface ProjectContributionsSectionProps {
  contributions: ProjectContributionArea[];
}

export const ProjectContributionsSection: React.FC<ProjectContributionsSectionProps> = ({
  contributions,
}) => {
  return (
    <section aria-labelledby="section-contributions" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
          <Cpu className="w-4 h-4" />
          <span id="section-contributions">Section J: Atharva's Direct Engineering Ownership</span>
        </div>
        <span className="text-xs font-mono text-portfolio-muted">
          Individual Contributions & Deliverables
        </span>
      </div>

      <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-portfolio-charcoal">
            Technical Ownership & Concrete Deliverables
          </h2>
          <p className="text-xs sm:text-sm text-portfolio-muted mt-1">
            Exact breakdown of responsibilities, architecture design decisions, and hands-on implementation completed by Atharva.
          </p>
        </div>

        <div className="space-y-4">
          {contributions.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border/80 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-portfolio-border/70">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-portfolio-forest" />
                  <h3 className="font-bold text-sm sm:text-base text-portfolio-charcoal">
                    {item.area}
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded border self-start sm:self-auto bg-white text-portfolio-forest border-portfolio-border">
                  {item.ownership}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed">
                {item.description}
              </p>

              {/* Concrete deliverables */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono font-bold text-portfolio-forest uppercase tracking-wider block">
                  Specific Deliverables:
                </span>
                <div className="space-y-1.5">
                  {item.deliverables.map((deliv, delivIdx) => (
                    <div
                      key={delivIdx}
                      className="flex items-start gap-2 text-xs text-portfolio-charcoal/80 bg-white p-2.5 rounded border border-portfolio-border/60"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-portfolio-forest mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
