import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Cpu, 
  AlertTriangle, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft,
  FileCode,
  Compass
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Atharva Vaddepalli Project Detail`;
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-portfolio-charcoal">Project Not Found</h1>
        <p className="text-portfolio-muted mt-2">The requested project could not be found.</p>
        <div className="mt-6">
          <Button variant="primary" to="/#projects">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="py-8 sm:py-14 bg-[#F7F7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-portfolio-forest hover:text-portfolio-forest-hover hover:underline transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
          <span className="text-xs font-mono text-portfolio-muted">
            Project {currentIndex + 1} of {projectsData.length}
          </span>
        </div>

        {/* Project Header Banner */}
        <div className="bg-white rounded-2xl border border-portfolio-border p-6 sm:p-10 shadow-card space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-forest bg-portfolio-sage-light px-2.5 py-1 rounded">
                {project.accentTag}
              </span>
              <span className="text-xs font-mono text-portfolio-muted bg-portfolio-surface-subtle px-2 py-0.5 rounded border border-portfolio-border">
                {project.statusBadge}
              </span>
            </div>
            
            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-portfolio-border bg-white text-xs font-medium text-portfolio-charcoal hover:border-portfolio-forest hover:text-portfolio-forest transition-colors shadow-subtle"
                >
                  <Github className="w-4 h-4 text-portfolio-forest" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-portfolio-forest text-portfolio-bg text-xs font-medium hover:bg-portfolio-forest-hover transition-colors shadow-subtle"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-portfolio-charcoal">
              {project.title}
            </h1>
            {project.officialTitle && (
              <p className="text-xs sm:text-sm font-mono text-portfolio-muted mt-2 leading-relaxed">
                {project.officialTitle}
              </p>
            )}
            <p className="text-base sm:text-xl font-medium text-portfolio-forest mt-2">
              {project.subtitle}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border text-sm sm:text-base text-portfolio-charcoal leading-relaxed">
            {project.overview}
          </div>
        </div>

        {/* Problem Statement vs Proposed Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Statement */}
          <div className="bg-white rounded-xl border border-portfolio-border p-6 shadow-subtle space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Problem Statement</span>
            </div>
            <h3 className="font-bold text-lg text-portfolio-charcoal">
              Challenges Addressed
            </h3>
            <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Proposed Solution */}
          <div className="bg-white rounded-xl border border-portfolio-border p-6 shadow-subtle space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
              <span className="w-2 h-2 rounded-full bg-portfolio-forest" />
              <span>Proposed Solution</span>
            </div>
            <h3 className="font-bold text-lg text-portfolio-charcoal">
              Engineering Approach
            </h3>
            <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed">
              {project.proposedSolution}
            </p>
          </div>
        </div>

        {/* Technical Architecture Section with Pipeline Diagram */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-portfolio-charcoal">
            System Architecture & Data Flow
          </h2>
          <ArchitectureDiagram
            overview={project.technicalArchitecture.overview}
            steps={project.technicalArchitecture.steps}
            diagramType={project.technicalArchitecture.diagramType}
          />
        </div>

        {/* Technology Stack Categorization */}
        <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-portfolio-charcoal">
            Technology Stack & Technical Roles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.technologies.map((group) => (
              <div key={group.category} className="p-4 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/80">
                <span className="text-xs font-bold text-portfolio-forest block mb-2 font-mono">
                  {group.category}
                </span>
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-portfolio-charcoal font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-portfolio-sage" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atharva's Specific Contributions */}
        <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
            <Cpu className="w-4 h-4" />
            <span>Role Ownership</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-portfolio-charcoal">
            Atharva's Direct Engineering Contributions
          </h2>
          <div className="space-y-3">
            {project.myContributions.map((contrib, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-portfolio-surface-subtle border border-portfolio-border/70 text-xs sm:text-sm text-portfolio-charcoal">
                <CheckCircle2 className="w-4 h-4 text-portfolio-forest mt-0.5 shrink-0" />
                <span className="leading-relaxed">{contrib}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Features: Completed vs Planned (Clear Distinction) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Completed Features */}
          <div className="bg-white rounded-xl border border-portfolio-border p-6 shadow-subtle space-y-4">
            <div className="flex items-center justify-between border-b border-portfolio-border pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h3 className="font-bold text-base text-portfolio-charcoal">
                  Completed Features
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                Verified ({project.completedFeatures.length})
              </span>
            </div>
            <ul className="space-y-2.5">
              {project.completedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-portfolio-charcoal">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Planned Features */}
          <div className="bg-white rounded-xl border border-portfolio-border p-6 shadow-subtle space-y-4">
            <div className="flex items-center justify-between border-b border-portfolio-border pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-portfolio-sage" />
                <h3 className="font-bold text-base text-portfolio-charcoal">
                  Planned Roadmap
                </h3>
              </div>
              <span className="text-[11px] font-mono text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded font-medium border border-portfolio-sage/30">
                Next Milestones ({project.plannedFeatures.length})
              </span>
            </div>
            <ul className="space-y-2.5">
              {project.plannedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-portfolio-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-sage mt-2 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Challenges & Learnings */}
        <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
            <Lightbulb className="w-4 h-4" />
            <span>Reflective Analysis</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-portfolio-charcoal">
            Engineering Challenges & Architectural Learnings
          </h2>
          <div className="space-y-4">
            {project.challengesAndLearnings.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-portfolio-charcoal block">Challenge:</span>
                    <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed">{item.challenge}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-portfolio-border/70">
                  <CheckCircle2 className="w-4 h-4 text-portfolio-forest mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-portfolio-forest block">Architectural Takeaway:</span>
                    <p className="text-xs sm:text-sm text-portfolio-charcoal leading-relaxed">{item.solutionLearned}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-6 border-t border-portfolio-border flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 p-3 rounded-lg bg-white border border-portfolio-border hover:border-portfolio-forest transition-colors text-xs sm:text-sm font-medium text-portfolio-charcoal w-full sm:w-auto"
            >
              <ChevronLeft className="w-4 h-4 text-portfolio-forest" />
              <div className="text-left">
                <span className="text-[10px] text-portfolio-muted block font-mono">Previous Project</span>
                <span className="font-bold">{prevProject.title}</span>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center justify-end gap-2 p-3 rounded-lg bg-white border border-portfolio-border hover:border-portfolio-forest transition-colors text-xs sm:text-sm font-medium text-portfolio-charcoal w-full sm:w-auto"
            >
              <div className="text-right">
                <span className="text-[10px] text-portfolio-muted block font-mono">Next Project</span>
                <span className="font-bold">{nextProject.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-portfolio-forest" />
            </Link>
          ) : <div />}
        </div>

      </div>
    </div>
  );
};
