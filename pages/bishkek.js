import React from "react";
import Footer from "../src/components/Footer/Footer";
import Bishkek from "../src/components/KyrgyzstanDetails/Bishkek";
import Navbar from "../src/components/Navbar/Navbar";

export default function bishkek() {
  return (
    <div>
      <main>
        <Navbar />
        <Bishkek />
        <Footer />
      </main>
    </div>
  );
}
