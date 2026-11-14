import React from 'react';
import type { ProjectItem } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectItem[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  // Sort projects by priority order (1. GreenSynth, 2. NeuroScope 3D, 3. BuildWise AI, 4. Odyssey)
  const sortedProjects = [...projects].sort((a, b) => a.priorityOrder - b.priorityOrder);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
