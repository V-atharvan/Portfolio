import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface KeyFeature {
  title: string;
  description: string;
  tag: string;
  isVerified: boolean;
}

interface ProjectFeaturesSectionProps {
  features: KeyFeature[];
}

export const ProjectFeaturesSection: React.FC<ProjectFeaturesSectionProps> = ({
  features,
}) => {
  return (
    <section aria-labelledby="section-features" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
          <Sparkles className="w-4 h-4" />
          <span id="section-features">Section E: Key Verified Features</span>
        </div>
        <span className="text-xs font-mono text-portfolio-muted">
          {features.length} Architecturally Implemented Modules
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-portfolio-border p-5 shadow-subtle hover:border-portfolio-sage transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded">
                  {feature.tag}
                </span>
                {feature.isVerified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                )}
              </div>

              <h3 className="font-bold text-sm text-portfolio-charcoal leading-snug">
                {feature.title}
              </h3>

              <p className="text-xs text-portfolio-muted leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="pt-2 border-t border-portfolio-border/60 flex items-center justify-between text-[10px] font-mono text-portfolio-muted">
              <span>Feature Module 0{idx + 1}</span>
              <span className="text-portfolio-forest font-medium">Source Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
