import React from "react";
import Footer from "../src/components/Footer/Footer";
import Chychkan from "../src/components/KyrgyzstanDetails/Chyckan";
import Navbar from "../src/components/Navbar/Navbar";

export default function chychkan() {
  return (
    <div>
      <main>
        <Navbar />
        <Chychkan />
        <Footer />
      </main>
    </div>
  );
}
