import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { experienceData } from '../data/experience';
import { Calendar, CheckCircle2, Award, Users, Terminal, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const getExperienceIcon = (category: string) => {
    switch (category) {
      case 'Leadership & Hackathons':
        return <Award className="w-4 h-4 text-portfolio-forest" />;
      case 'Institutional Activities':
        return <Users className="w-4 h-4 text-portfolio-forest" />;
      case 'Technical Development':
      default:
        return <Terminal className="w-4 h-4 text-portfolio-forest" />;
    }
  };

  return (
    <SectionContainer id="experience" background="primary">
      <SectionHeading
        badge="COLLABORATION & SPRINT INITIATIVES"
        title="Experience & Technical Activities"
        subtitle="Technical leadership, hackathon sprints, institutional creative direction, and hands-on software development milestones."
      />

      <div className="relative border-l-2 border-portfolio-border/80 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
        {experienceData.map((item) => (
          <div key={item.id} className="relative group">
            
            {/* Timeline Node Marker: Pixel-perfect centered on the vertical line */}
            <div className="absolute -left-[37px] sm:-left-[57px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-portfolio-forest flex items-center justify-center shadow-subtle group-hover:scale-110 transition-transform">
              {getExperienceIcon(item.category)}
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-xl border border-portfolio-border p-5 sm:p-7 shadow-subtle hover:border-portfolio-sage hover:shadow-card transition-all duration-200">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-portfolio-border/70 pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-mono font-medium text-portfolio-forest bg-portfolio-sage-light px-2.5 py-0.5 rounded inline-block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-portfolio-charcoal">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-portfolio-forest mt-0.5">
                    {item.organization}
                  </p>
                </div>

                {item.period && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-portfolio-muted shrink-0 mt-1 sm:mt-0">
                    <Calendar className="w-3.5 h-3.5 text-portfolio-sage" />
                    <span>{item.period}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed mb-4 font-sans">
                {item.description}
              </p>

              {/* Key Contributions */}
              <div className="space-y-2 mb-4">
                {item.keyContributions.map((contrib, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-portfolio-charcoal font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-portfolio-forest shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>

              {/* Outcome Highlight */}
              {item.verifiedOutcome && (
                <div className="p-3 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border text-xs text-portfolio-forest font-medium flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-portfolio-sage shrink-0 mt-0.5" />
                  <span>{item.verifiedOutcome}</span>
                </div>
              )}

              {/* Technologies used */}
              {item.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-portfolio-border/60">
                  <span className="text-[11px] font-mono text-portfolio-muted self-center mr-1">
                    Skills:
                  </span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-portfolio-surface-subtle text-portfolio-charcoal border border-portfolio-border/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
