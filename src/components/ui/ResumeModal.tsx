import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { personalInfo, educationData, skillCategories, projectsData, experienceData } from '../../data/portfolioData';
import { Button } from './Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const resumeText = `
ATHARVA VADDEPALLI
${personalInfo.headline}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl}
GitHub: ${personalInfo.githubUrl}
Location: ${personalInfo.location}

EDUCATION
${educationData.degree} - ${educationData.field}
${educationData.institution}, ${educationData.location}
Current Status: ${educationData.currentYear}

TECHNICAL SKILLS
${skillCategories.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

FEATURED PROJECTS
${projectsData.map(p => `• ${p.title}: ${p.shortDescription}`).join('\n')}

EXPERIENCE & ACTIVITIES
${experienceData.map(e => `• ${e.title} (${e.period}) - ${e.organization}\n  ${e.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-portfolio-charcoal/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl border border-portfolio-border max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden text-portfolio-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-portfolio-border bg-portfolio-surface-subtle">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-portfolio-forest" />
            <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold text-portfolio-charcoal">
              Atharva Vaddepalli — Developer Resume Preview
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-portfolio-charcoal bg-white border border-portfolio-border rounded-md hover:bg-portfolio-surface-subtle transition-colors shadow-subtle"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-portfolio-forest" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-portfolio-charcoal bg-white border border-portfolio-border rounded-md hover:bg-portfolio-surface-subtle transition-colors shadow-subtle"
              title="Copy plain text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-portfolio-muted" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-portfolio-muted hover:text-portfolio-charcoal hover:bg-portfolio-surface-muted rounded-md transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 text-sm sm:text-base leading-relaxed">
          {/* Header */}
          <div className="border-b border-portfolio-border pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-portfolio-forest">
              ATHARVA VADDEPALLI
            </h1>
            <p className="text-base font-medium text-portfolio-charcoal mt-1">
              Java Backend Developer | Spring Boot | AI/ML Enthusiast
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs sm:text-sm text-portfolio-muted">
              <span>{educationData.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-portfolio-forest hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-portfolio-forest hover:underline">
                github.com/AtharvaVaddepalli
              </a>
              <span>•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-portfolio-forest hover:underline">
                linkedin.com/in/atharva-vaddepalli
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-3">
              Education
            </h4>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline">
              <div>
                <p className="font-semibold text-portfolio-charcoal">{educationData.degree} in {educationData.field}</p>
                <p className="text-portfolio-muted text-xs sm:text-sm">{educationData.institution}, {educationData.location}</p>
              </div>
              <span className="text-xs font-mono font-medium text-portfolio-forest mt-1 sm:mt-0 bg-portfolio-sage-light px-2 py-0.5 rounded">
                {educationData.currentYear}
              </span>
            </div>
            <p className="text-xs text-portfolio-muted mt-2">
              <span className="font-medium text-portfolio-charcoal">Relevant Coursework:</span> {educationData.courseworkHighlights.join(', ')}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-3">
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {skillCategories.map((cat) => (
                <div key={cat.categoryKey} className="bg-portfolio-surface-subtle p-3 rounded-md border border-portfolio-border/70">
                  <span className="font-semibold text-portfolio-forest block mb-1">{cat.title}</span>
                  <p className="text-portfolio-charcoal">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-3">
              Key Engineering Projects
            </h4>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline">
                    <span className="font-bold text-portfolio-charcoal">{project.title}</span>
                    <span className="text-xs text-portfolio-muted font-mono">{project.statusBadge}</span>
                  </div>
                  <p className="text-portfolio-muted text-xs mt-0.5">{project.subtitle}</p>
                  <p className="text-portfolio-charcoal mt-1 text-xs sm:text-sm">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {project.technologies.flatMap(t => t.items).slice(0, 5).map(tech => (
                      <span key={tech} className="text-[11px] bg-portfolio-surface-muted text-portfolio-charcoal px-1.5 py-0.5 rounded border border-portfolio-border/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Leadership */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-3">
              Technical Experience & Leadership
            </h4>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline">
                    <span className="font-semibold text-portfolio-charcoal">{exp.title}</span>
                    <span className="text-xs text-portfolio-muted font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-portfolio-forest font-medium">{exp.organization}</p>
                  <p className="text-portfolio-muted mt-1 text-xs sm:text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-5 py-3 border-t border-portfolio-border bg-portfolio-surface-subtle flex items-center justify-between">
          <span className="text-xs text-portfolio-muted">
            All details verified against Atharva's academic and engineering records.
          </span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </div>
    </div>
  );
};
