import React from "react";
import Footer from "../src/components/Footer/Footer";
import Barskoon from "../src/components/KyrgyzstanDetails/Barskoon";
import Navbar from "../src/components/Navbar/Navbar";

export default function kashkasuu() {
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
