import { featuredProjects, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedCard } from "@/components/projects/ProjectCard";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Work" title="Selected work" />
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((p) => <FeaturedCard key={p.slug} p={p} />)}
      </div>
      <h3 className="mb-6 mt-16 text-xl font-semibold">Everything else</h3>
      <ProjectGrid projects={projects} />
      <p className="mt-8 text-sm text-muted">
        More on <a className="text-accent hover:underline" href={profile.socials[1].href} target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </Section>
  );
}
