import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-portfolio-sage" aria-hidden="true" />
          <span className="text-xs uppercase font-mono tracking-widest text-portfolio-muted font-semibold">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-portfolio-charcoal">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-portfolio-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-12 h-0.5 bg-portfolio-sage/40 rounded-full ${isCenter ? 'mx-auto' : ''}`} aria-hidden="true" />
    </div>
  );
};
