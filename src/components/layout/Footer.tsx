import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalConfig } from '../../config/personal';
import { SocialLinks } from '../common/SocialLinks';
import { Container } from './Container';

const currentYear = new Date().getFullYear();

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-portfolio-border mt-16 text-portfolio-charcoal">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-portfolio-border">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-xl font-bold tracking-tight text-portfolio-charcoal font-sans">
              ATHARVA<span className="text-portfolio-forest font-black">.</span>
            </div>
            <p className="text-sm text-portfolio-muted max-w-md leading-relaxed font-sans">
              {personalConfig.professionalRole}. Third-year Computer Science Engineering student at {personalConfig.education.college}.
            </p>
            <p className="text-xs font-mono text-portfolio-muted">
              {personalConfig.education.location}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2 text-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold block mb-2">
              Portfolio Map
            </span>
            <ul className="space-y-1.5 text-xs text-portfolio-charcoal font-sans">
              <li>
                <a href="#about" className="hover:text-portfolio-forest hover:underline transition-colors">
                  About Me
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
                  Experience & Activities
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-portfolio-forest hover:underline transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-portfolio-forest hover:underline transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-portfolio-forest hover:underline transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold block">
              Channels
            </span>
            <SocialLinks iconClassName="w-4 h-4" />
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-xs font-semibold text-portfolio-forest hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded"
              >
                View Developer Resume Summary →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-portfolio-muted font-sans">
          <div>
            © {currentYear} Atharva Vaddepalli. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">Java & Spring Boot Portfolio</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-portfolio-forest hover:text-portfolio-forest-hover font-medium p-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
