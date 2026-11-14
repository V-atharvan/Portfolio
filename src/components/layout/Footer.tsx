import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo, educationData } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-portfolio-border mt-24 text-portfolio-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-portfolio-border">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-portfolio-forest text-portfolio-bg flex items-center justify-center font-mono font-bold text-sm">
                AV
              </span>
              <span className="text-lg font-bold tracking-tight text-portfolio-forest">
                ATHARVA VADDEPALLI
              </span>
            </div>
            <p className="text-sm text-portfolio-muted max-w-md leading-relaxed">
              Java Backend Developer & AI/ML Enthusiast. Building practical, high-integrity software solutions through backend engineering, clean data architecture, and predictive analytics.
            </p>
            <div className="text-xs font-mono text-portfolio-muted space-y-1">
              <p>Undergraduate: {educationData.degree}</p>
              <p>{educationData.institution}, {educationData.location}</p>
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-portfolio-charcoal">
              <li>
                <a href="#hero" className="hover:text-portfolio-forest hover:underline transition-colors">
                  Overview / Hero
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-portfolio-forest hover:underline transition-colors">
                  About Journey
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-portfolio-forest hover:underline transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-portfolio-forest hover:underline transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-portfolio-forest hover:underline transition-colors">
                  Experience & Leadership
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenResume} 
                  className="text-portfolio-forest font-medium hover:underline text-left"
                >
                  View Full Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Repositories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-portfolio-forest mb-4 font-mono">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-portfolio-charcoal hover:text-portfolio-forest transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-portfolio-forest" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-portfolio-charcoal hover:text-portfolio-forest transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-portfolio-forest" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-portfolio-charcoal hover:text-portfolio-forest transition-colors"
                >
                  <Mail className="w-4 h-4 text-portfolio-forest" />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-portfolio-muted">
          <div>
            © {new Date().getFullYear()} Atharva Vaddepalli. All technical rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono">Clean Architecture • Java & Spring Boot</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-portfolio-forest hover:text-portfolio-forest-hover font-medium p-1 rounded transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
