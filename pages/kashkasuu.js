import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import KashkaSuu from "../src/components/KyrgyzstanDetails/KashkaSuu";

export default function kashkasuu() {
  return (
    <div>
      <main>
        <Navbar />
        <KashkaSuu />
        <Footer />
      </main>
    </div>
  );
}
