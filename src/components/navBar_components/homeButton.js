
import React from "react";
import { setInfo } from "../../infoSection.jsx";

export default function Home() {
    return (
        <section className="button">
            <div className="btn pageButton" role="button" onClick={() => setInfo("home")}>
                <span className="buttonName" class="text">Home</span>
            </div>
        </section>
    );
}   