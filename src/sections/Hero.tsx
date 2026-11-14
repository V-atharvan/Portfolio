import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Server, 
  Workflow
} from 'lucide-react';
import { personalConfig } from '../config/personal';
import { Button } from '../components/common/Button';
import { SocialLinks } from '../components/common/SocialLinks';
import { Container } from '../components/layout/Container';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'api' | 'pipeline'>('architecture');

  const scrollToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background subtle technical grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#263B32 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Identity & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Status indicator pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-portfolio-border shadow-subtle max-w-full">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-portfolio-forest" />
              </span>
              <span className="text-xs font-mono font-medium text-portfolio-charcoal break-words">
                {personalConfig.education.currentYear} {personalConfig.education.degree} CSE • {personalConfig.education.college.split(',')[0]}
              </span>
            </div>

            {/* Name and Professional Title */}
            <div className="space-y-3">
              <h1 className="hero-title-clamp font-bold tracking-tight text-portfolio-charcoal">
                ATHARVA <span className="text-portfolio-forest font-black">VADDEPALLI</span>
              </h1>
              
              <p className="hero-role-clamp font-semibold text-portfolio-forest tracking-tight">
                {personalConfig.professionalRole}
              </p>

              <h2 className="hero-headline-clamp font-semibold text-portfolio-charcoal/90 pt-1">
                {personalConfig.primaryHeadline}
              </h2>
            </div>

            {/* Supporting Introduction Quote */}
            <blockquote className="border-l-4 border-portfolio-sage pl-4 sm:pl-5 py-1 text-sm sm:text-base text-portfolio-charcoal/85 leading-relaxed bg-white/50 rounded-r-md">
              "{personalConfig.supportingIntroduction}"
            </blockquote>

            {/* Core Interest Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium">
              <span className="px-3 py-1 rounded-md bg-portfolio-sage-light text-portfolio-forest border border-portfolio-sage/30">
                Spring Boot
              </span>
              <span className="px-3 py-1 rounded-md bg-white text-portfolio-charcoal border border-portfolio-border shadow-subtle">
                REST APIs
              </span>
              <span className="px-3 py-1 rounded-md bg-white text-portfolio-charcoal border border-portfolio-border shadow-subtle">
                PostgreSQL & MySQL
              </span>
              <span className="px-3 py-1 rounded-md bg-white text-portfolio-charcoal border border-portfolio-border shadow-subtle">
                Data Structures & Algorithms
              </span>
              <span className="px-3 py-1 rounded-md bg-portfolio-sage-light text-portfolio-forest border border-portfolio-sage/30">
                Applied AI/ML
              </span>
            </div>

            {/* Actions: View Projects & Download Resume */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                onClick={scrollToProjects}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenResume}
                icon={<FileText className="w-4 h-4 text-portfolio-forest" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Verified Social & Professional Channels */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted block mb-2 font-medium">
                Verified Channels:
              </span>
              <SocialLinks />
            </div>

          </div>

          {/* Right Column: Restrained Technical System Visual Element */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-xl border border-portfolio-border shadow-card overflow-hidden">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-portfolio-surface-subtle border-b border-portfolio-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E5E7E2] border border-[#CFD3C9]" />
                  <span className="w-3 h-3 rounded-full bg-[#E5E7E2] border border-[#CFD3C9]" />
                  <span className="w-3 h-3 rounded-full bg-portfolio-sage/60" />
                  <span className="text-xs font-mono text-portfolio-muted ml-2">system-architecture.spec</span>
                </div>
                <span className="text-[11px] font-mono bg-portfolio-sage-light text-portfolio-forest px-2 py-0.5 rounded font-medium">
                  VERIFIED
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="flex border-b border-portfolio-border bg-white text-xs font-medium" role="tablist">
                <button
                  onClick={() => setActiveTab('architecture')}
                  role="tab"
                  aria-selected={activeTab === 'architecture'}
                  className={`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'architecture'
                      ? 'border-portfolio-forest text-portfolio-forest font-semibold bg-portfolio-surface-subtle/50'
                      : 'border-transparent text-portfolio-muted hover:text-portfolio-charcoal'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
                <button
                  onClick={() => setActiveTab('api')}
                  role="tab"
                  aria-selected={activeTab === 'api'}
                  className={`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'api'
                      ? 'border-portfolio-forest text-portfolio-forest font-semibold bg-portfolio-surface-subtle/50'
                      : 'border-transparent text-portfolio-muted hover:text-portfolio-charcoal'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>REST API</span>
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  role="tab"
                  aria-selected={activeTab === 'pipeline'}
                  className={`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'pipeline'
                      ? 'border-portfolio-forest text-portfolio-forest font-semibold bg-portfolio-surface-subtle/50'
                      : 'border-transparent text-portfolio-muted hover:text-portfolio-charcoal'
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Data Flow</span>
                </button>
              </div>

              {/* Interactive Visual Content */}
              <div className="p-5 font-mono text-xs text-portfolio-charcoal min-h-[320px] flex flex-col justify-center">
                {activeTab === 'architecture' && (
                  <div className="space-y-3.5">
                    <div className="text-[11px] text-portfolio-muted uppercase tracking-wider font-semibold">
                      // Software Architecture Layers
                    </div>

                    {/* Gateway Layer */}
                    <div className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-portfolio-forest" />
                        <span className="font-semibold text-portfolio-charcoal">Spring Boot Web Layer</span>
                      </div>
                      <span className="text-[10px] text-portfolio-muted bg-white px-1.5 py-0.5 rounded border border-portfolio-border">
                        REST Controllers / DTO
                      </span>
                    </div>

                    <div className="flex justify-center text-portfolio-muted -my-1 text-xs">
                      ↓ <span className="text-[10px] ml-1 font-sans text-portfolio-muted">Dependency Injection (IoC)</span>
                    </div>

                    {/* Service Tier */}
                    <div className="p-2.5 rounded-lg bg-portfolio-sage-light/50 border border-portfolio-sage/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-portfolio-forest" />
                        <span className="font-semibold text-portfolio-forest">Business Logic Tier</span>
                      </div>
                      <span className="text-[10px] text-portfolio-forest bg-white px-1.5 py-0.5 rounded border border-portfolio-sage/40">
                        Transactional Services
                      </span>
                    </div>

                    <div className="flex justify-center text-portfolio-muted -my-1 text-xs">
                      ↓ <span className="text-[10px] ml-1 font-sans text-portfolio-muted">Spring Data JPA / Hibernate</span>
                    </div>

                    {/* Persistence Tier */}
                    <div className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-portfolio-forest" />
                        <span className="font-semibold text-portfolio-charcoal">Relational Persistence</span>
                      </div>
                      <span className="text-[10px] text-portfolio-muted bg-white px-1.5 py-0.5 rounded border border-portfolio-border">
                        PostgreSQL & MySQL
                      </span>
                    </div>

                    <div className="text-[11px] text-portfolio-muted pt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-portfolio-forest" />
                      <span className="font-sans text-portfolio-muted">Clean separation of concerns & predictable data models</span>
                    </div>
                  </div>
                )}

                {activeTab === 'api' && (
                  <div className="space-y-3 bg-portfolio-surface-subtle p-3.5 rounded-lg border border-portfolio-border">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-emerald-700 font-bold">GET /api/v1/projects/active</span>
                      <span className="text-portfolio-forest font-semibold bg-white px-2 py-0.5 rounded border border-portfolio-border">
                        200 OK
                      </span>
                    </div>
                    <pre className="text-[11px] text-portfolio-charcoal overflow-x-auto p-2 bg-white rounded border border-portfolio-border leading-relaxed font-mono">
{`{
  "developer": "ATHARVA VADDEPALLI",
  "position": "Java Backend Developer",
  "focus": [
    "Spring Boot REST Architecture",
    "JPA / Hibernate Entity Modeling",
    "Relational Data Persistence",
    "Analytical Machine Learning"
  ],
  "status": "READY_FOR_EVALUATION"
}`}
                    </pre>
                    <div className="text-[10px] text-portfolio-muted flex items-center justify-between pt-1">
                      <span>HTTP/1.1 TLS 1.3</span>
                      <span>Content-Type: application/json</span>
                    </div>
                  </div>
                )}

                {activeTab === 'pipeline' && (
                  <div className="space-y-2.5">
                    <div className="text-[11px] text-portfolio-muted uppercase tracking-wider font-semibold">
                      // Verified Pipeline Competencies
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">Core Runtime</span>
                        <span className="text-portfolio-muted">Java 17 LTS / OOP Core</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">Frameworks</span>
                        <span className="text-portfolio-muted">Spring Boot 3.x / Spring MVC</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">Persistence</span>
                        <span className="text-portfolio-muted">PostgreSQL / MySQL / Hibernate</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">AI & ML Pipeline</span>
                        <span className="text-portfolio-muted">Python / NumPy / Scikit-learn</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="px-4 py-2.5 bg-portfolio-surface-subtle border-t border-portfolio-border flex items-center justify-between text-[11px] text-portfolio-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-forest" />
                  Engineering Specification
                </span>
                <span className="font-mono text-portfolio-forest font-medium">Production Spec v1.0</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
