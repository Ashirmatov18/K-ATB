import React from "react";
import Footer from "../src/components/Footer/Footer";
import Kashkasuu from "../src/components/KyrgyzstanDetails/KashkaSuu";
import Navbar from "../src/components/Navbar/Navbar";

export default function kashkasuu() {
  return (
    <div>
      <main>
        <Navbar />
        <Kashkasuu />
        <Footer />
      </main>
    </div>
  );
}
