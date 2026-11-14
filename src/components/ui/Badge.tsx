import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'forest' | 'sage' | 'neutral' | 'outline' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-md tracking-tight transition-colors';
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs sm:text-sm px-2.5 py-1',
  };

  const variantClasses = {
    forest: 'bg-portfolio-forest text-portfolio-bg',
    sage: 'bg-portfolio-sage-light text-portfolio-forest border border-portfolio-sage/30',
    neutral: 'bg-white text-portfolio-charcoal border border-portfolio-border shadow-subtle',
    outline: 'border border-portfolio-border text-portfolio-muted bg-transparent',
    accent: 'bg-portfolio-forest/10 text-portfolio-forest font-semibold border border-portfolio-forest/20',
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
