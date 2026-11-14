import React from 'react';
import { Server, Database, Brain, GraduationCap, Code2 } from 'lucide-react';
import { aboutMeContent, personalInfo, educationData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const pillarIcons = [
    <Server className="w-5 h-5 text-portfolio-forest" />,
    <Database className="w-5 h-5 text-portfolio-forest" />,
    <Brain className="w-5 h-5 text-portfolio-forest" />
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-portfolio-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="ABOUT ATHARVA"
          title="Background & Engineering Philosophy"
          subtitle="A focused developer journey centered on clean server architectures, dependable data systems, and practical machine learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main narrative text */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-portfolio-charcoal leading-relaxed">
            <p className="font-medium text-portfolio-forest text-lg sm:text-xl leading-snug">
              {aboutMeContent.summary}
            </p>
            {aboutMeContent.paragraphs.map((para, idx) => (
              <p key={idx} className="text-portfolio-charcoal/90 text-sm sm:text-base leading-relaxed">
                {para}
              </p>
            ))}

            {/* Academic badge card */}
            <div className="p-4 sm:p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex items-start gap-4 mt-6">
              <div className="p-2.5 rounded-lg bg-portfolio-sage-light text-portfolio-forest shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm">
                <span className="font-semibold text-portfolio-charcoal block">
                  {educationData.degree} in {educationData.field}
                </span>
                <p className="text-portfolio-muted text-xs sm:text-sm">
                  {educationData.institution}, {educationData.location}
                </p>
                <span className="inline-block text-xs font-mono font-medium text-portfolio-forest bg-white px-2 py-0.5 rounded border border-portfolio-border mt-1">
                  Status: {educationData.currentYear}
                </span>
              </div>
            </div>

            {/* Professional interests pills */}
            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted block mb-2.5">
                Primary Engineering Interests
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-portfolio-surface-subtle text-portfolio-charcoal border border-portfolio-border hover:border-portfolio-sage transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-forest mr-2" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Pillars of Practice */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-portfolio-muted mb-2">
              Core Technical Pillars
            </div>

            {aboutMeContent.pillars.map((pillar, idx) => (
              <div 
                key={pillar.title} 
                className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border hover:border-portfolio-sage transition-all duration-200 shadow-subtle group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-white border border-portfolio-border group-hover:bg-portfolio-sage-light/50 transition-colors">
                    {pillarIcons[idx]}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed pl-1">
                  {pillar.desc}
                </p>
              </div>
            ))}

            {/* Quick architectural mindset note */}
            <div className="p-5 rounded-xl bg-portfolio-forest text-portfolio-bg mt-6 shadow-card space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-sage">
                <Code2 className="w-4 h-4" />
                <span>Development Mindset</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-portfolio-bg/90">
                "Writing maintainable code starts with predictable schemas, strict input validation, clear API contracts, and defensive error handling. Tools come and go; sound architecture endures."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
