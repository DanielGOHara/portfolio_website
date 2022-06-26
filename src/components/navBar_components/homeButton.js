
import React from "react";

export default function Home() {
    return (
        <section className="buttonContainer">
            <div className="btn pageButton" role="button" onClick={() => alert("Home")}>
                <span className="buttonName" class="text">Home</span>
            </div>
        </section>
    );
}   