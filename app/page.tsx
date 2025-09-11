import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import { Contact } from "lucide-react";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
