export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year?: string;
  category: 'Competition Recognition' | 'Leadership Role' | 'Technical Milestone';
  description: string;
  isVerified: boolean;
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-ecell-illuminate',
    title: 'Team Pitch Recognition — Odyssey Platform',
    organization: 'E-Cell IIT Bombay Illuminate Workshop',
    year: '2023 - 2024',
    category: 'Competition Recognition',
    description:
      'Earned team pitch recognition during the competitive idea presentation round for Odyssey, presenting a structured skill-based campus talent platform to workshop evaluators.',
    isVerified: true,
  },
  {
    id: 'ach-tedx-lead',
    title: 'Creative & Design Lead Appointment',
    organization: 'TEDx Sinhgad COE',
    year: '2023 - 2024',
    category: 'Leadership Role',
    description:
      'Appointed to lead the design and visual branding team for TEDx Sinhgad COE, successfully managing end-to-end design deliverables and visual identity standards.',
    isVerified: true,
  },
  {
    id: 'ach-aicte-ide',
    title: 'AICTE IDE Bootcamp Selection & Participation',
    organization: 'Ministry of Education & AICTE',
    year: '2023 - 2024',
    category: 'Technical Milestone',
    description:
      'Selected to represent the college at the national Innovation, Design and Entrepreneurship (IDE) Bootcamp, completing structured workshops in product validation and rapid prototyping.',
    isVerified: true,
  },
  {
    id: 'ach-java-backend-coursework',
    title: 'Java Backend & Spring Framework Foundations',
    organization: 'Academic Curriculum & Independent Technical Labs',
    year: '2022 - Present',
    category: 'Technical Milestone',
    description:
      'Completed comprehensive academic coursework and practical laboratory projects in Object-Oriented Programming, Data Structures, Relational Database Management Systems, and Spring Boot REST API engineering.',
    isVerified: true,
  },
];
