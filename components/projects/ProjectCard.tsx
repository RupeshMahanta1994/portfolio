import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusBadge, Tag } from "@/components/ui/Badge";

const accents = ["#7C6CFF", "#3FD6A0", "#FF8A4C"];

/** Alternating image/description row with a neon glow spreading behind the image. */
export function FeaturedRow({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  const glow = accents[index % accents.length];
  const repo = p.links.find((l) => l.label === "GitHub");
  return (
    <article
      className="accent-glow grid items-center gap-8 border-t border-border/60 py-14 first:border-t-0 first:pt-0 md:gap-14 lg:grid-cols-2 lg:py-20"
      style={{ "--accent-glow": glow, "--glow-x": flip ? "76%" : "24%" } as React.CSSProperties}
    >
      <div
        className={`accent-frame relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/60 bg-surface ${flip ? "lg:order-2" : ""}`}
        aria-hidden={p.image ? undefined : true}
      >
        {p.image ? (
          <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top" />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(70% 70% at 30% 20%, color-mix(in srgb, ${glow} 35%, transparent), transparent), linear-gradient(135deg, #12121a, #050505)` }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-7xl font-bold text-white/90">
              {p.title.charAt(0)}
            </span>
          </>
        )}
      </div>

      <div className={`flex flex-col items-start ${flip ? "lg:order-1" : ""}`}>
        <StatusBadge status={p.status} />
        <h3 className="mt-4 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">{p.title}</h3>
        <p className="mt-4 max-w-[46ch] text-lg text-zinc-300">{p.summary}</p>
        <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
          {p.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1.5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{s.label}</dt>
              <dd className="font-mono text-2xl font-bold text-white md:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-6 flex flex-wrap gap-1.5">{p.tags.slice(0, 6).map((t) => <li key={t}><Tag>{t}</Tag></li>)}</ul>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {repo && (
            <a href={repo.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-white/5">
              GitHub <span aria-hidden>↗</span>
            </a>
          )}
          <Link href={`/projects/${p.slug}/`} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-white/5">
            Case study <span aria-hidden>→</span>
          </Link>
        </div>
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
