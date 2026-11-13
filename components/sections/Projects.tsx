import { featuredProjects, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedRow } from "@/components/projects/ProjectCard";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Work" title="Selected work" />
      <div>
        {featuredProjects.map((p, i) => <FeaturedRow key={p.slug} p={p} index={i} />)}
      </div>
      <h3 className="mb-6 mt-16 text-xl font-semibold">Everything else</h3>
      <ProjectGrid projects={projects} />
      <p className="mt-8 text-sm text-muted">
        More on <a className="text-accent hover:underline" href={profile.socials[1].href} target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </Section>
  );
}
