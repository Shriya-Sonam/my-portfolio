import Hero from "../../components/Hero";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
