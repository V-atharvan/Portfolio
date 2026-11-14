import React from 'react';
import { Calendar, CheckCircle2, Award, Users, Terminal } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const Experience: React.FC = () => {
  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'Leadership':
        return <Users className="w-4 h-4 text-portfolio-forest" />;
      case 'Hackathon':
        return <Award className="w-4 h-4 text-portfolio-forest" />;
      case 'Development':
      default:
        return <Terminal className="w-4 h-4 text-portfolio-forest" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-portfolio-border bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="COLLABORATION & SPRINT ROLES"
          title="Experience & Technical Activities"
          subtitle="Leadership initiatives, hackathon participation, and collegiate software development contributions grounded in authentic academic milestones."
        />

        <div className="relative border-l-2 border-portfolio-border/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[49px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-portfolio-forest flex items-center justify-center shadow-subtle group-hover:scale-110 transition-transform">
                {getExperienceIcon(item.type)}
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-xl border border-portfolio-border p-5 sm:p-7 shadow-subtle hover:border-portfolio-sage hover:shadow-card transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-portfolio-border/70 pb-3 mb-4">
                  <div>
                    <span className="text-xs font-mono font-medium text-portfolio-forest bg-portfolio-sage-light px-2.5 py-0.5 rounded inline-block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-portfolio-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-portfolio-muted">
                      {item.role} • <span className="text-portfolio-forest">{item.organization}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-portfolio-muted shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-portfolio-sage" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Contributions List */}
                <div className="space-y-2 mb-4">
                  {item.keyContributions.map((contrib, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-portfolio-charcoal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-portfolio-forest shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{contrib}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used in this activity */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-portfolio-border/60">
                    <span className="text-[11px] font-mono text-portfolio-muted self-center mr-1">
                      Stack:
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

      </div>
    </section>
  );
};
