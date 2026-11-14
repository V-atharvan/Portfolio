import React from 'react';
import { AlertTriangle, CheckCircle2, Lightbulb, Wrench } from 'lucide-react';
import type { ProjectTechnicalChallenge } from '../../types/portfolio';

interface ProjectChallengesSectionProps {
  challenges: ProjectTechnicalChallenge[];
}

export const ProjectChallengesSection: React.FC<ProjectChallengesSectionProps> = ({
  challenges,
}) => {
  return (
    <section aria-labelledby="section-challenges" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
          <Lightbulb className="w-4 h-4" />
          <span id="section-challenges">Section I: Technical Challenges & Engineering Trade-Offs</span>
        </div>
        <span className="text-xs font-mono text-portfolio-muted">
          {challenges.length} Deep-Dive Engineering Decisions
        </span>
      </div>

      <div className="space-y-5">
        {challenges.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-7 shadow-subtle space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-portfolio-border">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded">
                  Challenge 0{idx + 1}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-portfolio-charcoal">
                  {item.challenge}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-portfolio-muted hidden sm:inline">
                Architectural Resolution
              </span>
            </div>

            {/* Why Difficult vs Engineering Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Why Difficult */}
              <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200/70 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 uppercase">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>The Technical Difficulty</span>
                </div>
                <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed">
                  {item.whyDifficult}
                </p>
              </div>

              {/* Engineering Approach */}
              <div className="p-4 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-portfolio-forest uppercase">
                  <Wrench className="w-4 h-4 text-portfolio-sage shrink-0" />
                  <span>Engineering Approach Taken</span>
                </div>
                <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed">
                  {item.engineeringApproach}
                </p>
              </div>
            </div>

            {/* Outcome & Architectural Learning */}
            <div className="p-3.5 rounded-lg bg-portfolio-sage-light/40 border border-portfolio-sage/30 flex items-start gap-2.5 text-xs sm:text-sm text-portfolio-charcoal">
              <CheckCircle2 className="w-4 h-4 text-portfolio-forest shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-portfolio-forest block font-mono text-xs uppercase tracking-wide">
                  Architectural Outcome & Learning:
                </span>
                <span className="leading-relaxed mt-0.5 block">{item.outcomeAndLearning}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
