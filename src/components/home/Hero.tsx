import React, { useState } from 'react';
import { ArrowRight, FileText, Mail, Terminal, Database, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'api' | 'stack'>('architecture');

  const scrollToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
      {/* Background subtle architectural grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#263B32 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Positioning & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-portfolio-border shadow-subtle">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-portfolio-forest"></span>
              </span>
              <span className="text-xs font-mono font-medium text-portfolio-charcoal">
                Third Year B.Tech CSE • Solapur
              </span>
            </div>

            {/* Name and Professional Title */}
            <div className="space-y-3">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-portfolio-charcoal">
                ATHARVA <span className="text-portfolio-forest">VADDEPALLI</span>
              </h1>
              <p className="text-lg xs:text-xl sm:text-2xl font-semibold text-portfolio-forest font-sans tracking-tight">
                {personalInfo.headline}
              </p>
            </div>

            {/* Core introduction quote */}
            <blockquote className="border-l-4 border-portfolio-sage pl-4 sm:pl-5 py-1 text-base sm:text-lg text-portfolio-charcoal leading-relaxed bg-white/40 rounded-r-md">
              "{personalInfo.introduction}"
            </blockquote>

            {/* Key domain interest tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              <Badge variant="sage">Spring Boot</Badge>
              <Badge variant="neutral">Java Core</Badge>
              <Badge variant="neutral">REST API Architecture</Badge>
              <Badge variant="neutral">PostgreSQL & MySQL</Badge>
              <Badge variant="neutral">Python & ML</Badge>
              <Badge variant="sage">Data-Driven Systems</Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                onClick={scrollToProjects}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View My Projects
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

            {/* Social & Contact Links */}
            <div className="flex items-center gap-6 pt-2 text-sm text-portfolio-muted">
              <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted">Find me on:</span>
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-portfolio-charcoal hover:text-portfolio-forest transition-colors font-medium text-xs sm:text-sm"
                  aria-label="Atharva Vaddepalli on GitHub"
                >
                  <GithubIcon className="w-4 h-4 text-portfolio-forest" />
                  <span>GitHub</span>
                </a>
                <span className="text-portfolio-border">|</span>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-portfolio-charcoal hover:text-portfolio-forest transition-colors font-medium text-xs sm:text-sm"
                  aria-label="Atharva Vaddepalli on LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 text-portfolio-forest" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-portfolio-border">|</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 text-portfolio-charcoal hover:text-portfolio-forest transition-colors font-medium text-xs sm:text-sm"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4 text-portfolio-forest" />
                  <span className="hidden xs:inline">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Restrained Abstract Technical Element (Backend Architecture Diagram / Interactive Card) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-xl border border-portfolio-border shadow-card overflow-hidden">
              
              {/* Card Window Topbar */}
              <div className="px-4 py-3 bg-portfolio-surface-subtle border-b border-portfolio-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E5E7E2] border border-[#CFD3C9]" />
                  <span className="w-3 h-3 rounded-full bg-[#E5E7E2] border border-[#CFD3C9]" />
                  <span className="w-3 h-3 rounded-full bg-portfolio-sage/60" />
                  <span className="text-xs font-mono text-portfolio-muted ml-2">backend-runtime.spec</span>
                </div>
                <span className="text-[11px] font-mono bg-portfolio-sage-light text-portfolio-forest px-2 py-0.5 rounded font-medium">
                  READY
                </span>
              </div>

              {/* View Selector Tabs */}
              <div className="flex border-b border-portfolio-border bg-white text-xs font-medium">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'architecture'
                      ? 'border-portfolio-forest text-portfolio-forest font-semibold bg-portfolio-surface-subtle/50'
                      : 'border-transparent text-portfolio-muted hover:text-portfolio-charcoal'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>System Architecture</span>
                </button>
                <button
                  onClick={() => setActiveTab('api')}
                  className={`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'api'
                      ? 'border-portfolio-forest text-portfolio-forest font-semibold bg-portfolio-surface-subtle/50'
                      : 'border-transparent text-portfolio-muted hover:text-portfolio-charcoal'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>REST API Contract</span>
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'stack'
                      ? 'border-portfolio-forest text-portfolio-forest font-semibold bg-portfolio-surface-subtle/50'
                      : 'border-transparent text-portfolio-muted hover:text-portfolio-charcoal'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Data Flow</span>
                </button>
              </div>

              {/* Interactive View Content */}
              <div className="p-5 font-mono text-xs text-portfolio-charcoal min-h-[310px] flex flex-col justify-center">
                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    <div className="text-[11px] text-portfolio-muted uppercase tracking-wider font-semibold">
                      // Architectural Blueprint Layers
                    </div>
                    
                    {/* Layer 1: Client Gateway */}
                    <div className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-portfolio-sage" />
                        <span className="font-semibold text-portfolio-charcoal">HTTP REST Controllers</span>
                      </div>
                      <span className="text-[10px] text-portfolio-muted bg-white px-1.5 py-0.5 rounded border border-portfolio-border">JSON DTO / Validation</span>
                    </div>

                    <div className="flex justify-center text-portfolio-muted -my-1 text-xs">
                      ↓ <span className="text-[10px] ml-1 font-sans text-portfolio-muted">Dependency Injection (Spring IoC)</span>
                    </div>

                    {/* Layer 2: Service Layer */}
                    <div className="p-2.5 rounded-lg bg-portfolio-sage-light/40 border border-portfolio-sage/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-portfolio-forest" />
                        <span className="font-semibold text-portfolio-forest">Service & Business Logic</span>
                      </div>
                      <span className="text-[10px] text-portfolio-forest bg-white px-1.5 py-0.5 rounded border border-portfolio-sage/30">Transactional Engine</span>
                    </div>

                    <div className="flex justify-center text-portfolio-muted -my-1 text-xs">
                      ↓ <span className="text-[10px] ml-1 font-sans text-portfolio-muted">Spring Data JPA / Hibernate</span>
                    </div>

                    {/* Layer 3: Persistence Layer */}
                    <div className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-portfolio-forest" />
                        <span className="font-semibold text-portfolio-charcoal">Relational Persistence</span>
                      </div>
                      <span className="text-[10px] text-portfolio-muted bg-white px-1.5 py-0.5 rounded border border-portfolio-border">PostgreSQL & MySQL</span>
                    </div>

                    <div className="text-[11px] text-portfolio-muted pt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-portfolio-forest" />
                      <span className="font-sans text-portfolio-muted">Engineered for clean separation of concerns</span>
                    </div>
                  </div>
                )}

                {activeTab === 'api' && (
                  <div className="space-y-3 bg-portfolio-surface-subtle p-3.5 rounded-lg border border-portfolio-border">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-emerald-700 font-bold">GET /api/v1/research/experiments</span>
                      <span className="text-portfolio-forest font-semibold bg-white px-2 py-0.5 rounded border border-portfolio-border">200 OK</span>
                    </div>
                    <pre className="text-[11px] text-portfolio-charcoal overflow-x-auto p-2 bg-white rounded border border-portfolio-border leading-relaxed">
{`{
  "project": "GREENSYNTH",
  "status": "VALIDATED",
  "dataPoints": 1420,
  "parameters": {
    "substrate": "Semiconductor_TiO2",
    "precursorRatio": "1:4.5",
    "pH": 6.8
  },
  "analyticalConvergence": 0.984
}`}
                    </pre>
                    <div className="text-[10px] text-portfolio-muted flex items-center justify-between pt-1">
                      <span>Protocol: HTTP/1.1 TLS 1.3</span>
                      <span>Content-Type: application/json</span>
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-2.5">
                    <div className="text-[11px] text-portfolio-muted uppercase tracking-wider font-semibold">
                      // Verified Technical Stack
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">Java Runtime</span>
                        <span className="text-portfolio-muted">Java 17 LTS / OOP Core</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">Framework</span>
                        <span className="text-portfolio-muted">Spring Boot 3.x / REST MVC</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">Database</span>
                        <span className="text-portfolio-muted">PostgreSQL 16 / MySQL</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-portfolio-surface-subtle border border-portfolio-border">
                        <span className="text-portfolio-forest font-medium">AI & ML Pipeline</span>
                        <span className="text-portfolio-muted">NumPy / Pandas / Scikit-learn</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal status bar */}
              <div className="px-4 py-2.5 bg-portfolio-surface-subtle border-t border-portfolio-border flex items-center justify-between text-[11px] text-portfolio-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-forest" />
                  Engineering Specification
                </span>
                <span className="font-mono text-portfolio-forest font-medium">atharva-vaddepalli.dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
