import React from 'react';
import type { ProjectArchitectureStep } from '../../types/portfolio';
import { ArrowRight, CheckCircle2, Cpu, Database, Server, Workflow } from 'lucide-react';

interface ArchitectureDiagramProps {
  steps: ProjectArchitectureStep[];
  overview: string;
  diagramType?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  steps,
  overview,
}) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Workflow className="w-4 h-4 text-portfolio-forest" />;
      case 1:
        return <Cpu className="w-4 h-4 text-portfolio-forest" />;
      case 2:
        return <Database className="w-4 h-4 text-portfolio-forest" />;
      case 3:
        return <Server className="w-4 h-4 text-portfolio-forest" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-portfolio-forest" />;
    }
  };

  return (
    <div className="bg-portfolio-surface-subtle border border-portfolio-border rounded-xl p-5 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-portfolio-border pb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted font-semibold block">
            Technical Architecture
          </span>
          <p className="text-xs sm:text-sm text-portfolio-charcoal mt-1">
            {overview}
          </p>
        </div>
        <span className="text-[11px] font-mono bg-portfolio-sage-light text-portfolio-forest px-2.5 py-1 rounded-md font-medium shrink-0 self-start sm:self-auto">
          Pipeline Flow
        </span>
      </div>

      {/* Step nodes - responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => (
          <div key={step.title} className="relative flex flex-col justify-between">
            {/* Step card */}
            <div className="bg-white rounded-lg border border-portfolio-border p-4 shadow-subtle hover:border-portfolio-sage transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-portfolio-surface-subtle border border-portfolio-border">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono text-portfolio-muted font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-portfolio-charcoal leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-portfolio-muted mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-portfolio-border/70">
                <span className="text-[10px] font-mono text-portfolio-forest bg-portfolio-sage-light/60 px-2 py-0.5 rounded block truncate" title={step.technology}>
                  {step.technology}
                </span>
              </div>
            </div>

            {/* Desktop forward indicator arrow */}
            {idx < steps.length - 1 && (
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-portfolio-border items-center justify-center text-portfolio-muted shadow-subtle">
                <ArrowRight className="w-3 h-3 text-portfolio-forest" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-portfolio-muted">
        <span>End-to-End Execution Trace</span>
        <span>Strict Data Validation & Error Handlers</span>
      </div>
    </div>
  );
};
