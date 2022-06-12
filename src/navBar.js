
import React from "react";
import Home from "./components/navBar_components/Home.js";
import About from "./components/navBar_components/About.js";
import Projects from "./components/navBar_components/Projects.js";
import Skills from "./components/navBar_components/Skills.js";
import Contact from "./components/navBar_components/Contact.js";
export default function Navbar() {
    return (
      <nav id="navBar">
          <section id="logoStatementContainer">
              <img id="pageLogo" alt ="Logo" src="localhost:3000/src/components/media/logo.jpg" height="85px" width="85px"/>
              <span id="pageStatement">Site Developed By Me.</span>
          </section>
          <Home/>
          <Projects/>
          <Skills/>
          <About/>
          <Contact/>
      </nav>
      );
}