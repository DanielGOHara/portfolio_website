
import React from "react";
import Home from "./components/navBar_components/Home.js";
import About from "./components/navBar_components/About.js";
import Projects from "./components/navBar_components/Projects.js";
import Skills from "./components/navBar_components/Skills.js";
import Contact from "./components/navBar_components/Contact.js";
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