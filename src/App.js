
// Import Necessary Components for the Navigation Bar

import React from "react";
import Navbar from "./components/navBar.js";
import InfoSection from "./components/infoSection.js"
 
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font w-96">
        <Navbar/>
        <InfoSection/>
    </main>
  );
}