"use client";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { SmallCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

type Filter = "all" | "completed" | "client" | "archived";
type Sort = "default" | "newest" | "oldest" | "longest" | "shortest" | "team-largest" | "team-smallest";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Projects" }, { id: "completed", label: "Completed" },
  { id: "client", label: "Client Work" }, { id: "archived", label: "Archived" },
];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("default");
  const [showAll, setShowAll] = useState(false);

  const list = useMemo(() => {
    const l = projects.filter((p) => filter === "all" || p.category === filter);
    const by: Record<Sort, ((a: Project, b: Project) => number) | null> = {
      default: null,
      newest: (a, b) => b.year - a.year, oldest: (a, b) => a.year - b.year,
      longest: (a, b) => b.durationWeeks - a.durationWeeks, shortest: (a, b) => a.durationWeeks - b.durationWeeks,
      "team-largest": (a, b) => b.teamSize - a.teamSize, "team-smallest": (a, b) => a.teamSize - b.teamSize,
    };
    const fn = by[sort];
    return fn ? [...l].sort(fn) : l;
  }, [projects, filter, sort]);

  const visible = showAll ? list : list.slice(0, 6);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f.id} role="tab" aria-selected={filter === f.id} onClick={() => setFilter(f.id)}
              className={cn("rounded-full border px-3 py-1 text-sm", filter === f.id ? "border-accent text-fg" : "border-border text-muted hover:text-fg")}>
              {f.label}
            </button>
          ))}
        </div>
        <label className="text-sm text-muted">
          Sort{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded-md border border-border bg-surface px-2 py-1 text-fg">
            <option value="default">Default</option><option value="newest">Newest</option><option value="oldest">Oldest</option>
            <option value="longest">Longest</option><option value="shortest">Shortest</option>
            <option value="team-largest">Team: largest</option><option value="team-smallest">Team: smallest</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => <SmallCard key={p.slug} p={p} />)}
      </div>
      {list.length === 0 && <p className="text-muted">No projects in this category yet.</p>}
      {list.length > 6 && (
        <button onClick={() => setShowAll((s) => !s)} className="mt-6 rounded-lg border border-border px-4 py-2 text-sm hover:bg-white/5">
          {showAll ? "Show fewer" : `Show all ${list.length} projects`}
        </button>
      )}
    </div>
  );
}
