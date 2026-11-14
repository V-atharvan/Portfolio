import React from 'react';
import { Mail } from 'lucide-react';
import { socialConfig } from '../../config/social';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconClassName = 'w-4 h-4',
  showLabels = true,
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 ${className}`}>
      {/* GitHub */}
      <a
        href={socialConfig.github.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-portfolio-charcoal hover:text-portfolio-forest transition-colors font-medium text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded"
        aria-label={socialConfig.github.ariaLabel}
      >
        <GithubIcon className={`${iconClassName} text-portfolio-forest shrink-0`} />
        {showLabels && <span>{socialConfig.github.name}</span>}
      </a>

      <span className="text-portfolio-border select-none" aria-hidden="true">•</span>

      {/* LinkedIn */}
      <a
        href={socialConfig.linkedin.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-portfolio-charcoal hover:text-portfolio-forest transition-colors font-medium text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded"
        aria-label={socialConfig.linkedin.ariaLabel}
      >
        <LinkedinIcon className={`${iconClassName} text-portfolio-forest shrink-0`} />
        {showLabels && <span>{socialConfig.linkedin.name}</span>}
      </a>

      <span className="text-portfolio-border select-none" aria-hidden="true">•</span>

      {/* Email */}
      <a
        href={socialConfig.email.url}
        className="inline-flex items-center gap-1.5 text-portfolio-charcoal hover:text-portfolio-forest transition-colors font-medium text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded"
        aria-label={socialConfig.email.ariaLabel}
      >
        <Mail className={`${iconClassName} text-portfolio-forest shrink-0`} />
        {showLabels && <span>{socialConfig.email.name}</span>}
      </a>
    </div>
  );
};
