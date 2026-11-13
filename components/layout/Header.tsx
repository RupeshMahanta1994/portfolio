import Link from "next/link";
import { profile } from "@/data/profile";

const nav = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6" aria-label="Primary">
        <Link href="/" className="font-semibold">{profile.name}</Link>
        <ul className="flex items-center gap-5 text-sm text-muted">
          {nav.map((n) => (
            <li key={n.href} className="hidden sm:block"><Link href={n.href} className="hover:text-fg">{n.label}</Link></li>
          ))}
          <li><a href={profile.cv} className="text-fg hover:text-accent">CV</a></li>
        </ul>
      </nav>
    </header>
  );
}
