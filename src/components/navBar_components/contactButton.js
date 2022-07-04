
import React from "react";
import { setInfo } from "../../infoSection";

export default function Contact() {
    return (
        <section className="buttonContainer">
            <div className="btn pageButton" role="button" onClick={() => setInfo("contact")}>
                <span className="buttonName" class="text">Contact</span>
            </div>
        </section>
    );
}