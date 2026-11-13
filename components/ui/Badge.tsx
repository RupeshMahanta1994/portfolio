import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/types";

const styles: Record<ProjectStatus, string> = {
  live: "border-emerald-500/40 text-emerald-400",
  "in-progress": "border-amber-500/40 text-amber-400",
  archived: "border-border text-muted",
};
const labels: Record<ProjectStatus, string> = { live: "Live", "in-progress": "In progress", archived: "Archived" };

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={cn("rounded-full border px-2.5 py-0.5 font-mono text-xs", styles[status])}>{labels[status]}</span>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-muted">{children}</span>;
}
