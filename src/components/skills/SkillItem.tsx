import React from 'react';
import type { SkillItem as SkillItemType } from '../../data/skills';

interface SkillItemProps {
  skill: SkillItemType;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="p-3 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/70 hover:border-portfolio-sage/60 transition-colors">
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-xs sm:text-sm text-portfolio-charcoal">
          {skill.name}
        </span>
        {skill.proficiency && (
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium border shrink-0 ${
              skill.proficiency === 'Core Focus'
                ? 'bg-portfolio-sage-light text-portfolio-forest border-portfolio-sage/40'
                : 'bg-white text-portfolio-muted border-portfolio-border'
            }`}
          >
            {skill.proficiency}
          </span>
        )}
      </div>
      {skill.description && (
        <p className="text-[11px] text-portfolio-muted mt-1 leading-normal font-sans">
          {skill.description}
        </p>
      )}
    </div>
  );
};
