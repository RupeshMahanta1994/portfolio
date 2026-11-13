import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Recognition() {
  return (
    <Section id="recognition">
      <SectionHeading eyebrow="Highlights" title="Impact in numbers" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.awards.map((a) => (
          <li key={a.title} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-medium">{a.title}</h3>
            <p className="mt-1 text-sm text-muted">{a.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
