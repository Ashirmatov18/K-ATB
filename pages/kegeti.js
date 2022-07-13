import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Kegeti from "../src/components/KyrgyzstanDetails/Kegeti";

export default function kegeti() {
  return (
    <div>
      <main>
        <Navbar />
        <Kegeti />
        <Footer />
      </main>
    </div>
  );
}
