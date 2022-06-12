
import React from "react";
import Logo from "./components/media/logo.jpg"
import Home from "./components/navBar_components/Home.js";
import About from "./components/navBar_components/About.js";
import Projects from "./components/navBar_components/Projects.js";
import Skills from "./components/navBar_components/Skills.js";
import Contact from "./components/navBar_components/Contact.js";
export default function Navbar() {
    return (
      <nav id="navBar">
          <section id="logoStatementContainer">
              <img id="pageLogo" alt ="Logo" src={Logo} height="55px" width="55px"/>
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