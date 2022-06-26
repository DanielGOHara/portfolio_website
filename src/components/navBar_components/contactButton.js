
import React from "react";

export default function Contact() {
    return (
        <section className="buttonContainer">
            <div className="btn pageButton" role="button" onClick={() => alert("Contact")}>
                <span className="buttonName" class="text">Contact</span>
            </div>
        </section>
    );
}