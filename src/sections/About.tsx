import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Server, Database, Brain, GraduationCap, Code2 } from 'lucide-react';
import { personalConfig } from '../config/personal';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Backend Engineering',
      desc: 'Developing maintainable, REST-compliant web services with Spring Boot, secure endpoints, and modular service layers.',
      icon: <Server className="w-5 h-5 text-portfolio-forest" />,
    },
    {
      title: 'Data & Persistence',
      desc: 'Designing relational schemas in PostgreSQL and MySQL with optimized queries and JPA/Hibernate entity relationships.',
      icon: <Database className="w-5 h-5 text-portfolio-forest" />,
    },
    {
      title: 'Applied AI & ML',
      desc: 'Preprocessing scientific datasets and applying analytical machine learning models to solve domain-specific problems.',
      icon: <Brain className="w-5 h-5 text-portfolio-forest" />,
    },
  ];

  return (
    <SectionContainer id="about" background="white">
      <SectionHeading
        badge="ABOUT ATHARVA"
        title="Background & Engineering Philosophy"
        subtitle="A focused developer journey centered on clean server architectures, dependable data systems, and practical machine learning."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Narrative Prose */}
        <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-portfolio-charcoal leading-relaxed font-sans">
          
          <p className="font-semibold text-portfolio-forest text-base sm:text-lg leading-snug">
            I'm Atharva Vaddepalli, a Third Year Computer Science Engineering student interested in backend development, software engineering and intelligent applications.
          </p>

          <p className="text-portfolio-charcoal/90 leading-relaxed">
            I enjoy understanding how software systems work behind the scenes, designing backend logic and developing practical applications that solve real problems.
          </p>

          <p className="text-portfolio-charcoal/90 leading-relaxed">
            My primary development focus is Java and Spring Boot, with an interest in databases, API development and software architecture. Alongside backend engineering, I am exploring Python and Machine Learning to understand how intelligent capabilities can be integrated into practical software systems.
          </p>

          <p className="text-portfolio-charcoal/90 leading-relaxed">
            Through academic projects, collaborative development and technical activities, I continue to improve my problem-solving abilities and engineering skills.
          </p>

          {/* Academic Context Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex items-start gap-4 mt-6">
            <div className="p-2.5 rounded-lg bg-portfolio-sage-light text-portfolio-forest shrink-0 mt-0.5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm">
              <span className="font-bold text-portfolio-charcoal block">
                {personalConfig.education.degree} in {personalConfig.education.field}
              </span>
              <p className="text-portfolio-muted">
                {personalConfig.education.college}, {personalConfig.education.location}
              </p>
              <span className="inline-block text-[11px] font-mono font-medium text-portfolio-forest bg-white px-2 py-0.5 rounded border border-portfolio-border mt-1">
                Current Status: {personalConfig.education.currentYear}
              </span>
            </div>
          </div>

          {/* Primary Technical Interests */}
          <div className="pt-3">
            <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted block mb-2.5 font-semibold">
              Primary Technical Interests
            </span>
            <div className="flex flex-wrap gap-2">
              {personalConfig.primaryTechnicalInterests.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-portfolio-surface-subtle text-portfolio-charcoal border border-portfolio-border hover:border-portfolio-sage transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-forest mr-2" aria-hidden="true" />
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Pillars of Practice & Mindset */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-portfolio-muted font-semibold mb-2">
            Core Development Pillars
          </div>

          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border hover:border-portfolio-sage transition-all duration-200 shadow-subtle group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-white border border-portfolio-border group-hover:bg-portfolio-sage-light/50 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed font-sans pl-1">
                {pillar.desc}
              </p>
            </div>
          ))}

          {/* Engineering Mindset Card */}
          <div className="p-5 rounded-xl bg-portfolio-forest text-portfolio-bg mt-6 shadow-card space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-sage font-semibold">
              <Code2 className="w-4 h-4" />
              <span>Development Mindset</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-portfolio-bg/95 font-sans">
              "Writing maintainable code starts with predictable schemas, strict input validation, clear API contracts, and defensive error handling. Tools come and go; sound architecture endures."
            </p>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};
