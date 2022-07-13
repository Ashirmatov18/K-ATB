import React from "react";
import Footer from "../src/components/Footer/Footer";
import Twelve from "../src/components/KyrgyzstanDetails/Twelve";
import Navbar from "../src/components/Navbar/Navbar";

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
