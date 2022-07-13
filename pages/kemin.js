import React from "react";
import Footer from "../src/components/Footer/Footer";
import Kemin from "../src/components/KyrgyzstanDetails/Kemin";
import Navbar from "../src/components/Navbar/Navbar";

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
