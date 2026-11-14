import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectCaseStudies } from '../data/projectDetails';
import { ProjectDetailHeader } from '../components/projects/ProjectDetailHeader';
import { ProjectCalloutNotice } from '../components/projects/ProjectCalloutNotice';
import { ProjectOverviewSection } from '../components/projects/ProjectOverviewSection';
import { ProjectProblemSolutionSection } from '../components/projects/ProjectProblemSolutionSection';
import { ProjectFeaturesSection } from '../components/projects/ProjectFeaturesSection';
import { ProjectTechStackSection } from '../components/projects/ProjectTechStackSection';
import { ProjectArchitectureSection } from '../components/projects/ProjectArchitectureSection';
import { ProjectDevelopmentProcessSection } from '../components/projects/ProjectDevelopmentProcessSection';
import { ProjectChallengesSection } from '../components/projects/ProjectChallengesSection';
import { ProjectContributionsSection } from '../components/projects/ProjectContributionsSection';
import { ProjectVisualSchematic } from '../components/projects/ProjectVisualSchematic';
import { ProjectRoadmapSection } from '../components/projects/ProjectRoadmapSection';
import { ProjectLinksCard } from '../components/projects/ProjectLinksCard';
import { ProjectNavigationFooter } from '../components/projects/ProjectNavigationFooter';
import { Button } from '../components/ui/Button';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = projectCaseStudies.findIndex((p) => p.slug === slug);
  const project = projectCaseStudies[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      document.title = `${project.title} | Technical Case Study | Atharva Vaddepalli`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', project.shortDescription);
      }
    } else {
      document.title = 'Project Not Found | Atharva Vaddepalli';
    }
  }, [slug, project]);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F7F7F2] py-20 px-4 sm:px-6">
        <div className="max-w-xl mx-auto bg-white border border-portfolio-border rounded-2xl p-8 sm:p-12 text-center shadow-card space-y-4">
          <div className="w-12 h-12 rounded-full bg-portfolio-sage-light text-portfolio-forest mx-auto flex items-center justify-center font-mono font-bold text-lg">
            404
          </div>
          <h1 className="text-2xl font-bold text-portfolio-charcoal">
            Project Case Study Not Found
          </h1>
          <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed">
            The requested project identifier <code className="bg-portfolio-surface-subtle px-1.5 py-0.5 rounded text-portfolio-forest font-mono">{slug}</code> does not match any documented engineering case study in the portfolio.
          </p>
          <div className="pt-4">
            <Button variant="primary" to="/#projects" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Return to All Featured Projects</span>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const prevProject = currentIndex > 0 ? projectCaseStudies[currentIndex - 1] : null;
  const nextProject = currentIndex < projectCaseStudies.length - 1 ? projectCaseStudies[currentIndex + 1] : null;

  return (
    <main className="py-8 sm:py-14 bg-[#F7F7F2] min-h-screen">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section A: Project Header & Hero */}
        <ProjectDetailHeader
          project={project}
          currentIndex={currentIndex}
          totalProjects={projectCaseStudies.length}
        />

        {/* Prominent Callout Notice (Scientific Note / Medical Disclaimer / Prototype Note / Award) */}
        {project.calloutNotice && (
          <ProjectCalloutNotice notice={project.calloutNotice} />
        )}

        {/* Section B: Project Overview */}
        <ProjectOverviewSection overview={project.overview} />

        {/* Sections C & D: Problem Statement & Proposed Solution */}
        <ProjectProblemSolutionSection
          problemStatement={project.problemStatement}
          proposedSolution={project.proposedSolution}
        />

        {/* Section E: Key Verified Features */}
        <ProjectFeaturesSection features={project.keyFeatures} />

        {/* Section F: Technology Stack & Engineering Roles */}
        <ProjectTechStackSection technologies={project.technologies} />

        {/* Section G: System Architecture & Data Flow */}
        <ProjectArchitectureSection
          overview={project.technicalArchitecture.overview}
          diagramType={project.technicalArchitecture.diagramType}
          steps={project.technicalArchitecture.steps}
          keyPatterns={project.technicalArchitecture.keyPatterns}
        />

        {/* Section H: Development Process & Lifecycle */}
        <ProjectDevelopmentProcessSection phases={project.developmentProcess} />

        {/* Section I: Technical Challenges & Engineering Trade-Offs */}
        <ProjectChallengesSection challenges={project.challengesAndDecisions} />

        {/* Section J: Atharva's Direct Engineering Ownership */}
        <ProjectContributionsSection contributions={project.myContributions} />

        {/* Section K: Technical Schematic & Architectural Blueprint */}
        <ProjectVisualSchematic
          title={project.visualSchematic.title}
          caption={project.visualSchematic.caption}
          diagramLabel={project.visualSchematic.diagramLabel}
          stages={project.visualSchematic.stages}
        />

        {/* Section L: Implementation Status & Future Scope */}
        <ProjectRoadmapSection
          completedFeatures={project.roadmap.completedFeatures}
          plannedFeatures={project.roadmap.plannedFeatures}
        />

        {/* Section M: Verified Exploration & Repository Access */}
        <ProjectLinksCard
          title={project.title}
          githubUrl={project.githubUrl}
          liveDemoUrl={project.liveDemoUrl}
          demoStatus={project.demoStatus}
        />

        {/* Section N: Next Project Navigation */}
        <ProjectNavigationFooter
          prevProject={prevProject}
          nextProject={nextProject}
          currentIndex={currentIndex}
          totalProjects={projectCaseStudies.length}
        />
      </article>
    </main>
  );
};
