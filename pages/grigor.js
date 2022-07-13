import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Grigor from "../src/components/KyrgyzstanDetails/Grigor";

export default function grigor() {
  return (
    <div>
      <main>
        <Navbar />
        <Grigor />
        <Footer />
      </main>
    </div>
  );
}
