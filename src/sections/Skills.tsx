import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { skillCategories } from '../data/skills';
import { SkillCategory } from '../components/skills/SkillCategory';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <SectionContainer id="skills" background="primary">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading
          badge="VERIFIED TECHNICAL STACK"
          title="Technical Skills & Competencies"
          subtitle="Organized by functional layer. Strictly showcasing technologies actively studied and implemented in project architectures—without artificial percentage bars."
          className="mb-0"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-lg border border-portfolio-border shadow-subtle shrink-0">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest ${
              activeCategory === 'all'
                ? 'bg-portfolio-forest text-portfolio-bg shadow-sm'
                : 'text-portfolio-charcoal hover:bg-portfolio-surface-subtle'
            }`}
          >
            All Skills ({totalSkillsCount})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest ${
                activeCategory === cat.id
                  ? 'bg-portfolio-forest text-portfolio-bg shadow-sm'
                  : 'text-portfolio-charcoal hover:bg-portfolio-surface-subtle'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </div>

      {/* Note on skills assessment */}
      <div className="mt-8 p-4 rounded-xl bg-white border border-portfolio-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-portfolio-muted font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-portfolio-forest shrink-0" aria-hidden="true" />
          <span>
            All listed technologies represent genuine curriculum studies, laboratory applications, or verified GitHub project implementations.
          </span>
        </div>
        <span className="font-mono text-portfolio-forest text-[11px] font-semibold shrink-0">
          No invented percentage bars
        </span>
      </div>
    </SectionContainer>
  );
};
