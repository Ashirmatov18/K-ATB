import React from "react";
import Footer from "../src/components/Footer/Footer";
import Karakol from "../src/components/KyrgyzstanDetails/KaraKol";
import Navbar from "../src/components/Navbar/Navbar";

export default function karakol() {
  return (
    <div>
      <main>
        <Navbar />
        <Karakol />
        <Footer />
      </main>
    </div>
  );
}
