import Link from "next/link";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import type { ProjectStatus } from "@/lib/types";
import { HeroOrbit } from "@/components/ui/HeroOrbit";

const statusStyle: Record<ProjectStatus, { label: string; cls: string }> = {
  live: { label: "Live", cls: "text-indigo-300" },
  "in-progress": { label: "In progress", cls: "text-orange-400" },
  archived: { label: "Past role", cls: "text-muted" },
};

const monoLabel = "font-mono text-[11px] uppercase tracking-[0.2em] text-muted";

export function Hero() {
  return (
    <section id="hero" className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-center px-6 py-8">
      <div className="grid items-center gap-6 lg:grid-cols-[1.35fr_1fr]">
      <div>
      <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-900/70 bg-emerald-950/40 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
        <span className="h-2 w-2 rounded-full bg-emerald-400" /> {profile.availability}
      </span>

      <h1 className="mt-5 font-mono text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        {profile.name}
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed tracking-tight text-zinc-300">
        <strong className="font-semibold text-white">{profile.role}</strong> at Infosys. {profile.tagline}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#3662e3] px-6 py-3.5 text-base font-semibold tracking-tight text-white transition hover:brightness-110"
        >
          View my work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center rounded-full border border-border bg-[#111] px-6 py-3.5 text-base font-semibold tracking-tight text-white transition hover:bg-white/5"
        >
          Get in touch
        </Link>
      </div>
      </div>
      <div className="hidden aspect-square w-full max-w-sm justify-self-end lg:block"><HeroOrbit /></div>
      </div>

      <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
        {profile.heroStats.map((s) => (
          <div key={s.label}>
            <dd className="font-mono text-3xl font-bold tracking-tight text-white">{s.value}</dd>
            <dt className={`mt-1.5 ${monoLabel}`}>{s.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-7">
        <h2 className={`mb-3 ${monoLabel}`}>Shipping now</h2>
        <ul className="flex flex-wrap gap-3">
          {featuredProjects.map((p) => {
            const st = statusStyle[p.status];
            return (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}/`}
                  className="flex items-center gap-3 rounded-full border border-border bg-[#0e0e10] py-2 pl-3 pr-6 transition hover:border-zinc-600"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200/40 bg-[#0b1230] font-serif text-base text-white">
                    {p.title.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-base font-semibold leading-tight tracking-tight text-white">{p.title}</span>
                    <span className={`mt-0.5 block font-mono text-[10px] uppercase tracking-[0.16em] ${st.cls}`}>
                      {st.label} · Case study
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
