import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  target,
  rel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-portfolio-forest focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-lg';

  const sizeClasses = {
    sm: 'text-xs sm:text-sm px-3.5 py-2 min-h-[38px] gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base sm:text-lg px-6 py-3 min-h-[48px] gap-2.5',
  };

  const variantClasses = {
    primary: 'bg-portfolio-forest text-portfolio-bg hover:bg-portfolio-forest-hover shadow-subtle hover:shadow-card',
    secondary: 'bg-white text-portfolio-forest border border-portfolio-border hover:border-portfolio-sage hover:bg-portfolio-surface-subtle shadow-subtle',
    outline: 'bg-transparent text-portfolio-charcoal border border-portfolio-border hover:border-portfolio-forest hover:text-portfolio-forest',
    ghost: 'bg-transparent text-portfolio-charcoal hover:text-portfolio-forest hover:bg-portfolio-sage-light/50',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        target={target} 
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};
