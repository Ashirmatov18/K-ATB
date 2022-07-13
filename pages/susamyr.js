import React from "react";
import Footer from "../src/components/Footer/Footer";
import Susamyr from "../src/components/KyrgyzstanDetails/Susamyr";
import Navbar from "../src/components/Navbar/Navbar";

export default function susamyr() {
  return (
    <div>
      <main>
        <Navbar />
        <Susamyr />
        <Footer />
      </main>
    </div>
  );
}
