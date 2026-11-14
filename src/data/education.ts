export interface EducationData {
  degree: string;
  field: string;
  institution: string;
  location: string;
  currentYear: string;
  courseworkHighlights: string[];
  institutionalEnvironment: string;
}

export const educationData: EducationData = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  institution: 'N. B. Navale Sinhgad College of Engineering',
  location: 'Solapur, Maharashtra, India',
  currentYear: 'Third Year (Undergraduate)',
  courseworkHighlights: [
    'Object-Oriented Programming (Java)',
    'Data Structures and Algorithms',
    'Database Management Systems (SQL & Relational Theory)',
    'Operating Systems & System Architecture',
    'Computer Networks and Web Protocols',
    'Software Engineering Principles',
    'Applied Data Science & Machine Learning Fundamentals',
  ],
  institutionalEnvironment:
    'Undergraduate engineering studies centered on solid theoretical computer science fundamentals, analytical problem solving, and practical laboratory software development.',
};
