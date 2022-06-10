
import React from "react";
import Home from "./navBar_components/Home.js";
import About from "./navBar_components/About.js";
import Projects from "./navBar_components/Projects.js";
import Skills from "./navBar_components/Skills.js";
import Contact from "./navBar_components/Contact.js";
export default function Navbar() {
    return (
      <section id="navBar">
          <Home/>
          <Projects/>
          <Skills/>
          <About/>
          <Contact/>
      </section>
      );
}