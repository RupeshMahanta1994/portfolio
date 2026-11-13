import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusBadge, Tag } from "@/components/ui/Badge";
import { StatRow } from "@/components/ui/StatRow";
import { ButtonLink } from "@/components/ui/Button";

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <ul className="list-disc space-y-1 pl-5 text-muted">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </section>
  );
}

export function CaseStudy({ project: p, next }: { project: Project; next: Project }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/#projects" className="text-sm text-muted hover:text-fg">← All projects</Link>
      <div className="mt-6 flex items-center gap-3"><StatusBadge status={p.status} /><span className="font-mono text-xs text-muted">{p.year}</span></div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
      <p className="mt-3 text-lg text-muted">{p.summary}</p>
      <div className="mt-6 flex flex-wrap gap-3">{p.links.map((l) => <ButtonLink key={l.href} href={l.href}>{l.label}</ButtonLink>)}</div>

      <div className="mt-10">
        <StatRow stats={[{ label: "Team", value: p.teamSize === 1 ? "Solo" : String(p.teamSize) }, { label: "Duration", value: `${p.durationWeeks}w` }, ...p.stats]} />
      </div>
      <div className="mt-10 aspect-video rounded-xl border border-border bg-gradient-to-br from-accent/20 to-surface" aria-hidden />

      <section className="mt-10"><h2 className="mb-3 text-xl font-semibold">Overview</h2><p className="text-muted">{p.overview}</p></section>
      <List title="What it does" items={p.features} />
      <List title="Outcomes" items={p.outcomes} />
      <section className="mt-10"><h2 className="mb-3 text-xl font-semibold">Built with</h2><ul className="flex flex-wrap gap-2">{p.tags.map((t) => <li key={t}><Tag>{t}</Tag></li>)}</ul></section>

      <Link href={`/projects/${next.slug}/`} className="mt-16 block rounded-xl border border-border bg-surface p-5 hover:border-accent">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Next case study</span>
        <span className="mt-1 block text-lg font-medium">{next.title} →</span>
      </Link>
    </article>
  );
}
