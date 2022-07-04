
import React from "react";
import Logo from "./components/media/logo.png"
import Line from "./components/navBar_components/line";
import Home from "./components/navBar_components/homeButton";
import About from "./components/navBar_components/aboutButton";
import Projects from "./components/navBar_components/projectsButton";
import Skills from "./components/navBar_components/skillsButton";
import Contact from "./components/navBar_components/contactButton";

export default class Navbar extends React.Component {
    render() {
        return (
        <nav id="navBar">
            <section id="logoStatementContainer">
                <img id="pageLogo" alt ="Logo" src={Logo} height="75px" width="75px"/>
                <span id="pageStatement">Site Developed By Me.</span>
            </section>
            <Home/>
            <Line/>
            <Projects/>
            <Line/>
            <Skills/>
            <Line/>
            <About/>
            <Line/>
            <Contact/>
        </nav>
        );
    }
}