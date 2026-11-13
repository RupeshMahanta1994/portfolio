import { Reveal } from "./Reveal";

export function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>{children}</Reveal>
    </section>
  );
}
