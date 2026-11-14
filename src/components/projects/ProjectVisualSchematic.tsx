import React, { useState } from 'react';
import { ArrowRight, Eye, Layers } from 'lucide-react';
import type { ProjectVisualSchematicStage } from '../../types/portfolio';

interface ProjectVisualSchematicProps {
  title: string;
  caption: string;
  diagramLabel: string;
  stages: ProjectVisualSchematicStage[];
}

export const ProjectVisualSchematic: React.FC<ProjectVisualSchematicProps> = ({
  title,
  caption,
  diagramLabel,
  stages,
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex] || stages[0];

  return (
    <section aria-labelledby="section-schematic" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
          <Layers className="w-4 h-4" />
          <span id="section-schematic">Section K: Technical Schematic & Architectural Blueprint</span>
        </div>
        <span className="text-xs font-mono text-portfolio-muted">
          Interactive Data Flow Visualizer
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-portfolio-border p-6 sm:p-8 shadow-card space-y-6">
        {/* Schematic Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-portfolio-border">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-portfolio-charcoal">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-portfolio-muted mt-0.5">
              {caption}
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-portfolio-forest bg-portfolio-sage-light px-3 py-1 rounded border border-portfolio-sage/30 shrink-0 self-start sm:self-auto">
            {diagramLabel}
          </span>
        </div>

        {/* Interactive Stage Selector Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-portfolio-muted">
            <span>Select Architecture Pipeline Stage to Inspect:</span>
            <span className="text-portfolio-forest font-bold">
              Stage {activeStageIndex + 1} of {stages.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {stages.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-2.5 sm:p-3 rounded-lg border transition-all text-xs font-medium min-w-0 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest ${
                    isSelected
                      ? 'bg-portfolio-forest text-white border-portfolio-forest shadow-sm'
                      : 'bg-portfolio-surface-subtle text-portfolio-charcoal border-portfolio-border hover:border-portfolio-sage'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1 opacity-80 min-w-0">
                    <span className="shrink-0">{stage.stepNumber}</span>
                    <span className="truncate ml-1">{stage.badge}</span>
                  </div>
                  <div className="font-bold truncate text-xs">
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Inspector Box for Active Stage */}
        <div className="p-6 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-portfolio-border/70">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-portfolio-forest bg-white px-2 py-0.5 rounded border border-portfolio-border">
                {activeStage.stepNumber}
              </span>
              <h3 className="font-bold text-base text-portfolio-charcoal">
                {activeStage.name}
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold text-portfolio-forest bg-portfolio-sage-light px-2.5 py-0.5 rounded">
              {activeStage.badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed">
            {activeStage.description}
          </p>

          {/* Sub-items / Sub-components */}
          {activeStage.subItems && activeStage.subItems.length > 0 && (
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-portfolio-muted uppercase tracking-wider block">
                Component Invariants & Data Attributes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeStage.subItems.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded bg-white border border-portfolio-border text-xs text-portfolio-charcoal font-mono flex items-center gap-2 shadow-subtle"
                  >
                    <ArrowRight className="w-3 h-3 text-portfolio-sage shrink-0" />
                    <span className="truncate">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Schematic Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-portfolio-muted pt-2 border-t border-portfolio-border/60">
          <div className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-portfolio-forest" />
            <span>Interactive Technical Blueprint Visualization</span>
          </div>
          <span>Strict Schema Conformance</span>
        </div>
      </div>
    </section>
  );
};
