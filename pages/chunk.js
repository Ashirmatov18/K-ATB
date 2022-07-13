import React from "react";
import Footer from "../src/components/Footer/Footer";
import Chunk from "../src/components/KyrgyzstanDetails/Chunk";
import Navbar from "../src/components/Navbar/Navbar";

export default function chunk() {
  return (
    <div>
      <main>
        <Navbar />
        <Chunk />
        <Footer />
      </main>
    </div>
  );
}
