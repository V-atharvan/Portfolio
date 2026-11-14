import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, BookOpen, MapPin, CheckCircle, School } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <SectionContainer id="education" background="primary">
      <SectionHeading
        badge="ACADEMIC FOUNDATION"
        title="Formal Education"
        subtitle="Foundational computer science curriculum focused on system architecture, algorithms, database theory, and practical programming."
      />

      <div className="bg-white rounded-2xl border border-portfolio-border shadow-card p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degree & Institution Details */}
          <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-portfolio-border pb-6 lg:pb-0 lg:pr-8">
            <div className="inline-flex p-3 rounded-xl bg-portfolio-sage-light text-portfolio-forest">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-portfolio-forest font-bold block mb-1">
                Undergraduate Degree
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-charcoal leading-snug">
                {educationData.degree}
              </h3>
              <p className="text-base text-portfolio-forest font-semibold mt-1">
                {educationData.field}
              </p>
            </div>

            <div className="space-y-2 pt-2 text-sm text-portfolio-muted">
              <div className="flex items-start gap-2">
                <School className="w-4 h-4 text-portfolio-sage mt-0.5 shrink-0" />
                <span className="font-semibold text-portfolio-charcoal">
                  {educationData.institution}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-portfolio-sage shrink-0" />
                <span>{educationData.location}</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border text-xs font-mono font-medium text-portfolio-forest">
                <span className="w-2 h-2 rounded-full bg-portfolio-forest" aria-hidden="true" />
                Current Status: {educationData.currentYear}
              </span>
            </div>
          </div>

          {/* Coursework & Analytical Environment */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-portfolio-sage" />
                <span>Curriculum & Relevant Technical Coursework</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationData.courseworkHighlights.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/70 flex items-start gap-2.5 text-xs sm:text-sm text-portfolio-charcoal font-sans"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-portfolio-forest mt-0.5 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border text-xs text-portfolio-muted leading-relaxed font-sans">
              <span className="font-semibold text-portfolio-forest block mb-1">
                Institutional Environment
              </span>
              {educationData.institutionalEnvironment} Laboratory training reinforces object-oriented principles, entity-relationship modeling, relational query formulation, and defensive code design.
            </div>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
};
