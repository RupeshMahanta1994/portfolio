import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="about-backdrop" aria-hidden>
        <div className="about-glow about-glow--a" />
        <div className="about-glow about-glow--b" />
        <div className="about-dots" />
      </div>
    <Section id="about">
      <SectionHeading eyebrow="About" title="Full-stack engineer, from Spring Boot to React" />
      <div style={{ "--accent-glow": "#7C6CFF" } as React.CSSProperties} className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-zinc-200">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        {/* Replace with <Image src="/images/portrait.webp" ... /> */}
        <div className="accent-frame flex aspect-[4/5] items-end rounded-xl border border-border bg-gradient-to-br from-accent/30 to-surface p-4 text-sm text-muted">
          {profile.location}
        </div>
      </div>
    </Section>
    </div>
  );
}
