
import React from "react";
import { setInfo } from "../../infoSection.jsx";

export default function Contact() {
    return (
        <section className="button">
            <div className="btn pageButton" role="button" onClick={() => setInfo("contact")}>
                <span className="buttonName" class="text">Contact</span>
            </div>
        </section>
    );
}