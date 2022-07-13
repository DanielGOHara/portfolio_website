
import React from "react";
import { setInfo } from "../../infoSection.jsx";

export default function Skills() {
    return (
        <section className="button">
            <div className="btn pageButton" role="button" onClick={() => setInfo("skills")}>
                <span className="buttonName" class="text">Skills</span>
            </div>
        </section>
    );
}