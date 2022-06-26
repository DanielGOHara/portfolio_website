
import React from "react";
import { Link, browserHistory } from 'react-router'
import Logo from "./components/media/logo.png"
import Line from "./components/navBar_components/line.js";
import Home from "./components/navBar_components/homeButton.js";
import About from "./components/navBar_components/aboutButton.js";
import Projects from "./components/navBar_components/projectsButton.js";
import Skills from "./components/navBar_components/skillsButton.js";
import Contact from "./components/navBar_components/contactButton.js";

export default class Navbar extends React.Component {


    render() {
        return (
        <nav id="navBar">
            <section id="logoStatementContainer">
                <img id="pageLogo" alt ="Logo" src={Logo} height="75px" width="75px"/>
                <span id="pageStatement">Site Developed By Me.</span>
            </section>
            <Home onClick={() => alert("Home")}/>
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