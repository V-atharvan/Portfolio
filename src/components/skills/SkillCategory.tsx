import React from 'react';
import type { SkillCategoryGroup } from '../../data/skills';
import { SkillItem } from './SkillItem';
import { Code, Server, Database, Wrench, Cpu } from 'lucide-react';

interface SkillCategoryProps {
  category: SkillCategoryGroup;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code className="w-5 h-5 text-portfolio-forest" />;
      case 'backend':
        return <Server className="w-5 h-5 text-portfolio-forest" />;
      case 'databases':
        return <Database className="w-5 h-5 text-portfolio-forest" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-portfolio-forest" />;
      case 'ai-data':
        return <Cpu className="w-5 h-5 text-portfolio-forest" />;
      default:
        return <Code className="w-5 h-5 text-portfolio-forest" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-portfolio-border shadow-subtle p-5 sm:p-6 hover:shadow-card hover:border-portfolio-sage transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 pb-3.5 border-b border-portfolio-border">
          <div className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border shrink-0">
            {getCategoryIcon(category.id)}
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg text-portfolio-charcoal">
              {category.title}
            </h3>
            <span className="text-[11px] font-mono text-portfolio-muted">
              {category.skills.length} core technologies
            </span>
          </div>
        </div>

        <p className="text-xs text-portfolio-muted mt-3 mb-4 leading-relaxed font-sans">
          {category.description}
        </p>

        {/* Skill list */}
        <div className="space-y-2.5">
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-portfolio-border/70 flex items-center justify-between text-[11px] font-mono text-portfolio-muted">
        <span>Curriculum & Projects</span>
        <span className="text-portfolio-forest font-medium">Verified</span>
      </div>
    </div>
  );
};
