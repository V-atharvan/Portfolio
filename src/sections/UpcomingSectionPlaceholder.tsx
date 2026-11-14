import React from 'react';
import { Container } from '../components/layout/Container';
import { Layers, Code2, FolderGit2, Briefcase, Mail } from 'lucide-react';

interface UpcomingSectionProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  category: 'about' | 'skills' | 'projects' | 'experience' | 'contact';
}

export const UpcomingSectionPlaceholder: React.FC<UpcomingSectionProps> = ({
  id,
  badge,
  title,
  description,
  category,
}) => {
  const getIcon = () => {
    switch (category) {
      case 'about':
        return <Layers className="w-5 h-5 text-portfolio-forest" />;
      case 'skills':
        return <Code2 className="w-5 h-5 text-portfolio-forest" />;
      case 'projects':
        return <FolderGit2 className="w-5 h-5 text-portfolio-forest" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-portfolio-forest" />;
      case 'contact':
        return <Mail className="w-5 h-5 text-portfolio-forest" />;
      default:
        return <Layers className="w-5 h-5 text-portfolio-forest" />;
    }
  };

  return (
    <section id={id} className="py-14 sm:py-20 border-t border-portfolio-border bg-white scroll-mt-20">
      <Container>
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-portfolio-sage" />
            <span className="text-xs uppercase font-mono tracking-widest text-portfolio-muted font-medium">
              {badge}
            </span>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="p-2.5 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border shrink-0 mt-1">
              {getIcon()}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-portfolio-charcoal">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-portfolio-muted mt-1 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-portfolio-muted">
              Section structure and anchor points established. Complete component implementation planned for Phase 2.
            </span>
            <span className="font-mono text-portfolio-forest font-semibold bg-portfolio-sage-light px-2.5 py-1 rounded shrink-0 self-start sm:self-auto">
              Phase 2 Target
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
};
