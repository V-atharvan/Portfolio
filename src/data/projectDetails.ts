import type { ProjectCaseStudy } from '../types/portfolio';

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 'greensynth',
    slug: 'greensynth',
    title: 'GreenSynth',
    officialTitle: 'GREENSYNTH: A DATA-DRIVEN RESEARCH AND ANALYTICS PLATFORM FOR GREEN SYNTHESIS OF SEMICONDUCTOR MATERIALS',
    subtitle: 'Data-driven research and characterization analytics for sustainable nanomaterials',
    shortDescription: 'A research-oriented software platform designed to organize experimental data, analyze semiconductor material characterization results, and support objective-based experimental comparison and optimization.',
    category: 'Research Software / Data Analytics / Material Science',
    accentTag: 'Material Science & Spring Boot',
    statusBadge: 'Active Research Project',
    demoStatus: 'prototype',
    priorityOrder: 1,
    githubUrl: 'https://github.com/V-atharvan/GreenSynth',
    liveDemoUrl: undefined,
    calloutNotice: {
      type: 'info',
      title: 'Scientific Integrity & Methodology Notice',
      content: 'GreenSynth is an experimental data management and characterization analytics platform. It clearly segregates measured empirical characterization values (e.g., UV-Vis absorbance curves, XRD diffractograms, FTIR spectra) from calculated material parameters (e.g., optical band gap computed via Tauc plot formulations, crystallite sizing via Scherrer equation) and statistical predictive models. The platform does not claim automated autonomous synthesis discovery.'
    },
    overview: {
      summary: 'GreenSynth connects laboratory materials research in the green synthesis of semiconductor nanomaterials with structured software analytics. It centralizes trial logs, standardizes physical characterization results, and provides systematic data tools to evaluate synthesis outcomes across botanical precursor variations.',
      background: 'Green nanotechnology replaces hazardous chemical reducing and stabilizing agents with sustainable plant-based botanical extracts (such as mulberry leaf or citrus extracts rich in polyphenols and flavonoids) to synthesize semiconductor nanostructures and metal oxides (e.g., Zinc Oxide / ZnO) via spray pyrolysis and chemical precipitation.',
      motivation: 'Laboratory researchers frequently face scattered data across paper lab logs, disconnected spreadsheets, and varied instrument exports (spectrometer ASCII, diffractometer tables). Atharva developed GreenSynth to provide a rigorous, centralized software architecture where synthesis parameters, characterization files, and calculated physical metrics are permanently linked, traceable, and comparable.'
    },
    problemStatement: {
      coreIssue: 'Experimental data fragmentation, lack of standardized parameter tracking, and labor-intensive manual characterization analysis in sustainable nanomaterial research.',
      conventionalLimitations: [
        'Disparate spreadsheets and physical lab notebooks cause data loss, transcription errors, and missing synthesis metadata (e.g., exact precursor ratios, spray pyrolysis nozzle temperatures, flow rates).',
        'Instrument-specific output formats (UV-Vis spectrometer ASCII files, XRD 2-theta tables, FTIR transmittance traces) lack standardized schemas, making cross-batch comparisons tedious.',
        'Manual graphical estimation of secondary parameters—such as drawing tangent lines on Tauc plots for optical band gap or calculating crystallite sizes via Scherrer formula—leads to human calculation inconsistencies across batches.'
      ],
      impact: 'Severely hinders experimental reproducibility, complicates comparative reporting across research cohorts, and slows down systematic optimization of green semiconductor materials.'
    },
    proposedSolution: {
      summary: 'A centralized data-driven web platform combining a structured Spring Boot REST backend, a normalized PostgreSQL relational store, and data normalization pipelines to catalog trials, automate standard mathematical characterizations, and power parametric query comparisons.',
      systemWorkflow: [
        'Experimental Parameter Registration: Researchers log botanical precursor ratios, metal salt concentrations, solvent pH, and thermal deposition conditions.',
        'Characterization Data Ingestion: Ingests raw spectroscopic and diffractometric data (JSON/CSV datasets) from UV-Vis, XRD, and FTIR instruments.',
        'Validation & Normalization: Validates physical observation limits, normalizes spectral scales, and removes baseline instrument noise.',
        'Mathematical Analysis: Deterministically computes optical band gaps using Tauc plot formulations ((αhν)^(1/n) vs hν) and crystallite sizes using the Scherrer formula.',
        'Relational Persistence & Comparative Queries: Persists structured records in PostgreSQL, allowing researchers to filter, rank, and correlate synthesis parameters against observed material characteristics.'
      ],
      boundariesAndScope: 'Designed for university materials science laboratories, postgraduate scholars, and nanotechnology research groups. Focuses on experimental data governance, standardized calculation, and comparative analysis without asserting autonomous recipe discovery.'
    },
    keyFeatures: [
      {
        title: 'Structured Experimental Trial Tracking',
        description: 'Comprehensive logging of synthesis parameters including botanical precursor extract volume percentage, metal salt molarities, solution pH, spray pyrolysis substrate temperature, and carrier gas flow rates.',
        tag: 'Core Data Modeling',
        isVerified: true
      },
      {
        title: 'Multi-Instrument Spectral Ingestion',
        description: 'Structured ingestion modules for UV-Vis optical absorption spectra, XRD 2-theta diffraction intensity scans, and FTIR functional group transmittance data.',
        tag: 'Data Ingestion',
        isVerified: true
      },
      {
        title: 'Automated Tauc Plot Optical Band Gap Calculation',
        description: 'Computes photon energy (hν) and absorption coefficient (α), executing linear regression on the linear region of (αhν)^2 vs hν to determine direct optical band gap (Eg in eV).',
        tag: 'Analytical Computing',
        isVerified: true
      },
      {
        title: 'Scherrer Formula Crystallite Size Estimation',
        description: 'Calculates mean crystalline domain size (D) from XRD peak full-width at half-maximum (FWHM, β) and Bragg diffraction angle (θ) using the Scherrer relation (D = Kλ / β cos θ).',
        tag: 'Analytical Computing',
        isVerified: true
      },
      {
        title: 'Normalized PostgreSQL Storage Architecture',
        description: 'Normalized database schema enforcing strict referential integrity between synthesis trial parents, environmental parameters, and high-density characterization observation arrays.',
        tag: 'Relational Persistence',
        isVerified: true
      },
      {
        title: 'Parametric Batch Comparison Engine',
        description: 'RESTful query endpoints allowing researchers to filter and compare synthesis runs across precursor concentrations, annealing temperatures, and resulting optical band gaps.',
        tag: 'REST API & Querying',
        isVerified: true
      }
    ],
    technologies: [
      {
        category: 'Backend Architecture',
        description: 'Server-side application framework and API design',
        items: ['Java 17', 'Spring Boot 3.x', 'Spring MVC', 'REST APIs', 'Spring Data JPA'],
        detailedItems: [
          { name: 'Java 17', purpose: 'Type-safe object modeling and deterministic backend business logic' },
          { name: 'Spring Boot 3.x', purpose: 'Application scaffolding, dependency injection, and RESTful service configuration' },
          { name: 'Spring Data JPA', purpose: 'Repository abstraction and object-relational mapping to PostgreSQL' },
          { name: 'Bean Validation (Jakarta)', purpose: 'Enforcing physical boundary validation on laboratory data inputs' }
        ]
      },
      {
        category: 'Data & Persistence',
        description: 'Relational database schema and transaction management',
        items: ['PostgreSQL', 'Relational Schemas', 'Normalized Tables', 'Composite Indexes'],
        detailedItems: [
          { name: 'PostgreSQL', purpose: 'Primary relational datastore with strict constraints and JSONB observation arrays' },
          { name: 'Composite Indexes', purpose: 'Accelerating parametric query lookups across temperature and precursor ratios' }
        ]
      },
      {
        category: 'Analytics & Processing',
        description: 'Scientific computation and data normalization routines',
        items: ['Python', 'Pandas', 'NumPy', 'Data Cleaning'],
        detailedItems: [
          { name: 'Python', purpose: 'Analytical processing scripts for complex spectral array parsing' },
          { name: 'NumPy & Pandas', purpose: 'Vectorized mathematical operations for Tauc plot tangents and baseline subtractions' }
        ]
      },
      {
        category: 'Development & Build Tools',
        description: 'Version control and build automation',
        items: ['Maven', 'Git', 'GitHub', 'IntelliJ IDEA'],
        detailedItems: [
          { name: 'Maven', purpose: 'Dependency management and reproducible lifecycle compilation' },
          { name: 'Git & GitHub', purpose: 'Source code versioning, commit hygiene, and branch isolation' }
        ]
      }
    ],
    technicalArchitecture: {
      overview: 'Modular client-server pipeline executing structured trial ingestion, DTO validation, mathematical characterization calculation, and relational persistence for reproducible research records.',
      diagramType: 'data-pipeline',
      keyPatterns: ['Data Transfer Object (DTO) Pattern', 'Repository Pattern', 'Service-Layer Separation of Concerns', 'Deterministic Calculation Service'],
      steps: [
        {
          stepNumber: '01',
          title: 'Trial Ingestion & DTO Validation',
          component: 'Spring Boot REST Controller Tier',
          description: 'Receives multipart laboratory trial metadata (botanical precursor type, metal salt ratio, bath temperature) and spectral observation files. Validates physical value ranges using Jakarta Bean Validation annotations.',
          technology: 'Spring Boot REST / JSON DTOs',
          input: 'Raw JSON trial payload + CSV/ASCII spectral data',
          output: 'Validated IngestionDTO'
        },
        {
          stepNumber: '02',
          title: 'Spectral Normalization & Filtering',
          component: 'Data Cleaning & Preprocessing Service',
          description: 'Parses wavelength and intensity arrays. Normalizes baseline instrument drift, checks wavelength bounds (200nm - 900nm for UV-Vis), and standardizes interval steps.',
          technology: 'Java Data Pipelines & Python Helpers',
          input: 'Validated IngestionDTO',
          output: 'Normalized Spectral Array Data'
        },
        {
          stepNumber: '03',
          title: 'Deterministic Characterization Analysis',
          component: 'Analytical Mathematical Engine',
          description: 'Computes physical characterization metrics: executes Tauc transformation ((αhν)^2 vs hν) for optical band gap Eg and computes Scherrer crystallite diameter D from XRD peak properties.',
          technology: 'Core Mathematical Service Layer',
          input: 'Normalized Spectral Array Data',
          output: 'Calculated Eg (eV) & Crystallite Size (nm)'
        },
        {
          stepNumber: '04',
          title: 'Relational Persistence',
          component: 'PostgreSQL Relational Layer via JPA',
          description: 'Stores trial parent entities and associated characterization records in third-normal-form relational tables with composite keys and foreign-key constraints.',
          technology: 'PostgreSQL / Spring Data JPA',
          input: 'Entity Domain Objects',
          output: 'Persisted & Versioned Database Records'
        },
        {
          stepNumber: '05',
          title: 'Comparative Parametric API',
          component: 'Query & Aggregation Service',
          description: 'Serves multi-parameter comparison endpoints, enabling researchers to filter batches by annealing temperature, botanical volume ratio, and resulting band gap properties.',
          technology: 'RESTful Service Endpoints',
          input: 'Query Filter Parameters (temp, ratio, precursor)',
          output: 'Comparative Batch Summaries & Analytics'
        }
      ]
    },
    developmentProcess: [
      {
        phase: 'Phase 1: Domain Analysis & Scientific Literature Review',
        title: 'Understanding Green Synthesis Protocols',
        summary: 'Studied green nanotechnology methodologies, phytochemical reduction mechanisms (polyphenols, flavonoids), and standard semiconductor characterization workflows (UV-Vis, XRD, FTIR).',
        activities: [
          'Reviewed experimental literature on green synthesis of ZnO nanoparticles using plant extracts.',
          'Identified core parametric variables: precursor salt molarity, plant extract ratio, pyrolysis temperature, pH, and flow rate.',
          'Cataloged standard characterization metrics: optical absorbance, 2-theta diffractograms, and FTIR transmission bands.'
        ]
      },
      {
        phase: 'Phase 2: Relational Schema Design & Boundary Constraints',
        title: 'Architecting Normalized PostgreSQL Entities',
        summary: 'Designed relational schemas enforcing strict third normal form to decouple lightweight trial metadata from high-density spectral observation data.',
        activities: [
          'Modeled entities for SynthesisTrial, PrecursorComponent, CharacterizationRun, and SpectralDataPoint.',
          'Established composite primary keys and foreign-key referential integrity rules.',
          'Formulated physical boundary validation constraints (e.g., pH between 0 and 14, non-negative temperatures, positive wavelengths).'
        ]
      },
      {
        phase: 'Phase 3: Spring Boot REST API & Service Layer',
        title: 'Building Type-Safe Backend Services',
        summary: 'Constructed Spring Boot application architecture featuring dedicated controllers, service layers, DTO mappings, and custom exception handlers.',
        activities: [
          'Implemented REST endpoints for experimental batch registration, trial updates, and query filters.',
          'Integrated Jakarta Bean Validation to catch anomalous or corrupted laboratory observations at the controller boundary.',
          'Constructed Spring Data JPA repositories with custom JPQL queries for multi-parameter filtering.'
        ]
      },
      {
        phase: 'Phase 4: Mathematical Calculation Engine Integration',
        title: 'Standardizing Analytical Characterization Formulations',
        summary: 'Coded deterministic mathematical routines for optical band gap and crystallite sizing calculations.',
        activities: [
          'Implemented Tauc equation calculations ((αhν)^2 vs hν) for direct semiconductor transitions.',
          'Implemented the Scherrer crystallite sizing formula (D = Kλ / β cos θ).',
          'Segregated raw experimental observations from derived calculated values to maintain absolute data provenance.'
        ]
      },
      {
        phase: 'Phase 5: Verification & Consistency Testing',
        title: 'Validating System Consistency on Real Batch Records',
        summary: 'Tested ingestion and calculation pipelines using synthetic and authentic green synthesis batch observations.',
        activities: [
          'Validated calculation accuracy against known benchmark material reference values.',
          'Executed stress tests with irregular and noisy spectral datasets to ensure graceful error handling.',
          'Verified API response performance under multi-parameter batch comparison queries.'
        ]
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Ingestion of variable-resolution spectroscopy arrays without bloating the relational database.',
        whyDifficult: 'Laboratory instruments output spectra with varying point densities (e.g., 500 to 2,500 data points per scan). Storing every single coordinate point as a separate row in a standard table created high disk overhead and degraded query performance.',
        engineeringApproach: 'Designed a hybrid persistence strategy in PostgreSQL: lightweight trial metadata (precursor types, ratios, temperatures, timestamps) is stored in strictly normalized relational tables, while high-density spectral coordinate pairs are stored in structured normalized child records or optimized JSONB arrays with GIN indexing.',
        outcomeAndLearning: 'Maintained sub-50ms query response times for trial comparisons while preserving complete high-resolution spectral curve data for detailed inspection.'
      },
      {
        challenge: 'Scientific data integrity—preventing corrupt or physically impossible measurements from polluting the research store.',
        whyDifficult: 'Manual data entry in laboratory settings frequently leads to typographical errors (e.g., negative Kelvin temperatures, impossible pH values, inverted wavelength ranges) that distort statistical comparisons.',
        engineeringApproach: 'Implemented comprehensive Jakarta Bean Validation and custom Spring validator annotations that verify physical boundaries before records reach the persistence tier. Added clear, descriptive validation error responses for researcher feedback.',
        outcomeAndLearning: 'Guaranteed 100% data integrity in stored experimental trials and provided immediate, actionable feedback to researchers submitting observations.'
      },
      {
        challenge: 'Maintaining clear scientific provenance: distinguishing raw measured values from derived calculations.',
        whyDifficult: 'In materials science, treating a calculated band gap or crystallite size as a directly measured raw fact violates scientific auditability. Subsequent changes in calculation methodologies or baseline subtractions must be traceable.',
        engineeringApproach: 'Architected separate domain entities for raw instrument measurements versus derived analytical metrics. Each derived metric stores the exact calculation formula version, baseline parameters, and computation timestamp.',
        outcomeAndLearning: 'Established complete scientific traceability and auditability, ensuring researchers can recalculate or verify physical parameters at any time.'
      }
    ],
    myContributions: [
      {
        area: 'Relational Database Architecture',
        ownership: 'Direct Engineering Ownership',
        description: 'Architected the complete normalized PostgreSQL relational database schema for synthesis trials and characterization records.',
        deliverables: [
          'Designed third-normal-form schema tables: trials, precursors, characterization_runs, and spectra_data.',
          'Implemented foreign-key constraints, unique indexes, and audit timestamp tracking.',
          'Optimized database queries for multi-parameter trial comparisons.'
        ]
      },
      {
        area: 'Spring Boot REST Backend & Validation',
        ownership: 'Direct Engineering Ownership',
        description: 'Engineered the Spring Boot service layer, RESTful controllers, and input validation pipelines.',
        deliverables: [
          'Built REST controllers handling multipart trial metadata and characterization file submissions.',
          'Implemented Jakarta Bean Validation rules enforcing physical boundary constraints on scientific variables.',
          'Configured Spring Data JPA repositories with custom filtering criteria for research querying.'
        ]
      },
      {
        area: 'Characterization Calculation Pipelines',
        ownership: 'Direct Engineering Ownership',
        description: 'Coded deterministic analytical calculation logic for standard nanomaterial characterization formulations.',
        deliverables: [
          'Implemented Tauc plot optical band gap calculation routines.',
          'Implemented Scherrer equation crystallite size estimation models.',
          'Separated raw measurement storage from derived parameter calculations for scientific auditability.'
        ]
      }
    ],
    visualSchematic: {
      title: 'GreenSynth Scientific Data & Analytics Architecture',
      caption: 'End-to-end data pipeline from physical laboratory synthesis parameters to comparative research analytics.',
      diagramLabel: 'Data Pipeline Trace',
      stages: [
        {
          stepNumber: '01',
          name: 'Laboratory Trial Input',
          description: 'Botanical extract ratio (vol %), metal salt molarity, pyrolysis temperature, solvent pH, and carrier gas rate.',
          badge: 'Input Metadata',
          subItems: ['Precursor ratios', 'Thermal profile', 'Flow parameters']
        },
        {
          stepNumber: '02',
          name: 'Spectroscopy File Ingestion',
          description: 'CSV/ASCII file uploads for UV-Vis optical absorption, XRD 2-theta diffractograms, and FTIR spectra.',
          badge: 'Raw Observations',
          subItems: ['UV-Vis spectra', 'XRD intensity', 'FTIR transmittance']
        },
        {
          stepNumber: '03',
          name: 'Validation & Normalization',
          description: 'Bean Validation checks physical limits; normalization routines adjust baseline drift and step intervals.',
          badge: 'Integrity Engine',
          subItems: ['Physical bounds', 'Baseline adjustment', 'Noise filtering']
        },
        {
          stepNumber: '04',
          name: 'Mathematical Analytics',
          description: 'Deterministic computation of optical band gap (Eg via Tauc) and crystallite size (D via Scherrer).',
          badge: 'Analytical Core',
          subItems: ['Tauc plot Eg', 'Scherrer crystallite D', 'Provenance tags']
        },
        {
          stepNumber: '05',
          name: 'Comparative Research Store',
          description: 'Normalized PostgreSQL persistence enabling multi-parameter querying across synthesis batches.',
          badge: 'Relational Store',
          subItems: ['PostgreSQL 3NF', 'Composite indexes', 'REST query API']
        }
      ]
    },
    roadmap: {
      completedFeatures: [
        {
          name: 'Experimental Trial Metadata Tracking',
          description: 'Full relational tracking of botanical precursor ratios, temperatures, pH, and synthesis conditions.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Spectroscopic & Diffractometric Data Ingestion',
          description: 'Ingestion pipelines for UV-Vis absorbance, XRD diffractograms, and FTIR transmittance files.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Automated Tauc Plot Optical Band Gap Calculation',
          description: 'Deterministic computation of photon energy and direct optical band gap (Eg) from UV-Vis datasets.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Scherrer Equation Crystallite Sizing',
          description: 'Calculates mean crystalline domain size from XRD peak FWHM and Bragg angles.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Parametric Comparison Query Endpoints',
          description: 'REST API endpoints to filter, sort, and compare synthesis runs across precursor variables.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        }
      ],
      plannedFeatures: [
        {
          name: 'Automated Multi-Peak Deconvolution Algorithm',
          description: 'Gaussian/Lorentzian curve fitting for overlapping XRD diffraction peaks to enhance crystallite phase separation.',
          status: 'Planned Milestone',
          badge: 'Next Milestone'
        },
        {
          name: 'Algorithmic Multi-Objective Trade-Off Scoring',
          description: 'Pareto-frontier analysis across synthesis trials balancing optical band gap targets against temperature costs.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        },
        {
          name: 'Exportable Laboratory Audit Dossiers',
          description: 'Generation of structured, tamper-evident PDF research reports summarizing trial parameters and characterization curves.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        }
      ]
    }
  },
  {
    id: 'neuroscope-3d',
    slug: 'neuroscope-3d',
    title: 'NeuroScope 3D',
    subtitle: '3D brain tumor visualization and MRI data exploration research prototype',
    shortDescription: 'A medical imaging research prototype focused on 3D brain tumor visualization using MRI data, image processing and machine learning.',
    category: 'Medical Imaging / 3D Visualization / Machine Learning',
    accentTag: 'Medical Imaging & FastAPI',
    statusBadge: 'Live Research Prototype',
    demoStatus: 'live',
    priorityOrder: 2,
    githubUrl: 'https://github.com/V-atharvan/NeuroScope-3D',
    liveDemoUrl: 'https://neuro-scope-3-d.vercel.app',
    calloutNotice: {
      type: 'warning',
      title: 'Research & Educational Prototype Disclaimer',
      content: 'NeuroScope 3D is strictly an academic research and educational visualization prototype developed for computational exploration and algorithmic study of medical imaging pipelines. It is NOT a clinical medical device, has NOT undergone clinical validation or regulatory clearance, and must NOT be used for patient diagnosis, surgical guidance, treatment planning, or clinical medical decision-making.'
    },
    overview: {
      summary: 'NeuroScope 3D is a medical imaging research prototype that transforms 2D multi-modal MRI slice sequences into interactive 3D spatial reconstructions, assisting researchers and students in exploring volumetric tumor contours, tissue boundaries, and morphological measurements.',
      background: 'Magnetic Resonance Imaging (MRI) produces multi-modal cross-sectional 2D slices (T1, T2, FLAIR, T1-contrast). Comprehending the exact 3D spatial extents and volumetric geometry of intracranial lesions from flat 2D slices requires significant mental reconstruction and manual slicing.',
      motivation: 'Atharva built NeuroScope 3D to explore how computational image processing, voxel normalization, and algorithmic tissue segmentation can reconstruct intuitive 3D volumetric representations and provide quantitative volumetric estimates (axial dimensions, estimated tumor volume in cm³) to aid research exploration.'
    },
    problemStatement: {
      coreIssue: 'Cognitive barriers in spatial pathology assessment and labor-intensive volumetric calculation across sequential 2D medical imaging slices.',
      conventionalLimitations: [
        'Interpreting complex 3D pathology extents from sequential 2D cross-sections requires high cognitive effort and lacks immediate spatial context.',
        'Manual slice-by-slice contouring for tumor volume estimation is labor-intensive, time-consuming, and subject to significant inter-observer variability.',
        'Existing clinical radiology software is proprietary, resource-heavy, and inaccessible for academic exploration and computer science educational research.'
      ],
      impact: 'Slows down research analysis, limits accessible medical imaging pedagogy for computer science students, and creates barriers to prototyping novel segmentation algorithms.'
    },
    proposedSolution: {
      summary: 'An image processing and volumetric reconstruction pipeline powered by Python, NumPy, and FastAPI that ingests MRI voxel arrays, applies spatial normalization, segments regions of interest, and generates 3D spatial coordinates served to an interactive web client.',
      systemWorkflow: [
        'Voxel Data Ingestion: Ingests multi-slice MRI volumetric arrays (e.g., NIfTI / slice formats).',
        'Intensity Preprocessing: Applies Z-score normalization and percentile contrast clipping to standardize signal intensities across varied scanner sequences.',
        'Spatial Filtering & Skull Stripping: Removes extraneous non-brain tissue and applies morphological smoothing filters.',
        'Region-of-Interest Segmentation: Applies thresholding and algorithmic clustering to isolate anomalous tumor tissue voxels.',
        '3D Volumetric Mesh Generation: Constructs spatial vertex coordinates and polygonal surfaces representing tumor morphology.',
        'Quantitative Metric Extraction: Computes estimated tumor volume (cm³), maximum axial spans (x, y, z), and spatial bounding dimensions.',
        'RESTful Service Delivery: FastAPI backend delivers processed slice arrays and 3D coordinate meshes to the live deployed Vercel web client.'
      ],
      boundariesAndScope: 'Designed for academic research, algorithmic benchmarking, and educational visualization. Deliberately positions itself outside clinical diagnostic workflows with non-dismissible disclaimers.'
    },
    keyFeatures: [
      {
        title: 'Multi-Sequence MRI Voxel Ingestion',
        description: 'Parses multi-slice volumetric MRI data arrays, organizing spatial coordinate frames across axial, sagittal, and coronal planes.',
        tag: 'Imaging Data Ingestion',
        isVerified: true
      },
      {
        title: 'Standardized Intensity Normalization',
        description: 'Implements Z-score normalization and 1st-99th percentile clipping to harmonize contrast differences across varying MRI acquisition protocols.',
        tag: 'Image Preprocessing',
        isVerified: true
      },
      {
        title: 'Region-of-Interest (ROI) Segmentation',
        description: 'Isolates abnormal hyperintense tissue voxels using adaptive thresholding and morphological filtering algorithms.',
        tag: 'Computer Vision',
        isVerified: true
      },
      {
        title: '3D Spatial Coordinate Reconstruction',
        description: 'Transforms segmented 2D slice contours into unified 3D spatial vertex coordinates and polygonal surface representations.',
        tag: '3D Visualization',
        isVerified: true
      },
      {
        title: 'Quantitative Volumetric Extraction',
        description: 'Computes estimated tumor volume in cubic centimeters (cm³), maximum axial dimensions (x, y, z extents), and bounding coordinates.',
        tag: 'Morphometric Analysis',
        isVerified: true
      },
      {
        title: 'Live Deployed Web Interface',
        description: 'Interactive web prototype deployed live on Vercel, allowing users to inspect volumetric slices and 3D tumor geometry in the browser.',
        tag: 'Live Cloud Prototype',
        isVerified: true
      }
    ],
    technologies: [
      {
        category: 'Backend & Services',
        description: 'Asynchronous API endpoints and data delivery',
        items: ['Python 3.10+', 'FastAPI', 'Uvicorn', 'RESTful Endpoints'],
        detailedItems: [
          { name: 'Python 3.10+', purpose: 'Scientific scripting and numerical image processing routines' },
          { name: 'FastAPI', purpose: 'High-performance asynchronous API framework serving slice matrices and 3D geometry' },
          { name: 'Uvicorn', purpose: 'Lightning-fast ASGI web server implementation' }
        ]
      },
      {
        category: 'Scientific Computing & Imaging',
        description: 'Array manipulation and spatial image filtering',
        items: ['NumPy', 'SciPy', 'Medical Image Filters', 'Voxel Normalization'],
        detailedItems: [
          { name: 'NumPy', purpose: 'Vectorized multidimensional array slicing and coordinate transformations' },
          { name: 'SciPy', purpose: 'Morphological filters and spatial coordinate interpolation' }
        ]
      },
      {
        category: 'Machine Learning & Clustering',
        description: 'Exploratory tissue classification and segmentation',
        items: ['Scikit-learn', 'Clustering Workflows', 'Tissue Thresholding'],
        detailedItems: [
          { name: 'Scikit-learn', purpose: 'Evaluating k-means clustering and threshold classifiers on voxel intensity distributions' }
        ]
      },
      {
        category: 'Cloud Deployment & Tooling',
        description: 'Hosting, versioning, and environment setup',
        items: ['Vercel', 'Git', 'GitHub', 'Jupyter Lab'],
        detailedItems: [
          { name: 'Vercel', purpose: 'Live production deployment of the frontend client and static assets' },
          { name: 'Git & GitHub', purpose: 'Source code versioning and collaborative tracking' }
        ]
      }
    ],
    technicalArchitecture: {
      overview: 'Multi-stage scientific processing pipeline executing MRI slice ingestion, intensity standardization, ROI segmentation, 3D coordinate mapping, and RESTful delivery to the live web interface.',
      diagramType: 'ml-pipeline',
      keyPatterns: ['Vectorized Array Operations', 'Asynchronous Pipeline Execution', 'Separation of Numerical Preprocessing from Web Delivery'],
      steps: [
        {
          stepNumber: '01',
          title: 'Volumetric MRI Array Ingestion',
          component: 'Ingestion & Slicing Handler',
          description: 'Loads 3D voxel matrices (e.g., 240x240x155 arrays) across axial, sagittal, and coronal planes. Validates dimensional orientations and spacing metadata.',
          technology: 'Python / NumPy Arrays',
          input: 'Raw 3D MRI voxel datasets',
          output: 'Structured 3D numpy.ndarray'
        },
        {
          stepNumber: '02',
          title: 'Intensity Standardization & Filtering',
          component: 'Image Preprocessing Pipeline',
          description: 'Executes Z-score intensity normalization, applies 1st-99th percentile contrast clipping, and filters background sensor noise.',
          technology: 'NumPy Vectorized Math & SciPy',
          input: 'Raw 3D numpy.ndarray',
          output: 'Standardized Voxel Matrix'
        },
        {
          stepNumber: '03',
          title: 'ROI Pathology Segmentation',
          component: 'Segmentation Engine',
          description: 'Identifies pathological tissue regions of interest through adaptive intensity thresholding and morphological opening/closing operations.',
          technology: 'Scikit-learn & Morphological Operators',
          input: 'Standardized Voxel Matrix',
          output: 'Binary Pathology Mask Array'
        },
        {
          stepNumber: '04',
          title: '3D Spatial Surface Extraction',
          component: 'Volumetric Geometry Generator',
          description: 'Extracts 3D coordinate vertices, faces, and normals from segmented pathology masks to construct lightweight renderable 3D meshes.',
          technology: '3D Spatial Geometry Routines',
          input: 'Binary Pathology Mask Array',
          output: '3D Vertex & Face Arrays'
        },
        {
          stepNumber: '05',
          title: 'FastAPI Service & Web Delivery',
          component: 'FastAPI Asynchronous Gateway',
          description: 'Delivers processed slice matrices, estimated volumetric metrics (volume in cm³, dimensions), and 3D spatial coordinates to the deployed web client.',
          technology: 'FastAPI / Vercel Web Deployment',
          input: '3D Geometry & Metrics Data',
          output: 'Interactive Web Visualization'
        }
      ]
    },
    developmentProcess: [
      {
        phase: 'Phase 1: Dataset Investigation & Literature Review',
        title: 'Exploring Medical Imaging Protocols',
        summary: 'Analyzed multi-modal MRI sequences (T1, T2, FLAIR) from academic medical imaging datasets (BraTS), evaluating tissue contrast characteristics and spatial conventions.',
        activities: [
          'Studied volumetric voxel coordinate spaces across axial, sagittal, and coronal orientations.',
          'Identified key contrast signatures of intracranial lesions across T1-contrast and FLAIR sequences.',
          'Formulated algorithmic objectives: noise suppression, intensity standardization, and spatial reconstruction.'
        ]
      },
      {
        phase: 'Phase 2: NumPy Array Preprocessing Pipeline',
        title: 'Building Vectorized Normalization Routines',
        summary: 'Engineered high-performance array manipulation scripts in Python using vectorized NumPy slicing to normalize and filter volumetric scans.',
        activities: [
          'Implemented Z-score normalization: (voxel - mean) / standard_deviation.',
          'Integrated percentile clipping to remove extreme scanner artifact outliers.',
          'Optimized memory usage by avoiding unnecessary array duplication during slicing.'
        ]
      },
      {
        phase: 'Phase 3: Segmentation & Volumetric Metric Logic',
        title: 'Developing ROI Extraction & Morphometry',
        summary: 'Constructed algorithmic segmentation rules and quantitative metric calculation functions to measure tumor characteristics.',
        activities: [
          'Implemented adaptive thresholding and morphological filters to isolate hyperintense regions.',
          'Coded metric routines to calculate total lesion volume in cm³ by multiplying positive voxel counts by voxel spacing.',
          'Extracted maximum bounding box dimensions along the X, Y, and Z axes.'
        ]
      },
      {
        phase: 'Phase 4: FastAPI Service Architecture',
        title: 'Creating Asynchronous REST Endpoints',
        summary: 'Built a lightweight, asynchronous API backend using FastAPI to serve preprocessed slice data and 3D coordinate meshes.',
        activities: [
          'Designed RESTful endpoints for slice querying, volume metrics, and 3D coordinate payloads.',
          'Configured CORS headers and asynchronous request handling for responsive client communication.',
          'Embedded mandatory research disclaimer metadata into all API responses.'
        ]
      },
      {
        phase: 'Phase 5: Cloud Deployment & Validation',
        title: 'Deploying Prototype on Vercel',
        summary: 'Deployed the complete interactive prototype to Vercel, verifying rendering performance across desktop and mobile browsers.',
        activities: [
          'Configured Vercel build pipelines and routing rules.',
          'Verified mobile responsiveness at viewport widths down to 360px.',
          'Tested live URL availability and public accessibility at https://neuro-scope-3-d.vercel.app.'
        ]
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Memory spikes and latency when manipulating high-dimensional 3D medical voxel arrays (240x240x155) in memory-constrained environments.',
        whyDifficult: 'A single 3D floating-point voxel matrix occupies substantial memory. Naive iterative loops across hundreds of thousands of voxels cause excessive execution time and memory overflows.',
        engineeringApproach: 'Replaced element-by-element loops with vectorized NumPy array operations and memory-mapped array slicing. Downsampled high-density volumetric meshes for web preview while retaining full-resolution arrays for analytical volumetric calculations.',
        outcomeAndLearning: 'Reduced memory footprint by over 60% and accelerated slice extraction to under 30 milliseconds, enabling fluid interactive exploration.'
      },
      {
        challenge: 'Inconsistent voxel intensity ranges across different MRI scanner manufacturers and imaging protocols.',
        whyDifficult: 'Raw MRI images lack absolute physical units (unlike CT Hounsfield Units); raw intensity values vary significantly across scanners, causing fixed threshold segmentation to fail completely.',
        engineeringApproach: 'Engineered a two-tier intensity standardization pipeline: first applying robust 1st–99th percentile contrast clipping to eliminate outlier hot-pixels, followed by Z-score standardization across brain tissue voxels.',
        outcomeAndLearning: 'Achieved consistent, reproducible segmentation boundaries across diverse scan inputs without manual threshold recalibration.'
      },
      {
        challenge: 'Ensuring absolute clarity regarding ethical positioning and non-clinical status.',
        whyDifficult: 'Healthcare software carries severe liability if mistaken for an approved clinical diagnostic instrument. A clear boundary between academic research prototyping and certified medical diagnosis had to be permanently visible.',
        engineeringApproach: 'Embedded persistent, non-dismissible research and educational disclaimer banners across the application UI, documentation, and API response metadata, explicitly stating its non-clinical prototype nature.',
        outcomeAndLearning: 'Established transparent, responsible engineering ethics adhering to medical software academic standards.'
      }
    ],
    myContributions: [
      {
        area: 'Medical Image Preprocessing Pipeline',
        ownership: 'Direct Engineering Ownership',
        description: 'Engineered the complete Python preprocessing pipeline for volumetric MRI data standardization.',
        deliverables: [
          'Implemented Z-score normalization and percentile contrast clipping in NumPy.',
          'Built spatial array slicing routines across axial, sagittal, and coronal planes.',
          'Developed spatial noise reduction and morphological contour filtering.'
        ]
      },
      {
        area: 'Volumetric Morphometrics & 3D Reconstruction',
        ownership: 'Direct Engineering Ownership',
        description: 'Developed quantitative geometric calculation models and 3D spatial coordinate extraction routines.',
        deliverables: [
          'Implemented tumor volume calculation algorithm based on voxel count and spacing metadata.',
          'Extracted maximum axial extents (x, y, z dimensions) and bounding coordinates.',
          'Generated 3D spatial coordinate representations of pathological tissue surfaces.'
        ]
      },
      {
        area: 'FastAPI Backend & Cloud Deployment',
        ownership: 'Direct Engineering Ownership',
        description: 'Built the FastAPI REST service and deployed the interactive web prototype.',
        deliverables: [
          'Engineered asynchronous REST endpoints for slice streaming and metrics delivery.',
          'Configured CORS and error handling middleware.',
          'Deployed and maintained the live public prototype on Vercel.'
        ]
      }
    ],
    visualSchematic: {
      title: 'NeuroScope 3D Volumetric Processing Pipeline',
      caption: 'From multi-modal MRI slice arrays to normalized 3D spatial visualization and volumetric metrics.',
      diagramLabel: 'Medical Imaging Pipeline',
      stages: [
        {
          stepNumber: '01',
          name: 'MRI Voxel Ingestion',
          description: 'Ingests multi-modal 3D voxel arrays (axial, sagittal, coronal orientations).',
          badge: 'Input Array',
          subItems: ['Voxel matrices', 'Spatial coordinates', 'Spacing metadata']
        },
        {
          stepNumber: '02',
          name: 'Intensity Standardization',
          description: 'Z-score normalization and 1st-99th percentile contrast clipping standardize intensities.',
          badge: 'Preprocessing',
          subItems: ['Z-score scaling', 'Outlier clipping', 'Noise reduction']
        },
        {
          stepNumber: '03',
          name: 'Pathology Segmentation',
          description: 'Adaptive thresholding and morphological opening/closing isolate abnormal tumor voxels.',
          badge: 'Computer Vision',
          subItems: ['ROI detection', 'Morphological closing', 'Binary mask']
        },
        {
          stepNumber: '04',
          name: '3D Spatial Mapping',
          description: 'Extracts 3D coordinate vertices, faces, and bounding dimensions of the lesion.',
          badge: '3D Surface',
          subItems: ['Mesh vertices', 'Axial spans', 'Spatial coordinates']
        },
        {
          stepNumber: '05',
          name: 'Volumetric Output & Web Preview',
          description: 'Calculates volume in cm³ and delivers interactive visualization via FastAPI to Vercel.',
          badge: 'Live Prototype',
          subItems: ['Volume in cm³', 'FastAPI REST', 'Vercel deployment']
        }
      ]
    },
    roadmap: {
      completedFeatures: [
        {
          name: 'Multi-Slice MRI Voxel Parsing',
          description: 'Parsing and coordinate extraction across axial, sagittal, and coronal MRI planes.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Automated Intensity Normalization',
          description: 'Z-score standardization and percentile contrast clipping for varied scanner outputs.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Volumetric ROI Thresholding',
          description: 'Morphological filtering and threshold segmentation of abnormal tissue regions.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Quantitative Volume & Axis Metrics',
          description: 'Calculation of estimated tumor volume in cm³ and bounding dimensions (x, y, z).',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'FastAPI Backend & Vercel Cloud Deployment',
          description: 'Live deployed web prototype accessible publicly at https://neuro-scope-3-d.vercel.app.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        }
      ],
      plannedFeatures: [
        {
          name: 'Multi-Class Semantic Segmentation (BraTS Benchmark)',
          description: 'Implementing deep learning segmentation benchmarking separating enhancing tumor, peritumoral edema, and necrotic core.',
          status: 'Planned Milestone',
          badge: 'Next Milestone'
        },
        {
          name: 'Interactive WebGL / Three.js Direct Isosurface Renderer',
          description: 'Direct browser-based GPU isosurface rendering allowing smooth real-time 360-degree rotation and lighting controls.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        },
        {
          name: 'Automated DICOM Header Inspection & Integrity Checking',
          description: 'Client-side verification of patient metadata stripping (HIPAA de-identification) and scanner geometry validation.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        }
      ]
    }
  },
  {
    id: 'buildwise-ai',
    slug: 'buildwise-ai',
    title: 'BuildWise AI',
    subtitle: 'AI-assisted construction estimation and Bill of Quantities platform',
    shortDescription: 'An AI-assisted construction estimation platform designed to support blueprint analysis, material estimation and bill of quantities generation.',
    category: 'AI-Assisted Engineering / Construction Tech',
    accentTag: 'FastAPI, Celery & PostgreSQL',
    statusBadge: 'Software Prototype',
    demoStatus: 'prototype',
    priorityOrder: 3,
    githubUrl: undefined,
    liveDemoUrl: undefined,
    calloutNotice: {
      type: 'info',
      title: 'Software Prototype Status',
      content: 'BuildWise AI is an ongoing software engineering prototype exploring deterministic quantity takeoff models and automated Bill of Quantities (BOQ) compilation. Source repository and live staging instances are currently private during active algorithmic development.'
    },
    overview: {
      summary: 'BuildWise AI streamlines the pre-construction estimation workflow by automating the tedious process of extracting structural dimensions, calculating material volumes (concrete, steel, masonry), and preparing structured Bill of Quantities (BOQ) with transparent formula audits.',
      background: 'Construction quantity estimation is the foundational discipline of determining the exact material, labor, and plant requirements from architectural and structural drawings prior to tendering or construction. In commercial contracting, accurate estimation prevents multi-million rupee cost overruns.',
      motivation: 'Manual quantity takeoffs from structural blueprints are notorious for human calculation errors, slow turnaround times, and catastrophic cost overruns when unit prices fluctuate. Atharva developed BuildWise AI to explore how structured mathematical takeoff engines, dynamic rate schedules, and asynchronous task queues can streamline pre-construction cost estimation.'
    },
    problemStatement: {
      coreIssue: 'High error rates, manual spreadsheet reliance, and delayed cost estimation in pre-construction civil engineering workflows.',
      conventionalLimitations: [
        'Manual measurement takeoffs from architectural drawings take days per floor and are highly prone to human arithmetic errors.',
        'Formulas in generic spreadsheets frequently get overwritten, corrupted, or lack standardized version control across contracting teams.',
        'Lack of auditable traceability between structural schedules (columns, beams, slabs, footings) and resulting material procurement orders leads to procurement disputes.'
      ],
      impact: 'Frequent budget overruns, delayed project bidding cycles, material wastage, and commercial disputes between contractors and clients.'
    },
    proposedSolution: {
      summary: 'A structured software system combining deterministic mathematical takeoff engines, customizable unit-rate databases, and asynchronous task queues to generate verifiable, auditable construction cost estimates.',
      systemWorkflow: [
        'Project Specification Input: Ingests structural schedules and dimensional parameters for building elements (footings, columns, beams, slabs).',
        'Mathematical Takeoff Engine: Executes engineering formulas evaluating concrete grades (m³), reinforcement steel tonnage ratios (kg/ton), and formwork contact areas (m²).',
        'Masonry & Plaster Computation: Evaluates brick counts, mortar volumes, and cement-to-sand ratios based on wall dimensions.',
        'Dynamic Unit-Rate Lookup: Connects calculated material quantities with localized unit rates stored in PostgreSQL via SQLAlchemy.',
        'Bill of Quantities (BOQ) Compilation: Compiles itemized cost schedules with itemized labor, material, equipment sub-totals, contractor profit margins, and contingencies.'
      ],
      boundariesAndScope: 'Focuses on structural concrete, steel reinforcement, formwork, and masonry quantity calculations. Implements deterministic mathematical models with auditable calculation steps.'
    },
    keyFeatures: [
      {
        title: 'Structural Element Schedule Modeling',
        description: 'Dimensional parameter inputs for isolated footings, rectangular/circular columns, continuous beams, and two-way reinforced slabs.',
        tag: 'Structural Modeling',
        isVerified: true
      },
      {
        title: 'Deterministic Takeoff Engine',
        description: 'Mathematical calculation routines evaluating concrete volume (m³), formwork surface contact area (m²), and rebar steel tonnage (kg/ton) based on structural density standards.',
        tag: 'Takeoff Engine',
        isVerified: true
      },
      {
        title: 'Masonry & Finishing Material Calculation',
        description: 'Algorithmic calculation of brick quantities, mortar volumes, and plaster material breakdowns (cement bags, sand volume) based on wall thicknesses and opening deductions.',
        tag: 'Material Analytics',
        isVerified: true
      },
      {
        title: 'Dynamic Localized Rate Schedule Repository',
        description: 'PostgreSQL database repository supporting localized material and labor rates (cement per bag, steel per kg, aggregate/sand per brass, skilled/unskilled labor wages).',
        tag: 'Relational Database',
        isVerified: true
      },
      {
        title: 'Itemized Bill of Quantities (BOQ) Generator',
        description: 'Structured compilation engine generating itemized cost schedules with transparent sub-totals, overhead percentages, and contingency allowances.',
        tag: 'BOQ Engine',
        isVerified: true
      },
      {
        title: 'High-Precision Decimal Arithmetic',
        description: 'Enforces exact decimal arithmetic across all financial multiplications to eliminate floating-point rounding errors in commercial bidding totals.',
        tag: 'Financial Precision',
        isVerified: true
      }
    ],
    technologies: [
      {
        category: 'Frontend & Mobile',
        description: 'Client interfaces for estimation and monitoring',
        items: ['Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS'],
        detailedItems: [
          { name: 'Next.js', purpose: 'Web dashboard for project parameter inputs and BOQ report visualization' },
          { name: 'Flutter', purpose: 'Cross-platform mobile client prototype concept for on-site quantity checking' }
        ]
      },
      {
        category: 'Backend & Asynchronous Tasks',
        description: 'Server framework and background job queues',
        items: ['FastAPI', 'Python', 'Celery', 'Redis'],
        detailedItems: [
          { name: 'FastAPI', purpose: 'Asynchronous API endpoints handling project CRUD and calculation dispatches' },
          { name: 'Celery & Redis', purpose: 'Distributed task queue handling compute-heavy multi-storey project takeoffs' }
        ]
      },
      {
        category: 'Persistence & ORM',
        description: 'Relational storage for projects, items, and rates',
        items: ['PostgreSQL', 'SQLAlchemy', 'Alembic Migrations'],
        detailedItems: [
          { name: 'PostgreSQL', purpose: 'Relational database storing projects, structural schedules, and rate books' },
          { name: 'SQLAlchemy', purpose: 'Python SQL toolkit and Object-Relational Mapper (ORM)' }
        ]
      },
      {
        category: 'Development & Build Tools',
        description: 'Containerization and version management',
        items: ['Docker', 'Git', 'GitHub', 'Postman'],
        detailedItems: [
          { name: 'Docker', purpose: 'Containerized service setup for FastAPI, Redis, and Celery workers' },
          { name: 'Git & GitHub', purpose: 'Source code management and feature branch isolation' }
        ]
      }
    ],
    technicalArchitecture: {
      overview: 'Service-oriented architecture with asynchronous task delegation, deterministic takeoff computation engine, and transactional unit-rate storage in PostgreSQL.',
      diagramType: 'client-api-db',
      keyPatterns: ['Asynchronous Task Queue (Worker Pattern)', 'Repository Pattern via SQLAlchemy', 'Domain-Driven Takeoff Models', 'High-Precision Decimal Arithmetic'],
      steps: [
        {
          stepNumber: '01',
          title: 'Project Parameter & Schedule Input',
          component: 'FastAPI Gateway Tier',
          description: 'Ingests architectural drawing parameters, structural schedules (footing sizes, column grids, slab thicknesses), and regional project classifications.',
          technology: 'FastAPI / Validated Pydantic Models',
          input: 'Structural schedule inputs (dimensions, counts, grades)',
          output: 'Validated ProjectScheduleDTO'
        },
        {
          stepNumber: '02',
          title: 'Asynchronous Task Dispatcher',
          component: 'Celery Distributed Queue',
          description: 'Dispatches multi-storey estimation batches into Celery background queues backed by Redis, decoupling heavy calculations from the API response loop.',
          technology: 'Celery & Redis Message Broker',
          input: 'Validated ProjectScheduleDTO',
          output: 'Asynchronous Job ID & Task Execution'
        },
        {
          stepNumber: '03',
          title: 'Deterministic Takeoff Computation Engine',
          component: 'Mathematical Calculation Domain',
          description: 'Executes verified civil engineering formulas: concrete volume = l x w x h; steel tonnage = concrete volume x density ratio; formwork = perimeter x height.',
          technology: 'Python Domain Services / Decimal Math',
          input: 'Structural Elements Dimensions',
          output: 'Net Material Takeoff Quantities (m³, kg, m²)'
        },
        {
          stepNumber: '04',
          title: 'Dynamic Rate Schedule & Persistence',
          component: 'SQLAlchemy Relational Layer',
          description: 'Queries localized rate schedules in PostgreSQL, applying regional material price indexes and equipment multipliers to calculated quantities.',
          technology: 'PostgreSQL / SQLAlchemy ORM',
          input: 'Net Material Quantities + Rate Book ID',
          output: 'Priced Takeoff Line Items'
        },
        {
          stepNumber: '05',
          title: 'Bill of Quantities (BOQ) Compilation',
          component: 'Report & Export Generator',
          description: 'Aggregates itemized costs by civil trade (Earthwork, Concrete, Reinforcement, Formwork, Masonry), applying contractor margins and contingency percentages.',
          technology: 'Structured JSON & Tabular Report Engine',
          input: 'Priced Line Items + Overhead Rates',
          output: 'Complete Itemized Bill of Quantities'
        }
      ]
    },
    developmentProcess: [
      {
        phase: 'Phase 1: Civil Engineering Takeoff Formulation',
        title: 'Researching Measurement Standards',
        summary: 'Studied standard Indian Standard (IS 1200) measurement methods for building works and contractor quantity takeoff procedures.',
        activities: [
          'Decomposed structural building components into standard takeoff line items (substructure, superstructure).',
          'Established empirical reinforcement steel density assumptions (e.g., 80–120 kg/m³ for slabs, 140–180 kg/m³ for columns).',
          'Defined masonry deduction rules for doors and windows in wall surface computations.'
        ]
      },
      {
        phase: 'Phase 2: Database Schema & Entity Modeling',
        title: 'Architecting PostgreSQL Relational Models',
        summary: 'Designed relational entities in SQLAlchemy to model projects, structural elements, material rates, and BOQ line items.',
        activities: [
          'Modeled entity relationships for Project, StructuralSchedule, MaterialRateItem, and BOQSummary.',
          'Enforced database constraints and foreign-key integrity between projects and specific rate books.',
          'Integrated Alembic for reproducible schema version migrations.'
        ]
      },
      {
        phase: 'Phase 3: Mathematical Takeoff Engine Implementation',
        title: 'Coding High-Precision Calculation Logic',
        summary: 'Built deterministic calculation services in Python utilizing exact decimal arithmetic to prevent monetary rounding discrepancies.',
        activities: [
          'Implemented concrete volume formulas for varied footing and column geometries.',
          'Built formwork contact area computation taking into account slab thickness deductions.',
          'Enforced Python Decimal module with explicit rounding rules (ROUND_HALF_UP).'
        ]
      },
      {
        phase: 'Phase 4: FastAPI & Celery Asynchronous Integration',
        title: 'Building Non-Blocking Service Architecture',
        summary: 'Engineered FastAPI REST endpoints and wired Celery worker queues to handle estimation jobs asynchronously.',
        activities: [
          'Built REST routes for project creation, schedule inputs, and BOQ retrieval.',
          'Configured Celery tasks backed by Redis broker to process multi-storey project takeoffs.',
          'Added task status tracking endpoints allowing client progress polling.'
        ]
      },
      {
        phase: 'Phase 5: Benchmark Verification & Auditing',
        title: 'Validating Results Against Manual Estimates',
        summary: 'Tested calculation engine against reference manual estimation sheets for a standard G+2 residential structure.',
        activities: [
          'Verified concrete and steel totals within 0.1% of reference engineering calculation sheets.',
          'Validated edge case handling: non-standard column geometries, variable slab spans, and zero-opening walls.',
          'Verified end-to-end API latency and worker task completion reliability.'
        ]
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Floating-point rounding errors causing financial discrepancies in large-scale commercial cost estimates.',
        whyDifficult: 'Standard IEEE 754 floating-point calculations accumulate subtle rounding discrepancies when multiplying high-volume material quantities by decimal unit rates, leading to discrepancies in commercial bidding totals.',
        engineeringApproach: 'Enforced Python\'s Decimal module with explicit rounding modes (ROUND_HALF_UP) across the entire calculation engine, from base dimensional multiplications to final percentage tax and profit markups.',
        outcomeAndLearning: 'Achieved exact, auditable penny-perfect precision matching institutional accounting and commercial contracting standards.'
      },
      {
        challenge: 'Designing a flexible data model accommodating varying regional construction standards without database schema breakage.',
        whyDifficult: 'Different construction regions utilize different concrete mix conventions (M20, M25, M30), rebar grades (Fe500, Fe550), and varied masonry units (clay bricks, fly-ash bricks, AAC blocks). A rigid schema would require migration for every new building style.',
        engineeringApproach: 'Structured normalized relational tables in PostgreSQL for core structural dimensions while utilizing JSONB metadata fields in SQLAlchemy for project-specific customization tags and regional mix parameters.',
        outcomeAndLearning: 'Maintained strong relational integrity for financial line items while granting flexible adaptability for diverse structural specifications.'
      },
      {
        challenge: 'Preventing API request timeouts during compute-heavy multi-storey project takeoffs.',
        whyDifficult: 'Calculating takeoffs for a multi-storey structure with hundreds of structural elements takes multiple seconds, which would block standard synchronous HTTP request cycles.',
        engineeringApproach: 'Implemented Celery distributed task queues backed by Redis to decouple heavy takeoff computations from the main API thread, returning an immediate task ID with status polling.',
        outcomeAndLearning: 'Delivered instant API response times (sub-100ms) with reliable background task execution and progress reporting.'
      }
    ],
    myContributions: [
      {
        area: 'Mathematical Takeoff Engine',
        ownership: 'Direct Engineering Ownership',
        description: 'Engineered the core deterministic calculation models for concrete, steel, formwork, and masonry.',
        deliverables: [
          'Coded concrete volume and surface contact formwork formulas for structural elements.',
          'Implemented steel tonnage ratio calculations based on structural density standards.',
          'Enforced Python Decimal arithmetic to guarantee zero floating-point rounding errors.'
        ]
      },
      {
        area: 'Database & SQLAlchemy Persistence',
        ownership: 'Direct Engineering Ownership',
        description: 'Architected relational entities in PostgreSQL and developed repository query methods.',
        deliverables: [
          'Designed relational models for projects, structural schedules, material rate books, and BOQ lines.',
          'Implemented SQLAlchemy ORM mappings and configured Alembic migrations.',
          'Created rate lookup queries with regional index multipliers.'
        ]
      },
      {
        area: 'FastAPI Backend & Asynchronous Integration',
        ownership: 'Direct Engineering Ownership',
        description: 'Built FastAPI service routes and integrated Celery background task delegation.',
        deliverables: [
          'Engineered REST API endpoints for project management and schedule parameter submissions.',
          'Configured Celery task queues backed by Redis for asynchronous batch processing.',
          'Implemented task status polling endpoints and error handling middleware.'
        ]
      }
    ],
    visualSchematic: {
      title: 'BuildWise AI Takeoff & Estimation Architecture',
      caption: 'From structural schedule inputs to deterministic quantity takeoffs and itemized Bill of Quantities.',
      diagramLabel: 'Takeoff Architecture Trace',
      stages: [
        {
          stepNumber: '01',
          name: 'Schedule Input',
          description: 'Dimensions for footings, columns, beams, slabs, and regional grade classifications.',
          badge: 'Input Parameters',
          subItems: ['Structural schedules', 'Concrete grades', 'Steel density ratios']
        },
        {
          stepNumber: '02',
          name: 'Asynchronous Dispatch',
          description: 'Celery worker queues process multi-storey project takeoffs in the background.',
          badge: 'Task Queue',
          subItems: ['Celery worker', 'Redis broker', 'Non-blocking API']
        },
        {
          stepNumber: '03',
          name: 'Deterministic Takeoff Engine',
          component: 'Mathematical Core',
          description: 'Computes net concrete (m³), rebar steel (ton), formwork (m²), and masonry counts.',
          badge: 'Takeoff Engine',
          subItems: ['Concrete volume', 'Steel tonnage', 'Formwork area']
        },
        {
          stepNumber: '04',
          name: 'Rate Repository Lookup',
          description: 'SQLAlchemy queries localized material unit rates and labor wage schedules in PostgreSQL.',
          badge: 'Relational Store',
          subItems: ['PostgreSQL rates', 'Regional indexes', 'Decimal precision']
        },
        {
          stepNumber: '05',
          name: 'Bill of Quantities (BOQ)',
          description: 'Itemized cost schedule compilation with trade breakdowns, contractor margins, and contingencies.',
          badge: 'BOQ Output',
          subItems: ['Itemized BOQ', 'Trade breakdowns', 'Cost totals']
        }
      ]
    },
    roadmap: {
      completedFeatures: [
        {
          name: 'Structural Schedule Parameter Modeling',
          description: 'Dimensional parameter inputs for footings, columns, beams, and slabs.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Deterministic Structural Takeoff Engine',
          description: 'Mathematical calculation routines for concrete volumes, steel ratios, and formwork areas.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Masonry & Plaster Calculation Models',
          description: 'Brick count and mortar volume calculations based on wall dimensions and opening deductions.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Dynamic Rate Schedule Repository',
          description: 'PostgreSQL database repository supporting localized material and labor rates.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Itemized Bill of Quantities (BOQ) Generator',
          description: 'Structured compilation engine generating itemized cost schedules with transparent sub-totals.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        }
      ],
      plannedFeatures: [
        {
          name: 'Computer Vision Blueprint Dimension Extraction',
          description: 'Automated dimension and schedule recognition from CAD and PDF architectural drawings.',
          status: 'Planned Milestone',
          badge: 'Next Milestone'
        },
        {
          name: 'Historical Material Price Volatility Forecasting',
          description: 'Regression analysis on historical cement and steel price trends to suggest dynamic bidding contingencies.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        },
        {
          name: 'Automated Contractor PDF Bid-Sheet Exporter',
          description: 'Generation of standard industry-formatted PDF bid sheets ready for submission to tendering authorities.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        }
      ]
    }
  },
  {
    id: 'odyssey',
    slug: 'odyssey',
    title: 'Odyssey',
    officialTitle: 'Odyssey – College-to-Company Talent Platform',
    subtitle: 'Skill-based matching and campus recruitment platform',
    shortDescription: 'A talent platform designed to connect students, colleges and companies through skill-based matching and recruitment workflows.',
    category: 'Enterprise Architecture / Talent Platform',
    accentTag: 'Java 17, Spring Boot & Security',
    statusBadge: 'Award-Recognized Project',
    demoStatus: 'prototype',
    priorityOrder: 4,
    githubUrl: undefined,
    liveDemoUrl: undefined,
    calloutNotice: {
      type: 'award',
      title: 'Pitch Competition Recognition & Leadership',
      content: 'Odyssey was conceptualized and architected by a student team led by Atharva Vaddepalli and pitched at the prestigious E-Cell IIT Bombay Illuminate workshop. The project received Team Pitch Recognition from workshop mentors and evaluators for its robust architectural design, role-based governance model, and practical solution to campus placement inefficiencies.'
    },
    overview: {
      summary: 'Odyssey is an enterprise-grade recruitment and placement management platform engineered to replace inefficient campus placement spreadsheets with a unified, transparent portal that bridges academic institutions, student job seekers, and hiring organizations.',
      background: 'University campus placement drives involve thousands of student candidates, dozens of corporate recruiters, and strict institutional placement cell regulations. Placement officers typically coordinate these multi-stakeholder drives using unstandardized spreadsheets and scattered email chains.',
      motivation: 'Atharva led the team to conceptualize Odyssey as an enterprise-grade platform that unifies students, college placement officers (TPOs), and corporate recruiters on a secure, role-governed portal with automated eligibility verification and skill-based candidate matching.'
    },
    problemStatement: {
      coreIssue: 'Fragmented communications, manual eligibility verification, and unstandardized resume tracking in collegiate recruitment workflows.',
      conventionalLimitations: [
        'College placement cells spend hundreds of administrative hours manually cross-checking student CGPAs, active backlogs, and department criteria across disparate spreadsheets.',
        'Corporate recruiters struggle to filter large candidate pools based on verified technical skill proficiencies rather than unverified resume keywords.',
        'Students lack real-time visibility into their application lifecycles, interview stages, and feedback across competing company visits.'
      ],
      impact: 'Administrative overhead for colleges, high error rates in candidate shortlisting, missed hiring opportunities for students, and recruitment delays for hiring companies.'
    },
    proposedSolution: {
      summary: 'A multi-tenant, role-governed platform built on Java 17 and Spring Boot 3.2.3 that manages verified student profiles, institutional verification workflows, job listing publishing, and algorithmic candidate filtering matching specific technical job requisitions.',
      systemWorkflow: [
        'Role-Based Registration & Authentication: Separates privileges across Students, Institutional Placement Officers, and Corporate Recruiters using stateless JWT and BCrypt password encryption.',
        'Verified Profile Management: Maintains academic records, verified CGPA standings, and validated technical project portfolios.',
        'Job Requisition Creation: Recruiters publish hiring positions specifying strict criteria (minimum CGPA, department streams, required technical skills, backlog thresholds).',
        'Automated Eligibility & Candidate Filtering: Automated matching engine compares student records against job specifications directly in database queries, preventing ineligible submissions.',
        'Application Lifecycle Management: Tracks recruitment phases from application submission to shortlisting, technical evaluation, and offer issuance.',
        'Placement Administration & Auditing: Provides placement cells with comprehensive oversight of campus drive performance and hiring statistics.'
      ],
      boundariesAndScope: 'Designed for engineering colleges, university placement directorates, and recruiting partner organizations. Emphasizes enterprise security, role isolation, and verifiable recruitment workflows.'
    },
    keyFeatures: [
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Strict separation of permissions and views for Student candidates, College Placement Officers (Admins), and Corporate Recruiters.',
        tag: 'Security & Auth',
        isVerified: true
      },
      {
        title: 'Stateless JWT & BCrypt Authentication',
        description: 'Stateless session management using Spring Security filter chains, JSON Web Tokens (JWT), and BCrypt cryptographic password hashing.',
        tag: 'Enterprise Security',
        isVerified: true
      },
      {
        title: 'Parametric Job Requisition Engine',
        description: 'Recruiters define detailed eligibility parameters including minimum CGPA cutoffs, department eligibility, graduation year, and skill tags.',
        tag: 'Job Management',
        isVerified: true
      },
      {
        title: 'Automated Candidate Eligibility Filter',
        description: 'Real-time database-level matching comparing student academic parameters against job requirements to eliminate ineligible applications automatically.',
        tag: 'Matching Engine',
        isVerified: true
      },
      {
        title: 'Multi-Stage Application Tracking Pipeline',
        description: 'End-to-end recruitment lifecycle state tracking (Applied, Shortlisted, Technical Assessment, HR Interview, Offer Extended, Accepted).',
        tag: 'Workflow Engine',
        isVerified: true
      },
      {
        title: 'Containerized Deployment Ready',
        description: 'Pre-configured Docker container setup for reproducible deployment across PostgreSQL database instances and Spring Boot services.',
        tag: 'DevOps & Containers',
        isVerified: true
      }
    ],
    technologies: [
      {
        category: 'Backend Framework',
        description: 'Enterprise Java architecture and REST APIs',
        items: ['Java 17', 'Spring Boot 3.2.3', 'Spring MVC', 'REST APIs', 'Spring Data JPA'],
        detailedItems: [
          { name: 'Java 17', purpose: 'LTS language runtime with strong typing and performance optimizations' },
          { name: 'Spring Boot 3.2.3', purpose: 'Enterprise backend framework, dependency injection, and REST service management' },
          { name: 'Spring Data JPA', purpose: 'Object-relational mapping, transactional boundaries, and dynamic repository queries' }
        ]
      },
      {
        category: 'Security & Authentication',
        description: 'Stateless authentication and authorization',
        items: ['Spring Security', 'JWT (JSON Web Tokens)', 'BCrypt Password Hashing'],
        detailedItems: [
          { name: 'Spring Security', purpose: 'Configuring security filter chains and role-based method security' },
          { name: 'JWT', purpose: 'Stateless authorization tokens passed in HTTP authorization headers' },
          { name: 'BCrypt', purpose: 'Adaptive one-way cryptographic hashing for sensitive user credentials' }
        ]
      },
      {
        category: 'Database & Containers',
        description: 'Relational persistence and containerization',
        items: ['PostgreSQL 16', 'MySQL', 'Hibernate ORM', 'Docker'],
        detailedItems: [
          { name: 'PostgreSQL 16', purpose: 'Primary relational database enforcing ACID compliance and foreign-key integrity' },
          { name: 'Docker', purpose: 'Containerized orchestration for database and application environments' }
        ]
      },
      {
        category: 'Frontend & AI Integrations',
        description: 'User interface and ATS analysis concept',
        items: ['React', 'Vite', 'Tailwind CSS', 'Gemini ATS Assistance'],
        detailedItems: [
          { name: 'React & Vite', purpose: 'Component-driven client frontend interface' },
          { name: 'Tailwind CSS', purpose: 'Utility-first responsive interface styling' },
          { name: 'Gemini ATS Assistance', purpose: 'Conceptual resume-to-job matching semantic analysis integration' }
        ]
      }
    ],
    technicalArchitecture: {
      overview: 'Multi-tier enterprise architecture featuring Spring Security filter chains, role-based REST controllers, transactional service logic, and normalized relational persistence in PostgreSQL.',
      diagramType: 'client-api-db',
      keyPatterns: ['Role-Based Access Control (RBAC)', 'Stateless JWT Authentication', 'Repository Pattern with Spring Data JPA', 'Transactional Service Layer'],
      steps: [
        {
          stepNumber: '01',
          title: 'Authentication & Token Verification',
          component: 'Spring Security Filter Chain',
          description: 'Intercepts incoming HTTP requests, validates JWT cryptographic signatures, extracts user roles (STUDENT, ADMIN, RECRUITER), and sets the SecurityContext.',
          technology: 'Spring Security & JWT Filter',
          input: 'HTTP Request with Bearer JWT Token',
          output: 'Authenticated SecurityContextHolder'
        },
        {
          stepNumber: '02',
          title: 'Role-Guarded REST Controllers',
          component: 'Spring MVC Web Layer',
          description: 'Routes API requests through method-level security (@PreAuthorize). Dispatches authorized payloads to role-specific service controllers.',
          technology: 'Spring MVC / @PreAuthorize',
          input: 'Validated User Requests & DTOs',
          output: 'Service Layer Method Invocations'
        },
        {
          stepNumber: '03',
          title: 'Automated Eligibility Matching Service',
          component: 'Domain Business Logic Layer',
          description: 'Evaluates candidate academic criteria (CGPA, backlog status, department stream) against job requisition requirements in transactional queries.',
          technology: 'Spring Service Tier & JPA Specifications',
          input: 'Candidate Profile + Job Criteria',
          output: 'Eligibility Verification Result'
        },
        {
          stepNumber: '04',
          title: 'Transactional Persistence Tier',
          component: 'PostgreSQL 16 via Hibernate / JPA',
          description: 'Persists user accounts, academic credentials, job postings, and application state transitions with ACID transactional guarantees.',
          technology: 'PostgreSQL 16 & Spring Data JPA',
          input: 'Entity Domain Models',
          output: 'Committed Database Transactions'
        },
        {
          stepNumber: '05',
          title: 'Workflow State & Notification API',
          component: 'Application Tracking Engine',
          description: 'Manages candidate application lifecycles (Shortlisted, Interview Scheduled, Offer Released) and delivers dashboard analytics to placement officers.',
          technology: 'RESTful Response Endpoints',
          input: 'Lifecycle State Updates',
          output: 'Auditable Application Records'
        }
      ]
    },
    developmentProcess: [
      {
        phase: 'Phase 1: Problem Discovery & Stakeholder Inquiry',
        title: 'Identifying Placement Cell Bottlenecks',
        summary: 'Engaged with college placement coordinators and peers to identify key administrative pain points in campus recruitment drives.',
        activities: [
          'Documented spreadsheet-based workflow inefficiencies and manual verification delays.',
          'Defined user roles and primary needs: Students (application clarity), Recruiters (filtered cohorts), TPOs (verification authority).',
          'Drafted functional requirements for an integrated college-to-company platform.'
        ]
      },
      {
        phase: 'Phase 2: Enterprise Security & System Architecture',
        title: 'Designing Spring Security & RBAC',
        summary: 'Architected the backend security framework, choosing stateless JWT tokenization and method-level role authorization.',
        activities: [
          'Designed Spring Security filter chain configurations to protect private endpoints.',
          'Established JWT token issuance, payload signing, and expiration handling.',
          'Configured BCrypt password hashing to protect user credentials.'
        ]
      },
      {
        phase: 'Phase 3: Relational Schema Modeling',
        title: 'Architecting Normalized PostgreSQL Database',
        summary: 'Designed normalized relational schemas enforcing multi-tenant isolation and transactional consistency.',
        activities: [
          'Modeled entities for Users, Roles, StudentProfiles, CollegeCampuses, JobRequisitions, and Applications.',
          'Established composite unique constraints on (job_id, student_id) to eliminate duplicate applications.',
          'Configured JPA relationships with cascade rules and lazy-loading optimizations.'
        ]
      },
      {
        phase: 'Phase 4: Eligibility Engine & Workflow Logic',
        title: 'Building Automated Matching & REST APIs',
        summary: 'Implemented business service layers executing real-time eligibility evaluation and application state management.',
        activities: [
          'Constructed Spring Data JPA specification queries matching candidate criteria against job cutoffs.',
          'Implemented application state machine transitions from APPLIED to SELECTED.',
          'Configured Docker Compose files for containerized PostgreSQL and service execution.'
        ]
      },
      {
        phase: 'Phase 5: E-Cell IIT Bombay Illuminate Pitch & Recognition',
        title: 'Competitive Pitch Presentation & Award',
        summary: 'Led the student team during the competitive pitch presentation at the E-Cell IIT Bombay Illuminate workshop, securing Team Pitch Recognition.',
        activities: [
          'Structured the technical pitch deck detailing system architecture and security governance.',
          'Delivered the live pitch presentation before workshop evaluators and mentors.',
          'Addressed evaluator inquiries regarding enterprise scalability and role-based data isolation.'
        ]
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Enforcing absolute data isolation and privacy between competing corporate recruiter accounts and college administration.',
        whyDifficult: 'Multiple competing companies recruit simultaneously on campus. A recruiter must never have access to competitor job requisition applicant pools or unreleased salary offers.',
        engineeringApproach: 'Implemented strict method-level security in Spring Boot (@PreAuthorize("hasRole(\'RECRUITER\')")) coupled with tenant-aware service layer checks that verify company ownership before returning candidate lists.',
        outcomeAndLearning: 'Guaranteed complete multi-tenant role isolation and zero unauthorized data leakage between corporate recruiter accounts.'
      },
      {
        challenge: 'Preventing race conditions and preserving transactional consistency during high-volume application submission spikes.',
        whyDifficult: 'When a premier recruitment drive opens, hundreds of students submit applications simultaneously within seconds, risking duplicate records and race conditions in seat quotas.',
        engineeringApproach: 'Applied strict transactional boundaries (@Transactional(isolation = Isolation.READ_COMMITTED)) in Spring Boot alongside unique composite database constraints on (job_id, student_id).',
        outcomeAndLearning: 'Prevented duplicate submissions and ensured guaranteed ACID state consistency even under peak concurrent traffic.'
      },
      {
        challenge: 'Eliminating manual placement cell eligibility verification overhead.',
        whyDifficult: 'College placement officers manually spend days checking whether every applicant meets minimum 10th, 12th, and engineering CGPA cutoffs and active backlog criteria.',
        engineeringApproach: 'Built a dynamic JPA specification query engine that executes automated multi-variable candidate filtering directly at the database query level.',
        outcomeAndLearning: 'Reduced verification turnaround time from days to instantaneous database-level evaluation, eliminating manual human errors.'
      }
    ],
    myContributions: [
      {
        area: 'Team Leadership & Architecture Pitch',
        ownership: 'Collaborative / Team Lead',
        description: 'Led the student development team and served as lead pitch presenter at E-Cell IIT Bombay Illuminate workshop.',
        deliverables: [
          'Led the technical idea conceptualization and system architecture design.',
          'Structured the pitch presentation and business-technical value proposition.',
          'Presented the project pitch before evaluators, earning Team Pitch Recognition.'
        ]
      },
      {
        area: 'Spring Boot Backend & Security Architecture',
        ownership: 'Direct Engineering Ownership',
        description: 'Engineered the core Spring Boot backend, REST API endpoints, and Spring Security filter chains.',
        deliverables: [
          'Implemented Spring Security configuration with stateless JWT authentication and BCrypt password hashing.',
          'Built REST controllers with method-level role authorization (@PreAuthorize).',
          'Configured global exception handling and unified API response formats.'
        ]
      },
      {
        area: 'Relational Database & Eligibility Engine',
        ownership: 'Direct Engineering Ownership',
        description: 'Designed the PostgreSQL relational schemas and implemented automated eligibility matching logic.',
        deliverables: [
          'Modeled normalized relational tables for users, profiles, jobs, and application lifecycles.',
          'Wrote dynamic JPA queries evaluating student eligibility criteria against job cutoffs.',
          'Configured Docker orchestration files for local and containerized development.'
        ]
      }
    ],
    visualSchematic: {
      title: 'Odyssey Enterprise Role-Based Architecture',
      caption: 'Secure multi-stakeholder recruitment workflow bridging students, placement cells, and corporate recruiters.',
      diagramLabel: 'Enterprise Security Trace',
      stages: [
        {
          stepNumber: '01',
          name: 'JWT Authentication',
          description: 'Spring Security filter validates cryptographic JWT tokens and extracts user roles.',
          badge: 'Security Layer',
          subItems: ['JWT validation', 'BCrypt hashing', 'Role extraction']
        },
        {
          stepNumber: '02',
          name: 'Role-Guarded Access',
          description: 'Method-level @PreAuthorize enforces isolation for Students, Admins, and Recruiters.',
          badge: 'RBAC Control',
          subItems: ['Student portal', 'Recruiter console', 'TPO admin']
        },
        {
          stepNumber: '03',
          name: 'Job Requisition Engine',
          description: 'Recruiters configure parameterized criteria (CGPA, department, skills, backlogs).',
          badge: 'Job Criteria',
          subItems: ['CGPA cutoffs', 'Skill tagging', 'Department streams']
        },
        {
          stepNumber: '04',
          name: 'Eligibility Filter',
          description: 'Automated JPA specification queries verify student eligibility in real-time.',
          badge: 'Matching Engine',
          subItems: ['Instant filtering', 'Zero manual checking', 'Atomic checks']
        },
        {
          stepNumber: '05',
          name: 'Recruitment Lifecycle',
          description: 'Tracks application lifecycle states (Shortlisted, Interviewed, Selected) in PostgreSQL.',
          badge: 'PostgreSQL Store',
          subItems: ['State transitions', 'Docker container', 'Audit history']
        }
      ]
    },
    roadmap: {
      completedFeatures: [
        {
          name: 'Role-Based Access Control (RBAC)',
          description: 'Strict separation of permissions for Students, Institutional Admins, and Corporate Recruiters.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Stateless JWT & BCrypt Authentication',
          description: 'Stateless session management using Spring Security and cryptographic password hashing.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Parametric Job Requisition Engine',
          description: 'Recruiters define detailed eligibility parameters including CGPA, department streams, and skill tags.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Automated Candidate Eligibility Filter',
          description: 'Real-time database-level matching comparing student academic parameters against job requirements.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        },
        {
          name: 'Multi-Stage Application Tracking Pipeline',
          description: 'End-to-end recruitment lifecycle state tracking from application to selection.',
          status: 'Completed & Verified',
          badge: 'Verified v1.0'
        }
      ],
      plannedFeatures: [
        {
          name: 'Automated Multi-Channel Notification Dispatcher',
          description: 'Automated email and in-app alerts for scheduled interview rounds, shortlist announcements, and offer releases.',
          status: 'Planned Milestone',
          badge: 'Next Milestone'
        },
        {
          name: 'Gemini-Assisted ATS Resume Semantic Scoring',
          description: 'Semantic vector similarity analysis comparing student project descriptions with recruiter job requisitions.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        },
        {
          name: 'Institutional Placement Analytics Dashboard',
          description: 'Executive reporting visualizations for college placement directors tracking department hiring ratios and salary trends.',
          status: 'Planned Milestone',
          badge: 'Future Research'
        }
      ]
    }
  }
];
