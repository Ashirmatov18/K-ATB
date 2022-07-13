import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Twelve from "../src/components/KyrgyzstanDetails/Twelve";

export default function twelve() {
  return (
    <div>
      <main>
        <Navbar />
        <Twelve />
        <Footer />
      </main>
    </div>
  );
}
