import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Chychkan from "../src/components/KyrgyzstanDetails/Chyckan";

export default function chychkan() {
  return (
    <div>
      <main>
        <Navbar />
        <Chyckan />
        <Footer />
      </main>
    </div>
  );
}
