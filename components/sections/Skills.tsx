import { skills } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const levelLabel = { daily: "Ship daily", built: "Built with", studied: "Studied" } as const;
const levelStyle = {
  daily: "border-accent/60 text-fg",
  built: "border-border text-fg",
  studied: "border-border text-muted",
} as const;

export function Skills() {
  const total = skills.reduce((n, g) => n + g.items.length, 0);
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title={`What I work with (${total} tools)`} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((g) => (
          <div key={g.name} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="mb-3 flex justify-between font-medium">{g.name}<span className="font-mono text-xs text-muted">{g.items.length}</span></h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i.name} title={levelLabel[i.level]} className={`rounded-md border px-2 py-1 text-xs ${levelStyle[i.level]}`}>{i.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">Highlighted border = ship daily. Dimmed = studied.</p>
    </Section>
  );
}
