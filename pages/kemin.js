import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Kemin from "../src/components/KyrgyzstanDetails/Kemin";

export default function kemin() {
  return (
    <div>
      <main>
        <Navbar />
        <Kemin />
        <Footer />
      </main>
    </div>
  );
}
