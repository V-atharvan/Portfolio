import React, { useState } from 'react';
import { Code, Server, Database, Wrench, Cpu } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'Programming':
        return <Code className="w-5 h-5 text-portfolio-forest" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-portfolio-forest" />;
      case 'Database':
        return <Database className="w-5 h-5 text-portfolio-forest" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-portfolio-forest" />;
      case 'AI/ML':
        return <Cpu className="w-5 h-5 text-portfolio-forest" />;
      default:
        return <Code className="w-5 h-5 text-portfolio-forest" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.categoryKey === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-portfolio-border bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            badge="VERIFIED TECHNICAL STACK"
            title="Technical Skills & Competencies"
            subtitle="Organized by functional layer. Strictly showcasing technologies actively studied and implemented in project architectures—without artificial percentage bars."
            className="mb-0"
          />

          {/* Category filter pills for quick browsing */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-lg border border-portfolio-border shadow-subtle shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                selectedCategory === 'all'
                  ? 'bg-portfolio-forest text-portfolio-bg shadow-sm'
                  : 'text-portfolio-charcoal hover:bg-portfolio-surface-subtle'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.categoryKey}
                onClick={() => setSelectedCategory(cat.categoryKey)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedCategory === cat.categoryKey
                    ? 'bg-portfolio-forest text-portfolio-bg shadow-sm'
                    : 'text-portfolio-charcoal hover:bg-portfolio-surface-subtle'
                }`}
              >
                {cat.categoryKey}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.categoryKey}
              className="bg-white rounded-xl border border-portfolio-border shadow-subtle p-6 hover:shadow-card hover:border-portfolio-sage transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-portfolio-border">
                  <div className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border">
                    {getCategoryIcon(category.categoryKey)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-portfolio-charcoal">
                      {category.title}
                    </h3>
                    <p className="text-xs text-portfolio-muted">
                      {category.skills.length} core technologies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-portfolio-muted mt-3 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/70 hover:border-portfolio-border transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-portfolio-charcoal">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium border ${
                            skill.level === 'Core Focus'
                              ? 'bg-portfolio-sage-light text-portfolio-forest border-portfolio-sage/40'
                              : 'bg-white text-portfolio-muted border-portfolio-border'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-portfolio-muted mt-1 leading-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer note */}
              <div className="mt-5 pt-3 border-t border-portfolio-border/60 flex items-center justify-between text-[11px] font-mono text-portfolio-muted">
                <span>Practiced in projects</span>
                <span className="text-portfolio-forest font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on skills assessment */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-portfolio-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-portfolio-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-portfolio-forest" />
            <span>
              All listed technologies represent genuine curriculum studies, laboratory applications, or verified GitHub project implementations.
            </span>
          </div>
          <span className="font-mono text-portfolio-forest text-[11px] shrink-0">
            No invented percentage bars
          </span>
        </div>

      </div>
    </section>
  );
};
