import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Recognition } from "@/components/sections/Recognition";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Recognition />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
