import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, Info } from 'lucide-react';
import { personalConfig } from '../../config/personal';
import { socialConfig } from '../../config/social';
import { projects } from '../../data/projects';
import { experienceData } from '../../data/experience';
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
${personalConfig.professionalRole}
Location: ${personalConfig.education.location}
Email: ${socialConfig.email.handle}
GitHub: ${socialConfig.github.url}
LinkedIn: ${socialConfig.linkedin.url}

EDUCATION
${personalConfig.education.degree} in ${personalConfig.education.field}
${personalConfig.education.college}
Academic Year: ${personalConfig.education.currentYear}

PRIMARY TECHNICAL FOCUS
${personalConfig.primaryTechnicalInterests.join(', ')}

FEATURED PROJECTS
${projects.map((p) => `• ${p.title} (${p.category}): ${p.shortDescription}`).join('\n')}

EXPERIENCE & LEADERSHIP
${experienceData.map((e) => `• ${e.role} — ${e.organization} (${e.period || 'Verified'})\n  ${e.description}`).join('\n')}

SUMMARY
${personalConfig.supportingIntroduction}
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
        className="bg-white rounded-xl shadow-2xl border border-portfolio-border max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden text-portfolio-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b border-portfolio-border bg-portfolio-surface-subtle min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-portfolio-forest shrink-0" />
            <h3 id="resume-modal-title" className="text-xs sm:text-base font-bold text-portfolio-charcoal truncate">
              Atharva Vaddepalli — Developer Resume Specification
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-portfolio-charcoal bg-white border border-portfolio-border rounded-md hover:bg-portfolio-surface-subtle transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-portfolio-forest" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-portfolio-charcoal bg-white border border-portfolio-border rounded-md hover:bg-portfolio-surface-subtle transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
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
              className="p-1.5 text-portfolio-muted hover:text-portfolio-charcoal hover:bg-portfolio-surface-muted rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed">
          {/* Transparent Notice about PDF status */}
          <div className="p-3.5 rounded-lg bg-portfolio-sage-light/50 border border-portfolio-sage/30 flex items-start gap-2.5 text-xs text-portfolio-charcoal">
            <Info className="w-4 h-4 text-portfolio-forest mt-0.5 shrink-0" />
            <p>
              <strong className="text-portfolio-forest">Resume Status:</strong> {personalConfig.resume.notice}
            </p>
          </div>

          {/* Header */}
          <div className="border-b border-portfolio-border pb-5">
            <h1 className="text-2xl font-bold tracking-tight text-portfolio-forest">
              {personalConfig.name}
            </h1>
            <p className="text-sm font-semibold text-portfolio-charcoal mt-1">
              {personalConfig.professionalRole}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-portfolio-muted font-mono">
              <span>{personalConfig.education.location}</span>
              <span>•</span>
              <a href={socialConfig.email.url} className="text-portfolio-forest hover:underline">
                {socialConfig.email.handle}
              </a>
              <span>•</span>
              <a href={socialConfig.github.url} target="_blank" rel="noopener noreferrer" className="text-portfolio-forest hover:underline">
                {socialConfig.github.handle}
              </a>
              <span>•</span>
              <a href={socialConfig.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-portfolio-forest hover:underline">
                {socialConfig.linkedin.handle}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-2 font-mono">
              Academic Status
            </h4>
            <p className="font-semibold text-portfolio-charcoal">
              {personalConfig.education.degree} in {personalConfig.education.field}
            </p>
            <p className="text-portfolio-muted text-xs">
              {personalConfig.education.college}, {personalConfig.education.location}
            </p>
            <span className="inline-block text-xs font-mono font-medium text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded mt-1.5">
              Current Academic Status: {personalConfig.education.currentYear}
            </span>
          </div>

          {/* Technical Interests */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-2 font-mono">
              Primary Technical Interests
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {personalConfig.primaryTechnicalInterests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs bg-portfolio-surface-subtle text-portfolio-charcoal px-2.5 py-1 rounded border border-portfolio-border"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-3 font-mono">
              Featured Software Projects
            </h4>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id} className="text-xs bg-portfolio-surface-subtle p-3 rounded-lg border border-portfolio-border">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-portfolio-charcoal">{project.title}</span>
                    <span className="font-mono text-portfolio-forest">{project.statusBadge}</span>
                  </div>
                  <p className="text-portfolio-muted mt-1 leading-relaxed">{project.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Leadership */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-3 font-mono">
              Leadership & Technical Activities
            </h4>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs bg-portfolio-surface-subtle p-3 rounded-lg border border-portfolio-border">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-portfolio-charcoal">{exp.role}</span>
                    {exp.period && <span className="font-mono text-portfolio-muted">{exp.period}</span>}
                  </div>
                  <p className="text-portfolio-forest font-semibold mt-0.5">{exp.organization}</p>
                  <p className="text-portfolio-muted mt-1 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest border-b border-portfolio-border pb-1 mb-2 font-mono">
              Professional Orientation
            </h4>
            <p className="text-xs sm:text-sm text-portfolio-charcoal/90 leading-relaxed bg-portfolio-surface-subtle p-3 rounded-lg border border-portfolio-border">
              {personalConfig.supportingIntroduction}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-5 py-3 border-t border-portfolio-border bg-portfolio-surface-subtle flex items-center justify-between">
          <span className="text-xs text-portfolio-muted">
            Atharva Vaddepalli — Verified Developer Profile
          </span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
