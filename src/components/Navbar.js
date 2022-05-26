
import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
//import { ArrowRightIcon } from "@heroicons/react/solid";
export default function Navbar() {
    return (
      <section id="navBar">
          <Home/>
          <Projects/>
          <Skills/>
          <Contact/>
          <About/>
      </section>
      );
}