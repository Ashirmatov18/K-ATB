import React from "react";
import Footer from "../src/components/Footer/Footer";
import AlaArcha from "../src/components/KyrgyzstanDetails/AlaArcha";
import Navbar from "../src/components/Navbar/Navbar";

export default function ala() {
  return (
    <div>
      <main>
        <Navbar />
        <AlaArcha />
        <Footer />
      </main>
    </div>
  );
}
