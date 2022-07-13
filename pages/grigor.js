import React from "react";
import Footer from "../src/components/Footer/Footer";
import Grigor from "../src/components/KyrgyzstanDetails/Grigor";
import Navbar from "../src/components/Navbar/Navbar";

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
