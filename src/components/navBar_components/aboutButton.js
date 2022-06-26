
import React from "react";

export default function About() {
    return (
        <section className="buttonContainer">
            <div className="btn pageButton" role="button" onClick={() => alert("About")}>
                <span className="buttonName" class="text">About</span>
            </div>
        </section>
    );
}   