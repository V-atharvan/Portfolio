import React from 'react';
import { Code2, Server } from 'lucide-react';

interface TechItem {
  name: string;
  purpose: string;
}

interface TechCategory {
  category: string;
  description?: string;
  items: string[];
  detailedItems?: TechItem[];
}

interface ProjectTechStackSectionProps {
  technologies: TechCategory[];
}

export const ProjectTechStackSection: React.FC<ProjectTechStackSectionProps> = ({
  technologies,
}) => {
  return (
    <section aria-labelledby="section-tech-stack" className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
        <Code2 className="w-4 h-4" />
        <span id="section-tech-stack">Section F: Technology Stack & Engineering Roles</span>
      </div>

      <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-portfolio-charcoal">
            Categorized Technical Architecture
          </h2>
          <p className="text-xs sm:text-sm text-portfolio-muted mt-1">
            Engineered using deliberate technology choices selected for type safety, performance, and clear boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((group, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border/80 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 pb-2 border-b border-portfolio-border/60">
                  <Server className="w-3.5 h-3.5 text-portfolio-forest shrink-0" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-forest">
                    {group.category}
                  </h3>
                </div>

                {group.description && (
                  <p className="text-[11px] text-portfolio-muted mt-2 leading-relaxed">
                    {group.description}
                  </p>
                )}

                {/* Detailed Tech Items with Purpose */}
                <div className="space-y-2.5 mt-3">
                  {group.detailedItems && group.detailedItems.length > 0 ? (
                    group.detailedItems.map((item, itemIdx) => (
                      <div key={itemIdx} className="text-xs space-y-0.5">
                        <div className="flex items-center gap-1.5 font-bold text-portfolio-charcoal">
                          <span className="w-1.5 h-1.5 rounded-full bg-portfolio-sage shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        <p className="text-[11px] text-portfolio-muted pl-3 leading-normal">
                          {item.purpose}
                        </p>
                      </div>
                    ))
                  ) : (
                    group.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-1.5 text-xs text-portfolio-charcoal font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-sage shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-portfolio-border/50 text-[10px] font-mono text-portfolio-muted">
                Tier 0{idx + 1} Specification
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
