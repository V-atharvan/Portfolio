import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { achievementsData } from '../data/achievements';
import { Trophy, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (cat: string) => {
    switch (cat) {
      case 'Competition Recognition':
        return <Trophy className="w-5 h-5 text-portfolio-forest" />;
      case 'Leadership Role':
        return <Award className="w-5 h-5 text-portfolio-forest" />;
      case 'Technical Milestone':
      default:
        return <ShieldCheck className="w-5 h-5 text-portfolio-forest" />;
    }
  };

  return (
    <SectionContainer id="achievements" background="white">
      <SectionHeading
        badge="HONORS & TECHNICAL MILESTONES"
        title="Achievements & Recognition"
        subtitle="Verified pitch competition honors, event leadership roles, and technical milestones."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="bg-portfolio-surface-subtle rounded-xl border border-portfolio-border p-5 sm:p-6 shadow-subtle hover:border-portfolio-sage hover:bg-white transition-all duration-200 flex items-start gap-4"
          >
            <div className="p-3 rounded-lg bg-white border border-portfolio-border shadow-subtle shrink-0">
              {getAchievementIcon(item.category)}
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded font-semibold">
                  {item.category}
                </span>
                {item.year && (
                  <span className="text-xs font-mono text-portfolio-muted">
                    {item.year}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-sm sm:text-base text-portfolio-charcoal leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-portfolio-forest font-semibold">
                {item.organization}
              </p>

              <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed font-sans pt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex items-center justify-between text-xs text-portfolio-muted">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-portfolio-forest shrink-0" />
          <span>All achievements represent documented collegiate milestones and verified technical events.</span>
        </div>
        <span className="font-mono text-portfolio-forest font-semibold text-[11px] shrink-0 hidden sm:inline">
          Verified Records
        </span>
      </div>
    </SectionContainer>
  );
};
