import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    name: "Backend",
    items: [
      { name: "Java", level: "daily" },
      { name: "Spring Boot", level: "daily" },
      { name: "Spring MVC", level: "daily" },
      { name: "Spring Data JPA", level: "daily" },
      { name: "Hibernate", level: "daily" },
      { name: "Microservices", level: "daily" },
      { name: "REST APIs", level: "daily" },
      { name: "Node.js", level: "built" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React.js", level: "daily" },
      { name: "TypeScript", level: "daily" },
      { name: "JavaScript", level: "daily" },
      { name: "Redux Toolkit", level: "daily" },
      { name: "RTK Query", level: "daily" },
      { name: "HTML5", level: "daily" },
      { name: "CSS3", level: "daily" },
    ],
  },
  {
    name: "Data & Messaging",
    items: [
      { name: "Oracle SQL", level: "daily" },
      { name: "PostgreSQL", level: "built" },
      { name: "SQL", level: "daily" },
      { name: "IBM MQ", level: "built" },
    ],
  },
  {
    name: "Testing & DevOps",
    items: [
      { name: "Jest", level: "daily" },
      { name: "React Testing Library", level: "daily" },
      { name: "JUnit", level: "built" },
      { name: "Mockito", level: "built" },
      { name: "Git / GitHub", level: "daily" },
      { name: "Docker", level: "built" },
      { name: "Kubernetes", level: "built" },
      { name: "AWS", level: "studied" },
      { name: "CI/CD", level: "built" },
      { name: "Agile / Scrum", level: "daily" },
      { name: "SOLID", level: "daily" },
    ],
  },
];
