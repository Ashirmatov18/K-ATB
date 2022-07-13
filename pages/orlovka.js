import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Orlovka from "../src/components/KyrgyzstanDetails/Orlovka";

export default function orlovka() {
  return (
    <div>
      <main>
        <Navbar />
        <Orlovka />
        <Footer />
      </main>
    </div>
  );
}
