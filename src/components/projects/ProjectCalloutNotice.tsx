import React from 'react';
import { AlertTriangle, Award, Info } from 'lucide-react';
import type { ProjectCalloutNotice as CalloutNoticeType } from '../../types/portfolio';

interface ProjectCalloutNoticeProps {
  notice: CalloutNoticeType;
}

export const ProjectCalloutNotice: React.FC<ProjectCalloutNoticeProps> = ({ notice }) => {
  const getNoticeStyling = () => {
    switch (notice.type) {
      case 'warning':
        return {
          containerClass: 'bg-amber-50/70 border-amber-300 text-amber-950',
          icon: <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />,
          titleClass: 'text-amber-900 font-bold',
          badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
          badgeText: 'Mandatory Non-Clinical Disclaimer',
        };
      case 'award':
        return {
          containerClass: 'bg-emerald-50/70 border-emerald-300 text-emerald-950',
          icon: <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />,
          titleClass: 'text-emerald-900 font-bold',
          badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          badgeText: 'Team Pitch Recognition',
        };
      case 'info':
      default:
        return {
          containerClass: 'bg-portfolio-sage-light/50 border-portfolio-sage/40 text-portfolio-charcoal',
          icon: <Info className="w-5 h-5 text-portfolio-forest shrink-0 mt-0.5" />,
          titleClass: 'text-portfolio-forest font-bold',
          badgeClass: 'bg-portfolio-sage-light text-portfolio-forest border-portfolio-sage/40',
          badgeText: 'Technical & Methodological Note',
        };
    }
  };

  const style = getNoticeStyling();

  return (
    <div
      role="region"
      aria-label={notice.title}
      className={`rounded-xl border p-5 sm:p-6 shadow-subtle ${style.containerClass} space-y-2.5 transition-colors`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          {style.icon}
          <h2 className={`text-sm sm:text-base ${style.titleClass}`}>
            {notice.title}
          </h2>
        </div>
        <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${style.badgeClass}`}>
          {style.badgeText}
        </span>
      </div>

      <p className="text-xs sm:text-sm leading-relaxed pl-7">
        {notice.content}
      </p>
    </div>
  );
};
