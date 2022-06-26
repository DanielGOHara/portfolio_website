
import React from "react";
//import { projects } from "../data.js";

export default function Projects() {
    return (
        <section className="buttonContainer">
            <div className="btn pageButton" role="button" onClick={() => alert("Projects")}>
                <span className="buttonName" class="text">Projects</span>
            </div>
        </section>
    );
}