import React from "react";
import Footer from "../src/components/Footer/Footer";
import Zheti from "../src/components/KyrgyzstanDetails/Zheti";
import Navbar from "../src/components/Navbar/Navbar";

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
