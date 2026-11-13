import type { Stat } from "@/lib/types";

export function StatRow({ stats }: { stats: Stat[] }) {
  if (!stats.length) return null;
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border border-border bg-surface p-4">
          <dd className="font-mono text-2xl font-semibold">{s.value}</dd>
          <dt className="text-xs text-muted">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
