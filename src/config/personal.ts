export interface PersonalConfig {
  name: string;
  brandWordmark: string;
  professionalRole: string;
  primaryHeadline: string;
  supportingIntroduction: string;
  education: {
    degree: string;
    field: string;
    currentYear: string;
    college: string;
    location: string;
  };
  primaryTechnicalInterests: string[];
  resume: {
    filePath: string;
    isAvailable: boolean;
    notice: string;
  };
}

export const personalConfig: PersonalConfig = {
  name: 'ATHARVA VADDEPALLI',
  brandWordmark: 'ATHARVA.',
  professionalRole: 'Java Backend Developer | Spring Boot | AI/ML Enthusiast',
  primaryHeadline: 'Building practical software through backend engineering and intelligent applications.',
  supportingIntroduction:
    "I'm a Computer Science Engineering student interested in backend development, software architecture and intelligent applications. I enjoy building practical solutions, exploring new technologies and understanding how software systems work behind the scenes.",
  education: {
    degree: 'B.Tech',
    field: 'Computer Science Engineering',
    currentYear: 'Third Year',
    college: 'N. B. Navale Sinhgad College of Engineering, Solapur',
    location: 'Solapur, Maharashtra, India',
  },
  primaryTechnicalInterests: [
    'Java programming',
    'Core Java',
    'Data Structures and Algorithms',
    'Spring Boot',
    'Spring Framework',
    'REST API development',
    'Hibernate and JPA',
    'PostgreSQL and MySQL',
    'Python',
    'Machine Learning',
    'Software architecture',
    'Data-driven applications',
  ],
  resume: {
    filePath: '/resume.pdf',
    isAvailable: false, // Honestly marked: raw PDF file will be attached in assets; interactive preview is provided
    notice: 'Resume preview is available via the interactive developer summary. The static PDF file will be linked directly upon document finalization.',
  },
};
