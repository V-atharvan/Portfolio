import React from 'react';
import { Container } from './Container';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  hasBorderTop?: boolean;
  background?: 'primary' | 'white' | 'muted';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className = '',
  hasBorderTop = true,
  background = 'primary',
}) => {
  const bgClasses = {
    primary: 'bg-[#F7F7F2]',
    white: 'bg-white',
    muted: 'bg-[#F0F1EC]',
  };

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 lg:py-24 ${bgClasses[background]} ${
        hasBorderTop ? 'border-t border-portfolio-border' : ''
      } ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};
