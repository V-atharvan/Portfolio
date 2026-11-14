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
  resumeDownloadUrl?: string; // Link to resume document/PDF
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
  title: string;
  description: string;
  technology: string;
}

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
