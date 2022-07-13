import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Kok from "../src/components/KyrgyzstanDetails/Kok";

export default function kok() {
  return (
    <div>
      <main>
        <Navbar />
        <Kok />
        <Footer />
      </main>
    </div>
  );
}
