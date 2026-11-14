import type { 
  PersonalInfo, 
  SkillCategory, 
  ProjectDetail, 
  ExperienceItem, 
  AchievementItem, 
  EducationInfo, 
  ContactInfo 
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Atharva Vaddepalli',
  headline: 'Java Backend Developer | Spring Boot | AI/ML Enthusiast',
  introduction: 'I build practical software solutions through backend engineering, data-driven systems and intelligent applications.',
  currentEducation: 'Third Year B.Tech Computer Science Engineering',
  college: 'N. B. Navale Sinhgad College of Engineering, Solapur',
  location: 'Solapur, Maharashtra, India',
  email: 'atharva.vaddepalli.dev@gmail.com',
  githubUrl: 'https://github.com/V-atharvan',
  linkedinUrl: 'https://linkedin.com/in/atharva-vaddepalli',
  resumeDownloadUrl: '#resume-modal',
  interests: [
    'Backend development',
    'Java and Spring Boot',
    'REST API development',
    'Database management',
    'Python and Machine Learning',
    'Software architecture',
    'Data-driven applications',
  ],
};

export const aboutMeContent = {
  summary: `I am a third-year Computer Science Engineering student at N. B. Navale Sinhgad College of Engineering, Solapur, with a strong focus on backend engineering, data persistence, and intelligent application design.`,
  paragraphs: [
    `My primary technical journey centers around modern Java backend architecture, where I build robust RESTful web services and structured data pipelines using Spring Boot, Spring Data JPA/Hibernate, and relational database systems such as PostgreSQL and MySQL.`,
    `I approach software development from an engineering-first perspective: emphasizing clean separation of concerns, dependable API contracts, maintainable data models, and scalable architectures. I enjoy solving architectural bottlenecks and structuring data flows that power real-world business and research workflows.`,
    `In addition to core backend systems, I actively explore the intersection of backend engineering and applied Machine Learning. Utilizing Python with NumPy, Pandas, and Scikit-learn, I work on integrating analytical pipelines and predictive capabilities into structured backend platforms, ranging from biomedical imaging prototypes to material synthesis research analytics.`
  ],
  pillars: [
    {
      title: 'Backend Engineering',
      desc: 'Developing maintainable, REST-compliant web services with Spring Boot, secure endpoints, and modular service layers.'
    },
    {
      title: 'Data & Persistence',
      desc: 'Designing relational schemas in PostgreSQL and MySQL with optimized queries and JPA/Hibernate entity relationships.'
    },
    {
      title: 'Applied AI & ML',
      desc: 'Preprocessing scientific datasets and applying analytical machine learning models to solve domain-specific problems.'
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryKey: 'Programming',
    description: 'Foundational and modern languages used for backend logic, algorithms, and analytical scripting.',
    skills: [
      { name: 'Java', category: 'Programming', level: 'Core Focus', description: 'Core Java, OOP, Collections, Multithreading, Streams API' },
      { name: 'Python', category: 'Programming', level: 'Working Knowledge', description: 'Data processing, scripting, ML model development' },
      { name: 'SQL', category: 'Programming', level: 'Core Focus', description: 'Relational queries, indexing, joins, schema definition' },
    ],
  },
  {
    title: 'Backend Architecture',
    categoryKey: 'Backend',
    description: 'Server-side frameworks and architectural standards for enterprise and web applications.',
    skills: [
      { name: 'Spring Boot', category: 'Backend', level: 'Core Focus', description: 'Microservices, dependency injection, application configuration' },
      { name: 'Spring Framework', category: 'Backend', level: 'Core Focus', description: 'Spring MVC, IoC Container, Bean lifecycle, Security basics' },
      { name: 'REST APIs', category: 'Backend', level: 'Core Focus', description: 'Resource modeling, HTTP verbs, status codes, DTO patterns' },
      { name: 'Hibernate / JPA', category: 'Backend', level: 'Working Knowledge', description: 'ORM mapping, repository abstractions, entity lifecycles' },
    ],
  },
  {
    title: 'Database Management',
    categoryKey: 'Database',
    description: 'Relational storage engines, transactional integrity, and normalized schema management.',
    skills: [
      { name: 'PostgreSQL', category: 'Database', level: 'Core Focus', description: 'Relational schema design, constraints, analytical queries' },
      { name: 'MySQL', category: 'Database', level: 'Core Focus', description: 'ACID transactions, indexing, foreign keys, database administration' },
    ],
  },
  {
    title: 'Development Tools & Build Systems',
    categoryKey: 'Tools',
    description: 'Version control, build automation, and integrated development environments.',
    skills: [
      { name: 'Git', category: 'Tools', level: 'Core Focus', description: 'Branching strategies, commit workflows, collaborative versioning' },
      { name: 'GitHub', category: 'Tools', level: 'Core Focus', description: 'Repository hosting, pull requests, issue tracking' },
      { name: 'Maven', category: 'Tools', level: 'Core Focus', description: 'Dependency management, build lifecycle, multi-module packaging' },
      { name: 'IntelliJ IDEA', category: 'Tools', level: 'Core Focus', description: 'Java/Spring development, profiling, debugging' },
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    categoryKey: 'AI/ML',
    description: 'Scientific computing, data manipulation, and classical machine learning algorithms.',
    skills: [
      { name: 'NumPy', category: 'AI/ML', level: 'Working Knowledge', description: 'Vectorized computations, multidimensional arrays' },
      { name: 'Pandas', category: 'AI/ML', level: 'Working Knowledge', description: 'Dataframe operations, data cleaning, statistical transformations' },
      { name: 'Scikit-learn', category: 'AI/ML', level: 'Working Knowledge', description: 'Regression, classification, preprocessing pipelines' },
    ],
  },
];

export const projectsData: ProjectDetail[] = [
  {
    id: 'greensynth',
    slug: 'greensynth',
    title: 'GREENSYNTH',
    officialTitle: 'GREENSYNTH: A DATA-DRIVEN RESEARCH AND ANALYTICS PLATFORM FOR GREEN SYNTHESIS OF SEMICONDUCTOR MATERIALS',
    subtitle: 'Green synthesis research and characterization analytics platform',
    shortDescription: 'A research-oriented platform designed to organize experimental data, analyze material characterization results and support objective-based experimental comparison and optimization.',
    overview: 'GREENSYNTH addresses the critical challenge of scattered experimental data in ecological nanotechnology research. It centralizes material characterization metrics (UV-Vis, XRD, FTIR, TEM), standardizes synthesis parameters, and provides systematic analytics for laboratory researchers seeking sustainable semiconductor synthesis routes.',
    problemStatement: 'Laboratory research into green synthesis of nanomaterials and semiconductors frequently suffers from siloed spreadsheets, disparate characterization files, and lack of reproducible parametric comparison across varied precursor concentrations, temperatures, and botanical extracts.',
    proposedSolution: 'A centralized data-driven web platform that ingests raw characterization observations, normalizes experiment logs across trials, and generates interactive comparison matrices and trend analyses to optimize synthesis yield and material properties.',
    technicalArchitecture: {
      overview: 'Modular client-server architecture with structured ingestion endpoints, validation middleware, and relational data modeling for reproducible experimental records.',
      diagramType: 'data-pipeline',
      steps: [
        {
          title: 'Experiment Data Ingestion',
          description: 'REST API endpoints collect structured synthesis parameters, precursor ratios, and characterization spectra data.',
          technology: 'Spring Boot REST Controllers / JSON DTOs'
        },
        {
          title: 'Validation & Normalization',
          description: 'Business rules validate physical ranges, normalize spectral measurement units, and enforce referential integrity.',
          technology: 'Java Service Layer & Bean Validation'
        },
        {
          title: 'Structured Research Store',
          description: 'Relational storage linking experiment metadata, characterization runs, and environmental parameters.',
          technology: 'PostgreSQL / Hibernate ORM'
        },
        {
          title: 'Analytical Query Engine',
          description: 'Aggregation pipelines compute variance, parametric correlations, and comparative synthesis trends.',
          technology: 'SQL Analytical Views / Python Analytics Service'
        }
      ]
    },
    technologies: [
      { category: 'Backend', items: ['Java 17', 'Spring Boot', 'REST APIs', 'Spring Data JPA'] },
      { category: 'Data & Database', items: ['PostgreSQL', 'Hibernate ORM', 'Schema Migrations'] },
      { category: 'Analytics & Processing', items: ['Python', 'Pandas', 'NumPy'] },
      { category: 'Build & Tools', items: ['Maven', 'Git', 'IntelliJ IDEA'] }
    ],
    myContributions: [
      'Designed the normalized relational database schema in PostgreSQL for multi-stage characterization runs.',
      'Implemented robust Spring Boot REST controllers and service layer handling experimental parameter submissions.',
      'Created analytical aggregation queries to facilitate multi-parameter cross-experiment comparisons.',
      'Constructed data validation rules to safeguard experimental records from corrupted characterization inputs.'
    ],
    completedFeatures: [
      'Experiment metadata tracking (precursors, pH, temperature, botanical agents)',
      'Characterization data intake and structured JSON/CSV ingestion',
      'Comparative experiment querying across synthesis parameters',
      'Normalized PostgreSQL database schema with relational integrity',
      'RESTful endpoints for CRUD operations on laboratory trials'
    ],
    plannedFeatures: [
      'Automated peak-detection algorithm for XRD and UV-Vis spectroscopy files',
      'Predictive synthesis outcome scoring using Scikit-learn regressors',
      'Multi-role laboratory user permissions and audit trail export'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Handling highly irregular characterization datasets with variable measurement resolutions.',
        solutionLearned: 'Designed flexible entity relationships separating high-level trial metadata from time-series and spectral observation arrays, ensuring high query performance.'
      },
      {
        challenge: 'Preventing duplicate or inconsistent experiment runs during rapid data entry.',
        solutionLearned: 'Enforced unique composite constraints and strict DTO validation annotations in Spring Boot before reaching the persistence tier.'
      }
    ],
    githubUrl: 'https://github.com/V-atharvan/GreenSynth',
    liveDemoUrl: undefined,
    demoStatus: 'prototype',
    statusBadge: 'Active Research Project',
    accentTag: 'Data-Driven Engineering'
  },
  {
    id: 'neuroscope-3d',
    slug: 'neuroscope-3d',
    title: 'NEUROSCOPE 3D',
    subtitle: '3D brain tumor visualization and MRI data exploration prototype',
    shortDescription: 'A medical imaging research prototype for 3D brain tumor visualization using MRI data, image processing and machine learning.',
    overview: 'NEUROSCOPE 3D is a research prototype engineered to transform 2D multi-modal MRI slice sequences into interactive 3D spatial reconstructions, assisting researchers in analyzing tumor boundaries, volume estimations, and structural anomalies.',
    problemStatement: 'Analyzing complex volumetric pathologies across sequential 2D MRI slices is cognitively taxing and lacks immediate intuitive spatial context for morphological assessment and volumetric sizing.',
    proposedSolution: 'An image processing pipeline that slices, filters, and reconstructs volumetric meshes from volumetric MRI data arrays, paired with exploratory machine learning segmentation assistance.',
    technicalArchitecture: {
      overview: 'Multi-stage processing pipeline executing MRI slice normalization, threshold segmentation, 3D surface extraction, and structured volumetric output.',
      diagramType: 'ml-pipeline',
      steps: [
        {
          title: 'DICOM/NIfTI Ingestion & Preprocessing',
          description: 'Loads voxel arrays, applies intensity normalization, skull stripping, and spatial noise reduction.',
          technology: 'Python / NumPy / Image Processing'
        },
        {
          title: 'Pathology Segmentation',
          description: 'Applies thresholding and algorithmic contour classification to isolate tumor regions of interest.',
          technology: 'Scikit-learn / Morphological Operations'
        },
        {
          title: '3D Mesh Reconstruction',
          description: 'Generates polygonal isosurfaces (Marching Cubes) representing tumor geometry in 3D coordinate space.',
          technology: 'Volumetric Geometry Algorithms'
        },
        {
          title: 'Exploration & Metrics API',
          description: 'Extracts geometric volume calculations, bounding extents, and spatial metrics.',
          technology: 'RESTful Service Endpoints'
        }
      ]
    },
    technologies: [
      { category: 'Image Processing & ML', items: ['Python', 'NumPy', 'Scikit-learn', 'Image Filters'] },
      { category: 'Volumetric Data', items: ['Voxel Arrays', 'Mesh Geometry', 'Surface Extraction'] },
      { category: 'Application Backend', items: ['REST API Services', 'File Processing Pipelines'] },
      { category: 'Tools', items: ['Git', 'Virtualenv', 'Jupyter Lab'] }
    ],
    myContributions: [
      'Researched and implemented voxel array normalization and spatial slicing pipelines in Python.',
      'Developed data transformation routines to convert sliced volumetric datasets into coordinated 3D point structures.',
      'Calculated morphological metrics including estimated tumor volume and axial dimensional measurements.',
      'Evaluated machine learning clustering and classification approaches for distinguishing tissue anomalies.'
    ],
    completedFeatures: [
      'Multi-slice MRI voxel data parsing and coordinate mapping',
      'Automated intensity normalization and contrast enhancement',
      'Volumetric region-of-interest segmentation algorithms',
      'Quantitative volume calculation and bounding box metrics output'
    ],
    plannedFeatures: [
      'Deep learning-based multi-class semantic segmentation (BraTS dataset benchmark)',
      'Web-based interactive WebGL/Three.js 3D viewer integration',
      'Support for real-time DICOM metadata header inspection'
    ],
    challengesAndLearnings: [
      {
        challenge: 'High computational overhead and memory consumption when manipulating raw 3D medical arrays.',
        solutionLearned: 'Implemented memory-mapped arrays and vectorized NumPy operations, reducing processing latency during volumetric filtering.'
      },
      {
        challenge: 'Variation in MRI scan contrast parameters across different imaging sequences (T1, T2, FLAIR).',
        solutionLearned: 'Developed robust min-max and z-score normalization routines to ensure reliable algorithmic consistency across varied acquisition inputs.'
      }
    ],
    githubUrl: 'https://github.com/V-atharvan/NeuroScope-3D',
    liveDemoUrl: 'https://neuro-scope-3-d.vercel.app',
    demoStatus: 'live',
    statusBadge: 'Medical Imaging Research',
    accentTag: 'Computer Vision & AI'
  },
  {
    id: 'buildwise-ai',
    slug: 'buildwise-ai',
    title: 'BUILDWISE AI',
    subtitle: 'AI-assisted construction estimation and Bill of Quantities platform',
    shortDescription: 'An AI-assisted construction estimation platform designed to support blueprint analysis, material estimation and bill of quantities generation.',
    overview: 'BUILDWISE AI streamlines the pre-construction estimation workflow by automating the tedious process of extracting structural dimensions, calculating material volumes (concrete, steel, masonry), and preparing structured Bill of Quantities (BOQ) with transparent formula audits.',
    problemStatement: 'Manual material takeoffs from architectural drawings are error-prone, labor-intensive, and prone to costly discrepancies between architectural plans and material procurement estimates.',
    proposedSolution: 'A structured software system combining algorithmic parameter extraction, customizable unit-rate databases, and standardized quantity calculation routines to generate verifiable construction cost estimates.',
    technicalArchitecture: {
      overview: 'Service-oriented backend with robust calculation engine, transactional rate database, and auditable calculation audit trail.',
      diagramType: 'client-api-db',
      steps: [
        {
          title: 'Blueprint & Parameter Input',
          description: 'Ingests dimensional inputs, structural schedules, and project tier classifications.',
          technology: 'Spring Boot REST Controllers / Validated DTOs'
        },
        {
          title: 'Quantity Calculation Engine',
          description: 'Executes mathematical takeoff formulas for concrete grades, reinforcement ratios, and formwork areas.',
          technology: 'Java Core Domain Engine'
        },
        {
          title: 'Material Rate & Schedule Repository',
          description: 'Persists localized material schedules, unit rates, and contingency parameters.',
          technology: 'PostgreSQL / Spring Data JPA'
        },
        {
          title: 'Bill of Quantities (BOQ) Exporter',
          description: 'Compiles itemized cost schedules with breakdown by labor, materials, and equipment.',
          technology: 'Document & Structured JSON Generator'
        }
      ]
    },
    technologies: [
      { category: 'Frontend & Mobile', items: ['Next.js', 'Flutter'] },
      { category: 'Backend & Services', items: ['FastAPI', 'Python', 'Celery Asynchronous Tasks'] },
      { category: 'Persistence', items: ['PostgreSQL', 'SQLAlchemy'] },
      { category: 'Tooling', items: ['Maven', 'Git', 'IntelliJ IDEA'] }
    ],
    myContributions: [
      'Architected the Spring Boot backend domain models for project specifications, material items, and BOQ lines.',
      'Implemented deterministic calculation services for concrete volume, steel tonnage ratios, and labor multipliers.',
      'Created structured database relationships linking projects to dynamic rate schedules in PostgreSQL.',
      'Wrote integration tests validating precision and rounding rules across multi-tier estimate rollups.'
    ],
    completedFeatures: [
      'Modular project estimation workspace with dynamic parameter inputs',
      'Structural quantity formulas (Footings, Columns, Beams, Slabs)',
      'Customizable material price index and contingency rate configurations',
      'Itemized Bill of Quantities breakdown generation with sub-totals',
      'RESTful endpoints for managing estimation projects and item catalogues'
    ],
    plannedFeatures: [
      'Computer vision blueprint OCR for automated dimension extraction from CAD/PDF blueprints',
      'Historical price volatility forecasting using machine learning regression models',
      'Automated contractor PDF bid-sheet generation'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Maintaining numerical precision across complex compound percentage markups and unit conversions.',
        solutionLearned: 'Utilized Java BigDecimal with explicit rounding modes throughout the entire calculation engine to eliminate floating-point discrepancies in monetary calculations.'
      },
      {
        challenge: 'Designing a flexible data model accommodating varying regional construction standards.',
        solutionLearned: 'Implemented polymorphic specification strategies and metadata key-value tables in PostgreSQL to support diverse structural types without schema breakage.'
      }
    ],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    demoStatus: 'prototype',
    statusBadge: 'Software Prototype',
    accentTag: 'Algorithmic Estimation'
  },
  {
    id: 'odyssey',
    slug: 'odyssey',
    title: 'ODYSSEY',
    officialTitle: 'Odyssey – College-to-Company Talent Platform',
    subtitle: 'College-to-company skill-based matching and recruitment platform',
    shortDescription: 'A college-to-company talent platform designed to connect students, colleges and companies through skill-based matching and recruitment workflows.',
    overview: 'ODYSSEY is a recruitment and placement management platform engineered to replace inefficient campus placement spreadsheets with a unified, transparent portal that bridges academic institutions, student job seekers, and hiring organizations. Pitched at E-Cell IIT Bombay Illuminate workshop and received team pitch recognition.',
    problemStatement: 'Campus placement cells struggle with fragmented communications, manual eligibility verification, and unstandardized resume tracking, while recruiting companies face difficulty filtering candidate cohorts based on verified skill competencies.',
    proposedSolution: 'A role-based web platform that manages verified student profiles, institutional verification workflows, job listing publishing, and algorithmic candidate filtering matching specific technical job requisitions.',
    technicalArchitecture: {
      overview: 'Multi-tenant relational backend with role-based access control (Student, College Admin, Company Recruiter) and automated eligibility evaluation.',
      diagramType: 'client-api-db',
      steps: [
        {
          title: 'Role-Based Authentication & Guardrails',
          description: 'Separates privileges across Students, College Placement Officers, and Corporate Recruiters.',
          technology: 'Spring Boot Security / JWT Authentication'
        },
        {
          title: 'Profile & Credential Management',
          description: 'Maintains verified student academic records, technical skill portfolios, and project links.',
          technology: 'Spring Data JPA Entities'
        },
        {
          title: 'Job Posting & Eligibility Evaluator',
          description: 'Automated verification engine matches candidate qualifications against job criteria criteria.',
          technology: 'Java Specification & QueryDSL Filtering'
        },
        {
          title: 'Recruitment Workflow Pipeline',
          description: 'Tracks application phases from shortlisting to interview scheduling and final offer confirmation.',
          technology: 'MySQL Relational Store / Transactional Services'
        }
      ]
    },
    technologies: [
      { category: 'Backend Engine', items: ['Java 17', 'Spring Boot 3.2.3', 'Spring MVC', 'RESTful Services'] },
      { category: 'Data & Containers', items: ['PostgreSQL 16', 'Hibernate / JPA', 'Docker'] },
      { category: 'Security & Auth', items: ['Spring Security', 'JWT Tokenization', 'BCrypt Password Hashing'] },
      { category: 'Frontend & AI Tools', items: ['React', 'Vite', 'Tailwind CSS', 'Gemini ATS matching'] }
    ],
    myContributions: [
      'Engineered the core Spring Boot backend architecture and database schema in MySQL/PostgreSQL.',
      'Designed and documented REST APIs for student registration, job postings, and application state transitions.',
      'Built algorithmic candidate eligibility filtering matching minimum criteria, skill tags, and department streams.',
      'Implemented secure data validation preventing unauthorized profile modifications across different roles.'
    ],
    completedFeatures: [
      'Role-based data models (Student, Institutional Admin, Recruiter)',
      'Job requisition posting system with custom eligibility criteria parameters',
      'Dynamic candidate shortlisting based on verified criteria and skill sets',
      'Application status tracking lifecycle (Applied, Shortlisted, Interviewed, Selected)',
      'Relational database schema with foreign-key constraints and indexes'
    ],
    plannedFeatures: [
      'Automated email notification dispatcher for interview rounds and application updates',
      'Machine learning resume scoring against job description embeddings',
      'Placement analytics dashboard for college administrative reporting'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Ensuring strict data isolation between multiple colleges and competing corporate recruiter accounts.',
        solutionLearned: 'Implemented robust tenant-aware filtering and role validation at the service layer to prevent cross-account data leakage.'
      },
      {
        challenge: 'Managing concurrent student applications during high-volume campus hiring drives.',
        solutionLearned: 'Applied pessimistic/optimistic locking strategies and clean transactional boundaries in Spring to preserve state integrity under concurrent application submissions.'
      }
    ],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    demoStatus: 'prototype',
    statusBadge: 'Award-Recognized Project',
    accentTag: 'Enterprise Architecture'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-ecell-illuminate',
    title: 'Team Lead & Pitch Presenter (Odyssey)',
    role: 'Lead Project Presenter',
    organization: 'E-Cell IIT Bombay Illuminate Workshop',
    period: 'Collegiate Workshop & Competition',
    type: 'Hackathon',
    description: 'Participated in the intensive entrepreneurship, product design, and technical idea-pitch workshop conducted by E-Cell IIT Bombay. Led the student team that conceptualized and architected Odyssey.',
    keyContributions: [
      'Led the technical architecture pitch, explaining role-based authentication, student verification workflows, and skill-based matching.',
      'Represented the team during the competitive pitch presentation before evaluation mentors.',
      'Structured the core product concept bridging academic placement cells, candidates, and hiring companies.'
    ],
    technologies: ['Java', 'Spring Boot', 'System Architecture', 'Pitch Strategy']
  },
  {
    id: 'exp-tedx-lead',
    title: 'Creative & Design Lead',
    role: 'Creative Lead',
    organization: 'TEDx Sinhgad COE',
    period: 'Collegiate Event Organization',
    type: 'Leadership',
    description: 'Served as Creative and Design Lead for TEDx Sinhgad COE, overseeing visual branding consistency and stage presentation aesthetics.',
    keyContributions: [
      'Led the creative team in establishing coherent typographic guidelines and color standards aligned with TEDx branding rules.',
      'Designed presentation collateral, speaker promotional material, and stage visual assets.',
      'Collaborated closely with stage logistics, media teams, and faculty coordinators to ensure smooth event execution.'
    ],
    technologies: ['Visual Branding', 'Design Systems', 'Team Leadership']
  },
  {
    id: 'exp-aicte-ide',
    title: 'Student Participant & Technical Contributor',
    role: 'Innovation Contributor',
    organization: 'AICTE Innovation, Design and Entrepreneurship (IDE) Bootcamp',
    period: 'National Innovation Initiative',
    type: 'College Activity',
    description: 'Selected to participate in the AICTE IDE Bootcamp, focusing on design thinking, problem discovery, rapid software prototyping, and user-centric solution engineering.',
    keyContributions: [
      'Engaged in collaborative problem-solving sprints tackling real-world operational challenges.',
      'Applied design thinking frameworks to decompose user friction points into actionable technical specifications.',
      'Collaborated in multi-disciplinary teams across structured design reviews.'
    ],
    technologies: ['Design Thinking', 'Rapid Prototyping', 'Product Engineering']
  },
  {
    id: 'exp-technical-dev',
    title: 'Java Backend & Research Software Developer',
    role: 'Student Developer',
    organization: 'Department of Computer Science & Engineering',
    period: '2022 - Present',
    type: 'Development',
    description: 'Hands-on technical engineering focused on modern Java architectures, Spring Boot services, relational database persistence, and medical/scientific analytics prototypes.',
    keyContributions: [
      'Architected REST API backends and normalized PostgreSQL/MySQL schemas for GreenSynth and Odyssey.',
      'Engineered medical image slice preprocessing and volumetric segmentation routines in Python for NeuroScope 3D.',
      'Maintained consistent version control, clean commit histories, and modular repository structures on GitHub.'
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'Git']
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-ecell-illuminate',
    title: 'Team Pitch Recognition — Odyssey Platform',
    category: 'Hackathon',
    issuer: 'E-Cell IIT Bombay Illuminate Workshop',
    dateOrPeriod: '2023 - 2024',
    description: 'Earned team pitch recognition during the competitive idea presentation round for Odyssey, presenting a structured skill-based campus talent platform to workshop evaluators.',
    isEditablePlaceholder: false
  },
  {
    id: 'ach-tedx-lead',
    title: 'Creative & Design Lead Appointment',
    category: 'Leadership',
    issuer: 'TEDx Sinhgad COE',
    dateOrPeriod: '2023 - 2024',
    description: 'Appointed to lead the design and visual branding team for TEDx Sinhgad COE, successfully managing end-to-end design deliverables and visual identity standards.',
    isEditablePlaceholder: false
  },
  {
    id: 'ach-aicte-ide',
    title: 'AICTE IDE Bootcamp Selection & Participation',
    category: 'Technical Competition',
    issuer: 'Ministry of Education & AICTE',
    dateOrPeriod: '2023 - 2024',
    description: 'Selected to represent the college at the national Innovation, Design and Entrepreneurship (IDE) Bootcamp, completing structured workshops in product validation and rapid prototyping.',
    isEditablePlaceholder: false
  },
  {
    id: 'ach-cert-java',
    title: 'Java Backend & Spring Framework Foundations',
    category: 'Certification',
    issuer: 'Academic Curriculum & Independent Technical Labs',
    dateOrPeriod: '2022 - Present',
    description: 'Completed comprehensive academic coursework and practical laboratory projects in Object-Oriented Programming, Data Structures, Relational Database Management Systems, and Spring Boot REST API engineering.',
    isEditablePlaceholder: false
  }
];

export const educationData: EducationInfo = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  institution: 'N. B. Navale Sinhgad College of Engineering',
  location: 'Solapur, Maharashtra, India',
  currentYear: 'Third Year (Undergraduate)',
  courseworkHighlights: [
    'Object-Oriented Programming with Java',
    'Data Structures and Algorithms',
    'Database Management Systems & Relational Theory',
    'Operating Systems & System Architecture',
    'Computer Networks and Web Protocols',
    'Software Engineering Methodologies',
    'Machine Learning Fundamentals & Data Science'
  ],
  institutionalFocus: 'Engineering rigorous analytical foundations, system design, and software problem-solving.'
};

export const contactData: ContactInfo = {
  email: 'atharva.vaddepalli.dev@gmail.com',
  githubUrl: 'https://github.com/AtharvaVaddepalli',
  linkedinUrl: 'https://linkedin.com/in/atharva-vaddepalli',
  location: 'Solapur, Maharashtra, India',
  formIntegrationNotice: 'Note: This contact form runs on the frontend client. To transmit live emails directly into an inbox, a backend email gateway (such as Spring Boot Mail service, Formspree, or EmailJS) is required upon deployment. For direct outreach, please use the verified email or LinkedIn links below.'
};
