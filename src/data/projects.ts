export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  officialTitle?: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: {
    category: string;
    items: string[];
  }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  demoStatus: 'live' | 'prototype' | 'research_phase' | 'repository_only';
  statusBadge: string;
  featured: boolean;
  priorityOrder: number;
  highlightNotice?: string;
  completedFeatures: string[];
  plannedFeatures: string[];
  engineeringLearnings: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 'greensynth',
    slug: 'greensynth',
    title: 'GreenSynth',
    officialTitle: 'GREENSYNTH: A DATA-DRIVEN RESEARCH AND ANALYTICS PLATFORM FOR GREEN SYNTHESIS OF SEMICONDUCTOR MATERIALS',
    subtitle: 'Data-driven research and characterization analytics for sustainable nanomaterials',
    shortDescription:
      'A research-oriented software platform designed to organize experimental data, analyze semiconductor material characterization results and support objective-based experimental comparison and optimization.',
    fullDescription:
      'GreenSynth combines laboratory research in the green synthesis of semiconductor materials (synthesized using plant-based botanical extracts) with structured software analytics. The platform centralizes experimental trial logs, standardizes physical characterization results (spectroscopy and microscopy), and provides systematic data tools to compare synthesis batches without claiming automated discovery.',
    category: 'Research Software / Data Analytics / Material Science',
    technologies: [
      { category: 'Backend Architecture', items: ['Java 17', 'Spring Boot 3.x', 'REST APIs', 'Spring Data JPA'] },
      { category: 'Data & Persistence', items: ['PostgreSQL', 'Relational Schemas', 'Normalized Tables'] },
      { category: 'Analytics & Processing', items: ['Python', 'Pandas', 'NumPy', 'Data Cleaning'] },
      { category: 'Tooling', items: ['Maven', 'Git', 'IntelliJ IDEA'] },
    ],
    githubUrl: 'https://github.com/V-atharvan/GreenSynth',
    liveDemoUrl: undefined,
    demoStatus: 'prototype',
    statusBadge: 'Active Research Project',
    featured: true,
    priorityOrder: 1,
    highlightNotice: 'Scientific note: Distinguishes raw measured characterization data from calculated statistical trends without asserting automated synthesis discovery.',
    completedFeatures: [
      'Structured experimental project and trial tracking',
      'Botanical precursor ratio and temperature parameter logging',
      'Raw characterization data ingestion (JSON/CSV datasets)',
      'Normalized relational storage with strict referential integrity',
      'RESTful endpoints for experimental parameter query and filtering',
    ],
    plannedFeatures: [
      'Automated spectral peak recognition pipelines for UV-Vis and XRD files',
      'Algorithmic multi-objective trade-off scoring across synthesis trials',
      'Structured laboratory audit logs and exportable research reports',
    ],
    engineeringLearnings: [
      'Designed relational models that isolate high-level trial metadata from variable-resolution spectral data arrays.',
      'Enforced rigorous DTO-level input validation to prevent anomalous or corrupted laboratory observations.',
    ],
  },
  {
    id: 'neuroscope-3d',
    slug: 'neuroscope-3d',
    title: 'NeuroScope 3D',
    subtitle: '3D brain tumor visualization and MRI data exploration research prototype',
    shortDescription:
      'A medical imaging research prototype focused on 3D brain tumor visualization using MRI data, image processing and machine learning.',
    fullDescription:
      'NeuroScope 3D explores medical image preprocessing, volumetric slice reconstruction, and exploratory machine learning segmentation. Built as a research and educational prototype rather than a clinical diagnostic instrument, it assists researchers in visualizing spatial tumor contours and volume metrics extracted from multi-modal MRI scans.',
    category: 'Medical Imaging / 3D Visualization / Machine Learning',
    technologies: [
      { category: 'Backend & Services', items: ['Python', 'FastAPI', 'REST APIs', 'Asynchronous Handlers'] },
      { category: 'Imaging & Scientific Computing', items: ['NumPy', 'Medical Image Filters', 'Volumetric Preprocessing'] },
      { category: 'Machine Learning', items: ['Scikit-learn', 'Segmentation Workflows', 'Tissue Clustering'] },
      { category: '3D & Deployment', items: ['3D Mesh Exploration', 'Vercel Deployment', 'Git'] },
    ],
    githubUrl: 'https://github.com/V-atharvan/NeuroScope-3D',
    liveDemoUrl: 'https://neuro-scope-3-d.vercel.app',
    demoStatus: 'live',
    statusBadge: 'Live Research Prototype',
    featured: true,
    priorityOrder: 2,
    highlightNotice: 'Educational research prototype: Intended for visualization and algorithmic study, not for clinical medical diagnosis.',
    completedFeatures: [
      'Multi-slice MRI voxel data parsing and coordinate normalizations',
      'Automated intensity normalization and spatial contrast filtering',
      'Volumetric region-of-interest thresholding and contour extraction',
      'FastAPI service endpoints serving volumetric slice arrays and metadata',
      'Live deployed interactive prototype on Vercel',
    ],
    plannedFeatures: [
      'Semantic multi-class tissue segmentation benchmarks using BraTS datasets',
      'Direct browser-based WebGL/Three.js interactive isosurface rendering',
      'Automated DICOM header inspection and orientation verification',
    ],
    engineeringLearnings: [
      'Implemented vectorized NumPy array slicing to handle large 3D voxel matrices efficiently within constrained server memory.',
      'Applied robust z-score intensity normalization to standardize variations across different scan sequences.',
    ],
  },
  {
    id: 'buildwise-ai',
    slug: 'buildwise-ai',
    title: 'BuildWise AI',
    subtitle: 'AI-assisted construction estimation and Bill of Quantities platform',
    shortDescription:
      'An AI-assisted construction estimation platform designed to support blueprint analysis, material estimation and bill of quantities generation.',
    fullDescription:
      'BuildWise AI explores how image analysis and algorithmic calculation workflows can streamline construction cost estimation. The system ingests architectural drawing parameters, evaluates structural takeoffs (concrete, masonry, reinforcement steel), and generates transparent Bill of Quantities (BOQ) with auditable unit rates.',
    category: 'AI-Assisted Engineering / Construction Tech',
    technologies: [
      { category: 'Frontend & Mobile', items: ['Next.js', 'Flutter'] },
      { category: 'Backend & API', items: ['FastAPI', 'Python', 'Celery Asynchronous Tasks'] },
      { category: 'Database & ORM', items: ['PostgreSQL', 'SQLAlchemy'] },
      { category: 'Estimation Engine', items: ['Mathematical Takeoff Models', 'NumPy'] },
    ],
    githubUrl: undefined, // Verified: omitted as instructed
    liveDemoUrl: undefined,
    demoStatus: 'prototype',
    statusBadge: 'Software Prototype',
    featured: false,
    priorityOrder: 3,
    highlightNotice: 'Implementation status: Prototype exploring algorithmic quantity takeoffs and structural schedule persistence.',
    completedFeatures: [
      'Dimensional schedule input and structural parameter modeling',
      'Deterministic takeoff formulas for concrete volume, steel ratios, and formwork',
      'Dynamic material rate repository backed by PostgreSQL & SQLAlchemy',
      'Structured Bill of Quantities (BOQ) compilation engine with itemized sub-totals',
    ],
    plannedFeatures: [
      'Computer vision blueprint dimension extraction from CAD and PDF drawings',
      'Historical material price index trend analysis using regression models',
      'Multi-format contractor bid sheet export',
    ],
    engineeringLearnings: [
      'Utilized high-precision decimal arithmetic to avoid floating-point rounding errors in commercial cost calculations.',
      'Structured flexible SQLAlchemy entity schemas supporting varied regional unit-rate conventions.',
    ],
  },
  {
    id: 'odyssey',
    slug: 'odyssey',
    title: 'Odyssey',
    officialTitle: 'Odyssey – College-to-Company Talent Platform',
    subtitle: 'Skill-based matching and campus recruitment platform',
    shortDescription:
      'A talent platform designed to connect students, colleges and companies through skill-based matching and recruitment workflows.',
    fullDescription:
      'Odyssey connects academic institutions, student candidates, and hiring companies on a unified, verified platform. The project was pitched at the E-Cell IIT Bombay Illuminate workshop and received team pitch recognition. It features role-based access control, criteria matching, and candidate evaluation workflows built on a modern Spring Boot backend.',
    category: 'Enterprise Architecture / Talent Platform',
    technologies: [
      { category: 'Backend Framework', items: ['Java 17', 'Spring Boot 3.2.3', 'Spring MVC', 'REST APIs'] },
      { category: 'Security & Auth', items: ['Spring Security', 'JWT Authentication', 'BCrypt Password Hashing'] },
      { category: 'Database & Containers', items: ['PostgreSQL 16', 'Hibernate/JPA', 'Docker'] },
      { category: 'Frontend & AI Tools', items: ['React', 'Vite', 'Tailwind CSS', 'Gemini-assisted ATS analysis'] },
    ],
    githubUrl: undefined, // Verified: omitted as instructed
    liveDemoUrl: undefined,
    demoStatus: 'prototype',
    statusBadge: 'Award-Recognized Project',
    featured: false,
    priorityOrder: 4,
    highlightNotice: 'Recognition: Pitched at E-Cell IIT Bombay Illuminate workshop; awarded team pitch recognition.',
    completedFeatures: [
      'Role-based access control for Students, College Officers, and Corporate Recruiters',
      'Secure stateless authentication utilizing JWT and BCrypt hashing',
      'Job requisition posting system with custom eligibility criteria parameters',
      'Candidate matching algorithms evaluating verified skill sets and academic streams',
      'Containerized environment configuration using Docker',
    ],
    plannedFeatures: [
      'Automated email notification dispatcher for campus interview rounds',
      'Gemini-based resume-to-job matching semantic score benchmarking',
      'Institutional placement analytics dashboards for college administrators',
    ],
    engineeringLearnings: [
      'Implemented robust role-based security filters at the service layer in Spring Boot to enforce multi-tenant isolation.',
      'Designed transactional boundaries in PostgreSQL to ensure atomic state updates across multi-step student application lifecycles.',
    ],
  },
];
