import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Zheti from "../src/components/KyrgyzstanDetails/Zheti";

export default function zheti() {
  return (
    <div>
      <main>
        <Navbar />
        <Zheti />
        <Footer />
      </main>
    </div>
  );
}
