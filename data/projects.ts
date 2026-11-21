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
    slug: "twitter-clone",
    title: "Twitter Clone",
    summary: "Full-stack social app with JWT auth, a follow feed, real-time notifications, image uploads and ranked full-text search.",
    status: "completed",
    category: "completed",
    featured: true,
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "React 19", "Vite", "WebSocket", "MinIO", "Docker"],
    durationWeeks: 9,
    teamSize: 1,
    year: 2026,
    stats: [
      { label: "Integration tests", value: "83" },
      { label: "Search, 500k tweets", value: "~4 ms" },
      { label: "Images per tweet", value: "4" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/RupeshMahanta1994/twitter-clone" }],
    overview:
      "A Twitter-style app built end to end: a stateless JWT Spring Boot API on PostgreSQL with a React single-page frontend, run together with Docker Compose.",
    features: [
      "Tweets, likes, comments, edits, follow/unfollow and a keyset-paginated feed that stays stable while new tweets arrive",
      "Real-time notifications over WebSocket, pushed only after the transaction commits, with first-message token auth and reconnect with backoff",
      "Image uploads to S3-compatible MinIO: validated by decoding, re-encoded to strip metadata, thumbnails generated, per-user limits and scheduled orphan cleanup",
      "Ranked full-text search using a generated tsvector column, a GIN index and websearch_to_tsquery, returning match offsets instead of HTML",
      "React frontend with infinite scroll, optimistic likes, a 280-character composer, drag-and-drop and paste uploads, and a keyboard-friendly lightbox",
    ],
    outcomes: [
      "Indexed ranked search returns the top 20 results in about 4 ms on 500,000 tweets, against 148 ms for a sequential ILIKE scan",
      "83 integration tests run against a real PostgreSQL through Testcontainers",
      "Idempotent likes and follows through composite keys and ON CONFLICT DO NOTHING",
    ],
  },
  {
    slug: "pick-my-show",
    title: "PickMyShow",
    summary: "Event ticket booking platform with live seat maps, timed seat holds, payments and an admin dashboard.",
    status: "completed",
    category: "completed",
    featured: true,
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "WebSocket", "React 19", "TanStack Query", "Docker"],
    durationWeeks: 4,
    teamSize: 1,
    year: 2026,
    stats: [
      { label: "Concurrent requests tested", value: "500" },
      { label: "Seat hold", value: "5 min" },
      { label: "Migrations", value: "9" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/RupeshMahanta1994/pick-my-show" }],
    overview:
      "A BookMyShow-style booking platform where users browse events, pick seats on a live map, hold them briefly and pay. Spring Boot, PostgreSQL, Redis and Kafka on the backend, React on the front.",
    features: [
      "Seat holds with a 5-minute expiry and a scheduled job that releases expired holds",
      "Live seat-map updates pushed to every viewer over WebSocket, fed by a Kafka topic for seat status changes",
      "Payment flow with a gateway abstraction and webhook events processed asynchronously through Kafka",
      "Session-based authentication with Spring Security and Redis-backed sessions",
      "Admin area for events, venues and a dashboard with Recharts, plus Flyway-managed schema and seed data",
    ],
    outcomes: [
      "A concurrency test fires 500 simultaneous requests at one seat and verifies exactly one wins, on real PostgreSQL and Kafka via Testcontainers",
      "Dark, theatre-style React UI with a seat map, hold countdown timer, checkout and booking confirmation",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
