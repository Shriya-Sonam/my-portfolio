import Hero from "../../components/Hero";
// import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Experience />
      {/* <Projects /> */}
      <Skills/>
      <Contact />
    </>
  );
}
