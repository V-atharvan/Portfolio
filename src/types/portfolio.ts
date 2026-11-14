export interface PersonalInfo {
  name: string;
  headline: string;
  introduction: string;
  currentEducation: string;
  college: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeDownloadUrl?: string;
  interests: string[];
}

export type SkillProficiency = 'Core Focus' | 'Working Knowledge' | 'Academic & Practical';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Backend' | 'Database' | 'Tools' | 'AI/ML';
  level: SkillProficiency;
  iconName?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'Programming' | 'Backend' | 'Database' | 'Tools' | 'AI/ML';
  description: string;
  skills: SkillItem[];
}

export interface ProjectArchitectureStep {
  stepNumber?: string;
  title: string;
  component?: string;
  description: string;
  technology: string;
  input?: string;
  output?: string;
}

export interface ProjectCalloutNotice {
  type: 'info' | 'warning' | 'award';
  title: string;
  content: string;
}

export interface ProjectDevelopmentPhase {
  phase: string;
  title: string;
  summary: string;
  activities: string[];
}

export interface ProjectTechnicalChallenge {
  challenge: string;
  whyDifficult: string;
  engineeringApproach: string;
  outcomeAndLearning: string;
}

export interface ProjectContributionArea {
  area: string;
  ownership: 'Direct Engineering Ownership' | 'Collaborative / Team Lead';
  description: string;
  deliverables: string[];
}

export interface ProjectVisualSchematicStage {
  stepNumber: string;
  name: string;
  component?: string;
  description: string;
  badge: string;
  subItems?: string[];
}

export interface ProjectRoadmapItem {
  name: string;
  description: string;
  status: 'Completed & Verified' | 'Planned Milestone';
  badge: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  officialTitle?: string;
  subtitle: string;
  shortDescription: string;
  category: string;
  accentTag: string;
  statusBadge: string;
  demoStatus: 'live' | 'prototype' | 'research_phase' | 'repository_only';
  priorityOrder: number;
  githubUrl?: string;
  liveDemoUrl?: string;
  calloutNotice?: ProjectCalloutNotice;
  
  overview: {
    summary: string;
    background: string;
    motivation: string;
  };
  
  problemStatement: {
    coreIssue: string;
    conventionalLimitations: string[];
    impact: string;
  };
  
  proposedSolution: {
    summary: string;
    systemWorkflow: string[];
    boundariesAndScope: string;
  };
  
  keyFeatures: {
    title: string;
    description: string;
    tag: string;
    isVerified: boolean;
  }[];
  
  technologies: {
    category: string;
    description?: string;
    items: string[];
    detailedItems?: { name: string; purpose: string }[];
  }[];
  
  technicalArchitecture: {
    overview: string;
    diagramType: 'data-pipeline' | 'microservices' | 'client-api-db' | 'ml-pipeline';
    steps: ProjectArchitectureStep[];
    keyPatterns: string[];
  };
  
  developmentProcess: ProjectDevelopmentPhase[];
  challengesAndDecisions: ProjectTechnicalChallenge[];
  myContributions: ProjectContributionArea[];
  
  visualSchematic: {
    title: string;
    caption: string;
    diagramLabel: string;
    stages: ProjectVisualSchematicStage[];
  };
  
  roadmap: {
    completedFeatures: ProjectRoadmapItem[];
    plannedFeatures: ProjectRoadmapItem[];
  };
}

// Backwards-compatible ProjectDetail interface for existing components
export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  officialTitle?: string;
  subtitle: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  proposedSolution: string;
  technicalArchitecture: {
    overview: string;
    diagramType: 'data-pipeline' | 'microservices' | 'client-api-db' | 'ml-pipeline';
    steps: ProjectArchitectureStep[];
  };
  technologies: {
    category: string;
    items: string[];
  }[];
  myContributions: string[];
  completedFeatures: string[];
  plannedFeatures: string[];
  challengesAndLearnings: {
    challenge: string;
    solutionLearned: string;
  }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  demoStatus: 'live' | 'prototype' | 'research_phase' | 'repository_only';
  statusBadge: string;
  accentTag: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  type: 'Leadership' | 'Hackathon' | 'Development' | 'Technical Event' | 'College Activity';
  description: string;
  keyContributions: string[];
  technologies?: string[];
  isEditablePlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Technical Competition' | 'Project Recognition' | 'Leadership' | 'Certification';
  issuer: string;
  dateOrPeriod: string;
  description: string;
  credentialUrl?: string;
  isEditablePlaceholder?: boolean;
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  location: string;
  currentYear: string;
  courseworkHighlights: string[];
  institutionalFocus: string;
}

export interface ContactInfo {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  formIntegrationNotice: string;
}
