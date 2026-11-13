import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyButton } from "@/components/ui/CopyButton";
import { ButtonLink } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Get in touch" />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} className="text-lg hover:text-accent">{profile.email}</a>
            <CopyButton text={profile.email} />
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={profile.cv}>Download CV</ButtonLink>
            {profile.socials.map((s) => <ButtonLink key={s.label} href={s.href} variant="ghost">{s.label}</ButtonLink>)}
          </div>
        </div>
        <dl className="rounded-xl border border-border bg-surface p-5">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Now</h3>
          {profile.now.map((n) => (
            <div key={n.label} className="flex justify-between border-b border-border/60 py-2 last:border-0">
              <dt className="text-muted">{n.label}</dt><dd>{n.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
