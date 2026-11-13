import Link from "next/link";
import { cn } from "@/lib/utils";

export function ButtonLink({ href, children, variant = "primary", external }: {
  href: string; children: React.ReactNode; variant?: "primary" | "ghost"; external?: boolean;
}) {
  const cls = cn(
    "inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition",
    variant === "primary" ? "bg-accent text-white hover:brightness-110" : "border border-border hover:bg-white/5"
  );
  return external || href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")
    ? <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
}
