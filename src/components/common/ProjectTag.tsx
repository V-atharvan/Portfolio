import React from 'react';

interface ProjectTagProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'accent' | 'forest' | 'outline';
  className?: string;
}

export const ProjectTag: React.FC<ProjectTagProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center text-[11px] font-mono px-2.5 py-0.5 rounded tracking-tight transition-colors';

  const variantClasses = {
    neutral: 'bg-portfolio-surface-subtle text-portfolio-charcoal border border-portfolio-border',
    accent: 'bg-portfolio-sage-light text-portfolio-forest border border-portfolio-sage/30 font-medium',
    forest: 'bg-portfolio-forest text-portfolio-bg font-medium',
    outline: 'bg-transparent text-portfolio-muted border border-portfolio-border/80',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
