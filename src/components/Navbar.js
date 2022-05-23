
import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
//import { ArrowRightIcon } from "@heroicons/react/solid";
export default function Navbar() {
    return (
      <section id="navBar">
          <Projects />
          <Skills />
          <Contact />
          <About />
      </section>
      );
}