export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period?: string;
  category: 'Leadership & Hackathons' | 'Institutional Activities' | 'Technical Development';
  description: string;
  keyContributions: string[];
  technologies?: string[];
  verifiedOutcome?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'ecell-iitb-illuminate',
    organization: 'E-Cell IIT Bombay Illuminate Workshop',
    role: 'Team Lead & Pitch Presenter (Odyssey)',
    period: 'Collegiate Workshop & Competition',
    category: 'Leadership & Hackathons',
    description:
      'Participated in the intensive entrepreneurship, product design, and technical idea-pitch workshop conducted by E-Cell IIT Bombay. Led the student team that conceptualized and architected the Odyssey talent platform.',
    keyContributions: [
      'Led the technical architecture pitch, explaining role-based authentication, student verification workflows, and skill-based matching.',
      'Represented the team during the competitive pitch presentation and Q&A sessions before evaluation mentors.',
      'Structured the core product concept bridging academic placement cells, candidates, and hiring companies.',
    ],
    technologies: ['Java', 'Spring Boot', 'System Architecture', 'Pitch Strategy'],
    verifiedOutcome: 'Awarded official Team Pitch Recognition at the E-Cell IIT Bombay Illuminate workshop.',
  },
  {
    id: 'tedx-sinhgad-coe',
    organization: 'TEDx Sinhgad COE',
    role: 'Creative & Design Lead',
    period: 'Collegiate Event Organization',
    category: 'Institutional Activities',
    description:
      'Served as Creative and Design Lead for the independently organized TEDx event at N. B. Navale Sinhgad College of Engineering, overseeing visual consistency and event branding.',
    keyContributions: [
      'Led the creative team in establishing coherent typographic guidelines and color standards aligned with TEDx branding rules.',
      'Designed presentation collateral, speaker promotional material, and stage visual assets.',
      'Collaborated closely with stage logistics, media teams, and faculty coordinators to ensure smooth event execution.',
    ],
    verifiedOutcome: 'Successfully delivered complete visual branding and creative direction for the institutional TEDx conference.',
  },
  {
    id: 'aicte-ide-bootcamp',
    organization: 'AICTE Innovation, Design and Entrepreneurship (IDE) Bootcamp',
    role: 'Student Participant & Technical Contributor',
    period: 'National Innovation Initiative',
    category: 'Institutional Activities',
    description:
      'Selected to participate in the AICTE IDE Bootcamp, focusing on design thinking, problem discovery, rapid software prototyping, and user-centric solution engineering.',
    keyContributions: [
      'Engaged in collaborative problem-solving sprints tackling real-world operational challenges.',
      'Applied design thinking frameworks to decompose user friction points into actionable technical specifications.',
      'Collaborated in multi-disciplinary teams across structured design reviews and peer evaluations.',
    ],
    verifiedOutcome: 'Completed immersive training in design thinking, problem validation, and innovative product development.',
  },
  {
    id: 'technical-development-journey',
    organization: 'Academic & Independent Software Development',
    role: 'Java Backend Developer & Student Researcher',
    period: '2022 - Present',
    category: 'Technical Development',
    description:
      'Hands-on technical engineering focused on modern Java architectures, Spring Boot services, relational database persistence, and medical/scientific analytics prototypes.',
    keyContributions: [
      'Architected REST API backends and normalized PostgreSQL/MySQL schemas for GreenSynth and Odyssey.',
      'Engineered medical image slice preprocessing and volumetric segmentation routines in Python for NeuroScope 3D.',
      'Maintained consistent version control, clean commit histories, and modular repository structures on GitHub.',
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'Git'],
    verifiedOutcome: 'Engineered 4 practical software prototypes and continuous open-source repository contributions.',
  },
];
