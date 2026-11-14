import React from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, Cpu, Database, Network, Server, Workflow } from 'lucide-react';
import type { ProjectArchitectureStep } from '../../types/portfolio';

interface ProjectArchitectureSectionProps {
  overview: string;
  diagramType: 'data-pipeline' | 'microservices' | 'client-api-db' | 'ml-pipeline';
  steps: ProjectArchitectureStep[];
  keyPatterns?: string[];
}

export const ProjectArchitectureSection: React.FC<ProjectArchitectureSectionProps> = ({
  overview,
  diagramType,
  steps,
  keyPatterns,
}) => {
  const getStepIcon = (index: number) => {
    switch (index % 5) {
      case 0:
        return <Workflow className="w-4 h-4 text-portfolio-forest" />;
      case 1:
        return <Cpu className="w-4 h-4 text-portfolio-forest" />;
      case 2:
        return <Database className="w-4 h-4 text-portfolio-forest" />;
      case 3:
        return <Server className="w-4 h-4 text-portfolio-forest" />;
      case 4:
      default:
        return <CheckCircle2 className="w-4 h-4 text-portfolio-forest" />;
    }
  };

  const getDiagramBadge = () => {
    switch (diagramType) {
      case 'data-pipeline':
        return 'Data-Pipeline Architecture';
      case 'ml-pipeline':
        return 'Scientific ML Processing Pipeline';
      case 'client-api-db':
        return 'Multi-Tier Enterprise Architecture';
      case 'microservices':
        return 'Service-Oriented Architecture';
      default:
        return 'System Architecture Flow';
    }
  };

  return (
    <section aria-labelledby="section-architecture" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
          <Network className="w-4 h-4" />
          <span id="section-architecture">Section G: System Architecture & Data Flow</span>
        </div>
        <span className="text-xs font-mono font-semibold text-portfolio-forest bg-portfolio-sage-light px-2.5 py-0.5 rounded border border-portfolio-sage/30">
          {getDiagramBadge()}
        </span>
      </div>

      <div className="bg-portfolio-surface-subtle border border-portfolio-border rounded-2xl p-6 sm:p-8 space-y-6">
        {/* Architecture Narrative */}
        <div className="space-y-2 pb-4 border-b border-portfolio-border">
          <h2 className="text-xl sm:text-2xl font-bold text-portfolio-charcoal">
            End-to-End System Data Flow
          </h2>
          <p className="text-xs sm:text-sm text-portfolio-charcoal/80 leading-relaxed max-w-4xl">
            {overview}
          </p>

          {/* Architectural Patterns */}
          {keyPatterns && keyPatterns.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-mono text-portfolio-muted font-bold">
                Design Patterns:
              </span>
              {keyPatterns.map((pattern, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono text-portfolio-forest bg-white px-2 py-0.5 rounded border border-portfolio-border"
                >
                  {pattern}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Step-by-Step Architecture Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col justify-between min-w-0">
              {/* Step Card */}
              <div className="bg-white rounded-xl border border-portfolio-border p-4 shadow-subtle hover:border-portfolio-sage transition-all h-full flex flex-col justify-between space-y-3 min-w-0">
                <div className="space-y-2 min-w-0">
                  {/* Top Bar of Step */}
                  <div className="flex items-center justify-between">
                    <div className="p-1.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-[11px] font-mono text-portfolio-forest font-bold">
                      {step.stepNumber || `0${idx + 1}`}
                    </span>
                  </div>

                  {/* Title & Component */}
                  <div className="min-w-0">
                    <h3 className="font-bold text-xs sm:text-sm text-portfolio-charcoal leading-snug break-words">
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-mono text-portfolio-sage font-medium mt-0.5 break-words">
                      {step.technology}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-portfolio-muted leading-relaxed break-words">
                    {step.description}
                  </p>
                </div>

                {/* Input & Output Data Tracing */}
                {(step.input || step.output) && (
                  <div className="pt-2 border-t border-portfolio-border/70 space-y-1 text-[10px] font-mono min-w-0">
                    {step.input && (
                      <div className="text-portfolio-muted truncate" title={`Input: ${step.input}`}>
                        <span className="text-portfolio-charcoal font-semibold">In:</span> {step.input}
                      </div>
                    )}
                    {step.output && (
                      <div className="text-portfolio-forest truncate" title={`Output: ${step.output}`}>
                        <span className="text-portfolio-forest font-bold">Out:</span> {step.output}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Connecting Arrows: Desktop (horizontal right) & Mobile/Tablet (vertical down) */}
              {idx < steps.length - 1 && (
                <>
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-portfolio-border items-center justify-center text-portfolio-forest shadow-subtle">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex lg:hidden justify-center py-2 text-portfolio-forest" aria-hidden="true">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Guardrail footer note */}
        <div className="pt-3 border-t border-portfolio-border/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-portfolio-muted">
          <span>Deterministically Auditable Execution Trace</span>
          <span className="text-portfolio-forest font-semibold">Strict Boundary Handlers & Type Validation</span>
        </div>
      </div>
    </section>
  );
};
