import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Barskoon from "../src/components/KyrgyzstanDetails/Barskoon";

export default function barskoon() {
  return (
    <div>
      <main>
        <Navbar />
        <Barskoon />
        <Footer />
      </main>
    </div>
  );
}
