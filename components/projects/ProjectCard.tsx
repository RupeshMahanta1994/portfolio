import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusBadge, Tag } from "@/components/ui/Badge";
import { StatRow } from "@/components/ui/StatRow";

export function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* Replace with a screenshot: <Image src={`/images/${p.slug}.webp`} .../> */}
      <div className="aspect-video bg-gradient-to-br from-accent/20 to-bg" aria-hidden />
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <StatusBadge status={p.status} />
        </div>
        <p className="text-sm text-muted">{p.summary}</p>
        <StatRow stats={p.stats} />
        <Link href={`/projects/${p.slug}/`} className="inline-block text-sm text-accent hover:underline">Read case study →</Link>
      </div>
    </article>
  );
}

export function SmallCard({ p }: { p: Project }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-4">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-medium"><Link href={`/projects/${p.slug}/`} className="hover:text-accent">{p.title}</Link></h4>
        <span className="shrink-0 font-mono text-xs text-muted">{p.durationWeeks}w</span>
      </div>
      <p className="mt-1 text-sm text-muted">{p.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">{p.tags.map((t) => <li key={t}><Tag>{t}</Tag></li>)}</ul>
    </article>
  );
}
