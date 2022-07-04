
import React from "react";
import './index.css';
import About from "./components/infoSection_components/aboutContent.js";
import Contact from "./components/infoSection_components/contactContent.js";
import Home from "./components/infoSection_components/homeContent.js";
import Projects from "./components/infoSection_components/projectsContent.js";
import Skills from "./components/infoSection_components/skillsContent.js";

const elementStyle = {
  visibility: 'hidden',
  height: '0px',
  width: '0px'
};

let currentSection = "home";
let sectionElement = document.getElementById({currentSection} + "Section");

export default class InfoSection extends React.Component {

  componentDidMount() {
    //document.getElementById(sectionElement).style.visibility = '';
  }

  updateSection(section) {

  }

  render() {
    return (
      <section id="infoSection">
        <div id="homeSection" style={elementStyle}><Home/></div>
        <div id="projectsSection" style={elementStyle}><Projects/></div>
        <div id="skillsSection" style={elementStyle}><Skills/></div>
        <div id="aboutSection" style={elementStyle}><About/></div>
        <div id="contactSection" style={elementStyle}><Contact/></div>
      </section>
    );
  }
}

export const setInfo = (buttonResponse) => {
  alert(buttonResponse);
}