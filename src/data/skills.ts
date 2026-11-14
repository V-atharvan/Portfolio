export type SkillProficiency = 'Core Focus' | 'Working Knowledge' | 'Practiced';

export interface SkillItem {
  name: string;
  category: 'Programming Languages' | 'Backend Development' | 'Databases' | 'Development Tools' | 'AI and Data Science';
  proficiency?: SkillProficiency;
  description?: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Foundational languages used for backend logic, algorithmic problem-solving, and analytical scripting.',
    skills: [
      { name: 'Java', category: 'Programming Languages', proficiency: 'Core Focus', description: 'Core Java, OOP principles, Collections Framework, Multithreading, Streams API' },
      { name: 'Python', category: 'Programming Languages', proficiency: 'Working Knowledge', description: 'Data processing, scientific scripting, ML model prototyping, FastAPI' },
      { name: 'SQL', category: 'Programming Languages', proficiency: 'Core Focus', description: 'Relational queries, table joins, schema constraints, indexing, normalization' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Server-side architectures, RESTful design principles, and enterprise persistence frameworks.',
    skills: [
      { name: 'Spring Boot', category: 'Backend Development', proficiency: 'Core Focus', description: 'Application configuration, autowiring, dependency injection, service layers' },
      { name: 'Spring Framework', category: 'Backend Development', proficiency: 'Core Focus', description: 'Spring MVC, IoC Container, Bean lifecycles, REST controllers' },
      { name: 'REST API Development', category: 'Backend Development', proficiency: 'Core Focus', description: 'Resource URI design, HTTP verbs, status code conventions, DTO patterns' },
      { name: 'Hibernate', category: 'Backend Development', proficiency: 'Working Knowledge', description: 'Object-relational mapping (ORM), entity lifecycles, session management' },
      { name: 'JPA', category: 'Backend Development', proficiency: 'Working Knowledge', description: 'Java Persistence API abstractions, Spring Data repositories, entity relationships' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational database engines, structured query design, and transactional data integrity.',
    skills: [
      { name: 'PostgreSQL', category: 'Databases', proficiency: 'Core Focus', description: 'Relational schema design, data types, constraints, complex joins, views' },
      { name: 'MySQL', category: 'Databases', proficiency: 'Core Focus', description: 'ACID transactions, foreign key constraints, table indexing, query optimization' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Build management, source control, and integrated development environments.',
    skills: [
      { name: 'Git', category: 'Development Tools', proficiency: 'Core Focus', description: 'Branch management, commit hygiene, merge workflows, version control' },
      { name: 'GitHub', category: 'Development Tools', proficiency: 'Core Focus', description: 'Repository management, pull requests, collaboration, code reviews' },
      { name: 'Apache Maven', category: 'Development Tools', proficiency: 'Core Focus', description: 'POM dependency configuration, build lifecycles, plugin management' },
      { name: 'IntelliJ IDEA', category: 'Development Tools', proficiency: 'Core Focus', description: 'Primary IDE for Java/Spring development, debugging, profiling' },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI and Data Science',
    description: 'Applied scientific computing and machine learning libraries for predictive workflows and data analysis.',
    skills: [
      { name: 'NumPy', category: 'AI and Data Science', proficiency: 'Working Knowledge', description: 'Multidimensional array manipulation, vectorized math, matrix operations' },
      { name: 'Pandas', category: 'AI and Data Science', proficiency: 'Working Knowledge', description: 'DataFrame transformations, CSV/JSON data cleaning, statistical summarization' },
      { name: 'Scikit-learn', category: 'AI and Data Science', proficiency: 'Working Knowledge', description: 'Classical machine learning pipelines, classification, regression, feature scaling' },
    ],
  },
];
