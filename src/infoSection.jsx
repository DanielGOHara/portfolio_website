
import React from "react";
import './index.css';
import Home from "./components/infoSection_components/homeContent.js";
import Projects from "./components/infoSection_components/projectsContent.js";
import Skills from "./components/infoSection_components/skillsContent.js";
import About from "./components/infoSection_components/aboutContent.js";
import Contact from "./components/infoSection_components/contactContent.js";

let currentSection = "home";
let updatedSection = "home";
let updated = false;

export default class InfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentSection: Home
    }
  }

  componentDidMount() {
    this.timer();
  } 

  timer() {
    setInterval(() => this.checkSelection(), 5);
  }

  checkSelection() {
    if (updatedSection !== currentSection && updated === true) {
      switch(updatedSection) {
        case "home":
          this.setState({CurrentSection: Home});
          console.log("Home");
          break;
        case "projects":
          this.setState({CurrentSection: Projects});
          console.log("Projects");
          break;
        case "skills":
          this.setState({CurrentSection: Skills});
          console.log("Skills");
          break;
        case "about":
          this.setState({CurrentSection: About});
          console.log("About");
          break;
        case "contact":
          this.setState({CurrentSection: Contact});
          console.log("Contact");
          break;
        default:
          break;
      };
      updated = false;
      currentSection = updatedSection;
    }
  }

  render() {
    return (
      <section id="infoSection">
        <div id="currentSection"><this.state.CurrentSection/></div>
      </section>
    );
  }
}

export const setInfo = (buttonResponse) => {
  updatedSection = buttonResponse;
  updated = true;
}