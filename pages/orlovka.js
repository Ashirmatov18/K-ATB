import React from "react";
import Footer from "../src/components/Footer/Footer";
import Orlovka from "../src/components/KyrgyzstanDetails/Orlovka";
import Navbar from "../src/components/Navbar/Navbar";

export default function kashkasuu() {
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
