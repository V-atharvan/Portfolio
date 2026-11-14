import React from 'react';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (cat: string) => {
    switch (cat) {
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-portfolio-forest" />;
      case 'Technical Competition':
        return <Award className="w-5 h-5 text-portfolio-forest" />;
      case 'Project Recognition':
        return <Star className="w-5 h-5 text-portfolio-forest" />;
      case 'Certification':
      default:
        return <ShieldCheck className="w-5 h-5 text-portfolio-forest" />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-24 border-t border-portfolio-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="HONORS & TECHNICAL MILESTONES"
          title="Achievements & Certifications"
          subtitle="Verified competition milestones, academic project recognitions, and independent technical coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bg-portfolio-surface-subtle rounded-xl border border-portfolio-border p-6 shadow-subtle hover:border-portfolio-sage hover:bg-white transition-all duration-200 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-white border border-portfolio-border shadow-subtle shrink-0">
                {getAchievementIcon(item.category)}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-portfolio-muted">
                    {item.dateOrPeriod}
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-portfolio-charcoal leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-portfolio-forest font-medium">
                  {item.issuer}
                </p>

                <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editable Notice */}
        <div className="mt-8 p-4 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border text-center text-xs text-portfolio-muted">
          <span className="font-mono text-portfolio-forest font-medium mr-1.5">[Centralized Config]</span>
          Additional competition ranks, credential URLs, and certifications can be updated dynamically via <code className="font-mono text-portfolio-charcoal bg-white px-1.5 py-0.5 rounded border border-portfolio-border">portfolioData.ts</code>.
        </div>

      </div>
    </section>
  );
};
