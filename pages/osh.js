import React from "react";
import Footer from "../src/components/Footer/Footer";
import Osh from "../src/components/KyrgyzstanDetails/Osh";
import Navbar from "../src/components/Navbar/Navbar";

export default function osh() {
  return (
    <div>
      <main>
        <Navbar />
        <Osh />
        <Footer />
      </main>
    </div>
  );
}
