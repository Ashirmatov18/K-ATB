import React from "react";
import Footer from "../src/components/Footer/Footer";
import Kegeti from "../src/components/KyrgyzstanDetails/Kegeti";
import Navbar from "../src/components/Navbar/Navbar";

export default function kashkasuu() {
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
