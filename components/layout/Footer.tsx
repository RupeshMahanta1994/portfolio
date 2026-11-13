import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name} · Built in {profile.location}</p>
        <ul className="flex gap-4">
          {profile.socials.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">{s.label}</a></li>
          ))}
          <li><a href={`mailto:${profile.email}`} className="hover:text-fg">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
