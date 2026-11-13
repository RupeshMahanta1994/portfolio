import type { Project } from "@/lib/types";

// Experience entries shown in "Work". Each gets its own /projects/<slug>/ page.
export const projects: Project[] = [
  {
    slug: "infosys-airline",
    title: "Global Airline Platform",
    summary: "Infosys Limited · Senior Associate Consultant. Full-stack feature ownership and production support for a global airline client.",
    status: "live",
    category: "completed",
    featured: true,
    tags: ["Java", "Spring Boot", "React.js", "TypeScript", "Redux Toolkit", "Oracle SQL", "IBM MQ", "Docker", "Kubernetes"],
    durationWeeks: 135,
    teamSize: 4,
    year: 2024,
    stats: [
      { label: "SQL queries", value: "30+" },
      { label: "UI features", value: "15+" },
      { label: "Coverage", value: "90%+" },
    ],
    links: [],
    overview:
      "Develop enterprise-grade web applications for a global airline client, taking end-to-end ownership of assigned features with minimal guidance and supporting live production services.",
    features: [
      "RESTful services in Java and Spring Boot with a layered Controller, Service and Repository architecture, covering request/response modelling, validation and exception handling",
      "Backend integration with IBM MQ for messaging",
      "30+ complex SQL queries optimised with Oracle SQL, Spring Data JPA and Hibernate",
      "Scalable React.js and TypeScript frontends with Redux Toolkit and RTK Query, delivering 15+ responsive UI features",
      "Dockerfiles to containerise backend and frontend services",
    ],
    outcomes: [
      "Improved application load times by 30%",
      "90%+ test coverage across critical frontend functionality with Jest and React Testing Library",
      "Resolved production and integration issues via root-cause analysis across frontend, APIs, logs, Kubernetes pods and database layers",
      "Onboarded and mentored developers on the team",
    ],
  },
  {
    slug: "railways-signal-app",
    title: "Railway Signal Engineers Web Apps",
    summary: "Indian Railways · Junior Engineer. Enterprise web applications used by 500+ Railway Signal Engineers.",
    status: "archived",
    category: "completed",
    featured: true,
    tags: ["React.js", "Java", "Spring Boot", "Node.js", "SQL"],
    durationWeeks: 183,
    teamSize: 1,
    year: 2020,
    stats: [
      { label: "Users", value: "500+" },
      { label: "Pages", value: "50+" },
      { label: "Backend", value: "~2 yrs" },
    ],
    links: [],
    overview:
      "Developed and maintained enterprise web applications for Railway Signal Engineers, spanning the React frontend, Java and Node.js backend services, and the database.",
    features: [
      "50+ responsive UI pages with React.js, JavaScript, HTML and CSS",
      "Backend REST APIs in Java and Spring Boot for about 2 years: business logic, request validation, exception handling and database integration",
      "Node.js backend services and APIs supporting application features and frontend integration",
      "SQL queries for data retrieval, application maintenance and issue resolution",
    ],
    outcomes: ["Debugged and resolved issues across frontend, backend and database layers"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
