
import React from "react";
import { setInfo } from "../../infoSection.jsx";
//import { projects } from "../data.js";

export default function Projects() {
    return (
        <section className="button">
            <div className="btn pageButton" role="button" onClick={() => setInfo("projects")}>
                <span className="buttonName" class="text">Projects</span>
            </div>
        </section>
    );
}