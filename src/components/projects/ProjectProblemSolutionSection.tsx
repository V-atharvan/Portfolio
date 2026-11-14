import React from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

interface ProjectProblemSolutionSectionProps {
  problemStatement: {
    coreIssue: string;
    conventionalLimitations: string[];
    impact: string;
  };
  proposedSolution: {
    summary: string;
    systemWorkflow: string[];
    boundariesAndScope: string;
  };
}

export const ProjectProblemSolutionSection: React.FC<ProjectProblemSolutionSectionProps> = ({
  problemStatement,
  proposedSolution,
}) => {
  return (
    <section aria-labelledby="section-problem-solution" className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
        <Layers className="w-4 h-4" />
        <span id="section-problem-solution">Sections C & D: Problem Statement & Proposed Engineering Solution</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Section C: Problem Statement */}
        <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-portfolio-border">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>The Problem Context</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-rose-50 text-rose-800 px-2 py-0.5 rounded border border-rose-200 font-semibold">
                Section C
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-portfolio-charcoal">
                Core Industry & Research Challenge
              </h3>
              <p className="text-xs sm:text-sm text-portfolio-charcoal/90 mt-2 leading-relaxed">
                {problemStatement.coreIssue}
              </p>
            </div>

            {/* Conventional Limitations */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono font-bold text-portfolio-muted uppercase tracking-wider block">
                Limitations of Conventional Approaches:
              </span>
              <ul className="space-y-2">
                {problemStatement.conventionalLimitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-portfolio-charcoal/80 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Operational Impact */}
          <div className="p-3.5 rounded-lg bg-rose-50/60 border border-rose-200/80 text-xs text-rose-950 leading-relaxed">
            <span className="font-bold block mb-1">Downstream Impact:</span>
            {problemStatement.impact}
          </div>
        </div>

        {/* Section D: Proposed Solution */}
        <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-portfolio-border">
              <div className="flex items-center gap-2 text-portfolio-forest font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-portfolio-forest" />
                <span>The Proposed Solution</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-portfolio-sage-light text-portfolio-forest px-2 py-0.5 rounded border border-portfolio-sage/30 font-semibold">
                Section D
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-portfolio-charcoal">
                Engineered Workflow & Architectural Approach
              </h3>
              <p className="text-xs sm:text-sm text-portfolio-charcoal/90 mt-2 leading-relaxed">
                {proposedSolution.summary}
              </p>
            </div>

            {/* Sequential Workflow Steps */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-portfolio-forest uppercase tracking-wider block">
                Step-by-Step Execution Sequence:
              </span>
              <div className="space-y-2">
                {proposedSolution.systemWorkflow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-portfolio-charcoal leading-relaxed p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border/60">
                    <span className="text-[11px] font-mono font-bold text-portfolio-forest bg-white px-1.5 py-0.5 rounded border border-portfolio-border shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5 flex-1">
                      <ChevronRight className="w-3 h-3 text-portfolio-sage shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scope Boundaries */}
          <div className="p-3.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border text-xs text-portfolio-charcoal/90 leading-relaxed flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-portfolio-forest shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-portfolio-forest block">System Scope & Boundaries:</span>
              <span>{proposedSolution.boundariesAndScope}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
