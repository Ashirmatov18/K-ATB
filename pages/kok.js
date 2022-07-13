import React from "react";
import Footer from "../src/components/Footer/Footer";
import Kok from "../src/components/KyrgyzstanDetails/Kok";
import Navbar from "../src/components/Navbar/Navbar";

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
