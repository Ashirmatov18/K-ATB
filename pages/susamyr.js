import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Susamyr from "../src/components/KyrgyzstanDetails/Susamyr";

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
