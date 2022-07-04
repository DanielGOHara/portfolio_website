
import React from "react";
import { setInfo } from "../../infoSection.jsx";

export default function About() {
    return (
        <section className="buttonContainer">
            <div className="btn pageButton" role="button" onClick={() => setInfo("about")}>
                <span className="buttonName" class="text">About</span>
            </div>
        </section>
    );
}   