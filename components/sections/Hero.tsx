import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import Link from "next/link";
import { HeroOrbit } from "@/components/ui/HeroOrbit";

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-6 pb-16 pt-24">
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
      <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {profile.availability}
      </span>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">{profile.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{profile.role}. {profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/#projects">View my work</ButtonLink>
        <ButtonLink href="/#contact" variant="ghost">Get in touch</ButtonLink>
      </div>

        </div>
        <div className="hidden aspect-square w-full max-w-md justify-self-end lg:block"><HeroOrbit /></div>
      </div>

      <dl className="mt-14 grid grid-cols-3 gap-4 border-y border-border py-6">
        {profile.heroStats.map((s) => (
          <div key={s.label}>
            <dd className="font-mono text-2xl font-semibold sm:text-3xl">{s.value}</dd>
            <dt className="text-xs text-muted sm:text-sm">{s.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Experience</h2>
        <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
          {featuredProjects.map((p) => (
            <li key={p.slug} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="font-medium">{p.title}</span>
              <span className="flex items-center gap-3">
                <StatusBadge status={p.status} />
                <Link href={`/projects/${p.slug}/`} className="text-sm text-accent hover:underline">Details</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
