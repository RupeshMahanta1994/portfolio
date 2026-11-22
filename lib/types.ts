export type ProjectStatus = "live" | "completed" | "in-progress" | "archived";
export type ProjectCategory = "completed" | "client" | "archived";

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  category: ProjectCategory;
  featured: boolean;
  tags: string[];
  durationWeeks: number;
  teamSize: number;
  year: number;
  stats: Stat[];
  links: { label: string; href: string }[];
  overview: string;
  features: string[];
  outcomes: string[];
  /** Hero screenshot for the featured row and the top of the case study (path under /public). */
  image?: string;
  /** Extra screenshots shown in the case study, each with a caption. */
  screenshots?: { src: string; alt: string; caption: string }[];
}

export interface SkillGroup {
  name: string;
  items: { name: string; level: "daily" | "built" | "studied" }[];
}
